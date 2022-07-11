import React, { memo, useCallback, useEffect, useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabItems } from "./common/constants";
import Settings from "./components/Settings";
import Tab from "./components/Tab";
import Typing from "./components/Typing";
import When from "./components/When";
import { useGroupWord } from "./hooks/useGroupWord";
import { setPage } from "./features/settings/settingsSlice";
const text = `The resources I use for this lesson, and the other links that I'll leave down there too. And remember, be sure to subscribe to my lessons on the platform that you're listening to them right now. And then click that Share button, and send this lesson to a friend. You can send it by email, by messenger, by message, or just share it on a social media platform. Once you've done that let me know, and I'll be very grateful to you. Okay, thank you again for listening. And before you go, check out the other episodes and lessons that I've made by just clicking onto my profile and listening to more lessons. Okay, thanks again, and I'll speak to you soon, bye bye.`;

function App() {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(tabItems.main);
  const { customText, lengthTextPerPage, currentPage } = useSelector(
    (state) => state.settings
  );
  const { currentGroup, maxGroup } = useGroupWord(
    customText,
    lengthTextPerPage,
    currentPage
  );
  const nextPage = () => {
    if (currentPage + 1 > maxGroup) return;
    dispatch(setPage(currentPage + 1));
  };
  return (
    <div className="container-md">
      <Tab onChange={setTab} active={tab} />
      <When condition={tab === tabItems.main}>
        <Typing
          onFinish={nextPage}
          key={currentPage}
          text={currentGroup.join(" ")}
        />
      </When>
      <When condition={tab === tabItems.settings}>
        <Settings />
      </When>
    </div>
  );
}

export default App;
