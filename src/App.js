import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post='강남 우동 맛집';
  let [글제목, 글제목변경]=useState('남자 코드 추천');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <h4>{post}</h4> */}
      <div className='list'>
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
