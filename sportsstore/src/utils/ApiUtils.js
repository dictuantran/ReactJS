import Axios from "axios";
import { RestUrls } from "../constants/Urls";

export class ApiUtils {

    GetData = (dataType) =>
        this.SendRequest("get", RestUrls[dataType]);

    SendRequest = (method, url) => Axios.request({ method, url });
}