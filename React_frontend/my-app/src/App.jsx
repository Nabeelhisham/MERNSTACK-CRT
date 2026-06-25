import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(3)

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 4)}
        >
          Count is {count}
        </button>
      </section>

    </>
  )
}

export default App
