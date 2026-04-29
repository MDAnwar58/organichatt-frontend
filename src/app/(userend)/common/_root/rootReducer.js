import { combineReducers } from "redux";
import commonReducer from "../_api/commonReducer";
import homeReducer from "../../_api/homeReducer";
import productReducer from "../../products/_api/reducer";
import offerReducer from "../../offers/_api/reducer";
import OrderReducer from "../../order/_api/reducer";

const rootReducer = combineReducers({
   commonData: commonReducer,
   home: homeReducer,
   productData: productReducer,
   offerData: offerReducer,
   OrderSummaryData: OrderReducer,
});

export default rootReducer;
