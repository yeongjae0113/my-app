import React, { useMemo, useState } from 'react';

/**
 * useMemo (memorization)
 *
 *   https://react.dev/reference/react/useMemo
 *   React Hook that lets you cache the result of a calculation between re-renders.
 *   연산된 값을 기억
 *
 *   const cachedValue = useMemo(calculateValue, dependencies)
 *      calculateValue: 어떤 함수를 메모(기억)할것인지
 *      dependencies: 위 함수는 언제 실행되게 할 것인지
 */

const App081 = () => {
    console.log("App081() 호출");

    const [list, setList] = useState([1, 2, 3, 4]);     // list 라는 상태 정의
    const [str, setStr] = useState("합계");     // str 이라는 상태 정의

    // list 안의 모든 값을 더하는 함수
    const getAddResult = () => {
        let sum = 0;
        list.forEach(i => sum += i);
        console.log("getAddResult() 호출 sum=", sum);
        
        return sum;
    };

    const addResult = useMemo(() => getAddResult(), [list]);
        // getAddResult() 결과를 기억한다. 그 기억하는 값을 return.
        // list 가 변경되었을 때만 getAddResult 를 실행함.

    return (
        <div>
            <button onClick={() => {setList([...list, 10])}}>리스트 값 추가</button><br/>
            <button onClick={() => {setStr(str + "!")}}>문자 변경</button><br/>
            {list.map(i => <span>{i}</span>)}
            <hr/>
            <div>{str}: {addResult}</div>
                    {/* ↑ addResult : useMemo 에 의해 메모라이징 된 결과만 렌더링. */}
        </div>
    );
};

export default App081;