import Beta from './Beta'

function App041() {
    console.log('App041() 호출');

    return (
        <>
            <div>Alpha</div>
            <Beta/>     {/* <div>B</div> (component 화 한 것) */}
        </>
    )
}

export default App041;