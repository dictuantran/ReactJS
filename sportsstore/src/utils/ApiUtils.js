import Axios from "axios";
import { RestUrls } from "../constants/Urls";

export class ApiUtils {

    GetData = async(dataType, params) =>
        this.SendRequest("get", RestUrls[dataType], params);

    StoreData = (dataType, data) => 
        this.SendRequest("post", RestUrls[dataType], {}, data);

    SendRequest = (method, url, params, data) => Axios.request({ method, url, params, data });
}