import "./styles/main.scss";


function App() {

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src="public/logo.jpg" alt="Logo" className="Logo" />
          <ul className="">
            <li><a className="Search" href="#Search">Головна</a></li>
            <li><a className="Delivery" href="#Delivery">Іграшки</a></li>
            <li><a className="About" href="#About">Про нас</a></li>
            <li><a className="Contact" href="#Contact">Контакти</a></li>
            <button className="">
              Написати нам
              <img src="assets/images/contact-icon.jpg" className="icon01" alt="Contact" />
            </button>
          </ul>
        </header>
      </div>
      <div className="bg-[#fbc3ca] absolute top-16 left-0 w-full h-[calc(100vh-4rem)] flex items-center justify-center">

      </div>
    </>
  )
}

export default App
