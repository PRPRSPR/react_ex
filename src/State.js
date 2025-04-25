import './App.css';
import { useState } from 'react';

// function NumState() {
//   // let num = 1;
//   // let num = useState(1);
//   // console.log(num);
//   // >>> [1, ƒ] >> 0:1, 1:f()

//   // let numState = useState(1);
//   // let num = numState[0];
//   // let setNum = numState[1];

//   let [num, setNum] = useState(1);

//   const fnIncrease = function(){
//     // num += 1;
//     // console.log(num);
//     // 내부적으로는 num 값 증가됨
//     // num[1](2);
//     // 화면에 1이 2로 바뀜
//     // num[1](++num[0]);

//     setNum(++num);
//   }
//   return (
//     <div className="State">
//       {num}
//       {/* 정적 페이지 >> 변화된 값이 반영되지 않음 */}
//       {/* >>> 렌더링 필요 */}
      
//       {/* user~~ >> hooks */}
//       {/* useState 사용 > import */}



//       <div>
//         <button onClick={fnIncrease}>증가</button>
//       </div>
//     </div>
//   );
// }

function State(){
  let [list, setList] = useState([
    <li key="1">홍길동</li>,
    <li key="2">김철수</li>,
    <li key="3">박영희</li>
  ]);
  let name = "";
  const fnAddUser = ()=>{
    let item = <li key={list.length+1}>{name}</li>;
    // list.push(item);

    // let newList = [...list];
    // [...list] >> list 안의 내용을 복제해서 넣어줌
    
    // newList.push(item);
    // setList(newList);
    // console.log(list);
    
    // 위 let [list, setList]의 list와 아래 setList(list);의 값이 같아서 useState가 동작하지 않음
    // list.push(item); >> [list, setList]의 list 값 변경됨
    // setList(list); >> 변경된 list 값 그대로. 같은 값이기 때문에 useState 동작X
    // 복제값 newList >> 홍길동,김철수,박영희 3개 값을 가진 리스트.
    // newList.push(item); + setList(newList); >> 3개 값에 입력한 값 추가됨. 
    // let [list, setList] >> 3개 값의 list와 4개 값을 가진 newList가 비교되기 때문에 useState 동작
    
    // let newList = [item, ...list];
    setList([item, ...list]);
    console.log("setList >>> ", [item, ...list]);
    // >>> (4) [{…}, {…}, {…}, {…}]
    console.log("list >>> ", list);
    // >>> (3) [{…}, {…}, {…}]
  }
  return (
    <div>
      <input onChange={(e)=>{
        // console.log(e.target.value);
        name = e.target.value;
      }}></input>
      <button onClick={fnAddUser}>추가</button>
      {list}
    </div>
  )
}

export default State;
