let data=[]
fetch('data.json')
.then(r=>r.json())
.then(quotes=>{
    data=quotes
    const text=document.querySelector('#text')
    const author=document.querySelector('#author')
    const button=document.querySelector('#new-quote')
    function randomQuote(){
        let random=Math.floor(Math.random()*data.length)
        text.innerHTML=data[random].quote
        author.innerHTML=data[random].author
    }
    randomQuote()
    button.addEventListener('click',randomQuote);

})
