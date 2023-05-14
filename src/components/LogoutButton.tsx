// Note: this is currently unused
import pb from "../pb"

export default function LogoutButton() {
  const logout = () => {
    pb.authStore.clear()
  }

  return <button onClick={logout}>Logout</button>
}
