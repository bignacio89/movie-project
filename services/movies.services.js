const axios = require('axios')

class MovieApi {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.themoviedb.org/3'
        })
    }

    // Search Movie by ID..for api tryou

    getMovie = (id) => {
        return this.api.get(`/movie/${id}?api_key=6368d7de1031af85856eeb00f048afbf&language=en-US`).then(({ data }) => data)
    }

    // Search movie by year, rate and genre

    getRandom = (year, rate, genre) => {
        return this.api.get(`/discover/movie?api_key=6368d7de1031af85856eeb00f048afbf&language=en-US&sort_by=vote_average.desc&page=1&primary_release_year=${year}&vote_count.gte=500&vote_average.gte=${rate}&with_genres=${genre}`).then(({ data }) => data)
    }

    // Search movie by title

    getTitle = (searchFor) => {
        return this.api.get(`/search/movie?api_key=6368d7de1031af85856eeb00f048afbf&language=en-US&query=${searchFor}`).then(({ data }) => data)
    }

}

module.exports = MovieApi

