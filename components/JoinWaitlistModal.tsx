import { useState, ChangeEvent } from "react"
import Modal from "./Modal"
import Button from "./Button"

interface JoinWaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function JoinWaitlistModal({ isOpen, onClose }: JoinWaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address")
      return
    }

    setSuccess(true)
    setError("")
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Join the Waitlist">
      {!success ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      ) : (
        <div className="text-center py-4">
          <p className="text-green-500">Thanks for joining the waitlist!</p>
          <p className="text-sm text-gray-400 mt-2">We'll be in touch soon.</p>
        </div>
      )}
    </Modal>
  )
} 