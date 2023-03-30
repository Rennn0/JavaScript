let Data={
    lValue:'',
    rValue:'',
    operation:'',
    sent:''
}
function update(){
    Data.sent=Data.lValue+Data.operation+Data.rValue;
    document.getElementById('upper').innerHTML=Data.sent;
    document.getElementById('lower').innerHTML=switched?Data.rValue:Data.lValue
};

let switched=false

const Buttons=[
    {
        div:'w-[100%] h-[20%] m-auto flex',
        children:[
            {
                text:'AC',
                class:`text-white w-[50%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,
                id:'AC',
                func:()=>{
                    Data.sent=Data.lValue=Data.rValue=Data.operation=''
                    switched=false
                    update();
                }
            },
            {
                text:'/' ,
                class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]` ,
                id:'gayofa',
                func:()=>{
                    Data.operation='/'
                    switched=true
                    update();
                }
            },
            {    
                text:'X',
                class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]` ,
                id:'gamravleba',
                func:()=>{
                    Data.operation='x'
                    switched=true
                    update();
                }
            }
        ]
    },
    {
        div:'w-[100%] h-[20%] m-auto flex',
        children:[
            {
                text:'7' ,
                class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,
                id:'shvidi',
                func:()=>{
                    Data.lValue.length && Data.operation.length ?Data.rValue+='7':Data.lValue+='7'
                    update();
                }
            },
            {
                text: '8',
                class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]` ,
                id:'rva',
                func:()=>{
                    Data.lValue.length && Data.operation.length ?Data.rValue+='8':Data.lValue+='8'
                    update();
                }
            },
            {
                text: '9',
                class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,
                id:'cxra',
                func:()=>{
                    Data.lValue.length && Data.operation.length ?Data.rValue+='9':Data.lValue+='9'
                    update();
                }
            },
            {
                text: '-',
                class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]` ,   
                id:'gamokleba',
                func:()=>{
                    Data.operation='-'
                    switched=true
                    update();
                }
            }
        ]
    },
    {
        div:'w-[100%] h-[20%] m-auto flex',
        children:[
            {
                text: '4',
                class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,   
                id:'otxi',
                func:()=>{
                    Data.lValue.length && Data.operation.length ?Data.rValue+='4':Data.lValue+='4'
                    update();
                }
            },
            {
                text: '5',
                class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]` ,   
                id:'xuti',
                func:()=>{
                    Data.lValue.length && Data.operation.length ?Data.rValue+='5':Data.lValue+='5'
                    update();
                }
            },
            {
                text: '6',
                class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]` ,   
                id:'eqvsi',
                func:()=>{
                    Data.lValue.length && Data.operation.length ?Data.rValue+='6':Data.lValue+='6'
                    update();
                }
            },
            {
                text: '+',
                class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,   
                id:'mimateba',
                func:()=>{
                    Data.operation='+'
                    switched=true
                    update();
                }
            }
        ]
    },
    {
        div:'w-[100%] h-[20%] m-auto flex',
        children:[
            {
                text: '1',
                class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,   
                id:'erti',
                func:()=>{
                    Data.lValue.length && Data.operation.length ?Data.rValue+='1':Data.lValue+='1'
                    update();
                }
            },
            {
                text: '2',
                class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,   
                id:'ori',
                func:()=>{
                    Data.lValue.length && Data.operation.length ?Data.rValue+='2':Data.lValue+='2'
                    update();
                }
            },
            {
                text: '3',
                class: `text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,   
                id:'sami',
                func:()=>{
                    Data.lValue.length && Data.operation.length ?Data.rValue+='3':Data.lValue+='3'
                    update();
                }
            },
            {
                text: '=',
                class: `text-white w-[25%] h-[200%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,   
                id:'toloba',
                func:()=>{
                    let answer=0
                    switch(Data.operation){
                        case 'x':
                            answer=Number(Data.lValue)*Number(Data.rValue);
                            break;
                        case '/':
                            answer=Number(Data.lValue)/Number(Data.rValue);
                            break;
                        case '+':
                            answer=Number(Data.lValue)+Number(Data.rValue);
                            break;
                        case '-':
                            answer=Number(Data.lValue)-Number(Data.rValue);
                            break;  
                        }
                    document.getElementById('upper').innerHTML=Data.sent+'='+answer;
                    document.getElementById('lower').innerHTML=answer
                    Data.sent=Data.lValue=Data.rValue=Data.operation=''
                    switched=false
                }
            }
        ]
    },
    {
        div:'w-[100%] h-[20%] m-auto flex',
        children:[
            {
                text: '0',
                class: `text-white w-[50%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,   
                id:'noli',
                func:()=>{
                    Data.lValue.length && Data.operation.length ?Data.rValue+='0':Data.lValue+='0'
                    update();
                }
            },
            {
                text: '.',
                class:`text-white w-[25%] h-[100%] items-center justify-center text-center flex hover:text-black hover:border-[1px]`,   
                id:'wertili',
                func:()=>{
                    switched?Data.rValue+='.':Data.lValue+='.'
                    update();
                }
            }
        ]
    }
]
