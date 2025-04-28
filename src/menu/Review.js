import { useState, useEffect } from 'react';

function Header(props){
    // 사용자 정의 태그(컴포넌트)
    return (
        <>
            {/* <h2>Hello React</h2> */}
            <h2><a href="/" onClick={(e)=>{
                e.preventDefault();
                props.fnInfo(props.title);
            }}>{props.title}</a></h2>
        </>
    )
}

function Body(props){
    return (
        <>
            <div>{props.count}</div>
            <button onClick={()=>{
                props.fnCount(props.count+1);
            }}>증가!</button>
        </>
    )
}

function Footer(props){
    // props >>> list
    let [list,setList] = useState([]);
    // let student = {stuNo : "", stuName : "", stuDept : ""};
    let [student, setStu] = useState({stuNo : "", stuName : "", stuDept : ""});
    // 

    const fnInput = (e)=>{
        // student[e.target.id] = e.target.value;
        setStu({...student, [e.target.id] : e.target.value});
    }
    return (
        <div>
            {/* <div><input placeholder='학번' id="stuNo" onChange={fnInput}></input></div> */}
            <div><input placeholder='학번' id="stuNo" onChange={fnInput} value={student.stuNo}></input></div>
            {/* 입력, 추가 후 지워주는 기능 위해 value 추가 */}
            <div><input placeholder='이름' id="stuName" onChange={fnInput} value={student.stuName}></input></div>
            <div><input placeholder='학과' id="stuDept" onChange={fnInput} value={student.stuDept}></input></div>
            <div><button onClick={()=>{
                setList([...list, student]);
                setStu({stuNo : "", stuName : "", stuDept : ""});
                alert("추가 완료!");
            }}>추가</button></div>
            <hr></hr>
            <ul>
                {props.list.map((item)=>{
                    return <li key={item.stuNo}>학번 : {item.stuNo}, 이름 : {item.stuName}, 학과 : {item.stuDept}</li>
                })}
                {list.map((item)=>{
                    return <li key={item.stuNo}>학번 : {item.stuNo}, 이름 : {item.stuName}, 학과 : {item.stuDept}</li>
                })}
            </ul>
        </div>
    )
}

function Review(){
    let [count, setCount] = useState(0);
    let [number, setNumber] = useState(0);

    // useEffect(()=>{},[]);
    useEffect(()=>{
        alert(" 안 녕 ! ! ! ");
        
        return ()=>{
            alert("클린 업 함수");
            // 해당 컴포넌트가 화면에서 사라졌을때 실행
        }

    }, [count]);
    // []안의 값이 변했을때 실행

    let list = [
        {stuNo : "1234", stuName : "홍길동", stuDept : "컴퓨터"},
        {stuNo : "4321", stuName : "김철수", stuDept : "전기"},
        {stuNo : "5678", stuName : "박영희", stuDept : "디자인"},
    ];
    // Footer에서 let [list, setList] = useState([]); 사용
    // function Review(){ >> 에서 바로 let [list, setList] = useState([]);로 사용해도 됨.
    return (
        <>
            <Header title="Hello React" fnInfo={(text)=>{alert(text);}}></Header>
            {/* ↓↓↓ 재사용성 높음 */}
            <Header title="R e a c t ! ! !" fnInfo={(text)=>{alert(text);}}></Header>
            <Header title="Web Programming" fnInfo={(text)=>{alert(text);}}></Header>
            <Header title="Title" fnInfo={(text)=>{alert(text);}}></Header>
            <hr></hr>
            <Body count={count} fnCount={setCount}></Body>
            <hr></hr>
            <Body count={number} fnCount={setNumber}></Body>
            <hr></hr>
            <Footer list={list}></Footer>
        </>
    )
}

export default Review