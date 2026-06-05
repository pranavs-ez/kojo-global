// Founders F4 — How It Works | bg #1e1e1e
// 3-step horizontal row

const STEPS = [
  {
    num: '1',
    title: 'Brief (10 minutes)',
    body: 'The guided wizard asks the eight questions that determine output quality — audience, tone, format, deadline, key messages. Most founders finish between calls.',
  },
  {
    num: '2',
    title: 'Expert delivers (hours)',
    body: 'AI drafts. A subject matter expert reviews, corrects, and approves before the output leaves the system.',
  },
  {
    num: '3',
    title: 'Done',
    body: 'Business-ready output in your inbox. No revision loop. No chasing. You manage the brief, not the expert.',
  },
]

export default function FoundersProcessSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#1e1e1e' }}
      aria-labelledby="founders-process-heading"
    >
      <div className="kj-container">

        <p className="font-mono font-normal text-kj-lime uppercase mb-4"
          style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
          THE PROCESS
        </p>

        <h2
          id="founders-process-heading"
          className="font-sans font-normal text-kj-light mb-12"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Three steps. Ten minutes to start.
        </h2>

        <div className="flex flex-col md:flex-row gap-0">
          {STEPS.map((s, i) => (
            <div key={s.num} className="flex md:flex-col flex-1">
              {/* Step content */}
              <div
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
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
