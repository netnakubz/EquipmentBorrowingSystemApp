import axios from "axios";
import { DeviceEventEmitter } from "react-native";

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
    getPostFindToBorrow: async (pageNo = 0, pageSize = 10) => {
        const data = await axios.get(`${API.domain}/api/v1/get/post?pageNo=${pageNo}&pageSize=${pageSize}`);
        return data.data;
    },
    getPostFindToLend: async (pageNo = 0, pageSize = 10) => {
        const data = await axios.get(`${API.domain}/api/v1/get/lendPost?pageNo=${pageNo}&pageSize=${pageSize}`);
        return data.data;
    },
    lendPost: async (post) => {
        const data = await axios.post(`${API.domain}/api/v1/post/rent`, {
            details: post.details,
            itemId: post.itemId,
            userId: post.userId
        });
    },
    getPostById: async (postId) => {
        const data = await axios.get(`${API.domain}/api/v1/get/post/by?postId=${postId}`);
        return data.data;
    },
    getEquipmentByUserId: async () => {
        const data = await axios.get(`${API.domain}/api/v1/get/equipment/by?userId=10001`);
        return data.data;
    },
    borrowPost: async (post) => {
        const data = await axios.post(`${API.domain}/api/v1/post/borrow`, {
            "details": post.details,
            "userId": 10001,
            "price": post.price,
            "period": post.period
        })
        console.log(data.data);
    },
    getLikePost: async () => {
        const data = await axios.get(`${API.domain}/api/v1/getLikePost`);
        return data.data;
    },
    getItemType: async () => {
        const data = await axios.get(`${API.domain}/api/v1/get/itemType`);
        return data.data;
    },
    getMyItems: async () => {
        const data = await axios.get(`${API.domain}/api/v1/get/all/equipment`);
        return data.data;
    },
    getItemType: async () => {
        const data = await axios.get(`${API.domain}/api/v1/getItemType`);
        return data.data;
    },
    saveItem: async (images = [], item) => {
        const formData = new FormData();
        images.forEach(image => {
            let uriParts = image.uri.split('.');
            let fileType = uriParts[uriParts.length - 1];
            formData.append("files", {
                uri: image.uri,
                name: `photo.${uriParts}`,
                type: `image/${fileType}`
            });
        })
        let body = ["quantity", "price", "name", "userId"];
        body.forEach(b => {
            formData.append(b, item[b]);
        });
        formData.append("types", item.types);
        item.serials.forEach(serial => {
            formData.append("serials", serial);
        });
        axios.post(
            `${API.domain}/api/v1/uploadEquipment`,
            formData,
            {
                data: formData,
                headers: {
                    Accept: "application/json",
                    "Content-Type": `multipart/form-data;`,
                },
                transformRequest: (data) => {
                    return data;
                },
            }).then(req => {
            }).catch(err => {
            })
    }
};
export default API;
