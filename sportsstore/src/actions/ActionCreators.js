import { ActionTypes} from "../constants/Types";
//import { data as phData} from "../data/placeholderData";
import { ApiUtils } from "../utils/ApiUtils";

const dataSource = new ApiUtils();

export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType)
                .then(response => ({dataType, data: response.data}))
});
