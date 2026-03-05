export function MissionValues() {
  const values = [
    {
      title: "Knowledge builds trust",
      description: "Clear explanations and real‑world examples help investors feel confident."
    },
    {
      title: "Risk must be understood",
      description: "We are risk‑averse by nature but recognise that taking no risk can be riskier; we advocate slow, certain growth."
    },
    {
      title: "Empowerment over hype",
      description: "We do not sell fast fortunes or push products — we teach you to make informed decisions."
    },
    {
      title: "Holistic perspective",
      description: "Bitcoin sits alongside traditional assets as part of a diversified strategy. Understanding personal finance and technology together gives you a complete picture."
    },
    {
      title: "Fiercely local & personal",
      description: "We are Melbourne based and can travel interstate on request. We believe trust is earned through face‑to‑face interactions and transparency. Building relationships with you in person is central to how we work."
    }
  ];

  return (
    <section className='space-y-8'>
      <div className='text-center'>
        <h2
          className='text-2xl sm:text-3xl font-bold'
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}
        >
          Mission & Values
        </h2>
      </div>

      <div className='space-y-6'>
        <div className='text-center'>
          <p
            className='text-base leading-relaxed max-w-2xl mx-auto'
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
          >
            Our mission is to make Bitcoin education accessible, practical and grounded in reality. We believe that:
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          {values.map((value, index) => (
            <div
              key={index}
              className='p-6 rounded-xl'
              style={{
                backgroundColor: 'var(--color-gold-light)',
                borderLeft: '4px solid var(--color-gold)',
                border: '1px solid var(--color-border)',
                borderLeftWidth: '4px',
                borderLeftColor: 'var(--color-gold)',
              }}
            >
              <h3
                className='text-base font-semibold mb-2'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)' }}
              >
                {value.title}
              </h3>
              <p
                className='text-sm leading-relaxed'
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
