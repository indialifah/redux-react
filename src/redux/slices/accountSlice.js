import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        balance: 0,
        isDarkMode: true,
    },
    reducers: {
        deposit(state, action){
            state.balance += action.payload
        },
        withdraw(state, action){
            state.balance -= action.payload
        },
        toggleDarkMode(state) {
            state.isDarkMode = !state.isDarkMode; // Toggle the dark mode state
        }
    }
})

export const { deposit, withdraw, toggleDarkMode } = accountSlice.actions

export default accountSlice.reducer