import { Container } from '@/components/Container';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Bitcoin Treasury Solutions - Learn how we collect, use, and protect your personal information.',
};

async function getPrivacyPolicy() {
  const filePath = join(process.cwd(), 'src', 'PRIVACY.md');
  const content = await readFile(filePath, 'utf-8');
  return content;
}

export default async function PrivacyPage() {
  const content = await getPrivacyPolicy();

  return (
    <div className='min-h-screen bg-background'>
      <Container className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto'>
          {/* Page Header */}
          <div className='text-center mb-16'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 font-display mb-6'>
              Privacy Policy
            </h1>
          </div>

          {/* Content */}
          <div className='prose prose-primary max-w-none'>
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </Container>
    </div>
  );
}

