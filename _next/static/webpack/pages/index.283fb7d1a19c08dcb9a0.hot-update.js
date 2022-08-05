webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/helperFunctions.js":
/*!**********************************!*\
  !*** ./utils/helperFunctions.js ***!
  \**********************************/
/*! exports provided: objectLength, stringLimit, offset, handleSectionScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectLength", function() { return objectLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringLimit", function() { return stringLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSectionScroll", function() { return handleSectionScroll; });
var objectLength = function objectLength(obj) {
  return Object.keys(obj).length;
};
var stringLimit = function stringLimit() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

  if (str.length > length) {
    return str.substring(0, length) + "...";
  } else {
    return str;
  }
};
var offset = function offset(el) {
  var rect = el === null || el === void 0 ? void 0 : el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    height: rect.height
  };
};
var handleSectionScroll = function handleSectionScroll(sectionId) {
  var _document$getElementB;

  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var position = offset(document.getElementById(sectionId));
  window.scrollTo({
    top: position.top - ((_document$getElementB = document.getElementById("header-wrapper")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetHeight) - extra,
    left: 0,
    behavior: "smooth"
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaGVscGVyRnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbIm9iamVjdExlbmd0aCIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzdHJpbmdMaW1pdCIsInN0ciIsInN1YnN0cmluZyIsIm9mZnNldCIsImVsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjcm9sbExlZnQiLCJ3aW5kb3ciLCJwYWdlWE9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiaGFuZGxlU2VjdGlvblNjcm9sbCIsInNlY3Rpb25JZCIsImV4dHJhIiwicG9zaXRpb24iLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvIiwib2Zmc2V0SGVpZ2h0IiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsR0FBRCxFQUFTO0VBQ25DLE9BQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaLEVBQWlCRyxNQUF4QjtBQUNELENBRk07QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUEyQjtFQUFBLElBQTFCQyxHQUEwQix1RUFBcEIsRUFBb0I7RUFBQSxJQUFoQkYsTUFBZ0IsdUVBQVAsRUFBTzs7RUFDcEQsSUFBSUUsR0FBRyxDQUFDRixNQUFKLEdBQWFBLE1BQWpCLEVBQXlCO0lBQ3ZCLE9BQU9FLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLENBQWQsRUFBaUJILE1BQWpCLElBQTJCLEtBQWxDO0VBQ0QsQ0FGRCxNQUVPO0lBQ0wsT0FBT0UsR0FBUDtFQUNEO0FBQ0YsQ0FOTTtBQVFBLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEVBQUQsRUFBUTtFQUM1QixJQUFJQyxJQUFJLEdBQUdELEVBQUgsYUFBR0EsRUFBSCx1QkFBR0EsRUFBRSxDQUFFRSxxQkFBSixFQUFYO0VBQUEsSUFDRUMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLFdBQVAsSUFBc0JDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkosVUFEOUQ7RUFBQSxJQUVFSyxTQUFTLEdBQUdKLE1BQU0sQ0FBQ0ssV0FBUCxJQUFzQkgsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUY3RDtFQUdBLE9BQU87SUFDTEUsR0FBRyxFQUFFVCxJQUFJLENBQUNTLEdBQUwsR0FBV0YsU0FEWDtJQUVMRyxJQUFJLEVBQUVWLElBQUksQ0FBQ1UsSUFBTCxHQUFZUixVQUZiO0lBR0xTLE1BQU0sRUFBRVgsSUFBSSxDQUFDVztFQUhSLENBQVA7QUFLRCxDQVRNO0FBV0EsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxTQUFELEVBQTBCO0VBQUE7O0VBQUEsSUFBZEMsS0FBYyx1RUFBTixDQUFNO0VBQzNELElBQUlDLFFBQVEsR0FBR2pCLE1BQU0sQ0FBQ08sUUFBUSxDQUFDVyxjQUFULENBQXdCSCxTQUF4QixDQUFELENBQXJCO0VBQ0FWLE1BQU0sQ0FBQ2MsUUFBUCxDQUFnQjtJQUNkUixHQUFHLEVBQUVNLFFBQVEsQ0FBQ04sR0FBVCw2QkFBZUosUUFBUSxDQUFDVyxjQUFULENBQXdCLGdCQUF4QixDQUFmLDBEQUFlLHNCQUEyQ0UsWUFBMUQsSUFBeUVKLEtBRGhFO0lBRWRKLElBQUksRUFBRSxDQUZRO0lBR2RTLFFBQVEsRUFBRTtFQUhJLENBQWhCO0FBS0QsQ0FQTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yODNmYjdkMWExOWMwOGRjYjlhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG9iamVjdExlbmd0aCA9IChvYmopID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ0xpbWl0ID0gKHN0ciA9IFwiXCIsIGxlbmd0aCA9IDUwKSA9PiB7XG4gIGlmIChzdHIubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgbGVuZ3RoKSArIFwiLi4uXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChlbCkgPT4ge1xuICB2YXIgcmVjdCA9IGVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlU2VjdGlvblNjcm9sbCA9IChzZWN0aW9uSWQsIGV4dHJhID0gMCkgPT4ge1xuICBsZXQgcG9zaXRpb24gPSBvZmZzZXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklkKSk7XG4gIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgdG9wOiBwb3NpdGlvbi50b3AgLSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci13cmFwcGVyXCIpPy5vZmZzZXRIZWlnaHQgLSBleHRyYSxcbiAgICBsZWZ0OiAwLFxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=