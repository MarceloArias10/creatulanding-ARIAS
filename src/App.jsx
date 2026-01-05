import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a TechZone" />
    </div>
  )
}

export default App;
