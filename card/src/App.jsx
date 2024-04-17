import './main.css'
import itemInfo from "./components/shopCard/itemInfo.js";
import ShopItemFunc from "./components/shopCard/shopItemFunc.jsx";

function App() {

  return (
          <div className="container">
              <div className="background-element">
              </div>
              <div className="highlight-window">
                  <div className='highlight-overlay'></div>
              </div>
              <div className="window">
                  <ShopItemFunc {...itemInfo}/>
              </div>
          </div>
  )
}

export default App
