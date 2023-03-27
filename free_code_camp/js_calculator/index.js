function App(){
    return(
        <div id='board' className='fixed inset-0 bg-[#c2c2d6] flex items-center justify-center'>
            <div className='w-[400px] h-[500px] bg-black border-2 border-white'>
                <div className='w-[95%] h-[3%] text-white m-auto'>zzzz</div>
                <div className='w-[95%] h-[7%] text-white m-auto'>ZZZZZZZZZZ</div>
                <div className='w-[95%] h-[90%] text-center text-3xl m-auto'>
                    <div className='w-[100%] h-[20%] m-auto flex'>
                        <div className={Buttons[0].class}>{Buttons[0].text}</div>
                        <div className={Buttons[1].class}>{Buttons[1].text}</div>
                        <div className={Buttons[2].class}>{Buttons[2].text}</div>
                    </div>
                    <div className='w-[100%] h-[20%] m-auto flex'>
                        <div className={Buttons[3].class}>{Buttons[3].text}</div>
                        <div className={Buttons[4].class}>{Buttons[4].text}</div>
                        <div className={Buttons[5].class}>{Buttons[5].text}</div>
                        <div className={Buttons[6].class}>{Buttons[6].text}</div>
                    </div>
                    <div className='w-[100%] h-[20%] m-auto flex'>
                        <div className={Buttons[7].class}>{Buttons[7].text}</div>
                        <div className={Buttons[8].class}>{Buttons[8].text}</div>
                        <div className={Buttons[9].class}>{Buttons[9].text}</div>
                        <div className={Buttons[10].class}>{Buttons[10].text}</div>
                    </div>
                    <div className='w-[100%] h-[20%] m-auto flex'>
                        <div className={Buttons[11].class}>{Buttons[11].text}</div>
                        <div className={Buttons[12].class}>{Buttons[12].text}</div>
                        <div className={Buttons[13].class}>{Buttons[13].text}</div>
                        <div className={Buttons[14].class}>{Buttons[14].text}</div>
                    </div>
                    <div className='w-[100%] h-[20%] m-auto flex'>
                        <div className={Buttons[15].class}>{Buttons[15].text}</div>
                        <div className={Buttons[16].class}>{Buttons[16].text}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Buttons=[
    {
        text:'AC',
        class:`text-white w-[50%] h-[100%] items-center justify-center text-center flex border-2 border-white`
    },
    {
        text:'/' ,
        class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white` ,
    },
    {    
        text:'X',
        class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white` ,
    },
    {
        text:'7' ,
        class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`,
    },
    {
        text: '8',
        class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white` ,
    },
    {
        text: '9',
        class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`,
    },
    {
        text: '-',
        class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white` ,   
    },
    {
        text: '4',
        class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`,   
    },
    {
        text: '5',
        class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white` ,   
    },
    {
        text: '6',
        class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white` ,   
    },
    {
        text: '+',
        class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`,   
    },
    {
        text: '1',
        class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`,   
    },
    {
        text: '2',
        class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`,   
    },
    {
        text: '3',
        class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`,   
    },
    {
        text: '=',
        class: `text-white w-[25%] h-[200%] items-center justify-center text-center flex border-2 border-white`,   
    },
    {
        text: '0',
        class: `text-white w-[50%] h-[100%] items-center justify-center text-center flex border-2 border-white`,   
    },
    {
        text: '.',
        class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex border-2 border-white`,   
    }
]

ReactDOM.render(<App/>,document.getElementById('root'))