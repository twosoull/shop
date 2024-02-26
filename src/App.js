import './App.css';
import {Navbar,Container,Nav,Button,Row,Col} from 'react-bootstrap';
import data from './data.js'
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'

class Detatil2 extends React.Component{
  componentDidMount(){
    //컴포넌트 mount시 여기 코드 실행됨
  }
  componentDidUpdate(){
    //컴포넌트 update시 여기 코드 실행됨
  }
  componentWillUnmount(){
    //컴포넌트 unmount시 여기 코드 실행됨
  }

}

function App() {

  let [shoes,setShoes] = useState(data);

  let navigate = useNavigate();

  function sort(){
    let copy = [...shoes];
    
    let result = copy.sort(function (a,b){
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      
      if(x<y){
        return -1;
      }

      if(x>y){
        return 1;
      }
      return 0;
    });

    console.log(result);
    setShoes(result);
  }

  return (
    <div className="App">


     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
          <button onClick={()=>{sort()}}>가나다순 정렬버튼</button>
          <div className="container">
            <div className="row">
              {
                shoes.map((a,index)=>{
                  return (<Card shoes={a} index={index}/>);
                })
    
              }
            </div>
          </div> 
          </>
        } />
        <Route path="/detail/:id" element={
          <Detail shoes={shoes}></Detail>
        } />
        <Route path="*" element={
          <div>없는 페이지예요</div>
        } />
      </Routes>

    </div>
  );
}

function Card(props){
  return( 
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + "/shoes"+(props.index+1)+".jpeg"} />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}



export default App;
