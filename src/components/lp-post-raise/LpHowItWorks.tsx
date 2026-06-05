// LP Post-Raise F3 — How Kojo Works | bg #181818
// 3-step grid, quiet card bg, gaps (no dividers)

const STEPS = [
  {
    num: '01',
    title: 'Brief',
    body: 'Answer 8 guided questions. Ten minutes. No vague prompts.',
  },
  {
    num: '02',
    title: 'Expert delivers',
    body: 'AI drafts. A subject matter expert reviews, corrects, and approves before it reaches you.',
  },
  {
    num: '03',
    title: 'Done',
    body: 'Business-ready output in your inbox. No chasing. No revision cycle.',
  },
]

export default function LpHowItWorks() {
  return (
    <section
      className="kj-section-border"
      style={{ background: '#181818', padding: '72px 0' }}
      aria-labelledby="lp-hiw-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          THE PROCESS
        </p>

        <h2
          id="lp-hiw-heading"
          className="font-sans font-normal text-kj-light mb-10"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          How Kojo works.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="p-6"
              style={{
                background: 'rgba(80,80,96,0.12)',
                borderRadius: '2px',
              }}
            >
              <p className="font-mono text-kj-lime mb-4" style={{ fontSize: '28px', fontWeight: 300, lineHeight: 1 }}>{s.num}</p>
              <p className="font-sans font-semibold text-kj-light mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>{s.title}</p>
              <p className="font-sans font-light" style={{ fontSize: '14px', lineHeight: '1.65', color: 'rgba(248,248,242,0.50)' }}>{s.body}</p>
            </div>
          ))}
        </div>

        <p className="font-sans font-normal"
          style={{ fontSize: '14px', color: 'rgba(248,248,242,0.40)' }}>
          You don&apos;t manage the expert. You manage the brief.
        </p>

      </div>
    </section>
  )
}
