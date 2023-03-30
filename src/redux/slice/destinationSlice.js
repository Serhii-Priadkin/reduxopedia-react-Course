import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Hong Kong",
        days: 7,
        fact: "World's longest covered escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Japan is mostly mountains",
      },
      {
        name: "New Zealand",
        days: 14,
        fact: "Last country in the world to be inhabited by humans",
      },
    ],
    destinationSelected:null
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers:{
destinationClicked:(state,action)=>{
    state.destinationSelected=action.payload;
}

  }
});
export const {destinationClicked} =destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;