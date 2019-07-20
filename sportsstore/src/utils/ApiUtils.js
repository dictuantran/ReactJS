import Axios from "axios";
import { RestUrls } from "../constants/Urls";

export class ApiUtils {

    GetData = async(dataType, params) =>
        this.SendRequest("get", RestUrls[dataType], params);

    SendRequest = (method, url, params) => Axios.request({ method, url, params });
}