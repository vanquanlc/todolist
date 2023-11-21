import storages from "./util/storages.js";
const init = {
    todos: storages.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    }
}

const actions = {
    add({todos}, title){
        if (title) {
            todos.push({title, completed: false});
            storages.set(todos)
        }
    },
    toggle({todos}, index){
        const todo = todos[index];
        console.log(todo)
        todo.completed = !todo.completed;
        storages.set(todos)
    },
    toggleAll({todos}, completed){
        todos.forEach(todo => {
                todo.completed = completed;
        });
        storages.set(todos)
        
    },
    destroy({todos}, index){
        todos.splice(index, 1);
        storages.set(todos)
    },
    destroyCompleted(state){
        state.todos = state.todos.filter(state.filters.active);
    },
    switchTodos(state, type){
        state.filter = type;
    }
}

export default function reducer(state = init, action, args){
    actions[action] && actions[action](state, ...args);
    return state;
}