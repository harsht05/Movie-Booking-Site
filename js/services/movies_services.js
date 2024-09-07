class MoviesServices {

    static url = "http://localhost:3000/movies";

    static async addMovieDetails(movie) {

        // Post API:
        return await axios.post(this.url, movie);
    }

    static async getMovieDetails() {

        return await axios.get(this.url);
    }

    static async getMovieDetailsById(id) {

        return await axios.get(`${this.url}/${id}`);
    }

    static async deleteMovieDetails(id) {

        return await axios.delete(`${this.url}/${id}`);
    }

    static async updateMovieDetails(id, movie) {

        return await axios.put(`${this.url}/${id}`, movie);
    }
}

export default MoviesServices;