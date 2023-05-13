import Workout from "../domain/Workout"
import pb from "../pb"

interface Props {
  workout: Workout
}

export default function WorkoutsTableRow({ workout }: Props) {
  function deleteWorkout() {
    pb.collection("workouts").delete(workout.id)
  }
  return (
    <tr>
      <td>{new Date(workout.date).toDateString()}</td>
      <td>{workout.exercise}</td>
      <td>{workout.sets}</td>
      <td>{workout.reps}</td>
      <td>
        <button onClick={deleteWorkout}>Delete</button>
      </td>
    </tr>
  )
}
