import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID EFmpSOTfG5_Ml_y9cWBEc7xx4Y88jF4oCPT14X3yp5I'
    }
});