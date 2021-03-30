import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import CustomizedNavbar from './components/CutomizedNavbar'
import { ProductProvider } from './contexts/ProductContext'
function App() {
  return (
    <ProductProvider>
      <CustomizedNavbar />
      <Home />
    </ProductProvider>
  )
}

export default App
