// function Header(){
//     let num = 100;
//     return (
//       <div>
//         <h2 style={{color : "blue"}}>Hello React</h2>
//         <div>변수 사용은 중괄호 {num} </div>
//       </div>
//     )
// }
function Header(props){ // props
    console.log(props);
    // let num = 100;
    return (
      <div>
        <h2 style={{color : "blue"}}>
            {/* <a href="#" onClick={()=>{ */}
            <a href="/" onClick={(e)=>{
                e.preventDefault();
                // href 이동(기본 이벤트)을 방지
                props.fnHeader(props.contents);
            }}>{props.title}</a>
        </h2>
        {/* <div>변수 사용은 중괄호 {num} </div> */}
      </div>
    )
}

export default Header
// import 할때 Header를 내보내줌