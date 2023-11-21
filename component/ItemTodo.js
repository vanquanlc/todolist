import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();
function ItemTodo({todo, index}){
    return html`
    <li class="${todo.completed && 'completed'}">
        <div class="view">
            <input onchange="dispath('toggle', ${index})" class="toggle" type="checkbox" ${todo.completed && 'checked'}>
            <label>${todo.title}</label>
            <button onclick="dispath('destroy', ${index})" class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `
}

export default connector(ItemTodo)