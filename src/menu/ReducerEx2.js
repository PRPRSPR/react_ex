import { useReducer,useRef } from "react"

function reducer(state, action){
    let last = state[state.length-1];
    switch(action.type){
        case "deposit" : 
            return [...state, {req : action.amount, money : last.money + action.amount, type : action.type, date : new Date()}]
        case "withdraw" : 
            if(last.money >= action.amount){
                return [...state, {req : action.amount, money : last.money - action.amount, type : action.type, date : new Date()}]
            } else {
                alert("잔액 부족");
                return state;
            }
        case "close" : 
            alert("해지");
            return state;
        default : 
            throw new Error("뭔가 잘못됨;;");
    }
}
let initialValue = [
    {req : 0, money : 0, type : "initial", date : new Date()},
    {req : 10000, money : 10000, type : "deposit", date : new Date()},
    {req : 3000, money : 7000, type : "withdraw", date : new Date()},
]

function ReducerEx2(){
    let [state, dispatch] = useReducer(reducer, initialValue);

    let inputRef = useRef();

    return (
        <>
            <h3>현재 금액 : {state[state.length-1].money}</h3>
            <input ref={inputRef} placeholder="금액"></input>
            <div>
                <button onClick={()=>{
                    let amount = parseInt(inputRef.current.value);
                    inputRef.current.value = "";
                    dispatch({type:"deposit", amount});
                }}>입금</button>
                <button onClick={()=>{
                    let amount = parseInt(inputRef.current.value);
                    inputRef.current.value = "";
                    dispatch({type:"withdraw", amount});
                }}>출금</button>
                {/* 0원 밑으로 내려가지 않게 */}
                <button onClick={()=>{
                    dispatch({type:"close"});
                }}>해지</button>
                {/* 남은 금액이 0원일때만 */}
            </div>
            <hr></hr>
            <div>
                {state.map((item)=>{
                    return <li>{item.type == "deposit" ? "입금" : item.type == "withdraw" ? "출금" : "개설"} [ 요청 금액 : {item.req}, 현재 잔액 : {item.money}, 일시 : {item.date.toLocaleDateString()} ] </li>
                })}
            </div>
        </>
    )
}

export default ReducerEx2