class SportsServices {

    static url = "http://localhost:3000/sports";

    static async addSportsEventDetails(sport) {

        // Post API:
        return await axios.post(this.url, sport);
    }

    static async getSportsEventDetails() {

        return await axios.get(this.url);
    }

    static async getSportsEventDetailsById(id) {

        return await axios.get(`${this.url}/${id}`);
    }

    static async deleteSportsEventDetails(id) {

        return await axios.delete(`${this.url}/${id}`);
    }

    static async updateSportsEventDetails(id, sport) {

        return await axios.put(`${this.url}/${id}`, sport);
    }

}

export default SportsServices;