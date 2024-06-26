import React, {useEffect} from "react";
// import ReactDOM from "react-dom";
import Backend from "react-dnd-html5-backend";
import Container from "./Container";
import ComponentBuilder from "./ComponentBuilder";
import { DndProvider } from "react-dnd";
import {fetchScreenData} from "../store/actions/screen";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';

// import "./styles.css";

function DndApp() {
  const dispatch = useAppDispatch();
  const store = useSelector((state) => state.screen);

  useEffect(() => {
    // dispatch(fetchData());
    if(wpApiSettings.screen_id) dispatch(fetchScreenData(wpApiSettings.screen_id));
  }, [dispatch]);
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        {store.loading ? "Loading..." : !wpApiSettings.screen_id || store.error !== null ? 'Something went wrong. '+store.error : (<>
          {wpApiSettings.page && wpApiSettings.page === "screens_builder" && <Container />}
          {wpApiSettings.page && wpApiSettings.page === "components" && <ComponentBuilder/>}
        </>)}
      </DndProvider>
    </div>
  );
}

export default DndApp;
