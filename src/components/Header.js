import { Link } from 'react-router-dom';
import { IoArrowBackOutline, IoAddCircleOutline } from "react-icons/io5";
import { IconContext  } from "react-icons";

export default function Header(props) {
    return (
        <header className={props.className}>
            <div className="d-flex align-items-center">
                <button type="button" className="btn btn-3">
                    <IoArrowBackOutline />
                    <span className="ms-3 d-none d-lg-inline">Назад</span>
                </button>
                <form className="ms-3">
                    <input type="search" placeholder="Поиск"/>
                </form>
            </div>
            <div className="d-flex align-items-center">
                <Link to='notifications' data-bs-toggle="modal" data-bs-target="#announcement" className="me-3">
                    <img src="../img/icons/notifications-sprite.png" alt="notifications"/>
                    <div className='indicator active'></div>
                </Link>
                <Link to='messages' data-bs-toggle="modal" data-bs-target="#announcement" className="me-3">
                    <img src="../img/icons/messages-sprite.png" alt="messages"/>
                    <div className='indicator active'></div>
                </Link>
                <button type="button" className="btn btn-1" data-bs-toggle="modal" data-bs-target="#announcement">
                    <IconContext.Provider value={{className: "white fs-12", title: "Опубликовать" }}>
                        <IoAddCircleOutline />
                    </IconContext.Provider>
                    <span className="ms-3">Опубликовать</span>
                </button>
            </div>
        </header>
    )
}