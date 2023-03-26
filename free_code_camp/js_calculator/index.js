// const table=[
//     {
//         symbol:'AC',
//         style:''
//     },
//     {},
//     {},
//     {},
//     {}
// ]
// 373x 419y
const unitX=373/4; 
const unitY=419/5;

function App(){
    return(
        <div id='board' className='fixed inset-0 bg-[#c2c2d6] flex items-center justify-center'>
            <div className='w-[400px] h-[500px] bg-black border-2 border-white'>
                <div className='w-[95%] h-[3%] text-white m-auto'>ZZZZZZZ</div>
                <div className='w-[95%] h-[7%] text-white m-auto'>ZZZZZZZZZZ</div>
                <div className='w-[95%] h-[90%] text-center text-3xl m-auto'>
                    <div className='w-[100%] h-[20%] m-auto flex'>
                        <div className={`text-white w-[50%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>AC</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>/</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>X</div>
                    </div>
                    <div className='w-[100%] h-[20%] m-auto flex'>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>7</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>8</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>9</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>-</div>
                    </div>
                    <div className='w-[100%] h-[20%] m-auto flex'>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>4</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>5</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>6</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>+</div>
                    </div>
                    <div className='w-[100%] h-[20%] m-auto flex'>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>1</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>2</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>3</div>
                        <div className={`text-white w-[25%] h-[200%] items-center justify-center text-center flex border-2 border-white`}>=</div>
                    </div>
                    <div className='w-[100%] h-[20%] m-auto flex'>
                        <div className={`text-white w-[50%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>0</div>
                        <div className={`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`}>.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'))