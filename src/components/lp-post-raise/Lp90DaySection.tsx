// LP Post-Raise F2 — 90-Day List | bg #212121
// Two-column: text + bullets left, checklist widget right

const BULLETS = [
  { label: 'Investor update',          detail: 'monthly to your cap table, expected within 30 days of close' },
  { label: 'Board memo and deck',      detail: 'next board meeting, 6–8 weeks post-close typically' },
  { label: 'Website refresh',          detail: 'the raise needs to be reflected on the site' },
  { label: 'Product launch content',   detail: 'the round gives you the moment; the content needs to capture it' },
  { label: 'Press release',            detail: 'funding announcement, product news, partnership' },
  { label: 'Case studies',             detail: 'your new enterprise prospects and investors expect them' },
  { label: 'Competitive landscape',    detail: 'the board keeps asking; your new investors want it in the data room' },
  { label: 'Job descriptions',         detail: "you're hiring across 5–10 roles immediately" },
]

const WIDGET_ROWS = [
  { label: 'Investor update',         due: 'Due in 3 wks' },
  { label: 'Board memo and deck',     due: 'Due in 6 wks' },
  { label: 'Website refresh',         due: 'Due in 4 wks' },
  { label: 'Product launch content',  due: 'Due in 5 wks' },
  { label: 'Press release',           due: 'Due in 2 wks' },
  { label: 'Case studies',            due: 'Due in 8 wks' },
  { label: 'Competitive landscape',   due: 'Due in 6 wks' },
  { label: 'Job descriptions (×10)',  due: 'Due in 2 wks' },
]

function ChecklistWidget() {
  return (
    <div
      className="overflow-hidden w-full"
      style={{
        background: '#1A1A1A',
        border: '0.5px solid rgba(248,248,242,0.10)',
        borderRadius: '2px',
        maxWidth: '500px',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between"
        style={{ padding: '14px 20px', borderBottom: '1px solid rgba(80,80,96,0.20)' }}>
        <span className="font-sans font-semibold" style={{ fontSize: '13px', color: '#F5F5F0' }}>
          Post-raise execution
        </span>
        <span className="font-mono"
          style={{ fontSize: '11px', color: '#1A1A1A', background: '#DEFF00', padding: '3px 8px', borderRadius: '2px', fontWeight: 600 }}>
          Q1 2026
        </span>
      </div>

      {/* Rows */}
      {WIDGET_ROWS.map((row, i) => (
        <div
          key={row.label}
          className="flex items-center justify-between"
          style={{
            padding: '0 20px',
            height: '40px',
            background: i % 2 === 0 ? '#1A1A1A' : '#222222',
          }}
        >
          <div className="flex items-center gap-3">
            <div style={{
              width: '16px', height: '16px',
              border: '1.5px solid rgba(248,248,242,0.30)',
              borderRadius: '2px',
              flexShrink: 0,
            }} />
            <span className="font-sans" style={{ fontSize: '13px', color: '#F5F5F0' }}>{row.label}</span>
          </div>
          <span className="font-mono font-normal" style={{ fontSize: '10px', color: 'rgba(248,248,242,0.40)', letterSpacing: '0.5px' }}>
            {row.due}
          </span>
        </div>
      ))}

      {/* Footer CTA strip */}
      <div
        className="flex items-center justify-between"
        style={{ background: '#DEFF00', padding: '10px 20px', cursor: 'pointer' }}
      >
        <span className="font-mono font-semibold" style={{ fontSize: '12px', color: '#1A1A1A' }}>
          Brief any item in Kojo — 10 minutes to start →
        </span>
      </div>
    </div>
  )
}

export default function Lp90DaySection() {
  return (
    <section
      style={{ background: '#212121', padding: '72px 0' }}
      aria-labelledby="lp-90day-heading"
    >
      <div className="kj-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left: text + bullets */}
          <div className="flex-1 lg:max-w-[560px]">
            <h2
              id="lp-90day-heading"
              className="font-sans font-normal text-kj-light mb-3"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              What&apos;s due in the next 90 days.
            </h2>

            <p className="font-sans font-normal mb-8"
              style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(248,248,242,0.50)' }}>
              No fluff. Just the list.
            </p>

            <ul className="space-y-3 mb-8">
              {BULLETS.map((b) => (
                <li key={b.label} className="flex gap-3">
                  <span className="font-mono shrink-0" style={{ fontSize: '13px', color: '#DEFF00', lineHeight: '1.6' }}>—</span>
                  <span className="font-sans font-light" style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(248,248,242,0.70)' }}>
                    <strong className="font-semibold text-kj-light">{b.label}</strong>
                    {' — '}{b.detail}
                  </span>
                </li>
              ))}
            </ul>

            <p className="font-sans font-normal"
              style={{ fontSize: '16px', lineHeight: '1.65', color: 'rgba(248,248,242,0.75)', maxWidth: '520px' }}>
              All of it is urgent. All of it is high-stakes. You have 10–20% of your attention available for it.
            </p>
          </div>

          {/* Right: checklist widget */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-start lg:justify-end">
            <ChecklistWidget />
          </div>

        </div>
      </div>
    </section>
  )
}
