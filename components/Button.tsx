import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  glow?: boolean
}

export default function Button({ children, className = '', glow = false, ...props }: ButtonProps) {
  return (
    <div className="relative">
      {glow && (
        <div className="absolute inset-0 bg-yellow-500/50 rounded-lg blur-xl animate-glow-pulse" />
      )}
      <button 
        className={`relative bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  )
} 