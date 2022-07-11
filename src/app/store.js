import { configureStore } from "@reduxjs/toolkit";
import settingsReducer, { updateSettingLocalstore } from "../features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer
  }
})

// autoSave proccess
setInterval(() => {
  const { getState } = store
  const settings = getState().settings

  updateSettingLocalstore(settings)
}, 1000)