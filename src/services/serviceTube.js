import Axios from 'axios';

export default {
    query
}

var gVideos = [
    {
        "kind": "youtube#searchResult",
        "etag": "0i0TbOwlQcCWFJBu9VuvHSYCkj4",
        "id": {
            "kind": "youtube#video",
            "videoId": "10fQOvBmwuo"
        },
        "snippet": {
            "publishedAt": "2020-06-07T07:04:52Z",
            "channelId": "UCZG7I0fLryV0UTWqAKiZtsQ",
            "title": "Maroon 5 - Memories on Harmonium",
            "description": "adamlevine #memories.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/10fQOvBmwuo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/10fQOvBmwuo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/10fQOvBmwuo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "giriraj_06 IVT",
            "liveBroadcastContent": "none",
            "publishTime": "2020-06-07T07:04:52Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "DKd8sNizvSlW0NrHwLD63XCdcLA",
        "id": {
            "kind": "youtube#video",
            "videoId": "dE6Jww0_zaU"
        },
        "snippet": {
            "publishedAt": "2020-06-07T06:00:09Z",
            "channelId": "UC1tDxjaUQ5ly53QG4zwCb8g",
            "title": "Ed Sheeran, Maroon 5, Rihanna, Ariana Grande, Justin Bieber, Post Malone ★ Top Songs 2020",
            "description": "Ed Sheeran, Maroon 5, Rihanna, Ariana Grande, Justin Bieber, Post Malone ☆ Top Songs 2020 Thanks for watching. If you like video please \"SUBSCRIBE\" ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/dE6Jww0_zaU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/dE6Jww0_zaU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/dE6Jww0_zaU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Music Time",
            "liveBroadcastContent": "none",
            "publishTime": "2020-06-07T06:00:09Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "GIB5ndyJJ7xxplQQp6vT4a4DFEM",
        "id": {
            "kind": "youtube#video",
            "videoId": "1lxERUbZu0k"
        },
        "snippet": {
            "publishedAt": "2020-06-07T05:00:01Z",
            "channelId": "UCHzUzTZUGqI0yfriqQcXQiw",
            "title": "Taylor Swift, Maroon 5, Tone &amp; I,  Ed Sheeran ,  Adele. Best Top Music Playlist 2020.",
            "description": "Taylor Swift, Maroon 5, Tone & I, Ed Sheeran , Adele. Best Top Music Playlist 2020. Taylor Swift, Maroon 5, Tone & I, Ed Sheeran , Adele. Best Top Music Playlist ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/1lxERUbZu0k/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/1lxERUbZu0k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/1lxERUbZu0k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Best Popular Music",
            "liveBroadcastContent": "none",
            "publishTime": "2020-06-07T05:00:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Hq8ZnuyYGGBv1hXJjGjgsHW40z0",
        "id": {
            "kind": "youtube#video",
            "videoId": "Qgy5n3KK2-Q"
        },
        "snippet": {
            "publishedAt": "2020-06-07T04:37:26Z",
            "channelId": "UCpRCKPY4KYTcKJ0ZxF-p_sQ",
            "title": "Alan Walker, Justin Bieber, Shawn Mendes, Maroon 5, Camila Cabello, P!Nk, Ed Sheeran - Best Pop 2020",
            "description": "Alan Walker, Justin Bieber, Shawn Mendes, Maroon 5, Camila Cabello, P!nk, Ed Sheeran - Best Pop 2020 Alan Walker, Justin Bieber, Shawn Mendes, Maroon ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Qgy5n3KK2-Q/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Qgy5n3KK2-Q/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Qgy5n3KK2-Q/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "A Beleza Da Musica",
            "liveBroadcastContent": "none",
            "publishTime": "2020-06-07T04:37:26Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "BeIN-573iu4tw92IAidR5wC3XHc",
        "id": {
            "kind": "youtube#video",
            "videoId": "2O_ae9djlXI"
        },
        "snippet": {
            "publishedAt": "2020-06-07T03:51:55Z",
            "channelId": "UCpRCKPY4KYTcKJ0ZxF-p_sQ",
            "title": "Ava Max, Maroon 5, Lady Gaga, Anne Marie, Ariana Grande, Ed Sheeran, Camila Cabello - Canzone Pop 20",
            "description": "Ava Max, Maroon 5, Lady Gaga, Anne Marie, Ariana Grande, Ed Sheeran, Camila Cabello - Canzone Pop 2020 Ava Max, Maroon 5, Lady Gaga, Anne Marie, ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/2O_ae9djlXI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/2O_ae9djlXI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/2O_ae9djlXI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "A Beleza Da Musica",
            "liveBroadcastContent": "none",
            "publishTime": "2020-06-07T03:51:55Z"
        }
    }
]
// var axios = Axios.create({
//     withCredentials: true
// });

async function query(value) {
    return gVideos;
    // var YT_KEY = 'AIzaSyDdrOp9dEzjmZ4B1lqvrGh_rMhqmTkryG8';
    // const res = await Axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
    // &videoEmbeddable=true&type=video&key=${YT_KEY}&q=${value}`)
    // return res.data.items
}

// https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyD9IOfZplKCpkxaQjmSrqGWpz9Wnmha514/getRating&q=${value}`

