import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button`
  background : ${ props => props.bg};
  color :  ${ props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`

function Detail(props){
  //mount, update시 코드 실행해주는 useEffect
  ////이곳에 적은 코드는 랜더링이 된 뒤에 작동한다.

  //let [alert,setAlert] = useState(true);
  let[count , setCount] = useState(1);
  let {id} = useParams();
  let [num,setNum] = useState();
  useEffect(()=>{
    return() =>{
      if(isNaN(num) == true){
        alert('ss');
      }

    }
  },[num]); //count가 변경될 때 작동한다 //시작 될 때에도 작동한다. []로 표시하면 1번만 실행된다.



    return (
      <div className="container">

        <input onChange={(e)=>{ setNum(e.target.value) }} type="text" />
        {count}
        <button onClick={()=>{setCount(count + 1)}} >버튼</button>
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    );
  }

  export default Detail;