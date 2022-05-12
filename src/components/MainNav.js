import { NavLink, useLocation } from 'react-router-dom';

export default function MainNav(props) {
    let location = useLocation();

    return (
        <aside>
            <img src="../img/logo.svg" className="d-block mx-auto mb-3" />
            <div className='fw-6 text-center'>Online</div>
            {
                (location.pathname !== '/my-profile') &&
                <div className="my-info mt-4 mt-xxl-5">
                    <div className="photo mx-auto mb-3">
                        <img src="../img/users/user0.png" className="d-block mx-auto mb-3" />
                    </div>
                    <div className="d-none d-xl-block fs-12 fw-5">Вероника Евгеньева</div>
                    <div className="d-none d-xl-block gray mt-2">@evgenievaaa</div>
                    <div className="brief-stat d-none d-xxl-flex justify-content-between mt-4 px-3">
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
                            <div className='icon icon-home'></div>
                            <div className='title'>Главная</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="postfeed">
                            <div className='icon icon-video'></div>
                            <div className='title'>Видео Reels</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="my-profile">
                            <div className='icon icon-user'></div>
                            <div className='title'>Профиль</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="search" data-bs-toggle="modal" data-bs-target="#announcement">
                            <div className='icon icon-search'></div>
                            <div className='title'>Поиск</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="notifications" data-bs-toggle="modal" data-bs-target="#announcement">
                            <div className='icon icon-notifications'></div>
                            <div className='title'>Уведомления</div>
                            <span>2</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="messages" data-bs-toggle="modal" data-bs-target="#announcement">
                            <div className='icon icon-messages'></div>
                            <div className='title'>Сообщения</div>
                            <span>12</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="statistics" data-bs-toggle="modal" data-bs-target="#announcement">
                            <div className='icon icon-statistics'></div>
                            <div className='title'>Статистика</div>
                        </NavLink>
                    </li>
                    <li>
                        <button type='button'>
                            <div className='icon icon-exit'></div>
                            <div className='title text-start'>Выход</div>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}