import HeaderContext from "../component/HeaderContext"
import { MyContext } from "../context/MyContext"

function ContextEx(){
    // let test = "1234";
    let sharedValue = {id : "test", name : "hong"};
    return (
        <>
            {/* <MyContext.Provider value={{test:"1234"}}> */}
            {/* <MyContext.Provider value={{test}}> */}
            <MyContext.Provider value={sharedValue}>
                <HeaderContext></HeaderContext>
            </MyContext.Provider>
        </>
    )
}

export default ContextEx