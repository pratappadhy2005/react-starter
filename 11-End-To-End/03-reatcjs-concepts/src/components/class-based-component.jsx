import { Component } from 'react'

class ClassBasedComponent extends Component {

    state = {
        showText: false,
        changeColor: false
    }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         showText: false,
    //     }
    // }

    handleClick = () => {
        console.log('Button Clicked ')
        // This is not recommended as we are mutating the state directly
        //this.showText = !this.showText
        this.setState({ showText: !this.state.showText, changeColor: !this.state.changeColor })
    }

    render() {
        const { showText, changeColor } = this.state
        console.log(showText, changeColor)
        return (
            <div>
                {
                    showText ? <h3 style={{ color: changeColor ? 'red' : 'blue' }}>Class Based Component</h3> : null
                }
                <button onClick={this.handleClick}>Toggle Flag</button>
            </div>
        )
    }
}

export default ClassBasedComponent