const { createStore, applyMiddleware } = require("redux");
const { default: rootReducer } = require("./rootReducer");
const { thunk } = require("redux-thunk");

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
