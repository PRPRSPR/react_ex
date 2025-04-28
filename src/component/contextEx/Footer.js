import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Footer(){
    let {isDark, setDark} = useContext(DarkModeContext);
    return (
        <div style={{height:"200px", color: isDark ? 'white':'black', backgroundColor:isDark?'#666':'#aaa'}}>
            푸터
        </div>
    )
}

export default Footer