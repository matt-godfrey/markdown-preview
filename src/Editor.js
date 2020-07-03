import React from 'react'
import marked from 'marked'

const defaultText = `
# This is my Markdown Previewer!

## This is a sub-heading...
### And here's an even smaller heading...
  
This is a div \`<div></div>\`

\`\`\`
    function adder(a, b) {
        return a + b;
    }
\`\`\`
  
You can also make text **bold**... 
Or _italic_.

There's also [links](https://www.freecodecamp.com), and

> Block Quotes!

> Here is a list of my favourite things:
- Guinness
- Books
- coding

And finally, an embedded image:

![Image](https://goo.gl/Umyytc/)
`;

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: defaultText
        }
        this.handleChange = this.handleChange.bind(this)
        
    }

handleChange(event) {
    this.setState({
        input: event.target.value
    })
   
}

    render() {
        const { input } = this.state
        const markdown = marked(input, {breaks: true})
        return (
            <div id="container">
                 <h5 id="editor-title">Editor</h5>
                <textarea id ="editor" type="text" onChange={this.handleChange} value={this.state.input}>
                
                </textarea>
                
                <div id="preview" dangerouslySetInnerHTML = {{__html: markdown}}>
                 
                </div>
                
            </div>
        )
        
    }
}


export default Editor