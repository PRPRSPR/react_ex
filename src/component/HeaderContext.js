import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Child1(){
    return (
        <>
            <div>자식 1</div>
            <Child2></Child2>
        </>
    )
}
function Child2(){
    const value = useContext(MyContext);
    console.log("context >> ", value);
    // >>> {id: 'test', name: 'hong'}
    return (
        <>
            <div>자식 2</div>
        </>
    )
}

function HeaderContext(){ 
    return (
      <div>
        <Child1></Child1>
      </div>
    )
}

export default HeaderContext