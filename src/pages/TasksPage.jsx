import Todo from "../components/Todo.jsx"
import { TasksProvider } from "../context/TasksProvider.jsx"

const TasksPage = () => {
    return (
        <TasksProvider>
            <Todo />
        </TasksProvider>
    )
}

export default TasksPage