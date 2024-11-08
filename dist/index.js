'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var reactDeviceDetect = require('react-device-detect');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url(\"https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap\");\n#index_terminalContainer__4seT6 {\n  --control-default-bg-color: #ccc;\n  --control-close-bg-color: #fc5b57;\n  --control-minimize-bg-color: #e5bf3c;\n  --control-maximize-bg-color: #57c038;\n}\n\n.index_controls__sXDjs {\n  text-align: left;\n  height: 26px;\n  position: relative;\n  top: 4px;\n  margin-left: 4px;\n}\n.index_controls__sXDjs .index_consoleCtrl__DI2H1 {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  margin: 0 3px;\n  border-radius: 50%;\n  background: var(--control-default-bg-color);\n}\n.index_controls__sXDjs .index_close__XGN9U {\n  background: var(--control-close-bg-color);\n}\n.index_controls__sXDjs .index_minimize__pZYTU {\n  background: var(--control-minimize-bg-color);\n}\n.index_controls__sXDjs .index_maximize__szRK7 {\n  background: var(--control-maximize-bg-color);\n}\n\n.index_editor__JoDSg {\n  text-align: left;\n  height: 100%;\n  padding: 10px 15px;\n  overflow-wrap: break-word;\n  overflow-y: scroll;\n  outline: none;\n  font-family: \"Source Code Pro\", monospace;\n  font-size: 18px;\n  line-height: 22px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.index_editor__JoDSg .index_mobileInput__WloSq {\n  position: absolute;\n  opacity: 0;\n}\n.index_editor__JoDSg .index_lineText__j6qNj {\n  display: inline;\n  position: relative;\n  top: -1px;\n  margin-left: 8px;\n}\n.index_editor__JoDSg .index_preWhiteSpace__7KwuG {\n  white-space: pre-wrap;\n}\n.index_editor__JoDSg .index_caret__VS4iV {\n  opacity: 0.7;\n  position: relative;\n  top: -3px;\n  -webkit-animation: index_blink__FJp0- 1.1s steps(1) ease-in-out infinite;\n  -moz-animation: index_blink__FJp0- 1.1s steps(1) ease-in-out infinite;\n  -o-animation: index_blink__FJp0- 1.1s steps(1) infinite;\n  -ms-animation: index_blink__FJp0- 1.1s steps(1) infinite;\n  animation: index_blink__FJp0- 1.1s steps(1) infinite;\n}\n.index_editor__JoDSg .index_caret__VS4iV .index_caretAfter__6aXPx {\n  content: \"\";\n  position: absolute;\n  top: 2px;\n  width: 10px;\n  height: 22px;\n  z-index: 10;\n}\n@-moz-keyframes index_blink__FJp0- {\n  60% {\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n  }\n}\n@-webkit-keyframes index_blink__FJp0- {\n  60% {\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n  }\n}\n@-o-keyframes index_blink__FJp0- {\n  60% {\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n  }\n}\n@keyframes index_blink__FJp0- {\n  60% {\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    filter: alpha(opacity=0);\n  }\n}\n.index_editor__JoDSg a {\n  color: #1a87b5;\n}\n\n.index_editorWithTopBar__L6XKw {\n  height: calc(100% - 46px);\n}\n\n.index_curvedTop__LX9XS {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n#index_terminalContainer__4seT6 {\n  height: 100%;\n}\n\n.index_terminal__teubZ {\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  border-radius: 5px;\n}";
var index$1 = {"terminalContainer":"index_terminalContainer__4seT6","controls":"index_controls__sXDjs","consoleCtrl":"index_consoleCtrl__DI2H1","close":"index_close__XGN9U","minimize":"index_minimize__pZYTU","maximize":"index_maximize__szRK7","editor":"index_editor__JoDSg","mobileInput":"index_mobileInput__WloSq","lineText":"index_lineText__j6qNj","preWhiteSpace":"index_preWhiteSpace__7KwuG","caret":"index_caret__VS4iV","blink":"index_blink__FJp0-","caretAfter":"index_caretAfter__6aXPx","editorWithTopBar":"index_editorWithTopBar__L6XKw","curvedTop":"index_curvedTop__LX9XS","terminal":"index_terminal__teubZ"};
styleInject(css_248z);

var styles = index$1;
var StyleContext = React__namespace.createContext(null);
var StyleContextProvider = function (props) {
    var children = props.children;
    return (React__namespace.createElement(StyleContext.Provider, { value: styles }, children));
};

var darkTheme = {
    themeBGColor: "#022833",
    themeToolbarColor: "#131519",
    themeColor: "#839496",
    themePromptColor: "#a917a8"
};

var lightTheme = {
    themeBGColor: "#fdf6e4",
    themeToolbarColor: "#d8d8d8",
    themeColor: "#333333",
    themePromptColor: "#a917a8"
};

var draculaTheme = {
    themeBGColor: "#272B36",
    themeToolbarColor: "#DBDBDB",
    themeColor: "#FFFEFC",
    themePromptColor: "#a917a8"
};

var materialDarkTheme = {
    themeBGColor: "#151515",
    themeToolbarColor: "#424242",
    themeColor: "#fff",
    themePromptColor: "#42A5F5"
};

var materialLightTheme = {
    themeBGColor: '#fafafa',
    themeToolbarColor: '#424242',
    themeColor: '#151515',
    themePromptColor: '#42A5F5',
};

var materialOceanTheme = {
    themeBGColor: '#263238',
    themeToolbarColor: '#37474F',
    themeColor: '#fff',
    themePromptColor: '#C3D82C',
};

var matrixTheme = {
    themeBGColor: "#0D0208",
    themeToolbarColor: "#0D0208",
    themeColor: "#00FF41",
    themePromptColor: "#008F11"
};

var defaultThemes = {
    "dark": darkTheme,
    "light": lightTheme,
    "dracula": draculaTheme,
    "material-dark": materialDarkTheme,
    "material-light": materialLightTheme,
    "material-ocean": materialOceanTheme,
    "matrix": matrixTheme
};

var ThemeContext = React__namespace.createContext(null);
var ThemeContextProvider = function (props) {
    var children = props.children;
    var themes = __assign(__assign({}, defaultThemes), (children.props.themes || {}));
    var currentTheme = themes[children.props.theme] || themes["light"];
    return (React__namespace.createElement(ThemeContext.Provider, { value: currentTheme }, children));
};

var useClickOutsideEvent = function (ref, clickedInside, setClickedInside) {
    var handleClickOutside = function (event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setClickedInside(false);
        }
        else if (reactDeviceDetect.isMobile) {
            setClickedInside(!clickedInside);
        }
        else {
            setClickedInside(true);
        }
    };
    React__namespace.useEffect(function () {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
};

function Controls(props) {
    var style = React__namespace.useContext(StyleContext);
    var controlButtonLabels = props.controlButtonLabels;
    var showControlButtons = props.showControlButtons;
    var controlButtons = showControlButtons
        ? controlButtonLabels.map(function (buttonLabel) { return (React__namespace.createElement("div", { key: buttonLabel, className: "".concat(style.consoleCtrl, " ").concat(style[buttonLabel]) })); })
        : null;
    return React__namespace.createElement("div", { className: style.controls }, controlButtons);
}

var TerminalContext$1 = React__namespace.createContext({
    bufferedContent: "",
    temporaryContent: "",
    setBufferedContent: function (node) { },
    setTemporaryContent: function (node) { },
    appendCommandToHistory: function () { },
    getNextCommand: function () { return ""; },
    getPreviousCommand: function () { return ""; }
});
var TerminalContextProvider$1 = function (props) {
    var children = props.children;
    var _a = React__namespace.useState(""), bufferedContent = _a[0], setBufferedContent = _a[1];
    var _b = React__namespace.useState(""), temporaryContent = _b[0], setTemporaryContent = _b[1];
    var _c = React__namespace.useState([]), commandsHistory = _c[0], setCommandsHistory = _c[1];
    var _d = React__namespace.useState(null), historyPointer = _d[0], setHistoryPointer = _d[1];
    React__namespace.useEffect(function () {
        setHistoryPointer(commandsHistory.length);
    }, [commandsHistory]);
    var appendCommandToHistory = function (command) {
        if (!command) {
            return;
        }
        setCommandsHistory(commandsHistory.concat(command));
    };
    var getPreviousCommand = function () {
        if (historyPointer === 0) {
            if (commandsHistory.length === 0) {
                return "";
            }
            return commandsHistory[0];
        }
        var command = commandsHistory[historyPointer - 1];
        if (historyPointer > 0) {
            setHistoryPointer(historyPointer - 1);
        }
        return command;
    };
    var getNextCommand = function () {
        if (historyPointer + 1 <= commandsHistory.length) {
            var command = commandsHistory[historyPointer + 1];
            setHistoryPointer(historyPointer + 1);
            return command;
        }
        return "";
    };
    return (React__namespace.createElement(TerminalContext$1.Provider, { value: {
            bufferedContent: bufferedContent,
            temporaryContent: temporaryContent,
            setTemporaryContent: setTemporaryContent,
            setBufferedContent: setBufferedContent,
            appendCommandToHistory: appendCommandToHistory,
            getPreviousCommand: getPreviousCommand,
            getNextCommand: getNextCommand
        } }, children));
};

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.splitStringAtIndex = function (value, index) {
        if (!value) {
            return ["", ""];
        }
        return [value.substring(0, index), value.substring(index)];
    };
    return Utils;
}());

var useEditorInput = function (consoleFocused, editorInput, setEditorInput, setProcessCurrentLine, caretPosition, setCaretPosition, setBeforeCaretText, setAfterCaretText, enableInput) {
    var _a = React__namespace.useContext(TerminalContext$1), getPreviousCommand = _a.getPreviousCommand, getNextCommand = _a.getNextCommand;
    var handleKeyDownEvent = function (event) {
        if (!consoleFocused) {
            return;
        }
        if (!enableInput) {
            return;
        }
        event.preventDefault();
        var eventKey = event.key;
        console.log(event);
        if (eventKey === "Enter") {
            setProcessCurrentLine(true);
            return;
        }
        var nextInput = null;
        if (eventKey === "Backspace") {
            var _a = Utils.splitStringAtIndex(editorInput, caretPosition), caretTextBefore = _a[0], caretTextAfter = _a[1];
            nextInput = caretTextBefore.slice(0, -1) + caretTextAfter;
            if (editorInput && editorInput.length !== 0)
                setCaretPosition(caretPosition - 1);
        }
        else if (eventKey === "ArrowUp") {
            nextInput = getPreviousCommand();
            if (nextInput)
                setCaretPosition(nextInput.length);
        }
        else if (eventKey === "ArrowDown") {
            nextInput = getNextCommand();
            if (nextInput)
                setCaretPosition(nextInput.length);
            else
                setCaretPosition(0);
        }
        else if (eventKey === "ArrowLeft") {
            if (caretPosition > 0)
                setCaretPosition(caretPosition - 1);
            nextInput = editorInput;
        }
        else if (eventKey === "ArrowRight") {
            if (caretPosition < editorInput.length)
                setCaretPosition(caretPosition + 1);
            nextInput = editorInput;
        }
        else if ((event.metaKey || event.ctrlKey) &&
            eventKey.toLowerCase() === "v") {
            navigator.clipboard.readText().then(function (pastedText) {
                var _a = Utils.splitStringAtIndex(editorInput || "", caretPosition), caretTextBefore = _a[0], caretTextAfter = _a[1];
                nextInput = caretTextBefore + pastedText + caretTextAfter;
                setCaretPosition(caretPosition + pastedText.length);
                setEditorInput(nextInput);
            });
        }
        else if ((event.metaKey || event.ctrlKey) &&
            eventKey.toLowerCase() === "c") {
            var selectedText = window.getSelection().toString();
            navigator.clipboard.writeText(selectedText).then(function () {
                nextInput = editorInput;
                setEditorInput(nextInput);
            });
        }
        else if (eventKey === "Unidentified" && reactDeviceDetect.isMobile) {
            window.scrollBy(0, Infinity);
            var _b = Utils.splitStringAtIndex(editorInput, caretPosition), caretTextBefore = _b[0], caretTextAfter = _b[1];
            nextInput = caretTextBefore + caretTextAfter;
            setCaretPosition(caretPosition + 1);
        }
        else {
            if (eventKey && eventKey.length === 1) {
                var _c = Utils.splitStringAtIndex(editorInput, caretPosition), caretTextBefore = _c[0], caretTextAfter = _c[1];
                nextInput = caretTextBefore + eventKey + caretTextAfter;
                setCaretPosition(caretPosition + 1);
            }
            else
                nextInput = editorInput;
        }
        setEditorInput(nextInput);
        setProcessCurrentLine(false);
    };
    React__namespace.useEffect(function () {
        document.addEventListener("keydown", handleKeyDownEvent);
        return function () {
            document.removeEventListener("keydown", handleKeyDownEvent);
        };
    });
    React__namespace.useEffect(function () {
        var _a = Utils.splitStringAtIndex(editorInput, caretPosition), caretTextBefore = _a[0], caretTextAfter = _a[1];
        setBeforeCaretText(caretTextBefore);
        setAfterCaretText(caretTextAfter);
    }, [editorInput, caretPosition]);
};
var useBufferedContent = function (processCurrentLine, setProcessCurrentLine, prompt, currentText, setCurrentText, setCaretPosition, setBeforeCaretText, setAfterCaretText, commands, errorMessage, defaultHandler) {
    var _a = React__namespace.useContext(TerminalContext$1); _a.bufferedContent; var setBufferedContent = _a.setBufferedContent, setTemporaryContent = _a.setTemporaryContent;
    React__namespace.useContext(StyleContext);
    var themeStyles = React__namespace.useContext(ThemeContext);
    React__namespace.useEffect(function () {
        if (!processCurrentLine) {
            return;
        }
        var processCommand = function (text) { return __awaiter(void 0, void 0, void 0, function () {
            var _a, command, rest, output, waiting, commandArguments, executor, nextBufferedContent;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = text.trim().split(" "), command = _a[0], rest = _a.slice(1);
                        output = "";
                        if (command === "clear") {
                            setBufferedContent("");
                            setCurrentText("");
                            setProcessCurrentLine(false);
                            setCaretPosition(0);
                            setBeforeCaretText("");
                            setAfterCaretText("");
                            return [2 /*return*/];
                        }
                        waiting = (React__namespace.createElement(React__namespace.Fragment, null,
                            React__namespace.createElement("span", { style: { color: themeStyles.themePromptColor } },
                                prompt,
                                " "),
                            React__namespace.createElement("span", null, currentText),
                            React__namespace.createElement("br", null)));
                        setBufferedContent(function (previous) { return (React__namespace.createElement(React__namespace.Fragment, null,
                            previous,
                            waiting)); });
                        setCurrentText("");
                        setCaretPosition(0);
                        setBeforeCaretText("");
                        setAfterCaretText("");
                        if (!text) return [3 /*break*/, 9];
                        commandArguments = rest.join(" ");
                        if (!(command && commands[command])) return [3 /*break*/, 4];
                        executor = commands[command];
                        if (!(typeof executor === "function")) return [3 /*break*/, 2];
                        return [4 /*yield*/, executor(commandArguments)];
                    case 1:
                        output = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        output = executor;
                        _b.label = 3;
                    case 3: return [3 /*break*/, 9];
                    case 4:
                        if (!(typeof defaultHandler === "function")) return [3 /*break*/, 6];
                        return [4 /*yield*/, defaultHandler(command, commandArguments)];
                    case 5:
                        output = _b.sent();
                        return [3 /*break*/, 9];
                    case 6:
                        if (!(typeof errorMessage === "function")) return [3 /*break*/, 8];
                        return [4 /*yield*/, errorMessage(command, commandArguments)];
                    case 7:
                        output = _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        output = errorMessage;
                        _b.label = 9;
                    case 9:
                        nextBufferedContent = (React__namespace.createElement(React__namespace.Fragment, null, output ? (React__namespace.createElement("span", null,
                            output,
                            React__namespace.createElement("br", null))) : null));
                        setBufferedContent(function (previousBufferedContent) { return (React__namespace.createElement(React__namespace.Fragment, null,
                            previousBufferedContent,
                            nextBufferedContent)); });
                        setTemporaryContent("");
                        setProcessCurrentLine(false);
                        return [2 /*return*/];
                }
            });
        }); };
        processCommand(currentText);
    }, [processCurrentLine]);
};
var useCurrentLine = function (caret, consoleFocused, prompt, commands, errorMessage, enableInput, defaultHandler, wrapperRef) {
    var style = React__namespace.useContext(StyleContext);
    var themeStyles = React__namespace.useContext(ThemeContext);
    var _a = React__namespace.useContext(TerminalContext$1), appendCommandToHistory = _a.appendCommandToHistory, temporaryContent = _a.temporaryContent;
    var mobileInputRef = React__namespace.useRef(null);
    var _b = React__namespace.useState(""), editorInput = _b[0], setEditorInput = _b[1];
    var _c = React__namespace.useState(false), processCurrentLine = _c[0], setProcessCurrentLine = _c[1];
    var _d = React__namespace.useState(0), caretPosition = _d[0], setCaretPosition = _d[1];
    var _e = React__namespace.useState(""), beforeCaretText = _e[0], setBeforeCaretText = _e[1];
    var _f = React__namespace.useState(""), afterCaretText = _f[0], setAfterCaretText = _f[1];
    React__namespace.useEffect(function () {
        if (!reactDeviceDetect.isMobile) {
            return;
        }
    }, [consoleFocused]);
    React__namespace.useEffect(function () {
        if (!processCurrentLine) {
            return;
        }
        appendCommandToHistory(editorInput);
    }, [processCurrentLine]);
    React__namespace.useEffect(function () {
        if (wrapperRef.current !== null && mobileInputRef.current !== null) {
            wrapperRef.current.onclick = function () {
                mobileInputRef.current.focus();
            };
        }
    }, []);
    var mobileInput = reactDeviceDetect.isMobile && enableInput ? (React__namespace.createElement("div", { className: style.mobileInput },
        React__namespace.createElement("input", { type: "text", autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: "false", value: editorInput, onChange: function (event) { return setEditorInput(event.target.value); }, ref: mobileInputRef, "data-testid": "editor-input" }))) : null;
    var currentLine = !processCurrentLine ? (React__namespace.createElement(React__namespace.Fragment, null,
        mobileInput,
        React__namespace.createElement("span", { style: { color: themeStyles.themePromptColor } }, prompt),
        React__namespace.createElement("div", { className: style.lineText },
            React__namespace.createElement("span", { className: style.preWhiteSpace }, beforeCaretText),
            consoleFocused && caret ? ( //if caret isn't true, caret won't be displayed
            React__namespace.createElement("span", { className: style.caret },
                React__namespace.createElement("span", { className: style.caretAfter, style: { background: themeStyles.themeColor } }))) : null,
            React__namespace.createElement("span", { className: style.preWhiteSpace }, afterCaretText)))) : (React__namespace.createElement(React__namespace.Fragment, null,
        mobileInput,
        React__namespace.createElement("div", { className: style.lineText },
            consoleFocused && caret ? ( //if caret isn't true, caret won't be displayed
            React__namespace.createElement("span", { className: style.caret },
                React__namespace.createElement("span", { className: style.caretAfter, style: { background: themeStyles.themeColor } }))) : null,
            React__namespace.createElement("span", { className: style.preWhiteSpace }, temporaryContent))));
    useEditorInput(consoleFocused, editorInput, setEditorInput, setProcessCurrentLine, caretPosition, setCaretPosition, setBeforeCaretText, setAfterCaretText, enableInput);
    useBufferedContent(processCurrentLine, setProcessCurrentLine, prompt, editorInput, setEditorInput, setCaretPosition, setBeforeCaretText, setAfterCaretText, commands, errorMessage, defaultHandler);
    return currentLine;
};
var useScrollToBottom = function (changesToWatch, wrapperRef) {
    React__namespace.useEffect(function () {
        if (!wrapperRef.current)
            return;
        // eslint-disable-next-line no-param-reassign
        wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
    }, [changesToWatch]);
};

function Editor(props) {
    var wrapperRef = React__namespace.useRef(null);
    var style = React__namespace.useContext(StyleContext);
    var themeStyles = React__namespace.useContext(ThemeContext);
    var bufferedContent = React__namespace.useContext(TerminalContext$1).bufferedContent;
    useScrollToBottom(bufferedContent, wrapperRef);
    var enableInput = props.enableInput, caret = props.caret, consoleFocused = props.consoleFocused, prompt = props.prompt, commands = props.commands, welcomeMessage = props.welcomeMessage, errorMessage = props.errorMessage, showControlBar = props.showControlBar, defaultHandler = props.defaultHandler;
    var currentLine = useCurrentLine(caret, consoleFocused, prompt, commands, errorMessage, enableInput, defaultHandler, wrapperRef);
    return (React__namespace.createElement("div", { id: "terminalEditor", ref: wrapperRef, className: "".concat(style.editor, " ").concat(!showControlBar ? style.curvedTop : null, " ").concat(showControlBar ? style.editorWithTopBar : null), style: { background: themeStyles.themeBGColor } },
        welcomeMessage,
        bufferedContent,
        currentLine));
}

function Terminal(_a) {
    var _b = _a.enableInput, enableInput = _b === void 0 ? true : _b, _c = _a.caret, caret = _c === void 0 ? true : _c, _d = _a.theme, theme = _d === void 0 ? "light" : _d, _e = _a.showControlBar, showControlBar = _e === void 0 ? true : _e, _f = _a.showControlButtons, showControlButtons = _f === void 0 ? true : _f, _g = _a.controlButtonLabels, controlButtonLabels = _g === void 0 ? ["close", "minimize", "maximize"] : _g, _h = _a.prompt, prompt = _h === void 0 ? ">>>" : _h, _j = _a.commands, commands = _j === void 0 ? {} : _j, _k = _a.welcomeMessage, welcomeMessage = _k === void 0 ? "" : _k, _l = _a.errorMessage, errorMessage = _l === void 0 ? "not found!" : _l, _m = _a.defaultHandler, defaultHandler = _m === void 0 ? null : _m;
    var wrapperRef = React__namespace.useRef(null);
    var _o = React__namespace.useState(!reactDeviceDetect.isMobile), consoleFocused = _o[0], setConsoleFocused = _o[1];
    var style = React__namespace.useContext(StyleContext);
    var themeStyles = React__namespace.useContext(ThemeContext);
    useClickOutsideEvent(wrapperRef, consoleFocused, setConsoleFocused);
    var controls = showControlBar ? React__namespace.createElement(Controls, { consoleFocused: consoleFocused, showControlButtons: showControlButtons, controlButtonLabels: controlButtonLabels }) : null;
    var editor = React__namespace.createElement(Editor, { caret: caret, consoleFocused: consoleFocused, prompt: prompt, commands: commands, welcomeMessage: welcomeMessage, errorMessage: errorMessage, enableInput: enableInput, showControlBar: showControlBar, defaultHandler: defaultHandler });
    return (React__namespace.createElement("div", { ref: wrapperRef, id: style.terminalContainer, className: style["theme--".concat(theme)], "data-testid": "terminal" },
        React__namespace.createElement("div", { className: "".concat(style.terminal), style: { background: themeStyles.themeToolbarColor, color: themeStyles.themeColor } },
            controls,
            editor)));
}
Terminal.propTypes = {
    enableInput: PropTypes.bool,
    caret: PropTypes.bool,
    theme: PropTypes.string,
    showControlBar: PropTypes.bool,
    showControlButtons: PropTypes.bool,
    controlButtonLabels: PropTypes.arrayOf(PropTypes.string),
    prompt: PropTypes.string,
    commands: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.node
    ])),
    welcomeMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node]),
    errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node]),
    defaultHandler: PropTypes.func,
};

function ContextProvider(props) {
    var children = props.children;
    return (React__namespace.createElement(StyleContextProvider, null,
        React__namespace.createElement(ThemeContextProvider, null, children)));
}

function ReactTerminal(props) {
    return (React__namespace.createElement(ContextProvider, null,
        React__namespace.createElement(Terminal, __assign({}, props))));
}
var TerminalContextProvider = TerminalContextProvider$1;
var TerminalContext = TerminalContext$1;
var index = {
    ReactTerminal: ReactTerminal,
    TerminalContextProvider: TerminalContextProvider,
    TerminalContext: TerminalContext
};

exports.ReactTerminal = ReactTerminal;
exports.TerminalContext = TerminalContext;
exports.TerminalContextProvider = TerminalContextProvider;
exports.default = index;
