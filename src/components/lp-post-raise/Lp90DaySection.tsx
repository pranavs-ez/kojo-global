// LP Post-Raise F2 — 90-Day List | bg #212121

const ITEMS = [
  { label: 'Investor update',        due: 'Due in 3 weeks', urgent: true  },
  { label: 'Board memo and deck',    due: 'Due in 6 weeks', urgent: true  },
  { label: 'Website refresh',        due: 'Due in 4 weeks', urgent: false },
  { label: 'Product launch content', due: 'Due in 5 weeks', urgent: false },
  { label: 'Press release',          due: 'Due in 2 weeks', urgent: true  },
  { label: 'Case studies',           due: 'Due in 8 weeks', urgent: false },
  { label: 'Competitive landscape',  due: 'Due in 6 weeks', urgent: true  },
  { label: 'Job descriptions (×10)', due: 'Due in 2 weeks', urgent: true  },
]

function ChecklistDashboard() {
  return (
    <div
      className="overflow-hidden mx-auto"
      style={{
        maxWidth: '680px',
        background: '#1A1A1A',
        border: '1px solid rgba(80,80,96,0.25)',
        borderRadius: '2px',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between"
        style={{ padding: '14px 20px', borderBottom: '1px solid rgba(248,248,242,0.15)' }}>
        <span className="font-sans" style={{ fontSize: '14px', color: '#F5F5F0', fontWeight: 600 }}>Post-raise execution</span>
        <span className="font-mono uppercase"
          style={{ fontSize: '11px', color: '#1A1A1A', background: '#DEFF00', padding: '3px 8px', borderRadius: '2px' }}>Q1 2026</span>
      </div>

      {/* Rows */}
      {ITEMS.map((item, i) => (
        <div
          key={item.label}
          className="flex items-center justify-between"
          style={{
            padding: '0 20px',
            height: '40px',
            background: i % 2 === 0 ? '#1A1A1A' : '#222222',
          }}
        >
          <div className="flex items-center gap-3">
            <div style={{
              width: '18px', height: '18px',
              border: '2px solid rgba(248,248,242,0.40)',
              borderRadius: '2px',
              flexShrink: 0,
            }} />
            <span className="font-sans" style={{ fontSize: '13px', color: '#F5F5F0' }}>{item.label}</span>
          </div>
          <span
            className="font-mono font-normal"
            style={{
              fontSize: '10px',
              color: item.urgent ? '#1A1A1A' : '#F5F5F0',
              background: item.urgent ? '#FF3CAC' : 'rgba(80,80,96,0.30)',
              padding: '2px 8px',
              borderRadius: '2px',
              whiteSpace: 'nowrap',
            }}>
            {item.due}
          </span>
        </div>
      ))}

      {/* CTA strip */}
      <div className="flex items-center justify-between"
        style={{ background: '#DEFF00', height: '36px', padding: '0 20px' }}>
        <span className="font-sans" style={{ fontSize: '13px', color: '#1A1A1A', fontWeight: 600 }}>Brief any item in Kojo — 10 minutes to start →</span>
      </div>
    </div>
  )
}

const LIST = [
  { label: 'Investor update', detail: 'monthly to your cap table, expected within 30 days of close' },
  { label: 'Board memo and deck', detail: 'next board meeting, 6–8 weeks post-close typically' },
  { label: 'Website refresh', detail: 'the raise needs to be reflected on the site' },
  { label: 'Product launch content', detail: 'the round gives you the moment; the content needs to capture it' },
  { label: 'Press release', detail: 'funding announcement, product news, partnership' },
  { label: 'Case studies', detail: 'your new enterprise prospects and investors expect them' },
  { label: 'Competitive landscape', detail: 'the board keeps asking; your new investors want it in the data room' },
  { label: 'Job descriptions', detail: "you're hiring across 5–10 roles immediately" },
]

export default function Lp90DaySection() {
  return (
    <section
      style={{ background: '#212121', padding: '72px 0' }}
      aria-labelledby="lp-90day-heading"
    >
      <div className="kj-container">

        <h2
          id="lp-90day-heading"
          className="font-sans font-normal text-kj-light mb-3"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          What&apos;s due in the next 90 days.
        </h2>

        <p className="font-sans font-normal mb-10"
          style={{ fontSize: '15px', color: 'rgba(248,248,242,0.45)' }}>
          No fluff. Just the list.
        </p>

        <div className="mb-10">
          <ChecklistDashboard />
        </div>

        {/* AEO / SEO plain list */}
        <div className="flex flex-col gap-2" style={{ maxWidth: '680px', margin: '0 auto' }}>
          {LIST.map((item) => (
            <div key={item.label} className="flex gap-2">
              <span className="text-kj-lime font-mono shrink-0 mt-0.5" style={{ fontSize: '12px' }}>—</span>
              <p className="font-sans font-normal text-kj-light" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <strong>{item.label}</strong>
                <span style={{ color: 'rgba(248,248,242,0.50)', fontWeight: 300 }}> — {item.detail}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="font-sans font-normal mt-6 text-center"
          style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(248,248,242,0.40)', maxWidth: '680px', margin: '24px auto 0' }}>
          All of it is urgent. All of it is high-stakes. You have 10–20% of your attention available for it.
        </p>

      </div>
    </section>
  )
}
