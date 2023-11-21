export default function Logger(reducer){
    return (prevState, action, args) => {
        console.group(action)
        console.log('prevState: ', prevState)
        console.log(args)
        const nextState = reducer(prevState, action, args);
        console.log('prevState: ', nextState)
        console.groupEnd(action)
        return nextState;
    }
}