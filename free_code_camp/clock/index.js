const break_length=document.getElementById('break-length')
const session_length=document.getElementById('session-length')
const break_decrement=document.getElementById('break-decrement')
const session_decrement=document.getElementById('session-decrement')
const break_increment=document.getElementById('break-increment')
const session_increment=document.getElementById('session-increment')
const time_left=document.getElementById('time-left')
const timer_border=document.getElementById('timer-label')
const timer_text=document.getElementById('timer-text')
const start=document.getElementById('start_stop')
const reset=document.getElementById('reset')
const pause=document.getElementById('pause')
const audio=document.getElementById('beep')
const default_break=5
const default_session=25

break_length.innerHTML=default_break
session_length.innerHTML=default_session
time_left.innerHTML=default_session+':00'

let break_time=default_break
let session_time=default_session
function update_session(){
    session_length.innerHTML=session_time
    time_left.innerHTML=session_time+':00'
}
function update_break(){
    break_length.innerHTML=break_time
}
break_increment.addEventListener('click',()=>{if(break_time<60)break_time++;update_break()})
session_increment.addEventListener('click',()=>{if(session_time<60)session_time++;update_session()})
break_decrement.addEventListener('click',()=>{if(break_time>1)break_time--;update_break()})
session_decrement.addEventListener('click',()=>{if(session_time>1)session_time--;update_session()})

let timer=null
let break_timer=null
let after_pause
start.addEventListener('click',()=>{
    if(timer===null){
        let total_seconds=session_time*60
        timer=setInterval(()=>{
            break_decrement.disabled=true
            session_decrement.disabled=true
            break_increment.disabled=true
            session_increment.disabled=true
            let minutes_left=Math.floor(total_seconds/60)
            let seconds_left=total_seconds%60
        
            time_left.innerHTML=`${minutes_left}:${seconds_left<10?'0':''}${seconds_left}`
            total_seconds--    
            after_pause=total_seconds  
            
            if(total_seconds<59){
                timer_border.style.border='5px solid red'
                if(seconds_left<1){
                    clearInterval(timer)
                    break_period()
                    audio.play()
                    setTimeout(()=>{
                        audio.pause()
                    },7000)
                }
            }
        },1000)
    }
})

let paused=false
pause.addEventListener('click',()=>{
    if(paused){
        paused=false
        timer=setInterval(()=>{
            let total_seconds=after_pause
            let minutes_left=Math.floor(total_seconds/60)
            let seconds_left=total_seconds%60
        
            time_left.innerHTML=`${minutes_left}:${seconds_left<10?'0':''}${seconds_left}`
            total_seconds--    
            after_pause=total_seconds
            
            if(total_seconds<0){
                clearInterval(timer)
                audio.play()
                break_period()
                setTimeout(()=>{
                    audio.pause()
                },7000)
            }
        },1000)
    }else{
        paused=true
        clearInterval(timer)
    }
})

reset.addEventListener('click',()=>{
    break_decrement.disabled=false
    session_decrement.disabled=false
    break_increment.disabled=false
    session_increment.disabled=false
    if(timer || break_timer){
        clearInterval(timer)
        clearInterval(break_timer)
        time_left.innerHTML=session_length.innerHTML+':00'
        paused=false
        timer=null
        break_timer=null
        after_pause=0
        audio.pause()
        timer_border.style.border='5px solid #155e75'
    }
})

function break_period(){
    let break_start=break_time*60
    timer_text.innerHTML='Break'
    break_timer=setInterval(()=>{
        let minutes_left=Math.floor(break_start/60)
        let seconds_left=break_start%60
        timer_border.style.border='5px solid #f59e0b'
        time_left.innerHTML=`${minutes_left}:${seconds_left<10?'0':''}${seconds_left}`
        break_start--    
        
        if(break_start<1){
            clearInterval(break_timer)
            time_left.innerHTML='Timeout'
            const break_audio=new Audio('./break_beep.mp3')
            break_audio.play()
        }
    },1000)
}
