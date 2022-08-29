import { useEffect, useState } from "react";
import { TodoType } from "../types";
import { fetchTodo } from "../services/todos";

export const useFetchTodo = () => {
    const [todo, setTodo] = useState<TodoType[]>([]); // Guardando los datos del fetch
    const [isFetching, setIsFetching] = useState(true); // Si esta cargando

    useEffect(() => {
        fetchTodo()
            .then((todos) => setTodo(todos))
            .finally(() => {
                setIsFetching(false);
            })
    }, []);

    return { todo, isFetching };
}
