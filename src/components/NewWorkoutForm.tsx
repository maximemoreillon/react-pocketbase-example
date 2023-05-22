import pb from "../pb"
import Workout from "../domain/Workout"
import { useState, FormEvent } from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"

export default function NewWorkoutForm() {
  const [exercise, setExercise] = useState("")
  const [reps, setReps] = useState(0)
  const [sets, setSets] = useState(0)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    pb.collection("workouts").create<Workout>({
      exercise,
      reps,
      sets,
      date: new Date(),
    })
  }

  return (
    <>
      <h2>Add a new exercise</h2>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <TextField
              label="Exercise"
              type="text"
              variant="standard"
              onChange={(e) => {
                setExercise(e.target.value)
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Sets"
              type="number"
              variant="standard"
              onChange={(e) => {
                setSets(Number(e.target.value))
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Reps per set"
              type="number"
              variant="standard"
              onChange={(e) => {
                setReps(Number(e.target.value))
              }}
            />
          </Grid>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Box>
    </>
  )
}
