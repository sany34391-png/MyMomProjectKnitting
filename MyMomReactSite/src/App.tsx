import "./styles/style.scss";
import iconImg from "./styles/assets/image/icon.jpg";
import St1foto from "./styles/assets/image/fotoSt1.jpg";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTelegramClick = () => {
    window.open("tg://resolve?domain=Olja10", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Хедер - окремий блок */}
      <header className="App-header">
        <button className="App-header_button" onClick={handleTelegramClick}>
          <h3 className="App-header_button-text">Написати нам</h3>
          <img src={iconImg} className="icon" alt="Telegram icon" />
        </button>

        <button 
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`App-header_Pannel ${menuOpen ? "open" : ""}`}>
          <li><a className="Search" href="#Search" onClick={() => setMenuOpen(false)}>Головна</a></li>
          <li><a className="Delivery" href="#Delivery" onClick={() => setMenuOpen(false)}>Іграшки</a></li>
          <li><a className="About" href="#About" onClick={() => setMenuOpen(false)}>Про нас</a></li>
          <li><a className="Contact" href="#Contact" onClick={() => setMenuOpen(false)}>Контакти</a></li>
        </ul>
      </header>

      {/* Основний контент - окремий блок, який йде ЗНИЗУ від хедера */}
      <div className="App-body-ST1" id="Search">
        <div className="App-body-ST1-left">
          <h1 className="App-body-ST1-title">
            Найкращі іграшки
            <span className="App-body-ST1-titleSPAN">ручної роботи</span>
          </h1>
          <h3 className="App-body-ST1-subtitle">М'які, безпечні, та створені з любов'ю</h3>
          <h3 className="App-body-ST1-subtitle">Найдіть ідеальну іграшку для вашої дитини</h3>
          <button 
            className="App-body-ST1-button"
            onClick={() => window.location.hash = 'Delivery'}
          >
          <span className="App-body-ST1-button_text">вибрати іграшку</span>
          </button>
          <button className="App-header_buttonST1" onClick={handleTelegramClick}>
            <h3 className="App-header_button-text">Написати нам</h3>
            <img src={iconImg} className="icon" alt="Telegram icon" />
          </button>
        </div>
        <div className="App-body-ST1-right">
          <img src={St1foto} alt="ST1 image" />
        </div>
      </div>
    </>
  );
}

export default App;