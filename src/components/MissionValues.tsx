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
      description: "We do not sell fast fortunes or push products—we teach you to make informed decisions."
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
        <h2 className='text-3xl sm:text-4xl font-bold text-primary-900 font-display mb-6'>
          Mission & Values
        </h2>
      </div>
      
      <div className='space-y-8'>
        <div className='text-center'>
          <p className='text-xl text-primary-900 font-body leading-relaxed max-w-3xl mx-auto'>
            Our mission is to make Bitcoin education accessible, practical and grounded in reality. We believe that:
          </p>
        </div>
        
        <div className='grid gap-6 md:grid-cols-2 md:gap-8'>
          {values.map((value, index) => (
            <div key={index} className='bg-accent-50 p-6 rounded-lg border-l-4 border-accent-500'>
              <h3 className='text-xl font-semibold text-primary-900 font-display mb-3'>
                {value.title}
              </h3>
              <p className='text-primary-800 font-body leading-relaxed'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
