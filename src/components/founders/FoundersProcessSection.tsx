// Founders F4 — How It Works | bg #1e1e1e
// 3-step grid with quiet card bg, gaps (no dividers)

const STEPS = [
  {
    num: '01',
    title: 'Brief (10 minutes)',
    body: 'The guided wizard asks the eight questions that determine output quality — audience, tone, format, deadline, key messages. Most founders finish between calls.',
  },
  {
    num: '02',
    title: 'Expert delivers (hours)',
    body: 'AI drafts. A subject matter expert reviews, corrects, and approves before the output leaves the system.',
  },
  {
    num: '03',
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
          className="font-sans font-normal text-kj-light mb-10"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          Three steps. Ten minutes to start.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      </div>
    </section>
  )
}
