import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Center(){
    let {isDark, setDark} = useContext(DarkModeContext);
    return (
        <div style={{flex : 2, height:"300px", color: isDark ? 'white':'black', backgroundColor:isDark?'#444':'#ccc'}}>
            가운데메뉴
        </div>
    )
}

export default Center