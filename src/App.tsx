import NewWorkoutForm from "./components/NewWorkoutForm"
import WorkoutsTable from "./components/WorkoutsTable"

function App() {
  return (
    <>
      <div>
        <h1>Workout tracker</h1>
        <WorkoutsTable />

        <NewWorkoutForm />
      </div>
    </>
  )
}

export default App
