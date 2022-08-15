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
    getPostFindToBorrow: (pageParam) => {
        const data = [
            {
                postId: '1',
                details: 'Post details',
                img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
                price: 123,
                suggestions: ["New Arrivals"]
            },
            {
                postId: '2',
                details: 'Post details',
                img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
                price: 123,
                suggestions: ["New Arrivals"]
            },
            {
                postId: '3',
                details: 'Post details',
                img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
                price: 123,
                suggestions: ["New Arrivals"]
            },
            {
                postId: '4',
                details: 'Post details',
                img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
                price: 123,
                suggestions: ["New Arrivals","Popular"]
            },
            {
                postId: '5',
                details: 'Post details',
                img: 'https://i.pinimg.com/736x/b1/16/0f/b1160fdd10b71b095c19366845fd6b3e.jpg',
                price: 123,
                suggestions: ["New Arrivals"]
            },
        ]
        let result = [];
        let size = pageParam > data.length ? data.length : pageParam;
        for (let i = 0; i < size; i++) {
            result.push(data[i]);
        }
        return result;
        // const data = await  axios.get(`${API.domain}/api/v1/getPost?limit=${limit}`);
        // return data.data;
    }

};
export default API;
