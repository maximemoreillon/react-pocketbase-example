import pb from "./pb"
import NewWorkoutForm from "./components/NewWorkoutForm"
import WorkoutsTable from "./components/WorkoutsTable"
import LoginForm from "./components/LoginForm"
import LogoutButton from "./components/LogoutButton"
import { useState, useEffect } from "react"
import Container from "@mui/material/Container"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

function App() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    setAuthenticated(pb.authStore.isValid)
  }, [])

  pb.authStore.onChange((token) => {
    setAuthenticated(!!token)
  })

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Workout tracker
          </Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>
      <Container>
        {authenticated && (
          <>
            <WorkoutsTable />
            <NewWorkoutForm />
          </>
        )}

        {!authenticated && (
          <>
            <LoginForm />
          </>
        )}
      </Container>
    </>
  )
}

export default App
