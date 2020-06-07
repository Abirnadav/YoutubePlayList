import Axios from 'axios';

export default {
    query
}

async function query(value) {
    var YT_KEY = 'AIzaSyAq1_pzmoNOyLA0X0lTD_htLnHZ2wOoUNI&q';
    const res = await Axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
    &videoEmbeddable=true&type=video&key=${YT_KEY}&q=${value}`)
    return res.data.items
}
