import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.min.css';
import MainNav from './components/MainNav';
import AppRouter from './components/AppRouter';
import MobileFooter from "./components/MobileFooter";

function App() {
  return (
    <HashRouter>
      <div className="container-xl py-xl-4">
        <header className="d-flex d-md-none">
          <div className="fs-11 fw-6">@drugoiacc</div>
          <div className="d-flex align-items-center">
            <button type="button">
              <img src="/online-web/img/icons/add.svg" alt="Опубликовать"/>
            </button>
            <button type="button" className="ms-4">
              <img src="/online-web/img/icons/burger.svg" alt="Меню"/>
            </button>
          </div>
        </header>
        <div className="row g-0">
          <div className="d-none d-md-block col-2 col-xl-3 position-relative">
            <MainNav />
          </div>
          <div className="col-md-10 col-xl-9">
            <AppRouter/>
          </div>
        </div>
      </div>
      <MobileFooter />
    </HashRouter>
  );
}

export default App;
