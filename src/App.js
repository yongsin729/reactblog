/* eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

var now=new Date();
  var month=now.getMonth();
  var day=now.getDate();;
function App() {

  let post='강남 우동 맛집';
  let [글제목, 글제목변경]=useState(['남자 코드 추천','여자 코트 추천','가제목 ']);
  let [like,setLike]=useState([0,0,0,0,0,0,0,0,0]);
  let [modal,setModal]=useState(false);
  let [sortButton,setSortButton]=useState(true);
  let [title,setTitle]=useState(0);
  let [입력값,입력값변경]=useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <h4>{post}</h4> */}
      {/* {글제목.indexOf(글제목[i])}  인덱스번호 빼오기 */}
     
      {
        글제목.map(function(a,i){
          return(
            
            <div className='list'>
        <h4 >  <span onClick={()=>{
         setModal(!modal)
         setTitle(i)
        }}>&nbsp;{글제목[i]}</span><span onClick={()=>{
          let copy=[...like];
          copy[i]=copy[i]+1;
          setLike(copy)
        }}>👍</span> {like[i]} </h4>
        <p>{month+1}월 {day}일 발행</p>
        <button onClick={()=>{
          let copy=[...글제목]
          copy.splice(i,1);//array.splice(x,1) 원하는 x번째 자료 삭제 
          글제목변경(copy);
        }}>삭제</button>
        
      </div>
          )
        })
      }
       {
      modal==true?  <Modal 글제목={글제목} title={title} like={like} index></Modal>:null
    }
      <button className='solt' onClick={()=>{
        let copy=[...글제목];
        {
          sortButton==true?copy.sort():(copy.reverse())
        }
        // copy.sort();/* 반대는 reverse() */
        글제목변경(copy);
      }}>정렬</button>
      <div className='add-blog'> 
        <input onChange={(e)=>{
          입력값변경(e.target.value)
        }}/><button onClick={()=>{
          let copy=[...글제목]
          copy.push(입력값);
          let last=copy[copy.length-1];
          console.log(last);
          {
              last!==""?글제목변경(copy):null// 공백일경우 입력막기
          }
        }}>글발행</button>
      </div>
      {/* <button onClick={()=>{
        let copy=[...글제목];
        copy[0]='여자 코트 추천'
        글제목변경(copy)
      }}>버튼</button> */}
      {/* onClick={()=>{
          setModal(!modal)// modal==false?setModal(true):setModal(false) 같은 의미 */}
      
    </div>
  );
}
// 이벤트 핸들러 공부, 
// //props로 부모-> 자식 state전송하는법
// 1. 자식 컴포넌트 사용하는 곳에 가서<자식컴포넌트 작명={state이름}/>
// 2. 자식컴포넌트 만드는 function으로 가서 props 라는 파라미터 등록 후 props.작명 사용
function Modal(props){
  
  return(
    <div className='modal'>
      <h4>{props.글제목[props.title]} </h4>
      <p>{month+1}월 {day}일 발행</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
