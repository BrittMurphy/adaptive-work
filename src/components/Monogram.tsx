export function Monogram({ size = 30 }: { size?: number }) {
  return (
    <span aria-hidden className="inline-flex items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <rect x="0.6" y="0.6" width="38.8" height="38.8" rx="6" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <path d="M9 29 L20 11 L31 29" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14 24 L26 24" stroke="var(--accent)" strokeWidth="1.6" />
      </svg>
    </span>
  );
}
