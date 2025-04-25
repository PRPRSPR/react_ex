import { useState, useEffect } from "react";

function Product(){
    let [list, setList] = useState([]);
    let product = {productId : "", productName : "", price:"", stock:"", category:""};

    useEffect(()=>{
        fetch("http://localhost:3005/product")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setList(data.list);
            });
    },[]);
    const fnInput = (e)=>{
        product[e.target.id] = e.target.value;
        // product[key] = value;
        console.log(product);
    }
    return (
        <div>
            <div><input placeholder="번호" id="productId" onChange={fnInput}></input></div>
            <div><input placeholder="상품명" id="productName" onChange={fnInput}></input></div>
            <div><input placeholder="가격" id="price" onChange={fnInput}></input></div>
            <div><input placeholder="재고" id="stock" onChange={fnInput}></input></div>
            <div><input placeholder="카테고리" id="category" onChange={fnInput}></input></div>
            <div><button onClick={()=>{
                setList([...list, product]);
            }}>저장</button></div>
            <table>
                <tr>
                    <th>번호</th>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>재고</th>
                    <th>분류</th>
                </tr>
                {list.map((item)=>{
                    return <tr key={item.productId}>
                        <td>{item.productId}</td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>{item.category}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default Product