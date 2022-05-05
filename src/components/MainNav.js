import { NavLink, Link } from 'react-router-dom';

export default function MainNav() {
    return (
        <aside>
            <img src="../img/logo.svg" className="d-block mx-auto mb-3"/>
            <h1>Online</h1>
            <div className="my-info mt-5">
                <div className="photo">
                    <img src="../img/users/user0.png" className="d-block mx-auto mb-3"/>
                </div>
                <div className="fs-12 fw-5">Вероника Евгеньева</div>
                <div className="gray mt-2">@evgenievaaa</div>
                <div className="d-flex justify-content-between mt-4">
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
                            <svg viewBox="0 0 34 32" xmlns="http://www.w3.org/2000/svg">
                                <path className='fill stroke' d="M12.4928 23.7286V31H7.25419C5.61606 31 4.28809 29.672 4.28809 28.0339V14.7989C4.28809 13.818 4.7731 12.9004 5.5837 12.348L15.8567 5.34626C16.5792 4.85389 17.5298 4.85582 18.2502 5.35111L28.4261 12.3471C29.231 12.9004 29.7118 13.8145 29.7118 14.7913V28.0339C29.7118 29.672 28.3838 31 26.7457 31H21.498V23.7301C21.498 21.39 19.6009 19.4929 17.2607 19.4929H16.7301C14.3899 19.4929 12.4928 21.3884 12.4928 23.7286Z" stroke-width="0.508475" stroke-linecap="square"/>
                                <path className='stroke' d="M2 11.4117L14.8255 2.50939C16.1331 1.60174 17.8669 1.60174 19.1745 2.50939L32 11.4117" stroke-width="2.20339" stroke-linecap="round"/>
                            </svg>
                            <span>Главная</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="26.000000pt" height="26.000000pt" viewBox="0 0 26.000000 26.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)"
                    >
                        <path className='fill' d="M81 234 c-25 -31 -26 -52 -7 -80 13 -19 12 -22 -13 -37 -33 -19 -67
                        -78 -58 -101 5 -14 25 -16 126 -16 71 0 122 4 126 10 12 20 -17 81 -50 103
                        -30 20 -32 24 -19 42 21 28 17 59 -9 83 -32 30 -71 28 -96 -4z m89 -13 c14
                        -27 13 -47 -6 -65 -32 -33 -84 -8 -84 39 0 43 70 62 90 26z m36 -135 c59 -59
                        50 -66 -76 -66 -121 0 -128 4 -89 54 45 57 115 62 165 12z"/>
                        </g>
                        </svg>
                            Профиль
                            </NavLink>
                    </li>
                    <li><a href="/">Поиск</a></li>
                    <li><a href="/">Поиск</a></li>
                    <li><a href="/">Поиск</a></li>
                    <li><a href="/">Поиск</a></li>
                    <li><a href="/">Поиск</a></li>
                </ul>
            </nav>
        </aside>
    )
}