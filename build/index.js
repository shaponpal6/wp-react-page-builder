/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-dnd/invariant/dist/invariant.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invariant: () => (/* binding */ invariant)
/* harmony export */ });
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}


//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual)
/* harmony export */ });
function shallowEqual(objA, objB, compare, compareContext) {
  var compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (compareResult !== void 0) {
    return !!compareResult;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
}


//# sourceMappingURL=shallowequal.esm.js.map


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/store */ "./src/store/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _dnd_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnd/index */ "./src/dnd/index.js");




const App = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _store_store__WEBPACK_IMPORTED_MODULE_1__.store
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dnd_index__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/dnd/Column.jsx":
/*!****************************!*\
  !*** ./src/dnd/Column.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/hooks/useDrag.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/dnd/constants.js");
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropZone */ "./src/dnd/DropZone.jsx");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component */ "./src/dnd/Component.jsx");






const style = {};
const Column = ({
  data,
  components,
  handleDrop,
  path
}) => {
  var _data$val;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [{
    isDragging
  }, drag] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrag)({
    item: {
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN,
      id: data.id,
      val: (_data$val = data.val) !== null && _data$val !== void 0 ? _data$val : "",
      children: data.children,
      path
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(ref);
  const renderComponent = (component, currentPath) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Component__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: component.id,
      data: component,
      components: components,
      path: currentPath
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: ref,
    style: {
      ...style,
      opacity
    },
    className: "base draggable column"
  }, data.id, data.children.map((component, index) => {
    const currentPath = `${path}-${index}`;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: component.id
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropZone__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: {
        path: currentPath,
        childrenCount: data.children.length
      },
      onDrop: handleDrop
    }), renderComponent(component, currentPath));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropZone__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: {
      path: `${path}-${data.children.length}`,
      childrenCount: data.children.length
    },
    onDrop: handleDrop,
    isLast: true
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Column);

/***/ }),

/***/ "./src/dnd/Component.jsx":
/*!*******************************!*\
  !*** ./src/dnd/Component.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/hooks/useDrag.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/dnd/constants.js");




const style = {
  border: "1px dashed black",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move"
};
const Component = ({
  data,
  components,
  path
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [{
    isDragging
  }, drag] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrag)({
    item: {
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.COMPONENT,
      id: data.id,
      path
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(ref);
  const component = components[data.id];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: ref,
    style: {
      ...style,
      opacity
    },
    className: "component draggable"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, data.id), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, component.content));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ }),

/***/ "./src/dnd/ComponentModal.jsx":
/*!************************************!*\
  !*** ./src/dnd/ComponentModal.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/screen */ "./src/store/actions/screen.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ "./src/store/store.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component */ "./src/dnd/Component.jsx");


// import ReactDOM from 'react-dom';



// import { fetchData } from '../store/actions';


const customStyles = {
  content: {
    width: '50%',
    height: 'auto',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
react_modal__WEBPACK_IMPORTED_MODULE_1___default().setAppElement('#bl-react-page-builder');
function ComponentModal({
  component
}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [input, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [row, setRow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(component);
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  // const { loading, data: data2, error } = useSelector((state) => state);
  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.screen);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _component$val;
    setInputValue((_component$val = component.val) !== null && _component$val !== void 0 ? _component$val : "");
  }, []);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    var _component$id, _component$type;
    setInputValue(e.target.value);
    setRow({
      id: (_component$id = component?.id) !== null && _component$id !== void 0 ? _component$id : Date.now(),
      type: (_component$type = component?.type) !== null && _component$type !== void 0 ? _component$type : 'text',
      val: input
    });
  }, [input]);
  const handleSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();
    setIsOpen(false);
    return dispatch((0,_store_actions_screen__WEBPACK_IMPORTED_MODULE_2__.updateScreenData)(row));
  }, [input]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: openModal,
    className: "save-icon"
  }, "\u270E"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: customStyles,
    contentLabel: "Edit Component",
    className: "modal",
    overlayClassName: "overlay"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "top-right-corner",
    onClick: closeModal
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "icon trash-icon"
  }, "\u292B")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "input-box",
    placeholder: "Enter text",
    onChange: handleInput,
    value: input
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "bottom-right-corner",
    onClick: handleSave
  }, "Save"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentModal);

/***/ }),

/***/ "./src/dnd/DropZone.jsx":
/*!******************************!*\
  !*** ./src/dnd/DropZone.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/hooks/useDrop.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/dnd/constants.js");





const ACCEPTS = [_constants__WEBPACK_IMPORTED_MODULE_2__.SIDEBAR_ITEM, _constants__WEBPACK_IMPORTED_MODULE_2__.COMPONENT, _constants__WEBPACK_IMPORTED_MODULE_2__.ROW, _constants__WEBPACK_IMPORTED_MODULE_2__.COLUMN];
const DropZone = ({
  data,
  onDrop,
  isLast,
  className
}) => {
  const [{
    isOver,
    canDrop
  }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_3__.useDrop)({
    accept: ACCEPTS,
    drop: (item, monitor) => {
      onDrop(data, item);
    },
    canDrop: (item, monitor) => {
      const dropZonePath = data.path;
      const splitDropZonePath = dropZonePath.split("-");
      const itemPath = item.path;

      // sidebar items can always be dropped anywhere
      if (!itemPath) {
        // if (data.childrenCount >= 3) {
        //  return false;
        // }
        return true;
      }
      const splitItemPath = itemPath.split("-");

      // limit columns when dragging from one row to another row
      const dropZonePathRowIndex = splitDropZonePath[0];
      const itemPathRowIndex = splitItemPath[0];
      const diffRow = dropZonePathRowIndex !== itemPathRowIndex;
      if (diffRow && splitDropZonePath.length === 2 && data.childrenCount >= 3) {
        return false;
      }

      // Invalid (Can't drop a parent element (row) into a child (column))
      const parentDropInChild = splitItemPath.length < splitDropZonePath.length;
      if (parentDropInChild) return false;

      // Current item can't possible move to it's own location
      if (itemPath === dropZonePath) return false;

      // Current area
      if (splitItemPath.length === splitDropZonePath.length) {
        const pathToItem = splitItemPath.slice(0, -1).join("-");
        const currentItemIndex = Number(splitItemPath.slice(-1)[0]);
        const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");
        const currentDropZoneIndex = Number(splitDropZonePath.slice(-1)[0]);
        if (pathToItem === pathToDropZone) {
          const nextDropZoneIndex = currentItemIndex + 1;
          if (nextDropZoneIndex === currentDropZoneIndex) return false;
        }
      }
      return true;
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = isOver && canDrop;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("dropZone", {
      active: isActive,
      isLast
    }, className),
    ref: drop
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropZone);

/***/ }),

/***/ "./src/dnd/Row.jsx":
/*!*************************!*\
  !*** ./src/dnd/Row.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/hooks/useDrag.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/dnd/constants.js");
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropZone */ "./src/dnd/DropZone.jsx");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ "./src/dnd/Column.jsx");
/* harmony import */ var _ComponentModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComponentModal */ "./src/dnd/ComponentModal.jsx");
/* harmony import */ var _store_actions_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/screen */ "./src/store/actions/screen.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/store */ "./src/store/store.js");











const style = {};
const Row = ({
  data,
  components,
  handleDrop,
  path,
  handleDropToTrashBin
}) => {
  var _data$val;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [input, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();
  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.screen);
  const [{
    isDragging
  }, drag] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_8__.useDrag)({
    item: {
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.ROW,
      id: data.id,
      children: data.children,
      path
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(ref);
  const renderColumn = (column, currentPath) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Column__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: column.id,
      data: column,
      components: components,
      handleDrop: handleDrop,
      path: currentPath
    });
  };

  // Function to parse URL parameters
  const getUrlParameter = name => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
  const handleInput = e => {
    setInputValue(e.target.value);
    // addTodoAction(33);
    // dispatch(updateScreenData({"key2": e.target.value}));
  };
  const handleDelete = data => {
    dispatch((0,_store_actions_screen__WEBPACK_IMPORTED_MODULE_5__.removeScreenData)(data));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: ref,
    style: {
      ...style,
      opacity
    },
    className: "base draggable row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "columns component-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "corner-elements"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "icon save-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ComponentModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: data
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "trash-icon",
    onClick: () => handleDelete(data)
  }, "\u292B"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (_data$val = data.val) !== null && _data$val !== void 0 ? _data$val : "...")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ }),

/***/ "./src/dnd/ScreenItem.jsx":
/*!********************************!*\
  !*** ./src/dnd/ScreenItem.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const ScreenItem = ({
  data
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sideBarItem"
  }, data.content);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenItem);

/***/ }),

/***/ "./src/dnd/SideBarItem.jsx":
/*!*********************************!*\
  !*** ./src/dnd/SideBarItem.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/hooks/useDrag.js");



const SideBarItem = ({
  data
}) => {
  // console.log('data', data)
  const [{
    opacity
  }, drag] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_1__.useDrag)({
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sideBarItem",
    ref: drag,
    style: {
      opacity
    }
  }, data.component.type);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBarItem);

/***/ }),

/***/ "./src/dnd/TrashDropZone.jsx":
/*!***********************************!*\
  !*** ./src/dnd/TrashDropZone.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/hooks/useDrop.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/dnd/constants.js");





const ACCEPTS = [_constants__WEBPACK_IMPORTED_MODULE_2__.ROW, _constants__WEBPACK_IMPORTED_MODULE_2__.COLUMN, _constants__WEBPACK_IMPORTED_MODULE_2__.COMPONENT];
const TrashDropZone = ({
  data,
  onDrop
}) => {
  const [{
    isOver,
    canDrop
  }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_3__.useDrop)({
    accept: ACCEPTS,
    drop: (item, monitor) => {
      onDrop(data, item);
    },
    canDrop: (item, monitor) => {
      const layout = data.layout;
      const itemPath = item.path;
      const splitItemPath = itemPath.split("-");
      const itemPathRowIndex = splitItemPath[0];
      const itemRowChildrenLength = layout[itemPathRowIndex] && layout[itemPathRowIndex].children.length;

      // prevent removing a col when row has only one col
      if (item.type === _constants__WEBPACK_IMPORTED_MODULE_2__.COLUMN && itemRowChildrenLength && itemRowChildrenLength < 2) {
        return false;
      }
      return true;
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = isOver && canDrop;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("trashDropZone", {
      active: isActive
    }),
    ref: drop
  }, "TRASH");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrashDropZone);

/***/ }),

/***/ "./src/dnd/UpdateButton.jsx":
/*!**********************************!*\
  !*** ./src/dnd/UpdateButton.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./src/store/store.js");




function UpdateButton() {
  const screenData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.screen);

  // Function to parse URL parameters
  const getUrlParameter = name => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
  function saveScreenData() {
    var _screenData$data$bl_s;
    // const screen_id = getUrlParameter('screen_id');
    const screen_id = wpApiSettings.screen_id;
    console.log('screenData', screenData);
    fetch('http://localhost/wordpress/wp-json/bl/v1/save-screen/' + screen_id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': wpApiSettings.nonce // Nonce for authentication (assuming wpApiSettings is available globally)
      },
      body: JSON.stringify((_screenData$data$bl_s = screenData?.data?.bl_screen_data) !== null && _screenData$data$bl_s !== void 0 ? _screenData$data$bl_s : [])
    }).then(response => {
      console.log('response', response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data => {
      console.log('Screen data saved successfully:', data);
      alert('Screen data saved successfully');
    }).catch(error => {
      console.error('Error saving screen data:', error);
      alert('Error saving screen data:' + error.message);
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "save-icon update-button",
    onClick: saveScreenData
  }, "Update"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateButton);

/***/ }),

/***/ "./src/dnd/constants.js":
/*!******************************!*\
  !*** ./src/dnd/constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLUMN: () => (/* binding */ COLUMN),
/* harmony export */   COMPONENT: () => (/* binding */ COMPONENT),
/* harmony export */   ROW: () => (/* binding */ ROW),
/* harmony export */   SIDEBAR_ITEM: () => (/* binding */ SIDEBAR_ITEM),
/* harmony export */   SIDEBAR_ITEMS: () => (/* binding */ SIDEBAR_ITEMS)
/* harmony export */ });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);

const SIDEBAR_ITEM = "sidebarItem";
const ROW = "row";
const COLUMN = "column";
const COMPONENT = "component";
const SIDEBAR_ITEMS = [{
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
  type: SIDEBAR_ITEM,
  val: "",
  component: {
    type: "input",
    content: "Some input"
  }
}, {
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
  type: SIDEBAR_ITEM,
  val: "",
  component: {
    type: "name",
    content: "Some name"
  }
}, {
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
  type: SIDEBAR_ITEM,
  val: "",
  component: {
    type: "email",
    content: "Some email"
  }
}, {
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
  type: SIDEBAR_ITEM,
  val: "",
  component: {
    type: "phone",
    content: "Some phone"
  }
}, {
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
  type: SIDEBAR_ITEM,
  val: "",
  component: {
    type: "image",
    content: "Some image"
  }
}];

/***/ }),

/***/ "./src/dnd/example.jsx":
/*!*****************************!*\
  !*** ./src/dnd/example.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropZone */ "./src/dnd/DropZone.jsx");
/* harmony import */ var _TrashDropZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrashDropZone */ "./src/dnd/TrashDropZone.jsx");
/* harmony import */ var _SideBarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBarItem */ "./src/dnd/SideBarItem.jsx");
/* harmony import */ var _ScreenItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScreenItem */ "./src/dnd/ScreenItem.jsx");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row */ "./src/dnd/Row.jsx");
/* harmony import */ var _UpdateButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdateButton */ "./src/dnd/UpdateButton.jsx");
/* harmony import */ var _initial_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./initial-data */ "./src/dnd/initial-data.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./src/dnd/helpers.js");
/* harmony import */ var _store_actions_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/screen */ "./src/store/actions/screen.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/store */ "./src/store/store.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./src/dnd/constants.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_12__);















const Container = () => {
  var _store$data$title, _store$data$status;
  const initialLayout = _initial_data__WEBPACK_IMPORTED_MODULE_7__["default"].layout;
  const initialComponents = _initial_data__WEBPACK_IMPORTED_MODULE_7__["default"].components;
  const initialScreens = _initial_data__WEBPACK_IMPORTED_MODULE_7__["default"].screens;
  const [layout, setLayout] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialLayout);
  const [components, setComponents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialComponents);
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_10__.useAppDispatch)();
  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(state => state.screen);
  console.log('layout', layout);
  const handleSorting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(layout => {
    var _store$data$bl_screen;
    const rows = (_store$data$bl_screen = store?.data?.bl_screen_data) !== null && _store$data$bl_screen !== void 0 ? _store$data$bl_screen : [];
    const layout2 = layout.map(row => ({
      id: row.id,
      type: row.type,
      val: row.val
    }));
    const areArraysEqual = JSON.stringify(rows) === JSON.stringify(layout2);
    if (!areArraysEqual) {
      // dispatch(removeScreenData(layout));
      dispatch((0,_store_actions_screen__WEBPACK_IMPORTED_MODULE_9__.sortScreenData)(layout));
      console.log('########call sort', layout);
    }
  }, [layout]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _store$data$bl_screen2;
    let rows = (_store$data$bl_screen2 = store?.data?.bl_screen_data) !== null && _store$data$bl_screen2 !== void 0 ? _store$data$bl_screen2 : [];
    if (rows.length > 0) {
      rows = rows.map(row => {
        return {
          ...row,
          children: row
        };
      });
      setLayout(rows);
    }
  }, [store]);
  const handleDropToTrashBin = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((dropZone, item) => {
    const splitItemPath = item.path.split("-");
    setLayout((0,_helpers__WEBPACK_IMPORTED_MODULE_8__.handleRemoveItemFromLayout)(layout, splitItemPath));
  }, [layout]);
  const handleDrop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((dropZone, item) => {
    console.log('item', item);
    // handleSorting(layout)
    const splitDropZonePath = dropZone.path.split("-");
    const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");
    let newLayout = layout;
    const newItem = {
      id: item.id,
      type: item.type,
      val: item.id
    };
    if (item.type === _constants__WEBPACK_IMPORTED_MODULE_11__.COLUMN) {
      newItem.children = item.children;
    }
    // sidebar into
    if (item.type === _constants__WEBPACK_IMPORTED_MODULE_11__.SIDEBAR_ITEM) {
      // 1. Move sidebar item into page
      const newComponent = {
        id: shortid__WEBPACK_IMPORTED_MODULE_12___default().generate(),
        ...item.component
      };
      const newItem = {
        id: newComponent.id,
        type: _constants__WEBPACK_IMPORTED_MODULE_11__.COMPONENT,
        val: newComponent.id
      };
      setComponents({
        ...components,
        [newComponent.id]: newComponent
      });
      newLayout = (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.handleMoveSidebarComponentIntoParent)(layout, splitDropZonePath, newItem);
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
        const newLayout = (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.handleMoveWithinParent)(layout, splitDropZonePath, splitItemPath);
        setLayout(newLayout);
        handleSorting(newLayout);
        return;
      }

      // 2.b. OR move different parent
      // TODO FIX columns. item includes children
      setLayout((0,_helpers__WEBPACK_IMPORTED_MODULE_8__.handleMoveToDifferentParent)(layout, splitDropZonePath, splitItemPath, newItem));
      return;
    }

    // 3. Move + Create
    setLayout((0,_helpers__WEBPACK_IMPORTED_MODULE_8__.handleMoveToDifferentParent)(layout, splitDropZonePath, splitItemPath, newItem));
  }, [layout, components]);
  const renderRow = (row, currentPath) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: row.id,
      data: row,
      handleDrop: handleDrop,
      handleDropToTrashBin: handleDropToTrashBin,
      components: components,
      path: currentPath
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dnd-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageContainer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "page-head-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Title: ", (_store$data$title = store?.data?.title) !== null && _store$data$title !== void 0 ? _store$data$title : ""), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Status: ", (_store$data$status = store?.data?.status) !== null && _store$data$status !== void 0 ? _store$data$status : "Unpublish")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "page"
  }, layout.map((row, index) => {
    const currentPath = `${index}`;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: row.id
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropZone__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: {
        path: currentPath,
        childrenCount: layout.length
      },
      onDrop: handleDrop,
      path: currentPath
    }), renderRow(row, currentPath));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DropZone__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: {
      path: `${layout.length}`,
      childrenCount: layout.length
    },
    onDrop: handleDrop,
    isLast: true
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sideBar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_UpdateButton__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Components"), Object.values(_constants__WEBPACK_IMPORTED_MODULE_11__.SIDEBAR_ITEMS).map((sideBarItem, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SideBarItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: sideBarItem.id,
    data: sideBarItem
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/dnd/helpers.js":
/*!****************************!*\
  !*** ./src/dnd/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addChildToChildren: () => (/* binding */ addChildToChildren),
/* harmony export */   handleAddColumDataToRow: () => (/* binding */ handleAddColumDataToRow),
/* harmony export */   handleMoveSidebarComponentIntoParent: () => (/* binding */ handleMoveSidebarComponentIntoParent),
/* harmony export */   handleMoveToDifferentParent: () => (/* binding */ handleMoveToDifferentParent),
/* harmony export */   handleMoveWithinParent: () => (/* binding */ handleMoveWithinParent),
/* harmony export */   handleRemoveItemFromLayout: () => (/* binding */ handleRemoveItemFromLayout),
/* harmony export */   insert: () => (/* binding */ insert),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   removeChildFromChildren: () => (/* binding */ removeChildFromChildren),
/* harmony export */   reorder: () => (/* binding */ reorder),
/* harmony export */   reorderChildren: () => (/* binding */ reorderChildren)
/* harmony export */ });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/dnd/constants.js");



// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed); // inserting task in new index

  return result;
};
const remove = (arr, index) => [
// part of the array before the specified index
...arr.slice(0, index),
// part of the array after the specified index
...arr.slice(index + 1)];
const insert = (arr, index, newItem) => [
// part of the array before the specified index
...arr.slice(0, index),
// inserted item
newItem,
// part of the array after the specified index
...arr.slice(index)];
const reorderChildren = (children, splitDropZonePath, splitItemPath) => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0]);
    const itemIndex = Number(splitItemPath[0]);
    return reorder(children, itemIndex, dropZoneIndex);
  }
  const updatedChildren = [...children];
  const curIndex = Number(splitDropZonePath.slice(0, 1));

  // Update the specific node's children
  const splitDropZoneChildrenPath = splitDropZonePath.slice(1);
  const splitItemChildrenPath = splitItemPath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    children: reorderChildren(nodeChildren.children, splitDropZoneChildrenPath, splitItemChildrenPath)
  };
  return updatedChildren;
};
const removeChildFromChildren = (children, splitItemPath) => {
  if (splitItemPath.length === 1) {
    const itemIndex = Number(splitItemPath[0]);
    return remove(children, itemIndex);
  }
  const updatedChildren = [...children];
  const curIndex = Number(splitItemPath.slice(0, 1));

  // Update the specific node's children
  const splitItemChildrenPath = splitItemPath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    children: removeChildFromChildren(nodeChildren.children, splitItemChildrenPath)
  };
  return updatedChildren;
};
const addChildToChildren = (children, splitDropZonePath, item) => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0]);
    return insert(children, dropZoneIndex, item);
  }
  const updatedChildren = [...children];
  const curIndex = Number(splitDropZonePath.slice(0, 1));

  // Update the specific node's children
  const splitItemChildrenPath = splitDropZonePath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    children: addChildToChildren(nodeChildren.children, splitItemChildrenPath, item)
  };
  return updatedChildren;
};
const handleMoveWithinParent = (layout, splitDropZonePath, splitItemPath) => {
  return reorderChildren(layout, splitDropZonePath, splitItemPath);
};
const handleAddColumDataToRow = layout => {
  const layoutCopy = [...layout];
  const COLUMN_STRUCTURE = {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN,
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
    children: []
  };
  return layoutCopy.map(row => {
    if (!row.children.length) {
      row.children = [COLUMN_STRUCTURE];
    }
    return row;
  });
};
const handleMoveToDifferentParent = (layout, splitDropZonePath, splitItemPath, item) => {
  let newLayoutStructure;
  const COLUMN_STRUCTURE = {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN,
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
    children: [item]
  };
  const ROW_STRUCTURE = {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.ROW,
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate()
  };
  switch (splitDropZonePath.length) {
    case 1:
      {
        // moving column outside into new row made on the fly
        if (item.type === _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN) {
          newLayoutStructure = {
            ...ROW_STRUCTURE,
            children: [item]
          };
        } else {
          // moving component outside into new row made on the fly
          newLayoutStructure = {
            ...ROW_STRUCTURE,
            children: [COLUMN_STRUCTURE]
          };
        }
        break;
      }
    case 2:
      {
        // moving component outside into a row which creates column
        if (item.type === _constants__WEBPACK_IMPORTED_MODULE_1__.COMPONENT) {
          newLayoutStructure = COLUMN_STRUCTURE;
        } else {
          // moving column into existing row
          newLayoutStructure = item;
        }
        break;
      }
    default:
      {
        newLayoutStructure = item;
      }
  }
  let updatedLayout = layout;
  updatedLayout = removeChildFromChildren(updatedLayout, splitItemPath);
  updatedLayout = handleAddColumDataToRow(updatedLayout);
  updatedLayout = addChildToChildren(updatedLayout, splitDropZonePath, newLayoutStructure);
  return updatedLayout;
};
const handleMoveSidebarComponentIntoParent = (layout, splitDropZonePath, item) => {
  let newLayoutStructure;
  switch (splitDropZonePath.length) {
    case 1:
      {
        newLayoutStructure = {
          type: _constants__WEBPACK_IMPORTED_MODULE_1__.ROW,
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
          children: [{
            type: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN,
            id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
            children: [item]
          }]
        };
        break;
      }
    case 2:
      {
        newLayoutStructure = {
          type: _constants__WEBPACK_IMPORTED_MODULE_1__.COLUMN,
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
          children: [item]
        };
        break;
      }
    default:
      {
        newLayoutStructure = item;
      }
  }
  return addChildToChildren(layout, splitDropZonePath, newLayoutStructure);
};
const handleRemoveItemFromLayout = (layout, splitItemPath) => {
  return removeChildFromChildren(layout, splitItemPath);
};

/***/ }),

/***/ "./src/dnd/index.js":
/*!**************************!*\
  !*** ./src/dnd/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example */ "./src/dnd/example.jsx");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/common/DndProvider.js");
/* harmony import */ var _store_actions_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/screen */ "./src/store/actions/screen.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ "./src/store/store.js");


// import ReactDOM from "react-dom";







// import "./styles.css";

function DndApp() {
  const dispatch = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.screen);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // dispatch(fetchData());
    if (wpApiSettings.screen_id) dispatch((0,_store_actions_screen__WEBPACK_IMPORTED_MODULE_2__.fetchScreenData)(wpApiSettings.screen_id));
  }, [dispatch]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "App"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_dnd__WEBPACK_IMPORTED_MODULE_5__.DndProvider, {
    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, store.loading ? "Loading..." : !wpApiSettings.screen_id || store.error !== null ? 'Something went wrong. ' + store.error : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_example__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DndApp);

/***/ }),

/***/ "./src/dnd/initial-data.js":
/*!*********************************!*\
  !*** ./src/dnd/initial-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/dnd/constants.js");

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
    component0: {
      id: "component0",
      type: "input",
      content: "Some input"
    },
    component1: {
      id: "component1",
      type: "image",
      content: "Some image"
    },
    component2: {
      id: "component2",
      type: "email",
      content: "Some email"
    },
    component3: {
      id: "component3",
      type: "name",
      content: "Some name"
    },
    component4: {
      id: "component4",
      type: "phone",
      content: "Some phone"
    }
  },
  screens: [{
    id: "screen0",
    content: "screen 1 content"
  }, {
    id: "screen1",
    content: "screen 2 content"
  }, {
    id: "screen2",
    content: "screen 3 content"
  }, {
    id: "screen3",
    content: "screen 4 content"
  }, {
    id: "screen4",
    content: "screen 5 content"
  }, {
    id: "screen5",
    content: "+ Add Screen"
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialData);

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ "node_modules_web-vitals_dist_web-vitals_js").then(__webpack_require__.bind(__webpack_require__, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportWebVitals);

/***/ }),

/***/ "./src/store/actions/screen.js":
/*!*************************************!*\
  !*** ./src/store/actions/screen.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchScreenData: () => (/* binding */ fetchScreenData),
/* harmony export */   removeScreenData: () => (/* binding */ removeScreenData),
/* harmony export */   sortScreenData: () => (/* binding */ sortScreenData),
/* harmony export */   updateScreenData: () => (/* binding */ updateScreenData)
/* harmony export */ });
/* harmony import */ var _features_screenSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/screenSlice */ "./src/store/features/screenSlice.js");

const fetchScreenData = payload => async dispatch => {
  dispatch((0,_features_screenSlice__WEBPACK_IMPORTED_MODULE_0__.fetchDataStart)());
  try {
    const response = await fetch('http://localhost/wordpress/wp-json/bl/v1/screens/' + payload);
    const responseData = await response.json();
    console.log('###data', responseData);
    //   const data = payload;
    if (responseData.data.status === 200 && responseData.data.data) {
      dispatch((0,_features_screenSlice__WEBPACK_IMPORTED_MODULE_0__.fetchDataSuccess)(responseData.data.data));
    } else {
      dispatch((0,_features_screenSlice__WEBPACK_IMPORTED_MODULE_0__.fetchDataFailure)(responseData.message));
    }
  } catch (error) {
    dispatch((0,_features_screenSlice__WEBPACK_IMPORTED_MODULE_0__.fetchDataFailure)(error.message));
  }
};
const updateScreenData = payload => async dispatch => {
  try {
    dispatch((0,_features_screenSlice__WEBPACK_IMPORTED_MODULE_0__.updateScreenDataSuccess)(payload));
  } catch (error) {
    dispatch((0,_features_screenSlice__WEBPACK_IMPORTED_MODULE_0__.fetchDataFailure)(error.message));
  }
};
const removeScreenData = payload => async dispatch => {
  // console.log('payload', payload)
  // return ;
  try {
    dispatch((0,_features_screenSlice__WEBPACK_IMPORTED_MODULE_0__.removeScreenDataSuccess)(payload));
  } catch (error) {
    dispatch((0,_features_screenSlice__WEBPACK_IMPORTED_MODULE_0__.fetchDataFailure)(error.message));
  }
};
const sortScreenData = payload => async dispatch => {
  console.log('111111111111@@@payload', payload, dispatch);
  try {
    dispatch((0,_features_screenSlice__WEBPACK_IMPORTED_MODULE_0__.sortingScreenDataSuccess)(payload));
  } catch (error) {
    dispatch((0,_features_screenSlice__WEBPACK_IMPORTED_MODULE_0__.fetchDataFailure)(error.message));
  }
};

/***/ }),

/***/ "./src/store/features/screenSlice.js":
/*!*******************************************!*\
  !*** ./src/store/features/screenSlice.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchDataFailure: () => (/* binding */ fetchDataFailure),
/* harmony export */   fetchDataStart: () => (/* binding */ fetchDataStart),
/* harmony export */   fetchDataSuccess: () => (/* binding */ fetchDataSuccess),
/* harmony export */   removeScreenDataSuccess: () => (/* binding */ removeScreenDataSuccess),
/* harmony export */   sortingScreenDataSuccess: () => (/* binding */ sortingScreenDataSuccess),
/* harmony export */   updateScreenDataSuccess: () => (/* binding */ updateScreenDataSuccess)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");


function updateOrAppend(input, data) {
  let foundIndex = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === input.id) {
      foundIndex = i;
      break;
    }
  }
  if (foundIndex !== -1) {
    // Update val if id matches
    data[foundIndex].val = input.val;
  } else {
    // Append input to the array if id doesn't match
    data.push(input);
  }
  return data;
}

// Define a slice with the initial state and reducers
const screenSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'screen',
  initialState: {
    loading: false,
    data: {},
    error: null
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload || {};
      state.error = null;
    },
    updateScreenDataSuccess(state, action) {
      var _deepData$bl_screen_d;
      const payloadData = action.payload;
      // const data = current(state);
      const deepData = JSON.parse(JSON.stringify(state.data));
      console.log('@@deepData', deepData);
      let bl_screen_data = (_deepData$bl_screen_d = deepData?.bl_screen_data) !== null && _deepData$bl_screen_d !== void 0 ? _deepData$bl_screen_d : [];
      if (payloadData) {
        // const shallowCopy = Object.assign({}, bl_screen_data);
        console.log('@@@@@bl_screen_data>>>>>', bl_screen_data, payloadData);
        // bl_screen_data = updateOrAppend(payloadData, bl_screen_data);
        const index = bl_screen_data.findIndex(item => item.id === payloadData.id);
        if (index !== -1) {
          bl_screen_data[index].val = payloadData.val;
        } else {
          bl_screen_data.push(payloadData);
        }
      }
      ;
      return {
        ...state,
        data: {
          ...state.data,
          bl_screen_data: bl_screen_data
        }
      };
    },
    removeScreenDataSuccess(state, action) {
      var _deepData$bl_screen_d2;
      const payloadData = action.payload;
      // const data = current(state);
      const deepData = JSON.parse(JSON.stringify(state.data));
      console.log('@@deepData', deepData);
      let bl_screen_data = (_deepData$bl_screen_d2 = deepData?.bl_screen_data) !== null && _deepData$bl_screen_d2 !== void 0 ? _deepData$bl_screen_d2 : [];
      if (bl_screen_data.length) {
        bl_screen_data = bl_screen_data.filter(row => row.id !== payloadData.id);
      }
      ;
      // state.data = {...data, "data":{...data.data, "bl_screen_data": bl_screen_data}};
      return {
        ...state,
        data: {
          ...state.data,
          bl_screen_data: bl_screen_data
        }
      };
    },
    sortingScreenDataSuccess(state, action) {
      const payloadData = action.payload;
      // const data = current(state);
      const deepData = JSON.parse(JSON.stringify(state.data));
      console.log('@@deepData', deepData);
      // let bl_screen_data =  deepData?.bl_screen_data ?? [];
      let bl_screen_data = payloadData;
      if (bl_screen_data && bl_screen_data.length > 0) {
        bl_screen_data = bl_screen_data.map(item => ({
          id: item.id,
          type: item.type,
          val: item.val
        }));
      }
      // if( bl_screen_data.length){
      //   bl_screen_data = bl_screen_data.filter(row => row.id !== payloadData.id);
      // };
      // state.data = {...data, "data":{...data.data, "bl_screen_data": bl_screen_data}};
      console.log('Sort bl_screen_data', bl_screen_data);
      return {
        ...state,
        data: {
          ...state.data,
          bl_screen_data: bl_screen_data
        }
      };
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.data = {};
      state.error = action.payload;
    }
  }
});

// Export actions and reducer
const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  updateScreenDataSuccess,
  removeScreenDataSuccess,
  sortingScreenDataSuccess
} = screenSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (screenSlice.reducer);

/***/ }),

/***/ "./src/store/features/todosSlice.js":
/*!******************************************!*\
  !*** ./src/store/features/todosSlice.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchDataFailure: () => (/* binding */ fetchDataFailure),
/* harmony export */   fetchDataStart: () => (/* binding */ fetchDataStart),
/* harmony export */   fetchDataSuccess: () => (/* binding */ fetchDataSuccess)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");



// Define a slice with the initial state and reducers
const dataSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'data',
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data += action.payload;
      state.error = null;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    }
  }
});

// Export actions and reducer
const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure
} = dataSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataSlice.reducer);

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store),
/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _features_todosSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/todosSlice */ "./src/store/features/todosSlice.js");
/* harmony import */ var _features_screenSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/screenSlice */ "./src/store/features/screenSlice.js");





// Create the Redux store
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: {
    // data: todosReducer,
    screen: _features_screenSlice__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

// Create a custom hook for dispatching actions
const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/DragDropManagerImpl.js":
/*!***************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/DragDropManagerImpl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragDropManagerImpl)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/dnd-core/node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./node_modules/dnd-core/dist/esm/reducers/index.js");
/* harmony import */ var _actions_dragDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/dragDrop */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js");
/* harmony import */ var _DragDropMonitorImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DragDropMonitorImpl */ "./node_modules/dnd-core/dist/esm/DragDropMonitorImpl.js");
/* harmony import */ var _HandlerRegistryImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HandlerRegistryImpl */ "./node_modules/dnd-core/dist/esm/HandlerRegistryImpl.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







function makeStoreInstance(debugMode) {
  // TODO: if we ever make a react-native version of this,
  // we'll need to consider how to pull off dev-tooling
  var reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], debugMode && reduxDevTools && reduxDevTools({
    name: 'dnd-core',
    instanceId: 'dnd-core'
  }));
}

var DragDropManagerImpl =
/*#__PURE__*/
function () {
  function DragDropManagerImpl() {
    var _this = this;

    var debugMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, DragDropManagerImpl);

    this.isSetUp = false;

    this.handleRefCountChange = function () {
      var shouldSetUp = _this.store.getState().refCount > 0;

      if (_this.backend) {
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();

          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();

          _this.isSetUp = false;
        }
      }
    };

    var store = makeStoreInstance(debugMode);
    this.store = store;
    this.monitor = new _DragDropMonitorImpl__WEBPACK_IMPORTED_MODULE_2__["default"](store, new _HandlerRegistryImpl__WEBPACK_IMPORTED_MODULE_3__["default"](store));
    store.subscribe(this.handleRefCountChange);
  }

  _createClass(DragDropManagerImpl, [{
    key: "receiveBackend",
    value: function receiveBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "getMonitor",
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function getActions() {
      /* eslint-disable-next-line @typescript-eslint/no-this-alias */
      var manager = this;
      var dispatch = this.store.dispatch;

      function bindActionCreator(actionCreator) {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var action = actionCreator.apply(manager, args);

          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      var actions = (0,_actions_dragDrop__WEBPACK_IMPORTED_MODULE_4__["default"])(this);
      return Object.keys(actions).reduce(function (boundActions, key) {
        var action = actions[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }]);

  return DragDropManagerImpl;
}();



/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/DragDropMonitorImpl.js":
/*!***************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/DragDropMonitorImpl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragDropMonitorImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _utils_matchesType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/matchesType */ "./node_modules/dnd-core/dist/esm/utils/matchesType.js");
/* harmony import */ var _utils_coords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/coords */ "./node_modules/dnd-core/dist/esm/utils/coords.js");
/* harmony import */ var _utils_dirtiness__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/dirtiness */ "./node_modules/dnd-core/dist/esm/utils/dirtiness.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var DragDropMonitorImpl =
/*#__PURE__*/
function () {
  function DragDropMonitorImpl(store, registry) {
    _classCallCheck(this, DragDropMonitorImpl);

    this.store = store;
    this.registry = registry;
  }

  _createClass(DragDropMonitorImpl, [{
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        handlerIds: undefined
      };
      var handlerIds = options.handlerIds;
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof listener === 'function', 'listener must be a function.');
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
      var prevStateId = this.store.getState().stateId;

      var handleChange = function handleChange() {
        var state = _this.store.getState();

        var currentStateId = state.stateId;

        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0,_utils_dirtiness__WEBPACK_IMPORTED_MODULE_1__.areDirty)(state.dirtyHandlerIds, handlerIds);

          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;

      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof listener === 'function', 'listener must be a function.');
      var previousState = this.store.getState().dragOffset;

      var handleChange = function handleChange() {
        var nextState = _this2.store.getState().dragOffset;

        if (nextState === previousState) {
          return;
        }

        previousState = nextState;
        listener();
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId);
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(source, 'Expected to find a valid source.');

      if (this.isDragging()) {
        return false;
      }

      return source.canDrag(this, sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var target = this.registry.getTarget(targetId);
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(target, 'Expected to find a valid target.');

      if (!this.isDragging() || this.didDrop()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return (0,_utils_matchesType__WEBPACK_IMPORTED_MODULE_2__["default"])(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      // undefined on initial render
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId, true);
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(source, 'Expected to find a valid source.');

      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }

      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();

      if (sourceType !== draggedItemType) {
        return false;
      }

      return source.isDragging(this, sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        shallow: false
      };

      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var shallow = options.shallow;

      if (!this.isDragging()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();

      if (draggedItemType && !(0,_utils_matchesType__WEBPACK_IMPORTED_MODULE_2__["default"])(targetType, draggedItemType)) {
        return false;
      }

      var targetIds = this.getTargetIds();

      if (!targetIds.length) {
        return false;
      }

      var index = targetIds.indexOf(targetId);

      if (shallow) {
        return index === targetIds.length - 1;
      } else {
        return index > -1;
      }
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return (0,_utils_coords__WEBPACK_IMPORTED_MODULE_3__.getSourceClientOffset)(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return (0,_utils_coords__WEBPACK_IMPORTED_MODULE_3__.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
    }
  }]);

  return DragDropMonitorImpl;
}();



/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/HandlerRegistryImpl.js":
/*!***************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/HandlerRegistryImpl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HandlerRegistryImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _actions_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/registry */ "./node_modules/dnd-core/dist/esm/actions/registry.js");
/* harmony import */ var _utils_getNextUniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getNextUniqueId */ "./node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "./node_modules/dnd-core/dist/esm/interfaces.js");
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contracts */ "./node_modules/dnd-core/dist/esm/contracts.js");
/* harmony import */ var _react_dnd_asap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-dnd/asap */ "./node_modules/@react-dnd/asap/dist/esm/index.mjs");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function getNextHandlerId(role) {
  var id = (0,_utils_getNextUniqueId__WEBPACK_IMPORTED_MODULE_2__["default"])().toString();

  switch (role) {
    case _interfaces__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.SOURCE:
      return "S".concat(id);

    case _interfaces__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.TARGET:
      return "T".concat(id);

    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}

function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case 'S':
      return _interfaces__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.SOURCE;

    case 'T':
      return _interfaces__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.TARGET;

    default:
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, "Cannot parse handler ID: ".concat(handlerId));
  }
}

function mapContainsValue(map, searchValue) {
  var entries = map.entries();
  var isDone = false;

  do {
    var _entries$next = entries.next(),
        done = _entries$next.done,
        _entries$next$value = _slicedToArray(_entries$next.value, 2),
        value = _entries$next$value[1];

    if (value === searchValue) {
      return true;
    }

    isDone = !!done;
  } while (!isDone);

  return false;
}

var HandlerRegistryImpl =
/*#__PURE__*/
function () {
  function HandlerRegistryImpl(store) {
    _classCallCheck(this, HandlerRegistryImpl);

    this.types = new Map();
    this.dragSources = new Map();
    this.dropTargets = new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }

  _createClass(HandlerRegistryImpl, [{
    key: "addSource",
    value: function addSource(type, source) {
      (0,_contracts__WEBPACK_IMPORTED_MODULE_4__.validateType)(type);
      (0,_contracts__WEBPACK_IMPORTED_MODULE_4__.validateSourceContract)(source);
      var sourceId = this.addHandler(_interfaces__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.SOURCE, type, source);
      this.store.dispatch((0,_actions_registry__WEBPACK_IMPORTED_MODULE_5__.addSource)(sourceId));
      return sourceId;
    }
  }, {
    key: "addTarget",
    value: function addTarget(type, target) {
      (0,_contracts__WEBPACK_IMPORTED_MODULE_4__.validateType)(type, true);
      (0,_contracts__WEBPACK_IMPORTED_MODULE_4__.validateTargetContract)(target);
      var targetId = this.addHandler(_interfaces__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.TARGET, type, target);
      this.store.dispatch((0,_actions_registry__WEBPACK_IMPORTED_MODULE_5__.addTarget)(targetId));
      return targetId;
    }
  }, {
    key: "containsHandler",
    value: function containsHandler(handler) {
      return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
  }, {
    key: "getSource",
    value: function getSource(sourceId) {
      var includePinned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(this.isSourceId(sourceId), 'Expected a valid source ID.');
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    }
  }, {
    key: "getTarget",
    value: function getTarget(targetId) {
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.dropTargets.get(targetId);
    }
  }, {
    key: "getSourceType",
    value: function getSourceType(sourceId) {
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(this.isSourceId(sourceId), 'Expected a valid source ID.');
      return this.types.get(sourceId);
    }
  }, {
    key: "getTargetType",
    value: function getTargetType(targetId) {
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.types.get(targetId);
    }
  }, {
    key: "isSourceId",
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === _interfaces__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === _interfaces__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.TARGET;
    }
  }, {
    key: "removeSource",
    value: function removeSource(sourceId) {
      var _this = this;

      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(this.getSource(sourceId), 'Expected an existing source.');
      this.store.dispatch((0,_actions_registry__WEBPACK_IMPORTED_MODULE_5__.removeSource)(sourceId));
      (0,_react_dnd_asap__WEBPACK_IMPORTED_MODULE_1__.asap)(function () {
        _this.dragSources.delete(sourceId);

        _this.types.delete(sourceId);
      });
    }
  }, {
    key: "removeTarget",
    value: function removeTarget(targetId) {
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(this.getTarget(targetId), 'Expected an existing target.');
      this.store.dispatch((0,_actions_registry__WEBPACK_IMPORTED_MODULE_5__.removeTarget)(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    }
  }, {
    key: "pinSource",
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(source, 'Expected an existing source.');
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: "unpinSource",
    value: function unpinSource() {
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(this.pinnedSource, 'No source is pinned at the time.');
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function addHandler(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types.set(id, type);

      if (role === _interfaces__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.SOURCE) {
        this.dragSources.set(id, handler);
      } else if (role === _interfaces__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.TARGET) {
        this.dropTargets.set(id, handler);
      }

      return id;
    }
  }]);

  return HandlerRegistryImpl;
}();



/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js":
/*!**********************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBeginDrag)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _local_setClientOffset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local/setClientOffset */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");




var ResetCoordinatesAction = {
  type: _types__WEBPACK_IMPORTED_MODULE_1__.INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    var sourceIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      publishSource: true
    };
    var _options$publishSourc = options.publishSource,
        publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc,
        clientOffset = options.clientOffset,
        getSourceClientOffset = options.getSourceClientOffset;
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry(); // Initialize the coordinates using the client offset

    manager.dispatch((0,_local_setClientOffset__WEBPACK_IMPORTED_MODULE_2__.setClientOffset)(clientOffset));
    verifyInvariants(sourceIds, monitor, registry); // Get the draggable source

    var sourceId = getDraggableSource(sourceIds, monitor);

    if (sourceId === null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    } // Get the source client offset


    var sourceClientOffset = null;

    if (clientOffset) {
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
      sourceClientOffset = getSourceClientOffset(sourceId);
    } // Initialize the full coordinates


    manager.dispatch((0,_local_setClientOffset__WEBPACK_IMPORTED_MODULE_2__.setClientOffset)(clientOffset, sourceClientOffset));
    var source = registry.getSource(sourceId);
    var item = source.beginDrag(monitor, sourceId);
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    var itemType = registry.getSourceType(sourceId);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__.BEGIN_DRAG,
      payload: {
        itemType: itemType,
        item: item,
        sourceId: sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}

function verifyInvariants(sourceIds, monitor, registry) {
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
  sourceIds.forEach(function (sourceId) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
  });
}

function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}

function verifyItemIsObject(item) {
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)((0,_utils_js_utils__WEBPACK_IMPORTED_MODULE_3__.isObject)(item), 'Item must be an object.');
}

function getDraggableSource(sourceIds, monitor) {
  var sourceId = null;

  for (var i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }

  return sourceId;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js":
/*!*****************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDrop)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function createDrop(manager) {
  return function drop() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyInvariants(monitor);
    var targetIds = getDroppableTargets(monitor); // Multiple actions are dispatched here, which is why this doesn't return an action

    targetIds.forEach(function (targetId, index) {
      var dropResult = determineDropResult(targetId, index, registry, monitor);
      var action = {
        type: _types__WEBPACK_IMPORTED_MODULE_1__.DROP,
        payload: {
          dropResult: _objectSpread({}, options, {}, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}

function verifyInvariants(monitor) {
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(monitor.isDragging(), 'Cannot call drop while not dragging.');
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}

function determineDropResult(targetId, index, registry, monitor) {
  var target = registry.getTarget(targetId);
  var dropResult = target ? target.drop(monitor, targetId) : undefined;
  verifyDropResultType(dropResult);

  if (typeof dropResult === 'undefined') {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }

  return dropResult;
}

function verifyDropResultType(dropResult) {
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof dropResult === 'undefined' || (0,_utils_js_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(dropResult), 'Drop result must either be an object or undefined.');
}

function getDroppableTargets(monitor) {
  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js":
/*!********************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEndDrag)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");


function createEndDrag(manager) {
  return function endDrag() {
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyIsDragging(monitor);
    var sourceId = monitor.getSourceId();
    var source = registry.getSource(sourceId, true);
    source.endDrag(monitor, sourceId);
    registry.unpinSource();
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__.END_DRAG
    };
  };
}

function verifyIsDragging(monitor) {
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js":
/*!******************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHover)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _utils_matchesType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/matchesType */ "./node_modules/dnd-core/dist/esm/utils/matchesType.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");



function createHover(manager) {
  return function hover(targetIdsArg) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        clientOffset = _ref.clientOffset;

    verifyTargetIdsIsArray(targetIdsArg);
    var targetIds = targetIdsArg.slice(0);
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    checkInvariants(targetIds, monitor, registry);
    var draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_1__.HOVER,
      payload: {
        targetIds: targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}

function verifyTargetIdsIsArray(targetIdsArg) {
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}

function checkInvariants(targetIds, monitor, registry) {
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(monitor.isDragging(), 'Cannot call hover while not dragging.');
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!monitor.didDrop(), 'Cannot call hover after drop.');

  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
    var target = registry.getTarget(targetId);
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(target, 'Expected targetIds to be registered.');
  }
}

function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  // Remove those targetIds that don't match the targetType.  This
  // fixes shallow isOver which would only be non-shallow because of
  // non-matching targets.
  for (var i = targetIds.length - 1; i >= 0; i--) {
    var targetId = targetIds[i];
    var targetType = registry.getTargetType(targetId);

    if (!(0,_utils_matchesType__WEBPACK_IMPORTED_MODULE_2__["default"])(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}

function hoverAllTargets(targetIds, monitor, registry) {
  // Finally call hover on all matching targets.
  targetIds.forEach(function (targetId) {
    var target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BEGIN_DRAG: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.BEGIN_DRAG),
/* harmony export */   DROP: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.DROP),
/* harmony export */   END_DRAG: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.END_DRAG),
/* harmony export */   HOVER: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.HOVER),
/* harmony export */   INIT_COORDS: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS),
/* harmony export */   PUBLISH_DRAG_SOURCE: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.PUBLISH_DRAG_SOURCE),
/* harmony export */   "default": () => (/* binding */ createDragDropActions)
/* harmony export */ });
/* harmony import */ var _beginDrag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beginDrag */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js");
/* harmony import */ var _publishDragSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publishDragSource */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js");
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hover */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js");
/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drop */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js");
/* harmony import */ var _endDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endDrag */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");






function createDragDropActions(manager) {
  return {
    beginDrag: (0,_beginDrag__WEBPACK_IMPORTED_MODULE_1__["default"])(manager),
    publishDragSource: (0,_publishDragSource__WEBPACK_IMPORTED_MODULE_2__["default"])(manager),
    hover: (0,_hover__WEBPACK_IMPORTED_MODULE_3__["default"])(manager),
    drop: (0,_drop__WEBPACK_IMPORTED_MODULE_4__["default"])(manager),
    endDrag: (0,_endDrag__WEBPACK_IMPORTED_MODULE_5__["default"])(manager)
  };
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setClientOffset: () => (/* binding */ setClientOffset)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");

function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js":
/*!******************************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPublishDragSource)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");

function createPublishDragSource(manager) {
  return function publishDragSource() {
    var monitor = manager.getMonitor();

    if (monitor.isDragging()) {
      return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__.PUBLISH_DRAG_SOURCE
      };
    }
  };
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BEGIN_DRAG: () => (/* binding */ BEGIN_DRAG),
/* harmony export */   DROP: () => (/* binding */ DROP),
/* harmony export */   END_DRAG: () => (/* binding */ END_DRAG),
/* harmony export */   HOVER: () => (/* binding */ HOVER),
/* harmony export */   INIT_COORDS: () => (/* binding */ INIT_COORDS),
/* harmony export */   PUBLISH_DRAG_SOURCE: () => (/* binding */ PUBLISH_DRAG_SOURCE)
/* harmony export */ });
var INIT_COORDS = 'dnd-core/INIT_COORDS';
var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = 'dnd-core/HOVER';
var DROP = 'dnd-core/DROP';
var END_DRAG = 'dnd-core/END_DRAG';

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/actions/registry.js":
/*!************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/actions/registry.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_SOURCE: () => (/* binding */ ADD_SOURCE),
/* harmony export */   ADD_TARGET: () => (/* binding */ ADD_TARGET),
/* harmony export */   REMOVE_SOURCE: () => (/* binding */ REMOVE_SOURCE),
/* harmony export */   REMOVE_TARGET: () => (/* binding */ REMOVE_TARGET),
/* harmony export */   addSource: () => (/* binding */ addSource),
/* harmony export */   addTarget: () => (/* binding */ addTarget),
/* harmony export */   removeSource: () => (/* binding */ removeSource),
/* harmony export */   removeTarget: () => (/* binding */ removeTarget)
/* harmony export */ });
var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId: targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId: targetId
    }
  };
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/contracts.js":
/*!*****************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/contracts.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateSourceContract: () => (/* binding */ validateSourceContract),
/* harmony export */   validateTargetContract: () => (/* binding */ validateTargetContract),
/* harmony export */   validateType: () => (/* binding */ validateType)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


function validateSourceContract(source) {
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof target.hover === 'function', 'Expected hover to be a function.');
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(function (t) {
      return validateType(t, false);
    });
    return;
  }

  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof type === 'string' || _typeof(type) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/factories.js":
/*!*****************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/factories.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDragDropManager: () => (/* binding */ createDragDropManager)
/* harmony export */ });
/* harmony import */ var _DragDropManagerImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DragDropManagerImpl */ "./node_modules/dnd-core/dist/esm/DragDropManagerImpl.js");

function createDragDropManager(backendFactory, globalContext, backendOptions, debugMode) {
  var manager = new _DragDropManagerImpl__WEBPACK_IMPORTED_MODULE_0__["default"](debugMode);
  var backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/interfaces.js":
/*!******************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/interfaces.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandlerRole: () => (/* binding */ HandlerRole)
/* harmony export */ });
var HandlerRole;

(function (HandlerRole) {
  HandlerRole["SOURCE"] = "SOURCE";
  HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js":
/*!********************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dirtyHandlerIds)
/* harmony export */ });
/* harmony import */ var _actions_dragDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/dragDrop */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");
/* harmony import */ var _actions_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/registry */ "./node_modules/dnd-core/dist/esm/actions/registry.js");
/* harmony import */ var _utils_equality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/equality */ "./node_modules/dnd-core/dist/esm/utils/equality.js");
/* harmony import */ var _utils_dirtiness__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dirtiness */ "./node_modules/dnd-core/dist/esm/utils/dirtiness.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");





function dirtyHandlerIds() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_dirtiness__WEBPACK_IMPORTED_MODULE_0__.NONE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_1__.HOVER:
      break;

    case _actions_registry__WEBPACK_IMPORTED_MODULE_2__.ADD_SOURCE:
    case _actions_registry__WEBPACK_IMPORTED_MODULE_2__.ADD_TARGET:
    case _actions_registry__WEBPACK_IMPORTED_MODULE_2__.REMOVE_TARGET:
    case _actions_registry__WEBPACK_IMPORTED_MODULE_2__.REMOVE_SOURCE:
      return _utils_dirtiness__WEBPACK_IMPORTED_MODULE_0__.NONE;

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_1__.BEGIN_DRAG:
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_1__.PUBLISH_DRAG_SOURCE:
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_1__.END_DRAG:
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_1__.DROP:
    default:
      return _utils_dirtiness__WEBPACK_IMPORTED_MODULE_0__.ALL;
  }

  var _action$payload = action.payload,
      _action$payload$targe = _action$payload.targetIds,
      targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe,
      _action$payload$prevT = _action$payload.prevTargetIds,
      prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
  var result = (0,_utils_js_utils__WEBPACK_IMPORTED_MODULE_3__.xor)(targetIds, prevTargetIds);
  var didChange = result.length > 0 || !(0,_utils_equality__WEBPACK_IMPORTED_MODULE_4__.areArraysEqual)(targetIds, prevTargetIds);

  if (!didChange) {
    return _utils_dirtiness__WEBPACK_IMPORTED_MODULE_0__.NONE;
  } // Check the target ids at the innermost position. If they are valid, add them
  // to the result


  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];

  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }

    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/dragOffset.js":
/*!***************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/dragOffset.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragOffset)
/* harmony export */ });
/* harmony import */ var _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/dragDrop */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");
/* harmony import */ var _utils_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/equality */ "./node_modules/dnd-core/dist/esm/utils/equality.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function dragOffset() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS:
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__.BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__.HOVER:
      if ((0,_utils_equality__WEBPACK_IMPORTED_MODULE_1__.areCoordsEqual)(state.clientOffset, payload.clientOffset)) {
        return state;
      }

      return _objectSpread({}, state, {
        clientOffset: payload.clientOffset
      });

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__.END_DRAG:
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__.DROP:
      return initialState;

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/dragOperation.js":
/*!******************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/dragOperation.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dragOperation)
/* harmony export */ });
/* harmony import */ var _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/dragDrop */ "./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js");
/* harmony import */ var _actions_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/registry */ "./node_modules/dnd-core/dist/esm/actions/registry.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function dragOperation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__.BEGIN_DRAG:
      return _objectSpread({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__.PUBLISH_DRAG_SOURCE:
      return _objectSpread({}, state, {
        isSourcePublic: true
      });

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__.HOVER:
      return _objectSpread({}, state, {
        targetIds: payload.targetIds
      });

    case _actions_registry__WEBPACK_IMPORTED_MODULE_1__.REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }

      return _objectSpread({}, state, {
        targetIds: (0,_utils_js_utils__WEBPACK_IMPORTED_MODULE_2__.without)(state.targetIds, payload.targetId)
      });

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__.DROP:
      return _objectSpread({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });

    case _actions_dragDrop__WEBPACK_IMPORTED_MODULE_0__.END_DRAG:
      return _objectSpread({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reduce)
/* harmony export */ });
/* harmony import */ var _dragOffset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragOffset */ "./node_modules/dnd-core/dist/esm/reducers/dragOffset.js");
/* harmony import */ var _dragOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dragOperation */ "./node_modules/dnd-core/dist/esm/reducers/dragOperation.js");
/* harmony import */ var _refCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./refCount */ "./node_modules/dnd-core/dist/esm/reducers/refCount.js");
/* harmony import */ var _dirtyHandlerIds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dirtyHandlerIds */ "./node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js");
/* harmony import */ var _stateId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stateId */ "./node_modules/dnd-core/dist/esm/reducers/stateId.js");
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    dirtyHandlerIds: (0,_dirtyHandlerIds__WEBPACK_IMPORTED_MODULE_0__["default"])(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread({}, action.payload, {
        prevTargetIds: (0,_utils_js_utils__WEBPACK_IMPORTED_MODULE_1__.get)(state, 'dragOperation.targetIds', [])
      })
    }),
    dragOffset: (0,_dragOffset__WEBPACK_IMPORTED_MODULE_2__["default"])(state.dragOffset, action),
    refCount: (0,_refCount__WEBPACK_IMPORTED_MODULE_3__["default"])(state.refCount, action),
    dragOperation: (0,_dragOperation__WEBPACK_IMPORTED_MODULE_4__["default"])(state.dragOperation, action),
    stateId: (0,_stateId__WEBPACK_IMPORTED_MODULE_5__["default"])(state.stateId)
  };
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/refCount.js":
/*!*************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/refCount.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ refCount)
/* harmony export */ });
/* harmony import */ var _actions_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/registry */ "./node_modules/dnd-core/dist/esm/actions/registry.js");

function refCount() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_registry__WEBPACK_IMPORTED_MODULE_0__.ADD_SOURCE:
    case _actions_registry__WEBPACK_IMPORTED_MODULE_0__.ADD_TARGET:
      return state + 1;

    case _actions_registry__WEBPACK_IMPORTED_MODULE_0__.REMOVE_SOURCE:
    case _actions_registry__WEBPACK_IMPORTED_MODULE_0__.REMOVE_TARGET:
      return state - 1;

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/reducers/stateId.js":
/*!************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/reducers/stateId.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stateId)
/* harmony export */ });
function stateId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return state + 1;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/coords.js":
/*!********************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/coords.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   getDifferenceFromInitialOffset: () => (/* binding */ getDifferenceFromInitialOffset),
/* harmony export */   getSourceClientOffset: () => (/* binding */ getSourceClientOffset),
/* harmony export */   subtract: () => (/* binding */ subtract)
/* harmony export */ });
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */

function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */

function getSourceClientOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset,
      initialSourceClientOffset = state.initialSourceClientOffset;

  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }

  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */

function getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset;

  if (!clientOffset || !initialClientOffset) {
    return null;
  }

  return subtract(clientOffset, initialClientOffset);
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/dirtiness.js":
/*!***********************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/dirtiness.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL: () => (/* binding */ ALL),
/* harmony export */   NONE: () => (/* binding */ NONE),
/* harmony export */   areDirty: () => (/* binding */ areDirty)
/* harmony export */ });
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_utils */ "./node_modules/dnd-core/dist/esm/utils/js_utils.js");

var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */

function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }

  if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
    return true;
  }

  var commonIds = (0,_js_utils__WEBPACK_IMPORTED_MODULE_0__.intersection)(handlerIds, dirtyIds);
  return commonIds.length > 0;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/equality.js":
/*!**********************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/equality.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areArraysEqual: () => (/* binding */ areArraysEqual),
/* harmony export */   areCoordsEqual: () => (/* binding */ areCoordsEqual),
/* harmony export */   strictEquality: () => (/* binding */ strictEquality)
/* harmony export */ });
var strictEquality = function strictEquality(a, b) {
  return a === b;
};
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */

function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */

function areArraysEqual(a, b) {
  var isEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : strictEquality;

  if (a.length !== b.length) {
    return false;
  }

  for (var i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js":
/*!*****************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNextUniqueId)
/* harmony export */ });
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/js_utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/js_utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   intersection: () => (/* binding */ intersection),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   without: () => (/* binding */ without),
/* harmony export */   xor: () => (/* binding */ xor)
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// cheap lodash replacements

/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */
function get(obj, path, defaultValue) {
  return path.split('.').reduce(function (a, c) {
    return a && a[c] ? a[c] : defaultValue || null;
  }, obj);
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isString(input) {
  return typeof input === 'string';
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isObject(input) {
  return _typeof(input) === 'object';
}
/**
 * repalcement for _.xor
 * @param itemsA
 * @param itemsB
 */

function xor(itemsA, itemsB) {
  var map = new Map();

  var insertItem = function insertItem(item) {
    return map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };

  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  map.forEach(function (count, key) {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */

function intersection(itemsA, itemsB) {
  return itemsA.filter(function (t) {
    return itemsB.indexOf(t) > -1;
  });
}

/***/ }),

/***/ "./node_modules/dnd-core/dist/esm/utils/matchesType.js":
/*!*************************************************************!*\
  !*** ./node_modules/dnd-core/dist/esm/utils/matchesType.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ matchesType)
/* harmony export */ });
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }

  return Array.isArray(targetType) ? targetType.some(function (t) {
    return t === draggedItemType;
  }) : targetType === draggedItemType;
}

/***/ }),

/***/ "./node_modules/dnd-core/node_modules/redux/es/redux.js":
/*!**************************************************************!*\
  !*** ./node_modules/dnd-core/node_modules/redux/es/redux.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __DO_NOT_USE__ActionTypes: () => (/* binding */ ActionTypes),
/* harmony export */   applyMiddleware: () => (/* binding */ applyMiddleware),
/* harmony export */   bindActionCreators: () => (/* binding */ bindActionCreators),
/* harmony export */   combineReducers: () => (/* binding */ combineReducers),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   legacy_createStore: () => (/* binding */ legacy_createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}




/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/main.scss":
/*!**********************************!*\
  !*** ./src/assets/css/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/nanoid/format.browser.js":
/*!***********************************************!*\
  !*** ./node_modules/nanoid/format.browser.js ***!
  \***********************************************/
/***/ ((module) => {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var bytes = random(step)
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFirefox: () => (/* binding */ isFirefox),
/* harmony export */   isSafari: () => (/* binding */ isSafari)
/* harmony export */ });
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/js_utils */ "./node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js");

var isFirefox = (0,_utils_js_utils__WEBPACK_IMPORTED_MODULE_0__.memoize)(function () {
  return /firefox/i.test(navigator.userAgent);
});
var isSafari = (0,_utils_js_utils__WEBPACK_IMPORTED_MODULE_0__.memoize)(function () {
  return Boolean(window.safari);
});

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EnterLeaveCounter)
/* harmony export */ });
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/js_utils */ "./node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EnterLeaveCounter =
/*#__PURE__*/
function () {
  function EnterLeaveCounter(isNodeInDocument) {
    _classCallCheck(this, EnterLeaveCounter);

    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }

  _createClass(EnterLeaveCounter, [{
    key: "enter",
    value: function enter(enteringNode) {
      var _this = this;

      var previousLength = this.entered.length;

      var isNodeEntered = function isNodeEntered(node) {
        return _this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
      };

      this.entered = (0,_utils_js_utils__WEBPACK_IMPORTED_MODULE_0__.union)(this.entered.filter(isNodeEntered), [enteringNode]);
      return previousLength === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function leave(leavingNode) {
      var previousLength = this.entered.length;
      this.entered = (0,_utils_js_utils__WEBPACK_IMPORTED_MODULE_0__.without)(this.entered.filter(this.isNodeInDocument), leavingNode);
      return previousLength > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.entered = [];
    }
  }]);

  return EnterLeaveCounter;
}();



/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/HTML5Backend.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/HTML5Backend.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML5Backend)
/* harmony export */ });
/* harmony import */ var _EnterLeaveCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EnterLeaveCounter */ "./node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js");
/* harmony import */ var _BrowserDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrowserDetector */ "./node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js");
/* harmony import */ var _OffsetUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OffsetUtils */ "./node_modules/react-dnd-html5-backend/dist/esm/OffsetUtils.js");
/* harmony import */ var _NativeDragSources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NativeDragSources */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js");
/* harmony import */ var _NativeTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NativeTypes */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js");
/* harmony import */ var _OptionsReader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptionsReader */ "./node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var HTML5Backend =
/*#__PURE__*/
function () {
  function HTML5Backend(manager, globalContext) {
    var _this = this;

    _classCallCheck(this, HTML5Backend);

    this.sourcePreviewNodes = new Map();
    this.sourcePreviewNodeOptions = new Map();
    this.sourceNodes = new Map();
    this.sourceNodeOptions = new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;

    this.getSourceClientOffset = function (sourceId) {
      return (0,_OffsetUtils__WEBPACK_IMPORTED_MODULE_0__.getNodeClientOffset)(_this.sourceNodes.get(sourceId));
    };

    this.endDragNativeItem = function () {
      if (!_this.isDraggingNativeItem()) {
        return;
      }

      _this.actions.endDrag();

      _this.registry.removeSource(_this.currentNativeHandle);

      _this.currentNativeHandle = null;
      _this.currentNativeSource = null;
    };

    this.isNodeInDocument = function (node) {
      // Check the node either in the main document or in the current context
      return _this.document && _this.document.body && document.body.contains(node);
    };

    this.endDragIfSourceWasRemovedFromDOM = function () {
      var node = _this.currentDragSourceNode;

      if (_this.isNodeInDocument(node)) {
        return;
      }

      if (_this.clearCurrentDragSourceNode()) {
        _this.actions.endDrag();
      }
    };

    this.handleTopDragStartCapture = function () {
      _this.clearCurrentDragSourceNode();

      _this.dragStartSourceIds = [];
    };

    this.handleTopDragStart = function (e) {
      if (e.defaultPrevented) {
        return;
      }

      var dragStartSourceIds = _this.dragStartSourceIds;
      _this.dragStartSourceIds = null;
      var clientOffset = (0,_OffsetUtils__WEBPACK_IMPORTED_MODULE_0__.getEventClientOffset)(e); // Avoid crashing if we missed a drop event or our previous drag died

      if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      } // Don't publish the source just yet (see why below)


      _this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: _this.getSourceClientOffset,
        clientOffset: clientOffset
      });

      var dataTransfer = e.dataTransfer;
      var nativeType = (0,_NativeDragSources__WEBPACK_IMPORTED_MODULE_1__.matchNativeItemType)(dataTransfer);

      if (_this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
          // Use custom drag image if user specifies it.
          // If child drag source refuses drag but parent agrees,
          // use parent's node as drag image. Neither works in IE though.
          var sourceId = _this.monitor.getSourceId();

          var sourceNode = _this.sourceNodes.get(sourceId);

          var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;

          if (dragPreview) {
            var _this$getCurrentSourc = _this.getCurrentSourcePreviewNodeOptions(),
                anchorX = _this$getCurrentSourc.anchorX,
                anchorY = _this$getCurrentSourc.anchorY,
                offsetX = _this$getCurrentSourc.offsetX,
                offsetY = _this$getCurrentSourc.offsetY;

            var anchorPoint = {
              anchorX: anchorX,
              anchorY: anchorY
            };
            var offsetPoint = {
              offsetX: offsetX,
              offsetY: offsetY
            };
            var dragPreviewOffset = (0,_OffsetUtils__WEBPACK_IMPORTED_MODULE_0__.getDragPreviewOffset)(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }

        try {
          // Firefox won't drag without setting data
          dataTransfer.setData('application/json', {});
        } catch (err) {} // IE doesn't support MIME types in setData
        // Store drag source node so we can check whether
        // it is removed from DOM and trigger endDrag manually.


        _this.setCurrentDragSourceNode(e.target); // Now we are ready to publish the drag source.. or are we not?


        var _this$getCurrentSourc2 = _this.getCurrentSourcePreviewNodeOptions(),
            captureDraggingState = _this$getCurrentSourc2.captureDraggingState;

        if (!captureDraggingState) {
          // Usually we want to publish it in the next tick so that browser
          // is able to screenshot the current (not yet dragging) state.
          //
          // It also neatly avoids a situation where render() returns null
          // in the same tick for the source element, and browser freaks out.
          setTimeout(function () {
            return _this.actions.publishDragSource();
          }, 0);
        } else {
          // In some cases the user may want to override this behavior, e.g.
          // to work around IE not supporting custom drag previews.
          //
          // When using a custom drag layer, the only way to prevent
          // the default drag preview from drawing in IE is to screenshot
          // the dragging state in which the node itself has zero opacity
          // and height. In this case, though, returning null from render()
          // will abruptly end the dragging, which is not obvious.
          //
          // This is the reason such behavior is strictly opt-in.
          _this.actions.publishDragSource();
        }
      } else if (nativeType) {
        // A native item (such as URL) dragged from inside the document
        _this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
        // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
        // Just let it drag. It's a native type (URL or text) and will be picked up in
        // dragenter handler.
        return;
      } else {
        // If by this time no drag source reacted, tell browser not to drag.
        e.preventDefault();
      }
    };

    this.handleTopDragEndCapture = function () {
      if (_this.clearCurrentDragSourceNode()) {
        // Firefox can dispatch this event in an infinite loop
        // if dragend handler does something like showing an alert.
        // Only proceed if we have not handled it already.
        _this.actions.endDrag();
      }
    };

    this.handleTopDragEnterCapture = function (e) {
      _this.dragEnterTargetIds = [];

      var isFirstEnter = _this.enterLeaveCounter.enter(e.target);

      if (!isFirstEnter || _this.monitor.isDragging()) {
        return;
      }

      var dataTransfer = e.dataTransfer;
      var nativeType = (0,_NativeDragSources__WEBPACK_IMPORTED_MODULE_1__.matchNativeItemType)(dataTransfer);

      if (nativeType) {
        // A native item (such as file or URL) dragged from outside the document
        _this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };

    this.handleTopDragEnter = function (e) {
      var dragEnterTargetIds = _this.dragEnterTargetIds;
      _this.dragEnterTargetIds = [];

      if (!_this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        return;
      }

      _this.altKeyPressed = e.altKey;

      if (!(0,_BrowserDetector__WEBPACK_IMPORTED_MODULE_2__.isFirefox)()) {
        // Don't emit hover in `dragenter` on Firefox due to an edge case.
        // If the target changes position as the result of `dragenter`, Firefox
        // will still happily dispatch `dragover` despite target being no longer
        // there. The easy solution is to only fire `hover` in `dragover` on FF.
        _this.actions.hover(dragEnterTargetIds, {
          clientOffset: (0,_OffsetUtils__WEBPACK_IMPORTED_MODULE_0__.getEventClientOffset)(e)
        });
      }

      var canDrop = dragEnterTargetIds.some(function (targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });

      if (canDrop) {
        // IE requires this to fire dragover events
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      }
    };

    this.handleTopDragOverCapture = function () {
      _this.dragOverTargetIds = [];
    };

    this.handleTopDragOver = function (e) {
      var dragOverTargetIds = _this.dragOverTargetIds;
      _this.dragOverTargetIds = [];

      if (!_this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        // Prevent default "drop and blow away the whole document" action.
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }

        return;
      }

      _this.altKeyPressed = e.altKey;

      _this.actions.hover(dragOverTargetIds || [], {
        clientOffset: (0,_OffsetUtils__WEBPACK_IMPORTED_MODULE_0__.getEventClientOffset)(e)
      });

      var canDrop = (dragOverTargetIds || []).some(function (targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });

      if (canDrop) {
        // Show user-specified drop effect.
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      } else if (_this.isDraggingNativeItem()) {
        // Don't show a nice cursor but still prevent default
        // "drop and blow away the whole document" action.
        e.preventDefault();
      } else {
        e.preventDefault();

        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }
      }
    };

    this.handleTopDragLeaveCapture = function (e) {
      if (_this.isDraggingNativeItem()) {
        e.preventDefault();
      }

      var isLastLeave = _this.enterLeaveCounter.leave(e.target);

      if (!isLastLeave) {
        return;
      }

      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      }
    };

    this.handleTopDropCapture = function (e) {
      _this.dropTargetIds = [];
      e.preventDefault();

      if (_this.isDraggingNativeItem()) {
        _this.currentNativeSource.loadDataTransfer(e.dataTransfer);
      }

      _this.enterLeaveCounter.reset();
    };

    this.handleTopDrop = function (e) {
      var dropTargetIds = _this.dropTargetIds;
      _this.dropTargetIds = [];

      _this.actions.hover(dropTargetIds, {
        clientOffset: (0,_OffsetUtils__WEBPACK_IMPORTED_MODULE_0__.getEventClientOffset)(e)
      });

      _this.actions.drop({
        dropEffect: _this.getCurrentDropEffect()
      });

      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      } else {
        _this.endDragIfSourceWasRemovedFromDOM();
      }
    };

    this.handleSelectStart = function (e) {
      var target = e.target; // Only IE requires us to explicitly say
      // we want drag drop operation to start

      if (typeof target.dragDrop !== 'function') {
        return;
      } // Inputs and textareas should be selectable


      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      } // For other targets, ask IE
      // to enable drag and drop


      e.preventDefault();
      target.dragDrop();
    };

    this.options = new _OptionsReader__WEBPACK_IMPORTED_MODULE_3__.OptionsReader(globalContext);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new _EnterLeaveCounter__WEBPACK_IMPORTED_MODULE_4__["default"](this.isNodeInDocument);
  } // public for test


  _createClass(HTML5Backend, [{
    key: "setup",
    value: function setup() {
      if (this.window === undefined) {
        return;
      }

      if (this.window.__isReactDndBackendSetUp) {
        throw new Error('Cannot have two HTML5 backends at the same time.');
      }

      this.window.__isReactDndBackendSetUp = true;
      this.addEventListeners(this.window);
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.window === undefined) {
        return;
      }

      this.window.__isReactDndBackendSetUp = false;
      this.removeEventListeners(this.window);
      this.clearCurrentDragSourceNode();

      if (this.asyncEndDragFrameId) {
        this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function connectDragPreview(sourceId, node, options) {
      var _this2 = this;

      this.sourcePreviewNodeOptions.set(sourceId, options);
      this.sourcePreviewNodes.set(sourceId, node);
      return function () {
        _this2.sourcePreviewNodes.delete(sourceId);

        _this2.sourcePreviewNodeOptions.delete(sourceId);
      };
    }
  }, {
    key: "connectDragSource",
    value: function connectDragSource(sourceId, node, options) {
      var _this3 = this;

      this.sourceNodes.set(sourceId, node);
      this.sourceNodeOptions.set(sourceId, options);

      var handleDragStart = function handleDragStart(e) {
        return _this3.handleDragStart(e, sourceId);
      };

      var handleSelectStart = function handleSelectStart(e) {
        return _this3.handleSelectStart(e);
      };

      node.setAttribute('draggable', 'true');
      node.addEventListener('dragstart', handleDragStart);
      node.addEventListener('selectstart', handleSelectStart);
      return function () {
        _this3.sourceNodes.delete(sourceId);

        _this3.sourceNodeOptions.delete(sourceId);

        node.removeEventListener('dragstart', handleDragStart);
        node.removeEventListener('selectstart', handleSelectStart);
        node.setAttribute('draggable', 'false');
      };
    }
  }, {
    key: "connectDropTarget",
    value: function connectDropTarget(targetId, node) {
      var _this4 = this;

      var handleDragEnter = function handleDragEnter(e) {
        return _this4.handleDragEnter(e, targetId);
      };

      var handleDragOver = function handleDragOver(e) {
        return _this4.handleDragOver(e, targetId);
      };

      var handleDrop = function handleDrop(e) {
        return _this4.handleDrop(e, targetId);
      };

      node.addEventListener('dragenter', handleDragEnter);
      node.addEventListener('dragover', handleDragOver);
      node.addEventListener('drop', handleDrop);
      return function () {
        node.removeEventListener('dragenter', handleDragEnter);
        node.removeEventListener('dragover', handleDragOver);
        node.removeEventListener('drop', handleDrop);
      };
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(target) {
      // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
      if (!target.addEventListener) {
        return;
      }

      target.addEventListener('dragstart', this.handleTopDragStart);
      target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.addEventListener('dragend', this.handleTopDragEndCapture, true);
      target.addEventListener('dragenter', this.handleTopDragEnter);
      target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.addEventListener('dragover', this.handleTopDragOver);
      target.addEventListener('dragover', this.handleTopDragOverCapture, true);
      target.addEventListener('drop', this.handleTopDrop);
      target.addEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners(target) {
      // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
      if (!target.removeEventListener) {
        return;
      }

      target.removeEventListener('dragstart', this.handleTopDragStart);
      target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
      target.removeEventListener('dragenter', this.handleTopDragEnter);
      target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.removeEventListener('dragover', this.handleTopDragOver);
      target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
      target.removeEventListener('drop', this.handleTopDrop);
      target.removeEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function getCurrentSourceNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
      return _objectSpread({
        dropEffect: this.altKeyPressed ? 'copy' : 'move'
      }, sourceNodeOptions || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function getCurrentDropEffect() {
      if (this.isDraggingNativeItem()) {
        // It makes more sense to default to 'copy' for native resources
        return 'copy';
      }

      return this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function getCurrentSourcePreviewNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
      return _objectSpread({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: false
      }, sourcePreviewNodeOptions || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function isDraggingNativeItem() {
      var itemType = this.monitor.getItemType();
      return Object.keys(_NativeTypes__WEBPACK_IMPORTED_MODULE_5__).some(function (key) {
        return _NativeTypes__WEBPACK_IMPORTED_MODULE_5__[key] === itemType;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function beginDragNativeItem(type, dataTransfer) {
      this.clearCurrentDragSourceNode();
      this.currentNativeSource = (0,_NativeDragSources__WEBPACK_IMPORTED_MODULE_1__.createNativeDragSource)(type, dataTransfer);
      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
      this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function setCurrentDragSourceNode(node) {
      var _this5 = this;

      this.clearCurrentDragSourceNode();
      this.currentDragSourceNode = node; // A timeout of > 0 is necessary to resolve Firefox issue referenced
      // See:
      //   * https://github.com/react-dnd/react-dnd/pull/928
      //   * https://github.com/react-dnd/react-dnd/issues/869

      var MOUSE_MOVE_TIMEOUT = 1000; // Receiving a mouse event in the middle of a dragging operation
      // means it has ended and the drag source node disappeared from DOM,
      // so the browser didn't dispatch the dragend event.
      //
      // We need to wait before we start listening for mousemove events.
      // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
      // immediately in some browsers.
      //
      // See:
      //   * https://github.com/react-dnd/react-dnd/pull/928
      //   * https://github.com/react-dnd/react-dnd/issues/869
      //

      this.mouseMoveTimeoutTimer = setTimeout(function () {
        return _this5.window && _this5.window.addEventListener('mousemove', _this5.endDragIfSourceWasRemovedFromDOM, true);
      }, MOUSE_MOVE_TIMEOUT);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function clearCurrentDragSourceNode() {
      if (this.currentDragSourceNode) {
        this.currentDragSourceNode = null;

        if (this.window) {
          this.window.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
          this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        }

        this.mouseMoveTimeoutTimer = null;
        return true;
      }

      return false;
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(e, sourceId) {
      if (e.defaultPrevented) {
        return;
      }

      if (!this.dragStartSourceIds) {
        this.dragStartSourceIds = [];
      }

      this.dragStartSourceIds.unshift(sourceId);
    }
  }, {
    key: "handleDragEnter",
    value: function handleDragEnter(e, targetId) {
      this.dragEnterTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDragOver",
    value: function handleDragOver(e, targetId) {
      if (this.dragOverTargetIds === null) {
        this.dragOverTargetIds = [];
      }

      this.dragOverTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e, targetId) {
      this.dropTargetIds.unshift(targetId);
    }
  }, {
    key: "window",
    get: function get() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function get() {
      return this.options.document;
    }
  }]);

  return HTML5Backend;
}();



/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MonotonicInterpolant)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MonotonicInterpolant =
/*#__PURE__*/
function () {
  function MonotonicInterpolant(xs, ys) {
    _classCallCheck(this, MonotonicInterpolant);

    var length = xs.length; // Rearrange xs and ys so that xs is sorted

    var indexes = [];

    for (var i = 0; i < length; i++) {
      indexes.push(i);
    }

    indexes.sort(function (a, b) {
      return xs[a] < xs[b] ? -1 : 1;
    }); // Get consecutive differences and slopes

    var dys = [];
    var dxs = [];
    var ms = [];
    var dx;
    var dy;

    for (var _i = 0; _i < length - 1; _i++) {
      dx = xs[_i + 1] - xs[_i];
      dy = ys[_i + 1] - ys[_i];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    } // Get degree-1 coefficients


    var c1s = [ms[0]];

    for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
      var m2 = ms[_i2];
      var mNext = ms[_i2 + 1];

      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[_i2];
        var dxNext = dxs[_i2 + 1];
        var common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }

    c1s.push(ms[ms.length - 1]); // Get degree-2 and degree-3 coefficients

    var c2s = [];
    var c3s = [];
    var m;

    for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
      m = ms[_i3];
      var c1 = c1s[_i3];
      var invDx = 1 / dxs[_i3];

      var _common = c1 + c1s[_i3 + 1] - m - m;

      c2s.push((m - c1 - _common) * invDx);
      c3s.push(_common * invDx * invDx);
    }

    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }

  _createClass(MonotonicInterpolant, [{
    key: "interpolate",
    value: function interpolate(x) {
      var xs = this.xs,
          ys = this.ys,
          c1s = this.c1s,
          c2s = this.c2s,
          c3s = this.c3s; // The rightmost point in the dataset should give an exact result

      var i = xs.length - 1;

      if (x === xs[i]) {
        return ys[i];
      } // Search for the interval x is in, returning the corresponding y if x is one of the original xs


      var low = 0;
      var high = c3s.length - 1;
      var mid;

      while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        var xHere = xs[mid];

        if (xHere < x) {
          low = mid + 1;
        } else if (xHere > x) {
          high = mid - 1;
        } else {
          return ys[mid];
        }
      }

      i = Math.max(0, high); // Interpolate

      var diff = x - xs[i];
      var diffSq = diff * diff;
      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
  }]);

  return MonotonicInterpolant;
}();



/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NativeDragSource: () => (/* binding */ NativeDragSource)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NativeDragSource =
/*#__PURE__*/
function () {
  function NativeDragSource(config) {
    _classCallCheck(this, NativeDragSource);

    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }

  _createClass(NativeDragSource, [{
    key: "initializeExposedProperties",
    value: function initializeExposedProperties() {
      var _this = this;

      Object.keys(this.config.exposeProperties).forEach(function (property) {
        Object.defineProperty(_this.item, property, {
          configurable: true,
          enumerable: true,
          get: function get() {
            // eslint-disable-next-line no-console
            console.warn("Browser doesn't allow reading \"".concat(property, "\" until the drop event."));
            return null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function loadDataTransfer(dataTransfer) {
      var _this2 = this;

      if (dataTransfer) {
        var newProperties = {};
        Object.keys(this.config.exposeProperties).forEach(function (property) {
          newProperties[property] = {
            value: _this2.config.exposeProperties[property](dataTransfer, _this2.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        });
        Object.defineProperties(this.item, newProperties);
      }
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      return true;
    }
  }, {
    key: "beginDrag",
    value: function beginDrag() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {// empty
    }
  }]);

  return NativeDragSource;
}();

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDataFromDataTransfer: () => (/* binding */ getDataFromDataTransfer)
/* harmony export */ });
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
    return resultSoFar || dataTransfer.getData(typeToTry);
  }, '');
  return result != null ? result : defaultValue;
}

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNativeDragSource: () => (/* binding */ createNativeDragSource),
/* harmony export */   matchNativeItemType: () => (/* binding */ matchNativeItemType)
/* harmony export */ });
/* harmony import */ var _nativeTypesConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nativeTypesConfig */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js");
/* harmony import */ var _NativeDragSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NativeDragSource */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js");


function createNativeDragSource(type, dataTransfer) {
  var result = new _NativeDragSource__WEBPACK_IMPORTED_MODULE_0__.NativeDragSource(_nativeTypesConfig__WEBPACK_IMPORTED_MODULE_1__.nativeTypesConfig[type]);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }

  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(_nativeTypesConfig__WEBPACK_IMPORTED_MODULE_1__.nativeTypesConfig).filter(function (nativeItemType) {
    var matchesTypes = _nativeTypesConfig__WEBPACK_IMPORTED_MODULE_1__.nativeTypesConfig[nativeItemType].matchesTypes;
    return matchesTypes.some(function (t) {
      return dataTransferTypes.indexOf(t) > -1;
    });
  })[0] || null;
}

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nativeTypesConfig: () => (/* binding */ nativeTypesConfig)
/* harmony export */ });
/* harmony import */ var _NativeTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NativeTypes */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js");
/* harmony import */ var _getDataFromDataTransfer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDataFromDataTransfer */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js");
var _nativeTypesConfig;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, _NativeTypes__WEBPACK_IMPORTED_MODULE_0__.FILE, {
  exposeProperties: {
    files: function files(dataTransfer) {
      return Array.prototype.slice.call(dataTransfer.files);
    },
    items: function items(dataTransfer) {
      return dataTransfer.items;
    }
  },
  matchesTypes: ['Files']
}), _defineProperty(_nativeTypesConfig, _NativeTypes__WEBPACK_IMPORTED_MODULE_0__.URL, {
  exposeProperties: {
    urls: function urls(dataTransfer, matchesTypes) {
      return (0,_getDataFromDataTransfer__WEBPACK_IMPORTED_MODULE_1__.getDataFromDataTransfer)(dataTransfer, matchesTypes, '').split('\n');
    }
  },
  matchesTypes: ['Url', 'text/uri-list']
}), _defineProperty(_nativeTypesConfig, _NativeTypes__WEBPACK_IMPORTED_MODULE_0__.TEXT, {
  exposeProperties: {
    text: function text(dataTransfer, matchesTypes) {
      return (0,_getDataFromDataTransfer__WEBPACK_IMPORTED_MODULE_1__.getDataFromDataTransfer)(dataTransfer, matchesTypes, '');
    }
  },
  matchesTypes: ['Text', 'text/plain']
}), _nativeTypesConfig);

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FILE: () => (/* binding */ FILE),
/* harmony export */   TEXT: () => (/* binding */ TEXT),
/* harmony export */   URL: () => (/* binding */ URL)
/* harmony export */ });
var FILE = '__NATIVE_FILE__';
var URL = '__NATIVE_URL__';
var TEXT = '__NATIVE_TEXT__';

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/OffsetUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/OffsetUtils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDragPreviewOffset: () => (/* binding */ getDragPreviewOffset),
/* harmony export */   getEventClientOffset: () => (/* binding */ getEventClientOffset),
/* harmony export */   getNodeClientOffset: () => (/* binding */ getNodeClientOffset)
/* harmony export */ });
/* harmony import */ var _BrowserDetector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowserDetector */ "./node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js");
/* harmony import */ var _MonotonicInterpolant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MonotonicInterpolant */ "./node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js");


var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

  if (!el) {
    return null;
  }

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left;

  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}

function isImageNode(node) {
  return node.nodeName === 'IMG' && ((0,_BrowserDetector__WEBPACK_IMPORTED_MODULE_0__.isFirefox)() || !document.documentElement.contains(node));
}

function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight; // Work around @2x coordinate discrepancies in browsers

  if ((0,_BrowserDetector__WEBPACK_IMPORTED_MODULE_0__.isSafari)() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }

  return {
    dragPreviewWidth: dragPreviewWidth,
    dragPreviewHeight: dragPreviewHeight
  };
}

function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  // The browsers will use the image intrinsic size under different conditions.
  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
  var isImage = isImageNode(dragPreview);
  var dragPreviewNode = isImage ? sourceNode : dragPreview;
  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  var offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  var sourceWidth = sourceNode.offsetWidth,
      sourceHeight = sourceNode.offsetHeight;
  var anchorX = anchorPoint.anchorX,
      anchorY = anchorPoint.anchorY;

  var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight),
      dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth,
      dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;

  var calculateYOffset = function calculateYOffset() {
    var interpolantY = new _MonotonicInterpolant__WEBPACK_IMPORTED_MODULE_1__["default"]([0, 0.5, 1], [// Dock to the top
    offsetFromDragPreview.y, // Align at the center
    offsetFromDragPreview.y / sourceHeight * dragPreviewHeight, // Dock to the bottom
    offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
    var y = interpolantY.interpolate(anchorY); // Work around Safari 8 positioning bug

    if ((0,_BrowserDetector__WEBPACK_IMPORTED_MODULE_0__.isSafari)() && isImage) {
      // We'll have to wait for @3x to see if this is entirely correct
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }

    return y;
  };

  var calculateXOffset = function calculateXOffset() {
    // Interpolate coordinates depending on anchor point
    // If you know a simpler way to do this, let me know
    var interpolantX = new _MonotonicInterpolant__WEBPACK_IMPORTED_MODULE_1__["default"]([0, 0.5, 1], [// Dock to the left
    offsetFromDragPreview.x, // Align at the center
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth, // Dock to the right
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
    return interpolantX.interpolate(anchorX);
  }; // Force offsets if specified in the options.


  var offsetX = offsetPoint.offsetX,
      offsetY = offsetPoint.offsetY;
  var isManualOffsetX = offsetX === 0 || offsetX;
  var isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionsReader: () => (/* binding */ OptionsReader)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OptionsReader =
/*#__PURE__*/
function () {
  function OptionsReader(globalContext) {
    _classCallCheck(this, OptionsReader);

    this.globalContext = globalContext;
  }

  _createClass(OptionsReader, [{
    key: "window",
    get: function get() {
      if (this.globalContext) {
        return this.globalContext;
      } else if (typeof window !== 'undefined') {
        return window;
      }

      return undefined;
    }
  }, {
    key: "document",
    get: function get() {
      if (this.window) {
        return this.window.document;
      }

      return undefined;
    }
  }]);

  return OptionsReader;
}();

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/getEmptyImage.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/getEmptyImage.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEmptyImage: () => (/* binding */ getEmptyImage)
/* harmony export */ });
var emptyImage;
function getEmptyImage() {
  if (!emptyImage) {
    emptyImage = new Image();
    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  }

  return emptyImage;
}

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NativeTypes: () => (/* reexport module object */ _NativeTypes__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getEmptyImage: () => (/* reexport safe */ _getEmptyImage__WEBPACK_IMPORTED_MODULE_0__.getEmptyImage)
/* harmony export */ });
/* harmony import */ var _HTML5Backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HTML5Backend */ "./node_modules/react-dnd-html5-backend/dist/esm/HTML5Backend.js");
/* harmony import */ var _NativeTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NativeTypes */ "./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js");
/* harmony import */ var _getEmptyImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEmptyImage */ "./node_modules/react-dnd-html5-backend/dist/esm/getEmptyImage.js");





var createBackend = function createBackend(manager, context) {
  return new _HTML5Backend__WEBPACK_IMPORTED_MODULE_2__["default"](manager, context);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBackend);

/***/ }),

/***/ "./node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoize: () => (/* binding */ memoize),
/* harmony export */   union: () => (/* binding */ union),
/* harmony export */   without: () => (/* binding */ without)
/* harmony export */ });
// cheap lodash replacements
function memoize(fn) {
  var result = null;

  var memoized = function memoized() {
    if (result == null) {
      result = fn();
    }

    return result;
  };

  return memoized;
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
function union(itemsA, itemsB) {
  var set = new Set();

  var insertItem = function insertItem(item) {
    return set.add(item);
  };

  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  set.forEach(function (key) {
    return result.push(key);
  });
  return result;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/DndContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/DndContext.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DndContext: () => (/* binding */ DndContext),
/* harmony export */   createDndContext: () => (/* binding */ createDndContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dnd_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dnd-core */ "./node_modules/dnd-core/dist/esm/factories.js");


/**
 * Create the React Context
 */

var DndContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  dragDropManager: undefined
});
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */

function createDndContext(backend, context, options, debugMode) {
  return {
    dragDropManager: (0,dnd_core__WEBPACK_IMPORTED_MODULE_1__.createDragDropManager)(backend, context, options, debugMode)
  };
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/DndProvider.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/DndProvider.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DndProvider: () => (/* binding */ DndProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DndContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DndContext */ "./node_modules/react-dnd/dist/esm/common/DndContext.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var refCount = 0;
/**
 * A React component that provides the React-DnD context
 */

var DndProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _getDndContextValue = getDndContextValue(props),
      _getDndContextValue2 = _slicedToArray(_getDndContextValue, 2),
      manager = _getDndContextValue2[0],
      isGlobalInstance = _getDndContextValue2[1]; // memoized from props

  /**
   * If the global context was used to store the DND context
   * then where theres no more references to it we should
   * clean it up to avoid memory leaks
   */


  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (isGlobalInstance) {
      refCount++;
    }

    return function () {
      if (isGlobalInstance) {
        refCount--;

        if (refCount === 0) {
          var context = getGlobalContext();
          context[instanceSymbol] = null;
        }
      }
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DndContext__WEBPACK_IMPORTED_MODULE_1__.DndContext.Provider, {
    value: manager
  }, children);
});
DndProvider.displayName = 'DndProvider';

function getDndContextValue(props) {
  if ('manager' in props) {
    var _manager = {
      dragDropManager: props.manager
    };
    return [_manager, false];
  }

  var manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  var isGlobalInstance = !props.context;
  return [manager, isGlobalInstance];
}

var instanceSymbol = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');

function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var debugMode = arguments.length > 3 ? arguments[3] : undefined;
  var ctx = context;

  if (!ctx[instanceSymbol]) {
    ctx[instanceSymbol] = (0,_DndContext__WEBPACK_IMPORTED_MODULE_1__.createDndContext)(backend, context, options, debugMode);
  }

  return ctx[instanceSymbol];
}

function getGlobalContext() {
  return typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : window;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragSourceMonitorImpl: () => (/* binding */ DragSourceMonitorImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl =
/*#__PURE__*/
function () {
  function DragSourceMonitorImpl(manager) {
    _classCallCheck(this, DragSourceMonitorImpl);

    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }

  _createClass(DragSourceMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }

      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DragSourceMonitorImpl;
}();

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropTargetMonitorImpl: () => (/* binding */ DropTargetMonitorImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var isCallingCanDrop = false;
var DropTargetMonitorImpl =
/*#__PURE__*/
function () {
  function DropTargetMonitorImpl(manager) {
    _classCallCheck(this, DropTargetMonitorImpl);

    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }

  _createClass(DropTargetMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      // Cut out early if the target id has not been set. This should prevent errors
      // where the user has an older version of dnd-core like in
      // https://github.com/react-dnd/react-dnd/issues/1310
      if (!this.targetId) {
        return false;
      }

      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');

      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }

      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DropTargetMonitorImpl;
}();

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/SourceConnector.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/SourceConnector.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceConnector: () => (/* binding */ SourceConnector)
/* harmony export */ });
/* harmony import */ var _wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapConnectorHooks */ "./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js");
/* harmony import */ var _utils_isRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/isRef */ "./node_modules/react-dnd/dist/esm/utils/isRef.js");
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/shallowequal */ "./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SourceConnector =
/*#__PURE__*/
function () {
  function SourceConnector(backend) {
    var _this = this;

    _classCallCheck(this, SourceConnector);

    this.hooks = (0,_wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_1__["default"])({
      dragSource: function dragSource(node, options) {
        _this.clearDragSource();

        _this.dragSourceOptions = options || null;

        if ((0,_utils_isRef__WEBPACK_IMPORTED_MODULE_2__.isRef)(node)) {
          _this.dragSourceRef = node;
        } else {
          _this.dragSourceNode = node;
        }

        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node, options) {
        _this.clearDragPreview();

        _this.dragPreviewOptions = options || null;

        if ((0,_utils_isRef__WEBPACK_IMPORTED_MODULE_2__.isRef)(node)) {
          _this.dragPreviewRef = node;
        } else {
          _this.dragPreviewNode = node;
        }

        _this.reconnectDragPreview();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null; // The drag preview may either be attached via ref or connect function

    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }

  _createClass(SourceConnector, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();

      if (didChange) {
        this.disconnectDragSource();
      }

      if (!this.handlerId) {
        return;
      }

      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();

      if (!this.handlerId) {
        this.disconnectDragPreview();
      } else if (this.dragPreview && didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.disconnectDragPreview();
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__.shallowEqual)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__.shallowEqual)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = undefined;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = undefined;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "dragSource",
    get: function get() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }]);

  return SourceConnector;
}();

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/TargetConnector.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/TargetConnector.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TargetConnector: () => (/* binding */ TargetConnector)
/* harmony export */ });
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/shallowequal */ "./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js");
/* harmony import */ var _wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapConnectorHooks */ "./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js");
/* harmony import */ var _utils_isRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/isRef */ "./node_modules/react-dnd/dist/esm/utils/isRef.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TargetConnector =
/*#__PURE__*/
function () {
  function TargetConnector(backend) {
    var _this = this;

    _classCallCheck(this, TargetConnector);

    this.hooks = (0,_wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_1__["default"])({
      dropTarget: function dropTarget(node, options) {
        _this.clearDropTarget();

        _this.dropTargetOptions = options;

        if ((0,_utils_isRef__WEBPACK_IMPORTED_MODULE_2__.isRef)(node)) {
          _this.dropTargetRef = node;
        } else {
          _this.dropTargetNode = node;
        }

        _this.reconnect();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }

  _createClass(TargetConnector, [{
    key: "reconnect",
    value: function reconnect() {
      // if nothing has changed then don't resubscribe
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();

      if (didChange) {
        this.disconnectDropTarget();
      }

      var dropTarget = this.dropTarget;

      if (!this.handlerId) {
        return;
      }

      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__.shallowEqual)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = undefined;
      }
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dropTarget;
    }
  }, {
    key: "dropTargetOptions",
    get: function get() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "dropTarget",
    get: function get() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }]);

  return TargetConnector;
}();

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/registration.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/registration.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerSource: () => (/* binding */ registerSource),
/* harmony export */   registerTarget: () => (/* binding */ registerTarget)
/* harmony export */ });
function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function () {
    return registry.removeTarget(targetId);
  }];
}
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);
  return [sourceId, function () {
    return registry.removeSource(sourceId);
  }];
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrapConnectorHooks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cloneWithRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cloneWithRef */ "./node_modules/react-dnd/dist/esm/utils/cloneWithRef.js");



function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }

  var displayName = element.type.displayName || element.type.name || 'the component';
  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + 'drag source or a drop target itself.');
}

function wrapHookToRecognizeElement(hook) {
  return function () {
    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // When passed a node, call the hook straight away.
    if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options); // return the node so it can be chained (e.g. when within callback refs
      // <div ref={node => connectDragSource(connectDropTarget(node))}/>

      return node;
    } // If passed a ReactElement, clone it and attach this function as a ref.
    // This helps us achieve a neat API where user doesn't even know that refs
    // are being used under the hood.


    var element = elementOrNode;
    throwIfCompositeComponentElement(element); // When no options are passed, use the hook directly

    var ref = options ? function (node) {
      return hook(node, options);
    } : hook;
    return (0,_utils_cloneWithRef__WEBPACK_IMPORTED_MODULE_1__.cloneWithRef)(element, ref);
  };
}

function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function (key) {
    var hook = hooks[key]; // ref objects should be passed straight through without wrapping

    if (key.endsWith('Ref')) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);

      wrappedHooks[key] = function () {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/drag.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/drag.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDragHandler: () => (/* binding */ useDragHandler),
/* harmony export */   useDragSourceMonitor: () => (/* binding */ useDragSourceMonitor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _common_registration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/registration */ "./node_modules/react-dnd/dist/esm/common/registration.js");
/* harmony import */ var _useDragDropManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDragDropManager */ "./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js");
/* harmony import */ var _common_DragSourceMonitorImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/DragSourceMonitorImpl */ "./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js");
/* harmony import */ var _common_SourceConnector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/SourceConnector */ "./node_modules/react-dnd/dist/esm/common/SourceConnector.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function useDragSourceMonitor() {
  var manager = (0,_useDragDropManager__WEBPACK_IMPORTED_MODULE_2__.useDragDropManager)();
  var monitor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new _common_DragSourceMonitorImpl__WEBPACK_IMPORTED_MODULE_3__.DragSourceMonitorImpl(manager);
  }, [manager]);
  var connector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new _common_SourceConnector__WEBPACK_IMPORTED_MODULE_4__.SourceConnector(manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDragHandler(spec, monitor, connector) {
  var manager = (0,_useDragDropManager__WEBPACK_IMPORTED_MODULE_2__.useDragDropManager)();
  var handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      beginDrag: function beginDrag() {
        var _spec$current = spec.current,
            begin = _spec$current.begin,
            item = _spec$current.item;

        if (begin) {
          var beginResult = begin(monitor);
          (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(beginResult == null || _typeof(beginResult) === 'object', 'dragSpec.begin() must either return an object, undefined, or null');
          return beginResult || item || {};
        }

        return item || {};
      },
      canDrag: function canDrag() {
        if (typeof spec.current.canDrag === 'boolean') {
          return spec.current.canDrag;
        } else if (typeof spec.current.canDrag === 'function') {
          return spec.current.canDrag(monitor);
        } else {
          return true;
        }
      },
      isDragging: function isDragging(globalMonitor, target) {
        var isDragging = spec.current.isDragging;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
      },
      endDrag: function endDrag() {
        var end = spec.current.end;

        if (end) {
          end(monitor.getItem(), monitor);
        }

        connector.reconnect();
      }
    };
  }, []);
  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(function registerHandler() {
    var _registerSource = (0,_common_registration__WEBPACK_IMPORTED_MODULE_6__.registerSource)(spec.current.item.type, handler, manager),
        _registerSource2 = _slicedToArray(_registerSource, 2),
        handlerId = _registerSource2[0],
        unregister = _registerSource2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, []);
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/drop.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/drop.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDropHandler: () => (/* binding */ useDropHandler),
/* harmony export */   useDropTargetMonitor: () => (/* binding */ useDropTargetMonitor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/registration */ "./node_modules/react-dnd/dist/esm/common/registration.js");
/* harmony import */ var _useDragDropManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDragDropManager */ "./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js");
/* harmony import */ var _common_TargetConnector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/TargetConnector */ "./node_modules/react-dnd/dist/esm/common/TargetConnector.js");
/* harmony import */ var _common_DropTargetMonitorImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/DropTargetMonitorImpl */ "./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function useDropTargetMonitor() {
  var manager = (0,_useDragDropManager__WEBPACK_IMPORTED_MODULE_1__.useDragDropManager)();
  var monitor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new _common_DropTargetMonitorImpl__WEBPACK_IMPORTED_MODULE_2__.DropTargetMonitorImpl(manager);
  }, [manager]);
  var connector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new _common_TargetConnector__WEBPACK_IMPORTED_MODULE_3__.TargetConnector(manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDropHandler(spec, monitor, connector) {
  var manager = (0,_useDragDropManager__WEBPACK_IMPORTED_MODULE_1__.useDragDropManager)();
  var handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      canDrop: function canDrop() {
        var canDrop = spec.current.canDrop;
        return canDrop ? canDrop(monitor.getItem(), monitor) : true;
      },
      hover: function hover() {
        var hover = spec.current.hover;

        if (hover) {
          hover(monitor.getItem(), monitor);
        }
      },
      drop: function drop() {
        var drop = spec.current.drop;

        if (drop) {
          return drop(monitor.getItem(), monitor);
        }
      }
    };
  }, [monitor]);
  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(function registerHandler() {
    var _registerTarget = (0,_common_registration__WEBPACK_IMPORTED_MODULE_5__.registerTarget)(spec.current.accept, handler, manager),
        _registerTarget2 = _slicedToArray(_registerTarget, 2),
        handlerId = _registerTarget2[0],
        unregister = _registerTarget2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [monitor, connector]);
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCollector: () => (/* binding */ useCollector)
/* harmony export */ });
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/shallowequal */ "./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */

function useCollector(monitor, collect, onUpdate) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return collect(monitor);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      collected = _useState2[0],
      setCollected = _useState2[1];

  var updateCollected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    var nextValue = collect(monitor);

    if (!(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__.shallowEqual)(collected, nextValue)) {
      setCollected(nextValue);

      if (onUpdate) {
        onUpdate();
      }
    }
  }, [collected, monitor, onUpdate]); // update the collected properties after the first render
  // and the components are attached to dnd-core

  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(updateCollected, []);
  return [collected, updateCollected];
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/useDragDropManager.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDragDropManager: () => (/* binding */ useDragDropManager)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _common_DndContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/DndContext */ "./node_modules/react-dnd/dist/esm/common/DndContext.js");



/**
 * A hook to retrieve the DragDropManager from Context
 */

function useDragDropManager() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_common_DndContext__WEBPACK_IMPORTED_MODULE_2__.DndContext),
      dragDropManager = _useContext.dragDropManager;

  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(dragDropManager != null, 'Expected drag drop context');
  return dragDropManager;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // suppress the useLayoutEffect warning on server side.

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMonitorOutput: () => (/* binding */ useMonitorOutput)
/* harmony export */ });
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
/* harmony import */ var _useCollector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCollector */ "./node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useMonitorOutput(monitor, collect, onCollect) {
  var _useCollector = (0,_useCollector__WEBPACK_IMPORTED_MODULE_0__.useCollector)(monitor, collect, onCollect),
      _useCollector2 = _slicedToArray(_useCollector, 2),
      collected = _useCollector2[0],
      updateCollected = _useCollector2[1];

  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(function subscribeToMonitorStateChange() {
    var handlerId = monitor.getHandlerId();

    if (handlerId == null) {
      return undefined;
    }

    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/useDrag.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/useDrag.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDrag: () => (/* binding */ useDrag)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _internal_useMonitorOutput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/useMonitorOutput */ "./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js");
/* harmony import */ var _internal_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
/* harmony import */ var _internal_drag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/drag */ "./node_modules/react-dnd/dist/esm/hooks/internal/drag.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * useDragSource hook
 * @param sourceSpec The drag source specification *
 */

function useDrag(spec) {
  var specRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(spec);
  specRef.current = spec; // TODO: wire options into createSourceConnector

  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(spec.item != null, 'item must be defined');
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(spec.item.type != null, 'item type must be defined');

  var _useDragSourceMonitor = (0,_internal_drag__WEBPACK_IMPORTED_MODULE_2__.useDragSourceMonitor)(),
      _useDragSourceMonitor2 = _slicedToArray(_useDragSourceMonitor, 2),
      monitor = _useDragSourceMonitor2[0],
      connector = _useDragSourceMonitor2[1];

  (0,_internal_drag__WEBPACK_IMPORTED_MODULE_2__.useDragHandler)(specRef, monitor, connector);
  var result = (0,_internal_useMonitorOutput__WEBPACK_IMPORTED_MODULE_3__.useMonitorOutput)(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDragSource = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return connector.hooks.dragSource();
  }, [connector]);
  var connectDragPreview = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return connector.hooks.dragPreview();
  }, [connector]);
  (0,_internal_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(function () {
    connector.dragSourceOptions = specRef.current.options || null;
    connector.reconnect();
  }, [connector]);
  (0,_internal_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(function () {
    connector.dragPreviewOptions = specRef.current.previewOptions || null;
    connector.reconnect();
  }, [connector]);
  return [result, connectDragSource, connectDragPreview];
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/hooks/useDrop.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/hooks/useDrop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDrop: () => (/* binding */ useDrop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _internal_useMonitorOutput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/useMonitorOutput */ "./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js");
/* harmony import */ var _internal_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/useIsomorphicLayoutEffect */ "./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js");
/* harmony import */ var _internal_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/drop */ "./node_modules/react-dnd/dist/esm/hooks/internal/drop.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * useDropTarget Hook
 * @param spec The drop target specification
 */

function useDrop(spec) {
  var specRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(spec);
  specRef.current = spec;
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(spec.accept != null, 'accept must be defined');

  var _useDropTargetMonitor = (0,_internal_drop__WEBPACK_IMPORTED_MODULE_2__.useDropTargetMonitor)(),
      _useDropTargetMonitor2 = _slicedToArray(_useDropTargetMonitor, 2),
      monitor = _useDropTargetMonitor2[0],
      connector = _useDropTargetMonitor2[1];

  (0,_internal_drop__WEBPACK_IMPORTED_MODULE_2__.useDropHandler)(specRef, monitor, connector);
  var result = (0,_internal_useMonitorOutput__WEBPACK_IMPORTED_MODULE_3__.useMonitorOutput)(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDropTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return connector.hooks.dropTarget();
  }, [connector]);
  (0,_internal_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(function () {
    connector.dropTargetOptions = spec.options || null;
    connector.reconnect();
  }, [spec.options]);
  return [result, connectDropTarget];
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/utils/cloneWithRef.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/utils/cloneWithRef.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneWithRef: () => (/* binding */ cloneWithRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");



function setRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else {
    ref.current = node;
  }
}

function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
      ref: newRef
    });
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
      ref: function ref(node) {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/react-dnd/dist/esm/utils/isRef.js":
/*!********************************************************!*\
  !*** ./node_modules/react-dnd/dist/esm/utils/isRef.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRef: () => (/* binding */ isRef)
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isRef(obj) {
  return (// eslint-disable-next-line no-prototype-builtins
    obj !== null && _typeof(obj) === 'object' && obj.hasOwnProperty('current')
  );
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   polyfill: () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-modal/lib/components/Modal.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/components/Modal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "./node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== undefined;

var createHTMLElement = function createHTMLElement(name) {
  return document.createElement(name);
};

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent && parent.contains(_this.node)) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = createHTMLElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = createHTMLElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  preventScroll: false,
  parentSelector: function parentSelector() {
    return document.body;
  },
  overlayElement: function overlayElement(props, contentEl) {
    return _react2.default.createElement(
      "div",
      props,
      contentEl
    );
  },
  contentElement: function contentElement(props, children) {
    return _react2.default.createElement(
      "div",
      props,
      children
    );
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

if (true) {
  Modal.setCreateHTMLElement = function (fn) {
    return createHTMLElement = fn;
  };
}

exports["default"] = Modal;

/***/ }),

/***/ "./node_modules/react-modal/lib/components/ModalPortal.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal/lib/components/ModalPortal.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "./node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "./node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "./node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _portalOpenInstances = __webpack_require__(/*! ../helpers/portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

__webpack_require__(/*! ../helpers/bodyTrap */ "./node_modules/react-modal/lib/helpers/bodyTrap.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

/**
 * We need to support the deprecated `KeyboardEvent.keyCode` in addition to
 * `KeyboardEvent.code` for apps that still support IE11. Can be removed when
 * `react-modal` only supports React >18 (which dropped IE support).
 */
var isTabKey = function isTabKey(event) {
  return event.code === "Tab" || event.keyCode === 9;
};
var isEscKey = function isEscKey(event) {
  return event.code === "Escape" || event.keyCode === 27;
};

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName,
          parentSelector = _this$props.parentSelector;


      var parentDocument = parentSelector && parentSelector().ownerDocument || document;

      // Remove classes.
      bodyOpenClassName && classList.remove(parentDocument.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(parentDocument.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus(_this.props.preventScroll);
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.openAnimationFrame = requestAnimationFrame(function () {
            _this.setState({ afterOpen: true });

            if (_this.props.isOpen && _this.props.onAfterOpen) {
              _this.props.onAfterOpen({
                overlayEl: _this.overlay,
                contentEl: _this.content
              });
            }
          });
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (isTabKey(event)) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && isEscKey(event)) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
      cancelAnimationFrame(this.openAnimationFrame);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName,
          parentSelector = _props.parentSelector;


      var parentDocument = parentSelector && parentSelector().ownerDocument || document;

      // Add classes.
      bodyOpenClassName && classList.add(parentDocument.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(parentDocument.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles,
          children = _props2.children;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      if (this.shouldBeClosed()) {
        return null;
      }

      var overlayProps = {
        ref: this.setOverlayRef,
        className: this.buildClassName("overlay", overlayClassName),
        style: _extends({}, overlayStyles, this.props.style.overlay),
        onClick: this.handleOverlayOnClick,
        onMouseDown: this.handleOverlayOnMouseDown
      };

      var contentProps = _extends({
        id: id,
        ref: this.setContentRef,
        style: _extends({}, contentStyles, this.props.style.content),
        className: this.buildClassName("content", className),
        tabIndex: "-1",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContentOnMouseDown,
        onMouseUp: this.handleContentOnMouseUp,
        onClick: this.handleContentOnClick,
        role: this.props.role,
        "aria-label": this.props.contentLabel
      }, this.attributesFromObject("aria", _extends({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
        "data-testid": this.props.testId
      });

      var contentElement = this.props.contentElement(contentProps, children);
      return this.props.overlayElement(overlayProps, contentElement);
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  parentSelector: _propTypes2.default.func,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  preventScroll: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  overlayElement: _propTypes2.default.func,
  contentElement: _propTypes2.default.func,
  testId: _propTypes2.default.string
};
exports["default"] = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  if (globalElement) {
    if (globalElement.removeAttribute) {
      globalElement.removeAttribute("aria-hidden");
    } else if (globalElement.length != null) {
      globalElement.forEach(function (element) {
        return element.removeAttribute("aria-hidden");
      });
    } else {
      document.querySelectorAll(globalElement).forEach(function (element) {
        return element.removeAttribute("aria-hidden");
      });
    }
  }
  globalElement = null;
}

/* istanbul ignore next */
function log() {
  if (true) {
    var check = globalElement || {};
    console.log("ariaAppHider ----------");
    console.log(check.nodeName, check.className, check.id);
    console.log("end ariaAppHider ----------");
  }
}
/* eslint-enable no-console */

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  var el = appElement || globalElement;
  if (el) {
    return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [el];
  } else {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return [];
  }
}

function hide(appElement) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      el.setAttribute("aria-hidden", "true");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function show(appElement) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var el = _step2.value;

      el.removeAttribute("aria-hidden");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/bodyTrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/bodyTrap.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;

var _portalOpenInstances = __webpack_require__(/*! ./portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  var _arr = [before, after];

  for (var _i = 0; _i < _arr.length; _i++) {
    var item = _arr[_i];
    if (!item) continue;
    item.parentNode && item.parentNode.removeChild(item);
  }
  before = after = null;
  instances = [];
}

/* istanbul ignore next */
function log() {
  console.log("bodyTrap ----------");
  console.log(instances.length);
  var _arr2 = [before, after];
  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var item = _arr2[_i2];
    var check = item || {};
    console.log(check.nodeName, check.className, check.id);
  }
  console.log("edn bodyTrap ----------");
}
/* eslint-enable no-console */

function focusContent() {
  if (instances.length === 0) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn("React-Modal: Open instances > 0 expected");
    }
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before && !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/classList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/classList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
var htmlClassList = {};
var docBodyClassList = {};

/* eslint-disable no-console */
/* istanbul ignore next */
function removeClass(at, cls) {
  at.classList.remove(cls);
}

/* istanbul ignore next */
function resetState() {
  var htmlElement = document.getElementsByTagName("html")[0];
  for (var cls in htmlClassList) {
    removeClass(htmlElement, htmlClassList[cls]);
  }

  var body = document.body;
  for (var _cls in docBodyClassList) {
    removeClass(body, docBodyClassList[_cls]);
  }

  htmlClassList = {};
  docBodyClassList = {};
}

/* istanbul ignore next */
function log() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n  ";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n  ";
    }

    classes = document.body.className;

    buffer += "\n\ndoc.body (" + classes + "):\n  ";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n  ";
    }

    buffer += "\n";

    console.log(buffer);
  }
}
/* eslint-enable no-console */

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/focusManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/focusManager.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetState = resetState;
exports.log = log;
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

/* eslint-disable no-console */
/* istanbul ignore next */
function resetState() {
  focusLaterElements = [];
}

/* istanbul ignore next */
function log() {
  if (true) {
    console.log("focusManager ----------");
    focusLaterElements.forEach(function (f) {
      var check = f || {};
      console.log(check.nodeName, check.className, check.id);
    });
    console.log("end focusManager ----------");
  }
}
/* eslint-enable no-console */

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var preventScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus({ preventScroll: preventScroll });
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/portalOpenInstances.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.log = log;
exports.resetState = resetState;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Cannot register modal instance that's already open");
      }
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
      }
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

/* eslint-disable no-console */
/* istanbul ignore next */
function log() {
  console.log("portalOpenInstances ----------");
  console.log(portalOpenInstances.openInstances.length);
  portalOpenInstances.openInstances.forEach(function (p) {
    return console.log(p);
  });
  console.log("end portalOpenInstances ----------");
}

/* istanbul ignore next */
function resetState() {
  portalOpenInstances = new PortalOpenInstances();
}
/* eslint-enable no-console */

exports["default"] = portalOpenInstances;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.canUseDOM = exports.SafeNodeList = exports.SafeHTMLCollection = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var SafeHTMLCollection = exports.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};

var SafeNodeList = exports.SafeNodeList = EE.canUseDOM ? window.NodeList : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports["default"] = SafeHTMLElement;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/scopeTab.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getActiveElement() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  return el.activeElement.shadowRoot ? getActiveElement(el.activeElement.shadowRoot) : el.activeElement;
}

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];
  var activeElement = getActiveElement();

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === activeElement && !shiftKey) {
    target = head;
  }

  if (head === activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/tabbable.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/tabbable.js ***!
  \**********************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var DISPLAY_NONE = "none";
var DISPLAY_CONTENTS = "contents";

var tabbableNode = /input|select|textarea|button|object|iframe/;

function isNotOverflowing(element, style) {
  return style.getPropertyValue("overflow") !== "visible" ||
  // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0;
}

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  try {
    // Otherwise we need to check some styles
    var style = window.getComputedStyle(element);
    var displayValue = style.getPropertyValue("display");
    return zeroSize ? displayValue !== DISPLAY_CONTENTS && isNotOverflowing(element, style) : displayValue === DISPLAY_NONE;
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.warn("Failed to inspect element style");
    return false;
  }
}

function visible(element) {
  var parentElement = element;
  var rootNode = element.getRootNode && element.getRootNode();
  while (parentElement) {
    if (parentElement === document.body) break;

    // if we are not hidden yet, skip to checking outside the Web Component
    if (rootNode && parentElement === rootNode) parentElement = rootNode.host.parentNode;

    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function (finished, el) {
    return finished.concat(!el.shadowRoot ? [el] : findTabbableDescendants(el.shadowRoot));
  }, []);
  return descendants.filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Modal = __webpack_require__(/*! ./components/Modal */ "./node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "./node_modules/shortid/lib/generate.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var random = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");
var format = __webpack_require__(/*! nanoid/format */ "./node_modules/nanoid/format.browser.js");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


module.exports = 0;


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "react");

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = React.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/with-selector.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-sync-external-store/with-selector.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-sync-external-store-with-selector.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js");
}


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),

/***/ "./node_modules/@react-dnd/asap/dist/esm/AsapQueue.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@react-dnd/asap/dist/esm/AsapQueue.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapQueue: () => (/* binding */ AsapQueue)
/* harmony export */ });
/* harmony import */ var _makeRequestCall_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeRequestCall.mjs */ "./node_modules/@react-dnd/asap/dist/esm/makeRequestCall.mjs");

class AsapQueue {
    // Use the fastest means possible to execute a task in its own turn, with
    // priority over other events including IO, animation, reflow, and redraw
    // events in browsers.
    //
    // An exception thrown by a task will permanently interrupt the processing of
    // subsequent tasks. The higher level `asap` function ensures that if an
    // exception is thrown by a task, that the task queue will continue flushing as
    // soon as possible, but if you use `rawAsap` directly, you are responsible to
    // either ensure that no exceptions are thrown from your task, or to manually
    // call `rawAsap.requestFlush` if an exception is thrown.
    enqueueTask(task) {
        const { queue: q , requestFlush  } = this;
        if (!q.length) {
            requestFlush();
            this.flushing = true;
        }
        // Equivalent to push, but avoids a function call.
        q[q.length] = task;
    }
    constructor(){
        this.queue = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        this.pendingErrors = [];
        // Once a flush has been requested, no further calls to `requestFlush` are
        // necessary until the next `flush` completes.
        // @ts-ignore
        this.flushing = false;
        // The position of the next task to execute in the task queue. This is
        // preserved between calls to `flush` so that it can be resumed if
        // a task throws an exception.
        this.index = 0;
        // If a task schedules additional tasks recursively, the task queue can grow
        // unbounded. To prevent memory exhaustion, the task queue will periodically
        // truncate already-completed tasks.
        this.capacity = 1024;
        // The flush function processes all tasks that have been scheduled with
        // `rawAsap` unless and until one of those tasks throws an exception.
        // If a task throws an exception, `flush` ensures that its state will remain
        // consistent and will resume where it left off when called again.
        // However, `flush` does not make any arrangements to be called again if an
        // exception is thrown.
        this.flush = ()=>{
            const { queue: q  } = this;
            while(this.index < q.length){
                const currentIndex = this.index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                this.index++;
                q[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (this.index > this.capacity) {
                    // Manually shift all values starting at the index back to the
                    // beginning of the queue.
                    for(let scan = 0, newLength = q.length - this.index; scan < newLength; scan++){
                        q[scan] = q[scan + this.index];
                    }
                    q.length -= this.index;
                    this.index = 0;
                }
            }
            q.length = 0;
            this.index = 0;
            this.flushing = false;
        };
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        this.registerPendingError = (err)=>{
            this.pendingErrors.push(err);
            this.requestErrorThrow();
        };
        // `requestFlush` requests that the high priority event queue be flushed as
        // soon as possible.
        // This is useful to prevent an error thrown in a task from stalling the event
        // queue if the exception handled by Node.js’s
        // `process.on("uncaughtException")` or by a domain.
        // `requestFlush` is implemented using a strategy based on data collected from
        // every available SauceLabs Selenium web driver worker at time of writing.
        // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
        this.requestFlush = (0,_makeRequestCall_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRequestCall)(this.flush);
        this.requestErrorThrow = (0,_makeRequestCall_mjs__WEBPACK_IMPORTED_MODULE_0__.makeRequestCallFromTimer)(()=>{
            // Throw first error
            if (this.pendingErrors.length) {
                throw this.pendingErrors.shift();
            }
        });
    }
} // The message channel technique was discovered by Malte Ubl and was the
 // original foundation for this library.
 // http://www.nonblocking.io/2011/06/windownexttick.html
 // Safari 6.0.5 (at least) intermittently fails to create message ports on a
 // page's first load. Thankfully, this version of Safari supports
 // MutationObservers, so we don't need to fall back in that case.
 // function makeRequestCallFromMessageChannel(callback) {
 //     var channel = new MessageChannel();
 //     channel.port1.onmessage = callback;
 //     return function requestCall() {
 //         channel.port2.postMessage(0);
 //     };
 // }
 // For reasons explained above, we are also unable to use `setImmediate`
 // under any circumstances.
 // Even if we were, there is another bug in Internet Explorer 10.
 // It is not sufficient to assign `setImmediate` to `requestFlush` because
 // `setImmediate` must be called *by name* and therefore must be wrapped in a
 // closure.
 // Never forget.
 // function makeRequestCallFromSetImmediate(callback) {
 //     return function requestCall() {
 //         setImmediate(callback);
 //     };
 // }
 // Safari 6.0 has a problem where timers will get lost while the user is
 // scrolling. This problem does not impact ASAP because Safari 6.0 supports
 // mutation observers, so that implementation is used instead.
 // However, if we ever elect to use timers in Safari, the prevalent work-around
 // is to add a scroll event listener that calls for a flush.
 // `setTimeout` does not call the passed callback if the delay is less than
 // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
 // even then.
 // This is for `asap.js` only.
 // Its name will be periodically randomized to break any code that depends on
 // // its existence.
 // rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
 // ASAP was originally a nextTick shim included in Q. This was factored out
 // into this ASAP package. It was later adapted to RSVP which made further
 // amendments. These decisions, particularly to marginalize MessageChannel and
 // to capture the MutationObserver implementation in a closure, were integrated
 // back into ASAP proper.
 // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

//# sourceMappingURL=AsapQueue.mjs.map

/***/ }),

/***/ "./node_modules/@react-dnd/asap/dist/esm/RawTask.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@react-dnd/asap/dist/esm/RawTask.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawTask: () => (/* binding */ RawTask)
/* harmony export */ });
// `call`, just like a function.
class RawTask {
    call() {
        try {
            this.task && this.task();
        } catch (error) {
            this.onError(error);
        } finally{
            this.task = null;
            this.release(this);
        }
    }
    constructor(onError, release){
        this.onError = onError;
        this.release = release;
        this.task = null;
    }
}

//# sourceMappingURL=RawTask.mjs.map

/***/ }),

/***/ "./node_modules/@react-dnd/asap/dist/esm/TaskFactory.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@react-dnd/asap/dist/esm/TaskFactory.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskFactory: () => (/* binding */ TaskFactory)
/* harmony export */ });
/* harmony import */ var _RawTask_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawTask.mjs */ "./node_modules/@react-dnd/asap/dist/esm/RawTask.mjs");

class TaskFactory {
    create(task) {
        const tasks = this.freeTasks;
        const t1 = tasks.length ? tasks.pop() : new _RawTask_mjs__WEBPACK_IMPORTED_MODULE_0__.RawTask(this.onError, (t)=>tasks[tasks.length] = t
        );
        t1.task = task;
        return t1;
    }
    constructor(onError){
        this.onError = onError;
        this.freeTasks = [];
    }
}

//# sourceMappingURL=TaskFactory.mjs.map

/***/ }),

/***/ "./node_modules/@react-dnd/asap/dist/esm/asap.mjs":
/*!********************************************************!*\
  !*** ./node_modules/@react-dnd/asap/dist/esm/asap.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asap: () => (/* binding */ asap)
/* harmony export */ });
/* harmony import */ var _AsapQueue_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapQueue.mjs */ "./node_modules/@react-dnd/asap/dist/esm/AsapQueue.mjs");
/* harmony import */ var _TaskFactory_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskFactory.mjs */ "./node_modules/@react-dnd/asap/dist/esm/TaskFactory.mjs");


const asapQueue = new _AsapQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.AsapQueue();
const taskFactory = new _TaskFactory_mjs__WEBPACK_IMPORTED_MODULE_1__.TaskFactory(asapQueue.registerPendingError);
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */ function asap(task) {
    asapQueue.enqueueTask(taskFactory.create(task));
}

//# sourceMappingURL=asap.mjs.map

/***/ }),

/***/ "./node_modules/@react-dnd/asap/dist/esm/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@react-dnd/asap/dist/esm/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapQueue: () => (/* reexport safe */ _AsapQueue_mjs__WEBPACK_IMPORTED_MODULE_2__.AsapQueue),
/* harmony export */   TaskFactory: () => (/* reexport safe */ _TaskFactory_mjs__WEBPACK_IMPORTED_MODULE_3__.TaskFactory),
/* harmony export */   asap: () => (/* reexport safe */ _asap_mjs__WEBPACK_IMPORTED_MODULE_0__.asap)
/* harmony export */ });
/* harmony import */ var _asap_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asap.mjs */ "./node_modules/@react-dnd/asap/dist/esm/asap.mjs");
/* harmony import */ var _types_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.mjs */ "./node_modules/@react-dnd/asap/dist/esm/types.mjs");
/* harmony import */ var _AsapQueue_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsapQueue.mjs */ "./node_modules/@react-dnd/asap/dist/esm/AsapQueue.mjs");
/* harmony import */ var _TaskFactory_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskFactory.mjs */ "./node_modules/@react-dnd/asap/dist/esm/TaskFactory.mjs");





//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@react-dnd/asap/dist/esm/makeRequestCall.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@react-dnd/asap/dist/esm/makeRequestCall.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeRequestCall: () => (/* binding */ makeRequestCall),
/* harmony export */   makeRequestCallFromMutationObserver: () => (/* binding */ makeRequestCallFromMutationObserver),
/* harmony export */   makeRequestCallFromTimer: () => (/* binding */ makeRequestCallFromTimer)
/* harmony export */ });
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
/* globals self */ const scope = typeof global !== 'undefined' ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        const timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        const intervalHandle = setInterval(handleTimer, 50);
        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}
// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    let toggle = 1;
    const observer = new BrowserMutationObserver(callback);
    const node = document.createTextNode('');
    observer.observe(node, {
        characterData: true
    });
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}
const makeRequestCall = typeof BrowserMutationObserver === 'function' ? // reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
makeRequestCallFromMutationObserver : // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.
// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396
// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
makeRequestCallFromTimer;

//# sourceMappingURL=makeRequestCall.mjs.map

/***/ }),

/***/ "./node_modules/@react-dnd/asap/dist/esm/types.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@react-dnd/asap/dist/esm/types.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


//# sourceMappingURL=types.mjs.map

/***/ }),

/***/ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReducerType: () => (/* binding */ ReducerType),
/* harmony export */   SHOULD_AUTOBATCH: () => (/* binding */ SHOULD_AUTOBATCH),
/* harmony export */   TaskAbortError: () => (/* binding */ TaskAbortError),
/* harmony export */   Tuple: () => (/* binding */ Tuple),
/* harmony export */   __DO_NOT_USE__ActionTypes: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.__DO_NOT_USE__ActionTypes),
/* harmony export */   addListener: () => (/* binding */ addListener),
/* harmony export */   applyMiddleware: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware),
/* harmony export */   asyncThunkCreator: () => (/* binding */ asyncThunkCreator),
/* harmony export */   autoBatchEnhancer: () => (/* binding */ autoBatchEnhancer),
/* harmony export */   bindActionCreators: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.bindActionCreators),
/* harmony export */   buildCreateSlice: () => (/* binding */ buildCreateSlice),
/* harmony export */   clearAllListeners: () => (/* binding */ clearAllListeners),
/* harmony export */   combineReducers: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers),
/* harmony export */   combineSlices: () => (/* binding */ combineSlices),
/* harmony export */   compose: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.compose),
/* harmony export */   configureStore: () => (/* binding */ configureStore),
/* harmony export */   createAction: () => (/* binding */ createAction),
/* harmony export */   createActionCreatorInvariantMiddleware: () => (/* binding */ createActionCreatorInvariantMiddleware),
/* harmony export */   createAsyncThunk: () => (/* binding */ createAsyncThunk),
/* harmony export */   createDraftSafeSelector: () => (/* binding */ createDraftSafeSelector),
/* harmony export */   createDraftSafeSelectorCreator: () => (/* binding */ createDraftSafeSelectorCreator),
/* harmony export */   createDynamicMiddleware: () => (/* binding */ createDynamicMiddleware),
/* harmony export */   createEntityAdapter: () => (/* binding */ createEntityAdapter),
/* harmony export */   createImmutableStateInvariantMiddleware: () => (/* binding */ createImmutableStateInvariantMiddleware),
/* harmony export */   createListenerMiddleware: () => (/* binding */ createListenerMiddleware),
/* harmony export */   createNextState: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.produce),
/* harmony export */   createReducer: () => (/* binding */ createReducer),
/* harmony export */   createSelector: () => (/* reexport safe */ reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector),
/* harmony export */   createSelectorCreator: () => (/* reexport safe */ reselect__WEBPACK_IMPORTED_MODULE_1__.createSelectorCreator),
/* harmony export */   createSerializableStateInvariantMiddleware: () => (/* binding */ createSerializableStateInvariantMiddleware),
/* harmony export */   createSlice: () => (/* binding */ createSlice),
/* harmony export */   createStore: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.createStore),
/* harmony export */   current: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.current),
/* harmony export */   findNonSerializableValue: () => (/* binding */ findNonSerializableValue),
/* harmony export */   formatProdErrorMessage: () => (/* binding */ formatProdErrorMessage),
/* harmony export */   freeze: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.freeze),
/* harmony export */   isAction: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.isAction),
/* harmony export */   isActionCreator: () => (/* binding */ isActionCreator),
/* harmony export */   isAllOf: () => (/* binding */ isAllOf),
/* harmony export */   isAnyOf: () => (/* binding */ isAnyOf),
/* harmony export */   isAsyncThunkAction: () => (/* binding */ isAsyncThunkAction),
/* harmony export */   isDraft: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.isDraft),
/* harmony export */   isFluxStandardAction: () => (/* binding */ isFSA),
/* harmony export */   isFulfilled: () => (/* binding */ isFulfilled),
/* harmony export */   isImmutableDefault: () => (/* binding */ isImmutableDefault),
/* harmony export */   isPending: () => (/* binding */ isPending),
/* harmony export */   isPlain: () => (/* binding */ isPlain),
/* harmony export */   isPlainObject: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.isPlainObject),
/* harmony export */   isRejected: () => (/* binding */ isRejected),
/* harmony export */   isRejectedWithValue: () => (/* binding */ isRejectedWithValue),
/* harmony export */   legacy_createStore: () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.legacy_createStore),
/* harmony export */   lruMemoize: () => (/* reexport safe */ reselect__WEBPACK_IMPORTED_MODULE_1__.lruMemoize),
/* harmony export */   miniSerializeError: () => (/* binding */ miniSerializeError),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   original: () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.original),
/* harmony export */   prepareAutoBatched: () => (/* binding */ prepareAutoBatched),
/* harmony export */   removeListener: () => (/* binding */ removeListener),
/* harmony export */   unwrapResult: () => (/* binding */ unwrapResult),
/* harmony export */   weakMapMemoize: () => (/* reexport safe */ reselect__WEBPACK_IMPORTED_MODULE_1__.weakMapMemoize)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/dist/redux.mjs");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/dist/reselect.mjs");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/dist/redux-thunk.mjs");
// src/index.ts




// src/createDraftSafeSelector.ts


var createDraftSafeSelectorCreator = (...args) => {
  const createSelector2 = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelectorCreator)(...args);
  const createDraftSafeSelector2 = Object.assign((...args2) => {
    const selector = createSelector2(...args2);
    const wrappedSelector = (value, ...rest) => selector((0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(value) ? (0,immer__WEBPACK_IMPORTED_MODULE_2__.current)(value) : value, ...rest);
    Object.assign(wrappedSelector, selector);
    return wrappedSelector;
  }, {
    withTypes: () => createDraftSafeSelector2
  });
  return createDraftSafeSelector2;
};
var createDraftSafeSelector = createDraftSafeSelectorCreator(reselect__WEBPACK_IMPORTED_MODULE_1__.weakMapMemoize);

// src/configureStore.ts


// src/devtoolsExtension.ts

var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return redux__WEBPACK_IMPORTED_MODULE_0__.compose;
  return redux__WEBPACK_IMPORTED_MODULE_0__.compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
  return function(noop3) {
    return noop3;
  };
};

// src/getDefaultMiddleware.ts


// src/createAction.ts


// src/tsHelpers.ts
var hasMatchFunction = (v) => {
  return v && typeof v.match === "function";
};

// src/createAction.ts
function createAction(type, prepareAction) {
  function actionCreator(...args) {
    if (prepareAction) {
      let prepared = prepareAction(...args);
      if (!prepared) {
        throw new Error( false ? 0 : "prepareAction did not return an object");
      }
      return {
        type,
        payload: prepared.payload,
        ..."meta" in prepared && {
          meta: prepared.meta
        },
        ..."error" in prepared && {
          error: prepared.error
        }
      };
    }
    return {
      type,
      payload: args[0]
    };
  }
  actionCreator.toString = () => `${type}`;
  actionCreator.type = type;
  actionCreator.match = (action) => (0,redux__WEBPACK_IMPORTED_MODULE_0__.isAction)(action) && action.type === type;
  return actionCreator;
}
function isActionCreator(action) {
  return typeof action === "function" && "type" in action && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  hasMatchFunction(action);
}
function isFSA(action) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.isAction)(action) && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
  return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}

// src/actionCreatorInvariantMiddleware.ts
function getMessage(type) {
  const splitType = type ? `${type}`.split("/") : [];
  const actionName = splitType[splitType.length - 1] || "actionCreator";
  return `Detected an action creator with type "${type || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${actionName}())\` instead of \`dispatch(${actionName})\`. This is necessary even if the action has no payload.`;
}
function createActionCreatorInvariantMiddleware(options = {}) {
  if (false) {}
  const {
    isActionCreator: isActionCreator2 = isActionCreator
  } = options;
  return () => (next) => (action) => {
    if (isActionCreator2(action)) {
      console.warn(getMessage(action.type));
    }
    return next(action);
  };
}

// src/utils.ts

function getTimeMeasureUtils(maxDelay, fnName) {
  let elapsed = 0;
  return {
    measureTime(fn) {
      const started = Date.now();
      try {
        return fn();
      } finally {
        const finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded() {
      if (elapsed > maxDelay) {
        console.warn(`${fnName} took ${elapsed}ms, which is more than the warning threshold of ${maxDelay}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
      }
    }
  };
}
function find(iterable, comparator) {
  for (const entry of iterable) {
    if (comparator(entry)) {
      return entry;
    }
  }
  return void 0;
}
var Tuple = class _Tuple extends Array {
  constructor(...items) {
    super(...items);
    Object.setPrototypeOf(this, _Tuple.prototype);
  }
  static get [Symbol.species]() {
    return _Tuple;
  }
  concat(...arr) {
    return super.concat.apply(this, arr);
  }
  prepend(...arr) {
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new _Tuple(...arr[0].concat(this));
    }
    return new _Tuple(...arr.concat(this));
  }
};
function freezeDraftable(val) {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraftable)(val) ? (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(val, () => {
  }) : val;
}
function emplace(map, key, handler) {
  if (map.has(key)) {
    let value = map.get(key);
    if (handler.update) {
      value = handler.update(value, key, map);
      map.set(key, value);
    }
    return value;
  }
  if (!handler.insert)
    throw new Error( false ? 0 : "No insert provided for key not already in map");
  const inserted = handler.insert(key, map);
  map.set(key, inserted);
  return inserted;
}

// src/immutableStateInvariantMiddleware.ts
function isImmutableDefault(value) {
  return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
  const trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations() {
      return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}
function trackProperties(isImmutable, ignorePaths = [], obj, path = "", checkedObjects = /* @__PURE__ */ new Set()) {
  const tracked = {
    value: obj
  };
  if (!isImmutable(obj) && !checkedObjects.has(obj)) {
    checkedObjects.add(obj);
    tracked.children = {};
    for (const key in obj) {
      const childPath = path ? path + "." + key : key;
      if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
        continue;
      }
      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }
  return tracked;
}
function detectMutations(isImmutable, ignoredPaths = [], trackedProperty, obj, sameParentRef = false, path = "") {
  const prevObj = trackedProperty ? trackedProperty.value : void 0;
  const sameRef = prevObj === obj;
  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return {
      wasMutated: true,
      path
    };
  }
  if (isImmutable(prevObj) || isImmutable(obj)) {
    return {
      wasMutated: false
    };
  }
  const keysToDetect = {};
  for (let key in trackedProperty.children) {
    keysToDetect[key] = true;
  }
  for (let key in obj) {
    keysToDetect[key] = true;
  }
  const hasIgnoredPaths = ignoredPaths.length > 0;
  for (let key in keysToDetect) {
    const nestedPath = path ? path + "." + key : key;
    if (hasIgnoredPaths) {
      const hasMatches = ignoredPaths.some((ignored) => {
        if (ignored instanceof RegExp) {
          return ignored.test(nestedPath);
        }
        return nestedPath === ignored;
      });
      if (hasMatches) {
        continue;
      }
    }
    const result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
    if (result.wasMutated) {
      return result;
    }
  }
  return {
    wasMutated: false
  };
}
function createImmutableStateInvariantMiddleware(options = {}) {
  if (false) {} else {
    let stringify2 = function(obj, serializer, indent, decycler) {
      return JSON.stringify(obj, getSerialize2(serializer, decycler), indent);
    }, getSerialize2 = function(serializer, decycler) {
      let stack = [], keys = [];
      if (!decycler)
        decycler = function(_, value) {
          if (stack[0] === value)
            return "[Circular ~]";
          return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
      return function(key, value) {
        if (stack.length > 0) {
          var thisPos = stack.indexOf(this);
          ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
          ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
          if (~stack.indexOf(value))
            value = decycler.call(this, key, value);
        } else
          stack.push(value);
        return serializer == null ? value : serializer.call(this, key, value);
      };
    };
    var stringify = stringify2, getSerialize = getSerialize2;
    let {
      isImmutable = isImmutableDefault,
      ignoredPaths,
      warnAfter = 32
    } = options;
    const track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return ({
      getState
    }) => {
      let state = getState();
      let tracker = track(state);
      let result;
      return (next) => (action) => {
        const measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
        measureUtils.measureTime(() => {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          if (result.wasMutated) {
            throw new Error( false ? 0 : `A state mutation was detected between dispatches, in the path '${result.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
          }
        });
        const dispatchedAction = next(action);
        measureUtils.measureTime(() => {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          if (result.wasMutated) {
            throw new Error( false ? 0 : `A state mutation was detected inside a dispatch, in the path: ${result.path || ""}. Take a look at the reducer(s) handling the action ${stringify2(action)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
          }
        });
        measureUtils.warnIfExceeded();
        return dispatchedAction;
      };
    };
  }
}

// src/serializableStateInvariantMiddleware.ts

function isPlain(val) {
  const type = typeof val;
  return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || (0,redux__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(val);
}
function findNonSerializableValue(value, path = "", isSerializable = isPlain, getEntries, ignoredPaths = [], cache) {
  let foundNestedSerializable;
  if (!isSerializable(value)) {
    return {
      keyPath: path || "<root>",
      value
    };
  }
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (cache?.has(value))
    return false;
  const entries = getEntries != null ? getEntries(value) : Object.entries(value);
  const hasIgnoredPaths = ignoredPaths.length > 0;
  for (const [key, nestedValue] of entries) {
    const nestedPath = path ? path + "." + key : key;
    if (hasIgnoredPaths) {
      const hasMatches = ignoredPaths.some((ignored) => {
        if (ignored instanceof RegExp) {
          return ignored.test(nestedPath);
        }
        return nestedPath === ignored;
      });
      if (hasMatches) {
        continue;
      }
    }
    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath,
        value: nestedValue
      };
    }
    if (typeof nestedValue === "object") {
      foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
      if (foundNestedSerializable) {
        return foundNestedSerializable;
      }
    }
  }
  if (cache && isNestedFrozen(value))
    cache.add(value);
  return false;
}
function isNestedFrozen(value) {
  if (!Object.isFrozen(value))
    return false;
  for (const nestedValue of Object.values(value)) {
    if (typeof nestedValue !== "object" || nestedValue === null)
      continue;
    if (!isNestedFrozen(nestedValue))
      return false;
  }
  return true;
}
function createSerializableStateInvariantMiddleware(options = {}) {
  if (false) {} else {
    const {
      isSerializable = isPlain,
      getEntries,
      ignoredActions = [],
      ignoredActionPaths = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths = [],
      warnAfter = 32,
      ignoreState = false,
      ignoreActions = false,
      disableCache = false
    } = options;
    const cache = !disableCache && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (storeAPI) => (next) => (action) => {
      if (!(0,redux__WEBPACK_IMPORTED_MODULE_0__.isAction)(action)) {
        return next(action);
      }
      const result = next(action);
      const measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
      if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
        measureUtils.measureTime(() => {
          const foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
          if (foundActionNonSerializableValue) {
            const {
              keyPath,
              value
            } = foundActionNonSerializableValue;
            console.error(`A non-serializable value was detected in an action, in the path: \`${keyPath}\`. Value:`, value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
          }
        });
      }
      if (!ignoreState) {
        measureUtils.measureTime(() => {
          const state = storeAPI.getState();
          const foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
          if (foundStateNonSerializableValue) {
            const {
              keyPath,
              value
            } = foundStateNonSerializableValue;
            console.error(`A non-serializable value was detected in the state, in the path: \`${keyPath}\`. Value:`, value, `
Take a look at the reducer(s) handling this action type: ${action.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
          }
        });
        measureUtils.warnIfExceeded();
      }
      return result;
    };
  }
}

// src/getDefaultMiddleware.ts
function isBoolean(x) {
  return typeof x === "boolean";
}
var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
  const {
    thunk = true,
    immutableCheck = true,
    serializableCheck = true,
    actionCreatorCheck = true
  } = options ?? {};
  let middlewareArray = new Tuple();
  if (thunk) {
    if (isBoolean(thunk)) {
      middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__.thunk);
    } else {
      middlewareArray.push((0,redux_thunk__WEBPACK_IMPORTED_MODULE_3__.withExtraArgument)(thunk.extraArgument));
    }
  }
  if (true) {
    if (immutableCheck) {
      let immutableOptions = {};
      if (!isBoolean(immutableCheck)) {
        immutableOptions = immutableCheck;
      }
      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
    }
    if (serializableCheck) {
      let serializableOptions = {};
      if (!isBoolean(serializableCheck)) {
        serializableOptions = serializableCheck;
      }
      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
    if (actionCreatorCheck) {
      let actionCreatorOptions = {};
      if (!isBoolean(actionCreatorCheck)) {
        actionCreatorOptions = actionCreatorCheck;
      }
      middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
    }
  }
  return middlewareArray;
};

// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = () => (payload) => ({
  payload,
  meta: {
    [SHOULD_AUTOBATCH]: true
  }
});
var createQueueWithTimer = (timeout) => {
  return (notify) => {
    setTimeout(notify, timeout);
  };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
var autoBatchEnhancer = (options = {
  type: "raf"
}) => (next) => (...args) => {
  const store = next(...args);
  let notifying = true;
  let shouldNotifyAtEndOfTick = false;
  let notificationQueued = false;
  const listeners = /* @__PURE__ */ new Set();
  const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
  const notifyListeners = () => {
    notificationQueued = false;
    if (shouldNotifyAtEndOfTick) {
      shouldNotifyAtEndOfTick = false;
      listeners.forEach((l) => l());
    }
  };
  return Object.assign({}, store, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(listener2) {
      const wrappedListener = () => notifying && listener2();
      const unsubscribe = store.subscribe(wrappedListener);
      listeners.add(listener2);
      return () => {
        unsubscribe();
        listeners.delete(listener2);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(action) {
      try {
        notifying = !action?.meta?.[SHOULD_AUTOBATCH];
        shouldNotifyAtEndOfTick = !notifying;
        if (shouldNotifyAtEndOfTick) {
          if (!notificationQueued) {
            notificationQueued = true;
            queueCallback(notifyListeners);
          }
        }
        return store.dispatch(action);
      } finally {
        notifying = true;
      }
    }
  });
};

// src/getDefaultEnhancers.ts
var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
  const {
    autoBatch = true
  } = options ?? {};
  let enhancerArray = new Tuple(middlewareEnhancer);
  if (autoBatch) {
    enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
  }
  return enhancerArray;
};

// src/configureStore.ts
var IS_PRODUCTION = "development" === "production";
function configureStore(options) {
  const getDefaultMiddleware = buildGetDefaultMiddleware();
  const {
    reducer = void 0,
    middleware,
    devTools = true,
    preloadedState = void 0,
    enhancers = void 0
  } = options || {};
  let rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if ((0,redux__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(reducer)) {
    rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducer);
  } else {
    throw new Error( false ? 0 : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  }
  if (!IS_PRODUCTION && middleware && typeof middleware !== "function") {
    throw new Error( false ? 0 : "`middleware` field must be a callback");
  }
  let finalMiddleware;
  if (typeof middleware === "function") {
    finalMiddleware = middleware(getDefaultMiddleware);
    if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
      throw new Error( false ? 0 : "when using a middleware builder function, an array of middleware must be returned");
    }
  } else {
    finalMiddleware = getDefaultMiddleware();
  }
  if (!IS_PRODUCTION && finalMiddleware.some((item) => typeof item !== "function")) {
    throw new Error( false ? 0 : "each middleware provided to configureStore must be a function");
  }
  let finalCompose = redux__WEBPACK_IMPORTED_MODULE_0__.compose;
  if (devTools) {
    finalCompose = composeWithDevTools({
      // Enable capture of stack traces for dispatched Redux actions
      trace: !IS_PRODUCTION,
      ...typeof devTools === "object" && devTools
    });
  }
  const middlewareEnhancer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...finalMiddleware);
  const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
  if (!IS_PRODUCTION && enhancers && typeof enhancers !== "function") {
    throw new Error( false ? 0 : "`enhancers` field must be a callback");
  }
  let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
  if (!IS_PRODUCTION && !Array.isArray(storeEnhancers)) {
    throw new Error( false ? 0 : "`enhancers` callback must return an array");
  }
  if (!IS_PRODUCTION && storeEnhancers.some((item) => typeof item !== "function")) {
    throw new Error( false ? 0 : "each enhancer provided to configureStore must be a function");
  }
  if (!IS_PRODUCTION && finalMiddleware.length && !storeEnhancers.includes(middlewareEnhancer)) {
    console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  }
  const composedEnhancer = finalCompose(...storeEnhancers);
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer, preloadedState, composedEnhancer);
}

// src/createReducer.ts


// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
  const actionsMap = {};
  const actionMatchers = [];
  let defaultCaseReducer;
  const builder = {
    addCase(typeOrActionCreator, reducer) {
      if (true) {
        if (actionMatchers.length > 0) {
          throw new Error( false ? 0 : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        }
        if (defaultCaseReducer) {
          throw new Error( false ? 0 : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
        }
      }
      const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (!type) {
        throw new Error( false ? 0 : "`builder.addCase` cannot be called with an empty action type");
      }
      if (type in actionsMap) {
        throw new Error( false ? 0 : `\`builder.addCase\` cannot be called with two reducers for the same action type '${type}'`);
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher(matcher, reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error( false ? 0 : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
        }
      }
      actionMatchers.push({
        matcher,
        reducer
      });
      return builder;
    },
    addDefaultCase(reducer) {
      if (true) {
        if (defaultCaseReducer) {
          throw new Error( false ? 0 : "`builder.addDefaultCase` can only be called once");
        }
      }
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}

// src/createReducer.ts
function isStateFunction(x) {
  return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
  if (true) {
    if (typeof mapOrBuilderCallback === "object") {
      throw new Error( false ? 0 : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
    }
  }
  let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
  let getInitialState;
  if (isStateFunction(initialState)) {
    getInitialState = () => freezeDraftable(initialState());
  } else {
    const frozenInitialState = freezeDraftable(initialState);
    getInitialState = () => frozenInitialState;
  }
  function reducer(state = getInitialState(), action) {
    let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({
      matcher
    }) => matcher(action)).map(({
      reducer: reducer2
    }) => reducer2)];
    if (caseReducers.filter((cr) => !!cr).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce((previousState, caseReducer) => {
      if (caseReducer) {
        if ((0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(previousState)) {
          const draft = previousState;
          const result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!(0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraftable)(previousState)) {
          const result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw new Error( false ? 0 : "A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(previousState, (draft) => {
            return caseReducer(draft, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}

// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};

// src/matchers.ts
var matches = (matcher, action) => {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};
function isAnyOf(...matchers) {
  return (action) => {
    return matchers.some((matcher) => matches(matcher, action));
  };
}
function isAllOf(...matchers) {
  return (action) => {
    return matchers.every((matcher) => matches(matcher, action));
  };
}
function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta)
    return false;
  const hasValidRequestId = typeof action.meta.requestId === "string";
  const hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
  return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["pending"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.pending));
}
function isRejected(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["rejected"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.rejected));
}
function isRejectedWithValue(...asyncThunks) {
  const hasFlag = (action) => {
    return action && action.meta && action.meta.rejectedWithValue;
  };
  if (asyncThunks.length === 0) {
    return isAllOf(isRejected(...asyncThunks), hasFlag);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }
  return isAllOf(isRejected(...asyncThunks), hasFlag);
}
function isFulfilled(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["fulfilled"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.fulfilled));
}
function isAsyncThunkAction(...asyncThunks) {
  if (asyncThunks.length === 0) {
    return (action) => hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]);
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }
  return isAnyOf(...asyncThunks.flatMap((asyncThunk) => [asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled]));
}

// src/createAsyncThunk.ts
var commonProperties = ["name", "message", "stack", "code"];
var RejectWithValue = class {
  constructor(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
};
var FulfillWithMeta = class {
  constructor(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
};
var miniSerializeError = (value) => {
  if (typeof value === "object" && value !== null) {
    const simpleError = {};
    for (const property of commonProperties) {
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return {
    message: String(value)
  };
};
var createAsyncThunk = /* @__PURE__ */ (() => {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta) => ({
      payload,
      meta: {
        ...meta || {},
        arg,
        requestId,
        requestStatus: "fulfilled"
      }
    }));
    const pending = createAction(typePrefix + "/pending", (requestId, arg, meta) => ({
      payload: void 0,
      meta: {
        ...meta || {},
        arg,
        requestId,
        requestStatus: "pending"
      }
    }));
    const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta) => ({
      payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: {
        ...meta || {},
        arg,
        requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: error?.name === "AbortError",
        condition: error?.name === "ConditionError"
      }
    }));
    function actionCreator(arg) {
      return (dispatch, getState, extra) => {
        const requestId = options?.idGenerator ? options.idGenerator(arg) : nanoid();
        const abortController = new AbortController();
        let abortHandler;
        let abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        const promise = async function() {
          let finalAction;
          try {
            let conditionResult = options?.condition?.(arg, {
              getState,
              extra
            });
            if (isThenable(conditionResult)) {
              conditionResult = await conditionResult;
            }
            if (conditionResult === false || abortController.signal.aborted) {
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            }
            const abortedPromise = new Promise((_, reject) => {
              abortHandler = () => {
                reject({
                  name: "AbortError",
                  message: abortReason || "Aborted"
                });
              };
              abortController.signal.addEventListener("abort", abortHandler);
            });
            dispatch(pending(requestId, arg, options?.getPendingMeta?.({
              requestId,
              arg
            }, {
              getState,
              extra
            })));
            finalAction = await Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch,
              getState,
              extra,
              requestId,
              signal: abortController.signal,
              abort,
              rejectWithValue: (value, meta) => {
                return new RejectWithValue(value, meta);
              },
              fulfillWithValue: (value, meta) => {
                return new FulfillWithMeta(value, meta);
              }
            })).then((result) => {
              if (result instanceof RejectWithValue) {
                throw result;
              }
              if (result instanceof FulfillWithMeta) {
                return fulfilled(result.payload, requestId, arg, result.meta);
              }
              return fulfilled(result, requestId, arg);
            })]);
          } catch (err) {
            finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
          } finally {
            if (abortHandler) {
              abortController.signal.removeEventListener("abort", abortHandler);
            }
          }
          const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
          if (!skipDispatch) {
            dispatch(finalAction);
          }
          return finalAction;
        }();
        return Object.assign(promise, {
          abort,
          requestId,
          arg,
          unwrap() {
            return promise.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      settled: isAnyOf(rejected, fulfilled),
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = () => createAsyncThunk2;
  return createAsyncThunk2;
})();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}

// src/createSlice.ts
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
var asyncThunkCreator = {
  [asyncThunkSymbol]: createAsyncThunk
};
var ReducerType = /* @__PURE__ */ ((ReducerType2) => {
  ReducerType2["reducer"] = "reducer";
  ReducerType2["reducerWithPrepare"] = "reducerWithPrepare";
  ReducerType2["asyncThunk"] = "asyncThunk";
  return ReducerType2;
})(ReducerType || {});
function getType(slice, actionKey) {
  return `${slice}/${actionKey}`;
}
function buildCreateSlice({
  creators
} = {}) {
  const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
  return function createSlice2(options) {
    const {
      name,
      reducerPath = name
    } = options;
    if (!name) {
      throw new Error( false ? 0 : "`name` is a required option for createSlice");
    }
    if (typeof process !== "undefined" && "development" === "development") {
      if (options.initialState === void 0) {
        console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
      }
    }
    const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
    const reducerNames = Object.keys(reducers);
    const context = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    };
    const contextMethods = {
      addCase(typeOrActionCreator, reducer2) {
        const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
        if (!type) {
          throw new Error( false ? 0 : "`context.addCase` cannot be called with an empty action type");
        }
        if (type in context.sliceCaseReducersByType) {
          throw new Error( false ? 0 : "`context.addCase` cannot be called with two reducers for the same action type: " + type);
        }
        context.sliceCaseReducersByType[type] = reducer2;
        return contextMethods;
      },
      addMatcher(matcher, reducer2) {
        context.sliceMatchers.push({
          matcher,
          reducer: reducer2
        });
        return contextMethods;
      },
      exposeAction(name2, actionCreator) {
        context.actionCreators[name2] = actionCreator;
        return contextMethods;
      },
      exposeCaseReducer(name2, reducer2) {
        context.sliceCaseReducersByName[name2] = reducer2;
        return contextMethods;
      }
    };
    reducerNames.forEach((reducerName) => {
      const reducerDefinition = reducers[reducerName];
      const reducerDetails = {
        reducerName,
        type: getType(name, reducerName),
        createNotation: typeof options.reducers === "function"
      };
      if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
        handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
      } else {
        handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
      }
    });
    function buildReducer() {
      if (true) {
        if (typeof options.extraReducers === "object") {
          throw new Error( false ? 0 : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
        }
      }
      const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
      const finalCaseReducers = {
        ...extraReducers,
        ...context.sliceCaseReducersByType
      };
      return createReducer(options.initialState, (builder) => {
        for (let key in finalCaseReducers) {
          builder.addCase(key, finalCaseReducers[key]);
        }
        for (let sM of context.sliceMatchers) {
          builder.addMatcher(sM.matcher, sM.reducer);
        }
        for (let m of actionMatchers) {
          builder.addMatcher(m.matcher, m.reducer);
        }
        if (defaultCaseReducer) {
          builder.addDefaultCase(defaultCaseReducer);
        }
      });
    }
    const selectSelf = (state) => state;
    const injectedSelectorCache = /* @__PURE__ */ new Map();
    let _reducer;
    function reducer(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    }
    function getInitialState() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
    function makeSelectorProps(reducerPath2, injected = false) {
      function selectSlice(state) {
        let sliceState = state[reducerPath2];
        if (typeof sliceState === "undefined") {
          if (injected) {
            sliceState = getInitialState();
          } else if (true) {
            throw new Error( false ? 0 : "selectSlice returned undefined for an uninjected slice reducer");
          }
        }
        return sliceState;
      }
      function getSelectors(selectState = selectSelf) {
        const selectorCache = emplace(injectedSelectorCache, injected, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return emplace(selectorCache, selectState, {
          insert: () => {
            const map = {};
            for (const [name2, selector] of Object.entries(options.selectors ?? {})) {
              map[name2] = wrapSelector(selector, selectState, getInitialState, injected);
            }
            return map;
          }
        });
      }
      return {
        reducerPath: reducerPath2,
        getSelectors,
        get selectors() {
          return getSelectors(selectSlice);
        },
        selectSlice
      };
    }
    const slice = {
      name,
      reducer,
      actions: context.actionCreators,
      caseReducers: context.sliceCaseReducersByName,
      getInitialState,
      ...makeSelectorProps(reducerPath),
      injectInto(injectable, {
        reducerPath: pathOpt,
        ...config
      } = {}) {
        const newReducerPath = pathOpt ?? reducerPath;
        injectable.inject({
          reducerPath: newReducerPath,
          reducer
        }, config);
        return {
          ...slice,
          ...makeSelectorProps(newReducerPath, true)
        };
      }
    };
    return slice;
  };
}
function wrapSelector(selector, selectState, getInitialState, injected) {
  function wrapper(rootState, ...args) {
    let sliceState = selectState(rootState);
    if (typeof sliceState === "undefined") {
      if (injected) {
        sliceState = getInitialState();
      } else if (true) {
        throw new Error( false ? 0 : "selectState returned undefined for an uninjected slice reducer");
      }
    }
    return selector(sliceState, ...args);
  }
  wrapper.unwrapped = selector;
  return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
  function asyncThunk(payloadCreator, config) {
    return {
      _reducerDefinitionType: "asyncThunk" /* asyncThunk */,
      payloadCreator,
      ...config
    };
  }
  asyncThunk.withTypes = () => asyncThunk;
  return {
    reducer(caseReducer) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [caseReducer.name](...args) {
          return caseReducer(...args);
        }
      }[caseReducer.name], {
        _reducerDefinitionType: "reducer" /* reducer */
      });
    },
    preparedReducer(prepare, reducer) {
      return {
        _reducerDefinitionType: "reducerWithPrepare" /* reducerWithPrepare */,
        prepare,
        reducer
      };
    },
    asyncThunk
  };
}
function handleNormalReducerDefinition({
  type,
  reducerName,
  createNotation
}, maybeReducerWithPrepare, context) {
  let caseReducer;
  let prepareCallback;
  if ("reducer" in maybeReducerWithPrepare) {
    if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
      throw new Error( false ? 0 : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    }
    caseReducer = maybeReducerWithPrepare.reducer;
    prepareCallback = maybeReducerWithPrepare.prepare;
  } else {
    caseReducer = maybeReducerWithPrepare;
  }
  context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
  return reducerDefinition._reducerDefinitionType === "asyncThunk" /* asyncThunk */;
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
  return reducerDefinition._reducerDefinitionType === "reducerWithPrepare" /* reducerWithPrepare */;
}
function handleThunkCaseReducerDefinition({
  type,
  reducerName
}, reducerDefinition, context, cAT) {
  if (!cAT) {
    throw new Error( false ? 0 : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  }
  const {
    payloadCreator,
    fulfilled,
    pending,
    rejected,
    settled,
    options
  } = reducerDefinition;
  const thunk = cAT(type, payloadCreator, options);
  context.exposeAction(reducerName, thunk);
  if (fulfilled) {
    context.addCase(thunk.fulfilled, fulfilled);
  }
  if (pending) {
    context.addCase(thunk.pending, pending);
  }
  if (rejected) {
    context.addCase(thunk.rejected, rejected);
  }
  if (settled) {
    context.addMatcher(thunk.settled, settled);
  }
  context.exposeCaseReducer(reducerName, {
    fulfilled: fulfilled || noop,
    pending: pending || noop,
    rejected: rejected || noop,
    settled: settled || noop
  });
}
function noop() {
}

// src/entities/entity_state.ts
function getInitialEntityState() {
  return {
    ids: [],
    entities: {}
  };
}
function createInitialStateFactory(stateAdapter) {
  function getInitialState(additionalState = {}, entities) {
    const state = Object.assign(getInitialEntityState(), additionalState);
    return entities ? stateAdapter.setAll(state, entities) : state;
  }
  return {
    getInitialState
  };
}

// src/entities/state_selectors.ts
function createSelectorsFactory() {
  function getSelectors(selectState, options = {}) {
    const {
      createSelector: createSelector2 = createDraftSafeSelector
    } = options;
    const selectIds = (state) => state.ids;
    const selectEntities = (state) => state.entities;
    const selectAll = createSelector2(selectIds, selectEntities, (ids, entities) => ids.map((id) => entities[id]));
    const selectId = (_, id) => id;
    const selectById = (entities, id) => entities[id];
    const selectTotal = createSelector2(selectIds, (ids) => ids.length);
    if (!selectState) {
      return {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
        selectById: createSelector2(selectEntities, selectId, selectById)
      };
    }
    const selectGlobalizedEntities = createSelector2(selectState, selectEntities);
    return {
      selectIds: createSelector2(selectState, selectIds),
      selectEntities: selectGlobalizedEntities,
      selectAll: createSelector2(selectState, selectAll),
      selectTotal: createSelector2(selectState, selectTotal),
      selectById: createSelector2(selectGlobalizedEntities, selectId, selectById)
    };
  }
  return {
    getSelectors
  };
}

// src/entities/sorted_state_adapter.ts


// src/entities/state_adapter.ts

var isDraftTyped = immer__WEBPACK_IMPORTED_MODULE_2__.isDraft;
function createSingleArgumentStateOperator(mutator) {
  const operator = createStateOperator((_, state) => mutator(state));
  return function operation(state) {
    return operator(state, void 0);
  };
}
function createStateOperator(mutator) {
  return function operation(state, arg) {
    function isPayloadActionArgument(arg2) {
      return isFSA(arg2);
    }
    const runMutator = (draft) => {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft);
      } else {
        mutator(arg, draft);
      }
    };
    if (isDraftTyped(state)) {
      runMutator(state);
      return state;
    }
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, runMutator);
  };
}

// src/entities/utils.ts

function selectIdValue(entity, selectId) {
  const key = selectId(entity);
  if ( true && key === void 0) {
    console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
  }
  return key;
}
function ensureEntitiesArray(entities) {
  if (!Array.isArray(entities)) {
    entities = Object.values(entities);
  }
  return entities;
}
function getCurrent(value) {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(value) ? (0,immer__WEBPACK_IMPORTED_MODULE_2__.current)(value) : value;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
  newEntities = ensureEntitiesArray(newEntities);
  const existingIdsArray = (0,immer__WEBPACK_IMPORTED_MODULE_2__.current)(state.ids);
  const existingIds = new Set(existingIdsArray);
  const added = [];
  const updated = [];
  for (const entity of newEntities) {
    const id = selectIdValue(entity, selectId);
    if (existingIds.has(id)) {
      updated.push({
        id,
        changes: entity
      });
    } else {
      added.push(entity);
    }
  }
  return [added, updated, existingIdsArray];
}

// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
  function addOneMutably(entity, state) {
    const key = selectIdValue(entity, selectId);
    if (key in state.entities) {
      return;
    }
    state.ids.push(key);
    state.entities[key] = entity;
  }
  function addManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    for (const entity of newEntities) {
      addOneMutably(entity, state);
    }
  }
  function setOneMutably(entity, state) {
    const key = selectIdValue(entity, selectId);
    if (!(key in state.entities)) {
      state.ids.push(key);
    }
    ;
    state.entities[key] = entity;
  }
  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    for (const entity of newEntities) {
      setOneMutably(entity, state);
    }
  }
  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.ids = [];
    state.entities = {};
    addManyMutably(newEntities, state);
  }
  function removeOneMutably(key, state) {
    return removeManyMutably([key], state);
  }
  function removeManyMutably(keys, state) {
    let didMutate = false;
    keys.forEach((key) => {
      if (key in state.entities) {
        delete state.entities[key];
        didMutate = true;
      }
    });
    if (didMutate) {
      state.ids = state.ids.filter((id) => id in state.entities);
    }
  }
  function removeAllMutably(state) {
    Object.assign(state, {
      ids: [],
      entities: {}
    });
  }
  function takeNewKey(keys, update, state) {
    const original3 = state.entities[update.id];
    if (original3 === void 0) {
      return false;
    }
    const updated = Object.assign({}, original3, update.changes);
    const newKey = selectIdValue(updated, selectId);
    const hasNewKey = newKey !== update.id;
    if (hasNewKey) {
      keys[update.id] = newKey;
      delete state.entities[update.id];
    }
    ;
    state.entities[newKey] = updated;
    return hasNewKey;
  }
  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }
  function updateManyMutably(updates, state) {
    const newKeys = {};
    const updatesPerEntity = {};
    updates.forEach((update) => {
      if (update.id in state.entities) {
        updatesPerEntity[update.id] = {
          id: update.id,
          // Spreads ignore falsy values, so this works even if there isn't
          // an existing update already at this key
          changes: {
            ...updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null,
            ...update.changes
          }
        };
      }
    });
    updates = Object.values(updatesPerEntity);
    const didMutateEntities = updates.length > 0;
    if (didMutateEntities) {
      const didMutateIds = updates.filter((update) => takeNewKey(newKeys, update, state)).length > 0;
      if (didMutateIds) {
        state.ids = Object.values(state.entities).map((e) => selectIdValue(e, selectId));
      }
    }
  }
  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }
  function upsertManyMutably(newEntities, state) {
    const [added, updated] = splitAddedUpdatedEntities(newEntities, selectId, state);
    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }
  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably)
  };
}

// src/entities/sorted_state_adapter.ts
function findInsertIndex(sortedItems, item, comparisonFunction) {
  let lowIndex = 0;
  let highIndex = sortedItems.length;
  while (lowIndex < highIndex) {
    let middleIndex = lowIndex + highIndex >>> 1;
    const currentItem = sortedItems[middleIndex];
    const res = comparisonFunction(item, currentItem);
    if (res >= 0) {
      lowIndex = middleIndex + 1;
    } else {
      highIndex = middleIndex;
    }
  }
  return lowIndex;
}
function insert(sortedItems, item, comparisonFunction) {
  const insertAtIndex = findInsertIndex(sortedItems, item, comparisonFunction);
  sortedItems.splice(insertAtIndex, 0, item);
  return sortedItems;
}
function createSortedStateAdapter(selectId, comparer) {
  const {
    removeOne,
    removeMany,
    removeAll
  } = createUnsortedStateAdapter(selectId);
  function addOneMutably(entity, state) {
    return addManyMutably([entity], state);
  }
  function addManyMutably(newEntities, state, existingIds) {
    newEntities = ensureEntitiesArray(newEntities);
    const existingKeys = new Set(existingIds ?? (0,immer__WEBPACK_IMPORTED_MODULE_2__.current)(state.ids));
    const models = newEntities.filter((model) => !existingKeys.has(selectIdValue(model, selectId)));
    if (models.length !== 0) {
      mergeFunction(state, models);
    }
  }
  function setOneMutably(entity, state) {
    return setManyMutably([entity], state);
  }
  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    if (newEntities.length !== 0) {
      for (const item of newEntities) {
        delete state.entities[selectId(item)];
      }
      mergeFunction(state, newEntities);
    }
  }
  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.entities = {};
    state.ids = [];
    addManyMutably(newEntities, state, []);
  }
  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }
  function updateManyMutably(updates, state) {
    let appliedUpdates = false;
    let replacedIds = false;
    for (let update of updates) {
      const entity = state.entities[update.id];
      if (!entity) {
        continue;
      }
      appliedUpdates = true;
      Object.assign(entity, update.changes);
      const newId = selectId(entity);
      if (update.id !== newId) {
        replacedIds = true;
        delete state.entities[update.id];
        const oldIndex = state.ids.indexOf(update.id);
        state.ids[oldIndex] = newId;
        state.entities[newId] = entity;
      }
    }
    if (appliedUpdates) {
      mergeFunction(state, [], appliedUpdates, replacedIds);
    }
  }
  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }
  function upsertManyMutably(newEntities, state) {
    const [added, updated, existingIdsArray] = splitAddedUpdatedEntities(newEntities, selectId, state);
    if (updated.length) {
      updateManyMutably(updated, state);
    }
    if (added.length) {
      addManyMutably(added, state, existingIdsArray);
    }
  }
  function areArraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length && i < b.length; i++) {
      if (a[i] === b[i]) {
        continue;
      }
      return false;
    }
    return true;
  }
  const mergeInsertion = (state, addedItems, appliedUpdates, replacedIds) => {
    const currentEntities = getCurrent(state.entities);
    const currentIds = getCurrent(state.ids);
    const stateEntities = state.entities;
    let ids = currentIds;
    if (replacedIds) {
      ids = Array.from(new Set(currentIds));
    }
    let sortedEntities = [];
    for (const id of ids) {
      const entity = currentEntities[id];
      if (entity) {
        sortedEntities.push(entity);
      }
    }
    const wasPreviouslyEmpty = sortedEntities.length === 0;
    for (const item of addedItems) {
      stateEntities[selectId(item)] = item;
      if (!wasPreviouslyEmpty) {
        insert(sortedEntities, item, comparer);
      }
    }
    if (wasPreviouslyEmpty) {
      sortedEntities = addedItems.slice().sort(comparer);
    } else if (appliedUpdates) {
      sortedEntities.sort(comparer);
    }
    const newSortedIds = sortedEntities.map(selectId);
    if (!areArraysEqual(currentIds, newSortedIds)) {
      state.ids = newSortedIds;
    }
  };
  const mergeFunction = mergeInsertion;
  return {
    removeOne,
    removeMany,
    removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably)
  };
}

// src/entities/create_adapter.ts
function createEntityAdapter(options = {}) {
  const {
    selectId,
    sortComparer
  } = {
    sortComparer: false,
    selectId: (instance) => instance.id,
    ...options
  };
  const stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
  const stateFactory = createInitialStateFactory(stateAdapter);
  const selectorsFactory = createSelectorsFactory();
  return {
    selectId,
    sortComparer,
    ...stateFactory,
    ...selectorsFactory,
    ...stateAdapter
  };
}

// src/listenerMiddleware/index.ts


// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = `task-${cancelled}`;
var taskCompleted = `task-${completed}`;
var listenerCancelled = `${listener}-${cancelled}`;
var listenerCompleted = `${listener}-${completed}`;
var TaskAbortError = class {
  constructor(code) {
    this.code = code;
    this.message = `${task} ${cancelled} (reason: ${code})`;
  }
  name = "TaskAbortError";
  message;
};

// src/listenerMiddleware/utils.ts
var assertFunction = (func, expected) => {
  if (typeof func !== "function") {
    throw new Error( false ? 0 : `${expected} is not a function`);
  }
};
var noop2 = () => {
};
var catchRejection = (promise, onError = noop2) => {
  promise.catch(onError);
  return promise;
};
var addAbortSignalListener = (abortSignal, callback) => {
  abortSignal.addEventListener("abort", callback, {
    once: true
  });
  return () => abortSignal.removeEventListener("abort", callback);
};
var abortControllerWithReason = (abortController, reason) => {
  const signal = abortController.signal;
  if (signal.aborted) {
    return;
  }
  if (!("reason" in signal)) {
    Object.defineProperty(signal, "reason", {
      enumerable: true,
      value: reason,
      configurable: true,
      writable: true
    });
  }
  ;
  abortController.abort(reason);
};

// src/listenerMiddleware/task.ts
var validateActive = (signal) => {
  if (signal.aborted) {
    const {
      reason
    } = signal;
    throw new TaskAbortError(reason);
  }
};
function raceWithSignal(signal, promise) {
  let cleanup = noop2;
  return new Promise((resolve, reject) => {
    const notifyRejection = () => reject(new TaskAbortError(signal.reason));
    if (signal.aborted) {
      notifyRejection();
      return;
    }
    cleanup = addAbortSignalListener(signal, notifyRejection);
    promise.finally(() => cleanup()).then(resolve, reject);
  }).finally(() => {
    cleanup = noop2;
  });
}
var runTask = async (task2, cleanUp) => {
  try {
    await Promise.resolve();
    const value = await task2();
    return {
      status: "ok",
      value
    };
  } catch (error) {
    return {
      status: error instanceof TaskAbortError ? "cancelled" : "rejected",
      error
    };
  } finally {
    cleanUp?.();
  }
};
var createPause = (signal) => {
  return (promise) => {
    return catchRejection(raceWithSignal(signal, promise).then((output) => {
      validateActive(signal);
      return output;
    }));
  };
};
var createDelay = (signal) => {
  const pause = createPause(signal);
  return (timeoutMs) => {
    return pause(new Promise((resolve) => setTimeout(resolve, timeoutMs)));
  };
};

// src/listenerMiddleware/index.ts
var {
  assign
} = Object;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = (parentAbortSignal, parentBlockingPromises) => {
  const linkControllers = (controller) => addAbortSignalListener(parentAbortSignal, () => abortControllerWithReason(controller, parentAbortSignal.reason));
  return (taskExecutor, opts) => {
    assertFunction(taskExecutor, "taskExecutor");
    const childAbortController = new AbortController();
    linkControllers(childAbortController);
    const result = runTask(async () => {
      validateActive(parentAbortSignal);
      validateActive(childAbortController.signal);
      const result2 = await taskExecutor({
        pause: createPause(childAbortController.signal),
        delay: createDelay(childAbortController.signal),
        signal: childAbortController.signal
      });
      validateActive(childAbortController.signal);
      return result2;
    }, () => abortControllerWithReason(childAbortController, taskCompleted));
    if (opts?.autoJoin) {
      parentBlockingPromises.push(result.catch(noop2));
    }
    return {
      result: createPause(parentAbortSignal)(result),
      cancel() {
        abortControllerWithReason(childAbortController, taskCancelled);
      }
    };
  };
};
var createTakePattern = (startListening, signal) => {
  const take = async (predicate, timeout) => {
    validateActive(signal);
    let unsubscribe = () => {
    };
    const tuplePromise = new Promise((resolve, reject) => {
      let stopListening = startListening({
        predicate,
        effect: (action, listenerApi) => {
          listenerApi.unsubscribe();
          resolve([action, listenerApi.getState(), listenerApi.getOriginalState()]);
        }
      });
      unsubscribe = () => {
        stopListening();
        reject();
      };
    });
    const promises = [tuplePromise];
    if (timeout != null) {
      promises.push(new Promise((resolve) => setTimeout(resolve, timeout, null)));
    }
    try {
      const output = await raceWithSignal(signal, Promise.race(promises));
      validateActive(signal);
      return output;
    } finally {
      unsubscribe();
    }
  };
  return (predicate, timeout) => catchRejection(take(predicate, timeout));
};
var getListenerEntryPropsFrom = (options) => {
  let {
    type,
    actionCreator,
    matcher,
    predicate,
    effect
  } = options;
  if (type) {
    predicate = createAction(type).match;
  } else if (actionCreator) {
    type = actionCreator.type;
    predicate = actionCreator.match;
  } else if (matcher) {
    predicate = matcher;
  } else if (predicate) {
  } else {
    throw new Error( false ? 0 : "Creating or removing a listener requires one of the known fields for matching an action");
  }
  assertFunction(effect, "options.listener");
  return {
    predicate,
    type,
    effect
  };
};
var createListenerEntry = Object.assign((options) => {
  const {
    type,
    predicate,
    effect
  } = getListenerEntryPropsFrom(options);
  const id = nanoid();
  const entry = {
    id,
    effect,
    type,
    predicate,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error( false ? 0 : "Unsubscribe not initialized");
    }
  };
  return entry;
}, {
  withTypes: () => createListenerEntry
});
var cancelActiveListeners = (entry) => {
  entry.pending.forEach((controller) => {
    abortControllerWithReason(controller, listenerCancelled);
  });
};
var createClearListenerMiddleware = (listenerMap) => {
  return () => {
    listenerMap.forEach(cancelActiveListeners);
    listenerMap.clear();
  };
};
var safelyNotifyError = (errorHandler, errorToNotify, errorInfo) => {
  try {
    errorHandler(errorToNotify, errorInfo);
  } catch (errorHandlerError) {
    setTimeout(() => {
      throw errorHandlerError;
    }, 0);
  }
};
var addListener = Object.assign(createAction(`${alm}/add`), {
  withTypes: () => addListener
});
var clearAllListeners = createAction(`${alm}/removeAll`);
var removeListener = Object.assign(createAction(`${alm}/remove`), {
  withTypes: () => removeListener
});
var defaultErrorHandler = (...args) => {
  console.error(`${alm}/error`, ...args);
};
var createListenerMiddleware = (middlewareOptions = {}) => {
  const listenerMap = /* @__PURE__ */ new Map();
  const {
    extra,
    onError = defaultErrorHandler
  } = middlewareOptions;
  assertFunction(onError, "onError");
  const insertEntry = (entry) => {
    entry.unsubscribe = () => listenerMap.delete(entry.id);
    listenerMap.set(entry.id, entry);
    return (cancelOptions) => {
      entry.unsubscribe();
      if (cancelOptions?.cancelActive) {
        cancelActiveListeners(entry);
      }
    };
  };
  const startListening = (options) => {
    let entry = find(Array.from(listenerMap.values()), (existingEntry) => existingEntry.effect === options.effect);
    if (!entry) {
      entry = createListenerEntry(options);
    }
    return insertEntry(entry);
  };
  Object.assign(startListening, {
    withTypes: () => startListening
  });
  const stopListening = (options) => {
    const {
      type,
      effect,
      predicate
    } = getListenerEntryPropsFrom(options);
    const entry = find(Array.from(listenerMap.values()), (entry2) => {
      const matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
      return matchPredicateOrType && entry2.effect === effect;
    });
    if (entry) {
      entry.unsubscribe();
      if (options.cancelActive) {
        cancelActiveListeners(entry);
      }
    }
    return !!entry;
  };
  Object.assign(stopListening, {
    withTypes: () => stopListening
  });
  const notifyListener = async (entry, action, api, getOriginalState) => {
    const internalTaskController = new AbortController();
    const take = createTakePattern(startListening, internalTaskController.signal);
    const autoJoinPromises = [];
    try {
      entry.pending.add(internalTaskController);
      await Promise.resolve(entry.effect(
        action,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        assign({}, api, {
          getOriginalState,
          condition: (predicate, timeout) => take(predicate, timeout).then(Boolean),
          take,
          delay: createDelay(internalTaskController.signal),
          pause: createPause(internalTaskController.signal),
          extra,
          signal: internalTaskController.signal,
          fork: createFork(internalTaskController.signal, autoJoinPromises),
          unsubscribe: entry.unsubscribe,
          subscribe: () => {
            listenerMap.set(entry.id, entry);
          },
          cancelActiveListeners: () => {
            entry.pending.forEach((controller, _, set) => {
              if (controller !== internalTaskController) {
                abortControllerWithReason(controller, listenerCancelled);
                set.delete(controller);
              }
            });
          },
          cancel: () => {
            abortControllerWithReason(internalTaskController, listenerCancelled);
            entry.pending.delete(internalTaskController);
          },
          throwIfCancelled: () => {
            validateActive(internalTaskController.signal);
          }
        })
      ));
    } catch (listenerError) {
      if (!(listenerError instanceof TaskAbortError)) {
        safelyNotifyError(onError, listenerError, {
          raisedBy: "effect"
        });
      }
    } finally {
      await Promise.all(autoJoinPromises);
      abortControllerWithReason(internalTaskController, listenerCompleted);
      entry.pending.delete(internalTaskController);
    }
  };
  const clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
  const middleware = (api) => (next) => (action) => {
    if (!(0,redux__WEBPACK_IMPORTED_MODULE_0__.isAction)(action)) {
      return next(action);
    }
    if (addListener.match(action)) {
      return startListening(action.payload);
    }
    if (clearAllListeners.match(action)) {
      clearListenerMiddleware();
      return;
    }
    if (removeListener.match(action)) {
      return stopListening(action.payload);
    }
    let originalState = api.getState();
    const getOriginalState = () => {
      if (originalState === INTERNAL_NIL_TOKEN) {
        throw new Error( false ? 0 : `${alm}: getOriginalState can only be called synchronously`);
      }
      return originalState;
    };
    let result;
    try {
      result = next(action);
      if (listenerMap.size > 0) {
        const currentState = api.getState();
        const listenerEntries = Array.from(listenerMap.values());
        for (const entry of listenerEntries) {
          let runListener = false;
          try {
            runListener = entry.predicate(action, currentState, originalState);
          } catch (predicateError) {
            runListener = false;
            safelyNotifyError(onError, predicateError, {
              raisedBy: "predicate"
            });
          }
          if (!runListener) {
            continue;
          }
          notifyListener(entry, action, api, getOriginalState);
        }
      }
    } finally {
      originalState = INTERNAL_NIL_TOKEN;
    }
    return result;
  };
  return {
    middleware,
    startListening,
    stopListening,
    clearListeners: clearListenerMiddleware
  };
};

// src/dynamicMiddleware/index.ts

var createMiddlewareEntry = (middleware) => ({
  id: nanoid(),
  middleware,
  applied: /* @__PURE__ */ new Map()
});
var matchInstance = (instanceId) => (action) => action?.meta?.instanceId === instanceId;
var createDynamicMiddleware = () => {
  const instanceId = nanoid();
  const middlewareMap = /* @__PURE__ */ new Map();
  const withMiddleware = Object.assign(createAction("dynamicMiddleware/add", (...middlewares) => ({
    payload: middlewares,
    meta: {
      instanceId
    }
  })), {
    withTypes: () => withMiddleware
  });
  const addMiddleware = Object.assign(function addMiddleware2(...middlewares) {
    middlewares.forEach((middleware2) => {
      let entry = find(Array.from(middlewareMap.values()), (entry2) => entry2.middleware === middleware2);
      if (!entry) {
        entry = createMiddlewareEntry(middleware2);
      }
      middlewareMap.set(entry.id, entry);
    });
  }, {
    withTypes: () => addMiddleware
  });
  const getFinalMiddleware = (api) => {
    const appliedMiddleware = Array.from(middlewareMap.values()).map((entry) => emplace(entry.applied, api, {
      insert: () => entry.middleware(api)
    }));
    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.compose)(...appliedMiddleware);
  };
  const isWithMiddleware = isAllOf(withMiddleware, matchInstance(instanceId));
  const middleware = (api) => (next) => (action) => {
    if (isWithMiddleware(action)) {
      addMiddleware(...action.payload);
      return api.dispatch;
    }
    return getFinalMiddleware(api)(next)(action);
  };
  return {
    middleware,
    addMiddleware,
    withMiddleware,
    instanceId
  };
};

// src/combineSlices.ts

var isSliceLike = (maybeSliceLike) => "reducerPath" in maybeSliceLike && typeof maybeSliceLike.reducerPath === "string";
var getReducers = (slices) => slices.flatMap((sliceOrMap) => isSliceLike(sliceOrMap) ? [[sliceOrMap.reducerPath, sliceOrMap.reducer]] : Object.entries(sliceOrMap));
var ORIGINAL_STATE = Symbol.for("rtk-state-proxy-original");
var isStateProxy = (value) => !!value && !!value[ORIGINAL_STATE];
var stateProxyMap = /* @__PURE__ */ new WeakMap();
var createStateProxy = (state, reducerMap) => emplace(stateProxyMap, state, {
  insert: () => new Proxy(state, {
    get: (target, prop, receiver) => {
      if (prop === ORIGINAL_STATE)
        return target;
      const result = Reflect.get(target, prop, receiver);
      if (typeof result === "undefined") {
        const reducer = reducerMap[prop.toString()];
        if (reducer) {
          const reducerResult = reducer(void 0, {
            type: nanoid()
          });
          if (typeof reducerResult === "undefined") {
            throw new Error( false ? 0 : `The slice reducer for key "${prop.toString()}" returned undefined when called for selector(). If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
          }
          return reducerResult;
        }
      }
      return result;
    }
  })
});
var original = (state) => {
  if (!isStateProxy(state)) {
    throw new Error( false ? 0 : "original must be used on state Proxy");
  }
  return state[ORIGINAL_STATE];
};
var noopReducer = (state = {}) => state;
function combineSlices(...slices) {
  const reducerMap = Object.fromEntries(getReducers(slices));
  const getReducer = () => Object.keys(reducerMap).length ? (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducerMap) : noopReducer;
  let reducer = getReducer();
  function combinedReducer(state, action) {
    return reducer(state, action);
  }
  combinedReducer.withLazyLoadedSlices = () => combinedReducer;
  const inject = (slice, config = {}) => {
    const {
      reducerPath,
      reducer: reducerToInject
    } = slice;
    const currentReducer = reducerMap[reducerPath];
    if (!config.overrideExisting && currentReducer && currentReducer !== reducerToInject) {
      if (typeof process !== "undefined" && "development" === "development") {
        console.error(`called \`inject\` to override already-existing reducer ${reducerPath} without specifying \`overrideExisting: true\``);
      }
      return combinedReducer;
    }
    reducerMap[reducerPath] = reducerToInject;
    reducer = getReducer();
    return combinedReducer;
  };
  const selector = Object.assign(function makeSelector(selectorFn, selectState) {
    return function selector2(state, ...args) {
      return selectorFn(createStateProxy(selectState ? selectState(state, ...args) : state, reducerMap), ...args);
    };
  }, {
    original
  });
  return Object.assign(combinedReducer, {
    inject,
    selector
  });
}

// src/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
  return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}

//# sourceMappingURL=redux-toolkit.modern.mjs.map

/***/ }),

/***/ "./node_modules/immer/dist/immer.mjs":
/*!*******************************************!*\
  !*** ./node_modules/immer/dist/immer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ Immer2),
/* harmony export */   applyPatches: () => (/* binding */ applyPatches),
/* harmony export */   castDraft: () => (/* binding */ castDraft),
/* harmony export */   castImmutable: () => (/* binding */ castImmutable),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   current: () => (/* binding */ current),
/* harmony export */   enableMapSet: () => (/* binding */ enableMapSet),
/* harmony export */   enablePatches: () => (/* binding */ enablePatches),
/* harmony export */   finishDraft: () => (/* binding */ finishDraft),
/* harmony export */   freeze: () => (/* binding */ freeze),
/* harmony export */   immerable: () => (/* binding */ DRAFTABLE),
/* harmony export */   isDraft: () => (/* binding */ isDraft),
/* harmony export */   isDraftable: () => (/* binding */ isDraftable),
/* harmony export */   nothing: () => (/* binding */ NOTHING),
/* harmony export */   original: () => (/* binding */ original),
/* harmony export */   produce: () => (/* binding */ produce),
/* harmony export */   produceWithPatches: () => (/* binding */ produceWithPatches),
/* harmony export */   setAutoFreeze: () => (/* binding */ setAutoFreeze),
/* harmony export */   setUseStrictShallowCopy: () => (/* binding */ setUseStrictShallowCopy)
/* harmony export */ });
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  true ? [
  // All error codes, starting by 0:
  function(plugin) {
    return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
  },
  function(thing) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return `'current' expects a draft, got: ${thing}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return `'original' expects a draft, got: ${thing}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : 0;
function die(error, ...args) {
  if (true) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0 /* Object */) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (t === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if ( true && childValue === targetObject)
    die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if ( true && isNaN(parseInt(prop)))
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if ( true && prop !== "length" && isNaN(parseInt(prop)))
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (true) {
    errors.push(
      'Sets cannot have "replace" patches.',
      function(op) {
        return "Unsupported patch operation: " + op;
      },
      function(path) {
        return "Cannot apply patch, path doesn't resolve: " + path;
      },
      "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
    );
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches,
          inversePatches
        );
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(
          state,
          basePath,
          patches,
          inversePatches
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? { op, path } : { op, path, value });
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor"))
          die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype")
          die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object")
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (Array.isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}

//# sourceMappingURL=immer.mjs.map

/***/ }),

/***/ "./node_modules/react-redux/dist/react-redux.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/dist/react-redux.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* binding */ Provider_default),
/* harmony export */   ReactReduxContext: () => (/* binding */ ReactReduxContext),
/* harmony export */   batch: () => (/* binding */ batch),
/* harmony export */   connect: () => (/* binding */ connect_default),
/* harmony export */   createDispatchHook: () => (/* binding */ createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* binding */ createSelectorHook),
/* harmony export */   createStoreHook: () => (/* binding */ createStoreHook),
/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch),
/* harmony export */   useSelector: () => (/* binding */ useSelector),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var use_sync_external_store_with_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sync-external-store/with-selector.js */ "./node_modules/use-sync-external-store/with-selector.js");
// src/index.ts



// src/utils/react.ts

var React = (
  // prettier-ignore
  // @ts-ignore
   true ? react__WEBPACK_IMPORTED_MODULE_0__ : /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))
);

// src/components/Context.ts
var ContextKey = Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  if (!React.createContext)
    return {};
  const contextMap = gT[ContextKey] ?? (gT[ContextKey] = /* @__PURE__ */ new Map());
  let realContext = contextMap.get(React.createContext);
  if (!realContext) {
    realContext = React.createContext(
      null
    );
    if (true) {
      realContext.displayName = "ReactRedux";
    }
    contextMap.set(React.createContext, realContext);
  }
  return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();

// src/utils/useSyncExternalStore.ts
var notInitialized = () => {
  throw new Error("uSES not initialized!");
};

// src/hooks/useReduxContext.ts
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = React.useContext(context);
    if ( true && !contextValue) {
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    }
    return contextValue;
  };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();

// src/hooks/useSelector.ts
var useSyncExternalStoreWithSelector = notInitialized;
var initializeUseSelector = (fn) => {
  useSyncExternalStoreWithSelector = fn;
};
var refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  const useSelector2 = (selector, equalityFnOrOptions = {}) => {
    const { equalityFn = refEquality, devModeChecks = {} } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
    if (true) {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }
      if (typeof selector !== "function") {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }
      if (typeof equalityFn !== "function") {
        throw new Error(
          `You must pass a function as an equality function to useSelector`
        );
      }
    }
    const {
      store,
      subscription,
      getServerState,
      stabilityCheck,
      identityFunctionCheck
    } = useReduxContext2();
    const firstRun = React.useRef(true);
    const wrappedSelector = React.useCallback(
      {
        [selector.name](state) {
          const selected = selector(state);
          if (true) {
            const {
              identityFunctionCheck: finalIdentityFunctionCheck,
              stabilityCheck: finalStabilityCheck
            } = {
              stabilityCheck,
              identityFunctionCheck,
              ...devModeChecks
            };
            if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
              const toCompare = selector(state);
              if (!equalityFn(selected, toCompare)) {
                let stack = void 0;
                try {
                  throw new Error();
                } catch (e) {
                  ;
                  ({ stack } = e);
                }
                console.warn(
                  "Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization",
                  {
                    state,
                    selected,
                    selected2: toCompare,
                    stack
                  }
                );
              }
            }
            if (finalIdentityFunctionCheck === "always" || finalIdentityFunctionCheck === "once" && firstRun.current) {
              if (selected === state) {
                let stack = void 0;
                try {
                  throw new Error();
                } catch (e) {
                  ;
                  ({ stack } = e);
                }
                console.warn(
                  "Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.",
                  { stack }
                );
              }
            }
            if (firstRun.current)
              firstRun.current = false;
          }
          return selected;
        }
      }[selector.name],
      [selector, stabilityCheck, devModeChecks.stabilityCheck]
    );
    const selectedState = useSyncExternalStoreWithSelector(
      subscription.addNestedSub,
      store.getState,
      getServerState || store.getState,
      wrappedSelector,
      equalityFn
    );
    React.useDebugValue(selectedState);
    return selectedState;
  };
  Object.assign(useSelector2, {
    withTypes: () => useSelector2
  });
  return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();

// src/utils/react-is.ts
var REACT_ELEMENT_TYPE = Symbol.for("react.element");
var REACT_PORTAL_TYPE = Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
var REACT_CONTEXT_TYPE = Symbol.for("react.context");
var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
var REACT_MEMO_TYPE = Symbol.for("react.memo");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function isValidElementType(type) {
  if (typeof type === "string" || typeof type === "function") {
    return true;
  }
  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE) {
    return true;
  }
  if (typeof type === "object" && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_CLIENT_REFERENCE || type.getModuleId !== void 0) {
      return true;
    }
  }
  return false;
}
function typeOf(object) {
  if (typeof object === "object" && object !== null) {
    const $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE: {
        const type = object.type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;
          default: {
            const $$typeofType = type && type.$$typeof;
            switch ($$typeofType) {
              case REACT_SERVER_CONTEXT_TYPE:
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
          }
        }
      }
      case REACT_PORTAL_TYPE: {
        return $$typeof;
      }
    }
  }
  return void 0;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}

// src/utils/warning.ts
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// src/connect/verifySubselectors.ts
function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
    if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
      warning(
        `The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`
      );
    }
  }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, "mapStateToProps");
  verify(mapDispatchToProps, "mapDispatchToProps");
  verify(mergeProps, "mergeProps");
}

// src/connect/selectorFactory.ts
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(
      nextState,
      state,
      nextOwnProps,
      ownProps
    );
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged)
      return handleNewPropsAndNewState();
    if (propsChanged)
      return handleNewProps();
    if (stateChanged)
      return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, {
  initMapStateToProps,
  initMapDispatchToProps,
  initMergeProps,
  ...options
}) {
  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);
  if (true) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps);
  }
  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

// src/utils/bindActionCreators.ts
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }
  return boundActionCreators;
}

// src/utils/isPlainObject.ts
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  const proto = Object.getPrototypeOf(obj);
  if (proto === null)
    return true;
  let baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}

// src/utils/verifyPlainObject.ts
function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(
      `${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`
    );
  }
}

// src/connect/wrapMapToProps.ts
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, { displayName }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      if (true)
        verifyPlainObject(props, displayName, methodName);
      return props;
    };
    return proxy;
  };
}

// src/connect/invalidArgFactory.ts
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(
      `Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`
    );
  };
}

// src/connect/mapDispatchToProps.ts
function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant(
    (dispatch) => (
      // @ts-ignore
      bindActionCreators(mapDispatchToProps, dispatch)
    )
  ) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch) => ({
    dispatch
  })) : typeof mapDispatchToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps")
  ) : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}

// src/connect/mapStateToProps.ts
function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : typeof mapStateToProps === "function" ? (
    // @ts-ignore
    wrapMapToPropsFunc(mapStateToProps, "mapStateToProps")
  ) : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}

// src/connect/mergeProps.ts
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true)
          verifyPlainObject(mergedProps, displayName, "mergeProps");
      }
      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
}

// src/utils/batch.ts
function defaultNoopBatch(callback) {
  callback();
}

// src/utils/Subscription.ts
function createListenerCollection() {
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      defaultNoopBatch(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      const listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      const listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}

// src/utils/useIsomorphicLayoutEffect.ts
var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isReactNative = typeof navigator !== "undefined" && navigator.product === "ReactNative";
var useIsomorphicLayoutEffect = canUseDOM || isReactNative ? React.useLayoutEffect : React.useEffect;

// src/utils/shallowEqual.ts
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// src/utils/hoistStatics.ts
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {
  [ForwardRef]: FORWARD_REF_STATICS,
  [Memo]: MEMO_STATICS
};
function getStatics(component) {
  if (isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      const inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent);
      }
    }
    let keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    const targetStatics = getStatics(targetComponent);
    const sourceStatics = getStatics(sourceComponent);
    for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {
        }
      }
    }
  }
  return targetComponent;
}

// src/components/connect.tsx
var useSyncExternalStore = notInitialized;
var initializeConnect = (fn) => {
  useSyncExternalStore = fn;
};
var NO_SUBSCRIPTION_ARRAY = [null, null];
var stringifyComponent = (Comp) => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(() => effectFunc(...effectArgs), dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
  if (!shouldHandleStateChanges)
    return () => {
    };
  let didUnsubscribe = false;
  let lastThrownError = null;
  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      return;
    }
    const latestStoreState = store.getState();
    let newChildProps, error;
    try {
      newChildProps = childPropsSelector(
        latestStoreState,
        lastWrapperProps.current
      );
    } catch (e) {
      error = e;
      lastThrownError = e;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      additionalSubscribeListener();
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
function strictEqual(a, b) {
  return a === b;
}
var hasWarnedAboutDeprecatedPureOption = false;
function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = shallowEqual,
  areStatePropsEqual = shallowEqual,
  areMergedPropsEqual = shallowEqual,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = ReactReduxContext
} = {}) {
  if (true) {
    if (pure !== void 0 && !hasWarnedAboutDeprecatedPureOption) {
      hasWarnedAboutDeprecatedPureOption = true;
      warning(
        'The `pure` option has been removed. `connect` is now always a "pure/memoized" component'
      );
    }
  }
  const Context = context;
  const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
  const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
  const initMergeProps = mergePropsFactory(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);
  const wrapWithConnect = (WrappedComponent) => {
    if (true) {
      const isValid = /* @__PURE__ */ isValidElementType(WrappedComponent);
      if (!isValid)
        throw new Error(
          `You must pass a component to the function returned by connect. Instead received ${stringifyComponent(
            WrappedComponent
          )}`
        );
    }
    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };
    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = React.useMemo(() => {
        const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]);
      const ContextToUse = React.useMemo(() => {
        let ResultContext = Context;
        if (propsContext?.Consumer) {
          if (true) {
            const isValid = /* @__PURE__ */ isContextConsumer(
              // @ts-ignore
              /* @__PURE__ */ React.createElement(propsContext.Consumer, null)
            );
            if (!isValid) {
              throw new Error(
                "You must pass a valid React context consumer as `props.context`"
              );
            }
            ResultContext = propsContext;
          }
        }
        return ResultContext;
      }, [propsContext, Context]);
      const contextValue = React.useContext(ContextToUse);
      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error(
          `Could not find "store" in the context of "${displayName}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${displayName} in connect options.`
        );
      }
      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = React.useMemo(() => {
        return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = React.useMemo(() => {
        if (!shouldHandleStateChanges)
          return NO_SUBSCRIPTION_ARRAY;
        const subscription2 = createSubscription(
          store,
          didStoreComeFromProps ? void 0 : contextValue.subscription
        );
        const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]);
      const overriddenContextValue = React.useMemo(() => {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return {
          ...contextValue,
          subscription
        };
      }, [didStoreComeFromProps, contextValue, subscription]);
      const lastChildProps = React.useRef(void 0);
      const lastWrapperProps = React.useRef(wrapperProps);
      const childPropsFromStoreUpdate = React.useRef(void 0);
      const renderIsScheduled = React.useRef(false);
      const isMounted = React.useRef(false);
      const latestSubscriptionCallbackError = React.useRef(
        void 0
      );
      useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = React.useMemo(() => {
        const selector = () => {
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          }
          return childPropsSelector(store.getState(), wrapperProps);
        };
        return selector;
      }, [store, wrapperProps]);
      const subscribeForReact = React.useMemo(() => {
        const subscribe = (reactListener) => {
          if (!subscription) {
            return () => {
            };
          }
          return subscribeUpdates(
            shouldHandleStateChanges,
            store,
            subscription,
            // @ts-ignore
            childPropsSelector,
            lastWrapperProps,
            lastChildProps,
            renderIsScheduled,
            isMounted,
            childPropsFromStoreUpdate,
            notifyNestedSubs,
            reactListener
          );
        };
        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
        lastWrapperProps,
        lastChildProps,
        renderIsScheduled,
        wrapperProps,
        childPropsFromStoreUpdate,
        notifyNestedSubs
      ]);
      let actualChildProps;
      try {
        actualChildProps = useSyncExternalStore(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          subscribeForReact,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          actualChildPropsSelector,
          getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector
        );
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `
The error may be correlated with this previous error:
${latestSubscriptionCallbackError.current.stack}

`;
        }
        throw err;
      }
      useIsomorphicLayoutEffect(() => {
        latestSubscriptionCallbackError.current = void 0;
        childPropsFromStoreUpdate.current = void 0;
        lastChildProps.current = actualChildProps;
      });
      const renderedWrappedComponent = React.useMemo(() => {
        return (
          // @ts-ignore
          /* @__PURE__ */ React.createElement(
            WrappedComponent,
            {
              ...actualChildProps,
              ref: reactReduxForwardedRef
            }
          )
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      const renderedChild = React.useMemo(() => {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React.createElement(ContextToUse.Provider, { value: overriddenContextValue }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    const _Connect = React.memo(ConnectFunction);
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      const _forwarded = React.forwardRef(
        function forwardConnectRef(props, ref) {
          return /* @__PURE__ */ React.createElement(Connect, { ...props, reactReduxForwardedRef: ref });
        }
      );
      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
    }
    return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
  };
  return wrapWithConnect;
}
var connect_default = connect;

// src/components/Provider.tsx
function Provider({
  store,
  context,
  children,
  serverState,
  stabilityCheck = "once",
  identityFunctionCheck = "once"
}) {
  const contextValue = React.useMemo(() => {
    const subscription = createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : void 0,
      stabilityCheck,
      identityFunctionCheck
    };
  }, [store, serverState, stabilityCheck, identityFunctionCheck]);
  const previousState = React.useMemo(() => store.getState(), [store]);
  useIsomorphicLayoutEffect(() => {
    const { subscription } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ React.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;

// src/hooks/useStore.ts
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext2 = context === ReactReduxContext ? useReduxContext : (
    // @ts-ignore
    createReduxContextHook(context)
  );
  const useStore2 = () => {
    const { store } = useReduxContext2();
    return store;
  };
  Object.assign(useStore2, {
    withTypes: () => useStore2
  });
  return useStore2;
}
var useStore = /* @__PURE__ */ createStoreHook();

// src/hooks/useDispatch.ts
function createDispatchHook(context = ReactReduxContext) {
  const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  const useDispatch2 = () => {
    const store = useStore2();
    return store.dispatch;
  };
  Object.assign(useDispatch2, {
    withTypes: () => useDispatch2
  });
  return useDispatch2;
}
var useDispatch = /* @__PURE__ */ createDispatchHook();

// src/exports.ts
var batch = defaultNoopBatch;

// src/index.ts
initializeUseSelector(use_sync_external_store_with_selector_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStoreWithSelector);
initializeConnect(react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore);

//# sourceMappingURL=react-redux.mjs.map

/***/ }),

/***/ "./node_modules/redux-thunk/dist/redux-thunk.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/redux-thunk/dist/redux-thunk.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   thunk: () => (/* binding */ thunk),
/* harmony export */   withExtraArgument: () => (/* binding */ withExtraArgument)
/* harmony export */ });
// src/index.ts
function createThunkMiddleware(extraArgument) {
  const middleware = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
  return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;



/***/ }),

/***/ "./node_modules/redux/dist/redux.mjs":
/*!*******************************************!*\
  !*** ./node_modules/redux/dist/redux.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __DO_NOT_USE__ActionTypes: () => (/* binding */ actionTypes_default),
/* harmony export */   applyMiddleware: () => (/* binding */ applyMiddleware),
/* harmony export */   bindActionCreators: () => (/* binding */ bindActionCreators),
/* harmony export */   combineReducers: () => (/* binding */ combineReducers),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   isAction: () => (/* binding */ isAction),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   legacy_createStore: () => (/* binding */ legacy_createStore)
/* harmony export */ });
// src/utils/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}

// src/utils/symbol-observable.ts
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;

// src/utils/actionTypes.ts
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;

// src/utils/isPlainObject.ts
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}

// src/utils/kindOf.ts
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  const type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  const constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  let typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}

// src/createStore.ts
function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error( false ? 0 : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error( false ? 0 : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error( false ? 0 : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener, key) => {
        nextListeners.set(key, listener);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error( false ? 0 : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
    }
    if (isDispatching) {
      throw new Error( false ? 0 : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error( false ? 0 : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    }
    if (typeof action.type === "undefined") {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (typeof action.type !== "string") {
      throw new Error( false ? 0 : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
    }
    if (isDispatching) {
      throw new Error( false ? 0 : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener) => {
      listener();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error( false ? 0 : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error( false ? 0 : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
  return createStore(reducer, preloadedState, enhancer);
}

// src/utils/warning.ts
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// src/combineReducers.ts
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  const reducerKeys = Object.keys(reducers);
  const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }
  if (!isPlainObject(inputState)) {
    return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
  }
  const unexpectedKeys = Object.keys(inputState).filter((key) => !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
  unexpectedKeys.forEach((key) => {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === actionTypes_default.REPLACE)
    return;
  if (unexpectedKeys.length > 0) {
    return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
  }
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach((key) => {
    const reducer = reducers[key];
    const initialState = reducer(void 0, {
      type: actionTypes_default.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error( false ? 0 : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    }
    if (typeof reducer(void 0, {
      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error( false ? 0 : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
    }
  });
}
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (true) {
      if (typeof reducers[key] === "undefined") {
        warning(`No reducer provided for key "${key}"`);
      }
    }
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  let unexpectedKeyCache;
  if (true) {
    unexpectedKeyCache = {};
  }
  let shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (true) {
      const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        const actionType = action && action.type;
        throw new Error( false ? 0 : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

// src/bindActionCreators.ts
function bindActionCreator(actionCreator, dispatch) {
  return function(...args) {
    return dispatch(actionCreator.apply(this, args));
  };
}
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error( false ? 0 : `bindActionCreators expected an object or a function, but instead received: '${kindOf(actionCreators)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  }
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

// src/compose.ts
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// src/applyMiddleware.ts
function applyMiddleware(...middlewares) {
  return (createStore2) => (reducer, preloadedState) => {
    const store = createStore2(reducer, preloadedState);
    let dispatch = () => {
      throw new Error( false ? 0 : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}

// src/utils/isAction.ts
function isAction(action) {
  return isPlainObject(action) && "type" in action && typeof action.type === "string";
}

//# sourceMappingURL=redux.mjs.map

/***/ }),

/***/ "./node_modules/reselect/dist/reselect.mjs":
/*!*************************************************!*\
  !*** ./node_modules/reselect/dist/reselect.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelector: () => (/* binding */ createSelector),
/* harmony export */   createSelectorCreator: () => (/* binding */ createSelectorCreator),
/* harmony export */   createStructuredSelector: () => (/* binding */ createStructuredSelector),
/* harmony export */   lruMemoize: () => (/* binding */ lruMemoize),
/* harmony export */   referenceEqualityCheck: () => (/* binding */ referenceEqualityCheck),
/* harmony export */   setGlobalDevModeChecks: () => (/* binding */ setGlobalDevModeChecks),
/* harmony export */   unstable_autotrackMemoize: () => (/* binding */ autotrackMemoize),
/* harmony export */   weakMapMemoize: () => (/* binding */ weakMapMemoize)
/* harmony export */ });
// src/devModeChecks/identityFunctionCheck.ts
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult) => {
  if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
    let isInputSameAsOutput = false;
    try {
      const emptyObject = {};
      if (resultFunc(emptyObject) === emptyObject)
        isInputSameAsOutput = true;
    } catch {
    }
    if (isInputSameAsOutput) {
      let stack = void 0;
      try {
        throw new Error();
      } catch (e) {
        ;
        ({ stack } = e);
      }
      console.warn(
        "The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.",
        { stack }
      );
    }
  }
};

// src/devModeChecks/inputStabilityCheck.ts
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs) => {
  const { memoize, memoizeOptions } = options;
  const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
  const createAnEmptyObject = memoize(() => ({}), ...memoizeOptions);
  const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
  if (!areInputSelectorResultsEqual) {
    let stack = void 0;
    try {
      throw new Error();
    } catch (e) {
      ;
      ({ stack } = e);
    }
    console.warn(
      "An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`",
      {
        arguments: inputSelectorArgs,
        firstInputs: inputSelectorResults,
        secondInputs: inputSelectorResultsCopy,
        stack
      }
    );
  }
};

// src/devModeChecks/setGlobalDevModeChecks.ts
var globalDevModeChecks = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
var setGlobalDevModeChecks = (devModeChecks) => {
  Object.assign(globalDevModeChecks, devModeChecks);
};

// src/utils.ts
var NOT_FOUND = "NOT_FOUND";
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
  if (typeof func !== "function") {
    throw new TypeError(errorMessage);
  }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
  if (typeof object !== "object") {
    throw new TypeError(errorMessage);
  }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
  if (!array.every((item) => typeof item === "function")) {
    const itemTypes = array.map(
      (item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item
    ).join(", ");
    throw new TypeError(`${errorMessage}[${itemTypes}]`);
  }
}
var ensureIsArray = (item) => {
  return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
  const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
  assertIsArrayOfFunctions(
    dependencies,
    `createSelector expects all input-selectors to be functions, but received the following types: `
  );
  return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
  const inputSelectorResults = [];
  const { length } = dependencies;
  for (let i = 0; i < length; i++) {
    inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
  }
  return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks) => {
  const { identityFunctionCheck, inputStabilityCheck } = {
    ...globalDevModeChecks,
    ...devModeChecks
  };
  return {
    identityFunctionCheck: {
      shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
      run: runIdentityFunctionCheck
    },
    inputStabilityCheck: {
      shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
      run: runInputStabilityCheck
    }
  };
};

// src/autotrackMemoize/autotracking.ts
var $REVISION = 0;
var CURRENT_TRACKER = null;
var Cell = class {
  revision = $REVISION;
  _value;
  _lastValue;
  _isEqual = tripleEq;
  constructor(initialValue, isEqual = tripleEq) {
    this._value = this._lastValue = initialValue;
    this._isEqual = isEqual;
  }
  // Whenever a storage value is read, it'll add itself to the current tracker if
  // one exists, entangling its state with that cache.
  get value() {
    CURRENT_TRACKER?.add(this);
    return this._value;
  }
  // Whenever a storage value is updated, we bump the global revision clock,
  // assign the revision for this storage to the new value, _and_ we schedule a
  // rerender. This is important, and it's what makes autotracking  _pull_
  // based. We don't actively tell the caches which depend on the storage that
  // anything has happened. Instead, we recompute the caches when needed.
  set value(newValue) {
    if (this.value === newValue)
      return;
    this._value = newValue;
    this.revision = ++$REVISION;
  }
};
function tripleEq(a, b) {
  return a === b;
}
var TrackingCache = class {
  _cachedValue;
  _cachedRevision = -1;
  _deps = [];
  hits = 0;
  fn;
  constructor(fn) {
    this.fn = fn;
  }
  clear() {
    this._cachedValue = void 0;
    this._cachedRevision = -1;
    this._deps = [];
    this.hits = 0;
  }
  get value() {
    if (this.revision > this._cachedRevision) {
      const { fn } = this;
      const currentTracker = /* @__PURE__ */ new Set();
      const prevTracker = CURRENT_TRACKER;
      CURRENT_TRACKER = currentTracker;
      this._cachedValue = fn();
      CURRENT_TRACKER = prevTracker;
      this.hits++;
      this._deps = Array.from(currentTracker);
      this._cachedRevision = this.revision;
    }
    CURRENT_TRACKER?.add(this);
    return this._cachedValue;
  }
  get revision() {
    return Math.max(...this._deps.map((d) => d.revision), 0);
  }
};
function getValue(cell) {
  if (!(cell instanceof Cell)) {
    console.warn("Not a valid cell! ", cell);
  }
  return cell.value;
}
function setValue(storage, value) {
  if (!(storage instanceof Cell)) {
    throw new TypeError(
      "setValue must be passed a tracked store created with `createStorage`."
    );
  }
  storage.value = storage._lastValue = value;
}
function createCell(initialValue, isEqual = tripleEq) {
  return new Cell(initialValue, isEqual);
}
function createCache(fn) {
  assertIsFunction(
    fn,
    "the first parameter to `createCache` must be a function"
  );
  return new TrackingCache(fn);
}

// src/autotrackMemoize/tracking.ts
var neverEq = (a, b) => false;
function createTag() {
  return createCell(null, neverEq);
}
function dirtyTag(tag, value) {
  setValue(tag, value);
}
var consumeCollection = (node) => {
  let tag = node.collectionTag;
  if (tag === null) {
    tag = node.collectionTag = createTag();
  }
  getValue(tag);
};
var dirtyCollection = (node) => {
  const tag = node.collectionTag;
  if (tag !== null) {
    dirtyTag(tag, null);
  }
};

// src/autotrackMemoize/proxy.ts
var REDUX_PROXY_LABEL = Symbol();
var nextId = 0;
var proto = Object.getPrototypeOf({});
var ObjectTreeNode = class {
  constructor(value) {
    this.value = value;
    this.value = value;
    this.tag.value = value;
  }
  proxy = new Proxy(this, objectProxyHandler);
  tag = createTag();
  tags = {};
  children = {};
  collectionTag = null;
  id = nextId++;
};
var objectProxyHandler = {
  get(node, key) {
    function calculateResult() {
      const { value } = node;
      const childValue = Reflect.get(value, key);
      if (typeof key === "symbol") {
        return childValue;
      }
      if (key in proto) {
        return childValue;
      }
      if (typeof childValue === "object" && childValue !== null) {
        let childNode = node.children[key];
        if (childNode === void 0) {
          childNode = node.children[key] = createNode(childValue);
        }
        if (childNode.tag) {
          getValue(childNode.tag);
        }
        return childNode.proxy;
      } else {
        let tag = node.tags[key];
        if (tag === void 0) {
          tag = node.tags[key] = createTag();
          tag.value = childValue;
        }
        getValue(tag);
        return childValue;
      }
    }
    const res = calculateResult();
    return res;
  },
  ownKeys(node) {
    consumeCollection(node);
    return Reflect.ownKeys(node.value);
  },
  getOwnPropertyDescriptor(node, prop) {
    return Reflect.getOwnPropertyDescriptor(node.value, prop);
  },
  has(node, prop) {
    return Reflect.has(node.value, prop);
  }
};
var ArrayTreeNode = class {
  constructor(value) {
    this.value = value;
    this.value = value;
    this.tag.value = value;
  }
  proxy = new Proxy([this], arrayProxyHandler);
  tag = createTag();
  tags = {};
  children = {};
  collectionTag = null;
  id = nextId++;
};
var arrayProxyHandler = {
  get([node], key) {
    if (key === "length") {
      consumeCollection(node);
    }
    return objectProxyHandler.get(node, key);
  },
  ownKeys([node]) {
    return objectProxyHandler.ownKeys(node);
  },
  getOwnPropertyDescriptor([node], prop) {
    return objectProxyHandler.getOwnPropertyDescriptor(node, prop);
  },
  has([node], prop) {
    return objectProxyHandler.has(node, prop);
  }
};
function createNode(value) {
  if (Array.isArray(value)) {
    return new ArrayTreeNode(value);
  }
  return new ObjectTreeNode(value);
}
function updateNode(node, newValue) {
  const { value, tags, children } = node;
  node.value = newValue;
  if (Array.isArray(value) && Array.isArray(newValue) && value.length !== newValue.length) {
    dirtyCollection(node);
  } else {
    if (value !== newValue) {
      let oldKeysSize = 0;
      let newKeysSize = 0;
      let anyKeysAdded = false;
      for (const _key in value) {
        oldKeysSize++;
      }
      for (const key in newValue) {
        newKeysSize++;
        if (!(key in value)) {
          anyKeysAdded = true;
          break;
        }
      }
      const isDifferent = anyKeysAdded || oldKeysSize !== newKeysSize;
      if (isDifferent) {
        dirtyCollection(node);
      }
    }
  }
  for (const key in tags) {
    const childValue = value[key];
    const newChildValue = newValue[key];
    if (childValue !== newChildValue) {
      dirtyCollection(node);
      dirtyTag(tags[key], newChildValue);
    }
    if (typeof newChildValue === "object" && newChildValue !== null) {
      delete tags[key];
    }
  }
  for (const key in children) {
    const childNode = children[key];
    const newChildValue = newValue[key];
    const childValue = childNode.value;
    if (childValue === newChildValue) {
      continue;
    } else if (typeof newChildValue === "object" && newChildValue !== null) {
      updateNode(childNode, newChildValue);
    } else {
      deleteNode(childNode);
      delete children[key];
    }
  }
}
function deleteNode(node) {
  if (node.tag) {
    dirtyTag(node.tag, null);
  }
  dirtyCollection(node);
  for (const key in node.tags) {
    dirtyTag(node.tags[key], null);
  }
  for (const key in node.children) {
    deleteNode(node.children[key]);
  }
}

// src/lruMemoize.ts
function createSingletonCache(equals) {
  let entry;
  return {
    get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put(key, value) {
      entry = { key, value };
    },
    getEntries() {
      return entry ? [entry] : [];
    },
    clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  let entries = [];
  function get(key) {
    const cacheIndex = entries.findIndex((entry) => equals(key, entry.key));
    if (cacheIndex > -1) {
      const entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({ key, value });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return { get, put, getEntries, clear };
}
var referenceEqualityCheck = (a, b) => a === b;
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    const { length } = prev;
    for (let i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function lruMemoize(func, equalityCheckOrOptions) {
  const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : { equalityCheck: equalityCheckOrOptions };
  const {
    equalityCheck = referenceEqualityCheck,
    maxSize = 1,
    resultEqualityCheck
  } = providedOptions;
  const comparator = createCacheKeyComparator(equalityCheck);
  let resultsCount = 0;
  const cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    let value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const entries = cache.getEntries();
        const matchingEntry = entries.find(
          (entry) => resultEqualityCheck(entry.value, value)
        );
        if (matchingEntry) {
          value = matchingEntry.value;
          resultsCount !== 0 && resultsCount--;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = () => {
    cache.clear();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}

// src/autotrackMemoize/autotrackMemoize.ts
function autotrackMemoize(func) {
  const node = createNode(
    []
  );
  let lastArgs = null;
  const shallowEqual = createCacheKeyComparator(referenceEqualityCheck);
  const cache = createCache(() => {
    const res = func.apply(null, node.proxy);
    return res;
  });
  function memoized() {
    if (!shallowEqual(lastArgs, arguments)) {
      updateNode(node, arguments);
      lastArgs = arguments;
    }
    return cache.value;
  }
  memoized.clearCache = () => {
    return cache.clear();
  };
  return memoized;
}

// src/weakMapMemoize.ts
var StrongRef = class {
  constructor(value) {
    this.value = value;
  }
  deref() {
    return this.value;
  }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
  return {
    s: UNTERMINATED,
    v: void 0,
    o: null,
    p: null
  };
}
function weakMapMemoize(func, options = {}) {
  let fnNode = createCacheNode();
  const { resultEqualityCheck } = options;
  let lastResult;
  let resultsCount = 0;
  function memoized() {
    let cacheNode = fnNode;
    const { length } = arguments;
    for (let i = 0, l = length; i < l; i++) {
      const arg = arguments[i];
      if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
        let objectCache = cacheNode.o;
        if (objectCache === null) {
          cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
        }
        const objectNode = objectCache.get(arg);
        if (objectNode === void 0) {
          cacheNode = createCacheNode();
          objectCache.set(arg, cacheNode);
        } else {
          cacheNode = objectNode;
        }
      } else {
        let primitiveCache = cacheNode.p;
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
        }
        const primitiveNode = primitiveCache.get(arg);
        if (primitiveNode === void 0) {
          cacheNode = createCacheNode();
          primitiveCache.set(arg, cacheNode);
        } else {
          cacheNode = primitiveNode;
        }
      }
    }
    const terminatedNode = cacheNode;
    let result;
    if (cacheNode.s === TERMINATED) {
      result = cacheNode.v;
    } else {
      result = func.apply(null, arguments);
      resultsCount++;
    }
    terminatedNode.s = TERMINATED;
    if (resultEqualityCheck) {
      const lastResultValue = lastResult?.deref?.() ?? lastResult;
      if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
        result = lastResultValue;
        resultsCount !== 0 && resultsCount--;
      }
      const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
      lastResult = needsWeakRef ? new Ref(result) : result;
    }
    terminatedNode.v = result;
    return result;
  }
  memoized.clearCache = () => {
    fnNode = createCacheNode();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}

// src/createSelectorCreator.ts
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
  const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
    memoize: memoizeOrOptions,
    memoizeOptions: memoizeOptionsFromArgs
  } : memoizeOrOptions;
  const createSelector2 = (...createSelectorArgs) => {
    let recomputations = 0;
    let dependencyRecomputations = 0;
    let lastResult;
    let directlyPassedOptions = {};
    let resultFunc = createSelectorArgs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = createSelectorArgs.pop();
    }
    assertIsFunction(
      resultFunc,
      `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`
    );
    const combinedOptions = {
      ...createSelectorCreatorOptions,
      ...directlyPassedOptions
    };
    const {
      memoize,
      memoizeOptions = [],
      argsMemoize = weakMapMemoize,
      argsMemoizeOptions = [],
      devModeChecks = {}
    } = combinedOptions;
    const finalMemoizeOptions = ensureIsArray(memoizeOptions);
    const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
    const dependencies = getDependencies(createSelectorArgs);
    const memoizedResultFunc = memoize(function recomputationWrapper() {
      recomputations++;
      return resultFunc.apply(
        null,
        arguments
      );
    }, ...finalMemoizeOptions);
    let firstRun = true;
    const selector = argsMemoize(function dependenciesChecker() {
      dependencyRecomputations++;
      const inputSelectorResults = collectInputSelectorResults(
        dependencies,
        arguments
      );
      lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
      if (true) {
        const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
        if (identityFunctionCheck.shouldRun) {
          identityFunctionCheck.run(
            resultFunc,
            inputSelectorResults,
            lastResult
          );
        }
        if (inputStabilityCheck.shouldRun) {
          const inputSelectorResultsCopy = collectInputSelectorResults(
            dependencies,
            arguments
          );
          inputStabilityCheck.run(
            { inputSelectorResults, inputSelectorResultsCopy },
            { memoize, memoizeOptions: finalMemoizeOptions },
            arguments
          );
        }
        if (firstRun)
          firstRun = false;
      }
      return lastResult;
    }, ...finalArgsMemoizeOptions);
    return Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      dependencyRecomputations: () => dependencyRecomputations,
      resetDependencyRecomputations: () => {
        dependencyRecomputations = 0;
      },
      lastResult: () => lastResult,
      recomputations: () => recomputations,
      resetRecomputations: () => {
        recomputations = 0;
      },
      memoize,
      argsMemoize
    });
  };
  Object.assign(createSelector2, {
    withTypes: () => createSelector2
  });
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);

// src/createStructuredSelector.ts
var createStructuredSelector = Object.assign(
  (inputSelectorsObject, selectorCreator = createSelector) => {
    assertIsObject(
      inputSelectorsObject,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`
    );
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map(
      (key) => inputSelectorsObject[key]
    );
    const structuredSelector = selectorCreator(
      dependencies,
      (...inputSelectorResults) => {
        return inputSelectorResults.reduce((composition, value, index) => {
          composition[inputSelectorKeys[index]] = value;
          return composition;
        }, {});
      }
    );
    return structuredSelector;
  },
  { withTypes: () => createStructuredSelector }
);

//# sourceMappingURL=reselect.mjs.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "blpage:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkblpage"] = globalThis["webpackChunkblpage"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _assets_css_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/main.scss */ "./src/assets/css/main.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");







react_dom__WEBPACK_IMPORTED_MODULE_1___default().render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById('bl-react-page-builder'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_5__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map