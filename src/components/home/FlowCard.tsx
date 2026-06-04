type FlowCardType = 'input' | 'expert' | 'output'

interface FlowCardProps {
  type: FlowCardType
}

export default function FlowCard({ type }: FlowCardProps) {
  if (type === 'expert') {
    return (
      <div className="flex flex-col gap-[10px] px-5 py-4 rounded-[2px] border border-kj-lime/90 bg-[#191915] w-full">
        <p className="font-mono text-[9px] text-kj-lime/85 tracking-[0.045px]">
          02 · EXPERT AI SYSTEM
        </p>
        <p className="font-sans font-semibold text-[20px] text-kj-light leading-normal">
          AI + Human Expertise
        </p>
        <div className="flex flex-col gap-2 mt-1">
          {/* AI DRAFT row */}
          <div className="flex items-center gap-2">
            <span className="w-[5px] h-[5px] rounded-full bg-kj-slate/80 shrink-0" />
            <span className="font-mono text-[9px] text-kj-slate/80">AI DRAFT</span>
            <span className="font-sans text-[12px] text-kj-light/[0.42] flex-1">
              Drafts and structures against brief
            </span>
          </div>
          {/* SME REVIEW row */}
          <div className="flex items-center gap-2">
            <span className="w-[5px] h-[5px] rounded-full bg-kj-lime shrink-0" />
            <span className="font-mono text-[9px] text-kj-lime">SME REVIEW</span>
            <span className="font-sans text-[12px] text-kj-light/[0.42] flex-1">
              Expert reviews, corrects and approves
            </span>
          </div>
          {/* VERIFIED row */}
          <div className="flex items-center gap-2">
            <span className="w-[5px] h-[5px] rounded-full bg-kj-primary shrink-0" />
            <span className="font-mono text-[9px] text-kj-primary">VERIFIED</span>
            <span className="font-sans text-[12px] text-kj-light/[0.42] flex-1">
              Business-ready output confirmed
            </span>
          </div>
        </div>
      </div>
    )
  }

  const isInput = type === 'input'
  return (
    <div className="flex flex-col gap-[6px] px-5 py-4 rounded-[2px] border border-kj-slate/40 bg-surface-card w-full">
      <p className="font-mono text-[9px] text-kj-slate/70 tracking-[0.045px]">
        {isInput ? '01 · YOUR BRIEF' : '03 · DELIVERABLE'}
      </p>
      <p className="font-sans font-semibold text-[20px] text-kj-light leading-normal whitespace-nowrap">
        {isInput ? 'Submit a brief' : 'Business-Ready Output'}
      </p>
      <p className="font-sans text-[12px] text-kj-light/[0.42] leading-[1.6] whitespace-nowrap">
        {isInput
          ? 'Answer 8 guided questions. 10 minutes.'
          : 'Formatted to spec. No editing required.'}
      </p>
    </div>
  )
}
