import { NextRequest, NextResponse } from 'next/server';
import { fetchCurrentPrice, fetchHistoricalPrice, fetchPriceRange } from '@/lib/bitcoin-price-api';

// Cache for server-side responses
const serverCache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCachedData(key: string) {
  const cached = serverCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}

function setCachedData(key: string, data: unknown) {
  serverCache.set(key, { data, timestamp: Date.now() });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  const startDate = searchParams.get('start');
  const endDate = searchParams.get('end');
  const type = searchParams.get('type');

  try {
    // Current price endpoint
    if (type === 'current') {
      const cacheKey = 'current_price';
      let price = getCachedData(cacheKey);
      
      if (!price) {
        price = await fetchCurrentPrice();
        setCachedData(cacheKey, price);
      }
      
      return NextResponse.json({ 
        success: true, 
        price,
        currency: 'AUD',
        source: process.env.COINGECKO_API_KEY ? 'CoinGecko Pro' : 'CoinGecko Free',
        timestamp: new Date().toISOString()
      });
    }

    // Historical price endpoint
    if (date) {
      const cacheKey = `historical_${date}`;
      let price = getCachedData(cacheKey);
      
      if (!price) {
        const targetDate = new Date(date);
        if (isNaN(targetDate.getTime())) {
          return NextResponse.json({ 
            success: false, 
            error: 'Invalid date format. Use YYYY-MM-DD' 
          }, { status: 400 });
        }
        
        price = await fetchHistoricalPrice(targetDate);
        setCachedData(cacheKey, price);
      }
      
      return NextResponse.json({ 
        success: true, 
        price,
        currency: 'AUD',
        date,
        source: process.env.COINGECKO_API_KEY ? 'CoinGecko Pro' : 'CoinGecko Free',
        timestamp: new Date().toISOString()
      });
    }

    // Price range endpoint
    if (startDate && endDate) {
      const cacheKey = `range_${startDate}_${endDate}`;
      let priceData = getCachedData(cacheKey);
      
      if (!priceData) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
          return NextResponse.json({ 
            success: false, 
            error: 'Invalid date format. Use YYYY-MM-DD' 
          }, { status: 400 });
        }
        
        if (start >= end) {
          return NextResponse.json({ 
            success: false, 
            error: 'Start date must be before end date' 
          }, { status: 400 });
        }
        
        // Limit range to 365 days to prevent API abuse
        const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        if (daysDiff > 365) {
          return NextResponse.json({ 
            success: false, 
            error: 'Date range too large. Maximum 365 days allowed.' 
          }, { status: 400 });
        }
        
        priceData = await fetchPriceRange(start, end);
        setCachedData(cacheKey, priceData);
      }
      
      return NextResponse.json({ 
        success: true, 
        data: priceData,
        currency: 'AUD',
        startDate,
        endDate,
        source: process.env.COINGECKO_API_KEY ? 'CoinGecko Pro' : 'CoinGecko Free',
        timestamp: new Date().toISOString()
      });
    }

    // No valid parameters provided
    return NextResponse.json({ 
      success: false, 
      error: 'Missing required parameters. Use ?type=current, ?date=YYYY-MM-DD, or ?start=YYYY-MM-DD&end=YYYY-MM-DD' 
    }, { status: 400 });

  } catch (error) {
    console.error('Bitcoin price API error:', error);
    
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to fetch Bitcoin price data' 
    }, { status: 500 });
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
