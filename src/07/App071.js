import React, { useState, useEffect } from 'react';   // 여기서 React 는 default, default 가 아닌 것은 {} 괄호 안에 있음.

import Sub from './Sub';
import {num, num2 as number2} from './Sub';


/**
 * useEffect
 *   https://react.dev/reference/react/useEffect
 *
 *   useEffect(setup, dependencies?)
 *      setup:  콜백함수. The function with your Effect’s logic
 *      dependencies:  의존하는 상태변수(들)
 *   React Hook that lets you synchronize a component with an external system.
 *  
 *  useEffect 의 setup 콜밸 실행시점:
 *  1. App() 함수가 최초 실행될때
 *    ('마운트 될때' 라고 함 ) (혹은 그려질때)
 *  2. 상태변수가 변경될때 (=> App()함수가 실행되니까)
 *     dependencies 에 등록되어 있어야 한다
 */

const App071 = () => {
    console.log("App071() 호출");

    const [data, setData] = useState(0);    // userState() 괄호 안에 있는 값이 '초기값'
    const [search, setSearch] = useState(0);    // 가령. 검색어 입력값.

    const download = () => {
        let downloadData = 5;
        setData(downloadData);      // 상태값 변경
    };

    useEffect(() => {
        console.log("App() 에서 useEffect 콜백 실행");
        download();     // 화면 로딩 시 최초의 데이터 다운로드 ..
    }, [search]);   // 어떠한 상태에도 의지하지 않을 것 이라면 빈 배열로.

    return (
        <div>
            {num}, {number2}
            <Sub/>
            Hello
            <hr/>
            <button onClick={() => {setSearch(2)}}>검색</button>
        <div>데이터: {data}</div>
        <button onClick={() => {setData(data + 1)}}>더하기</button>
        <button onClick={() => {setData(data - 1)}}>빼기</button>
        </div>
    );
};

export default App071;