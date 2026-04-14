import Usestate from "./components/hooks/usestate/Usestate"
import ComponentOne from "./components/hooks/usestate/ComponentOne"
import ComponentTwo from "./components/hooks/usestate/ComponentTwo"
import { useState } from "react"
import ExampleOne from "./components/hooks/usestate/ExampleOne"
import ExampleTwo from "./components/hooks/usestate/ExampleTwo"
import ExampleTHree from "./components/hooks/usestate/ExampleTHree"

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <section>
      <Usestate />
      <ComponentOne counter={counter} onClick={() => setCounter(counter + 1)} />
      <ComponentTwo counter={counter} onClick={() => setCounter(counter + 1)} />
      <ExampleOne />
      <ExampleTwo />
      <ExampleTHree />
    </section>
  )
}

export default App