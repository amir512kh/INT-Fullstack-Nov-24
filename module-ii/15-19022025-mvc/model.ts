type Todo = {
    id: string,
    status: "Pending" | "Completed",
    createdAt: Date,
    content: string,
};

let todos: Todo[] = [];
let onTodosUpdateCallback: () => void;

export function getTodos(): Todo[] {
    return todos
        .toSorted((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf());
}

export function addTodo(todo: Todo) {
    if (todos.some((t) => t.id === todo.id)) {
        throw new Error(`Todo with id ${todo.id} already exists`);
    }

    todos.push(todo);
    onTodosUpdateCallback?.();
}

export function toggleTodo(todoId: string) {}

export function onTodosUpdate(callback: () => void) {
    onTodosUpdateCallback = callback;
}
