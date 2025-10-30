import fs from 'fs';
import path from 'path';
import { Container } from '@/components/Container';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

export const dynamic = 'force-static';

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


