


function App() {

  return (
    <>
      <div className="App w-full">
        <header className="App-header fixed top-0 left-0 w-full h-24 bg-[#cafeca] text-gray-800 flex ">
          <img src="public/logo.jpg" alt="Logo" className="flex items-center justify-start w-40 h-16 pl-" />
          <ul className="flex text-gray-800 text-lg items-center justify-end w-full h-full gap-8 pr-86 pb-8">
            <li><a className="Search" href="#Search">Search</a></li>
            <li><a className="Delivery" href="#Delivery">Delivery</a></li>
            <li><a className="About" href="#About">About us</a></li>
            <li><a className="Contact" href="#Contact">Contact</a></li>
          </ul>
        </header>
      </div>
      <div className="bg-[#fbc3ca] absolute top-16 left-0 w-full h-[calc(100vh-4rem)] flex items-center justify-center">

      </div>
    </>
  )
}

export default App
