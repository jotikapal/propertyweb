import {
  require_classnames,
  require_prop_types
} from "./chunk-BVALOWWU.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  require_react
} from "./chunk-2FATVHAI.js";

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/interopRequireWildcard.js
var require_interopRequireWildcard = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireWildcard.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap)
        return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule)
        return e;
      if (null === e || "object" != _typeof2(e) && "function" != typeof e)
        return {
          "default": e
        };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e))
        return t.get(e);
      var n = {
        __proto__: null
      }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e)
        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
          var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
        }
      return n["default"] = e, t && t.set(e, n), n;
    }
    module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
  "node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    function _toPrimitive2(input, hint) {
      if (_typeof2(input) !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof2(res) !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    module.exports = _toPrimitive2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
  "node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function _toPropertyKey2(arg) {
      var key = toPrimitive(arg, "string");
      return _typeof2(key) === "symbol" ? key : String(key);
    }
    module.exports = _toPropertyKey2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperty2(obj, key, value) {
      key = toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = _defineProperty2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/objectSpread.js
var require_objectSpread = __commonJS({
  "node_modules/@babel/runtime/helpers/objectSpread.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? Object(arguments[i]) : {};
        var ownKeys2 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys2.push.apply(ownKeys2, Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys2.forEach(function(key) {
          defineProperty(target, key, source[key]);
        });
      }
      return target;
    }
    module.exports = _objectSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var require_objectWithoutProperties = __commonJS({
  "node_modules/@babel/runtime/helpers/objectWithoutProperties.js"(exports, module) {
    var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/assertThisInitialized.js
var require_assertThisInitialized = __commonJS({
  "node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module) {
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var require_possibleConstructorReturn = __commonJS({
  "node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    var assertThisInitialized = require_assertThisInitialized();
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof2(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return assertThisInitialized(self);
    }
    module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/getPrototypeOf.js
var require_getPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/getPrototypeOf.js"(exports, module) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _getPrototypeOf(o);
    }
    module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _setPrototypeOf(o, p);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/inherits.js
var require_inherits = __commonJS({
  "node_modules/@babel/runtime/helpers/inherits.js"(exports, module) {
    var setPrototypeOf = require_setPrototypeOf();
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass)
        setPrototypeOf(subClass, superClass);
    }
    module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var init_typeof = __esm({
  "node_modules/@babel/runtime/helpers/esm/typeof.js"() {
  }
});

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var init_toPrimitive = __esm({
  "node_modules/@babel/runtime/helpers/esm/toPrimitive.js"() {
    init_typeof();
  }
});

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
var init_toPropertyKey = __esm({
  "node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"() {
    init_typeof();
    init_toPrimitive();
  }
});

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var init_defineProperty = __esm({
  "node_modules/@babel/runtime/helpers/esm/defineProperty.js"() {
    init_toPropertyKey();
  }
});

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var init_objectSpread2 = __esm({
  "node_modules/@babel/runtime/helpers/esm/objectSpread2.js"() {
    init_defineProperty();
  }
});

// node_modules/redux/es/redux.js
var redux_exports = {};
__export(redux_exports, {
  __DO_NOT_USE__ActionTypes: () => ActionTypes,
  applyMiddleware: () => applyMiddleware,
  bindActionCreators: () => bindActionCreators,
  combineReducers: () => combineReducers,
  compose: () => compose,
  createStore: () => createStore,
  legacy_createStore: () => legacy_createStore
});
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  var type = typeof val;
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
  var constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
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
  var typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(false ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(false ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(false ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(false ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }
    if (typeof action.type === "undefined") {
      throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
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
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(false ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
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
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(false ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (reducerKeys.length === 0) {
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  }
  if (!isPlainObject(inputState)) {
    return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }
  var unexpectedKeys = Object.keys(inputState).filter(function(key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function(key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE)
    return;
  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer = reducers[key];
    var initialState = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error(false ? formatProdErrorMessage(12) : 'The slice reducer for key "' + key + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(false ? formatProdErrorMessage(13) : 'The slice reducer for key "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + ActionTypes.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];
    if (true) {
      if (typeof reducers[key] === "undefined") {
        warning('No reducer provided for key "' + key + '"');
      }
    }
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
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
      if (typeof nextStateForKey === "undefined") {
        var actionType = action && action.type;
        throw new Error(false ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? '"' + String(actionType) + '"' : "(unknown type)") + ', the slice reducer for key "' + _key + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(false ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a, b) {
    return function() {
      return a(b.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(false ? formatProdErrorMessage(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
var $$observable, randomString, ActionTypes, legacy_createStore;
var init_redux = __esm({
  "node_modules/redux/es/redux.js"() {
    init_objectSpread2();
    $$observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
    randomString = function randomString2() {
      return Math.random().toString(36).substring(7).split("").join(".");
    };
    ActionTypes = {
      INIT: "@@redux/INIT" + randomString(),
      REPLACE: "@@redux/REPLACE" + randomString(),
      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
      }
    };
    legacy_createStore = createStore;
  }
});

// node_modules/video-react/lib/actions/video.js
var require_video = __commonJS({
  "node_modules/video-react/lib/actions/video.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.handleLoadStart = handleLoadStart;
    exports.handleCanPlay = handleCanPlay;
    exports.handleWaiting = handleWaiting;
    exports.handleCanPlayThrough = handleCanPlayThrough;
    exports.handlePlaying = handlePlaying;
    exports.handlePlay = handlePlay;
    exports.handlePause = handlePause;
    exports.handleEnd = handleEnd;
    exports.handleSeeking = handleSeeking;
    exports.handleSeeked = handleSeeked;
    exports.handleDurationChange = handleDurationChange;
    exports.handleTimeUpdate = handleTimeUpdate;
    exports.handleVolumeChange = handleVolumeChange;
    exports.handleProgressChange = handleProgressChange;
    exports.handleRateChange = handleRateChange;
    exports.handleSuspend = handleSuspend;
    exports.handleAbort = handleAbort;
    exports.handleEmptied = handleEmptied;
    exports.handleStalled = handleStalled;
    exports.handleLoadedMetaData = handleLoadedMetaData;
    exports.handleLoadedData = handleLoadedData;
    exports.handleResize = handleResize;
    exports.handleError = handleError;
    exports.handleSeekingTime = handleSeekingTime;
    exports.handleEndSeeking = handleEndSeeking;
    exports.activateTextTrack = activateTextTrack;
    exports.ACTIVATE_TEXT_TRACK = exports.ERROR = exports.RESIZE = exports.LOADED_DATA = exports.LOADED_META_DATA = exports.STALLED = exports.EMPTIED = exports.ABORT = exports.SUSPEND = exports.RATE_CHANGE = exports.PROGRESS_CHANGE = exports.VOLUME_CHANGE = exports.TIME_UPDATE = exports.DURATION_CHANGE = exports.END_SEEKING = exports.SEEKING_TIME = exports.SEEKED = exports.SEEKING = exports.END = exports.PAUSE = exports.PLAY = exports.PLAYING = exports.CAN_PLAY_THROUGH = exports.WAITING = exports.CAN_PLAY = exports.LOAD_START = void 0;
    var LOAD_START = "video-react/LOAD_START";
    exports.LOAD_START = LOAD_START;
    var CAN_PLAY = "video-react/CAN_PLAY";
    exports.CAN_PLAY = CAN_PLAY;
    var WAITING = "video-react/WAITING";
    exports.WAITING = WAITING;
    var CAN_PLAY_THROUGH = "video-react/CAN_PLAY_THROUGH";
    exports.CAN_PLAY_THROUGH = CAN_PLAY_THROUGH;
    var PLAYING = "video-react/PLAYING";
    exports.PLAYING = PLAYING;
    var PLAY = "video-react/PLAY";
    exports.PLAY = PLAY;
    var PAUSE = "video-react/PAUSE";
    exports.PAUSE = PAUSE;
    var END = "video-react/END";
    exports.END = END;
    var SEEKING = "video-react/SEEKING";
    exports.SEEKING = SEEKING;
    var SEEKED = "video-react/SEEKED";
    exports.SEEKED = SEEKED;
    var SEEKING_TIME = "video-react/SEEKING_TIME";
    exports.SEEKING_TIME = SEEKING_TIME;
    var END_SEEKING = "video-react/END_SEEKING";
    exports.END_SEEKING = END_SEEKING;
    var DURATION_CHANGE = "video-react/DURATION_CHANGE";
    exports.DURATION_CHANGE = DURATION_CHANGE;
    var TIME_UPDATE = "video-react/TIME_UPDATE";
    exports.TIME_UPDATE = TIME_UPDATE;
    var VOLUME_CHANGE = "video-react/VOLUME_CHANGE";
    exports.VOLUME_CHANGE = VOLUME_CHANGE;
    var PROGRESS_CHANGE = "video-react/PROGRESS_CHANGE";
    exports.PROGRESS_CHANGE = PROGRESS_CHANGE;
    var RATE_CHANGE = "video-react/RATE_CHANGE";
    exports.RATE_CHANGE = RATE_CHANGE;
    var SUSPEND = "video-react/SUSPEND";
    exports.SUSPEND = SUSPEND;
    var ABORT = "video-react/ABORT";
    exports.ABORT = ABORT;
    var EMPTIED = "video-react/EMPTIED";
    exports.EMPTIED = EMPTIED;
    var STALLED = "video-react/STALLED";
    exports.STALLED = STALLED;
    var LOADED_META_DATA = "video-react/LOADED_META_DATA";
    exports.LOADED_META_DATA = LOADED_META_DATA;
    var LOADED_DATA = "video-react/LOADED_DATA";
    exports.LOADED_DATA = LOADED_DATA;
    var RESIZE = "video-react/RESIZE";
    exports.RESIZE = RESIZE;
    var ERROR = "video-react/ERROR";
    exports.ERROR = ERROR;
    var ACTIVATE_TEXT_TRACK = "video-react/ACTIVATE_TEXT_TRACK";
    exports.ACTIVATE_TEXT_TRACK = ACTIVATE_TEXT_TRACK;
    function handleLoadStart(videoProps) {
      return {
        type: LOAD_START,
        videoProps
      };
    }
    function handleCanPlay(videoProps) {
      return {
        type: CAN_PLAY,
        videoProps
      };
    }
    function handleWaiting(videoProps) {
      return {
        type: WAITING,
        videoProps
      };
    }
    function handleCanPlayThrough(videoProps) {
      return {
        type: CAN_PLAY_THROUGH,
        videoProps
      };
    }
    function handlePlaying(videoProps) {
      return {
        type: PLAYING,
        videoProps
      };
    }
    function handlePlay(videoProps) {
      return {
        type: PLAY,
        videoProps
      };
    }
    function handlePause(videoProps) {
      return {
        type: PAUSE,
        videoProps
      };
    }
    function handleEnd(videoProps) {
      return {
        type: END,
        videoProps
      };
    }
    function handleSeeking(videoProps) {
      return {
        type: SEEKING,
        videoProps
      };
    }
    function handleSeeked(videoProps) {
      return {
        type: SEEKED,
        videoProps
      };
    }
    function handleDurationChange(videoProps) {
      return {
        type: DURATION_CHANGE,
        videoProps
      };
    }
    function handleTimeUpdate(videoProps) {
      return {
        type: TIME_UPDATE,
        videoProps
      };
    }
    function handleVolumeChange(videoProps) {
      return {
        type: VOLUME_CHANGE,
        videoProps
      };
    }
    function handleProgressChange(videoProps) {
      return {
        type: PROGRESS_CHANGE,
        videoProps
      };
    }
    function handleRateChange(videoProps) {
      return {
        type: RATE_CHANGE,
        videoProps
      };
    }
    function handleSuspend(videoProps) {
      return {
        type: SUSPEND,
        videoProps
      };
    }
    function handleAbort(videoProps) {
      return {
        type: ABORT,
        videoProps
      };
    }
    function handleEmptied(videoProps) {
      return {
        type: EMPTIED,
        videoProps
      };
    }
    function handleStalled(videoProps) {
      return {
        type: STALLED,
        videoProps
      };
    }
    function handleLoadedMetaData(videoProps) {
      return {
        type: LOADED_META_DATA,
        videoProps
      };
    }
    function handleLoadedData(videoProps) {
      return {
        type: LOADED_DATA,
        videoProps
      };
    }
    function handleResize(videoProps) {
      return {
        type: RESIZE,
        videoProps
      };
    }
    function handleError(videoProps) {
      return {
        type: ERROR,
        videoProps
      };
    }
    function handleSeekingTime(time) {
      return {
        type: SEEKING_TIME,
        time
      };
    }
    function handleEndSeeking(time) {
      return {
        type: END_SEEKING,
        time
      };
    }
    function activateTextTrack(textTrack) {
      return {
        type: ACTIVATE_TEXT_TRACK,
        textTrack
      };
    }
  }
});

// node_modules/video-react/lib/utils/fullscreen.js
var require_fullscreen = __commonJS({
  "node_modules/video-react/lib/utils/fullscreen.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var Fullscreen = function() {
      function Fullscreen2() {
        (0, _classCallCheck2["default"])(this, Fullscreen2);
      }
      (0, _createClass2["default"])(Fullscreen2, [{
        key: "request",
        value: function request(elm) {
          if (elm.requestFullscreen) {
            elm.requestFullscreen();
          } else if (elm.webkitRequestFullscreen) {
            elm.webkitRequestFullscreen();
          } else if (elm.mozRequestFullScreen) {
            elm.mozRequestFullScreen();
          } else if (elm.msRequestFullscreen) {
            elm.msRequestFullscreen();
          }
        }
      }, {
        key: "exit",
        value: function exit() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(handler) {
          document.addEventListener("fullscreenchange", handler);
          document.addEventListener("webkitfullscreenchange", handler);
          document.addEventListener("mozfullscreenchange", handler);
          document.addEventListener("MSFullscreenChange", handler);
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(handler) {
          document.removeEventListener("fullscreenchange", handler);
          document.removeEventListener("webkitfullscreenchange", handler);
          document.removeEventListener("mozfullscreenchange", handler);
          document.removeEventListener("MSFullscreenChange", handler);
        }
      }, {
        key: "isFullscreen",
        get: function get() {
          return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        }
      }, {
        key: "enabled",
        get: function get() {
          return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
        }
      }]);
      return Fullscreen2;
    }();
    var _default = new Fullscreen();
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/actions/player.js
var require_player = __commonJS({
  "node_modules/video-react/lib/actions/player.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.handleFullscreenChange = handleFullscreenChange;
    exports.activate = activate;
    exports.userActivate = userActivate;
    exports.play = play;
    exports.pause = pause;
    exports.togglePlay = togglePlay;
    exports.seek = seek;
    exports.forward = forward;
    exports.replay = replay;
    exports.changeRate = changeRate;
    exports.changeVolume = changeVolume;
    exports.mute = mute;
    exports.toggleFullscreen = toggleFullscreen;
    exports.USER_ACTIVATE = exports.PLAYER_ACTIVATE = exports.FULLSCREEN_CHANGE = exports.OPERATE = void 0;
    var _fullscreen = _interopRequireDefault(require_fullscreen());
    var OPERATE = "video-react/OPERATE";
    exports.OPERATE = OPERATE;
    var FULLSCREEN_CHANGE = "video-react/FULLSCREEN_CHANGE";
    exports.FULLSCREEN_CHANGE = FULLSCREEN_CHANGE;
    var PLAYER_ACTIVATE = "video-react/PLAYER_ACTIVATE";
    exports.PLAYER_ACTIVATE = PLAYER_ACTIVATE;
    var USER_ACTIVATE = "video-react/USER_ACTIVATE";
    exports.USER_ACTIVATE = USER_ACTIVATE;
    function handleFullscreenChange(isFullscreen) {
      return {
        type: FULLSCREEN_CHANGE,
        isFullscreen
      };
    }
    function activate(activity) {
      return {
        type: PLAYER_ACTIVATE,
        activity
      };
    }
    function userActivate(activity) {
      return {
        type: USER_ACTIVATE,
        activity
      };
    }
    function play() {
      var operation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        action: "play",
        source: ""
      };
      this.video.play();
      return {
        type: OPERATE,
        operation
      };
    }
    function pause() {
      var operation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        action: "pause",
        source: ""
      };
      this.video.pause();
      return {
        type: OPERATE,
        operation
      };
    }
    function togglePlay() {
      var operation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        action: "toggle-play",
        source: ""
      };
      this.video.togglePlay();
      return {
        type: OPERATE,
        operation
      };
    }
    function seek(time) {
      var operation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        action: "seek",
        source: ""
      };
      this.video.seek(time);
      return {
        type: OPERATE,
        operation
      };
    }
    function forward(seconds) {
      var operation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        action: "forward-".concat(seconds),
        source: ""
      };
      this.video.forward(seconds);
      return {
        type: OPERATE,
        operation
      };
    }
    function replay(seconds) {
      var operation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        action: "replay-".concat(seconds),
        source: ""
      };
      this.video.replay(seconds);
      return {
        type: OPERATE,
        operation
      };
    }
    function changeRate(rate) {
      var operation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        action: "change-rate",
        source: ""
      };
      this.video.playbackRate = rate;
      return {
        type: OPERATE,
        operation
      };
    }
    function changeVolume(volume) {
      var operation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        action: "change-volume",
        source: ""
      };
      var v = volume;
      if (volume < 0) {
        v = 0;
      }
      if (volume > 1) {
        v = 1;
      }
      this.video.volume = v;
      return {
        type: OPERATE,
        operation
      };
    }
    function mute(muted) {
      var operation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        action: muted ? "muted" : "unmuted",
        source: ""
      };
      this.video.muted = muted;
      return {
        type: OPERATE,
        operation
      };
    }
    function toggleFullscreen(player) {
      if (_fullscreen["default"].enabled) {
        if (_fullscreen["default"].isFullscreen) {
          _fullscreen["default"].exit();
        } else {
          _fullscreen["default"].request(this.rootElement);
        }
        return {
          type: OPERATE,
          operation: {
            action: "toggle-fullscreen",
            source: ""
          }
        };
      }
      return {
        type: FULLSCREEN_CHANGE,
        isFullscreen: !player.isFullscreen
      };
    }
  }
});

// node_modules/video-react/lib/reducers/player.js
var require_player2 = __commonJS({
  "node_modules/video-react/lib/reducers/player.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = player;
    var _objectSpread22 = _interopRequireDefault(require_objectSpread());
    var _video = require_video();
    var _player = require_player();
    var initialState = {
      currentSrc: null,
      duration: 0,
      currentTime: 0,
      seekingTime: 0,
      buffered: null,
      waiting: false,
      seeking: false,
      paused: true,
      autoPaused: false,
      ended: false,
      playbackRate: 1,
      muted: false,
      volume: 1,
      readyState: 0,
      networkState: 0,
      videoWidth: 0,
      videoHeight: 0,
      hasStarted: false,
      userActivity: true,
      isActive: false,
      isFullscreen: false,
      activeTextTrack: null
    };
    function player() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : void 0;
      switch (action.type) {
        case _player.USER_ACTIVATE:
          return (0, _objectSpread22["default"])({}, state, {
            userActivity: action.activity
          });
        case _player.PLAYER_ACTIVATE:
          return (0, _objectSpread22["default"])({}, state, {
            isActive: action.activity
          });
        case _player.FULLSCREEN_CHANGE:
          return (0, _objectSpread22["default"])({}, state, {
            isFullscreen: !!action.isFullscreen
          });
        case _video.SEEKING_TIME:
          return (0, _objectSpread22["default"])({}, state, {
            seekingTime: action.time
          });
        case _video.END_SEEKING:
          return (0, _objectSpread22["default"])({}, state, {
            seekingTime: 0
          });
        case _video.LOAD_START:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            hasStarted: false,
            ended: false
          });
        case _video.CAN_PLAY:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            waiting: false
          });
        case _video.WAITING:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            waiting: true
          });
        case _video.CAN_PLAY_THROUGH:
        case _video.PLAYING:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            waiting: false
          });
        case _video.PLAY:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            ended: false,
            paused: false,
            autoPaused: false,
            waiting: false,
            hasStarted: true
          });
        case _video.PAUSE:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            paused: true
          });
        case _video.END:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            ended: true
          });
        case _video.SEEKING:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            seeking: true
          });
        case _video.SEEKED:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            seeking: false
          });
        case _video.ERROR:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            error: "UNKNOWN ERROR",
            ended: true
          });
        case _video.DURATION_CHANGE:
        case _video.TIME_UPDATE:
        case _video.VOLUME_CHANGE:
        case _video.PROGRESS_CHANGE:
        case _video.RATE_CHANGE:
        case _video.SUSPEND:
        case _video.ABORT:
        case _video.EMPTIED:
        case _video.STALLED:
        case _video.LOADED_META_DATA:
        case _video.LOADED_DATA:
        case _video.RESIZE:
          return (0, _objectSpread22["default"])({}, state, action.videoProps);
        case _video.ACTIVATE_TEXT_TRACK:
          return (0, _objectSpread22["default"])({}, state, {
            activeTextTrack: action.textTrack
          });
        default:
          return state;
      }
    }
  }
});

// node_modules/video-react/lib/reducers/operation.js
var require_operation = __commonJS({
  "node_modules/video-react/lib/reducers/operation.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = operation;
    var _objectSpread22 = _interopRequireDefault(require_objectSpread());
    var _player = require_player();
    var initialState = {
      count: 0,
      operation: {
        action: "",
        source: ""
      }
    };
    function operation() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : void 0;
      switch (action.type) {
        case _player.OPERATE:
          return (0, _objectSpread22["default"])({}, state, {
            count: state.count + 1,
            operation: (0, _objectSpread22["default"])({}, state.operation, action.operation)
          });
        default:
          return state;
      }
    }
  }
});

// node_modules/video-react/lib/reducers/index.js
var require_reducers = __commonJS({
  "node_modules/video-react/lib/reducers/index.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = _default;
    exports.operationReducer = exports.playerReducer = void 0;
    var _player = _interopRequireDefault(require_player2());
    var _operation = _interopRequireDefault(require_operation());
    function _default() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : void 0;
      return {
        player: (0, _player["default"])(state.player, action),
        operation: (0, _operation["default"])(state.operation, action)
      };
    }
    var playerReducer = _player["default"];
    exports.playerReducer = playerReducer;
    var operationReducer = _operation["default"];
    exports.operationReducer = operationReducer;
  }
});

// node_modules/video-react/lib/Manager.js
var require_Manager = __commonJS({
  "node_modules/video-react/lib/Manager.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _objectSpread22 = _interopRequireDefault(require_objectSpread());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _redux = (init_redux(), __toCommonJS(redux_exports));
    var _reducers = _interopRequireDefault(require_reducers());
    var playerActions = _interopRequireWildcard(require_player());
    var videoActions = _interopRequireWildcard(require_video());
    var Manager = function() {
      function Manager2(store) {
        (0, _classCallCheck2["default"])(this, Manager2);
        this.store = store || (0, _redux.createStore)(_reducers["default"]);
        this.video = null;
        this.rootElement = null;
      }
      (0, _createClass2["default"])(Manager2, [{
        key: "getActions",
        value: function getActions() {
          var manager = this;
          var dispatch = this.store.dispatch;
          var actions = (0, _objectSpread22["default"])({}, playerActions, videoActions);
          function bindActionCreator2(actionCreator) {
            return function bindAction() {
              var action = actionCreator.apply(manager, arguments);
              if (typeof action !== "undefined") {
                dispatch(action);
              }
            };
          }
          return Object.keys(actions).filter(function(key) {
            return typeof actions[key] === "function";
          }).reduce(function(boundActions, key) {
            boundActions[key] = bindActionCreator2(actions[key]);
            return boundActions;
          }, {});
        }
      }, {
        key: "getState",
        value: function getState() {
          return this.store.getState();
        }
        // subscribe state change
      }, {
        key: "subscribeToStateChange",
        value: function subscribeToStateChange(listener, getState) {
          if (!getState) {
            getState = this.getState.bind(this);
          }
          var prevState = getState();
          var handleChange = function handleChange2() {
            var state = getState();
            if (state === prevState) {
              return;
            }
            var prevStateCopy = prevState;
            prevState = state;
            listener(state, prevStateCopy);
          };
          return this.store.subscribe(handleChange);
        }
        // subscribe to operation state change
      }, {
        key: "subscribeToOperationStateChange",
        value: function subscribeToOperationStateChange(listener) {
          var _this = this;
          return this.subscribeToStateChange(listener, function() {
            return _this.getState().operation;
          });
        }
        // subscribe to player state change
      }, {
        key: "subscribeToPlayerStateChange",
        value: function subscribeToPlayerStateChange(listener) {
          var _this2 = this;
          return this.subscribeToStateChange(listener, function() {
            return _this2.getState().player;
          });
        }
      }]);
      return Manager2;
    }();
    exports["default"] = Manager;
  }
});

// node_modules/video-react/lib/components/BigPlayButton.js
var require_BigPlayButton = __commonJS({
  "node_modules/video-react/lib/components/BigPlayButton.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      position: _propTypes["default"].string,
      className: _propTypes["default"].string
    };
    var defaultProps = {
      position: "left"
    };
    var BigPlayButton = function(_Component) {
      (0, _inherits2["default"])(BigPlayButton2, _Component);
      function BigPlayButton2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, BigPlayButton2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BigPlayButton2).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(BigPlayButton2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
        }
      }, {
        key: "handleClick",
        value: function handleClick() {
          var actions = this.props.actions;
          actions.play();
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props, player = _this$props.player, position = _this$props.position;
          return _react["default"].createElement("button", {
            className: (0, _classnames["default"])("video-react-button", "video-react-big-play-button", "video-react-big-play-button-".concat(position), this.props.className, {
              "big-play-button-hide": player.hasStarted || !player.currentSrc
            }),
            type: "button",
            "aria-live": "polite",
            tabIndex: "0",
            onClick: this.handleClick
          }, _react["default"].createElement("span", {
            className: "video-react-control-text"
          }, "Play Video"));
        }
      }]);
      return BigPlayButton2;
    }(_react.Component);
    exports["default"] = BigPlayButton;
    BigPlayButton.propTypes = propTypes;
    BigPlayButton.defaultProps = defaultProps;
    BigPlayButton.displayName = "BigPlayButton";
  }
});

// node_modules/video-react/lib/components/LoadingSpinner.js
var require_LoadingSpinner = __commonJS({
  "node_modules/video-react/lib/components/LoadingSpinner.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = LoadingSpinner;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function LoadingSpinner(_ref) {
      var player = _ref.player, className = _ref.className;
      if (player.error) {
        return null;
      }
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])("video-react-loading-spinner", className)
      });
    }
    LoadingSpinner.propTypes = propTypes;
    LoadingSpinner.displayName = "LoadingSpinner";
  }
});

// node_modules/video-react/lib/components/PosterImage.js
var require_PosterImage = __commonJS({
  "node_modules/video-react/lib/components/PosterImage.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      poster: _propTypes["default"].string,
      player: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function PosterImage(_ref) {
      var poster = _ref.poster, player = _ref.player, actions = _ref.actions, className = _ref.className;
      if (!poster || player.hasStarted) {
        return null;
      }
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])("video-react-poster", className),
        style: {
          backgroundImage: 'url("'.concat(poster, '")')
        },
        onClick: function onClick() {
          if (player.paused) {
            actions.play();
          }
        }
      });
    }
    PosterImage.propTypes = propTypes;
    PosterImage.displayName = "PosterImage";
    var _default = PosterImage;
    exports["default"] = _default;
  }
});

// node_modules/@babel/runtime/helpers/arrayLikeToArray.js
var require_arrayLikeToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/arrayWithoutHoles.js
var require_arrayWithoutHoles = __commonJS({
  "node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"(exports, module) {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return arrayLikeToArray(arr);
    }
    module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/iterableToArray.js
var require_iterableToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/iterableToArray.js"(exports, module) {
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
var require_unsupportedIterableToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return arrayLikeToArray(o, minLen);
    }
    module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/nonIterableSpread.js
var require_nonIterableSpread = __commonJS({
  "node_modules/@babel/runtime/helpers/nonIterableSpread.js"(exports, module) {
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toConsumableArray.js
var require_toConsumableArray = __commonJS({
  "node_modules/@babel/runtime/helpers/toConsumableArray.js"(exports, module) {
    var arrayWithoutHoles = require_arrayWithoutHoles();
    var iterableToArray = require_iterableToArray();
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    var nonIterableSpread = require_nonIterableSpread();
    function _toConsumableArray(arr) {
      return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
    }
    module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/video-react/lib/utils/index.js
var require_utils = __commonJS({
  "node_modules/video-react/lib/utils/index.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatTime = formatTime;
    exports.isVideoChild = isVideoChild;
    exports.mergeAndSortChildren = mergeAndSortChildren;
    exports.deprecatedWarning = deprecatedWarning;
    exports.throttle = throttle;
    exports.mediaProperties = void 0;
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var _objectSpread22 = _interopRequireDefault(require_objectSpread());
    var _objectWithoutProperties2 = _interopRequireDefault(require_objectWithoutProperties());
    var _react = _interopRequireDefault(require_react());
    var isNaN = Number.isNaN || function(value) {
      return value !== value;
    };
    function formatTime() {
      var seconds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var guide = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : seconds;
      var s = Math.floor(seconds % 60);
      var m = Math.floor(seconds / 60 % 60);
      var h = Math.floor(seconds / 3600);
      var gm = Math.floor(guide / 60 % 60);
      var gh = Math.floor(guide / 3600);
      if (isNaN(seconds) || seconds === Infinity) {
        h = "-";
        m = "-";
        s = "-";
      }
      h = h > 0 || gh > 0 ? "".concat(h, ":") : "";
      m = "".concat((h || gm >= 10) && m < 10 ? "0".concat(m) : m, ":");
      s = s < 10 ? "0".concat(s) : s;
      return h + m + s;
    }
    function isVideoChild(c) {
      if (c.props && c.props.isVideoChild) {
        return true;
      }
      return c.type === "source" || c.type === "track";
    }
    var find = function find2(elements, func) {
      return elements.filter(func)[0];
    };
    var isTypeEqual = function isTypeEqual2(component1, component2) {
      var type1 = component1.type;
      var type2 = component2.type;
      if (typeof type1 === "string" || typeof type2 === "string") {
        return type1 === type2;
      }
      if (typeof type1 === "function" && typeof type2 === "function") {
        return type1.displayName === type2.displayName;
      }
      return false;
    };
    function mergeAndSortChildren(defaultChildren, _children, _parentProps) {
      var defaultOrder = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
      var children = _react["default"].Children.toArray(_children);
      var order = _parentProps.order, parentProps = (0, _objectWithoutProperties2["default"])(_parentProps, ["order"]);
      return children.filter(function(e) {
        return !e.props.disabled;
      }).concat(defaultChildren.filter(function(c) {
        return !find(children, function(component) {
          return isTypeEqual(component, c);
        });
      })).map(function(element) {
        var defaultComponent = find(defaultChildren, function(c) {
          return isTypeEqual(c, element);
        });
        var defaultProps = defaultComponent ? defaultComponent.props : {};
        var props = (0, _objectSpread22["default"])({}, parentProps, defaultProps, element.props);
        var e = _react["default"].cloneElement(element, props, element.props.children);
        return e;
      }).sort(function(a, b) {
        return (a.props.order || defaultOrder) - (b.props.order || defaultOrder);
      });
    }
    function deprecatedWarning(oldMethodCall, newMethodCall) {
      console.warn("WARNING: ".concat(oldMethodCall, " will be deprecated soon! Please use ").concat(newMethodCall, " instead."));
    }
    function throttle(callback, limit) {
      var _arguments = arguments;
      var wait = false;
      return function() {
        if (!wait) {
          callback.apply(void 0, (0, _toConsumableArray2["default"])(_arguments));
          wait = true;
          setTimeout(function() {
            wait = false;
          }, limit);
        }
      };
    }
    var mediaProperties = ["error", "src", "srcObject", "currentSrc", "crossOrigin", "networkState", "preload", "buffered", "readyState", "seeking", "currentTime", "duration", "paused", "defaultPlaybackRate", "playbackRate", "played", "seekable", "ended", "autoplay", "loop", "mediaGroup", "controller", "controls", "volume", "muted", "defaultMuted", "audioTracks", "videoTracks", "textTracks", "width", "height", "videoWidth", "videoHeight", "poster"];
    exports.mediaProperties = mediaProperties;
  }
});

// node_modules/video-react/lib/components/Video.js
var require_Video = __commonJS({
  "node_modules/video-react/lib/components/Video.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _objectSpread22 = _interopRequireDefault(require_objectSpread());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _utils = require_utils();
    var propTypes = {
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      children: _propTypes["default"].any,
      startTime: _propTypes["default"].number,
      loop: _propTypes["default"].bool,
      muted: _propTypes["default"].bool,
      autoPlay: _propTypes["default"].bool,
      playsInline: _propTypes["default"].bool,
      src: _propTypes["default"].string,
      poster: _propTypes["default"].string,
      className: _propTypes["default"].string,
      preload: _propTypes["default"].oneOf(["auto", "metadata", "none"]),
      crossOrigin: _propTypes["default"].string,
      onLoadStart: _propTypes["default"].func,
      onWaiting: _propTypes["default"].func,
      onCanPlay: _propTypes["default"].func,
      onCanPlayThrough: _propTypes["default"].func,
      onPlaying: _propTypes["default"].func,
      onEnded: _propTypes["default"].func,
      onSeeking: _propTypes["default"].func,
      onSeeked: _propTypes["default"].func,
      onPlay: _propTypes["default"].func,
      onPause: _propTypes["default"].func,
      onProgress: _propTypes["default"].func,
      onDurationChange: _propTypes["default"].func,
      onError: _propTypes["default"].func,
      onSuspend: _propTypes["default"].func,
      onAbort: _propTypes["default"].func,
      onEmptied: _propTypes["default"].func,
      onStalled: _propTypes["default"].func,
      onLoadedMetadata: _propTypes["default"].func,
      onLoadedData: _propTypes["default"].func,
      onTimeUpdate: _propTypes["default"].func,
      onRateChange: _propTypes["default"].func,
      onVolumeChange: _propTypes["default"].func,
      onResize: _propTypes["default"].func
    };
    var Video = function(_Component) {
      (0, _inherits2["default"])(Video2, _Component);
      function Video2(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, Video2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Video2).call(this, props));
        _this.video = null;
        _this.play = _this.play.bind((0, _assertThisInitialized2["default"])(_this));
        _this.pause = _this.pause.bind((0, _assertThisInitialized2["default"])(_this));
        _this.seek = _this.seek.bind((0, _assertThisInitialized2["default"])(_this));
        _this.forward = _this.forward.bind((0, _assertThisInitialized2["default"])(_this));
        _this.replay = _this.replay.bind((0, _assertThisInitialized2["default"])(_this));
        _this.toggleFullscreen = _this.toggleFullscreen.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getProperties = _this.getProperties.bind((0, _assertThisInitialized2["default"])(_this));
        _this.renderChildren = _this.renderChildren.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleLoadStart = _this.handleLoadStart.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleCanPlay = _this.handleCanPlay.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handlePlay = _this.handlePlay.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handlePlaying = _this.handlePlaying.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handlePause = _this.handlePause.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleEnded = _this.handleEnded.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleWaiting = _this.handleWaiting.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSeeking = _this.handleSeeking.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSeeked = _this.handleSeeked.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFullscreenChange = _this.handleFullscreenChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleError = _this.handleError.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSuspend = _this.handleSuspend.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleAbort = _this.handleAbort.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleEmptied = _this.handleEmptied.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleStalled = _this.handleStalled.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleLoadedData = _this.handleLoadedData.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleTimeUpdate = _this.handleTimeUpdate.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleRateChange = _this.handleRateChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleVolumeChange = _this.handleVolumeChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleDurationChange = _this.handleDurationChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleProgress = (0, _utils.throttle)(_this.handleProgress.bind((0, _assertThisInitialized2["default"])(_this)), 250);
        _this.handleKeypress = _this.handleKeypress.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleTextTrackChange = _this.handleTextTrackChange.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(Video2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.forceUpdate();
          if (this.video && this.video.textTracks) {
            this.video.textTracks.onaddtrack = this.handleTextTrackChange;
            this.video.textTracks.onremovetrack = this.handleTextTrackChange;
          }
        }
        // get all video properties
      }, {
        key: "getProperties",
        value: function getProperties() {
          var _this2 = this;
          if (!this.video) {
            return null;
          }
          return _utils.mediaProperties.reduce(function(properties, key) {
            properties[key] = _this2.video[key];
            return properties;
          }, {});
        }
        // get playback rate
      }, {
        key: "handleTextTrackChange",
        value: function handleTextTrackChange() {
          var _this$props = this.props, actions = _this$props.actions, player = _this$props.player;
          if (this.video && this.video.textTracks) {
            var activeTextTrack = Array.from(this.video.textTracks).find(function(textTrack) {
              return textTrack.mode === "showing";
            });
            if (activeTextTrack !== player.activeTextTrack) {
              actions.activateTextTrack(activeTextTrack);
            }
          }
        }
        // play the video
      }, {
        key: "play",
        value: function play() {
          var promise = this.video.play();
          if (promise !== void 0) {
            promise["catch"](function() {
            }).then(function() {
            });
          }
        }
        // pause the video
      }, {
        key: "pause",
        value: function pause() {
          var promise = this.video.pause();
          if (promise !== void 0) {
            promise["catch"](function() {
            }).then(function() {
            });
          }
        }
        // Change the video source and re-load the video:
      }, {
        key: "load",
        value: function load() {
          this.video.load();
        }
        // Add a new text track to the video
      }, {
        key: "addTextTrack",
        value: function addTextTrack() {
          var _this$video;
          (_this$video = this.video).addTextTrack.apply(_this$video, arguments);
        }
        // Check if your browser can play different types of video:
      }, {
        key: "canPlayType",
        value: function canPlayType() {
          var _this$video2;
          (_this$video2 = this.video).canPlayType.apply(_this$video2, arguments);
        }
        // toggle play
      }, {
        key: "togglePlay",
        value: function togglePlay() {
          if (this.video.paused) {
            this.play();
          } else {
            this.pause();
          }
        }
        // seek video by time
      }, {
        key: "seek",
        value: function seek(time) {
          try {
            this.video.currentTime = time;
          } catch (e) {
          }
        }
        // jump forward x seconds
      }, {
        key: "forward",
        value: function forward(seconds) {
          this.seek(this.video.currentTime + seconds);
        }
        // jump back x seconds
      }, {
        key: "replay",
        value: function replay(seconds) {
          this.forward(-seconds);
        }
        // enter or exist full screen
      }, {
        key: "toggleFullscreen",
        value: function toggleFullscreen() {
          var _this$props2 = this.props, player = _this$props2.player, actions = _this$props2.actions;
          actions.toggleFullscreen(player);
        }
        // Fired when the user agent
        // begins looking for media data
      }, {
        key: "handleLoadStart",
        value: function handleLoadStart() {
          var _this$props3 = this.props, actions = _this$props3.actions, onLoadStart = _this$props3.onLoadStart;
          actions.handleLoadStart(this.getProperties());
          if (onLoadStart) {
            onLoadStart.apply(void 0, arguments);
          }
        }
        // A handler for events that
        // signal that waiting has ended
      }, {
        key: "handleCanPlay",
        value: function handleCanPlay() {
          var _this$props4 = this.props, actions = _this$props4.actions, onCanPlay = _this$props4.onCanPlay;
          actions.handleCanPlay(this.getProperties());
          if (onCanPlay) {
            onCanPlay.apply(void 0, arguments);
          }
        }
        // A handler for events that
        // signal that waiting has ended
      }, {
        key: "handleCanPlayThrough",
        value: function handleCanPlayThrough() {
          var _this$props5 = this.props, actions = _this$props5.actions, onCanPlayThrough = _this$props5.onCanPlayThrough;
          actions.handleCanPlayThrough(this.getProperties());
          if (onCanPlayThrough) {
            onCanPlayThrough.apply(void 0, arguments);
          }
        }
        // A handler for events that
        // signal that waiting has ended
      }, {
        key: "handlePlaying",
        value: function handlePlaying() {
          var _this$props6 = this.props, actions = _this$props6.actions, onPlaying = _this$props6.onPlaying;
          actions.handlePlaying(this.getProperties());
          if (onPlaying) {
            onPlaying.apply(void 0, arguments);
          }
        }
        // Fired whenever the media has been started
      }, {
        key: "handlePlay",
        value: function handlePlay() {
          var _this$props7 = this.props, actions = _this$props7.actions, onPlay = _this$props7.onPlay;
          actions.handlePlay(this.getProperties());
          if (onPlay) {
            onPlay.apply(void 0, arguments);
          }
        }
        // Fired whenever the media has been paused
      }, {
        key: "handlePause",
        value: function handlePause() {
          var _this$props8 = this.props, actions = _this$props8.actions, onPause = _this$props8.onPause;
          actions.handlePause(this.getProperties());
          if (onPause) {
            onPause.apply(void 0, arguments);
          }
        }
        // Fired when the duration of
        // the media resource is first known or changed
      }, {
        key: "handleDurationChange",
        value: function handleDurationChange() {
          var _this$props9 = this.props, actions = _this$props9.actions, onDurationChange = _this$props9.onDurationChange;
          actions.handleDurationChange(this.getProperties());
          if (onDurationChange) {
            onDurationChange.apply(void 0, arguments);
          }
        }
        // Fired while the user agent
        // is downloading media data
      }, {
        key: "handleProgress",
        value: function handleProgress() {
          var _this$props10 = this.props, actions = _this$props10.actions, onProgress = _this$props10.onProgress;
          if (this.video) {
            actions.handleProgressChange(this.getProperties());
          }
          if (onProgress) {
            onProgress.apply(void 0, arguments);
          }
        }
        // Fired when the end of the media resource
        // is reached (currentTime == duration)
      }, {
        key: "handleEnded",
        value: function handleEnded() {
          var _this$props11 = this.props, loop = _this$props11.loop, player = _this$props11.player, actions = _this$props11.actions, onEnded = _this$props11.onEnded;
          if (loop) {
            this.seek(0);
            this.play();
          } else if (!player.paused) {
            this.pause();
          }
          actions.handleEnd(this.getProperties());
          if (onEnded) {
            onEnded.apply(void 0, arguments);
          }
        }
        // Fired whenever the media begins waiting
      }, {
        key: "handleWaiting",
        value: function handleWaiting() {
          var _this$props12 = this.props, actions = _this$props12.actions, onWaiting = _this$props12.onWaiting;
          actions.handleWaiting(this.getProperties());
          if (onWaiting) {
            onWaiting.apply(void 0, arguments);
          }
        }
        // Fired whenever the player
        // is jumping to a new time
      }, {
        key: "handleSeeking",
        value: function handleSeeking() {
          var _this$props13 = this.props, actions = _this$props13.actions, onSeeking = _this$props13.onSeeking;
          actions.handleSeeking(this.getProperties());
          if (onSeeking) {
            onSeeking.apply(void 0, arguments);
          }
        }
        // Fired when the player has
        // finished jumping to a new time
      }, {
        key: "handleSeeked",
        value: function handleSeeked() {
          var _this$props14 = this.props, actions = _this$props14.actions, onSeeked = _this$props14.onSeeked;
          actions.handleSeeked(this.getProperties());
          if (onSeeked) {
            onSeeked.apply(void 0, arguments);
          }
        }
        // Handle Fullscreen Change
      }, {
        key: "handleFullscreenChange",
        value: function handleFullscreenChange() {
        }
        // Fires when the browser is
        // intentionally not getting media data
      }, {
        key: "handleSuspend",
        value: function handleSuspend() {
          var _this$props15 = this.props, actions = _this$props15.actions, onSuspend = _this$props15.onSuspend;
          actions.handleSuspend(this.getProperties());
          if (onSuspend) {
            onSuspend.apply(void 0, arguments);
          }
        }
        // Fires when the loading of an audio/video is aborted
      }, {
        key: "handleAbort",
        value: function handleAbort() {
          var _this$props16 = this.props, actions = _this$props16.actions, onAbort = _this$props16.onAbort;
          actions.handleAbort(this.getProperties());
          if (onAbort) {
            onAbort.apply(void 0, arguments);
          }
        }
        // Fires when the current playlist is empty
      }, {
        key: "handleEmptied",
        value: function handleEmptied() {
          var _this$props17 = this.props, actions = _this$props17.actions, onEmptied = _this$props17.onEmptied;
          actions.handleEmptied(this.getProperties());
          if (onEmptied) {
            onEmptied.apply(void 0, arguments);
          }
        }
        // Fires when the browser is trying to
        // get media data, but data is not available
      }, {
        key: "handleStalled",
        value: function handleStalled() {
          var _this$props18 = this.props, actions = _this$props18.actions, onStalled = _this$props18.onStalled;
          actions.handleStalled(this.getProperties());
          if (onStalled) {
            onStalled.apply(void 0, arguments);
          }
        }
        // Fires when the browser has loaded
        // meta data for the audio/video
      }, {
        key: "handleLoadedMetaData",
        value: function handleLoadedMetaData() {
          var _this$props19 = this.props, actions = _this$props19.actions, onLoadedMetadata = _this$props19.onLoadedMetadata, startTime = _this$props19.startTime;
          if (startTime && startTime > 0) {
            this.video.currentTime = startTime;
          }
          actions.handleLoadedMetaData(this.getProperties());
          if (onLoadedMetadata) {
            onLoadedMetadata.apply(void 0, arguments);
          }
        }
        // Fires when the browser has loaded
        // the current frame of the audio/video
      }, {
        key: "handleLoadedData",
        value: function handleLoadedData() {
          var _this$props20 = this.props, actions = _this$props20.actions, onLoadedData = _this$props20.onLoadedData;
          actions.handleLoadedData(this.getProperties());
          if (onLoadedData) {
            onLoadedData.apply(void 0, arguments);
          }
        }
        // Fires when the current
        // playback position has changed
      }, {
        key: "handleTimeUpdate",
        value: function handleTimeUpdate() {
          var _this$props21 = this.props, actions = _this$props21.actions, onTimeUpdate = _this$props21.onTimeUpdate;
          actions.handleTimeUpdate(this.getProperties());
          if (onTimeUpdate) {
            onTimeUpdate.apply(void 0, arguments);
          }
        }
        /**
         * Fires when the playing speed of the audio/video is changed
         */
      }, {
        key: "handleRateChange",
        value: function handleRateChange() {
          var _this$props22 = this.props, actions = _this$props22.actions, onRateChange = _this$props22.onRateChange;
          actions.handleRateChange(this.getProperties());
          if (onRateChange) {
            onRateChange.apply(void 0, arguments);
          }
        }
        // Fires when the volume has been changed
      }, {
        key: "handleVolumeChange",
        value: function handleVolumeChange() {
          var _this$props23 = this.props, actions = _this$props23.actions, onVolumeChange = _this$props23.onVolumeChange;
          actions.handleVolumeChange(this.getProperties());
          if (onVolumeChange) {
            onVolumeChange.apply(void 0, arguments);
          }
        }
        // Fires when an error occurred
        // during the loading of an audio/video
      }, {
        key: "handleError",
        value: function handleError() {
          var _this$props24 = this.props, actions = _this$props24.actions, onError = _this$props24.onError;
          actions.handleError(this.getProperties());
          if (onError) {
            onError.apply(void 0, arguments);
          }
        }
      }, {
        key: "handleResize",
        value: function handleResize() {
          var _this$props25 = this.props, actions = _this$props25.actions, onResize = _this$props25.onResize;
          actions.handleResize(this.getProperties());
          if (onResize) {
            onResize.apply(void 0, arguments);
          }
        }
      }, {
        key: "handleKeypress",
        value: function handleKeypress() {
        }
      }, {
        key: "renderChildren",
        value: function renderChildren() {
          var _this3 = this;
          var props = (0, _objectSpread22["default"])({}, this.props, {
            video: this.video
          });
          if (!this.video) {
            return null;
          }
          return _react["default"].Children.toArray(this.props.children).filter(_utils.isVideoChild).map(function(c) {
            var cprops;
            if (typeof c.type === "string") {
              if (c.type === "source") {
                cprops = (0, _objectSpread22["default"])({}, c.props);
                var preOnError = cprops.onError;
                cprops.onError = function() {
                  if (preOnError) {
                    preOnError.apply(void 0, arguments);
                  }
                  _this3.handleError.apply(_this3, arguments);
                };
              }
            } else {
              cprops = props;
            }
            return _react["default"].cloneElement(c, cprops);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;
          var _this$props26 = this.props, loop = _this$props26.loop, poster = _this$props26.poster, preload = _this$props26.preload, src = _this$props26.src, autoPlay = _this$props26.autoPlay, playsInline = _this$props26.playsInline, muted = _this$props26.muted, crossOrigin = _this$props26.crossOrigin, videoId = _this$props26.videoId;
          return _react["default"].createElement("video", {
            className: (0, _classnames["default"])("video-react-video", this.props.className),
            id: videoId,
            crossOrigin,
            ref: function ref(c) {
              _this4.video = c;
            },
            muted,
            preload,
            loop,
            playsInline,
            autoPlay,
            poster,
            src,
            onLoadStart: this.handleLoadStart,
            onWaiting: this.handleWaiting,
            onCanPlay: this.handleCanPlay,
            onCanPlayThrough: this.handleCanPlayThrough,
            onPlaying: this.handlePlaying,
            onEnded: this.handleEnded,
            onSeeking: this.handleSeeking,
            onSeeked: this.handleSeeked,
            onPlay: this.handlePlay,
            onPause: this.handlePause,
            onProgress: this.handleProgress,
            onDurationChange: this.handleDurationChange,
            onError: this.handleError,
            onSuspend: this.handleSuspend,
            onAbort: this.handleAbort,
            onEmptied: this.handleEmptied,
            onStalled: this.handleStalled,
            onLoadedMetadata: this.handleLoadedMetaData,
            onLoadedData: this.handleLoadedData,
            onTimeUpdate: this.handleTimeUpdate,
            onRateChange: this.handleRateChange,
            onVolumeChange: this.handleVolumeChange,
            tabIndex: "-1"
          }, this.renderChildren());
        }
      }, {
        key: "playbackRate",
        get: function get() {
          return this.video.playbackRate;
        },
        set: function set(rate) {
          this.video.playbackRate = rate;
        }
      }, {
        key: "muted",
        get: function get() {
          return this.video.muted;
        },
        set: function set(val) {
          this.video.muted = val;
        }
      }, {
        key: "volume",
        get: function get() {
          return this.video.volume;
        },
        set: function set(val) {
          if (val > 1) {
            val = 1;
          }
          if (val < 0) {
            val = 0;
          }
          this.video.volume = val;
        }
        // video width
      }, {
        key: "videoWidth",
        get: function get() {
          return this.video.videoWidth;
        }
        // video height
      }, {
        key: "videoHeight",
        get: function get() {
          return this.video.videoHeight;
        }
      }]);
      return Video2;
    }(_react.Component);
    exports["default"] = Video;
    Video.propTypes = propTypes;
    Video.displayName = "Video";
  }
});

// node_modules/video-react/lib/components/Bezel.js
var require_Bezel = __commonJS({
  "node_modules/video-react/lib/components/Bezel.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      manager: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    var Bezel = function(_Component) {
      (0, _inherits2["default"])(Bezel2, _Component);
      function Bezel2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, Bezel2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Bezel2).call(this, props, context));
        _this.timer = null;
        props.manager.subscribeToOperationStateChange(_this.handleStateChange.bind((0, _assertThisInitialized2["default"])(_this)));
        _this.state = {
          hidden: true,
          operation: {}
        };
        return _this;
      }
      (0, _createClass2["default"])(Bezel2, [{
        key: "handleStateChange",
        value: function handleStateChange(state, prevState) {
          var _this2 = this;
          if (state.count !== prevState.count && state.operation.source === "shortcut") {
            if (this.timer) {
              clearTimeout(this.timer);
              this.timer = null;
            }
            this.setState({
              hidden: false,
              count: state.count,
              operation: state.operation
            });
            this.timer = setTimeout(function() {
              _this2.setState({
                hidden: true
              });
              _this2.timer = null;
            }, 500);
          }
        }
      }, {
        key: "render",
        value: function render() {
          if (this.state.operation.source !== "shortcut") {
            return null;
          }
          var style = this.state.hidden ? {
            display: "none"
          } : null;
          return _react["default"].createElement("div", {
            className: (0, _classnames["default"])({
              "video-react-bezel": true,
              "video-react-bezel-animation": this.state.count % 2 === 0,
              "video-react-bezel-animation-alt": this.state.count % 2 === 1
            }, this.props.className),
            style,
            role: "status",
            "aria-label": this.state.operation.action
          }, _react["default"].createElement("div", {
            className: (0, _classnames["default"])("video-react-bezel-icon", "video-react-bezel-icon-".concat(this.state.operation.action))
          }));
        }
      }]);
      return Bezel2;
    }(_react.Component);
    exports["default"] = Bezel;
    Bezel.propTypes = propTypes;
    Bezel.displayName = "Bezel";
  }
});

// node_modules/video-react/lib/utils/dom.js
var require_dom = __commonJS({
  "node_modules/video-react/lib/utils/dom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.findElPosition = findElPosition;
    exports.getPointerPosition = getPointerPosition;
    exports.blurNode = blurNode;
    exports.focusNode = focusNode;
    exports.hasClass = hasClass;
    function findElPosition(el) {
      var box;
      if (el.getBoundingClientRect && el.parentNode) {
        box = el.getBoundingClientRect();
      }
      if (!box) {
        return {
          left: 0,
          top: 0
        };
      }
      var _document = document, body = _document.body, docEl = _document.documentElement;
      var clientLeft = docEl.clientLeft || body.clientLeft || 0;
      var scrollLeft = window.pageXOffset || body.scrollLeft;
      var left = box.left + scrollLeft - clientLeft;
      var clientTop = docEl.clientTop || body.clientTop || 0;
      var scrollTop = window.pageYOffset || body.scrollTop;
      var top = box.top + scrollTop - clientTop;
      return {
        left: Math.round(left),
        top: Math.round(top)
      };
    }
    function getPointerPosition(el, event) {
      var position = {};
      var box = findElPosition(el);
      var boxW = el.offsetWidth;
      var boxH = el.offsetHeight;
      var boxY = box.top;
      var boxX = box.left;
      var evtPageY = event.pageY;
      var evtPageX = event.pageX;
      if (event.changedTouches) {
        evtPageX = event.changedTouches[0].pageX;
        evtPageY = event.changedTouches[0].pageY;
      }
      position.y = Math.max(0, Math.min(1, (boxY - evtPageY + boxH) / boxH));
      position.x = Math.max(0, Math.min(1, (evtPageX - boxX) / boxW));
      return position;
    }
    function blurNode(reactNode) {
      if (reactNode && reactNode.blur) {
        reactNode.blur();
      }
    }
    function focusNode(reactNode) {
      if (reactNode && reactNode.focus) {
        reactNode.focus();
      }
    }
    function hasClass(elm, cls) {
      var classes = elm.className.split(" ");
      for (var i = 0; i < classes.length; i++) {
        if (classes[i].toLowerCase() === cls.toLowerCase()) {
          return true;
        }
      }
      return false;
    }
  }
});

// node_modules/video-react/lib/components/Shortcut.js
var require_Shortcut = __commonJS({
  "node_modules/video-react/lib/components/Shortcut.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _react = require_react();
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _dom = require_dom();
    var propTypes = {
      clickable: _propTypes["default"].bool,
      dblclickable: _propTypes["default"].bool,
      manager: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      shortcuts: _propTypes["default"].array
    };
    var defaultProps = {
      clickable: true,
      dblclickable: true
    };
    var Shortcut = function(_Component) {
      (0, _inherits2["default"])(Shortcut2, _Component);
      function Shortcut2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, Shortcut2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Shortcut2).call(this, props, context));
        _this.defaultShortcuts = [{
          keyCode: 32,
          // spacebar
          handle: _this.togglePlay
        }, {
          keyCode: 75,
          // k
          handle: _this.togglePlay
        }, {
          keyCode: 70,
          // f
          handle: _this.toggleFullscreen
        }, {
          keyCode: 37,
          // Left arrow
          handle: function handle(player, actions) {
            if (!player.hasStarted) {
              return;
            }
            actions.replay(5, {
              action: "replay-5",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 74,
          // j
          handle: function handle(player, actions) {
            if (!player.hasStarted) {
              return;
            }
            actions.replay(10, {
              action: "replay-10",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 39,
          // Right arrow
          handle: function handle(player, actions) {
            if (!player.hasStarted) {
              return;
            }
            actions.forward(5, {
              action: "forward-5",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 76,
          // l
          handle: function handle(player, actions) {
            if (!player.hasStarted) {
              return;
            }
            actions.forward(10, {
              action: "forward-10",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 36,
          // Home
          handle: function handle(player, actions) {
            if (!player.hasStarted) {
              return;
            }
            actions.seek(0);
          }
        }, {
          keyCode: 35,
          // End
          handle: function handle(player, actions) {
            if (!player.hasStarted) {
              return;
            }
            actions.seek(player.duration);
          }
        }, {
          keyCode: 38,
          // Up arrow
          handle: function handle(player, actions) {
            var v = player.volume + 0.05;
            if (v > 1) {
              v = 1;
            }
            actions.changeVolume(v, {
              action: "volume-up",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 40,
          // Down arrow
          handle: function handle(player, actions) {
            var v = player.volume - 0.05;
            if (v < 0) {
              v = 0;
            }
            var action = v > 0 ? "volume-down" : "volume-off";
            actions.changeVolume(v, {
              action,
              source: "shortcut"
            });
          }
        }, {
          keyCode: 190,
          // Shift + >
          shift: true,
          handle: function handle(player, actions) {
            var playbackRate = player.playbackRate;
            if (playbackRate >= 1.5) {
              playbackRate = 2;
            } else if (playbackRate >= 1.25) {
              playbackRate = 1.5;
            } else if (playbackRate >= 1) {
              playbackRate = 1.25;
            } else if (playbackRate >= 0.5) {
              playbackRate = 1;
            } else if (playbackRate >= 0.25) {
              playbackRate = 0.5;
            } else if (playbackRate >= 0) {
              playbackRate = 0.25;
            }
            actions.changeRate(playbackRate, {
              action: "fast-forward",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 188,
          // Shift + <
          shift: true,
          handle: function handle(player, actions) {
            var playbackRate = player.playbackRate;
            if (playbackRate <= 0.5) {
              playbackRate = 0.25;
            } else if (playbackRate <= 1) {
              playbackRate = 0.5;
            } else if (playbackRate <= 1.25) {
              playbackRate = 1;
            } else if (playbackRate <= 1.5) {
              playbackRate = 1.25;
            } else if (playbackRate <= 2) {
              playbackRate = 1.5;
            }
            actions.changeRate(playbackRate, {
              action: "fast-rewind",
              source: "shortcut"
            });
          }
        }];
        _this.shortcuts = (0, _toConsumableArray2["default"])(_this.defaultShortcuts);
        _this.mergeShortcuts = _this.mergeShortcuts.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleDoubleClick = _this.handleDoubleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(Shortcut2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.mergeShortcuts();
          document.addEventListener("keydown", this.handleKeyPress);
          document.addEventListener("click", this.handleClick);
          document.addEventListener("dblclick", this.handleDoubleClick);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.shortcuts !== this.props.shortcuts) {
            this.mergeShortcuts();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.removeEventListener("keydown", this.handleKeyPress);
          document.removeEventListener("click", this.handleClick);
          document.removeEventListener("dblclick", this.handleDoubleClick);
        }
        // merge the shortcuts from props
      }, {
        key: "mergeShortcuts",
        value: function mergeShortcuts() {
          var getShortcutKey = function getShortcutKey2(_ref) {
            var _ref$keyCode = _ref.keyCode, keyCode = _ref$keyCode === void 0 ? 0 : _ref$keyCode, _ref$ctrl = _ref.ctrl, ctrl = _ref$ctrl === void 0 ? false : _ref$ctrl, _ref$shift = _ref.shift, shift = _ref$shift === void 0 ? false : _ref$shift, _ref$alt = _ref.alt, alt = _ref$alt === void 0 ? false : _ref$alt;
            return "".concat(keyCode, ":").concat(ctrl, ":").concat(shift, ":").concat(alt);
          };
          var defaultShortcuts = this.defaultShortcuts.reduce(function(shortcuts, shortcut) {
            return Object.assign(shortcuts, (0, _defineProperty2["default"])({}, getShortcutKey(shortcut), shortcut));
          }, {});
          var mergedShortcuts = (this.props.shortcuts || []).reduce(function(shortcuts, shortcut) {
            var keyCode = shortcut.keyCode, handle = shortcut.handle;
            if (keyCode && typeof handle === "function") {
              return Object.assign(shortcuts, (0, _defineProperty2["default"])({}, getShortcutKey(shortcut), shortcut));
            }
            return shortcuts;
          }, defaultShortcuts);
          var gradeShortcut = function gradeShortcut2(s) {
            var score = 0;
            var ps = ["ctrl", "shift", "alt"];
            ps.forEach(function(key) {
              if (s[key]) {
                score++;
              }
            });
            return score;
          };
          this.shortcuts = Object.keys(mergedShortcuts).map(function(key) {
            return mergedShortcuts[key];
          }).sort(function(a, b) {
            return gradeShortcut(b) - gradeShortcut(a);
          });
        }
      }, {
        key: "togglePlay",
        value: function togglePlay(player, actions) {
          if (player.paused) {
            actions.play({
              action: "play",
              source: "shortcut"
            });
          } else {
            actions.pause({
              action: "pause",
              source: "shortcut"
            });
          }
        }
      }, {
        key: "toggleFullscreen",
        value: function toggleFullscreen(player, actions) {
          actions.toggleFullscreen(player);
        }
      }, {
        key: "handleKeyPress",
        value: function handleKeyPress(e) {
          var _this$props = this.props, player = _this$props.player, actions = _this$props.actions;
          if (!player.isActive) {
            return;
          }
          if (document.activeElement && ((0, _dom.hasClass)(document.activeElement, "video-react-control") || (0, _dom.hasClass)(document.activeElement, "video-react-menu-button-active") || (0, _dom.hasClass)(document.activeElement, "video-react-big-play-button"))) {
            return;
          }
          var keyCode = e.keyCode || e.which;
          var ctrl = e.ctrlKey || e.metaKey;
          var shift = e.shiftKey;
          var alt = e.altKey;
          var shortcut = this.shortcuts.filter(function(s) {
            if (!s.keyCode || s.keyCode - keyCode !== 0) {
              return false;
            }
            if (s.ctrl !== void 0 && s.ctrl !== ctrl || s.shift !== void 0 && s.shift !== shift || s.alt !== void 0 && s.alt !== alt) {
              return false;
            }
            return true;
          })[0];
          if (shortcut) {
            shortcut.handle(player, actions);
            e.preventDefault();
          }
        }
        // only if player is active and player is ready
      }, {
        key: "canBeClicked",
        value: function canBeClicked(player, e) {
          if (!player.isActive || e.target.nodeName !== "VIDEO" || player.readyState !== 4) {
            return false;
          }
          return true;
        }
      }, {
        key: "handleClick",
        value: function handleClick(e) {
          var _this$props2 = this.props, player = _this$props2.player, actions = _this$props2.actions, clickable = _this$props2.clickable;
          if (!this.canBeClicked(player, e) || !clickable) {
            return;
          }
          this.togglePlay(player, actions);
        }
      }, {
        key: "handleDoubleClick",
        value: function handleDoubleClick(e) {
          var _this$props3 = this.props, player = _this$props3.player, actions = _this$props3.actions, dblclickable = _this$props3.dblclickable;
          if (!this.canBeClicked(player, e) || !dblclickable) {
            return;
          }
          this.toggleFullscreen(player, actions);
        }
        // this component dose not render anything
        // it's just for the key down event
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);
      return Shortcut2;
    }(_react.Component);
    exports["default"] = Shortcut;
    Shortcut.propTypes = propTypes;
    Shortcut.defaultProps = defaultProps;
    Shortcut.displayName = "Shortcut";
  }
});

// node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    function _extends() {
      module.exports = _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _extends.apply(this, arguments);
    }
    module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/video-react/lib/components/Slider.js
var require_Slider = __commonJS({
  "node_modules/video-react/lib/components/Slider.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var Dom = _interopRequireWildcard(require_dom());
    var propTypes = {
      className: _propTypes["default"].string,
      onMouseDown: _propTypes["default"].func,
      onMouseMove: _propTypes["default"].func,
      stepForward: _propTypes["default"].func,
      stepBack: _propTypes["default"].func,
      sliderActive: _propTypes["default"].func,
      sliderInactive: _propTypes["default"].func,
      onMouseUp: _propTypes["default"].func,
      onFocus: _propTypes["default"].func,
      onBlur: _propTypes["default"].func,
      onClick: _propTypes["default"].func,
      getPercent: _propTypes["default"].func,
      vertical: _propTypes["default"].bool,
      children: _propTypes["default"].node,
      label: _propTypes["default"].string,
      valuenow: _propTypes["default"].string,
      valuetext: _propTypes["default"].string
    };
    var Slider = function(_Component) {
      (0, _inherits2["default"])(Slider2, _Component);
      function Slider2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, Slider2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Slider2).call(this, props, context));
        _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseUp = _this.handleMouseUp.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
        _this.calculateDistance = _this.calculateDistance.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getProgress = _this.getProgress.bind((0, _assertThisInitialized2["default"])(_this));
        _this.renderChildren = _this.renderChildren.bind((0, _assertThisInitialized2["default"])(_this));
        _this.state = {
          active: false
        };
        return _this;
      }
      (0, _createClass2["default"])(Slider2, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.removeEventListener("mousemove", this.handleMouseMove, true);
          document.removeEventListener("mouseup", this.handleMouseUp, true);
          document.removeEventListener("touchmove", this.handleMouseMove, true);
          document.removeEventListener("touchend", this.handleMouseUp, true);
          document.removeEventListener("keydown", this.handleKeyPress, true);
        }
      }, {
        key: "getProgress",
        value: function getProgress() {
          var getPercent = this.props.getPercent;
          if (!getPercent) {
            return 0;
          }
          var progress = getPercent();
          if (typeof progress !== "number" || progress < 0 || progress === Infinity) {
            progress = 0;
          }
          return progress;
        }
      }, {
        key: "handleMouseDown",
        value: function handleMouseDown(event) {
          var onMouseDown = this.props.onMouseDown;
          document.addEventListener("mousemove", this.handleMouseMove, true);
          document.addEventListener("mouseup", this.handleMouseUp, true);
          document.addEventListener("touchmove", this.handleMouseMove, true);
          document.addEventListener("touchend", this.handleMouseUp, true);
          this.setState({
            active: true
          });
          if (this.props.sliderActive) {
            this.props.sliderActive(event);
          }
          this.handleMouseMove(event);
          if (onMouseDown) {
            onMouseDown(event);
          }
        }
      }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
          var onMouseMove = this.props.onMouseMove;
          if (onMouseMove) {
            onMouseMove(event);
          }
        }
      }, {
        key: "handleMouseUp",
        value: function handleMouseUp(event) {
          event.preventDefault();
          var onMouseUp = this.props.onMouseUp;
          document.removeEventListener("mousemove", this.handleMouseMove, true);
          document.removeEventListener("mouseup", this.handleMouseUp, true);
          document.removeEventListener("touchmove", this.handleMouseMove, true);
          document.removeEventListener("touchend", this.handleMouseUp, true);
          this.setState({
            active: false
          });
          if (this.props.sliderInactive) {
            this.props.sliderInactive(event);
          }
          if (onMouseUp) {
            onMouseUp(event);
          }
        }
      }, {
        key: "handleFocus",
        value: function handleFocus(e) {
          document.addEventListener("keydown", this.handleKeyPress, true);
          if (this.props.onFocus) {
            this.props.onFocus(e);
          }
        }
      }, {
        key: "handleBlur",
        value: function handleBlur(e) {
          document.removeEventListener("keydown", this.handleKeyPress, true);
          if (this.props.onBlur) {
            this.props.onBlur(e);
          }
        }
      }, {
        key: "handleClick",
        value: function handleClick(event) {
          event.preventDefault();
          if (this.props.onClick) {
            this.props.onClick(event);
          }
        }
      }, {
        key: "handleKeyPress",
        value: function handleKeyPress(event) {
          if (event.which === 37 || event.which === 40) {
            event.preventDefault();
            event.stopPropagation();
            this.stepBack();
          } else if (event.which === 38 || event.which === 39) {
            event.preventDefault();
            event.stopPropagation();
            this.stepForward();
          }
        }
      }, {
        key: "stepForward",
        value: function stepForward() {
          if (this.props.stepForward) {
            this.props.stepForward();
          }
        }
      }, {
        key: "stepBack",
        value: function stepBack() {
          if (this.props.stepBack) {
            this.props.stepBack();
          }
        }
      }, {
        key: "calculateDistance",
        value: function calculateDistance(event) {
          var node = this.slider;
          var position = Dom.getPointerPosition(node, event);
          if (this.props.vertical) {
            return position.y;
          }
          return position.x;
        }
      }, {
        key: "renderChildren",
        value: function renderChildren() {
          var progress = this.getProgress();
          var percentage = "".concat((progress * 100).toFixed(2), "%");
          return _react["default"].Children.map(this.props.children, function(child) {
            return _react["default"].cloneElement(child, {
              progress,
              percentage
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props, vertical = _this$props.vertical, label = _this$props.label, valuenow = _this$props.valuenow, valuetext = _this$props.valuetext;
          return _react["default"].createElement("div", {
            className: (0, _classnames["default"])(this.props.className, {
              "video-react-slider-vertical": vertical,
              "video-react-slider-horizontal": !vertical,
              "video-react-sliding": this.state.active
            }, "video-react-slider"),
            ref: function ref(c) {
              _this2.slider = c;
            },
            tabIndex: "0",
            role: "slider",
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleMouseDown,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onClick: this.handleClick,
            "aria-label": label || "",
            "aria-valuenow": valuenow || "",
            "aria-valuetext": valuetext || "",
            "aria-valuemin": 0,
            "aria-valuemax": 100
          }, this.renderChildren());
        }
      }]);
      return Slider2;
    }(_react.Component);
    exports["default"] = Slider;
    Slider.propTypes = propTypes;
    Slider.displayName = "Slider";
  }
});

// node_modules/video-react/lib/components/control-bar/PlayProgressBar.js
var require_PlayProgressBar = __commonJS({
  "node_modules/video-react/lib/components/control-bar/PlayProgressBar.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = PlayProgressBar;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _utils = require_utils();
    var propTypes = {
      currentTime: _propTypes["default"].number,
      duration: _propTypes["default"].number,
      percentage: _propTypes["default"].string,
      className: _propTypes["default"].string
    };
    function PlayProgressBar(_ref) {
      var currentTime = _ref.currentTime, duration = _ref.duration, percentage = _ref.percentage, className = _ref.className;
      return _react["default"].createElement("div", {
        "data-current-time": (0, _utils.formatTime)(currentTime, duration),
        className: (0, _classnames["default"])("video-react-play-progress video-react-slider-bar", className),
        style: {
          width: percentage
        }
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Progress: ".concat(percentage)));
    }
    PlayProgressBar.propTypes = propTypes;
    PlayProgressBar.displayName = "PlayProgressBar";
  }
});

// node_modules/video-react/lib/components/control-bar/LoadProgressBar.js
var require_LoadProgressBar = __commonJS({
  "node_modules/video-react/lib/components/control-bar/LoadProgressBar.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = LoadProgressBar;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      duration: _propTypes["default"].number,
      buffered: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function LoadProgressBar(_ref) {
      var buffered = _ref.buffered, duration = _ref.duration, className = _ref.className;
      if (!buffered || !buffered.length) {
        return null;
      }
      var bufferedEnd = buffered.end(buffered.length - 1);
      var style = {};
      if (bufferedEnd > duration) {
        bufferedEnd = duration;
      }
      function percentify(time, end2) {
        var percent = time / end2 || 0;
        return "".concat((percent >= 1 ? 1 : percent) * 100, "%");
      }
      style.width = percentify(bufferedEnd, duration);
      var parts = [];
      for (var i = 0; i < buffered.length; i++) {
        var start = buffered.start(i);
        var end = buffered.end(i);
        var part = _react["default"].createElement("div", {
          style: {
            left: percentify(start, bufferedEnd),
            width: percentify(end - start, bufferedEnd)
          },
          key: "part-".concat(i)
        });
        parts.push(part);
      }
      if (parts.length === 0) {
        parts = null;
      }
      return _react["default"].createElement("div", {
        style,
        className: (0, _classnames["default"])("video-react-load-progress", className)
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Loaded: 0%"), parts);
    }
    LoadProgressBar.propTypes = propTypes;
    LoadProgressBar.displayName = "LoadProgressBar";
  }
});

// node_modules/video-react/lib/components/control-bar/MouseTimeDisplay.js
var require_MouseTimeDisplay = __commonJS({
  "node_modules/video-react/lib/components/control-bar/MouseTimeDisplay.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _utils = require_utils();
    function MouseTimeDisplay(_ref) {
      var duration = _ref.duration, mouseTime = _ref.mouseTime, className = _ref.className, text = _ref.text;
      if (!mouseTime.time) {
        return null;
      }
      var time = text || (0, _utils.formatTime)(mouseTime.time, duration);
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])("video-react-mouse-display", className),
        style: {
          left: "".concat(mouseTime.position, "px")
        },
        "data-current-time": time
      });
    }
    MouseTimeDisplay.propTypes = {
      duration: _propTypes["default"].number,
      mouseTime: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    MouseTimeDisplay.displayName = "MouseTimeDisplay";
    var _default = MouseTimeDisplay;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/control-bar/SeekBar.js
var require_SeekBar = __commonJS({
  "node_modules/video-react/lib/components/control-bar/SeekBar.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _Slider = _interopRequireDefault(require_Slider());
    var _PlayProgressBar = _interopRequireDefault(require_PlayProgressBar());
    var _LoadProgressBar = _interopRequireDefault(require_LoadProgressBar());
    var _MouseTimeDisplay = _interopRequireDefault(require_MouseTimeDisplay());
    var _utils = require_utils();
    var propTypes = {
      player: _propTypes["default"].object,
      mouseTime: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    var SeekBar = function(_Component) {
      (0, _inherits2["default"])(SeekBar2, _Component);
      function SeekBar2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, SeekBar2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SeekBar2).call(this, props, context));
        _this.getPercent = _this.getPercent.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getNewTime = _this.getNewTime.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseUp = _this.handleMouseUp.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(SeekBar2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
        }
        /**
         * Get percentage of video played
         *
         * @return {Number} Percentage played
         * @method getPercent
         */
      }, {
        key: "getPercent",
        value: function getPercent() {
          var _this$props$player = this.props.player, currentTime = _this$props$player.currentTime, seekingTime = _this$props$player.seekingTime, duration = _this$props$player.duration;
          var time = seekingTime || currentTime;
          var percent = time / duration;
          return percent >= 1 ? 1 : percent;
        }
      }, {
        key: "getNewTime",
        value: function getNewTime(event) {
          var duration = this.props.player.duration;
          var distance = this.slider.calculateDistance(event);
          var newTime = distance * duration;
          return newTime === duration ? newTime - 0.1 : newTime;
        }
      }, {
        key: "handleMouseDown",
        value: function handleMouseDown() {
        }
      }, {
        key: "handleMouseUp",
        value: function handleMouseUp(event) {
          var actions = this.props.actions;
          var newTime = this.getNewTime(event);
          actions.seek(newTime);
          actions.handleEndSeeking(newTime);
        }
      }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
          var actions = this.props.actions;
          var newTime = this.getNewTime(event);
          actions.handleSeekingTime(newTime);
        }
      }, {
        key: "stepForward",
        value: function stepForward() {
          var actions = this.props.actions;
          actions.forward(5);
        }
      }, {
        key: "stepBack",
        value: function stepBack() {
          var actions = this.props.actions;
          actions.replay(5);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props, _this$props$player2 = _this$props.player, currentTime = _this$props$player2.currentTime, seekingTime = _this$props$player2.seekingTime, duration = _this$props$player2.duration, buffered = _this$props$player2.buffered, mouseTime = _this$props.mouseTime;
          var time = seekingTime || currentTime;
          return _react["default"].createElement(_Slider["default"], {
            ref: function ref(input) {
              _this2.slider = input;
            },
            label: "video progress bar",
            className: (0, _classnames["default"])("video-react-progress-holder", this.props.className),
            valuenow: (this.getPercent() * 100).toFixed(2),
            valuetext: (0, _utils.formatTime)(time, duration),
            onMouseDown: this.handleMouseDown,
            onMouseMove: this.handleMouseMove,
            onMouseUp: this.handleMouseUp,
            getPercent: this.getPercent,
            stepForward: this.stepForward,
            stepBack: this.stepBack
          }, _react["default"].createElement(_LoadProgressBar["default"], {
            buffered,
            currentTime: time,
            duration
          }), _react["default"].createElement(_MouseTimeDisplay["default"], {
            duration,
            mouseTime
          }), _react["default"].createElement(_PlayProgressBar["default"], {
            currentTime: time,
            duration
          }));
        }
      }]);
      return SeekBar2;
    }(_react.Component);
    exports["default"] = SeekBar;
    SeekBar.propTypes = propTypes;
    SeekBar.displayName = "SeekBar";
  }
});

// node_modules/video-react/lib/components/control-bar/ProgressControl.js
var require_ProgressControl = __commonJS({
  "node_modules/video-react/lib/components/control-bar/ProgressControl.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _extends2 = _interopRequireDefault(require_extends());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var Dom = _interopRequireWildcard(require_dom());
    var _SeekBar = _interopRequireDefault(require_SeekBar());
    var propTypes = {
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    var ProgressControl = function(_Component) {
      (0, _inherits2["default"])(ProgressControl2, _Component);
      function ProgressControl2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, ProgressControl2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ProgressControl2).call(this, props, context));
        _this.state = {
          mouseTime: {
            time: null,
            position: 0
          }
        };
        _this.handleMouseMoveThrottle = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(ProgressControl2, [{
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
          if (!event.pageX) {
            return;
          }
          var duration = this.props.player.duration;
          var node = this.seekBar;
          var newTime = Dom.getPointerPosition(node, event).x * duration;
          var position = event.pageX - Dom.findElPosition(node).left;
          this.setState({
            mouseTime: {
              time: newTime,
              position
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var className = this.props.className;
          return _react["default"].createElement("div", {
            onMouseMove: this.handleMouseMoveThrottle,
            className: (0, _classnames["default"])("video-react-progress-control video-react-control", className)
          }, _react["default"].createElement(_SeekBar["default"], (0, _extends2["default"])({
            mouseTime: this.state.mouseTime,
            ref: function ref(c) {
              _this2.seekBar = c;
            }
          }, this.props)));
        }
      }]);
      return ProgressControl2;
    }(_react.Component);
    exports["default"] = ProgressControl;
    ProgressControl.propTypes = propTypes;
    ProgressControl.displayName = "ProgressControl";
  }
});

// node_modules/video-react/lib/components/control-bar/PlayToggle.js
var require_PlayToggle = __commonJS({
  "node_modules/video-react/lib/components/control-bar/PlayToggle.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    var PlayToggle = function(_Component) {
      (0, _inherits2["default"])(PlayToggle2, _Component);
      function PlayToggle2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, PlayToggle2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlayToggle2).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(PlayToggle2, [{
        key: "handleClick",
        value: function handleClick() {
          var _this$props = this.props, actions = _this$props.actions, player = _this$props.player;
          if (player.paused) {
            actions.play();
          } else {
            actions.pause();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props2 = this.props, player = _this$props2.player, className = _this$props2.className;
          var controlText = player.paused ? "Play" : "Pause";
          return _react["default"].createElement("button", {
            ref: function ref(c) {
              _this2.button = c;
            },
            className: (0, _classnames["default"])(className, {
              "video-react-play-control": true,
              "video-react-control": true,
              "video-react-button": true,
              "video-react-paused": player.paused,
              "video-react-playing": !player.paused
            }),
            type: "button",
            tabIndex: "0",
            onClick: this.handleClick
          }, _react["default"].createElement("span", {
            className: "video-react-control-text"
          }, controlText));
        }
      }]);
      return PlayToggle2;
    }(_react.Component);
    exports["default"] = PlayToggle;
    PlayToggle.propTypes = propTypes;
    PlayToggle.displayName = "PlayToggle";
  }
});

// node_modules/video-react/lib/components/control-bar/ForwardReplayControl.js
var require_ForwardReplayControl = __commonJS({
  "node_modules/video-react/lib/components/control-bar/ForwardReplayControl.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var propTypes = {
      actions: _propTypes["default"].object,
      className: _propTypes["default"].string,
      seconds: _propTypes["default"].oneOf([5, 10, 30])
    };
    var defaultProps = {
      seconds: 10
    };
    var _default = function _default2(mode) {
      var ForwardReplayControl = function(_Component) {
        (0, _inherits2["default"])(ForwardReplayControl2, _Component);
        function ForwardReplayControl2(props, context) {
          var _this;
          (0, _classCallCheck2["default"])(this, ForwardReplayControl2);
          _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ForwardReplayControl2).call(this, props, context));
          _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
          return _this;
        }
        (0, _createClass2["default"])(ForwardReplayControl2, [{
          key: "handleClick",
          value: function handleClick() {
            var _this$props = this.props, actions = _this$props.actions, seconds = _this$props.seconds;
            if (mode === "forward") {
              actions.forward(seconds);
            } else {
              actions.replay(seconds);
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;
            var _this$props2 = this.props, seconds = _this$props2.seconds, className = _this$props2.className;
            var classNames = ["video-react-control", "video-react-button", "video-react-icon"];
            classNames.push("video-react-icon-".concat(mode, "-").concat(seconds), "video-react-".concat(mode, "-control"));
            if (className) {
              classNames.push(className);
            }
            return _react["default"].createElement("button", {
              ref: function ref(c) {
                _this2.button = c;
              },
              className: classNames.join(" "),
              type: "button",
              onClick: this.handleClick
            }, _react["default"].createElement("span", {
              className: "video-react-control-text"
            }, "".concat(mode, " ").concat(seconds, " seconds")));
          }
        }]);
        return ForwardReplayControl2;
      }(_react.Component);
      ForwardReplayControl.propTypes = propTypes;
      ForwardReplayControl.defaultProps = defaultProps;
      return ForwardReplayControl;
    };
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/control-bar/ForwardControl.js
var require_ForwardControl = __commonJS({
  "node_modules/video-react/lib/components/control-bar/ForwardControl.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _ForwardReplayControl = _interopRequireDefault(require_ForwardReplayControl());
    var ForwardControl = (0, _ForwardReplayControl["default"])("forward");
    ForwardControl.displayName = "ForwardControl";
    var _default = ForwardControl;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/control-bar/ReplayControl.js
var require_ReplayControl = __commonJS({
  "node_modules/video-react/lib/components/control-bar/ReplayControl.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _ForwardReplayControl = _interopRequireDefault(require_ForwardReplayControl());
    var ReplayControl = (0, _ForwardReplayControl["default"])("replay");
    ReplayControl.displayName = "ReplayControl";
    var _default = ReplayControl;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/control-bar/FullscreenToggle.js
var require_FullscreenToggle = __commonJS({
  "node_modules/video-react/lib/components/control-bar/FullscreenToggle.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    var FullscreenToggle = function(_Component) {
      (0, _inherits2["default"])(FullscreenToggle2, _Component);
      function FullscreenToggle2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, FullscreenToggle2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FullscreenToggle2).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(FullscreenToggle2, [{
        key: "handleClick",
        value: function handleClick() {
          var _this$props = this.props, player = _this$props.player, actions = _this$props.actions;
          actions.toggleFullscreen(player);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props2 = this.props, player = _this$props2.player, className = _this$props2.className;
          return _react["default"].createElement("button", {
            className: (0, _classnames["default"])(className, {
              "video-react-icon-fullscreen-exit": player.isFullscreen,
              "video-react-icon-fullscreen": !player.isFullscreen
            }, "video-react-fullscreen-control video-react-control video-react-button video-react-icon"),
            ref: function ref(c) {
              _this2.button = c;
            },
            type: "button",
            tabIndex: "0",
            onClick: this.handleClick
          }, _react["default"].createElement("span", {
            className: "video-react-control-text"
          }, "Non-Fullscreen"));
        }
      }]);
      return FullscreenToggle2;
    }(_react.Component);
    exports["default"] = FullscreenToggle;
    FullscreenToggle.propTypes = propTypes;
    FullscreenToggle.displayName = "FullscreenToggle";
  }
});

// node_modules/video-react/lib/components/time-controls/RemainingTimeDisplay.js
var require_RemainingTimeDisplay = __commonJS({
  "node_modules/video-react/lib/components/time-controls/RemainingTimeDisplay.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _utils = require_utils();
    var propTypes = {
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function RemainingTimeDisplay(_ref) {
      var _ref$player = _ref.player, currentTime = _ref$player.currentTime, duration = _ref$player.duration, className = _ref.className;
      var remainingTime = duration - currentTime;
      var formattedTime = (0, _utils.formatTime)(remainingTime);
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])("video-react-remaining-time video-react-time-control video-react-control", className)
      }, _react["default"].createElement("div", {
        className: "video-react-remaining-time-display",
        "aria-live": "off"
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Remaining Time "), "-".concat(formattedTime)));
    }
    RemainingTimeDisplay.propTypes = propTypes;
    RemainingTimeDisplay.displayName = "RemainingTimeDisplay";
    var _default = RemainingTimeDisplay;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/time-controls/CurrentTimeDisplay.js
var require_CurrentTimeDisplay = __commonJS({
  "node_modules/video-react/lib/components/time-controls/CurrentTimeDisplay.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _utils = require_utils();
    var propTypes = {
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function CurrentTimeDisplay(_ref) {
      var _ref$player = _ref.player, currentTime = _ref$player.currentTime, duration = _ref$player.duration, className = _ref.className;
      var formattedTime = (0, _utils.formatTime)(currentTime, duration);
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])("video-react-current-time video-react-time-control video-react-control", className)
      }, _react["default"].createElement("div", {
        className: "video-react-current-time-display",
        "aria-live": "off"
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Current Time "), formattedTime));
    }
    CurrentTimeDisplay.propTypes = propTypes;
    CurrentTimeDisplay.displayName = "CurrentTimeDisplay";
    var _default = CurrentTimeDisplay;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/time-controls/DurationDisplay.js
var require_DurationDisplay = __commonJS({
  "node_modules/video-react/lib/components/time-controls/DurationDisplay.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _utils = require_utils();
    var propTypes = {
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function DurationDisplay(_ref) {
      var duration = _ref.player.duration, className = _ref.className;
      var formattedTime = (0, _utils.formatTime)(duration);
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])(className, "video-react-duration video-react-time-control video-react-control")
      }, _react["default"].createElement("div", {
        className: "video-react-duration-display",
        "aria-live": "off"
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Duration Time "), formattedTime));
    }
    DurationDisplay.propTypes = propTypes;
    DurationDisplay.displayName = "DurationDisplay";
    var _default = DurationDisplay;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/time-controls/TimeDivider.js
var require_TimeDivider = __commonJS({
  "node_modules/video-react/lib/components/time-controls/TimeDivider.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = TimeDivider;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      separator: _propTypes["default"].string,
      className: _propTypes["default"].string
    };
    function TimeDivider(_ref) {
      var separator = _ref.separator, className = _ref.className;
      var separatorText = separator || "/";
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])("video-react-time-control video-react-time-divider", className),
        dir: "ltr"
      }, _react["default"].createElement("div", null, _react["default"].createElement("span", null, separatorText)));
    }
    TimeDivider.propTypes = propTypes;
    TimeDivider.displayName = "TimeDivider";
  }
});

// node_modules/video-react/lib/components/ClickableComponent.js
var require_ClickableComponent = __commonJS({
  "node_modules/video-react/lib/components/ClickableComponent.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _extends2 = _interopRequireDefault(require_extends());
    var _objectSpread22 = _interopRequireDefault(require_objectSpread());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      tagName: _propTypes["default"].string,
      onClick: _propTypes["default"].func.isRequired,
      onFocus: _propTypes["default"].func,
      onBlur: _propTypes["default"].func,
      className: _propTypes["default"].string
    };
    var defaultProps = {
      tagName: "div"
    };
    var ClickableComponent = function(_Component) {
      (0, _inherits2["default"])(ClickableComponent2, _Component);
      function ClickableComponent2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, ClickableComponent2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClickableComponent2).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeypress = _this.handleKeypress.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(ClickableComponent2, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount(e) {
          this.handleBlur(e);
        }
      }, {
        key: "handleKeypress",
        value: function handleKeypress(event) {
          if (event.which === 32 || event.which === 13) {
            event.preventDefault();
            this.handleClick(event);
          }
        }
      }, {
        key: "handleClick",
        value: function handleClick(event) {
          var onClick = this.props.onClick;
          onClick(event);
        }
      }, {
        key: "handleFocus",
        value: function handleFocus(e) {
          document.addEventListener("keydown", this.handleKeypress);
          if (this.props.onFocus) {
            this.props.onFocus(e);
          }
        }
      }, {
        key: "handleBlur",
        value: function handleBlur(e) {
          document.removeEventListener("keydown", this.handleKeypress);
          if (this.props.onBlur) {
            this.props.onBlur(e);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var Tag = this.props.tagName;
          var props = (0, _objectSpread22["default"])({}, this.props);
          delete props.tagName;
          delete props.className;
          return _react["default"].createElement(Tag, (0, _extends2["default"])({
            className: (0, _classnames["default"])(this.props.className),
            role: "button",
            tabIndex: "0",
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          }, props));
        }
      }]);
      return ClickableComponent2;
    }(_react.Component);
    exports["default"] = ClickableComponent;
    ClickableComponent.propTypes = propTypes;
    ClickableComponent.defaultProps = defaultProps;
    ClickableComponent.displayName = "ClickableComponent";
  }
});

// node_modules/video-react/lib/components/popup/Popup.js
var require_Popup = __commonJS({
  "node_modules/video-react/lib/components/popup/Popup.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var propTypes = {
      player: _propTypes["default"].object,
      children: _propTypes["default"].any
    };
    var Popup = function(_Component) {
      (0, _inherits2["default"])(Popup2, _Component);
      function Popup2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, Popup2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Popup2).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(Popup2, [{
        key: "handleClick",
        value: function handleClick(event) {
          event.preventDefault();
        }
      }, {
        key: "render",
        value: function render() {
          var children = this.props.children;
          return _react["default"].createElement("div", {
            className: "video-react-menu",
            onClick: this.handleClick
          }, _react["default"].createElement("div", {
            className: "video-react-menu-content"
          }, children));
        }
      }]);
      return Popup2;
    }(_react.Component);
    exports["default"] = Popup;
    Popup.propTypes = propTypes;
    Popup.displayName = "Popup";
  }
});

// node_modules/video-react/lib/components/popup/PopupButton.js
var require_PopupButton = __commonJS({
  "node_modules/video-react/lib/components/popup/PopupButton.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = PopupButton;
    var _extends2 = _interopRequireDefault(require_extends());
    var _objectSpread22 = _interopRequireDefault(require_objectSpread());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _ClickableComponent = _interopRequireDefault(require_ClickableComponent());
    var _Popup = _interopRequireDefault(require_Popup());
    var propTypes = {
      inline: _propTypes["default"].bool,
      onClick: _propTypes["default"].func.isRequired,
      onFocus: _propTypes["default"].func,
      onBlur: _propTypes["default"].func,
      className: _propTypes["default"].string
    };
    var defaultProps = {
      inline: true
    };
    function PopupButton(props) {
      var inline = props.inline, className = props.className;
      var ps = (0, _objectSpread22["default"])({}, props);
      delete ps.children;
      delete ps.inline;
      delete ps.className;
      return _react["default"].createElement(_ClickableComponent["default"], (0, _extends2["default"])({
        className: (0, _classnames["default"])(className, {
          "video-react-menu-button-inline": !!inline,
          "video-react-menu-button-popup": !inline
        }, "video-react-control video-react-button video-react-menu-button")
      }, ps), _react["default"].createElement(_Popup["default"], props));
    }
    PopupButton.propTypes = propTypes;
    PopupButton.defaultProps = defaultProps;
    PopupButton.displayName = "PopupButton";
  }
});

// node_modules/video-react/lib/components/volume-control/VolumeLevel.js
var require_VolumeLevel = __commonJS({
  "node_modules/video-react/lib/components/volume-control/VolumeLevel.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      percentage: _propTypes["default"].string,
      vertical: _propTypes["default"].bool,
      className: _propTypes["default"].string
    };
    var defaultProps = {
      percentage: "100%",
      vertical: false
    };
    function VolumeLevel(_ref) {
      var percentage = _ref.percentage, vertical = _ref.vertical, className = _ref.className;
      var style = {};
      if (vertical) {
        style.height = percentage;
      } else {
        style.width = percentage;
      }
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])(className, "video-react-volume-level"),
        style
      }, _react["default"].createElement("span", {
        className: "video-react-control-text"
      }));
    }
    VolumeLevel.propTypes = propTypes;
    VolumeLevel.defaultProps = defaultProps;
    VolumeLevel.displayName = "VolumeLevel";
    var _default = VolumeLevel;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/volume-control/VolumeBar.js
var require_VolumeBar = __commonJS({
  "node_modules/video-react/lib/components/volume-control/VolumeBar.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _extends2 = _interopRequireDefault(require_extends());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _Slider = _interopRequireDefault(require_Slider());
    var _VolumeLevel = _interopRequireDefault(require_VolumeLevel());
    var propTypes = {
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      className: _propTypes["default"].string,
      onFocus: _propTypes["default"].func,
      onBlur: _propTypes["default"].func
    };
    var VolumeBar = function(_Component) {
      (0, _inherits2["default"])(VolumeBar2, _Component);
      function VolumeBar2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, VolumeBar2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VolumeBar2).call(this, props, context));
        _this.state = {
          percentage: "0%"
        };
        _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handlePercentageChange = _this.handlePercentageChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.checkMuted = _this.checkMuted.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getPercent = _this.getPercent.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(VolumeBar2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
        }
      }, {
        key: "getPercent",
        value: function getPercent() {
          var player = this.props.player;
          if (player.muted) {
            return 0;
          }
          return player.volume;
        }
      }, {
        key: "checkMuted",
        value: function checkMuted() {
          var _this$props = this.props, player = _this$props.player, actions = _this$props.actions;
          if (player.muted) {
            actions.mute(false);
          }
        }
      }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
          var actions = this.props.actions;
          this.checkMuted();
          var distance = this.slider.calculateDistance(event);
          actions.changeVolume(distance);
        }
      }, {
        key: "stepForward",
        value: function stepForward() {
          var _this$props2 = this.props, player = _this$props2.player, actions = _this$props2.actions;
          this.checkMuted();
          actions.changeVolume(player.volume + 0.1);
        }
      }, {
        key: "stepBack",
        value: function stepBack() {
          var _this$props3 = this.props, player = _this$props3.player, actions = _this$props3.actions;
          this.checkMuted();
          actions.changeVolume(player.volume - 0.1);
        }
      }, {
        key: "handleFocus",
        value: function handleFocus(e) {
          if (this.props.onFocus) {
            this.props.onFocus(e);
          }
        }
      }, {
        key: "handleBlur",
        value: function handleBlur(e) {
          if (this.props.onBlur) {
            this.props.onBlur(e);
          }
        }
      }, {
        key: "handlePercentageChange",
        value: function handlePercentageChange(percentage) {
          if (percentage !== this.state.percentage) {
            this.setState({
              percentage
            });
          }
        }
      }, {
        key: "handleClick",
        value: function handleClick(event) {
          event.stopPropagation();
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props4 = this.props, player = _this$props4.player, className = _this$props4.className;
          var volume = (player.volume * 100).toFixed(2);
          return _react["default"].createElement(_Slider["default"], (0, _extends2["default"])({
            ref: function ref(c) {
              _this2.slider = c;
            },
            label: "volume level",
            valuenow: volume,
            valuetext: "".concat(volume, "%"),
            onMouseMove: this.handleMouseMove,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onClick: this.handleClick,
            sliderActive: this.handleFocus,
            sliderInactive: this.handleBlur,
            getPercent: this.getPercent,
            onPercentageChange: this.handlePercentageChange,
            stepForward: this.stepForward,
            stepBack: this.stepBack
          }, this.props, {
            className: (0, _classnames["default"])(className, "video-react-volume-bar video-react-slider-bar")
          }), _react["default"].createElement(_VolumeLevel["default"], this.props));
        }
      }]);
      return VolumeBar2;
    }(_react.Component);
    VolumeBar.propTypes = propTypes;
    VolumeBar.displayName = "VolumeBar";
    var _default = VolumeBar;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/control-bar/VolumeMenuButton.js
var require_VolumeMenuButton = __commonJS({
  "node_modules/video-react/lib/components/control-bar/VolumeMenuButton.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _extends2 = _interopRequireDefault(require_extends());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _PopupButton = _interopRequireDefault(require_PopupButton());
    var _VolumeBar = _interopRequireDefault(require_VolumeBar());
    var propTypes = {
      player: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      vertical: _propTypes["default"].bool,
      className: _propTypes["default"].string,
      alwaysShowVolume: _propTypes["default"].bool
    };
    var defaultProps = {
      vertical: false
    };
    var VolumeMenuButton = function(_Component) {
      (0, _inherits2["default"])(VolumeMenuButton2, _Component);
      function VolumeMenuButton2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, VolumeMenuButton2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VolumeMenuButton2).call(this, props, context));
        _this.state = {
          active: false
        };
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(VolumeMenuButton2, [{
        key: "handleClick",
        value: function handleClick() {
          var _this$props = this.props, player = _this$props.player, actions = _this$props.actions;
          actions.mute(!player.muted);
        }
      }, {
        key: "handleFocus",
        value: function handleFocus() {
          this.setState({
            active: true
          });
        }
      }, {
        key: "handleBlur",
        value: function handleBlur() {
          this.setState({
            active: false
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, vertical = _this$props2.vertical, player = _this$props2.player, className = _this$props2.className;
          var inline = !vertical;
          var level = this.volumeLevel;
          return _react["default"].createElement(_PopupButton["default"], {
            className: (0, _classnames["default"])(className, {
              "video-react-volume-menu-button-vertical": vertical,
              "video-react-volume-menu-button-horizontal": !vertical,
              "video-react-vol-muted": player.muted,
              "video-react-vol-0": level === 0 && !player.muted,
              "video-react-vol-1": level === 1,
              "video-react-vol-2": level === 2,
              "video-react-vol-3": level === 3,
              "video-react-slider-active": this.props.alwaysShowVolume || this.state.active,
              "video-react-lock-showing": this.props.alwaysShowVolume || this.state.active
            }, "video-react-volume-menu-button"),
            onClick: this.handleClick,
            inline
          }, _react["default"].createElement(_VolumeBar["default"], (0, _extends2["default"])({
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          }, this.props)));
        }
      }, {
        key: "volumeLevel",
        get: function get() {
          var _this$props$player = this.props.player, volume = _this$props$player.volume, muted = _this$props$player.muted;
          var level = 3;
          if (volume === 0 || muted) {
            level = 0;
          } else if (volume < 0.33) {
            level = 1;
          } else if (volume < 0.67) {
            level = 2;
          }
          return level;
        }
      }]);
      return VolumeMenuButton2;
    }(_react.Component);
    VolumeMenuButton.propTypes = propTypes;
    VolumeMenuButton.defaultProps = defaultProps;
    VolumeMenuButton.displayName = "VolumeMenuButton";
    var _default = VolumeMenuButton;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/menu/Menu.js
var require_Menu = __commonJS({
  "node_modules/video-react/lib/components/menu/Menu.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var propTypes = {
      children: _propTypes["default"].any
    };
    var Menu = function(_Component) {
      (0, _inherits2["default"])(Menu2, _Component);
      function Menu2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, Menu2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Menu2).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(Menu2, [{
        key: "handleClick",
        value: function handleClick(event) {
          event.preventDefault();
        }
      }, {
        key: "render",
        value: function render() {
          return _react["default"].createElement("div", {
            className: "video-react-menu video-react-lock-showing",
            role: "presentation",
            onClick: this.handleClick
          }, _react["default"].createElement("ul", {
            className: "video-react-menu-content"
          }, this.props.children));
        }
      }]);
      return Menu2;
    }(_react.Component);
    exports["default"] = Menu;
    Menu.propTypes = propTypes;
    Menu.displayName = "Menu";
  }
});

// node_modules/video-react/lib/components/menu/MenuItem.js
var require_MenuItem = __commonJS({
  "node_modules/video-react/lib/components/menu/MenuItem.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var propTypes = {
      item: _propTypes["default"].object,
      index: _propTypes["default"].number,
      activateIndex: _propTypes["default"].number,
      onSelectItem: _propTypes["default"].func
    };
    var MenuItem = function(_Component) {
      (0, _inherits2["default"])(MenuItem2, _Component);
      function MenuItem2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, MenuItem2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MenuItem2).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(MenuItem2, [{
        key: "handleClick",
        value: function handleClick() {
          var _this$props = this.props, index = _this$props.index, onSelectItem = _this$props.onSelectItem;
          onSelectItem(index);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, item = _this$props2.item, index = _this$props2.index, activateIndex = _this$props2.activateIndex;
          return _react["default"].createElement("li", {
            className: (0, _classnames["default"])({
              "video-react-menu-item": true,
              "video-react-selected": index === activateIndex
            }),
            role: "menuitem",
            onClick: this.handleClick
          }, item.label, _react["default"].createElement("span", {
            className: "video-react-control-text"
          }));
        }
      }]);
      return MenuItem2;
    }(_react.Component);
    exports["default"] = MenuItem;
    MenuItem.propTypes = propTypes;
    MenuItem.displayName = "MenuItem";
  }
});

// node_modules/video-react/lib/components/menu/MenuButton.js
var require_MenuButton = __commonJS({
  "node_modules/video-react/lib/components/menu/MenuButton.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _Menu = _interopRequireDefault(require_Menu());
    var _MenuItem = _interopRequireDefault(require_MenuItem());
    var _ClickableComponent = _interopRequireDefault(require_ClickableComponent());
    var propTypes = {
      inline: _propTypes["default"].bool,
      items: _propTypes["default"].array,
      className: _propTypes["default"].string,
      onSelectItem: _propTypes["default"].func,
      children: _propTypes["default"].any,
      selectedIndex: _propTypes["default"].number
    };
    var MenuButton = function(_Component) {
      (0, _inherits2["default"])(MenuButton2, _Component);
      function MenuButton2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, MenuButton2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MenuButton2).call(this, props, context));
        _this.state = {
          active: false,
          activateIndex: props.selectedIndex || 0
        };
        _this.commitSelection = _this.commitSelection.bind((0, _assertThisInitialized2["default"])(_this));
        _this.activateMenuItem = _this.activateMenuItem.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.renderMenu = _this.renderMenu.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleUpArrow = _this.handleUpArrow.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleDownArrow = _this.handleDownArrow.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleEscape = _this.handleEscape.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleReturn = _this.handleReturn.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleTab = _this.handleTab.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleIndexChange = _this.handleIndexChange.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(MenuButton2, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.selectedIndex !== this.props.selectedIndex) {
            this.activateMenuItem(this.props.selectedIndex);
          }
        }
      }, {
        key: "commitSelection",
        value: function commitSelection(index) {
          this.setState({
            activateIndex: index
          });
          this.handleIndexChange(index);
        }
      }, {
        key: "activateMenuItem",
        value: function activateMenuItem(index) {
          this.setState({
            activateIndex: index
          });
          this.handleIndexChange(index);
        }
      }, {
        key: "handleIndexChange",
        value: function handleIndexChange(index) {
          var onSelectItem = this.props.onSelectItem;
          onSelectItem(index);
        }
      }, {
        key: "handleClick",
        value: function handleClick() {
          this.setState(function(prevState) {
            return {
              active: !prevState.active
            };
          });
        }
      }, {
        key: "handleFocus",
        value: function handleFocus() {
          document.addEventListener("keydown", this.handleKeyPress);
        }
      }, {
        key: "handleBlur",
        value: function handleBlur() {
          this.setState({
            active: false
          });
          document.removeEventListener("keydown", this.handleKeyPress);
        }
      }, {
        key: "handleUpArrow",
        value: function handleUpArrow(e) {
          var items = this.props.items;
          if (this.state.active) {
            e.preventDefault();
            var newIndex = this.state.activateIndex - 1;
            if (newIndex < 0) {
              newIndex = items.length ? items.length - 1 : 0;
            }
            this.activateMenuItem(newIndex);
          }
        }
      }, {
        key: "handleDownArrow",
        value: function handleDownArrow(e) {
          var items = this.props.items;
          if (this.state.active) {
            e.preventDefault();
            var newIndex = this.state.activateIndex + 1;
            if (newIndex >= items.length) {
              newIndex = 0;
            }
            this.activateMenuItem(newIndex);
          }
        }
      }, {
        key: "handleTab",
        value: function handleTab(e) {
          if (this.state.active) {
            e.preventDefault();
            this.commitSelection(this.state.activateIndex);
          }
        }
      }, {
        key: "handleReturn",
        value: function handleReturn(e) {
          e.preventDefault();
          if (this.state.active) {
            this.commitSelection(this.state.activateIndex);
          } else {
            this.setState({
              active: true
            });
          }
        }
      }, {
        key: "handleEscape",
        value: function handleEscape() {
          this.setState({
            active: false,
            activateIndex: 0
          });
        }
      }, {
        key: "handleKeyPress",
        value: function handleKeyPress(event) {
          if (event.which === 27) {
            this.handleEscape(event);
          } else if (event.which === 9) {
            this.handleTab(event);
          } else if (event.which === 13) {
            this.handleReturn(event);
          } else if (event.which === 38) {
            this.handleUpArrow(event);
          } else if (event.which === 40) {
            this.handleDownArrow(event);
          }
        }
      }, {
        key: "handleSelectItem",
        value: function handleSelectItem(i) {
          this.commitSelection(i);
        }
      }, {
        key: "renderMenu",
        value: function renderMenu() {
          var _this2 = this;
          if (!this.state.active) {
            return null;
          }
          var items = this.props.items;
          return _react["default"].createElement(_Menu["default"], null, items.map(function(item, i) {
            return _react["default"].createElement(_MenuItem["default"], {
              item,
              index: i,
              onSelectItem: _this2.handleSelectItem,
              activateIndex: _this2.state.activateIndex,
              key: "item-".concat(i++)
            });
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          var _this$props = this.props, inline = _this$props.inline, className = _this$props.className;
          return _react["default"].createElement(_ClickableComponent["default"], {
            className: (0, _classnames["default"])(className, {
              "video-react-menu-button-inline": !!inline,
              "video-react-menu-button-popup": !inline,
              "video-react-menu-button-active": this.state.active
            }, "video-react-control video-react-button video-react-menu-button"),
            role: "button",
            tabIndex: "0",
            ref: function ref(c) {
              _this3.menuButton = c;
            },
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          }, this.props.children, this.renderMenu());
        }
      }]);
      return MenuButton2;
    }(_react.Component);
    exports["default"] = MenuButton;
    MenuButton.propTypes = propTypes;
    MenuButton.displayName = "MenuButton";
  }
});

// node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton.js
var require_PlaybackRateMenuButton = __commonJS({
  "node_modules/video-react/lib/components/control-bar/PlaybackRateMenuButton.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _MenuButton = _interopRequireDefault(require_MenuButton());
    var propTypes = {
      player: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      rates: _propTypes["default"].array,
      className: _propTypes["default"].string
    };
    var defaultProps = {
      rates: [2, 1.5, 1.25, 1, 0.5, 0.25]
    };
    var PlaybackRateMenuButton = function(_Component) {
      (0, _inherits2["default"])(PlaybackRateMenuButton2, _Component);
      function PlaybackRateMenuButton2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, PlaybackRateMenuButton2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlaybackRateMenuButton2).call(this, props, context));
        _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(PlaybackRateMenuButton2, [{
        key: "handleSelectItem",
        value: function handleSelectItem(index) {
          var _this$props = this.props, rates = _this$props.rates, actions = _this$props.actions;
          if (index >= 0 && index < rates.length) {
            actions.changeRate(rates[index]);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, rates = _this$props2.rates, player = _this$props2.player;
          var items = rates.map(function(rate) {
            return {
              label: "".concat(rate, "x"),
              value: rate
            };
          });
          var selectedIndex = rates.indexOf(player.playbackRate) || 0;
          return _react["default"].createElement(_MenuButton["default"], {
            className: (0, _classnames["default"])("video-react-playback-rate", this.props.className),
            onSelectItem: this.handleSelectItem,
            items,
            selectedIndex
          }, _react["default"].createElement("span", {
            className: "video-react-control-text"
          }, "Playback Rate"), _react["default"].createElement("div", {
            className: "video-react-playback-rate-value"
          }, "".concat(player.playbackRate.toFixed(2), "x")));
        }
      }]);
      return PlaybackRateMenuButton2;
    }(_react.Component);
    PlaybackRateMenuButton.propTypes = propTypes;
    PlaybackRateMenuButton.defaultProps = defaultProps;
    PlaybackRateMenuButton.displayName = "PlaybackRateMenuButton";
    var _default = PlaybackRateMenuButton;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/components/control-bar/ControlBar.js
var require_ControlBar = __commonJS({
  "node_modules/video-react/lib/components/control-bar/ControlBar.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _objectWithoutProperties2 = _interopRequireDefault(require_objectWithoutProperties());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _ProgressControl = _interopRequireDefault(require_ProgressControl());
    var _PlayToggle = _interopRequireDefault(require_PlayToggle());
    var _ForwardControl = _interopRequireDefault(require_ForwardControl());
    var _ReplayControl = _interopRequireDefault(require_ReplayControl());
    var _FullscreenToggle = _interopRequireDefault(require_FullscreenToggle());
    var _RemainingTimeDisplay = _interopRequireDefault(require_RemainingTimeDisplay());
    var _CurrentTimeDisplay = _interopRequireDefault(require_CurrentTimeDisplay());
    var _DurationDisplay = _interopRequireDefault(require_DurationDisplay());
    var _TimeDivider = _interopRequireDefault(require_TimeDivider());
    var _VolumeMenuButton = _interopRequireDefault(require_VolumeMenuButton());
    var _PlaybackRateMenuButton = _interopRequireDefault(require_PlaybackRateMenuButton());
    var _utils = require_utils();
    var propTypes = {
      children: _propTypes["default"].any,
      autoHide: _propTypes["default"].bool,
      autoHideTime: _propTypes["default"].number,
      // used in Player
      disableDefaultControls: _propTypes["default"].bool,
      disableCompletely: _propTypes["default"].bool,
      className: _propTypes["default"].string
    };
    var defaultProps = {
      autoHide: true,
      disableCompletely: false
    };
    var ControlBar = function(_Component) {
      (0, _inherits2["default"])(ControlBar2, _Component);
      function ControlBar2(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, ControlBar2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ControlBar2).call(this, props));
        _this.getDefaultChildren = _this.getDefaultChildren.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getFullChildren = _this.getFullChildren.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(ControlBar2, [{
        key: "getDefaultChildren",
        value: function getDefaultChildren() {
          return [_react["default"].createElement(_PlayToggle["default"], {
            key: "play-toggle",
            order: 1
          }), _react["default"].createElement(_VolumeMenuButton["default"], {
            key: "volume-menu-button",
            order: 4
          }), _react["default"].createElement(_CurrentTimeDisplay["default"], {
            key: "current-time-display",
            order: 5.1
          }), _react["default"].createElement(_TimeDivider["default"], {
            key: "time-divider",
            order: 5.2
          }), _react["default"].createElement(_DurationDisplay["default"], {
            key: "duration-display",
            order: 5.3
          }), _react["default"].createElement(_ProgressControl["default"], {
            key: "progress-control",
            order: 6
          }), _react["default"].createElement(_FullscreenToggle["default"], {
            key: "fullscreen-toggle",
            order: 8
          })];
        }
      }, {
        key: "getFullChildren",
        value: function getFullChildren() {
          return [_react["default"].createElement(_PlayToggle["default"], {
            key: "play-toggle",
            order: 1
          }), _react["default"].createElement(_ReplayControl["default"], {
            key: "replay-control",
            order: 2
          }), _react["default"].createElement(_ForwardControl["default"], {
            key: "forward-control",
            order: 3
          }), _react["default"].createElement(_VolumeMenuButton["default"], {
            key: "volume-menu-button",
            order: 4
          }), _react["default"].createElement(_CurrentTimeDisplay["default"], {
            key: "current-time-display",
            order: 5
          }), _react["default"].createElement(_TimeDivider["default"], {
            key: "time-divider",
            order: 6
          }), _react["default"].createElement(_DurationDisplay["default"], {
            key: "duration-display",
            order: 7
          }), _react["default"].createElement(_ProgressControl["default"], {
            key: "progress-control",
            order: 8
          }), _react["default"].createElement(_RemainingTimeDisplay["default"], {
            key: "remaining-time-display",
            order: 9
          }), _react["default"].createElement(_PlaybackRateMenuButton["default"], {
            rates: [1, 1.25, 1.5, 2],
            key: "playback-rate",
            order: 10
          }), _react["default"].createElement(_FullscreenToggle["default"], {
            key: "fullscreen-toggle",
            order: 11
          })];
        }
      }, {
        key: "getChildren",
        value: function getChildren() {
          var children = _react["default"].Children.toArray(this.props.children);
          var defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
          var _this$props = this.props, className = _this$props.className, parentProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className"]);
          return (0, _utils.mergeAndSortChildren)(defaultChildren, children, parentProps);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, autoHide = _this$props2.autoHide, className = _this$props2.className, disableCompletely = _this$props2.disableCompletely;
          var children = this.getChildren();
          return disableCompletely ? null : _react["default"].createElement("div", {
            className: (0, _classnames["default"])("video-react-control-bar", {
              "video-react-control-bar-auto-hide": autoHide
            }, className)
          }, children);
        }
      }]);
      return ControlBar2;
    }(_react.Component);
    exports["default"] = ControlBar;
    ControlBar.propTypes = propTypes;
    ControlBar.defaultProps = defaultProps;
    ControlBar.displayName = "ControlBar";
  }
});

// node_modules/video-react/lib/utils/browser.js
var require_browser = __commonJS({
  "node_modules/video-react/lib/utils/browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IS_IOS = exports.IS_IPOD = exports.IS_IPHONE = exports.IS_IPAD = void 0;
    var USER_AGENT = typeof window !== "undefined" && window.navigator ? window.navigator.userAgent : "";
    var IS_IPAD = /iPad/i.test(USER_AGENT);
    exports.IS_IPAD = IS_IPAD;
    var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
    exports.IS_IPHONE = IS_IPHONE;
    var IS_IPOD = /iPod/i.test(USER_AGENT);
    exports.IS_IPOD = IS_IPOD;
    var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
    exports.IS_IOS = IS_IOS;
  }
});

// node_modules/video-react/lib/components/Player.js
var require_Player = __commonJS({
  "node_modules/video-react/lib/components/Player.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _objectSpread22 = _interopRequireDefault(require_objectSpread());
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var _objectWithoutProperties2 = _interopRequireDefault(require_objectWithoutProperties());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _Manager = _interopRequireDefault(require_Manager());
    var _BigPlayButton = _interopRequireDefault(require_BigPlayButton());
    var _LoadingSpinner = _interopRequireDefault(require_LoadingSpinner());
    var _PosterImage = _interopRequireDefault(require_PosterImage());
    var _Video = _interopRequireDefault(require_Video());
    var _Bezel = _interopRequireDefault(require_Bezel());
    var _Shortcut = _interopRequireDefault(require_Shortcut());
    var _ControlBar = _interopRequireDefault(require_ControlBar());
    var browser = _interopRequireWildcard(require_browser());
    var _dom = require_dom();
    var _utils = require_utils();
    var _fullscreen = _interopRequireDefault(require_fullscreen());
    var propTypes = {
      children: _propTypes["default"].any,
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      fluid: _propTypes["default"].bool,
      muted: _propTypes["default"].bool,
      playsInline: _propTypes["default"].bool,
      aspectRatio: _propTypes["default"].string,
      className: _propTypes["default"].string,
      videoId: _propTypes["default"].string,
      startTime: _propTypes["default"].number,
      loop: _propTypes["default"].bool,
      autoPlay: _propTypes["default"].bool,
      src: _propTypes["default"].string,
      poster: _propTypes["default"].string,
      preload: _propTypes["default"].oneOf(["auto", "metadata", "none"]),
      onLoadStart: _propTypes["default"].func,
      onWaiting: _propTypes["default"].func,
      onCanPlay: _propTypes["default"].func,
      onCanPlayThrough: _propTypes["default"].func,
      onPlaying: _propTypes["default"].func,
      onEnded: _propTypes["default"].func,
      onSeeking: _propTypes["default"].func,
      onSeeked: _propTypes["default"].func,
      onPlay: _propTypes["default"].func,
      onPause: _propTypes["default"].func,
      onProgress: _propTypes["default"].func,
      onDurationChange: _propTypes["default"].func,
      onError: _propTypes["default"].func,
      onSuspend: _propTypes["default"].func,
      onAbort: _propTypes["default"].func,
      onEmptied: _propTypes["default"].func,
      onStalled: _propTypes["default"].func,
      onLoadedMetadata: _propTypes["default"].func,
      onLoadedData: _propTypes["default"].func,
      onTimeUpdate: _propTypes["default"].func,
      onRateChange: _propTypes["default"].func,
      onVolumeChange: _propTypes["default"].func,
      store: _propTypes["default"].object
    };
    var defaultProps = {
      fluid: true,
      muted: false,
      playsInline: false,
      preload: "auto",
      aspectRatio: "auto"
    };
    var Player = function(_Component) {
      (0, _inherits2["default"])(Player2, _Component);
      function Player2(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, Player2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Player2).call(this, props));
        _this.controlsHideTimer = null;
        _this.video = null;
        _this.manager = new _Manager["default"](props.store);
        _this.actions = _this.manager.getActions();
        _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind((0, _assertThisInitialized2["default"])(_this)));
        _this.getStyle = _this.getStyle.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getChildren = _this.getChildren.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseMove = (0, _utils.throttle)(_this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this)), 250);
        _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
        _this.startControlsTimer = _this.startControlsTimer.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFullScreenChange = _this.handleFullScreenChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(Player2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.handleResize();
          window.addEventListener("resize", this.handleResize);
          _fullscreen["default"].addEventListener(this.handleFullScreenChange);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
          _fullscreen["default"].removeEventListener(this.handleFullScreenChange);
          if (this.controlsHideTimer) {
            window.clearTimeout(this.controlsHideTimer);
          }
        }
      }, {
        key: "getDefaultChildren",
        value: function getDefaultChildren(originalChildren) {
          var _this2 = this;
          return [_react["default"].createElement(_Video["default"], {
            ref: function ref(c) {
              _this2.video = c;
              _this2.manager.video = _this2.video;
            },
            key: "video",
            order: 0
          }, originalChildren), _react["default"].createElement(_PosterImage["default"], {
            key: "poster-image",
            order: 1
          }), _react["default"].createElement(_LoadingSpinner["default"], {
            key: "loading-spinner",
            order: 2
          }), _react["default"].createElement(_Bezel["default"], {
            key: "bezel",
            order: 3
          }), _react["default"].createElement(_BigPlayButton["default"], {
            key: "big-play-button",
            order: 4
          }), _react["default"].createElement(_ControlBar["default"], {
            key: "control-bar",
            order: 5
          }), _react["default"].createElement(_Shortcut["default"], {
            key: "shortcut",
            order: 99
          })];
        }
      }, {
        key: "getChildren",
        value: function getChildren(props) {
          var _ = props.className, originalChildren = props.children, propsWithoutChildren = (0, _objectWithoutProperties2["default"])(props, ["className", "children"]);
          var children = _react["default"].Children.toArray(this.props.children).filter(function(e) {
            return !(0, _utils.isVideoChild)(e);
          });
          var defaultChildren = this.getDefaultChildren(originalChildren);
          return (0, _utils.mergeAndSortChildren)(defaultChildren, children, propsWithoutChildren);
        }
      }, {
        key: "setWidthOrHeight",
        value: function setWidthOrHeight(style, name, value) {
          var styleVal;
          if (typeof value === "string") {
            if (value === "auto") {
              styleVal = "auto";
            } else if (value.match(/\d+%/)) {
              styleVal = value;
            }
          } else if (typeof value === "number") {
            styleVal = "".concat(value, "px");
          }
          Object.assign(style, (0, _defineProperty2["default"])({}, name, styleVal));
        }
      }, {
        key: "getStyle",
        value: function getStyle() {
          var _this$props = this.props, fluid = _this$props.fluid, propsAspectRatio = _this$props.aspectRatio, propsHeight = _this$props.height, propsWidth = _this$props.width;
          var _this$manager$getStat = this.manager.getState(), player = _this$manager$getStat.player;
          var style = {};
          var width;
          var height;
          var aspectRatio;
          if (propsAspectRatio !== void 0 && propsAspectRatio !== "auto") {
            aspectRatio = propsAspectRatio;
          } else if (player.videoWidth) {
            aspectRatio = "".concat(player.videoWidth, ":").concat(player.videoHeight);
          } else {
            aspectRatio = "16:9";
          }
          var ratioParts = aspectRatio.split(":");
          var ratioMultiplier = ratioParts[1] / ratioParts[0];
          if (propsWidth !== void 0) {
            width = propsWidth;
          } else if (propsHeight !== void 0) {
            width = propsHeight / ratioMultiplier;
          } else {
            width = player.videoWidth || 400;
          }
          if (propsHeight !== void 0) {
            height = propsHeight;
          } else {
            height = width * ratioMultiplier;
          }
          if (fluid) {
            style.paddingTop = "".concat(ratioMultiplier * 100, "%");
          } else {
            this.setWidthOrHeight(style, "width", width);
            this.setWidthOrHeight(style, "height", height);
          }
          return style;
        }
        // get redux state
        // { player, operation }
      }, {
        key: "getState",
        value: function getState() {
          return this.manager.getState();
        }
        // get playback rate
      }, {
        key: "play",
        // play the video
        value: function play() {
          this.video.play();
        }
        // pause the video
      }, {
        key: "pause",
        value: function pause() {
          this.video.pause();
        }
        // Change the video source and re-load the video:
      }, {
        key: "load",
        value: function load() {
          this.video.load();
        }
        // Add a new text track to the video
      }, {
        key: "addTextTrack",
        value: function addTextTrack() {
          var _this$video;
          (_this$video = this.video).addTextTrack.apply(_this$video, arguments);
        }
        // Check if your browser can play different types of video:
      }, {
        key: "canPlayType",
        value: function canPlayType() {
          var _this$video2;
          (_this$video2 = this.video).canPlayType.apply(_this$video2, arguments);
        }
        // seek video by time
      }, {
        key: "seek",
        value: function seek(time) {
          this.video.seek(time);
        }
        // jump forward x seconds
      }, {
        key: "forward",
        value: function forward(seconds) {
          this.video.forward(seconds);
        }
        // jump back x seconds
      }, {
        key: "replay",
        value: function replay(seconds) {
          this.video.replay(seconds);
        }
        // enter or exist full screen
      }, {
        key: "toggleFullscreen",
        value: function toggleFullscreen() {
          this.video.toggleFullscreen();
        }
        // subscribe to player state change
      }, {
        key: "subscribeToStateChange",
        value: function subscribeToStateChange(listener) {
          return this.manager.subscribeToPlayerStateChange(listener);
        }
        // player resize
      }, {
        key: "handleResize",
        value: function handleResize() {
        }
      }, {
        key: "handleFullScreenChange",
        value: function handleFullScreenChange(event) {
          if (event.target === this.manager.rootElement) {
            this.actions.handleFullscreenChange(_fullscreen["default"].isFullscreen);
          }
        }
      }, {
        key: "handleMouseDown",
        value: function handleMouseDown() {
          this.startControlsTimer();
        }
      }, {
        key: "handleMouseMove",
        value: function handleMouseMove() {
          this.startControlsTimer();
        }
      }, {
        key: "handleKeyDown",
        value: function handleKeyDown() {
          this.startControlsTimer();
        }
      }, {
        key: "startControlsTimer",
        value: function startControlsTimer() {
          var _this3 = this;
          var controlBarActiveTime = 3e3;
          _react["default"].Children.forEach(this.props.children, function(element) {
            if (!_react["default"].isValidElement(element) || element.type !== _ControlBar["default"]) {
              return;
            }
            var autoHideTime = element.props.autoHideTime;
            if (typeof autoHideTime === "number") {
              controlBarActiveTime = autoHideTime;
            }
          });
          this.actions.userActivate(true);
          clearTimeout(this.controlsHideTimer);
          this.controlsHideTimer = setTimeout(function() {
            _this3.actions.userActivate(false);
          }, controlBarActiveTime);
        }
      }, {
        key: "handleStateChange",
        value: function handleStateChange(state, prevState) {
          if (state.isFullscreen !== prevState.isFullscreen) {
            this.handleResize();
            (0, _dom.focusNode)(this.manager.rootElement);
          }
          this.forceUpdate();
        }
      }, {
        key: "handleFocus",
        value: function handleFocus() {
          this.actions.activate(true);
        }
      }, {
        key: "handleBlur",
        value: function handleBlur() {
          this.actions.activate(false);
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;
          var fluid = this.props.fluid;
          var _this$manager$getStat2 = this.manager.getState(), player = _this$manager$getStat2.player;
          var paused = player.paused, hasStarted = player.hasStarted, waiting = player.waiting, seeking = player.seeking, isFullscreen = player.isFullscreen, userActivity = player.userActivity;
          var props = (0, _objectSpread22["default"])({}, this.props, {
            player,
            actions: this.actions,
            manager: this.manager,
            store: this.manager.store,
            video: this.video ? this.video.video : null
          });
          var children = this.getChildren(props);
          return _react["default"].createElement("div", {
            className: (0, _classnames["default"])({
              "video-react-controls-enabled": true,
              "video-react-has-started": hasStarted,
              "video-react-paused": paused,
              "video-react-playing": !paused,
              "video-react-waiting": waiting,
              "video-react-seeking": seeking,
              "video-react-fluid": fluid,
              "video-react-fullscreen": isFullscreen,
              "video-react-user-inactive": !userActivity,
              "video-react-user-active": userActivity,
              "video-react-workinghover": !browser.IS_IOS
            }, "video-react", this.props.className),
            style: this.getStyle(),
            ref: function ref(c) {
              _this4.manager.rootElement = c;
            },
            role: "region",
            onTouchStart: this.handleMouseDown,
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleMouseMove,
            onMouseMove: this.handleMouseMove,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            tabIndex: "-1"
          }, children);
        }
      }, {
        key: "playbackRate",
        get: function get() {
          return this.video.playbackRate;
        },
        set: function set(rate) {
          this.video.playbackRate = rate;
        }
      }, {
        key: "muted",
        get: function get() {
          return this.video.muted;
        },
        set: function set(val) {
          this.video.muted = val;
        }
      }, {
        key: "volume",
        get: function get() {
          return this.video.volume;
        },
        set: function set(val) {
          this.video.volume = val;
        }
        // video width
      }, {
        key: "videoWidth",
        get: function get() {
          return this.video.videoWidth;
        }
        // video height
      }, {
        key: "videoHeight",
        get: function get() {
          return this.video.videoHeight;
        }
      }]);
      return Player2;
    }(_react.Component);
    exports["default"] = Player;
    Player.contextTypes = {
      store: _propTypes["default"].object
    };
    Player.propTypes = propTypes;
    Player.defaultProps = defaultProps;
    Player.displayName = "Player";
  }
});

// node_modules/video-react/lib/components/control-bar/PlaybackRate.js
var require_PlaybackRate = __commonJS({
  "node_modules/video-react/lib/components/control-bar/PlaybackRate.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _react = _interopRequireWildcard(require_react());
    var _PlaybackRateMenuButton = _interopRequireDefault(require_PlaybackRateMenuButton());
    var _utils = require_utils();
    var PlaybackRate = function(_Component) {
      (0, _inherits2["default"])(PlaybackRate2, _Component);
      function PlaybackRate2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, PlaybackRate2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlaybackRate2).call(this, props, context));
        (0, _utils.deprecatedWarning)("PlaybackRate", "PlaybackRateMenuButton");
        return _this;
      }
      (0, _createClass2["default"])(PlaybackRate2, [{
        key: "render",
        value: function render() {
          return _react["default"].createElement(_PlaybackRateMenuButton["default"], this.props);
        }
      }]);
      return PlaybackRate2;
    }(_react.Component);
    exports["default"] = PlaybackRate;
    PlaybackRate.displayName = "PlaybackRate";
  }
});

// node_modules/video-react/lib/components/control-bar/ClosedCaptionButton.js
var require_ClosedCaptionButton = __commonJS({
  "node_modules/video-react/lib/components/control-bar/ClosedCaptionButton.js"(exports) {
    "use strict";
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireWildcard(require_react());
    var _classnames = _interopRequireDefault(require_classnames());
    var _MenuButton = _interopRequireDefault(require_MenuButton());
    var propTypes = {
      player: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      className: _propTypes["default"].string,
      offMenuText: _propTypes["default"].string,
      showOffMenu: _propTypes["default"].bool,
      kinds: _propTypes["default"].array
    };
    var defaultProps = {
      offMenuText: "Off",
      showOffMenu: true,
      kinds: ["captions", "subtitles"]
      // `kind`s of TextTrack to look for to associate it with this menu.
    };
    var ClosedCaptionButton = function(_Component) {
      (0, _inherits2["default"])(ClosedCaptionButton2, _Component);
      function ClosedCaptionButton2(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, ClosedCaptionButton2);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClosedCaptionButton2).call(this, props, context));
        _this.getTextTrackItems = _this.getTextTrackItems.bind((0, _assertThisInitialized2["default"])(_this));
        _this.updateState = _this.updateState.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
        _this.state = _this.getTextTrackItems();
        return _this;
      }
      (0, _createClass2["default"])(ClosedCaptionButton2, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.updateState();
        }
      }, {
        key: "getTextTrackItems",
        value: function getTextTrackItems() {
          var _this$props = this.props, kinds = _this$props.kinds, player = _this$props.player, offMenuText = _this$props.offMenuText, showOffMenu = _this$props.showOffMenu;
          var textTracks = player.textTracks, activeTextTrack = player.activeTextTrack;
          var textTrackItems = {
            items: [],
            selectedIndex: 0
          };
          var tracks = Array.from(textTracks || []);
          if (tracks.length === 0) {
            return textTrackItems;
          }
          if (showOffMenu) {
            textTrackItems.items.push({
              label: offMenuText || "Off",
              value: null
            });
          }
          tracks.forEach(function(textTrack) {
            if (kinds.length && !kinds.includes(textTrack.kind)) {
              return;
            }
            textTrackItems.items.push({
              label: textTrack.label,
              value: textTrack.language
            });
          });
          textTrackItems.selectedIndex = textTrackItems.items.findIndex(function(item) {
            return activeTextTrack && activeTextTrack.language === item.value;
          });
          if (textTrackItems.selectedIndex === -1) {
            textTrackItems.selectedIndex = 0;
          }
          return textTrackItems;
        }
      }, {
        key: "updateState",
        value: function updateState() {
          var textTrackItems = this.getTextTrackItems();
          if (textTrackItems.selectedIndex !== this.state.selectedIndex || !this.textTrackItemsAreEqual(textTrackItems.items, this.state.items)) {
            this.setState(textTrackItems);
          }
        }
      }, {
        key: "textTrackItemsAreEqual",
        value: function textTrackItemsAreEqual(items1, items2) {
          if (items1.length !== items2.length) {
            return false;
          }
          for (var i = 0; i < items1.length; i++) {
            if (!items2[i] || items1[i].label !== items2[i].label || items1[i].value !== items2[i].value) {
              return false;
            }
          }
          return true;
        }
      }, {
        key: "handleSelectItem",
        value: function handleSelectItem(index) {
          var _this$props2 = this.props, player = _this$props2.player, actions = _this$props2.actions, showOffMenu = _this$props2.showOffMenu;
          var textTracks = player.textTracks;
          Array.from(textTracks).forEach(function(textTrack, i) {
            if (index === (showOffMenu ? i + 1 : i)) {
              textTrack.mode = "showing";
              actions.activateTextTrack(textTrack);
            } else {
              textTrack.mode = "hidden";
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$state = this.state, items = _this$state.items, selectedIndex = _this$state.selectedIndex;
          return _react["default"].createElement(_MenuButton["default"], {
            className: (0, _classnames["default"])("video-react-closed-caption", this.props.className),
            onSelectItem: this.handleSelectItem,
            items,
            selectedIndex
          }, _react["default"].createElement("span", {
            className: "video-react-control-text"
          }, "Closed Caption"));
        }
      }]);
      return ClosedCaptionButton2;
    }(_react.Component);
    ClosedCaptionButton.propTypes = propTypes;
    ClosedCaptionButton.defaultProps = defaultProps;
    ClosedCaptionButton.displayName = "ClosedCaptionButton";
    var _default = ClosedCaptionButton;
    exports["default"] = _default;
  }
});

// node_modules/video-react/lib/index.js
var require_lib = __commonJS({
  "node_modules/video-react/lib/index.js"(exports) {
    var _interopRequireWildcard = require_interopRequireWildcard();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Player", {
      enumerable: true,
      get: function get() {
        return _Player["default"];
      }
    });
    Object.defineProperty(exports, "Video", {
      enumerable: true,
      get: function get() {
        return _Video["default"];
      }
    });
    Object.defineProperty(exports, "BigPlayButton", {
      enumerable: true,
      get: function get() {
        return _BigPlayButton["default"];
      }
    });
    Object.defineProperty(exports, "LoadingSpinner", {
      enumerable: true,
      get: function get() {
        return _LoadingSpinner["default"];
      }
    });
    Object.defineProperty(exports, "PosterImage", {
      enumerable: true,
      get: function get() {
        return _PosterImage["default"];
      }
    });
    Object.defineProperty(exports, "Slider", {
      enumerable: true,
      get: function get() {
        return _Slider["default"];
      }
    });
    Object.defineProperty(exports, "Bezel", {
      enumerable: true,
      get: function get() {
        return _Bezel["default"];
      }
    });
    Object.defineProperty(exports, "Shortcut", {
      enumerable: true,
      get: function get() {
        return _Shortcut["default"];
      }
    });
    Object.defineProperty(exports, "ControlBar", {
      enumerable: true,
      get: function get() {
        return _ControlBar["default"];
      }
    });
    Object.defineProperty(exports, "PlayToggle", {
      enumerable: true,
      get: function get() {
        return _PlayToggle["default"];
      }
    });
    Object.defineProperty(exports, "ForwardControl", {
      enumerable: true,
      get: function get() {
        return _ForwardControl["default"];
      }
    });
    Object.defineProperty(exports, "ReplayControl", {
      enumerable: true,
      get: function get() {
        return _ReplayControl["default"];
      }
    });
    Object.defineProperty(exports, "FullscreenToggle", {
      enumerable: true,
      get: function get() {
        return _FullscreenToggle["default"];
      }
    });
    Object.defineProperty(exports, "ProgressControl", {
      enumerable: true,
      get: function get() {
        return _ProgressControl["default"];
      }
    });
    Object.defineProperty(exports, "SeekBar", {
      enumerable: true,
      get: function get() {
        return _SeekBar["default"];
      }
    });
    Object.defineProperty(exports, "PlayProgressBar", {
      enumerable: true,
      get: function get() {
        return _PlayProgressBar["default"];
      }
    });
    Object.defineProperty(exports, "LoadProgressBar", {
      enumerable: true,
      get: function get() {
        return _LoadProgressBar["default"];
      }
    });
    Object.defineProperty(exports, "MouseTimeDisplay", {
      enumerable: true,
      get: function get() {
        return _MouseTimeDisplay["default"];
      }
    });
    Object.defineProperty(exports, "VolumeMenuButton", {
      enumerable: true,
      get: function get() {
        return _VolumeMenuButton["default"];
      }
    });
    Object.defineProperty(exports, "PlaybackRateMenuButton", {
      enumerable: true,
      get: function get() {
        return _PlaybackRateMenuButton["default"];
      }
    });
    Object.defineProperty(exports, "PlaybackRate", {
      enumerable: true,
      get: function get() {
        return _PlaybackRate["default"];
      }
    });
    Object.defineProperty(exports, "ClosedCaptionButton", {
      enumerable: true,
      get: function get() {
        return _ClosedCaptionButton["default"];
      }
    });
    Object.defineProperty(exports, "RemainingTimeDisplay", {
      enumerable: true,
      get: function get() {
        return _RemainingTimeDisplay["default"];
      }
    });
    Object.defineProperty(exports, "CurrentTimeDisplay", {
      enumerable: true,
      get: function get() {
        return _CurrentTimeDisplay["default"];
      }
    });
    Object.defineProperty(exports, "DurationDisplay", {
      enumerable: true,
      get: function get() {
        return _DurationDisplay["default"];
      }
    });
    Object.defineProperty(exports, "TimeDivider", {
      enumerable: true,
      get: function get() {
        return _TimeDivider["default"];
      }
    });
    Object.defineProperty(exports, "MenuButton", {
      enumerable: true,
      get: function get() {
        return _MenuButton["default"];
      }
    });
    Object.defineProperty(exports, "playerReducer", {
      enumerable: true,
      get: function get() {
        return _reducers.playerReducer;
      }
    });
    Object.defineProperty(exports, "operationReducer", {
      enumerable: true,
      get: function get() {
        return _reducers.operationReducer;
      }
    });
    exports.videoActions = exports.playerActions = void 0;
    var _Player = _interopRequireDefault(require_Player());
    var _Video = _interopRequireDefault(require_Video());
    var _BigPlayButton = _interopRequireDefault(require_BigPlayButton());
    var _LoadingSpinner = _interopRequireDefault(require_LoadingSpinner());
    var _PosterImage = _interopRequireDefault(require_PosterImage());
    var _Slider = _interopRequireDefault(require_Slider());
    var _Bezel = _interopRequireDefault(require_Bezel());
    var _Shortcut = _interopRequireDefault(require_Shortcut());
    var _ControlBar = _interopRequireDefault(require_ControlBar());
    var _PlayToggle = _interopRequireDefault(require_PlayToggle());
    var _ForwardControl = _interopRequireDefault(require_ForwardControl());
    var _ReplayControl = _interopRequireDefault(require_ReplayControl());
    var _FullscreenToggle = _interopRequireDefault(require_FullscreenToggle());
    var _ProgressControl = _interopRequireDefault(require_ProgressControl());
    var _SeekBar = _interopRequireDefault(require_SeekBar());
    var _PlayProgressBar = _interopRequireDefault(require_PlayProgressBar());
    var _LoadProgressBar = _interopRequireDefault(require_LoadProgressBar());
    var _MouseTimeDisplay = _interopRequireDefault(require_MouseTimeDisplay());
    var _VolumeMenuButton = _interopRequireDefault(require_VolumeMenuButton());
    var _PlaybackRateMenuButton = _interopRequireDefault(require_PlaybackRateMenuButton());
    var _PlaybackRate = _interopRequireDefault(require_PlaybackRate());
    var _ClosedCaptionButton = _interopRequireDefault(require_ClosedCaptionButton());
    var _RemainingTimeDisplay = _interopRequireDefault(require_RemainingTimeDisplay());
    var _CurrentTimeDisplay = _interopRequireDefault(require_CurrentTimeDisplay());
    var _DurationDisplay = _interopRequireDefault(require_DurationDisplay());
    var _TimeDivider = _interopRequireDefault(require_TimeDivider());
    var _MenuButton = _interopRequireDefault(require_MenuButton());
    var playerActions = _interopRequireWildcard(require_player());
    exports.playerActions = playerActions;
    var videoActions = _interopRequireWildcard(require_video());
    exports.videoActions = videoActions;
    var _reducers = require_reducers();
  }
});
export default require_lib();
//# sourceMappingURL=video-react.js.map
