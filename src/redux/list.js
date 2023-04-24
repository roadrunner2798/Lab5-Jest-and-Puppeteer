import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    field: "",
    items: [
    ]
}

const json = window.localStorage.getItem("payload");

if (json !== null && json !== "") {

    const payload = JSON.parse(json);
    initialState.field = payload.list.field;
    initialState.items = payload.list.items;

}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    define: (state, action) => {
        state.field = action.payload
    },
    add: (state, action) => {
        state.items.push(action.payload)
    },
    remove: (state, action) => {
        state.items.splice(action.payload, 1)
    }
  },
})

export const { define, add, remove } = listSlice.actions
export default listSlice.reducer