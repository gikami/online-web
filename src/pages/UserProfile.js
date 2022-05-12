import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';
import { useParams } from "react-router-dom";
import { URL } from "../api/config";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import Header from "../components/Header";
import TextAbout from '../components/utilities/TextAbout';
import { getProfilePosts } from '../api/apiPosts';
import { addBlackList, addReport, getUser } from '../api/apiUsers';
import { useSelector } from 'react-redux';

export default function UserProfile() {
    const { id } = useParams();
    const [content, setContent] = useState('photo');
    const auth = useSelector((state) => state.auth.user);
    const [user, setUserData] = useState(false);
    const [tabs, setTabs] = useState();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState(0);
    const [blackList, setBlackList] = useState(0);

    const getUserData = async () => {
        if (id) {
            await getUser(id, auth ? auth.id : false)
                .then((res) => {
                    if (res.data.body) {
                        setUserData(res.data.body)
                    }
                }).catch((err) => {
                    setLoading(false);
                }).finally(() => {
                    setLoading(false);
                });

            const postsData = await getProfilePosts(id, auth ? auth.id : '', 1);
            if (postsData) {
                setPosts(postsData.data.body.data)
                console.log(postsData.data.body.data)
            }
        }
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            await getUserData();
        })();
    }, []);

    return (
        <main>
            <Header className="d-none d-md-flex" />

            <section className='px-3 px-sm-0 user-info'>
                <div className="row justify-content-between">
                    <div className="col-sm-7 col-xxl-6">
                        <div className='d-flex'>
                            <div>
                                <h1 className='d-none d-md-block'>@{user.nickname}</h1>
                                <h2>{user.firstName} {user.lastName}</h2>
                                {/* <div className="fs-09 blue"><a href="mailto:saitname@site.com">saitname@site.com</a></div> */}
                                <TextAbout className="mt-2 mt-sm-4" text={user.about} />
                            </div>
                            <div className="d-block d-sm-none mob-photo">
                                <img src="../img/users/user0.png" alt={`${user.firstName} ${user.lastName}`} />
                            </div>
                        </div>
                        <div className="brief-stat d-flex justify-content-around justify-content-xl-between mt-2 mt-sm-3 mt-lg-4">
                            <div className="py-1">
                                <div className="fs-12 fw-6">{user.postsCount}</div>
                                <div className="gray fs-08 fw-5 mt-1 mt-sm-2">Публикаций</div>
                            </div>
                            <hr />
                            <div className="py-1">
                                <div className="fs-12 fw-6">{user.followersCount}</div>
                                <div className="gray fs-08 fw-5 mt-1 mt-sm-2">Подписчики</div>
                            </div>
                            <hr />
                            <div className="py-1">
                                <div className="fs-12 fw-6">{user.subscribesCount}</div>
                                <div className="gray fs-08 fw-5 mt-1 mt-sm-2">Подписки</div>
                            </div>
                        </div>
                        <div className="mt-2 mt-sm-3 mt-lg-4 row row-cols-2 gx-2 gx-sm-4">
                            <div>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#announcement" className="btn btn-1 w-100">Подписаться</button>
                            </div>
                            <div>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#announcement" className="btn btn-2 w-100">
                                    <span>Написать</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-sm-block col-sm-5">
                        <div className="photo">
                            <img src={user.avatar ? URL + user.avatar : "../img/users/user0.png"} alt={`${user.firstName} ${user.lastName}`} />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="px-3 px-sm-0 topical mt-2 mt-sm-4 mt-lg-5">
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
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="photo">
                            <img src="../img/users/user0.png" alt="Александра Андреева" />
                        </div>
                        <div className="title mt-1 mt-xl-2">Актуальное</div>
                    </SwiperSlide>
                </Swiper>
            </section> */}

            <section className="publications mt-3 mt-sm-4 mt-md-5">
                <div className="btn-group">
                    <button type="button" onClick={() => setContent('photo')} className={(content === 'photo') && "active"}>
                        <svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient">
                                    <stop stopColor="#FF512F" offset="0%" />
                                    <stop stopColor='#F09819' offset="100%" />
                                </linearGradient>
                            </defs>
                            <path d="M26.9175 0.665222H19.8341V7.74856H26.9175V0.665222Z" />
                            <path d="M17.0012 0.665222H9.91783V7.74856H17.0012V0.665222Z" />
                            <path d="M7.08333 0.665222H0V7.74856H7.08333V0.665222Z" />
                            <path d="M26.9175 10.5804H19.8341V17.6637H26.9175V10.5804Z" />
                            <path d="M17.0012 10.5804H9.91783V17.6637H17.0012V10.5804Z" />
                            <path d="M7.08333 10.5804H0V17.6637H7.08333V10.5804Z" />
                            <path d="M26.9175 20.4971H19.8341V27.5804H26.9175V20.4971Z" />
                            <path d="M17.0012 20.4971H9.91783V27.5804H17.0012V20.4971Z" />
                            <path d="M7.08333 20.4971H0V27.5804H7.08333V20.4971Z" />
                        </svg>
                        <span className="d-none d-sm-inline fw-6 ms-3">Публикации</span>
                    </button>
                    <button type="button" onClick={() => setContent('video')} className={(content === 'video') ? "active ms-sm-5" : "ms-sm-5"}>
                        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 35.0029V14.8253C0 14.273 0.447714 13.8298 0.999999 13.8298H49C49.5523 13.8298 50 14.2775 50 14.8298V35C50 43.2843 43.2843 50 35 50H15C6.71573 50 0 43.2871 0 35.0029ZM23.2734 38.0822C22.3094 38.8546 20.88 38.1683 20.88 36.933V23.067C20.88 21.8317 22.3094 21.1454 23.2734 21.9178L31.9258 28.8508C32.6615 29.4403 32.6615 30.5597 31.9258 31.1492L23.2734 38.0822Z" />
                            <path d="M19.6904 11H33.2401L29.6744 0H16.6001L19.6904 11Z" />
                            <path d="M1.71358 11H15.56L12.44 0H11.316C5.62311 0 1.01241 4.6231 1.02769 10.316C1.02871 10.694 1.33549 11 1.71358 11Z" />
                            <path d="M37.5307 11H48.1924C48.5721 11 48.8799 10.6922 48.8799 10.3125C48.8799 4.61706 44.2628 0 38.5674 0H33.8799L37.5307 11Z" />
                        </svg>
                        <span className="d-none d-sm-inline fw-6 ms-3">Видео Reels</span>
                    </button>
                </div>
                <div className='px-3 px-sm-0'>
                    {
                        (content === 'photo') ?
                            <div className="row row-cols-3 g-1 g-sm-2 g-md-3 g-lg-4">
                                {
                                    (posts && posts.length > 0) &&
                                    posts.map((item) => <div>
                                        <img src={URL + item.medias[0].media} alt="пост" className="post" />
                                    </div>
                                    )
                                }
                            </div>
                            : <div className="row row-cols-3 g-1 g-sm-2 g-md-3 g-lg-4">
                                <div>
                                    <img src="../img/img1.png" alt="видео" className="video" />
                                </div>
                                <div>
                                    <img src="../img/img1.png" alt="видео" className="video" />
                                </div>
                                <div>
                                    <img src="../img/img1.png" alt="видео" className="video" />
                                </div>
                                <div>
                                    <img src="../img/img1.png" alt="видео" className="video" />
                                </div>
                                <div>
                                    <img src="../img/img1.png" alt="видео" className="video" />
                                </div>
                                <div>
                                    <img src="../img/img1.png" alt="видео" className="video" />
                                </div>+
                                <div>
                                    <img src="../img/img1.png" alt="видео" className="video" />
                                </div>
                            </div>
                    }

                </div>
            </section>
        </main>
    )
}