const arr = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      text: "E",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      text: "A",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' 
      
    },
    {
      keyCode: 83,
      text: "S",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      text: "D",
      src:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      text: "Z",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      text: "X",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      text: "C",
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
function App(){
    const [active,setActive]=React.useState('')
      
    function sound(selector){
        const audio=document.getElementById(selector)
        audio.play()
        setActive(selector)
    }
    React.useEffect(()=>{
        document.addEventListener('keydown',e=>{
            sound(e.key.toUpperCase())
        })
    })
    return(
        <div id='drum-machine'>
            <div id='display' className='m-4'>{active}</div>
            <div className='drum-pads'>
                {arr.map(e=>
                <div className='drum-pad text-center' key={e.src} id={e.src} onClick={()=>sound(e.text)}>
                    {e.text}
                    <audio className='clip' id={e.text} src={e.src}></audio>
                </div>)}
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))