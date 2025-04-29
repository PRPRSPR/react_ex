import { useReducer, useState } from "react";

function reducer(state, action){
    // state >> default. 안보내줘도 됨
    // action >> 주로 map으로 보냄
    switch(action.type){
        case "increment" : 
            // return 값이 state가 됨
            return {number : state.number + 1}
        case "decrement" : 
            return {number : state.number - 1}
        case "reset" : 
            return {number : 0}
        default : 
            throw new Error("뭔가 잘못됨;;");
    }
}
let initialValue = {number : 0};
function ReducerEx(){
    let [count, setCount] = useState(0);
    let [count2, setCount2] = useState(0);
    
    let [state, dispatch] = useReducer(reducer, initialValue);
    // state >> initialValue,  dispatch >> reducer

    const fnCount = (type)=>{
        switch(type){
            case "increment" : 
                setCount2(count2+1);
                break;
            case "decrement" : 
                setCount2(count2-1);
                break;
            case "reset" : 
                setCount2(0);
                break;
            default : 
                throw new Error("뭔가 잘못됨;;");
        }
    }
    return (
        <>
            <h2>useState로 작성 (익명 함수 사용)</h2>
            <h3>{count}</h3>
            <div><button onClick={()=>{setCount(count+1)}}>증가</button></div>
            {/* <div><button onClick={()=>{setCount(count-1)}}>감소</button></div> */}
            <div><button onClick={()=>{
                setCount(prev => prev-1);
                // count에 직접 접근x 이전 값 가져옴
            }}>감소</button></div>
            <div><button onClick={()=>{setCount(0)}}>초기화</button></div>
            <hr></hr>
            <h2>useState로 작성 (함수 사용)</h2>
            <h3>{count2}</h3>
            <div><button onClick={()=>{fnCount("increment")}}>증가</button></div>
            <div><button onClick={()=>{fnCount("decrement")}}>감소</button></div>
            <div><button onClick={()=>{fnCount("reset")}}>초기화</button></div>
            <hr></hr>
            <h2>useReducer로 작성</h2>
            <h3>{state.number}</h3>
            <div><button onClick={()=>{dispatch({type : "increment"})}}>증가</button></div>
            <div><button onClick={()=>{dispatch({type : "decrement"})}}>감소</button></div>
            <div><button onClick={()=>{dispatch({type : "reset"})}}>초기화</button></div>
        </>
    )
}

export default ReducerEx