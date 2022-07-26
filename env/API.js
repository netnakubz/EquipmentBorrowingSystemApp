import axios from "axios";

export default API = {
    domain: "http://172.20.10.4:8080",
    temp: () => {
        console.log(API.domain);
    },
    /**
     * 
     * @param {Number} roomId 
     * @param {Number} user 
     * @returns 
     */
    getChat: async (roomId, user) => {
        const data = await axios.get(
            `${API.domain}/api/v1/getMessage?roomId=${roomId}&userId=${parseInt(user)}`
        );
        return data.data;
    },
    /**
     * 
     * @param {Number} selectedValue 
     * @returns 
     */
    getListChat: async (selectedValue) => {
        const data = await axios.get(
            `${API.domain}/api/v1/getListChat?userId=${selectedValue}`
        );
        return data.data;
    }
}
