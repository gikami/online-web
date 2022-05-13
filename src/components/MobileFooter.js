import { NavLink } from 'react-router-dom';

export default function MobileFooter() {
    return (
        <footer className="d-block d-md-none">
          <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact={true}>
                            <img src="../img/icons/home-sprite.png" alt="home"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="search" data-bs-toggle="modal" data-bs-target="#announcement">
                            <img src="../img/icons/search-sprite.png" alt="search"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="reels" data-bs-toggle="modal" data-bs-target="#announcement">
                            <img src="../img/icons/video-sprite.png" alt="Reels"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="messages" data-bs-toggle="modal" data-bs-target="#announcement">
                            <img src="../img/icons/messages-sprite.png" alt="messages"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="my-profile" data-bs-toggle="modal" data-bs-target="#announcement">
                            <img src="../img/users/empty-photo.svg" alt="Имя"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}