import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();
function Header({cars}){
    return html`
    <header class="header">
        <h1>todos</h1>
        <input onkeyup="event.keyCode === 13 &&  dispath('add', this.value.trim())" class="new-todo" placeholder="What needs to be done?" autofocus>
    </header>
    `
}

export default connector(Header)