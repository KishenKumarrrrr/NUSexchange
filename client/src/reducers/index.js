import myExchange from "./myexchange";
import savedModules from "./savedmodules";
import searchModuleOptions from "./searchmoduleoptions";
import universityResults from "./universityResults";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    myExchange: myExchange,
    savedModules: savedModules,
    searchModuleOptions: searchModuleOptions,
    universityResults: universityResults,
})

export default allReducers;