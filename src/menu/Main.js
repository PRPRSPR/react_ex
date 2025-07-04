import Header from "../component/contextEx/Header"
import Body from "../component/contextEx/Body"
import Footer from "../component/contextEx/Footer"
import { useState } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

function Main(){
    let [isDark, setDark] = useState(false);
    return (
        <DarkModeContext.Provider value={{isDark, setDark}}>
            <div style={{backgroundColor: isDark ? 'black':'white', minHeight:"300px"}}>
                <Header></Header>
                <Body></Body>
                <Footer></Footer>
            </div>
        </DarkModeContext.Provider>
    )
}

export default Main