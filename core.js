//action -> descript action
//reducer -> trả về dư liệu cho action
//store -> lưu trữ dữ liệu
//view -> hiển thị dữ liệu
export default function html([first, ...rest], ...values){
    return values.reduce(
                (acc, curr) => acc.concat(curr, rest.shift()
            ), [first])
            .filter(x =>  x && x!== true || x===0)
            .join('');
}

export function createStore(reducer){
    let state = reducer();
    const roots = new Map();
    function render(){
        for(const [root, component] of roots){
            const output = component();
            root.innerHTML = output;
        }
    }

    return{
        attach(component, root){
            roots.set(root, component);
            render();
        },
        connect(selector = state => state){
            return component => (props, ...rest) => component(Object.assign({}, props, selector(state), ...rest));
        },
        dispath(acction, ...args){
            state = reducer(state, acction, args);
            render();
        }
    }
}