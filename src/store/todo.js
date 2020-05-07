import { writable } from 'svelte/store';

export class Todo {
    constructor(description, id, done = false){
        this.id = id || Date.now()+Math.round(Math.random()*100000);
        this.description = description;
        this.done = done;
    }
};

export let todos = writable([]);

export function add(task) {
    todos.update(list => [new Todo(task), ...list]);
}

export function remove(todo) {
    const id = todo && todo.id ? todo.id : todo;
    todos.update(list => list.filter(el => el.id !== id ));
}

export function changeState(todo, done) {
    const id = todo && todo.id ? todo.id : todo;

    todos.update(list => list.map(el => {
        if(el.id === id){
            el.done = done;
        }
        return el;
    } ));
}
