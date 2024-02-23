import './App.css';
import {Navbar,Container,Nav,Button,Row,Col} from 'react-bootstrap';
import data from './data.js'
import { useState } from 'react';
function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {
            shoes.map((a,index)=>{
              return (<상품 shoes={a} index={index}/>);
            })

          }
        </div>
      </div> 
    </div>
  );
}

function 상품(props){
  console.log(props.index);
  return( 
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + "/shoes"+(props.index+1)+".jpeg"} />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

export default App;
