import Axios from 'axios';

export default {
    query
}

// var axios = Axios.create({
//     withCredentials: true
// });

async function query(value) {
    var YT_KEY = 'AIzaSyDdrOp9dEzjmZ4B1lqvrGh_rMhqmTkryG8&q';
    const res = await Axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
    &videoEmbeddable=true&type=video&key=${YT_KEY}&q=${value}`)
    return res.data.items
}


