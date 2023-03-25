const initial_state=`
**Bold**
> Block Quotes
# Heading
## Heading2
- list 1
- list 2
- list 3

[virus here](TROLL)

Inline \`<div></div>\`

code block:

\`\`\`
    let x=1
    let y=2
\`\`\`

![React](data:image/jpeg;base64,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)
`;
class  App extends React.Component {
    state={
        text:initial_state
    }
    handleChange=(e)=>{
        this.setState({text:e.target.value})
    }
    render(){
        const {text}=this.state;
        const markdown=marked(text,{breaks:true})
        return(
            <div>
                <h1 className='text-center m-4'>Markdown Converter</h1>
                <div className='row'>
                    <div className='col-6'>
                        <h6 className='text-center'>Type your markdown here</h6>
                        <textarea className='form-control' id='editor' value={text} onChange={this.handleChange} />
                    </div>
                    
                    <div className='col-6' >
                        <h6 className='text-center'>Result</h6>
                        <div id='preview' className='rounded p-2'
                        dangerouslySetInnerHTML={{__html:markdown}} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))