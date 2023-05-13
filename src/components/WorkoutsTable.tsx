import { useState, useEffect } from "react"
import WorkoutsTableRow from "./WorkoutsTableRow"
import Workout from "../domain/Workout"
import pb from "../pb"

export default function WorkoutsTable() {
  const collection = "workouts"
  const [workouts, setWorkouts] = useState<Workout[]>([])

  const getWorkouts = async () => {
    const { items } = await pb.collection(collection).getList<Workout>(1, 50)
    setWorkouts(items)
  }

  useEffect(() => {
    getWorkouts()
    pb.collection(collection).subscribe<Workout>("*", ({ record, action }) => {
      if (action === "create") setWorkouts([...workouts, record])
      if (action === "delete")
        setWorkouts(workouts.filter(({ id }) => id !== record.id))
    })

    // Return is the cleanup function
    return () => {
      pb.collection(collection).unsubscribe()
    }
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Reps per set</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout) => (
          <WorkoutsTableRow key={workout.id} workout={workout} />
        ))}
      </tbody>
    </table>
  )
}
