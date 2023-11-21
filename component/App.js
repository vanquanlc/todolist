import html from "../core.js";
import { connect } from "../store.js";
import header from "./header.js";
import Footer from "./Footer.js";
import TodoList from "./TodoList.js"

const connector = connect();
function App({todos}){
    console.log(todos)
    return html`
        <section class="todoapp">
            ${header()}
            ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connector(App)