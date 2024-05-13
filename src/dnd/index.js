import React, {useEffect} from "react";
// import ReactDOM from "react-dom";
import Backend from "react-dnd-html5-backend";
import Example from "./example";
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
    dispatch(fetchScreenData(22));
  }, [dispatch]);
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        {store.loading ? "Loading..." : <Example />}
      </DndProvider>
    </div>
  );
}

export default DndApp;
