'use client'
import { useState, useEffect } from 'react'

const MatrixBackground = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Cleanup function
    return () => {
      setIsClient(false)
    }
  }, [])

  // Function to get a character from our set
  const getChar = () => {
    if (!isClient) return 'ア' // Safe fallback
    
    const characters = [
      // Numbers (10 characters)
      ...'0123456789',
      // Japanese characters (30 characters for more variety)
      ...Array.from({ length: 30 }, (_, i) => String.fromCharCode(0x30A0 + i))
    ]
    return characters[Math.floor(Math.random() * characters.length)]
  }

  // Generate random delays and durations only on client side
  const getRandomDelay = () => isClient ? `${Math.random() * 5}s` : '0s'
  const getRandomDuration = () => isClient ? `${15 + Math.random() * 10}s` : '20s'

  const renderMatrix = () => {
    try {
      return (
        <div className="matrix-animation">
          {[...Array(75)].map((_, i) => (
            <div 
              key={i} 
              className="matrix-col" 
              style={{ 
                animationDelay: getRandomDelay(),
                animationDuration: getRandomDuration(),
                left: `${(i * 1.5)}%`
              }}
            >
              {[...Array(30)].map((_, j) => (
                <span 
                  key={j} 
                  className="inline-block text-yellow-500 opacity-0 matrix-symbol"
                  style={{ 
                    animationDelay: getRandomDelay(),
                    animationDuration: '2.5s',
                    textShadow: '0 0 8px rgba(234, 179, 8, 0.8)'
                  }}
                >
                  {getChar()}
                </span>
              ))}
            </div>
          ))}
        </div>
      )
    } catch (error) {
      console.error('Matrix render error:', error)
      return null
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden opacity-50 pointer-events-none">
      {renderMatrix()}
    </div>
  )
}

export default MatrixBackground 