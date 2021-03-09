import { combineReducers } from "redux";

const initialState = {
    beratBadan:'0',
};

const initialStateHome = {
    dataUser: {
        beratBadan: '',
        tinggiBadan: '',
    },
    title : "Home Page",
    desc : "Deskripsi untuk Home Page",
};

const HomeReducer = (state = initialStateHome, action) => {
    if(action.type === 'SET_DATAUSER'){
        return{
            ...state,
            dataUser:{
                ...state.dataUser,
                [action.inputType]: action.inputValue,
            },
        };
    }
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