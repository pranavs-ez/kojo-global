// Founders F3 — What Founders Brief Most | bg #181818
// 2×3 card grid

const BRIEFS = [
  { title: 'Investor update email',    desc: 'Monthly communication to your cap table — format, tone, and key metrics.',                               kojo: '40,000 Kojo ($40)',  agency: '$800–$1,500',   delivery: '4 hours'  },
  { title: 'Board memo',               desc: 'Pre-read for the board meeting — narrative, financials, key decisions required.',                         kojo: '60,000 Kojo ($60)',  agency: '$2,000–$5,000', delivery: '8 hours'  },
  { title: 'Competitive landscape',    desc: 'Named competitors, sourced intelligence, analyst-grade formatting.',                                      kojo: '250,000 Kojo ($250)', agency: '$8,000–$15,000', delivery: '24 hours' },
  { title: 'Website copy refresh',     desc: 'Messaging that reflects your current positioning and the raise.',                                        kojo: '80,000 Kojo ($80)',  agency: '$2,000–$5,000', delivery: '8 hours'  },
  { title: 'Press release',            desc: 'Funding announcement, product launch, or partnership — formatted to wire standards.',                    kojo: '40,000 Kojo ($40)',  agency: '$800–$1,500',   delivery: '4 hours'  },
  { title: 'Job descriptions',         desc: 'Consistent voice across 10+ JDs for engineering, GTM, and ops.',                                        kojo: '20,000 Kojo ($20) each', agency: '$300–$600 each', delivery: '2 hours' },
]

export default function FoundersWhatToSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#181818' }}
      aria-labelledby="founders-what-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          WHAT TO BRIEF
        </p>

        <h2
          id="founders-what-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          What founders brief in the first 90 days
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BRIEFS.map((b) => (
            <div
              key={b.title}
              className="flex flex-col p-6"
              style={{
                background: 'rgba(80,80,96,0.08)',
                border: '0.5px solid rgba(248,248,242,0.07)',
                borderRadius: '2px',
              }}
            >
              <p className="font-sans font-semibold text-kj-light mb-2" style={{ fontSize: '15px', lineHeight: '1.4' }}>
                {b.title}
              </p>
              <p className="font-sans font-light flex-1 mb-4"
                style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(248,248,242,0.50)' }}>
                {b.desc}
              </p>
              <div style={{ borderTop: '1px solid rgba(80,80,96,0.20)', paddingTop: '12px' }}>
                <p className="font-mono" style={{ fontSize: '12px', color: '#DEFF00' }}>From {b.kojo}</p>
                <p className="font-sans font-light" style={{ fontSize: '12px', color: 'rgba(248,248,242,0.30)', marginTop: '2px' }}>
                  Agency: {b.agency} · Delivered in {b.delivery}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
