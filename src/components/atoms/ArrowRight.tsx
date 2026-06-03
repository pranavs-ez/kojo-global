interface ArrowRightProps {
  size?: number
  strokeWidth?: number
  className?: string
}

export default function ArrowRight({ size = 14, strokeWidth = 1.75, className = '' }: ArrowRightProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M1 7H13M8 2L13 7L8 12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
