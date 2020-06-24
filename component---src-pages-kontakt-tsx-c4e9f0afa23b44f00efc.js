(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7dgR":function(n,t,e){"use strict";var r=e("q1tI"),i=e.n(r),a=e("vOnD"),o=e("vUL5"),l=e("aCnj"),u=e("CN8t");function f(){var n=s(["\n\n  html{\n    font-size: 62.5%;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  body {\n    font-size: 1.6rem;\n    margin: 0;\n    padding:0;\n    font-family: 'Montserrat', sans-serif;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color:#343a40;\n    color: #fff;\n\n  }\n\n  *, *:after, *:before{\n    box-sizing: border-box;\n  }\n"]);return f=function(){return n},n}function c(){var n=s(["\n  flex-grow: 1;\n"]);return c=function(){return n},n}function d(){var n=s(["\n  margin-top: 54px;\n  display: flex;\n  flex-flow: column;\n  min-height: calc(100vh - 56px);\n"]);return d=function(){return n},n}function s(n,t){return t||(t=n.slice(0)),n.raw=t,n}var m=a.default.div(d()),p=a.default.main(c()),x=Object(a.createGlobalStyle)(f()),g=function(n){var t=n.children,e=n.isHomePage;return i.a.createElement(m,null,i.a.createElement(o.Reset,null),i.a.createElement(x,null),i.a.createElement(l.a,{isHomePage:e}),i.a.createElement(p,null,t),i.a.createElement(u.a,null))};g.defaultProps={isHomePage:!1},t.a=g},"9nkr":function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),i=e.n(r),a=e("7dgR"),o=e("vrFN"),l=e("lqpk"),u=(e("f3/d"),e("IP2g"),e("vOnD"));function f(){var n=w(["\n  opacity: ",";\n"]);return f=function(){return n},n}function c(){var n=w(["\n  color: #f9e242;\n  transition: opacity 0.3s;\n\n  &:hover {\n    opacity: 0.6;\n  }\n"]);return c=function(){return n},n}function d(){var n=w(['\n  padding: 10px;\n  margin: 12px 0 0;\n  width: 100%;\n  border: 1px solid #d1d1d1;\n  font-family: "Montserrat", sans-serif;\n']);return d=function(){return n},n}function s(){var n=w(['\n  padding: 20px;\n  text-decoration: none;\n  position: relative;\n  color: #f9e242;\n  border: 2px solid #f9e242;\n  cursor: pointer;\n  margin: 20px 0;\n  transition: transform 0.3s, color 0.3s, border-color 0.3s;\n  overflow: hidden;\n  font-weight: 600;\n  min-width: 250px;\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n\n  background: none;\n  font-family: "Montserrat", sans-serif;\n\n  & span {\n    z-index: 5;\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #f9e242;\n    transform: translateX(-100%);\n    transition: transform 0.3s;\n  }\n\n  &:hover {\n    ',"\n\n    &:after {\n      ","\n      transform: translateX(0);\n    }\n  }\n"]);return s=function(){return n},n}function m(){var n=w(["\n  min-width: 250px;\n  max-width: 400px;\n  display: flex;\n  flex-flow: column;\n\n  & > p {\n    font-size: 1.4rem;\n    background: #545454;\n    border-radius: 5px;\n    padding: 10px;\n    line-height: 1.2;\n  }\n\n  & > label {\n    font-size: 1.3rem;\n    line-height: 1.5;\n  }\n\n  @media (max-width: 992px) {\n    max-width: unset;\n  }\n"]);return m=function(){return n},n}function p(){var n=w(["\n  background-color: #dc3545;\n  color: #fff;\n  font-size: 1.1rem;\n  padding: 5px 10px;\n"]);return p=function(){return n},n}function x(){var n=w(["\n  color: #f9e242;\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n  font-weight: 600;\n"]);return x=function(){return n},n}function g(){var n=w(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: auto;\n  width: 50%;\n  height: 100%;\n  z-index: 6;\n\n  @media (max-width: 992px) {\n    position: relative;\n    width: 100%;\n    height: 300px;\n  }\n"]);return g=function(){return n},n}function h(){var n=w(["\n  width: 50%;\n  padding: 25px;\n  min-height: 500px;\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n\n  background-color: #222;\n\n  @media (max-width: 992px) {\n    width: 100%;\n    padding: 25px 0;\n  }\n"]);return h=function(){return n},n}function v(){var n=w(["\n  width: 90%;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding-left: 20px;\n  z-index: 5;\n  position: relative;\n  height: 100%;\n\n  @media (max-width: 992px) {\n    padding: 0;\n  }\n"]);return v=function(){return n},n}function b(){var n=w(["\n  color: #fff;\n  background-color: #222;\n\n  margin: 45px 0 0;\n  position: relative;\n\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 992px) {\n    flex-flow: column;\n  }\n"]);return b=function(){return n},n}function w(n,t){return t||(t=n.slice(0)),n.raw=t,n}var y=u.default.div(b()),k=u.default.div(v()),E=u.default.div(h()),z=u.default.div(g()),q=(u.default.legend(x()),u.default.div(p()),u.default.div(m()),u.default.button(s(),(function(n){return!n.isSubmitting&&"color: #222;border-color: transparent;"}),(function(n){return n.isSubmitting&&"display:none;"})),u.default.textarea(d()),u.default.a(c()),u.default.fieldset(f(),(function(n){return n.isSubmitting?"0.35":"1"})),function(){return i.a.createElement(y,null,i.a.createElement(k,null,i.a.createElement(E,null)),i.a.createElement(z,null))});t.default=function(){return i.a.createElement(a.a,null,i.a.createElement(o.a,{title:"Kontakt"}),i.a.createElement(l.a,null,"Kontakt"),i.a.createElement(q,null))}},lqpk:function(n,t,e){"use strict";var r=e("q1tI"),i=e.n(r);function a(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n  text-align: center;\n  font-size: 3rem;\n  margin: 30px auto 10px;\n  width: 90%;\n  max-width: 1440px;\n  position: relative;\n  padding: 0 0 20px 0;\n  line-height: 1.2;\n\n  &:after {\n    content: '';\n    position: absolute;\n    width: 100px;\n    height: 2px;\n\n    background: #f9e242;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    transition: background-color 0.3s;\n  }\n"]);return a=function(){return n},n}var o=e("vOnD").default.h1(a());t.a=function(n){var t=n.children;return i.a.createElement(o,null,t)}}}]);
//# sourceMappingURL=component---src-pages-kontakt-tsx-c4e9f0afa23b44f00efc.js.map