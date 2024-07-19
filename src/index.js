import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App02 from './02/App02';     // 리액트 프로젝트 구조.
import App021 from './02/App021';
import App031 from './03/App031';   // JSX 기초
import App032 from './03/App032';   // CSS 스타일링
import App041 from './04/App041';   // component 화
import App042 from './04/App042';   // 데이터 상태, 렌더링
import App061 from './06/App061';   // useState 상태값 관리
import App062 from './06/App062';   // useState (배열) 상태값 관리


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> */}
    <App062/>
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
