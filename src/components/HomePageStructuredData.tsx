import { generateVideoSchema } from '@/lib/structured-data';

export function HomePageStructuredData() {
  const heroVideoSchema = generateVideoSchema({
    name: "Bitcoin Treasury Solutions - Structured Learning For Professionals",
    description: "Learn about Bitcoin Treasury Solutions and our structured Bitcoin learning programs for Australia's professionals.",
    videoId: "KLC-0dgBjEA",
  });

  // Service structured data
  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Bitcoin Education Training",
      "name": "Bitcoin Training",
      "description": "Tailored programs for SME businesses, public companies, and community groups. Whether your organisation wants to understand Bitcoin's potential or prepare for digital asset adoption.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Bitcoin Treasury Solutions"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://bitcointreasurysolutions.com.au/contact"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Bitcoin Consulting",
      "name": "Bitcoin Consulting",
      "description": "One-on-one and small team coaching for deeper guidance. We explore your specific goals, risk tolerance and investment horizon to build customised plans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Bitcoin Treasury Solutions"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://bitcointreasurysolutions.com.au/contact"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Bitcoin Education Workshops",
      "name": "Public Events",
      "description": "Small-group workshops and educational sessions designed for curious investors aged 35 and over. Learn Bitcoin fundamentals in a supportive, jargon-free environment.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Bitcoin Treasury Solutions"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://bitcointreasurysolutions.com.au/events"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(heroVideoSchema),
        }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
