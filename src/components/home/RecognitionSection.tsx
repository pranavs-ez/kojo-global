const COLUMNS = [
  {
    label: 'Freelancers',
    body: 'Ghosted. Flaked. Three times the revisions you expected. You spent more time managing them than they saved you. They disappeared before the deadline. The invoice came anyway.',
    quote: '"You\'ll spend more time babysitting and managing them than you would stand to gain from their job."',
    attribution: '— Nomad Capitalist',
  },
  {
    label: 'Agencies',
    body: 'A retainer, a kickoff call, and three weeks later — you\'re still waiting. Then the deck arrived and you had to rewrite half of it yourself. The strategy you paid for was yours to begin with.',
    quote: '"I was the one leading the charge for my own business."',
    attribution: '— Richard Fleming, founder',
  },
  {
    label: 'AI tools',
    body: 'The tone was always off. Every output needed heavy editing. It felt like more work than writing it yourself. You spent an hour prompting. The post still needed rewriting.',
    quote: '"I felt like I had to do more editing than actually using what it generated."',
    attribution: '— Founder, Copy.ai user, Capterra',
  },
]

export default function RecognitionSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="recognition-heading"
    >
      <div className="kj-container">
        <h2
          id="recognition-heading"
          className="font-sans font-regular text-[48px] text-kj-light leading-[1.15] tracking-[-0.02em] mb-12"
        >
          Sound familiar?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {COLUMNS.map((col) => (
            <div key={col.label} className="flex flex-col gap-4">
              <p className="font-sans font-semibold text-[16px] text-kj-light">
                {col.label}
              </p>
              <div className="w-full h-px" style={{ background: 'rgba(80,80,96,0.30)' }} />
              <p className="font-sans text-[13px] leading-[1.7]" style={{ color: 'rgba(248,248,242,0.55)' }}>
                {col.body}
              </p>
              <p className="font-sans text-[13px] leading-[1.6] italic mt-2" style={{ color: 'rgba(248,248,242,0.75)' }}>
                {col.quote}
              </p>
              <p className="font-sans text-[13px] leading-normal" style={{ color: '#505060' }}>
                {col.attribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
