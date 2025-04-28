import { useState, useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import DialogSample from "./DialogSample";


function Ref(){
    let [numState, setNum] = useState(1);
    let numVar = 1;
    let numRef = useRef(1);

    let [value, setValue] = useState("");

    let inputRef = useRef();

    useEffect(()=>{
        console.log(inputRef);
        // >>> {current: input}

        inputRef.current.focus();
    }, [])

    // console.log(numRef);
    // >>> {current: 1}
    return (
        <>
            <DialogSample></DialogSample>
            <div>
                {numState}<button onClick={()=>{setNum(numState+1)}}>state 증가</button>
            </div>
            <div>
                {numVar}<button onClick={()=>{
                    numVar += 1;
                    console.log(numVar);
                    // state 증가버튼(setNum(numState+1))으로 렌더링 되는 순간 초기화 됨
                }}>var 증가</button>
            </div>
            <div>
                {numRef.current}<button onClick={()=>{
                    numRef.current += 1;
                    console.log(numRef.current);
                    // state 증가버튼(setNum(numState+1))으로 렌더링 되어도 초기화되지 않음
                    // 렌더링 되는 순간 증가된 numRef.current 값이 출력됨
                }}>ref 증가</button>
            </div>

            <input ref={inputRef} value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
            <Button variant="contained" size="small" onClick={()=>{
                setNum(numState+parseInt(value));
                setValue("");
                inputRef.current.focus();
                // 렌더링 후에도 포커싱
            }}>추가</Button>
        </>
    )
}

export default Ref