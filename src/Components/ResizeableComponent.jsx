import React, { useState } from 'react';
import { Panel, PanelGroup } from "react-resizable-panels";
import PanelResizeHandle from './PanelResizeHandle';

const ResizeableComponent = ({children}) => {


  return (
    <PanelGroup direction="horizontal">
      <Panel minSize={30}>
        middle
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={200} minSize={160}>
        {children}
      </Panel>
    </PanelGroup>
  );
};

export default ResizeableComponent;
