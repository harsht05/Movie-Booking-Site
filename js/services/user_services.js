class UserServices {
    
    static url = "http://localhost:3000/users";

    static async addUserDetails(user) {

        // Post API:
        return await axios.post(this.url, user);
    }

    static async getUsersDetails() {

        return await axios.get(this.url);
    }

    static async getUserDetailsById(id) {

        return await axios.get(`${this.url}/${id}`);
    }

    static async deleteUserDetails(id) {

        return await axios.delete(`${this.url}/${id}`);
    }

    static async updateUserDetails(id, sport) {

        return await axios.put(`${this.url}/${id}`, sport);
    }

}

export default UserServices;