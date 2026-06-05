// Founders F2 — The Problem | bg #212121
// Two-column: text left + dashboard graphic right

const TASKS = [
  { label: 'Investor update',        due: '30 days',  urgent: true  },
  { label: 'Board memo and deck',    due: '45 days',  urgent: true  },
  { label: 'Website refresh',        due: '30 days',  urgent: false },
  { label: 'Product launch content', due: '45 days',  urgent: false },
  { label: 'Press release',          due: '14 days',  urgent: true  },
  { label: 'Case studies',           due: '60 days',  urgent: false },
  { label: 'Competitive landscape',  due: '45 days',  urgent: true  },
  { label: 'Job descriptions (×10)', due: '14 days',  urgent: true  },
]

function PostRaiseDashboard() {
  return (
    <div
      className="shrink-0 overflow-hidden"
      style={{ width: '100%', maxWidth: '480px', background: '#1E1E1E', border: '0.5px solid rgba(248,248,242,0.10)', borderRadius: '2px' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between"
        style={{ background: '#252525', height: '44px', padding: '0 20px' }}>
        <span className="font-sans" style={{ fontSize: '12px', color: '#F5F5F0', fontWeight: 600 }}>Post-raise execution</span>
        <span className="font-mono uppercase" style={{ fontSize: '10px', color: '#DEFF00', background: 'rgba(222,255,0,0.10)', padding: '3px 8px', borderRadius: '2px' }}>90-day plan</span>
      </div>

      <div style={{ height: '1px', background: 'rgba(80,80,96,0.25)' }} />

      {/* Task rows */}
      {TASKS.map((t, i) => (
        <div
          key={t.label}
          className="flex items-center justify-between"
          style={{
            padding: '0 16px',
            height: '38px',
            background: i % 2 === 0 ? '#1E1E1E' : '#222222',
            borderLeft: `3px solid ${t.urgent ? '#FF3CAC' : 'rgba(80,80,96,0.30)'}`,
          }}
        >
          <span className="font-sans" style={{ fontSize: '12px', color: t.urgent ? '#F5F5F0' : '#888' }}>
            {t.label}
          </span>
          <span className="font-mono" style={{ fontSize: '10px', color: t.urgent ? '#FF3CAC' : 'rgba(80,80,96,0.50)' }}>
            {t.due}
          </span>
        </div>
      ))}

      {/* Footer CTA strip */}
      <div
        className="flex items-center justify-between"
        style={{ background: '#DEFF00', height: '36px', padding: '0 16px' }}>
        <span className="font-sans" style={{ fontSize: '11px', color: '#1A1A1A', fontWeight: 600 }}>Brief any item — 10 min to start</span>
        <span className="font-sans" style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 700 }}>→</span>
      </div>
    </div>
  )
}

export default function FoundersProblemSection() {
  return (
    <section
      className="kj-section kj-section-border"
      style={{ background: '#212121' }}
      aria-labelledby="founders-problem-heading"
    >
      <div className="kj-container">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">

          {/* Left */}
          <div className="flex-1 lg:max-w-[520px]">
            <p className="font-mono font-normal text-kj-lime uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '3px', lineHeight: '1.2' }}>
              THE PROBLEM
            </p>
            <h2
              id="founders-problem-heading"
              className="font-sans font-normal text-kj-light mb-5"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              Your board expects execution. Your team is still twelve people.
            </h2>
            <p className="font-sans font-normal mb-5"
              style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(248,248,242,0.55)' }}>
              Everything on the right needs to be done in 90 days. All of it looks like it belongs on a Series B company&apos;s website. You have 10–20% of your attention for marketing and communications. That&apos;s the math.
            </p>
            <blockquote
              className="font-sans font-light italic"
              style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(248,248,242,0.40)', borderLeft: '2px solid rgba(222,255,0,0.40)', paddingLeft: '16px' }}>
              &ldquo;Marketing gets 10–20% of founder attention while building product, talking to customers, and managing runway.&rdquo;
              <footer className="mt-2 not-italic" style={{ fontSize: '12px', color: 'rgba(248,248,242,0.30)' }}>— Averi.ai, 2026</footer>
            </blockquote>
          </div>

          {/* Right */}
          <div className="flex lg:justify-end lg:flex-1">
            <PostRaiseDashboard />
          </div>

        </div>
      </div>
    </section>
  )
}
