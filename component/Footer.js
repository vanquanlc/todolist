import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();
function Footer({todos, filters, filter}){

    return html`
    <footer class="footer">
        <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
        <ul class="filters">

            ${Object.keys(filters).map(type => html`
              <li>
                <a onclick="dispath('switchTodos', '${type}')" class="${filter === type && 'selected'}" href="#/">${type.toUpperCase()}</a>
            </li>
            `)}

        </ul>
        ${todos.filter(filters.completed).length >0 && html`<button onclick="dispath('destroyCompleted')" class="clear-completed">Clear completed</button>`}
    </footer>
    `
}

export default connector(Footer)