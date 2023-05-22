import { FormEvent, useState } from "react"
import pb from "../pb"

import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    pb.admins.authWithPassword(username, password)
  }

  return (
    <Box component="form" onSubmit={handleFormSubmit}>
      <Grid container spacing={2} alignItems="center" direction="column">
        <Grid item>
          <TextField
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            variant="standard"
          />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            label="Username"
            variant="standard"
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
