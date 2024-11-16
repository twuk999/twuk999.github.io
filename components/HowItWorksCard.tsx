interface HowItWorksCardProps {
  step: number
  title: string
  description: string
}

export default function HowItWorksCard({ step, title, description }: HowItWorksCardProps) {
  return (
    <div className="p-8 border border-orange-500/20 rounded-lg relative group transition-all duration-200 hover:bg-black/30 bg-orange-500/20 overflow-hidden h-[250px]">
      <div className="
        absolute 
        inset-0 
        bg-orange-500/10
        transition-opacity
        duration-200
        opacity-0
        group-hover:opacity-100
      "/>

      <div className="
        absolute 
        inset-0 
        flex 
        items-center 
        justify-center
        text-8xl 
        font-bold 
        text-white/90
        transition-all
        duration-300
        ease-in-out
        transform
        group-hover:scale-[0.25]
        group-hover:-translate-x-[140px]
        group-hover:-translate-y-[140px]
        group-hover:bg-orange-500/40
        group-hover:rounded-full
        group-hover:w-16
        group-hover:h-16
        will-change-transform
        z-10
        backdrop-blur-sm
      ">
        <span className="flex items-center justify-center w-full h-full">
          {step}
        </span>
      </div>

      <div className="
        absolute
        inset-0
        p-8
        opacity-0 
        group-hover:opacity-100 
        transition-all
        duration-300
        ease-in-out
        transform
        translate-y-8
        group-hover:translate-y-0
        pointer-events-none
        group-hover:pointer-events-auto
      ">
        <h3 className="text-2xl font-bold mb-4 mt-4">{title}</h3>
        <p className="text-gray-300 font-inter tracking-wide leading-relaxed">{description}</p>
      </div>
    </div>
  )
} 