import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Header(){
    let {isDark, setDark} = useContext(DarkModeContext);
    return (
        <div style={{height:"150px",color: isDark ? 'white':'black', backgroundColor: isDark ? '#222' : '#eee'}}>
            헤더
            <div>
                <button onClick={()=>{setDark(!isDark)}}>{isDark ? '화이트모드' : '다크모드'}</button>
            </div>
        </div>
    )
}

export default Header