import './App.css'
import { ICARDS } from './dados'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
      <div className='cards'>
        {ICARDS.map((fazenda, index) =>(
          <Card key={index} titulo={fazenda.titulo} foto={fazenda.foto} texto={fazenda.texto}/>
        ))}
      </div>
    </main>
    </>
  )
}

export default App
