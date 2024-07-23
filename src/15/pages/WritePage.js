import React from 'react';

const handleWrite = () => {
    // ListPage 의 setPosts() 로 '추가' 해야 함 !
    
};


const WritePage = () => {
    return (
        <>
            <h4>글 쓰기 페이지</h4>
            <form>
                id: <input type='number' placeholder='id 입력...'/><br/>
                제목: <input type='text' placeholder='제목을 입력...'/><br/>
                <button type='button' onClick={handleWrite}>글 쓰기</button>
            </form>
        </>
    );
};

export default WritePage;