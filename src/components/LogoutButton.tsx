import pb from "../pb"
import Button from "@mui/material/Button"

export default function LogoutButton() {
  const logout = () => {
    pb.authStore.clear()
  }

  return (
    <Button onClick={logout} variant="contained" color="secondary">
      Logout
    </Button>
  )
}
