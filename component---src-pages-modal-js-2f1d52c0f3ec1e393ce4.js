webpackJsonp([0x9d2ae981eded],{271:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=o(1),u=l(c),s=o(6),d=(l(s),o(8)),i=function(e){function t(o){a(this,t);var l=n(this,e.call(this,o));return l.state={modal1:!1,modal2:!1},l.toggleState=l.toggleState.bind(l),l}return r(t,e),t.prototype.toggleState=function(e){var t,o="modal"+e,l=this.state[o];this.setState((t={},t[o]=!l,t))},t.prototype.render=function(){var e=this,t=function(t){return e.toggleState(1)},o=function(t){return e.toggleState(2)};return u.default.createElement("div",null,u.default.createElement(d.Button,{color:"danger",onClick:t},"Modal 1"),u.default.createElement(d.Modal,{isOpen:this.state.modal1,toggle:t,className:this.props.className},u.default.createElement(d.ModalHeader,{toggle:t},"Modal Test One"),u.default.createElement(d.ModalBody,null,"This is only a TEST ONE -> 1"),u.default.createElement(d.ModalFooter,null,u.default.createElement(d.Button,{color:"secondary",onClick:t},"Cancel"))),u.default.createElement(d.Button,{color:"danger",onClick:o},"Modal 2"),u.default.createElement(d.Modal,{isOpen:this.state.modal2,toggle:o,className:this.props.className},u.default.createElement(d.ModalHeader,{toggle:o},"Modal Test Two"),u.default.createElement(d.ModalBody,null,"This is only a TEST TWO -> 2"),u.default.createElement(d.ModalFooter,null,u.default.createElement(d.Button,{color:"secondary",onClick:o},"Cancel"))))},t}(u.default.Component);t.default=i,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-modal-js-2f1d52c0f3ec1e393ce4.js.map