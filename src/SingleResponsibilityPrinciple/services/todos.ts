import axios from "axios";
import { TodoType } from "../types";

export const fetchTodo = () => {
    return axios.get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data)
        .catch((error) => {
            if (error.code === 404) {
                throw new Error("Not found");
            } else {
                throw new Error("Something went wrong");
            }
        });
};
