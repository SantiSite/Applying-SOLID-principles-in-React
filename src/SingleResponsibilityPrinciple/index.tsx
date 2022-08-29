import { useFetchTodo } from "./hooks/useFetchTodo";

/*
La idea del Single Responsibility Principle es que una clase o una función debe tener una sola responsabilidad.
 */

const TodoList = () => {
    const { todo, isFetching } = useFetchTodo();

    if (isFetching) return <p>... loading</p>

    return (
        <ul>
            {todo.map((todo) => (
              <li key={todo.id}>
                  <span>{todo.title}</span>
                  <span>{todo.completed ? ' ✅' : ' 🔴'}</span>
              </li>
            ))}
        </ul>
    )
}

export default TodoList;
