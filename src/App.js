import logo from './logo.svg';
import './App.css';

function Header(){
  return <div>
    <div>이 녀석은 헤더입니다</div>
    {/* 모든 작업은 한 태그 안에서만 */}
    {/* App 처럼 ()로 묶어도 됨 */}
  </div>
}

function Footer(){
  return (
    <div>
      <div style={{color:"red",fontSize:"20px"}}>이 녀석은 푸터입니다</div>
      {/* style은 중괄호 2개 {{}} color : >>> " red " <<<   font-size =>> fontSize */}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* 위에서 만든 헤더가 부착됨 */}
      <div>Hello React</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
