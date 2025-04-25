import { useState, useEffect } from 'react';

function Effect(){
    let [num, setNum] = useState(1);
    
    // const fnIncrease = function(){
    //     setNum(++num);
    // }

    // useEffect(()=>{
    //     console.log("useEffect 실행");
    //     // 렌더링마다 실행
    // });
    let [num2, setNum2] = useState(1);
    useEffect(()=>{
        console.log("useEffect 실행");
        // 최초 1회만 실행
    },[num]); 
    // num >> 의존성 부여. num값이 렌더링될 때 useEffect 실행함

    return <div>
        {num}
        <div>
            {/* <button onClick={fnIncrease}>증가</button> */}
            <button onClick={()=>{
                setNum(++num);
            }}>증가</button>
        </div>
        <hr></hr>
        {num2}
        <div>
            <button onClick={()=>{
                setNum2(++num);
            }}>증가2</button>
        </div>
    </div>
}

export default Effect;