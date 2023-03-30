const myElement=document.getElementById('root')
myElement.addEventListener("mousedown", (event) => {
    event.preventDefault();
    myElement.focus();
  });
  
myElement.addEventListener("mouseup", (event) => {
    event.preventDefault();
  });
  
  function App(){

    return(
        <div id='board' className='fixed inset-0 bg-[#c2c2d6] flex items-center justify-center'>
            <div className='w-[450px] h-[600px] bg-black' id='cg'>
                <div className='h-[10%] pt-[2px]' id='ctn'>
                    <div className='w-[95%] h-[15px] text-xl mb-[3px] text-white text-right' id='upper'></div>
                    <div className='w-[95%] h-[30px] text-3xl text-white text-right' id='lower'>0</div>
                </div>
                <div className='w-[95%] h-[88%] text-center text-3xl m-auto' id='main'>
                    {
                        Buttons.map(btn=>(
                            <div className={btn.div}>
                                {
                                    btn.children.map(child=>(
                                        <div className={child.class} onClick={child.func} id={child.id}>{child.text}</div>
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