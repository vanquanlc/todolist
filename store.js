import { createStore } from './core.js';
import reducer from './reducer.js';
import Logger from './Logger.js';

const {attach, connect, dispath} = createStore(Logger(reducer));
window.dispath = dispath;
export{
    attach,
    connect
};