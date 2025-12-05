import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Bitcoin Treasury Solutions - Read our terms and conditions for using our services.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsOfServicePage() {
  const termsPath = path.join(process.cwd(), 'TERMS_OF_SERVICE.md');
  const content = fs.readFileSync(termsPath, 'utf8');

  return (
    <div className='bg-background'>
      <Container className='py-16'>
        <MarkdownRenderer content={content} />
      </Container>
    </div>
  );
}


