function Body(props){
    // let list = [
    //   <li>JAVA</li>,
    //   <li>HTML</li>,
    //   <li>ORACLE</li>,
    //   <li>REACT</li>
    // ];
    // 리스트에 태그 담기 가능
    
    // let list = [];
    // for(let i=0; i<props.list.length; i++){
    //     list.push(<li key={props.list[i].subId}>{props.list[i].subName}</li>);
    //     // <li key={props.list[i].subId}> 태그에 고유값 부여
    // }
  
    let title = <h3>과목 목록</h3>
  
    return (
      <div>
        {/* <ul>
          <li>JAVA</li>
          <li>HTML</li>
          <li>ORACLE</li>
          <li>REACT</li>
        </ul> */}
        {/* 위와 아래는 같음 */}
        <ul>

          {title}

          {/* {list} */}
          
          {/* {props.list.map((item)=>{
            return <li>{item.subName}</li>
          })} */}
          
          {/* {props.list.map(item=><li>{item.subName}</li>)} */}
          
          {/* {props.list.map(item=><li key={item.subId}>{item.subName}</li>)} */}
          
          {props.list.map(item=>
                <li key={item.subId}>
                    <a href="/" onClick={(e)=>{
                        e.preventDefault();
                        props.fnSubName(item.subName);
                    }}>{item.subName}</a>
                </li>
            )}
        
        </ul>
      </div>
    )
}

export default Body