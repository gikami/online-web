import Header from "../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

export default function PostFeed() {
    return (
        <main>
            <Header className="d-none d-md-flex" />
            <h2 className="h1">Актуальное</h2>
            <section className="px-3 px-sm-0 topical my-profile my-2 my-sm-4 my-lg-5">
                <button type='button' data-bs-toggle="modal" data-bs-target="#announcement" className='btn-add me-2 me-sm-3 me-lg-4'>
                    <div className='photo'>
                        <div className='wrapper'>
                            <svg viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 28V0.999999" stroke="url(#paint_linear)" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M28 15L0.999999 15" stroke="url(#paint_linear)" strokeWidth="2" strokeLinecap="round"/>
                                <defs>
                                    <linearGradient id="paint_linear" x1="13.7736" y1="14.4491" x2="15.2368" y2="14.4491" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF512F"/>
                                    <stop offset="1" stopColor="#F09819"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className='title mt-1 mt-xl-2'>Добавить</div>
                </button>
                <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    freeMode={true}
                    navigation
                    breakpoints={{
                        991: {
                            spaceBetween: 20,
                        },
                        1200: {
                            spaceBetween: 25,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева"/>
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <h2 className="h1">Лента</h2>
            <section className="row">
                <div className="col-7">
                    <div className="post-card">
                        <div className="top">
                            <div className="d-flex align-items-center">
                                <div className="photo empty">
                                    <img src="../img/users/empty-photo.svg" alt="Пользователь"/>
                                </div>
                                <div>
                                    <div>@evgenievaaa</div>
                                    <div>Вероника Евгеньева</div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button type="button">

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                Рекомендации для вас
                </div>
            </section>
        </main>
    )
}