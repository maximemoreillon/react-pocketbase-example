import Workout from "../domain/Workout"
import pb from "../pb"

import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import Button from "@mui/material/Button"

interface Props {
  workout: Workout
}

export default function WorkoutsTableRow({ workout }: Props) {
  function deleteWorkout() {
    pb.collection("workouts").delete(workout.id)
  }
  return (
    <TableRow>
      <TableCell>{new Date(workout.date).toDateString()}</TableCell>
      <TableCell>{workout.exercise}</TableCell>
      <TableCell>{workout.sets}</TableCell>
      <TableCell>{workout.reps}</TableCell>
      <TableCell>
        <Button onClick={deleteWorkout} variant="contained">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  )
}
