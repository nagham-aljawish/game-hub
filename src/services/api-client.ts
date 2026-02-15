import axios from "axios"

export default axios.create({
    baseURL:"https://api.rawg.io/api/",
    params:{
    key:"b12100575db74ab2996d5716dc3d6fbb",
},
});
