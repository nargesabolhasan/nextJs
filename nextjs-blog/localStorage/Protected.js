import { configureStore } from "@reduxjs/toolkit";

const loadPrePreLoadState = () => {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};
const SaveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (err) {
    return undefined;
  }
};
export const store = configureStore({
  devTools: true,
  reducer: reducers,
  // here we restore the previously persisted state
  preloadedState: loadPrePreLoadState(),
});
("");
store.subscribe(()=>{
    SaveState({user:store.getState().user})
})