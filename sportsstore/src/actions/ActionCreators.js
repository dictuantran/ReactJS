import { ActionTypes} from "../constants/Types";
import { ApiUtils } from "../utils/ApiUtils";

const dataSource = new ApiUtils();

export const loadData = (dataType, params) => ({
    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType, params).then(response => 
                ({ 
                    dataType,
                    data: response.data,
                    total: Number(response.headers["x-total-count"]),
                    params
                })
    )            
});