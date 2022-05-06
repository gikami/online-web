import { IoArrowBackOutline, IoAddCircleOutline } from "react-icons/io5";
import { IconContext  } from "react-icons";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

export default function UserProfile() {
    return (
        <main>
            <header>
                <div className="d-flex align-items-center">
                    <button type="button" className="btn btn-3">
                        <IoArrowBackOutline />
                        <span className="ms-3">Назад</span>
                    </button>
                    <form className="ms-3">
                        <input type="search" placeholder="Поиск"/>
                    </form>
                </div>
                <div>
                    <button type="button" className="btn btn-1">
                        <IconContext.Provider value={{className: "icon white fs-12", title: "Опубликовать" }}>
                            <IoAddCircleOutline />
                        </IconContext.Provider>
                        <span className="ms-3">Опубликовать</span>
                    </button>
                </div>
            </header>

            <section>
                <div className="user-info row justify-content-between">
                    <div className="col-6">
                        <h1>@alexanr</h1>
                        <h2>Александра Андреева</h2>
                        <div className="fs-09 blue"><a href="mailto:saitname@site.com">saitname@site.com</a></div>
                        <div className="about-yourself mt-4">Профессионально занимаюсь подбором стиля одежды для ваших фот...ещё
                        </div>
                        <div className="brief-stat d-flex justify-content-between mt-4">
                            <div className="py-1">
                                <div className="fs-12 fw-6">86</div>
                                <div className="gray fs-08 fw-5 mt-2">Публикаций</div>
                            </div>
                            <hr />
                            <div className="py-1">
                                <div className="fs-12 fw-6">3.8k</div>
                                <div className="gray fs-08 fw-5 mt-2">Подписчики</div>
                            </div>
                            <hr />
                            <div className="py-1">
                                <div className="fs-12 fw-6">236</div>
                                <div className="gray fs-08 fw-5 mt-2">Подписки</div>
                            </div>
                        </div>
                        <div className="mt-4 row row-cols-2">
                            <div>
                                <button type="button" className="btn btn-1 w-100">Подписаться</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-1 w-100">Написать</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="topical mt-5">
                <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={25}
                    slidesPerView={"auto"}
                    freeMode={true}
                    navigation
                >
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08 mt-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08 mt-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08 mt-1">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08 mt-1">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="fs-08">Актуальное</div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="publications mt-5">
                <div className="btn-group">
                    <button type="button" class="active">
                        <svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient">
                                    <stop stopColor="#FF512F" offset="0%"/>
                                    <stop stopColor='#F09819' offset="100%"/>
                                </linearGradient>
                            </defs>
                            <path d="M26.9175 0.665222H19.8341V7.74856H26.9175V0.665222Z"/>
                            <path d="M17.0012 0.665222H9.91783V7.74856H17.0012V0.665222Z"/>
                            <path d="M7.08333 0.665222H0V7.74856H7.08333V0.665222Z"/>
                            <path d="M26.9175 10.5804H19.8341V17.6637H26.9175V10.5804Z"/>
                            <path d="M17.0012 10.5804H9.91783V17.6637H17.0012V10.5804Z"/>
                            <path d="M7.08333 10.5804H0V17.6637H7.08333V10.5804Z"/>
                            <path d="M26.9175 20.4971H19.8341V27.5804H26.9175V20.4971Z"/>
                            <path d="M17.0012 20.4971H9.91783V27.5804H17.0012V20.4971Z"/>
                            <path d="M7.08333 20.4971H0V27.5804H7.08333V20.4971Z"/>
                        </svg>
                        <span className="fw-6 ms-3">Публикации</span>
                    </button>
                    <button type="button" className="ms-5">
                        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 35.0029V14.8253C0 14.273 0.447714 13.8298 0.999999 13.8298H49C49.5523 13.8298 50 14.2775 50 14.8298V35C50 43.2843 43.2843 50 35 50H15C6.71573 50 0 43.2871 0 35.0029ZM23.2734 38.0822C22.3094 38.8546 20.88 38.1683 20.88 36.933V23.067C20.88 21.8317 22.3094 21.1454 23.2734 21.9178L31.9258 28.8508C32.6615 29.4403 32.6615 30.5597 31.9258 31.1492L23.2734 38.0822Z"/>
                            <path d="M19.6904 11H33.2401L29.6744 0H16.6001L19.6904 11Z"/>
                            <path d="M1.71358 11H15.56L12.44 0H11.316C5.62311 0 1.01241 4.6231 1.02769 10.316C1.02871 10.694 1.33549 11 1.71358 11Z"/>
                            <path d="M37.5307 11H48.1924C48.5721 11 48.8799 10.6922 48.8799 10.3125C48.8799 4.61706 44.2628 0 38.5674 0H33.8799L37.5307 11Z"/>
                        </svg>
                        <span className="fw-6 ms-3">Видео Reels</span>
                    </button>
                </div>
                <div className="row row-cols-3 g-4">
                    <div>
                        <img src="../img/img1.png" alt="пост" className="post"/>
                    </div>
                    <div>
                        <img src="../img/img1.png" alt="пост" className="post"/>
                    </div>
                    <div>
                        <img src="../img/img1.png" alt="пост" className="post"/>
                    </div>
                    <div>
                        <img src="../img/img1.png" alt="пост" className="post"/>
                    </div>
                    <div>
                        <img src="../img/img1.png" alt="пост" className="post"/>
                    </div>
                    <div>
                        <img src="../img/img1.png" alt="пост" className="post"/>
                    </div>
                    <div>
                        <img src="../img/img1.png" alt="пост" className="post"/>
                    </div>
                </div>
            </section>
        </main>
    )
}