import axios from 'axios';

//base url to make requests to the movie database

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// instance.get('/foo-bar');

export default instance;  // if defeault import we can use any name in import
//can only have on default component 