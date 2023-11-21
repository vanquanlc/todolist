import html from "../core.js";
import { connect } from "../store.js";
import ItemTodo from "./ItemTodo.js";

const connector = connect();
function TodoList({todos, filter, filters}){
    return html`
    <section class="main">
        <input onchange="dispath('toggleAll', this.checked)" id="toggle-all" class="toggle-all" type="checkbox" ${todos.every(filters.completed) && 'checked'}>
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list" >
            ${todos.filter(filters[filter]).map((todo, index) => ItemTodo({todo, index}))}
        </ul>
    </section>
    `
}

export default connector(TodoList)
