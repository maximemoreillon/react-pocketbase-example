// Note: this is currently unused
import { FormEvent, useState } from "react"
import pb from "../pb"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    pb.admins.authWithPassword(username, password)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" onInput={(e) => setUsername(e.target.value)} />
      <input type="password" onInput={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}
