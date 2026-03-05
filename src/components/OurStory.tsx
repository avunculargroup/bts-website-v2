export function OurStory() {
  return (
    <section className='space-y-6'>
      <div className='text-center'>
        <h2
          className='text-2xl sm:text-3xl font-bold'
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
        >
          Our Story
        </h2>
      </div>

      <div className='space-y-4 max-w-none' style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
        <p>
          Bitcoin Treasury Solutions is Melbourne based. We were founded by <strong style={{ color: 'var(--color-text-primary)' }}>Carri</strong> and <strong style={{ color: 'var(--color-text-primary)' }}>Chris</strong>, two self‑confessed finance and technology nerds who wanted to cut through the noise surrounding Bitcoin. After decades of coaching Australia&apos;s top executives and careful personal Bitcoin investing, they realised that many people were curious about Bitcoin but didn&apos;t know where to turn for trustworthy guidance. BTS exists to be that reasonable voice in the room, helping you understand Bitcoin&apos;s role in the changing face of money.
        </p>

        <p>
          Carri and Chris are fiercely local and personal. As a Melbourne-based business, they can travel interstate to deliver workshops that build trust through human connection and ensure every client feels heard. This emphasis on personal presence and genuine relationships underpins the way BTS delivers education.
        </p>
      </div>
    </section>
  );
}
