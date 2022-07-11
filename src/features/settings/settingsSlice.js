import { createSlice } from "@reduxjs/toolkit";

export const key_settings = 'key_settings';

export const updateSettingLocalstore = (settings) => {
  localStorage.setItem(key_settings, JSON.stringify(settings));
}

const initialState = () => {
  const defaultState = {
    customText: 'change default',
    lengthTextPerPage: 10,
    currentPage: 1
  }

  const dataSave = JSON.parse(localStorage.getItem(key_settings));

  if (dataSave) return dataSave

  return defaultState
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState(),
  reducers: {
    setCustomText: (state, action) => {
      state.customText = action.payload
    },
    setLengTextPerPage: (state, action) => {
      state.lengthTextPerPage = action.payload
    },
    setPage: (state, action) => {
      state.currentPage = action.payload
    }
  }
})

export default settingsSlice.reducer

export const { setCustomText, setLengTextPerPage, setPage } = settingsSlice.actions