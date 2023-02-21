const axios = require('axios')

class MovieApi {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.themoviedb.org/3'
        })
    }

    getMovie = (id) => {
        return this.api.get(`/movie/${id}?api_key=6368d7de1031af85856eeb00f048afbf&language=en-US`).then(({ data }) => data)
    }


    getRandom = (year, rate, genre) => {
        return this.api.get(`/discover/movie?api_key=6368d7de1031af85856eeb00f048afbf&language=en-US&sort_by=vote_average.desc&page=1&primary_release_year=${year}&vote_count.gte=500&vote_average.gte=${rate}&with_genres=${genre}`).then(({ data }) => data)
    }
}

module.exports = MovieApi

