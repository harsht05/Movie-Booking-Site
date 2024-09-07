class ScreensService {

    static url = "http://localhost:3000/screens";

    static async getScreenDetails() {

        return await axios.get(this.url);
    }
}

export default ScreensService;