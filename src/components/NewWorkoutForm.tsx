import pb from "../pb"
import Workout from "../domain/Workout"
import { useState, FormEvent } from "react"

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
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Exercise"
          type="text"
          onChange={(e) => {
            setExercise(e.target.value)
          }}
        />
        <input
          placeholder="Sets"
          type="number"
          onChange={(e) => {
            setSets(Number(e.target.value))
          }}
        />
        <input
          placeholder="Reps per set"
          type="number"
          onChange={(e) => {
            setReps(Number(e.target.value))
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
