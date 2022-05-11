import { NavLink } from 'react-router-dom';

export default function MobileFooter() {
    return (
        <footer className="d-block d-md-none">
          <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <img src="../img/icons/home-sprite.png" alt="home"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="search">
                            <img src="../img/icons/search-sprite.png" alt="search"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="reels">
                            <img src="../img/icons/video-sprite.png" alt="Reels"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="messages">
                            <img src="../img/icons/messages-sprite.png" alt="messages"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="my-profile">
                            <img src="../img/photo.png" alt="Имя"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}