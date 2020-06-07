import Axios from 'axios';

export default {
    query,
    get
}

var axios = Axios.create({
    withCredentials: true
});

async function query(value) {
    var YT_KEY = 'AIzaSyD9IOfZplKCpkxaQjmSrqGWpz9Wnmha514';
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
    &videoEmbeddable=true&type=video&key=${YT_KEY}&q=${value}`)
    return res
}


