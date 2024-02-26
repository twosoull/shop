import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button`
  background : ${ props => props.bg};
  color :  ${ props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`

let NewBtn = styled.button(YellowBtn)` 복사해버리기
  스타일 넣어서 커스텀마이징 가능
`

function Detail(props){

  let {id} = useParams();

  console.log(id);

    return (
      <div className="container">
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
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