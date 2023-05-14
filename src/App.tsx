import pb from "./pb"
import NewWorkoutForm from "./components/NewWorkoutForm"
import WorkoutsTable from "./components/WorkoutsTable"
import LoginForm from "./components/LoginForm"
import LogoutButton from "./components/LogoutButton"
import { useState, useEffect } from "react"

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
      <div>
        <h1>Workout tracker</h1>

        {authenticated && (
          <>
            <LogoutButton />
            <WorkoutsTable />
            <NewWorkoutForm />
          </>
        )}

        {!authenticated && (
          <>
            <LoginForm />
          </>
        )}
      </div>
    </>
  )
}

export default App
