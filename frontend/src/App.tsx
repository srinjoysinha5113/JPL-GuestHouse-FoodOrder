import './App.css'
import Menu from './pages/Menu/usermenu.tsx'

function App() {

  return (
    <div className="min-h-screen bg-fixed bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url(/jpl.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <Menu />
    </div>
  )
}

export default App
