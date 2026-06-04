// FlowCard — exact pixel values from Figma nodes 167:2346 / 167:2353 / 167:2368
// Input/Output: 396×108px  |  Expert: 396×200px

type FlowCardType = 'input' | 'expert' | 'output'

export default function FlowCard({ type }: { type: FlowCardType }) {

  /* ── 02 Expert AI — 396×200, #1e1e1e, lime border ─────────────────────── */
  if (type === 'expert') {
    return (
      <div
        className="relative w-full rounded-[2px]"
        style={{
          height: '200px',
          background: '#1e1e1e',
          border: '1px solid rgba(222,255,0,0.9)',
        }}
      >
        {/* Label row — "02 ·" (rgba(222,255,0,0.36), 1px) + "EXPERT AI SYSTEM" (rgba(222,255,0,0.85), 2.5px) */}
        <div className="absolute flex items-baseline" style={{ left: '19px', top: '13px' }}>
          <span className="font-mono text-[9px] leading-normal" style={{ color: 'rgba(222,255,0,0.36)', letterSpacing: '1px' }}>
            02 ·&nbsp;
          </span>
          <span className="font-mono text-[9px] leading-normal" style={{ color: 'rgba(222,255,0,0.85)', letterSpacing: '2.5px' }}>
            EXPERT AI SYSTEM
          </span>
        </div>

        {/* H3 — top: 39px per Figma */}
        <p
          className="absolute font-sans font-semibold text-kj-light"
          style={{ left: '19px', top: '39px', fontSize: '20px', lineHeight: '1.2' }}
        >
          AI + Human Expertise
        </p>

        {/* Row 1 — AI DRAFT (dot top=91, label top=90, desc top=89) */}
        <span
          className="absolute rounded-full"
          style={{ left: '19px', top: '91px', width: '5px', height: '5px', background: 'rgba(80,80,96,0.80)' }}
        />
        <span
          className="absolute font-mono text-[9px]"
          style={{ left: '33px', top: '90px', color: 'rgba(80,80,96,0.80)', letterSpacing: '1.5px' }}
        >
          AI DRAFT
        </span>
        <span
          className="absolute font-sans text-[12px]"
          style={{ left: '139px', top: '89px', color: 'rgba(248,248,242,0.42)' }}
        >
          First pass generated
        </span>

        {/* Row 2 — SME REVIEW (dot top=123) */}
        <span
          className="absolute rounded-full"
          style={{ left: '19px', top: '123px', width: '5px', height: '5px', background: '#DEFF00' }}
        />
        <span
          className="absolute font-mono text-[9px] text-kj-lime"
          style={{ left: '33px', top: '122px', letterSpacing: '1.5px' }}
        >
          SME REVIEW
        </span>
        <span
          className="absolute font-sans text-[12px]"
          style={{ left: '139px', top: '121px', color: 'rgba(248,248,242,0.42)' }}
        >
          Subject matter expert verifies
        </span>

        {/* Row 3 — VERIFIED (dot top=155) */}
        <span
          className="absolute rounded-full"
          style={{ left: '19px', top: '155px', width: '5px', height: '5px', background: '#A448FA' }}
        />
        <span
          className="absolute font-mono text-[9px] text-kj-primary"
          style={{ left: '33px', top: '154px', letterSpacing: '1.5px' }}
        >
          VERIFIED
        </span>
        <span
          className="absolute font-sans text-[12px]"
          style={{ left: '139px', top: '153px', color: 'rgba(248,248,242,0.42)' }}
        >
          Output approved — business-ready
        </span>
      </div>
    )
  }

  /* ── 01 Input / 03 Output — 396×108, #232323, slate border ─────────────── */
  const isInput = type === 'input'
  return (
    <div
      className="relative w-full rounded-[2px]"
      style={{
        height: '108px',
        background: '#232323',
        border: '1px solid rgba(80,80,96,0.4)',
      }}
    >
      {/* Label row */}
      <div className="absolute flex items-baseline" style={{ left: '19px', top: '13px' }}>
        <span className="font-mono text-[9px]" style={{ color: 'rgba(80,80,96,0.36)', letterSpacing: '1px' }}>
          {isInput ? '01' : '03'}&nbsp;·&nbsp;
        </span>
        <span className="font-mono text-[9px]" style={{ color: 'rgba(248,248,242,0.35)', letterSpacing: '2.5px' }}>
          {isInput ? 'YOUR BRIEF' : 'DELIVERABLE'}
        </span>
      </div>

      {/* H3 — top: 37px */}
      <p
        className="absolute font-sans font-semibold text-kj-light"
        style={{ left: '19px', top: '37px', fontSize: '20px', lineHeight: '1.2' }}
      >
        {isInput ? 'Submit a brief' : 'Business-Ready Output'}
      </p>

      {/* Description — top: 69px */}
      <p
        className="absolute font-sans text-[12px]"
        style={{ left: '19px', top: '69px', color: 'rgba(248,248,242,0.42)' }}
      >
        {isInput
          ? 'Acknowledged in 10 minutes. Any category, any format.'
          : 'Delivered in hours, not days. Verified. Every time.'}
      </p>
    </div>
  )
}
