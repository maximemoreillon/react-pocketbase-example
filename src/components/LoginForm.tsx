// Note: this is currently unused
import { FormEvent, useState } from "react"
import pb from "../pb"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" />
      <input type="password" />
    </form>
  )
}
