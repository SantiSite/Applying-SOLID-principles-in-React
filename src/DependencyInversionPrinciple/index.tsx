import { useData } from "./useData";

// Dependency Inversion Principle: Los componentes, clases, funciones, etc. Deberían depender de abstracciones y no de implementaciones concretas.


// const fetcher = async (): Promise<ResponseType[]> => {
//     const url = 'https://jsonplaceholder.typicode.com/todos';
//     const res = await fetch(url);
//     return res.json();
// };

// const fetcher = async (): Promise<ResponseType[]> => {
//     return [{ userId: 1, id: 1, title: 'Todo 1', completed: false }, { userId: 1, id: 2, title: 'Todo 2', completed: true }];
// }

const fetcher = async (): Promise<ResponseType[]> => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

type ResponseType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const Todo = () => {
    const { data } = useData<ResponseType[]>({ key: "/todos", fetcher });

    if (!data) return <p>... Loading</p>;

    return (
        <ul>
            {data.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.title}</span>
                    <span>{todo.completed ? ' ✅' : ' 🔴'}</span>
                </li>
            ))}
        </ul>
    );
};

export default Todo;
