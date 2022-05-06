import { NavLink, Link } from 'react-router-dom';

export default function MainNav() {
    return (
        <aside>
            <img src="../img/logo.svg" className="d-block mx-auto mb-3"/>
            <div className='fw-6 text-center'>Online</div>
            <div className="my-info mt-5">
                <div className="photo mx-auto mb-3">
                    <img src="../img/users/user0.png" className="d-block mx-auto mb-3"/>
                </div>
                <div className="fs-12 fw-5">Вероника Евгеньева</div>
                <div className="gray mt-2">@evgenievaaa</div>
                <div className="brief-stat d-flex justify-content-between mt-4">
                    <div>
                        <div className="fs-12 fw-6">86</div>
                        <div className="gray fs-08 fw-5">Публикаций</div>
                    </div>
                    <hr />
                    <div>
                        <div className="fs-12 fw-6">3.8k</div>
                        <div className="gray fs-08 fw-5">Подписчики</div>
                    </div>
                    <hr />
                    <div>
                        <div className="fs-12 fw-6">236</div>
                        <div className="gray fs-08 fw-5">Подписки</div>
                    </div>
                </div>
            </div>
            <nav className="mt-5">
                <ul>
                    <li>
                        <NavLink to="/">
                            <img src="../img/icons/home-sprite.png" alt="home"/>
                            <div>Главная</div>
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
                            <span className='gray'>2</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="messages">
                            <img src="../img/icons/messages-sprite.png" alt="messages"/>
                            <div>Сообщения</div>
                            <span className='gray'>12</span>
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