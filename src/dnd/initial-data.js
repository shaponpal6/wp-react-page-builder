import { COMPONENT, ROW, COLUMN } from "./constants";

const initialData = {
  layout: [
    // {
    //   type: ROW,
    //   id: "row0",
    //   children: [
    //     {
    //       type: COLUMN,
    //       id: "column0",
    //       children: [
    //         {
    //           type: COMPONENT,
    //           id: "component0"
    //         },
    //         {
    //           type: COMPONENT,
    //           id: "component1"
    //         }
    //       ]
    //     },
    //     {
    //       type: COLUMN,
    //       id: "column1",
    //       children: [
    //         {
    //           type: COMPONENT,
    //           id: "component2"
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   type: ROW,
    //   id: "row1",
    //   children: [
    //     {
    //       type: COLUMN,
    //       id: "column2",
    //       children: [
    //         {
    //           type: COMPONENT,
    //           id: "component3"
    //         },
    //         {
    //           type: COMPONENT,
    //           id: "component0"
    //         },
    //         {
    //           type: COMPONENT,
    //           id: "component2"
    //         }
    //       ]
    //     }
    //   ]
    // }
  ],
  components: {
    component0: { id: "component0", type: "input", content: "Some input" },
    component1: { id: "component1", type: "image", content: "Some image" },
    component2: { id: "component2", type: "email", content: "Some email" },
    component3: { id: "component3", type: "name", content: "Some name" },
    component4: { id: "component4", type: "phone", content: "Some phone" }
  },
  screens: [
    { id: "screen0", content: "screen 1 content" },
    { id: "screen1", content: "screen 2 content" },
    { id: "screen2", content: "screen 3 content" },
    { id: "screen3", content: "screen 4 content" },
    { id: "screen4", content: "screen 5 content" },
    { id: "screen5", content: "+ Add Screen" }
  ]
};

export default initialData;
