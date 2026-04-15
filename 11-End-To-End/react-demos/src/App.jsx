import Usestate from "./components/hooks/usestate/Usestate"
import ComponentOne from "./components/hooks/usestate/ComponentOne"
import ComponentTwo from "./components/hooks/usestate/ComponentTwo"
import { useState } from "react"
import ExampleOne from "./components/hooks/usestate/ExampleOne"
import ExampleTwo from "./components/hooks/usestate/ExampleTwo"
import ExampleTHree from "./components/hooks/usestate/ExampleTHree"
import Counter from "./components/hooks/usestate/excercise/Counter"

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
      <Counter />
    </section>
  )
}

export default App