// import HeaderContext from "../component/HeaderContext"
import { MyContext } from "../context/MyContext"
import { useContext, useState } from "react"

// function Child1(props){
function Child1(){
    let {isDark} = useContext(MyContext);
    return (
        <div style={{color : isDark ? 'black':'red'}}>
            자식 컴포넌트 1
            {/* <Child2 isDark={props.isDark}></Child2> */}
            <Child2></Child2>
        </div>
    )
}

// function Child2(props){
function Child2(){
    let {isDark, setDark} = useContext(MyContext);
    return (
        <div>
            자식 컴포넌트 2
            {/* <Child3 isDark={props.isDark}></Child3> */}
            <button style={{color : isDark ? 'red':'black'}} onClick={()=>{setDark(!isDark)}}>{isDark?'빨간색':'검은색'}</button>
            {/* 버튼 클릭 > isDark 값이 true/false child1 텍스트 : isDark true일떄 검은색. 아니면 빨강 */}
            <Child3></Child3>
        </div>
    )
}

// function Child3(props){
function Child3(){
    // let map = useContext(MyContext);
    // let {isDark} = useContext(MyContext);
    // let {isDark, setDark} = useContext(MyContext);
    return (
        <div>
            <div>
                자식 컴포넌트 3
            </div>
            <div>
                {/* {props.isDark} */}
                {}
            </div>
        </div>
    )
}

function ContextEx(){
    // let test = "1234";
    // let sharedValue = {id : "test", name : "hong"};

    // let isDark = false;
    let [isDark, setDark] = useState(false);
// props 이용하여 Child3 까지 전달

    return (
        <>
            {/* <MyContext.Provider value={{test:"1234"}}> */}
            {/* <MyContext.Provider value={{test}}> */}
            {/* <MyContext.Provider value={sharedValue}>
                <HeaderContext></HeaderContext>
            </MyContext.Provider> */}

            {/* <Child1 isDark={isDark}></Child1> */}
            {/* <MyContext.Provider value={{isDark}}> */}
            <MyContext.Provider value={{isDark, setDark}}>
                <Child1></Child1>
            </MyContext.Provider>
        </>
    )
}

export default ContextEx