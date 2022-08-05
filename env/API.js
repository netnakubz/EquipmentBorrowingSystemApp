import axios from "axios";

let API = {
    domain: "http://172.20.10.2:8080",
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
            `${API.domain}/api/v1/getMessage?roomId=${roomId}&userId=${user}`
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
    },
    /**
     *
     * @param {Number} userOne
     * @param {Number} userTwo
     */
    searchRoom: async (userOne, userTwo) => {
        const data = await axios.get(
            `${API.domain}/api/v1/searchRoom?userOne=${userOne}&userTwo=${userTwo}`
        )
        return data.data;
    },
    createContract: async (contract) => {
        const data = await axios.post(`${API.domain}/api/v1/createAgreement`, contract);
        return data.data;
    },
    getPostFindToBorrow: async (limit) => {

        // const data = await  axios.get(`${API.domain}/api/v1/getPost?limit=${limit}`);
        // return data.data;
    }

};
export default API;
