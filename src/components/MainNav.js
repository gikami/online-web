import { NavLink, useLocation } from 'react-router-dom';

export default function MainNav(props) {
    let location = useLocation();

    return (
        <aside>
            <img src="../img/logo.svg" className="d-block mx-auto mb-3"/>
            <div className='fw-6 text-center'>Online</div>
            {
                (location.pathname !== '/my-profile') &&
                <div className="my-info mt-4 mt-xxl-5">
                    <div className="photo mx-auto mb-3">
                        <img src="../img/users/user0.png" className="d-block mx-auto mb-3"/>
                    </div>
                    <div className="d-none d-xl-block fs-12 fw-5">Вероника Евгеньева</div>
                    <div className="d-none d-xl-block gray mt-2">@evgenievaaa</div>
                    <div className="brief-stat d-none d-xxl-flex justify-content-between mt-4 px-2">
                        <div>
                            <div className="fs-12 fw-6">86</div>
                            <div className="gray fs-08 fw-5 mt-2">Публикаций</div>
                        </div>
                        <hr />
                        <div>
                            <div className="fs-12 fw-6">3.8k</div>
                            <div className="gray fs-08 fw-5 mt-2">Подписчики</div>
                        </div>
                        <hr />
                        <div>
                            <div className="fs-12 fw-6">236</div>
                            <div className="gray fs-08 fw-5 mt-2">Подписки</div>
                        </div>
                    </div>
                </div>
            }
            <nav className="mt-4 mt-xxl-5">
                <ul>
                    <li>
                        <NavLink to="/">
                            <img src="../img/icons/home-sprite.png" alt="home"/>
                            <div>Главная</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="reels">
                            <img src="../img/icons/video-sprite.png" alt="Reels"/>
                            <div>Видео Reels</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="my-profile">
                            <img src="../img/icons/user-sprite.png" alt="user"/>
                            <div>Профиль</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="search">
                            <img src="../img/icons/search-sprite.png" alt="search"/>
                            <div>Поиск</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="notifications">
                            <img src="../img/icons/notifications-sprite.png" alt="notifications"/>
                            <div>Уведомления</div>
                            <span>2</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="messages">
                            <img src="../img/icons/messages-sprite.png" alt="messages"/>
                            <div>Сообщения</div>
                            <span>12</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="statistics">
                            <img src="../img/icons/stat-sprite.png" alt="statistics"/>
                            <div>Статистика</div>
                        </NavLink>
                    </li>
                    <li>
                        <button type='button'>
                            <img src="../img/icons/exit-sprite.png" alt="exit"/>
                            <div className='text-start'>Выход</div>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}