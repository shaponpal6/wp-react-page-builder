import React, {useEffect} from "react";
// import ReactDOM from "react-dom";
import Backend from "react-dnd-html5-backend";
import Container from "./Container";
import { DndProvider } from "react-dnd";
import {fetchScreenData} from "../store/actions/screen";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';

// import "./styles.css";

function ComponentBuilder() {
  const dispatch = useAppDispatch();
  const store = useSelector((state) => state.screen);

  useEffect(() => {
    // dispatch(fetchData());
    if(wpApiSettings.screen_id) dispatch(fetchScreenData(wpApiSettings.screen_id));
  }, [dispatch]);
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        {store.loading ? "Loading..." : !wpApiSettings.page || store.error !== null ? 'Something went wrong. '+store.error : <Container />}
      </DndProvider>
    </div>
  );
}

export default ComponentBuilder;
