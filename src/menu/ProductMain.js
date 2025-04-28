import Product from "../component/Product";
import { useState } from "react";

function ProductMain(){
    let [isFlg, setFlg] = useState(true);
    // let contents = null;
    // if(isFlg){
    //     contents = <Product></Product>
    // }
    return (
        <div>
            <button onClick={()=>{
                setFlg(!isFlg);
            }}>{isFlg ? "가리기":"보이기"}</button>
            {/* {contents} */}
            {isFlg ? <Product></Product>:null}
        </div>
    )
}

export default ProductMain