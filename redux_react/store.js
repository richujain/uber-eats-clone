import { createStore } from 'redux'
import reducer from "./reducers/index"

export default function configureStore(initialStore) {
    const store = createStore(reducer,initialStore)
    return store;
}