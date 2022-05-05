import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.min.css';
import MainNav from './components/MainNav';
import AppRouter from './components/AppRouter';


function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="row g-0">
          <div className="col-3">
            <MainNav />
          </div>
          <div className="col-9">
            <AppRouter/>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
