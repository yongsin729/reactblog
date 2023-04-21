/* eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post='강남 우동 맛집';
  let [글제목, 글제목변경]=useState(['남자 코드 추천','여자 코트 추천','가제목 ']);
  let [like,setLike]=useState(0);
  let [modal,setModal]=useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <h4>{post}</h4> */}
    
   
     
      {
        글제목.map(function(a,i){
          return(
            <div className='list'>
        <h4 >{글제목[i]}<span onClick={()=>{
          setLike(like+1);
        }}>👍</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
          )
        })
      }
      <button onClick={()=>{
        let copy=[...글제목];
        copy.sort();/* 반대는 reverse() */
        글제목변경(copy);
      }}>버튼</button>
      {/* <button onClick={()=>{
        let copy=[...글제목];
        copy[0]='여자 코트 추천'
        글제목변경(copy)
      }}>버튼</button> */}
      {/* onClick={()=>{
          setModal(!modal)// modal==false?setModal(true):setModal(false) 같은 의미 */}
       {
      modal==true?  <Modal></Modal>:null
    }
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
