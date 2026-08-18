import { TasksContext } from "./TasksContext.js"
import useTasks from "./useTasks.js"
import useIncompleteTasksScroll from "./useIncompleteTaskScroll.js"

export const TasksProvider = (props) => {
    const { children } = props

    const {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
    } = useTasks()

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useIncompleteTasksScroll(tasks)

    return (
        <TasksContext.Provider
            value={{
                tasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskId,
                deleteTask,
                deleteAllTasks,
                toggleTaskComplete,

                newTaskTitle,
                setNewTaskTitle,
                searchQuery,
                setSearchQuery,
                newTaskInputRef,
                addTask,
                disappearingTaskId,
                appearingTaskId,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}