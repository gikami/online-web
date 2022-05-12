import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/style.min.css';
import MainNav from './components/MainNav';
import AppRouter from './components/AppRouter';
import MobileFooter from "./components/MobileFooter";
import { IoCloseOutline } from "react-icons/io5";
import store from './reducers';
import { getAuthlocalStorage } from "./api/storageAuth";
import { loggedIn } from "./actions/auth";

function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    (async () => {
      if (token) {
        const userStorage = await getAuthlocalStorage();
        store.dispatch(loggedIn({
          user: userStorage.user,
          token: token ? token : userStorage.token,
        }));
      }
    })()
  }, [token]);

  return (
    <BrowserRouter>
      <div className="container-xl py-xl-4">
        <header className="d-flex d-md-none">
          <div className="fs-11 fw-6">@drugoiacc</div>
          <div className="d-flex align-items-center">
            <button type="button">
              <img src="../img/icons/add.svg" alt="Опубликовать" />
            </button>
            <button type="button" className="ms-4">
              <img src="../img/icons/burger.svg" alt="Меню" />
            </button>
          </div>
        </header>
        <div className="row g-0">
          <div className="d-none d-md-block col-2 col-xl-3 position-relative">
            <MainNav />
          </div>
          <div className="col-md-10 col-xl-9">
            <AppRouter />
          </div>
        </div>
      </div>
      <MobileFooter />

      {/* Modal */}
      <div className="modal fade" id="announcement" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content text-center">
            <button type="button" className="btn-close" data-bs-dismiss="modal">
              <IoCloseOutline />
            </button>
            <div className="text">
              <div className="fs-20 fw-6 mb-2 mb-sm-3 mb-lg-4"><span className="text-uppercase">Веб-версия</span> находится в разработке!</div>
              <div>К сожалению, полноценно ей можно будет пользоваться только летом. <br />На данный момент предусмотрен лишь профиль. <br />Основной функционал доступен в <strong>приложении</strong>!</div>
            </div>
            <ul className="row row-cols-3 row-cols-lg-4 row-cols-xl-5 justify-content-center gx-2 gx-sm-4 gx-lg-5 mt-3 mt-sm-4 mt-lg-5 text-uppercase">
              <li className="position-relative">
                <img src="../img/google.png" alt="play market" />
                <a href="" className="btn btn-1 pastel w-100 fw-6 mt-2 mt-lg-4">Перейти</a>
              </li>
              <li className="position-relative">
                <img src="../img/apple.png" alt="apple store" />
                <a className="btn btn-2 pastel w-100 fw-6 mt-2 mt-lg-4"><span>Скоро</span></a>
              </li>
              <li className="position-relative">
                <img src="../img/huawei.png" alt="Huawei AppGallery" />
                <a className="btn btn-2 pastel w-100 fw-6 mt-2 mt-lg-4"><span>Скоро</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
