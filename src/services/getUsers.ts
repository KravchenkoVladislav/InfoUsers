import axios, {AxiosResponse} from "axios";

const getUsers = (page: number, results:number): Promise<AxiosResponse> => axios.get(`https://randomuser.me/api/?page=${page}&results=${results}&seed=infoUsers`);

export default getUsers;