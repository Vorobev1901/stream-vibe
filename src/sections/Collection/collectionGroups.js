import categoryItems from "@/sections/Categories/categoryItems.js";

const collectionGroups = [
    {
        isActive: true,
        title: 'Movies',
        items: [
            {
                title: 'Our Genres',
                categoryItems
            },
            {
                title: 'Popular Top 10 In Genres',
                categoryItems: [
                    {
                        title: 'Action',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/5.png',
                            '/src/assets/images/categories/action/6.png',
                            '/src/assets/images/categories/action/7.png',
                            '/src/assets/images/categories/action/8.png'
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/5.png',
                            '/src/assets/images/categories/adventure/6.png',
                            '/src/assets/images/categories/adventure/1.png',
                            '/src/assets/images/categories/adventure/2.png'
                        ],
                    },
                    {
                        title: 'Comedy',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/1.png',
                            '/src/assets/images/categories/comedy/2.png',
                            '/src/assets/images/categories/comedy/3.png',
                            '/src/assets/images/categories/comedy/12.png'
                        ],
                    },
                    {
                        title: 'Drama',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/1.png',
                            '/src/assets/images/categories/drama/2.png',
                            '/src/assets/images/categories/drama/3.png',
                            '/src/assets/images/categories/drama/4.png'
                        ],
                    },

                    {
                        title: 'Action',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png'
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/5.png',
                            '/src/assets/images/categories/adventure/6.png',
                            '/src/assets/images/categories/adventure/7.png',
                            '/src/assets/images/categories/adventure/8.png'
                        ],
                    },
                    {
                        title: 'Comedy',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/9.png',
                            '/src/assets/images/categories/comedy/10.png',
                            '/src/assets/images/categories/comedy/11.png',
                            '/src/assets/images/categories/comedy/12.png'
                        ],
                    },
                    {
                        title: 'Drama',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/13.png',
                            '/src/assets/images/categories/drama/14.png',
                            '/src/assets/images/categories/drama/15.png',
                            '/src/assets/images/categories/drama/16.png'
                        ],
                    },

                    {
                        title: 'Action',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png'
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/5.png',
                            '/src/assets/images/categories/adventure/6.png',
                            '/src/assets/images/categories/adventure/7.png',
                            '/src/assets/images/categories/adventure/8.png'
                        ],
                    },
                    {
                        title: 'Comedy',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/9.png',
                            '/src/assets/images/categories/comedy/10.png',
                            '/src/assets/images/categories/comedy/11.png',
                            '/src/assets/images/categories/comedy/12.png'
                        ],
                    },
                    {
                        title: 'Drama',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/13.png',
                            '/src/assets/images/categories/drama/14.png',
                            '/src/assets/images/categories/drama/15.png',
                            '/src/assets/images/categories/drama/16.png'
                        ],
                    },

                    {
                        title: 'Action',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png'
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/5.png',
                            '/src/assets/images/categories/adventure/6.png',
                            '/src/assets/images/categories/adventure/7.png',
                            '/src/assets/images/categories/adventure/8.png'
                        ],
                    },
                    {
                        title: 'Comedy',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/9.png',
                            '/src/assets/images/categories/comedy/10.png',
                            '/src/assets/images/categories/comedy/11.png',
                            '/src/assets/images/categories/comedy/12.png'
                        ],
                    },
                    {
                        title: 'Drama',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/13.png',
                            '/src/assets/images/categories/drama/14.png',
                            '/src/assets/images/categories/drama/15.png',
                            '/src/assets/images/categories/drama/16.png'
                        ],
                    },
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                    breakpoints: {
                        0: {
                            slidesPerView: 1.6,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                            allowTouchMove: true,
                        },
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 16,
                        },
                        560: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            spaceBetween: 20,
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            simulateTouch: false,
                        },
                        1441: {
                            spaceBetween: 30,
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            simulateTouch: false,
                        }
                    }
                }
            },
            {
                title: 'Trending Now',
                movieItems: [
                    {
                        title: 'Morbius',
                        imgSrc: '/src/assets/images/movies/6.png',
                        duration: '1h 30min',
                        views: '2K'
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/7.png',
                        duration: '1h 57min',
                        views: '1.5K'
                    },
                    {
                        title: 'Suraj Pe Mangal Bhari',
                        imgSrc: '/src/assets/images/movies/8.png',
                        duration: '2h 10min',
                        views: '1.8K'
                    },
                    {
                        title: 'Pathan',
                        imgSrc: '/src/assets/images/movies/9.png',
                        duration: '2h 20min',
                        views: '3K'
                    },
                    {
                        title: 'Ant-man',
                        imgSrc: '/src/assets/images/movies/10.png',
                        duration: '1h 42min',
                        views: '5K'
                    },

                    {
                        title: 'Morbius',
                        imgSrc: '/src/assets/images/movies/1.png',
                        duration: '1h 30min',
                        views: '2K'
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/2.png',
                        duration: '1h 57min',
                        views: '1.5K'
                    },
                    {
                        title: 'Suraj Pe Mangal Bhari',
                        imgSrc: '/src/assets/images/movies/3.png',
                        duration: '2h 10min',
                        views: '1.8K'
                    },
                    {
                        title: 'Pathan',
                        imgSrc: '/src/assets/images/movies/4.png',
                        duration: '2h 20min',
                        views: '3K'
                    },
                    {
                        title: 'Ant-man',
                        imgSrc: '/src/assets/images/movies/5.png',
                        duration: '1h 42min',
                        views: '5K'
                    },

                    {
                        title: 'Morbius',
                        imgSrc: '/src/assets/images/movies/1.png',
                        duration: '1h 30min',
                        views: '2K'
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/2.png',
                        duration: '1h 57min',
                        views: '1.5K'
                    },
                    {
                        title: 'Suraj Pe Mangal Bhari',
                        imgSrc: '/src/assets/images/movies/3.png',
                        duration: '2h 10min',
                        views: '1.8K'
                    },
                    {
                        title: 'Pathan',
                        imgSrc: '/src/assets/images/movies/4.png',
                        duration: '2h 20min',
                        views: '3K'
                    },
                    {
                        title: 'Ant-man',
                        imgSrc: '/src/assets/images/movies/5.png',
                        duration: '1h 42min',
                        views: '5K'
                    },

                    {
                        title: 'Morbius',
                        imgSrc: '/src/assets/images/movies/1.png',
                        duration: '1h 30min',
                        views: '2K'
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/2.png',
                        duration: '1h 57min',
                        views: '1.5K'
                    },
                    {
                        title: 'Suraj Pe Mangal Bhari',
                        imgSrc: '/src/assets/images/movies/3.png',
                        duration: '2h 10min',
                        views: '1.8K'
                    },
                    {
                        title: 'Pathan',
                        imgSrc: '/src/assets/images/movies/4.png',
                        duration: '2h 20min',
                        views: '3K'
                    },
                    {
                        title: 'Ant-man',
                        imgSrc: '/src/assets/images/movies/5.png',
                        duration: '1h 42min',
                        views: '5K'
                    }
                ],
            },
            {
                title: 'New Releases',
                movieItems: [
                    {
                        title: 'Morbius',
                        imgSrc: '/src/assets/images/movies/1.png',
                        released: {
                            label: '14 April 2023',
                            dateTime: '2023-04-14'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/2.png',
                        released: {
                            label: '149 April 2023',
                            dateTime: '2023-04-19'
                        }
                    },
                    {
                        title: 'Suraj Pe Mangal Bhari',
                        imgSrc: '/src/assets/images/movies/3.png',
                        released: {
                            label: '11 April 2023',
                            dateTime: '2023-04-11'
                        }
                    },
                    {
                        title: 'Pathan',
                        imgSrc: '/src/assets/images/movies/4.png',
                        released: {
                            label: '22 April 2023',
                            dateTime: '2023-04-22'
                        }
                    },
                    {
                        title: 'Ant-man',
                        imgSrc: '/src/assets/images/movies/5.png',
                        released: {
                            label: '23 April 2023',
                            dateTime: '2023-04-23'
                        }
                    },

                    {
                        title: 'Morbius',
                        imgSrc: '/src/assets/images/movies/1.png',
                        released: {
                            label: '14 April 2023',
                            dateTime: '2023-04-14'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/2.png',
                        released: {
                            label: '149 April 2023',
                            dateTime: '2023-04-19'
                        }
                    },
                    {
                        title: 'Suraj Pe Mangal Bhari',
                        imgSrc: '/src/assets/images/movies/3.png',
                        released: {
                            label: '11 April 2023',
                            dateTime: '2023-04-11'
                        }
                    },
                    {
                        title: 'Pathan',
                        imgSrc: '/src/assets/images/movies/4.png',
                        released: {
                            label: '22 April 2023',
                            dateTime: '2023-04-22'
                        }
                    },
                    {
                        title: 'Ant-man',
                        imgSrc: '/src/assets/images/movies/5.png',
                        released: {
                            label: '23 April 2023',
                            dateTime: '2023-04-23'
                        }
                    },

                    {
                        title: 'Morbius',
                        imgSrc: '/src/assets/images/movies/1.png',
                        released: {
                            label: '14 April 2023',
                            dateTime: '2023-04-14'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/2.png',
                        released: {
                            label: '149 April 2023',
                            dateTime: '2023-04-19'
                        }
                    },
                    {
                        title: 'Suraj Pe Mangal Bhari',
                        imgSrc: '/src/assets/images/movies/3.png',
                        released: {
                            label: '11 April 2023',
                            dateTime: '2023-04-11'
                        }
                    },
                    {
                        title: 'Pathan',
                        imgSrc: '/src/assets/images/movies/4.png',
                        released: {
                            label: '22 April 2023',
                            dateTime: '2023-04-22'
                        }
                    },
                    {
                        title: 'Ant-man',
                        imgSrc: '/src/assets/images/movies/5.png',
                        released: {
                            label: '23 April 2023',
                            dateTime: '2023-04-23'
                        }
                    },

                    {
                        title: 'Morbius',
                        imgSrc: '/src/assets/images/movies/1.png',
                        released: {
                            label: '14 April 2023',
                            dateTime: '2023-04-14'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/2.png',
                        released: {
                            label: '149 April 2023',
                            dateTime: '2023-04-19'
                        }
                    },
                    {
                        title: 'Suraj Pe Mangal Bhari',
                        imgSrc: '/src/assets/images/movies/3.png',
                        released: {
                            label: '11 April 2023',
                            dateTime: '2023-04-11'
                        }
                    },
                    {
                        title: 'Pathan',
                        imgSrc: '/src/assets/images/movies/4.png',
                        released: {
                            label: '22 April 2023',
                            dateTime: '2023-04-22'
                        }
                    },
                    {
                        title: 'Ant-man',
                        imgSrc: '/src/assets/images/movies/5.png',
                        released: {
                            label: '23 April 2023',
                            dateTime: '2023-04-23'
                        }
                    }
                ],
            },
            {
                title: 'Must - Watch Movies',
                movieItems: [
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/11.png',
                        duration: '1h 57min',
                        rating: {
                            value: 4.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/12.png',
                        duration: '1h 30min',
                        rating: {
                            value: 3.5,
                            label: '22K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/13.png',
                        duration: '1h 45min',
                        rating: {
                            value: 4,
                            label: '10K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/14.png',
                        duration: '1h 23min',
                        rating: {
                            value: 5,
                            label: '28K'
                        }
                    },

                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/11.png',
                        duration: '1h 57min',
                        rating: {
                            value: 4.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/12.png',
                        duration: '1h 57min',
                        rating: {
                            value: 3.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/13.png',
                        duration: '1h 57min',
                        rating: {
                            value: 4,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/14.png',
                        duration: '1h 57min',
                        rating: {
                            value: 5,
                            label: '20K'
                        }
                    },

                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/11.png',
                        duration: '1h 57min',
                        rating: {
                            value: 4.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/12.png',
                        duration: '1h 57min',
                        rating: {
                            value: 3.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/13.png',
                        duration: '1h 57min',
                        rating: {
                            value: 4,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/14.png',
                        duration: '1h 57min',
                        rating: {
                            value: 5,
                            label: '20K'
                        }
                    },

                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/11.png',
                        duration: '1h 57min',
                        rating: {
                            value: 4.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/12.png',
                        duration: '1h 57min',
                        rating: {
                            value: 3.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/13.png',
                        duration: '1h 57min',
                        rating: {
                            value: 4,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/movies/14.png',
                        duration: '1h 57min',
                        rating: {
                            value: 5,
                            label: '20K'
                        }
                    }
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                    breakpoints: {
                        0: {
                            slidesPerView: 1.6,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                            allowTouchMove: true,
                        },
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                            simulateTouch: false,
                        }
                    }
                }
            }
        ]
    },
    {
        title: 'Shows',
        items: [
            {
                title: 'Our Genres',
                categoryItems
            },
            {
                title: 'Popular Top 10 In Genres',
                categoryItems: [
                    {
                        title: 'Action',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/5.png',
                            '/src/assets/images/categories/action/6.png',
                            '/src/assets/images/categories/action/7.png',
                            '/src/assets/images/categories/action/8.png'
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/5.png',
                            '/src/assets/images/categories/adventure/6.png',
                            '/src/assets/images/categories/adventure/1.png',
                            '/src/assets/images/categories/adventure/2.png'
                        ],
                    },
                    {
                        title: 'Comedy',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/1.png',
                            '/src/assets/images/categories/comedy/2.png',
                            '/src/assets/images/categories/comedy/3.png',
                            '/src/assets/images/categories/comedy/12.png'
                        ],
                    },
                    {
                        title: 'Drama',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/1.png',
                            '/src/assets/images/categories/drama/2.png',
                            '/src/assets/images/categories/drama/3.png',
                            '/src/assets/images/categories/drama/4.png'
                        ],
                    },

                    {
                        title: 'Action',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png'
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/5.png',
                            '/src/assets/images/categories/adventure/6.png',
                            '/src/assets/images/categories/adventure/7.png',
                            '/src/assets/images/categories/adventure/8.png'
                        ],
                    },
                    {
                        title: 'Comedy',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/9.png',
                            '/src/assets/images/categories/comedy/10.png',
                            '/src/assets/images/categories/comedy/11.png',
                            '/src/assets/images/categories/comedy/12.png'
                        ],
                    },
                    {
                        title: 'Drama',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/13.png',
                            '/src/assets/images/categories/drama/14.png',
                            '/src/assets/images/categories/drama/15.png',
                            '/src/assets/images/categories/drama/16.png'
                        ],
                    },

                    {
                        title: 'Action',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png'
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/5.png',
                            '/src/assets/images/categories/adventure/6.png',
                            '/src/assets/images/categories/adventure/7.png',
                            '/src/assets/images/categories/adventure/8.png'
                        ],
                    },
                    {
                        title: 'Comedy',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/9.png',
                            '/src/assets/images/categories/comedy/10.png',
                            '/src/assets/images/categories/comedy/11.png',
                            '/src/assets/images/categories/comedy/12.png'
                        ],
                    },
                    {
                        title: 'Drama',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/13.png',
                            '/src/assets/images/categories/drama/14.png',
                            '/src/assets/images/categories/drama/15.png',
                            '/src/assets/images/categories/drama/16.png'
                        ],
                    },

                    {
                        title: 'Action',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/action/1.png',
                            '/src/assets/images/categories/action/2.png',
                            '/src/assets/images/categories/action/3.png',
                            '/src/assets/images/categories/action/4.png'
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/adventure/5.png',
                            '/src/assets/images/categories/adventure/6.png',
                            '/src/assets/images/categories/adventure/7.png',
                            '/src/assets/images/categories/adventure/8.png'
                        ],
                    },
                    {
                        title: 'Comedy',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/comedy/9.png',
                            '/src/assets/images/categories/comedy/10.png',
                            '/src/assets/images/categories/comedy/11.png',
                            '/src/assets/images/categories/comedy/12.png'
                        ],
                    },
                    {
                        title: 'Drama',
                        badge: 'Top 10 In',
                        images: [
                            '/src/assets/images/categories/drama/13.png',
                            '/src/assets/images/categories/drama/14.png',
                            '/src/assets/images/categories/drama/15.png',
                            '/src/assets/images/categories/drama/16.png'
                        ],
                    },
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                    breakpoints: {
                        0: {
                            slidesPerView: 1.6,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                            allowTouchMove: true,
                        },
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 16,
                        },
                        560: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            spaceBetween: 20,
                            simulateTouch: false,
                        },
                        1441: {
                            spaceBetween: 30,
                            simulateTouch: false,
                        }
                    }
                }
            },
            {
                title: 'Trending Shows Now',
                movieItems: [
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/1.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/2.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/3.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/4.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },

                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/5.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/6.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/7.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/8.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },

                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/1.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/2.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/3.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/4.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },

                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/5.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/6.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/7.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/8.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    }
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                    breakpoints: {
                        0: {
                            slidesPerView: 1.6,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                            allowTouchMove: true,
                        },
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                            simulateTouch: false,
                        }
                    }
                }
            },
            {
                title: 'New Released Shows',
                movieItems: [
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/5.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/6.jpg',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/13.webp',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/8.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },

                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/5.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/6.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/7.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/8.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },

                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/5.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/6.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/7.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/8.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },

                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/5.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/6.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/7.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    },
                    {
                        title: 'Money Heist',
                        imgSrc: '/src/assets/images/shows/8.png',
                        duration: '1h 30min',
                        href: '/show/',
                        season: '5 Season'
                    }
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                    breakpoints: {
                        0: {
                            slidesPerView: 1.6,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                            allowTouchMove: true,
                        },
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                            simulateTouch: false,
                        }
                    }
                }
            },
            {
                title: 'Must - Watch Shows',
                movieItems: [
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/14.jpg',
                        duration: '1h 57min',
                        rating: {
                            value: 4.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/10.png',
                        duration: '1h 30min',
                        rating: {
                            value: 3.5,
                            label: '22K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/11.png',
                        duration: '1h 45min',
                        rating: {
                            value: 4,
                            label: '10K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/12.png',
                        duration: '1h 23min',
                        rating: {
                            value: 5,
                            label: '28K'
                        }
                    },

                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/9.png',
                        duration: '1h 57min',
                        rating: {
                            value: 4.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/10.png',
                        duration: '1h 30min',
                        rating: {
                            value: 3.5,
                            label: '22K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/11.png',
                        duration: '1h 45min',
                        rating: {
                            value: 4,
                            label: '10K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/12.png',
                        duration: '1h 23min',
                        rating: {
                            value: 5,
                            label: '28K'
                        }
                    },

                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/9.png',
                        duration: '1h 57min',
                        rating: {
                            value: 4.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/10.png',
                        duration: '1h 30min',
                        rating: {
                            value: 3.5,
                            label: '22K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/11.png',
                        duration: '1h 45min',
                        rating: {
                            value: 4,
                            label: '10K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/12.png',
                        duration: '1h 23min',
                        rating: {
                            value: 5,
                            label: '28K'
                        }
                    },

                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/9.png',
                        duration: '1h 57min',
                        rating: {
                            value: 4.5,
                            label: '20K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/10.png',
                        duration: '1h 30min',
                        rating: {
                            value: 3.5,
                            label: '22K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/11.png',
                        duration: '1h 45min',
                        rating: {
                            value: 4,
                            label: '10K'
                        }
                    },
                    {
                        title: 'Kisi Ka Bhai Kisi Ki Jaan',
                        imgSrc: '/src/assets/images/shows/12.png',
                        duration: '1h 23min',
                        rating: {
                            value: 5,
                            label: '28K'
                        }
                    },
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                    breakpoints: {
                        0: {
                            slidesPerView: 1.6,
                            slidesPerGroup: 1,
                            spaceBetween: 16,
                            allowTouchMove: true,
                        },
                        481: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 20,
                            simulateTouch: false,
                        }
                    }
                }
            }
        ]
    }
]

export default collectionGroups;