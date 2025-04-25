function Footer(props){
    return (
      <div>
        {/* <ul>
            {props.list.map(item => {
                console.log(item);
                <li key={props.list.length+1}>
                    <a href="/" onClick={(e)=>{
                        e.preventDefault();
                        props.fnFooter(item);
                    }}>{item}</a>
                </li>
            })}
        </ul> */}
      </div>
    )
}

export default Footer