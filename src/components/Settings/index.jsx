import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCustomText,
  setLengTextPerPage,
} from "../../features/settings/settingsSlice";

const Settings = () => {
  const [field, setField] = useState({
    customText: "",
    lengthTextPerPage: 0,
  });

  const setFieldBy = (by, value) => {
    setField({
      ...field,
      [by]: value,
    });
  };

  const getField = (by) => field[by];

  const { customText, lengthTextPerPage } = useSelector(
    (state) => state.settings
  );
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCustomText(field.customText));
    dispatch(setLengTextPerPage(field.lengthTextPerPage));
  };

  useEffect(() => {
    setField({
      customText: customText,
      lengthTextPerPage: lengthTextPerPage,
    });
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="">Custom text:</label>
        <textarea
          onChange={(e) => setFieldBy("customText", e.target.value)}
          value={getField("customText")}
          className="border border-gray-200 rounded-md"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="">Text per page:</label>
        <input
          type="number"
          onChange={(e) => setFieldBy("lengthTextPerPage", e.target.value)}
          value={getField("lengthTextPerPage")}
        />
      </div>
      <div className="flex justify-center mt-6">
        <button className="text-green-600 rounded-md">Save</button>
      </div>
    </form>
  );
};

export default Settings;
