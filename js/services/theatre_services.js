class TheatreServices {

    static url = "http://localhost:3000/theatres";

    static async addTheatreDetails(theatre) {

        // Post API:
        return await axios.post(this.url, theatre);
    }

    static async getTheatresDetails() {

        return await axios.get(this.url);
    }

    static async getTheatreDetailsById(id) {

        return await axios.get(`${this.url}/${id}`);
    }

    static async deleteTheatreDetails(id) {

        return await axios.delete(`${this.url}/${id}`);
    }

    static async updateTheatreDetails(id, theatre) {

        return await axios.put(`${this.url}/${id}`, theatre);
    }
}

export default TheatreServices;