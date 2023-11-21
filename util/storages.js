const TODOS_STORAGES = 'TODOS';
export default {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STORAGES)) || []
    },
    set(todos){
        localStorage.setItem(TODOS_STORAGES, JSON.stringify(todos))
    }
}