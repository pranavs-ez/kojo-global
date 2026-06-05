// Founders F5 — The Anchor (Why Kojo) | bg #212121
// 3 VOC problem cards + comparison table

const PROBLEMS = [
  {
    label: 'Agency',
    pain: 'Three weeks to deliver. A kickoff call you had to run. A retainer before a word was written.',
    quote: '"I was the one leading the charge for my own business."',
    attr: '— Richard Fleming, founder',
  },
  {
    label: 'Freelancer',
    pain: '50 bids. One candidate worth testing. They flaked in week two.',
    quote: '"You\'ll spend more time babysitting and managing them than you would stand to gain from their job."',
    attr: '— Nomad Capitalist',
  },
  {
    label: 'AI tools',
    pain: 'The tone was always off. You spent an hour prompting and still had to rewrite it.',
    quote: '"I felt like I had to do more editing than actually using what it generated."',
    attr: '— Founder, Copy.ai user',
  },
]

const TABLE_ROWS = [
  { attr: 'Cost',            agency: '$2,000–$5,000',           kojo: 'From $60'           },
  { attr: 'Delivery',        agency: '1–2 weeks',               kojo: '8 hours'            },
  { attr: 'What you manage', agency: 'The account',             kojo: 'The brief'          },
  { attr: 'First payment',   agency: 'Retainer before work starts', kojo: 'On delivery only' },
]

export default function FoundersAnchorSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="founders-anchor-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          WHY KOJO
        </p>

        <h2
          id="founders-anchor-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Not an agency. Not a freelancer. Not a tool.
        </h2>

        {/* Problem cards — label → pain → quote (matches Figma order) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {PROBLEMS.map((p) => (
            <div
              key={p.label}
              className="p-6 flex flex-col"
              style={{
                background: 'rgba(80,80,96,0.08)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                borderRadius: '2px',
              }}
            >
              <p className="font-mono font-normal text-kj-lime uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '2px' }}>
                {p.label}
              </p>
              <p className="font-sans font-normal text-kj-light mb-4 flex-1" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                {p.pain}
              </p>
              <blockquote
                className="font-sans font-light italic"
                style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(248,248,242,0.45)', borderLeft: '2px solid rgba(80,80,96,0.35)', paddingLeft: '12px' }}
              >
                {p.quote}
                <footer className="mt-2 not-italic font-mono" style={{ fontSize: '10px', color: 'rgba(248,248,242,0.25)' }}>{p.attr}</footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <table className="w-full border-collapse" style={{ minWidth: '400px' }}>
            <thead>
              <tr style={{ background: 'rgba(80,80,96,0.10)' }}>
                <th className="text-left font-mono font-normal" style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(248,248,242,0.25)', padding: '12px 16px', borderBottom: '1px solid rgba(80,80,96,0.25)', width: '30%' }}></th>
                <th className="text-left font-mono font-normal" style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(248,248,242,0.35)', padding: '12px 16px', borderBottom: '1px solid rgba(80,80,96,0.25)' }}>AGENCY</th>
                <th className="text-left font-mono font-normal" style={{ fontSize: '10px', letterSpacing: '2px', color: '#DEFF00', padding: '12px 16px', borderBottom: '1px solid rgba(80,80,96,0.25)' }}>KOJO</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((r) => (
                <tr key={r.attr} style={{ borderBottom: '1px solid rgba(80,80,96,0.14)' }}>
                  <td className="font-sans font-semibold text-kj-light" style={{ fontSize: '13px', padding: '13px 16px' }}>{r.attr}</td>
                  <td className="font-sans font-light" style={{ fontSize: '13px', color: 'rgba(248,248,242,0.40)', padding: '13px 16px' }}>{r.agency}</td>
                  <td className="font-sans font-normal text-kj-light" style={{ fontSize: '13px', padding: '13px 16px' }}>{r.kojo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}
