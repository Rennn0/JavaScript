function App(){
    return(
        <div id='board' className='fixed inset-0 bg-[#c2c2d6] flex items-center justify-center'>
            <div className='w-[400px] h-[500px] bg-black border-2 border-white'>
                <div className='w-[95%] h-[3%] text-white m-auto'>zzzz</div>
                <div className='w-[95%] h-[7%] text-white m-auto'>ZZZZZZZZZZ</div>
                <div className='w-[95%] h-[90%] text-center text-3xl m-auto'>
                    {
                        Buttons.map(btn=>(
                            <div className={btn.div}>
                                {
                                    btn.children.map(child=>(
                                        <div className={child.class}>{child.text}</div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))