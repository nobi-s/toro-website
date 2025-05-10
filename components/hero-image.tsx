export default function HeroImage() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="600" height="600" fill="#F3CB59" fillOpacity="0.1" />
        <circle cx="300" cy="300" r="150" fill="#F3CB59" fillOpacity="0.2" />
        <path d="M150 150L450 450" stroke="#F3CB59" strokeWidth="8" strokeLinecap="round" />
        <path d="M450 150L150 450" stroke="#F3CB59" strokeWidth="8" strokeLinecap="round" />
        <rect x="225" y="225" width="150" height="150" stroke="#F3CB59" strokeWidth="4" strokeDasharray="10 10" />
        <circle cx="300" cy="300" r="50" stroke="#1A1A1A" strokeWidth="2" />
        <text
          x="300"
          y="305"
          fontFamily="sans-serif"
          fontSize="24"
          fill="#1A1A1A"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          TORO
        </text>
      </svg>
    </div>
  )
}
