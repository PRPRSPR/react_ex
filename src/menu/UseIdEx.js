import { useId } from "react";

function UserInput(){
    let id = useId();
    return (
        <div>
            {/* <label htmlFor="userId">아이디 : </label>
            <input id="userId"></input> */}

            {/* <label htmlFor={id}>아이디 : </label>
            <input id={id}></input>
            <br></br>
            <label htmlFor={id}>비밀번호 : </label>
            <input id={id}></input> */}
            {/* 처음 실행 시 한번만 부여됨. 아이디와 비밀번호가 같은 id를 부여받아 label 비밀번호를 클릭해도 아이디 input이 활성화됨. */}

            <label htmlFor={id+"-id"}>아이디 : </label>
            <input id={id+"-id"}></input>
            <br></br>
            <label htmlFor={id+"-pwd"}>비밀번호 : </label>
            <input id={id+"-pwd"}></input>
            <br></br>
            <label htmlFor={id+"-name"}>이름 : </label>
            <input id={id+"-name"}></input>
        </div>
    )
}

function UseIdEx(){
    return (
        <>
            <div>
                <div><h4>{'<label>아이디 : </label> <input></input>'}</h4></div>
                <label>아이디 : </label>
                <input></input>
                <span>　→ label 아이디를 클릭해도 input 활성화 안됨</span>
            </div>
            <hr></hr>
            <div>
                <div><h4>{'<label>아이디 : <input></input></label>'}</h4></div>
                <label>아이디 : <input></input></label>
                <span>　→ label 아이디 클릭 시 input 활성화</span>
            </div>
            <hr></hr>
            <div>
                <div><h4>{'<label htmlFor="userId">아이디 : </label> <input id="userId"></input>'}</h4></div>
                <label htmlFor="userId">아이디 : </label>
                <input id="userId"></input>
                <span>　→ label 아이디 클릭 시 input 활성화</span>
            </div>
            <hr></hr>
            <div><h4>{'let id = useId(); 사용!'}</h4></div>
            <UserInput></UserInput> {/* id = r0 */}
            <UserInput></UserInput> {/* id = r1 */}
            <UserInput></UserInput> {/* id = r2 */}
        </>
    )
}

export default UseIdEx