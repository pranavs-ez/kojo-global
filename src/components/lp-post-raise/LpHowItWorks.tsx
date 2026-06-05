// LP Post-Raise F3 — How Kojo Works | bg #181818

const STEPS = [
  { num: '1', title: 'Brief',            body: 'Answer 8 guided questions. Ten minutes. No vague prompts.' },
  { num: '2', title: 'Expert delivers',  body: 'AI drafts. A subject matter expert reviews, corrects, and approves before it reaches you.' },
  { num: '3', title: 'Done',             body: 'Business-ready output in your inbox. No chasing. No revision cycle.' },
]

export default function LpHowItWorks() {
  return (
    <section
      style={{ background: '#181818', padding: '72px 0' }}
      aria-labelledby="lp-hiw-heading"
    >
      <div className="kj-container">

        <h2
          id="lp-hiw-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          How Kojo works.
        </h2>

        <div className="flex flex-col md:flex-row gap-0 mb-8">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="flex-1 p-6"
              style={{
                borderTop: '2px solid rgba(222,255,0,0.30)',
                borderRight: i < STEPS.length - 1 ? '1px solid rgba(80,80,96,0.15)' : 'none',
              }}
            >
              <p className="font-mono text-kj-lime mb-3" style={{ fontSize: '28px', fontWeight: 300, lineHeight: 1 }}>{s.num}</p>
              <p className="font-sans font-semibold text-kj-light mb-2" style={{ fontSize: '16px', lineHeight: '1.4' }}>{s.title}</p>
              <p className="font-sans font-light" style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(248,248,242,0.50)' }}>{s.body}</p>
            </div>
          ))}
        </div>

        <p className="font-sans font-normal"
          style={{ fontSize: '15px', color: 'rgba(248,248,242,0.40)' }}>
          You don&apos;t manage the expert. You manage the brief.
        </p>

      </div>
    </section>
  )
}
