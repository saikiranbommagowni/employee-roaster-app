import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"

const store = configureStore({
  reducer: rootReducer,
})

/* Used to create redux store for testing purpose only*/
export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export default store
