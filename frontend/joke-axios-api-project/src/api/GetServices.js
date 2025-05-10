import axios from "axios"; 

const api = axios.create({
    baseURL: "http://localhost:3000/",
});


export const GetDatas = () => {
    return api.get("jokes");
}

export const GetSingleData = (id) => {
    return api.get(`jokes/${id}`);
}

export const PostData = (newJoke) => {
    return api.post(`jokes`, newJoke);
}

export const UpdateData = (id, editJoke) => {
    return api.put(`jokes/${id}`, editJoke)
}

export const DeleteData = (id) => {
    return api.delete(`jokes/${id}`);
}