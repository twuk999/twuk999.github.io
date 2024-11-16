"use client"
import { useState } from "react"
import Button from "../components/Button"
import JoinWaitlistModal from "../components/JoinWaitlistModal"
import FeatureCard from "../components/FeatureCard"
import HowItWorksCard from "../components/HowItWorksCard"
import { ArrowDown } from "lucide-react"
import { Orbitron } from "next/font/google"
import MatrixBackground from "../components/MatrixBackground"
import ErrorBoundary from "../components/ErrorBoundary"

const orbitron = Orbitron({ subsets: ["latin"] })

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      <section className={`
        relative
        min-h-screen 
        flex 
        flex-col 
        justify-center
        before:content-[''] 
        before:absolute 
        before:inset-0 
        before:bg-gradient-to-b 
        before:from-zinc-900/80 
        before:to-transparent
      `}>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
            LOBBY BOT
          </h1>
          <h2 
            className="text-4xl md:text-6xl font-bold text-orange-500 mb-6 text-glow-orange relative z-10"
            data-text="TURN GAMEPLAY INTO CRYPTO REWARDS"
          >
            TURN GAMEPLAY INTO CRYPTO REWARDS
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-200 font-inter tracking-wide leading-relaxed">
            MONETIZE GAMEPLAY EFFORTLESSLY BY TURNING PLAYERS' SESSIONS INTO CRYPTO MINING POWER
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="text-xl px-8 py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 shadow-lg shadow-yellow-500/20 transition-all duration-300"
              glow={true}
            >
              JOIN WAITLIST
            </Button>
            <div className="bg-yellow-500/20 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-yellow-500 font-inter font-semibold">
                HARNESS THE POWER OF 3.72 BILLION HOURS OF GAMEPLAY DAILY
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ArrowDown className="w-8 h-8 text-orange-500" />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="EFFORTLESS INTEGRATION"
            description="ADD OUR PLUG-AND-PLAY PACKAGE TO YOUR GAME IN MINUTES, WITH SEAMLESS CONNECTION TO THE LOBBY BOT MINING POOL"
          />
          <FeatureCard
            title="EXTRA REVENUE STREAM"
            description="EARN CRYPTO FOR EVERY MINUTE PLAYERS SPEND IN YOUR GAME. BOTH YOU AND YOUR PLAYERS WIN"
          />
          <FeatureCard
            title="ENGAGE PLAYERS"
            description="REWARD YOUR PLAYERBASE WITH CRYPTO, ENHANCING LOYALTY AND ENGAGEMENT"
          />
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5" />
        
        <div className="relative grid grid-cols-[1fr_auto_1fr] gap-8">
          {/* Left side - Mining */}
          <div className="text-right space-y-4">
            <div className="flex justify-end items-center h-[48px]">
              <h3 className="text-3xl font-bold text-orange-500/90 tracking-wider">
                OPTIMIZED MINING
              </h3>
            </div>
            <p className="font-inter tracking-wide leading-relaxed text-gray-300 max-w-md ml-auto">
              AI ALGORITHMS THROTTLE YOUR COMPUTER'S CPU/GPU USAGE TO AVOID BURNOUT
            </p>
          </div>

          {/* Center text */}
          <div className="flex items-center h-[48px] px-8">
            <span className="text-3xl font-orbitron font-bold text-yellow-500 glow-yellow-intense italic">
              MEETS
            </span>
          </div>

          {/* Right side - Gaming */}
          <div className="text-left space-y-4">
            <div className="flex items-center h-[48px]">
              <h3 className="text-3xl font-bold text-orange-500/90 tracking-wider">
                OPTIMIZED GAMING
              </h3>
            </div>
            <p className="font-inter tracking-wide leading-relaxed text-gray-300 max-w-md">
              MINING RUNS QUIETLY IN THE BACKGROUND WITHOUT AFFECTING YOUR GAMING EXPERIENCE
            </p>
          </div>
        </div>

        {/* Optional: Decorative elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <ErrorBoundary>
          <MatrixBackground />
        </ErrorBoundary>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">HOW IT WORKS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <HowItWorksCard
              step={1}
              title="INTEGRATE LOBBY BOT"
              description="ADD OUR PACKAGE TO YOUR GAMES EFFORTLESSLY"
            />
            <HowItWorksCard
              step={2}
              title="PLAY AS USUAL"
              description="GAMERS ENJOY UNINTERRUPTED GAMEPLAY"
            />
            <HowItWorksCard
              step={3}
              title="EVERYBODY WINS"
              description="CRYPTO REWARDS ARE DISTRIBUTED TO BOTH DEVELOPERS AND PLAYERS"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">JOIN THE LOBBY BOT REVOLUTION TODAY</h2>
        <p className="text-2xl mb-8 font-inter">INSTANTLY LEVEL UP YOUR GAMES</p>
        <div className="inline-block">
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="text-xl px-8 py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 shadow-lg shadow-yellow-500/20 transition-all duration-300"
            glow={true}
          >
            JOIN WAITLIST
          </Button>
        </div>
      </section>

      <JoinWaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  )
} 