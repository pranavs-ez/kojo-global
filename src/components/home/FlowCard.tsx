type FlowCardType = 'input' | 'expert' | 'output'

interface FlowCardProps {
  type: FlowCardType
}

export default function FlowCard({ type }: FlowCardProps) {
  if (type === 'expert') {
    return (
      /* bg #1e1e1e per Figma (167:2353) — was wrongly #191915 */
      <div className="flex flex-col px-5 py-[13px] rounded-[2px] w-full" style={{
        background: '#1e1e1e',
        border: '1px solid rgba(222,255,0,0.9)',
      }}>
        {/* Label row — "02 ·" + "EXPERT AI SYSTEM" as separate spans per Figma */}
        <div className="flex items-baseline gap-0 mb-[26px]">
          <span className="font-mono text-[9px] tracking-[1px]" style={{ color: 'rgba(222,255,0,0.36)' }}>02 ·&nbsp;</span>
          <span className="font-mono text-[9px] tracking-[2.5px]" style={{ color: 'rgba(222,255,0,0.85)' }}>EXPERT AI SYSTEM</span>
        </div>

        <p className="font-sans font-semibold text-[20px] text-kj-light leading-[1.2] mb-[26px]">
          AI + Human Expertise
        </p>

        {/* Process rows — exact text from Figma 167:2358–2365 */}
        <div className="flex flex-col gap-[16px]">
          {/* AI DRAFT */}
          <div className="flex items-center gap-[8px]">
            <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: 'rgba(80,80,96,0.80)' }} />
            <span className="font-mono text-[9px] tracking-[1.5px] shrink-0" style={{ color: 'rgba(80,80,96,0.80)' }}>AI DRAFT</span>
            <span className="font-sans text-[12px]" style={{ color: 'rgba(248,248,242,0.42)' }}>First pass generated</span>
          </div>
          {/* SME REVIEW */}
          <div className="flex items-center gap-[8px]">
            <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: '#DEFF00' }} />
            <span className="font-mono text-[9px] tracking-[1.5px] shrink-0 text-kj-lime">SME REVIEW</span>
            <span className="font-sans text-[12px]" style={{ color: 'rgba(248,248,242,0.42)' }}>Subject matter expert verifies</span>
          </div>
          {/* VERIFIED */}
          <div className="flex items-center gap-[8px]">
            <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: '#A448FA' }} />
            <span className="font-mono text-[9px] tracking-[1.5px] shrink-0 text-kj-primary">VERIFIED</span>
            <span className="font-sans text-[12px]" style={{ color: 'rgba(248,248,242,0.42)' }}>Output approved — business-ready</span>
          </div>
        </div>
      </div>
    )
  }

  const isInput = type === 'input'
  return (
    <div className="flex flex-col px-5 py-[13px] rounded-[2px] w-full" style={{
      background: '#232323',
      border: '1px solid rgba(80,80,96,0.4)',
    }}>
      {/* Label row — split "01 ·" / "YOUR BRIEF" per Figma 167:2347–2348 */}
      <div className="flex items-baseline gap-0 mb-[10px]">
        <span className="font-mono text-[9px] tracking-[1px]" style={{ color: 'rgba(80,80,96,0.36)' }}>
          {isInput ? '01' : '03'}&nbsp;·&nbsp;
        </span>
        <span className="font-mono text-[9px] tracking-[2.5px]" style={{ color: 'rgba(248,248,242,0.35)' }}>
          {isInput ? 'YOUR BRIEF' : 'DELIVERABLE'}
        </span>
      </div>

      <p className="font-sans font-semibold text-[20px] text-kj-light leading-[1.2] mb-[8px]">
        {isInput ? 'Submit a brief' : 'Business-Ready Output'}
      </p>

      <p className="font-sans text-[12px] leading-normal" style={{ color: 'rgba(248,248,242,0.42)' }}>
        {isInput
          ? 'Acknowledged in 10 minutes. Any category, any format.'
          : 'Delivered in hours, not days. Verified. Every time.'}
      </p>
    </div>
  )
}
