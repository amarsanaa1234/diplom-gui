import axios from "axios";

const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token)
        window.location.replace("http://localhost:9999");
    return JSON.parse(token);
}

export const getService = async (serviceUrl, body) => {
    try {
        const response = await axios.get(`/api${serviceUrl}`, {
            headers: {"Authorization": `Bearer ${getToken()}`},
            params: body
        });
        return response.data;
    } catch (error) {
        let msg = error?.message;
        if (error?.response?.data?.message) msg = error.response.data.message;
        console.log(error);
        if ([401].includes(error?.response?.status)) {
            console.log("Хандах эрхгүй байна");
            window.location.replace("http://localhost:9999");
        }
    }
};

