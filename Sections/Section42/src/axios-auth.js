import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://subtle-isotope-316123-default-rtdb.europe-west1.firebasedatabase.app'
});

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance