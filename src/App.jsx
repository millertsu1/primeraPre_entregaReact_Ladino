import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/Navbar/Navbar"


const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={ "Welcome to the ChompiStore" } />
    </>
  )
}

export default App