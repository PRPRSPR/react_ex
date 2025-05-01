import { useState, useMemo } from "react"

function returnNumber(num){
    for(let i=0; i<1000000000; i++){}
    // 연산량 ↑ 오래걸리는 작업.
    return 1000+num;
}

function Memo(){
    const [num, setNum] = useState(1);
    const [toggle, setToggle] = useState(false);
    // 값이 변하면서 useState로 렌더링 >> 아래 함수가 다시 실행되며 작업에 딜레이가 생김
    // let value = returnNumber(num);

    let value = useMemo(()=>{
        return returnNumber(num);
    },[num]);
    // num값이 변했을때만 다시 실행
    // toggle 실행 시 딜레이 없음

    return (
        <div>
            <div>
                <button onClick={()=>{setNum(num+1);}}>증가</button>
                <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "왔다":"갔다"}</button>
            </div>
            <div>
                {value}
            </div>
        </div>
    )
}

export default Memo