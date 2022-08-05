webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout/Header/HeaderMain.js":
/*!************************************************!*\
  !*** ./components/Layout/Header/HeaderMain.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_helperFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/helperFunctions */ "./utils/helperFunctions.js");





var _jsxFileName = "D:\\HTML\\MyWork\\git_files\\Portfolio\\components\\Layout\\Header\\HeaderMain.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var HeaderMain = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HeaderMain, _Component);

  var _super = _createSuper(HeaderMain);

  function HeaderMain() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeaderMain);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeaderMain, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var _document$getElementB;

      var element = document.getElementById("header-wrapper");
      if (!element) return true;

      if (window.scrollY > ((_document$getElementB = document.getElementById("header-wrapper")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetHeight)) {
        element.classList.add("sticky");
      } else {
        element.classList.remove("sticky");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "header-main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "row py-2 d-flex flex-wrap align-items-center px-2 px-md-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "site-logo text-decoration-none",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: "text-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }
      }, "K"), "rishna"), __jsx("ul", {
        className: "d-flex nav-menu justify-content-end ml-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "nav-link",
        onClick: function onClick() {
          return Object(_utils_helperFunctions__WEBPACK_IMPORTED_MODULE_6__["handleSectionScroll"])("hero-wrap");
        },
        "data-href": "hero-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      }, "Home")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "nav-link",
        onClick: function onClick() {
          return Object(_utils_helperFunctions__WEBPACK_IMPORTED_MODULE_6__["handleSectionScroll"])("about-section");
        },
        "data-href": "about-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }
      }, "About")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "nav-link",
        onClick: function onClick() {
          return Object(_utils_helperFunctions__WEBPACK_IMPORTED_MODULE_6__["handleSectionScroll"])("resume-section");
        },
        "data-href": "resume-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, "Resume")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "nav-link",
        onClick: function onClick() {
          return Object(_utils_helperFunctions__WEBPACK_IMPORTED_MODULE_6__["handleSectionScroll"])("support-section");
        },
        "data-href": "support-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, "Support")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "nav-link",
        onClick: function onClick() {
          return Object(_utils_helperFunctions__WEBPACK_IMPORTED_MODULE_6__["handleSectionScroll"])("projects-section");
        },
        "data-href": "projects-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, "Projects")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "nav-link",
        onClick: function onClick() {
          return Object(_utils_helperFunctions__WEBPACK_IMPORTED_MODULE_6__["handleSectionScroll"])("contact-section");
        },
        "data-href": "contact-section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, "Contact"))))));
    }
  }]);

  return HeaderMain;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeaderMain);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL0hlYWRlck1haW4uanMiXSwibmFtZXMiOlsiSGVhZGVyTWFpbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFkiLCJvZmZzZXRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoYW5kbGVTZWN0aW9uU2Nyb2xsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7OztXQUNKLDZCQUFvQjtNQUNsQkMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxZQUF2QztJQUNEOzs7V0FFRCx3QkFBZTtNQUFBOztNQUNiLElBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUFkO01BQ0EsSUFBSSxDQUFDRixPQUFMLEVBQWMsT0FBTyxJQUFQOztNQUNkLElBQUlILE1BQU0sQ0FBQ00sT0FBUCw2QkFBaUJGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBakIsMERBQWlCLHNCQUEyQ0UsWUFBNUQsQ0FBSixFQUE4RTtRQUM1RUosT0FBTyxDQUFDSyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixRQUF0QjtNQUNELENBRkQsTUFFTztRQUNMTixPQUFPLENBQUNLLFNBQVIsQ0FBa0JFLE1BQWxCLENBQXlCLFFBQXpCO01BQ0Q7SUFDRjs7O1dBRUQsa0JBQVM7TUFDUCxPQUNFO1FBQUssU0FBUyxFQUFDLGFBQWY7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNFO1FBQUssU0FBUyxFQUFDLFdBQWY7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNFO1FBQUssU0FBUyxFQUFDLDJEQUFmO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDRTtRQUFLLFNBQVMsRUFBQyxnQ0FBZjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0U7UUFBTSxTQUFTLEVBQUMsWUFBaEI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxPQURGLFdBREYsRUFJRTtRQUFJLFNBQVMsRUFBQyw2Q0FBZDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0U7UUFBSSxTQUFTLEVBQUMsVUFBZDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0U7UUFDRSxTQUFTLEVBQUMsVUFEWjtRQUVFLE9BQU8sRUFBRTtVQUFBLE9BQU1DLGtGQUFtQixDQUFDLFdBQUQsQ0FBekI7UUFBQSxDQUZYO1FBR0UsYUFBVSxXQUhaO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsVUFERixDQURGLEVBVUU7UUFBSSxTQUFTLEVBQUMsVUFBZDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0U7UUFDRSxTQUFTLEVBQUMsVUFEWjtRQUVFLE9BQU8sRUFBRTtVQUFBLE9BQU1BLGtGQUFtQixDQUFDLGVBQUQsQ0FBekI7UUFBQSxDQUZYO1FBR0UsYUFBVSxlQUhaO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsV0FERixDQVZGLEVBbUJFO1FBQUksU0FBUyxFQUFDLFVBQWQ7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNFO1FBQ0UsU0FBUyxFQUFDLFVBRFo7UUFFRSxPQUFPLEVBQUU7VUFBQSxPQUFNQSxrRkFBbUIsQ0FBQyxnQkFBRCxDQUF6QjtRQUFBLENBRlg7UUFHRSxhQUFVLGdCQUhaO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsWUFERixDQW5CRixFQTRCRTtRQUFJLFNBQVMsRUFBQyxVQUFkO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDRTtRQUNFLFNBQVMsRUFBQyxVQURaO1FBRUUsT0FBTyxFQUFFO1VBQUEsT0FBTUEsa0ZBQW1CLENBQUMsaUJBQUQsQ0FBekI7UUFBQSxDQUZYO1FBR0UsYUFBVSxpQkFIWjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLGFBREYsQ0E1QkYsRUFxQ0U7UUFBSSxTQUFTLEVBQUMsVUFBZDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0U7UUFDRSxTQUFTLEVBQUMsVUFEWjtRQUVFLE9BQU8sRUFBRTtVQUFBLE9BQU1BLGtGQUFtQixDQUFDLGtCQUFELENBQXpCO1FBQUEsQ0FGWDtRQUdFLGFBQVUsa0JBSFo7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxjQURGLENBckNGLEVBOENFO1FBQUksU0FBUyxFQUFDLFVBQWQ7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNFO1FBQ0UsU0FBUyxFQUFDLFVBRFo7UUFFRSxPQUFPLEVBQUU7VUFBQSxPQUFNQSxrRkFBbUIsQ0FBQyxpQkFBRCxDQUF6QjtRQUFBLENBRlg7UUFHRSxhQUFVLGlCQUhaO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsYUFERixDQTlDRixDQUpGLENBREYsQ0FERixDQURGO0lBbUVEOzs7O0VBbkZzQkMsK0M7O0FBc0ZWYix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTRmMjVkNzcyMTM4YzJhYjk5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaGFuZGxlU2VjdGlvblNjcm9sbCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9oZWxwZXJGdW5jdGlvbnNcIjtcblxuY2xhc3MgSGVhZGVyTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCgpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXdyYXBwZXJcIik7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci13cmFwcGVyXCIpPy5vZmZzZXRIZWlnaHQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkZXItbWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB5LTIgZC1mbGV4IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgcHgtMiBweC1tZC0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtbG9nbyB0ZXh0LWRlY29yYXRpb24tbm9uZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+Szwvc3Bhbj5yaXNobmFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleCBuYXYtbWVudSBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlY3Rpb25TY3JvbGwoXCJoZXJvLXdyYXBcIil9XG4gICAgICAgICAgICAgICAgICBkYXRhLWhyZWY9XCJoZXJvLXdyYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWN0aW9uU2Nyb2xsKFwiYWJvdXQtc2VjdGlvblwiKX1cbiAgICAgICAgICAgICAgICAgIGRhdGEtaHJlZj1cImFib3V0LXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VjdGlvblNjcm9sbChcInJlc3VtZS1zZWN0aW9uXCIpfVxuICAgICAgICAgICAgICAgICAgZGF0YS1ocmVmPVwicmVzdW1lLXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlc3VtZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlY3Rpb25TY3JvbGwoXCJzdXBwb3J0LXNlY3Rpb25cIil9XG4gICAgICAgICAgICAgICAgICBkYXRhLWhyZWY9XCJzdXBwb3J0LXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFN1cHBvcnRcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWN0aW9uU2Nyb2xsKFwicHJvamVjdHMtc2VjdGlvblwiKX1cbiAgICAgICAgICAgICAgICAgIGRhdGEtaHJlZj1cInByb2plY3RzLXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VjdGlvblNjcm9sbChcImNvbnRhY3Qtc2VjdGlvblwiKX1cbiAgICAgICAgICAgICAgICAgIGRhdGEtaHJlZj1cImNvbnRhY3Qtc2VjdGlvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJNYWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==