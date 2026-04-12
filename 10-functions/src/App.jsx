import React from 'react'

const App = () => {

  const handleClick = () => {
    console.log('Button Clicked')
  }

  const onChange = (e) => {
    console.log("Input value:", e.target.value)
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click Me</button>

      <input type='text' placeholder='Enter your name' onChange={onChange} />

      <div className='box' onMouseMove={(e) => {
        console.log("Mouse X:", e.clientX)
        console.log("Mouse Y:", e.clientY)
      }}>
      </div>

      <div onScroll={(e) => {
        console.log("Scroll X:", e.target.scrollLeft)
        console.log("Scroll Y:", e.target.scrollTop)
      }}>
        <div className='page1'></div>
        <div className='page2'></div>
        <div className='page3'></div>
      </div>
    </div >
  )
}

export default App
