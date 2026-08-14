import { useContext } from "react"
import Field from "../Field/Field.jsx"
import { TasksContext } from "../../context/TasksContext.js"

const SearchTaskForm = (props) => {
    const { styles } = props
    const {
        searchQuery,
        setSearchQuery,
    } = useContext(TasksContext)

    return (
        <form 
            className="todo__form"
            onSubmit={(event) => event.preventDefault()}
        >
            <Field
                className={styles.field}
                label="Search task"
                id="search-task"
                type="search"
                value={searchQuery}
                onInput={(event) => setSearchQuery(event.target.value)}
            />
        </form>
    )
}

export default SearchTaskForm