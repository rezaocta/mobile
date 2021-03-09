import { combineReducers } from "redux";

const initialState = {
    beratBadan:'0',
};

const initialStateHome = {
    title : "Home Page",
    desc : "Deskripsi untuk Home Page",
};

const HomeReducer = (state = initialStateHome, action) => {
    return state;
};

const initialStateFinish = {
    info : "Finish Page",
};

const FinishReducer = (state = initialStateFinish, action) => {
    return state;
};

const reducer = combineReducers({
    HomeReducer,
    FinishReducer,
});

export default reducer;