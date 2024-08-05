
import './App.css'
import Hilsen from './components/hilsen/Hilsen'
import Counter from './components/counter/Counter'
import Besvarelse from './components/besvarelse/Besvarelse'
import Ting from './components/ting/Ting'

function App() {

  return (
    <div>
      <Hilsen
      navn="Mathias Hansen"
      />

      <Counter/>

      <Besvarelse/>
      <Ting/>
    </div>
  )
}

export default App
