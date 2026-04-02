import { Component } from 'react'

class ClassBasedComponent extends Component {

    state = {
        showText: false,
        changeColor: false,
        count: 0,
        changeCountStyle: false
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

    handleCount = () => {
        console.log('Button Clicked ')
        this.setState({ count: this.state.count + 1 })
    }

    // component did mount
    componentDidMount() {
        console.log('this is first time on page load')
        this.setState({
            showText: !this.state.showText,
            changeColor: !this.state.changeColor
        })
    }

    //component did update
    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count && this.state.count === 10) {
            this.setState({ changeCountStyle: !this.state.changeCountStyle })
        } else if (this.state.count !== prevState.count && this.state.count !== 10) {
            this.setState({ changeCountStyle: false })
        }
        console.log(prevProps, prevState)
    }

    //component will unmount
    componentWillUnmount() {
        console.log('this is last time on page load')
    }

    render() {
        const { showText, changeColor, changeCountStyle } = this.state
        console.log(changeCountStyle)
        //console.log(showText, changeColor)
        return (
            <div>
                {
                    showText ? <h3 style={{ color: changeColor ? 'red' : 'blue' }}>Class Based Component</h3> : null
                }
                <button onClick={this.handleClick}>Toggle Flag</button><br />
                <button onClick={this.handleCount}>Increase Count Value</button>
                <h3 style={{ color: changeCountStyle ? 'red' : 'blue' }}>Count Value: {this.state.count}</h3>
            </div>
        )
    }
}

export default ClassBasedComponent