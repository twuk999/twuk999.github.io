interface FeatureCardProps {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="p-8 border border-orange-500/20 rounded-lg bg-black/30">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 font-inter tracking-wide leading-relaxed">{description}</p>
    </div>
  )
} 