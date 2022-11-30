import { createSlice } from "@reduxjs/toolkit";
import List from "../components/List";
const initialState = [];

const addListreducer = createSlice({
    name: "List",
    initialState,
    reducers: {
        addList: (state, action) => {
            state.push(action.payload);
            return state;
        },

        removeList: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },

        updateList: (state, action) => {
            return state.map(List => {
                if (List.id === action.payload.id) {
                    return {
                        ...List,
                        item: action.payload.item,
                    }
                    return List;
                }
            })
        },
        completeList: (state,action) => {
            return state.map((List) => {
                if (List.id === action.payload) {
                    return {
                        ...List,
                        completed:true,
                    };
                }
                return List;
            });
        }
    }
});

export const { addList, removeList, updateList, completeList } = addListreducer.actions;
export const reducer = addListreducer.reducer;