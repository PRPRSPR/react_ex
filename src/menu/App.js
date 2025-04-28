import Header from '../component/Header';
import Body from '../component/Body';
import Footer from '../component/Footer';

function App() {
  let list = [
    {subId : "1", subName:"java"},
    {subId : "2", subName:"html"},
    {subId : "3", subName:"oracle"},
    {subId : "4", subName:"react"},
  ];
  let numList = [6,7,2,3,4];
  return (
    <div className="App">
      {/* <Header title="Hello React"></Header> */}
      <Header title="Hello React" contents="과목을 보여줍니다." fnHeader={(cont)=>{
        // fnHeader 함수를 보냄
        alert(cont);
      }}></Header>
      {/* <Header title="프로그래밍 재밌다"></Header> */}
      <Header title="프로그래밍 재밌다" fnHeader={()=>{}}></Header>
      {/* fnHeader={()=>{}} 빈 값이라도 넣어줘야함 */}
      <Body list={list} fnSubName={(subName)=>{
        alert(subName);
      }}></Body>
      <div>Hello React</div>
      <Footer list={numList} fnFooter={(num)=>{
        // numList가 목록으로 출력
        // 목록 클릭 시 해당 숫자 alert창에 띄우기
        alert(num);
      }}></Footer>
    </div>
  );
}

export default App;
