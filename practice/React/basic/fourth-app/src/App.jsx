import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from 'react-router-dom';

//style
const navStyle = ({isActive}) => ({
  color: isActive? '#007bff' : '#333',
  textDecoration : isActive ? "none" : "underline",
  padding: "5px 10px",
  fontWeight: isActive ? 'bold': 'normal'
})

function Home() {
  return <h1>Home Page</h1>
}

function Contact() {
  return <h1>Contact Page</h1>
}
 
function Products() {
  return(
    <div>
      <h1>Product Page</h1>
      <nav>
        <NavLink to="/Products/Cars" style={navStyle} element={<Cars />}>Cars</NavLink> | {""}
        <NavLink to="/Products/Bikes" style={navStyle} element={<Bikes />}>Bikes</NavLink>
        <Outlet />
      </nav>
    </div>
  )
}

function Cars(){
  return(
    <div>
      <h1>Cars</h1>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Safari</li>
      </ul>
    </div>
  )
}

function Bikes() {
  return(
    <div>
      <h1>Bikes</h1>
      <ul>
        <li>NS200</li>
        <li>R15</li>
        <li>MT150</li>
      </ul>
    </div>
  )
}


function App(){

  return(
    <BrowserRouter>
    {/* Navigation */}
    <nav>
      <NavLink to="/" style={navStyle}>Home</NavLink> | {" "}
      <NavLink to="/Products" style={navStyle}>Products</NavLink> | {" "}
      <NavLink to="/Contact" style={navStyle}>Contact</NavLink> | {" "}
    </nav>

      {/* Router */}
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/' element={<Home />}/>
        <Route path="/Products" element={<Products/>}> 
          <Route path='Cars' element={<Cars />}/>
          <Route path='Bikes' element={<Bikes />}/>
        </Route>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="*" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;