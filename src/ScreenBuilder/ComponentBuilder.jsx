import React, { useState, useCallback, useEffect, useMemo, memo } from "react";

import DropZone from "./DropZone";
import TrashDropZone from "./TrashDropZone";
import SideBarItem from "./SideBarItem";
import ScreenItem from "./ScreenItem";
import Row from "./Row";
import UpdateButton from "./UpdateButton";
import initialData from "./initial-data";
import {
  handleMoveWithinParent,
  handleMoveToDifferentParent,
  handleMoveSidebarComponentIntoParent,
  handleRemoveItemFromLayout
} from "./helpers";
import {sortScreenData, removeScreenData} from "../store/actions/screen";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';


import { SIDEBAR_ITEMS, SIDEBAR_ITEM, COMPONENT, COLUMN } from "./constants";
import shortid from "shortid";
import ComponentList from "./ComponentList";
import CreateComponent from "./CreateComponent";

const ComponentBuilder = (() => {
  const initialLayout = initialData.layout;
  const initialComponents = initialData.components;
  const initialScreens = initialData.screens;
  const [layout, setLayout] = useState(initialLayout);
  const [components, setComponents] = useState(initialComponents);

  const dispatch = useAppDispatch();
  const store = useSelector((state) => state.screen);

  const handleSorting = useCallback(
    (layout) => {
      const rows = store?.data?.bl_screen_data ?? [];
      const layout2 = layout.map(row =>({id: row.id, type: row.type, val: row.val}));
      const areArraysEqual = JSON.stringify(rows) === JSON.stringify(layout2);
      if (!areArraysEqual) {
        dispatch(sortScreenData(layout));
      }
    },
    [layout]
  );


  useEffect(() => {
    let rows = store?.data?.bl_screen_data ?? [];
    console.log('rows', rows)
    if(rows.length > 0) {
      rows = rows.map(row => {
        return {
          ...row,
          children: row
        }
      });
    }
    setLayout(rows);
  }, [store]);

  const handleDropToTrashBin = useCallback(
    (dropZone, item) => {
      const splitItemPath = item.path.split("-");
      setLayout(handleRemoveItemFromLayout(layout, splitItemPath));
    },
    [layout]
  );

  const handleDrop = useCallback(
    (dropZone, item) => {
      const splitDropZonePath = dropZone.path.split("-");
      const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");
      let newLayout = layout;

      let newItem = { ...item};
      if (item.type === COLUMN) {
        newItem.children = item.children;
      }
      // sidebar into
      if (item.type === SIDEBAR_ITEM) {
        // 1. Move sidebar item into page
        const newComponent = {
          id: shortid.generate(),
          ...item.component
        };
        newItem = {
          id: newComponent.id,
          type: COMPONENT,
          data: {},
          component: newItem.component
        };
        setComponents({
          ...components,
          [newComponent.id]: newComponent
        });
        newLayout = handleMoveSidebarComponentIntoParent(
          layout,
          splitDropZonePath,
          newItem
        );
        setLayout(newLayout);
        handleSorting(newLayout);
        return;
      }
      // move down here since sidebar items dont have path
      const splitItemPath = item.path.split("-");
      const pathToItem = splitItemPath.slice(0, -1).join("-");

      // 2. Pure move (no create)
      if (splitItemPath.length === splitDropZonePath.length) {
        // 2.a. move within parent
        if (pathToItem === pathToDropZone) {
          const newLayout = handleMoveWithinParent(layout, splitDropZonePath, splitItemPath);
          setLayout(newLayout);
          handleSorting(newLayout);
          return;
        }

        // 2.b. OR move different parent
        // TODO FIX columns. item includes children
        setLayout(
          handleMoveToDifferentParent(
            layout,
            splitDropZonePath,
            splitItemPath,
            newItem
          )
        );
        return;
      }

      
      // 3. Move + Create
      setLayout(
        handleMoveToDifferentParent(
          layout,
          splitDropZonePath,
          splitItemPath,
          newItem
        )
      );
    },
    [layout, components]
  );

  const renderRow = (row, currentPath) => {
    return (
      <Row
        key={row.id}
        data={row}
        handleDrop={handleDrop}
        handleDropToTrashBin={handleDropToTrashBin}
        components={components}
        path={currentPath}
      />
    );
  };

  return (
    <div className="dnd-body">
      <div className="sideBar resizable">
        <CreateComponent/>
        <ComponentList/>
      </div>
      <div className="pageContainer resizable">
        <div className="page-head-wrapper">
          <h2>Title: {store?.data?.title ?? ""}</h2>
          <h2>Status: {store?.data?.status ?? "Unpublish"}</h2>
        </div>
        <div className="page">
          {layout.map((row, index) => {
            const currentPath = `${index}`;

            return (
              <React.Fragment key={row.id}>
                <DropZone
                  data={{
                    path: currentPath,
                    childrenCount: layout.length
                  }}
                  onDrop={handleDrop}
                  path={currentPath}
                />
                {renderRow(row, currentPath)}
              </React.Fragment>
            );
          })}
          <DropZone
            data={{
              path: `${layout.length}`,
              childrenCount: layout.length
            }}
            onDrop={handleDrop}
            isLast
          />
        </div>
      </div>
      <div className="sideBar resizable">
        {/* <CreateComponent/> */}
        <ComponentList/>
      </div>
    </div>
  );
});
export default memo(ComponentBuilder);
