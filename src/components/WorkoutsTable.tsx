import { useState, useEffect } from "react"
import WorkoutsTableRow from "./WorkoutsTableRow"
import Workout from "../domain/Workout"
import pb from "../pb"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Typography from "@mui/material/Typography"
import TableContainer from "@mui/material/TableContainer"

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
    <>
      <Typography variant="h3" component="div" mt={4}>
        My workouts
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Exercise</TableCell>
              <TableCell>Sets</TableCell>
              <TableCell>Reps per set</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workouts.map((workout) => (
              <WorkoutsTableRow key={workout.id} workout={workout} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
