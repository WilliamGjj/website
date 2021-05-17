(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{485:function(t,a,n){"use strict";n.r(a);var s=n(44),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"globaleventhandlers-接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#globaleventhandlers-接口"}},[t._v("#")]),t._v(" GlobalEventHandlers 接口")]),t._v(" "),n("p",[t._v("指定事件的回调函数，推荐使用的方法是元素的"),n("code",[t._v("addEventListener")]),t._v("方法。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clickHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("除了之外，还有一种方法可以直接指定事件的回调函数。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("div"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onclick "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" clickHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("这个接口是由"),n("code",[t._v("GlobalEventHandlers")]),t._v("接口提供的。它的优点是使用比较方便，缺点是只能为每个事件指定一个回调函数，并且无法指定事件触发的阶段（捕获阶段还是冒泡阶段）。")]),t._v(" "),n("p",[n("code",[t._v("HTMLElement")]),t._v("、"),n("code",[t._v("Document")]),t._v("和"),n("code",[t._v("Window")]),t._v("都继承了这个接口，也就是说，各种 HTML 元素、"),n("code",[t._v("document")]),t._v("对象、"),n("code",[t._v("window")]),t._v("对象上面都可以使用"),n("code",[t._v("GlobalEventHandlers")]),t._v("接口提供的属性。下面就列出这个接口提供的主要的事件属性。")]),t._v(" "),n("h2",{attrs:{id:"globaleventhandlers-onabort"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#globaleventhandlers-onabort"}},[t._v("#")]),t._v(" GlobalEventHandlers.onabort")]),t._v(" "),n("p",[t._v("某个对象的"),n("code",[t._v("abort")]),t._v("事件（停止加载）发生时，就会调用"),n("code",[t._v("onabort")]),t._v("属性指定的回调函数。")]),t._v(" "),n("p",[t._v("各种元素的停止加载事件，到底如何触发，目前并没有统一的规定。因此实际上，这个属性现在一般只用在"),n("code",[t._v("<img>")]),t._v("元素上面。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <img src="example.jpg" id="img">')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onabort")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image load aborted.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"globaleventhandlers-onerror"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#globaleventhandlers-onerror"}},[t._v("#")]),t._v(" GlobalEventHandlers.onerror")]),t._v(" "),n("p",[n("code",[t._v("error")]),t._v("事件发生时，就会调用"),n("code",[t._v("onerror")]),t._v("属性指定的回调函数。")]),t._v(" "),n("p",[n("code",[t._v("error")]),t._v("事件分成两种。")]),t._v(" "),n("p",[t._v("一种是 JavaScript 的运行时错误，这会传到"),n("code",[t._v("window")]),t._v("对象，导致"),n("code",[t._v("window.onerror()")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lineno"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colno"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("window.onerror")]),t._v("的处理函数共接受五个参数，含义如下。")]),t._v(" "),n("ul",[n("li",[t._v("message：错误信息字符串")]),t._v(" "),n("li",[t._v("source：报错脚本的 URL")]),t._v(" "),n("li",[t._v("lineno：报错的行号，是一个整数")]),t._v(" "),n("li",[t._v("colno：报错的列号，是一个整数")]),t._v(" "),n("li",[t._v("error： 错误对象")])]),t._v(" "),n("p",[t._v("另一种是资源加载错误，比如"),n("code",[t._v("<img>")]),t._v("或"),n("code",[t._v("<script>")]),t._v("加载的资源出现加载错误。这时，Error 对象会传到对应的元素，导致该元素的"),n("code",[t._v("onerror")]),t._v("属性开始执行。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("注意，一般来说，资源的加载错误不会触发"),n("code",[t._v("window.onerror")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"globaleventhandlers-onload、globaleventhandlers-onloadstart"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#globaleventhandlers-onload、globaleventhandlers-onloadstart"}},[t._v("#")]),t._v(" GlobalEventHandlers.onload、GlobalEventHandlers.onloadstart")]),t._v(" "),n("p",[t._v("元素完成加载时，会触发"),n("code",[t._v("load")]),t._v("事件，执行"),n("code",[t._v("onload()")]),t._v("。它的典型使用场景是"),n("code",[t._v("window")]),t._v("对象和"),n("code",[t._v("<img>")]),t._v("元素。对于"),n("code",[t._v("window")]),t._v("对象来说，只有页面的所有资源加载完成（包括图片、脚本、样式表、字体等所有外部资源），才会触发"),n("code",[t._v("load")]),t._v("事件。")]),t._v(" "),n("p",[t._v("对于"),n("code",[t._v("<img>")]),t._v("和"),n("code",[t._v("<video>")]),t._v("等元素，加载开始时还会触发"),n("code",[t._v("loadstart")]),t._v("事件，导致执行"),n("code",[t._v("onloadstart")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"globaleventhandlers-onfocus-globaleventhandlers-onblur"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#globaleventhandlers-onfocus-globaleventhandlers-onblur"}},[t._v("#")]),t._v(" GlobalEventHandlers.onfocus，GlobalEventHandlers.onblur")]),t._v(" "),n("p",[t._v("当前元素获得焦点时，会触发"),n("code",[t._v("element.onfocus")]),t._v("；失去焦点时，会触发"),n("code",[t._v("element.onblur")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onfocus")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onfocus event detected!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nelement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onblur")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onblur event detected!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("注意，如果不是可以接受用户输入的元素，要触发"),n("code",[t._v("onfocus")]),t._v("，该元素必须有"),n("code",[t._v("tabindex")]),t._v("属性。")]),t._v(" "),n("h2",{attrs:{id:"globaleventhandlers-onscroll"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#globaleventhandlers-onscroll"}},[t._v("#")]),t._v(" GlobalEventHandlers.onscroll")]),t._v(" "),n("p",[t._v("页面或元素滚动时，会触发"),n("code",[t._v("scroll")]),t._v("事件，导致执行"),n("code",[t._v("onscroll()")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"globaleventhandlers-oncontextmenu-globaleventhandlers-onshow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#globaleventhandlers-oncontextmenu-globaleventhandlers-onshow"}},[t._v("#")]),t._v(" GlobalEventHandlers.oncontextmenu，GlobalEventHandlers.onshow")]),t._v(" "),n("p",[t._v("用户在页面上按下鼠标的右键，会触发"),n("code",[t._v("contextmenu")]),t._v("事件，导致执行"),n("code",[t._v("oncontextmenu()")]),t._v("。如果该属性执行后返回"),n("code",[t._v("false")]),t._v("，就等于禁止了右键菜单。"),n("code",[t._v("document.oncontextmenu")]),t._v("与"),n("code",[t._v("window.oncontextmenu")]),t._v("效果一样。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("oncontextmenu")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("上面代码中，"),n("code",[t._v("oncontextmenu")]),t._v("属性执行后返回"),n("code",[t._v("false")]),t._v("，右键菜单就不会出现。")]),t._v(" "),n("p",[t._v("元素的右键菜单显示时，会触发该元素的"),n("code",[t._v("onshow")]),t._v("监听函数。")]),t._v(" "),n("h2",{attrs:{id:"其他的事件属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他的事件属性"}},[t._v("#")]),t._v(" 其他的事件属性")]),t._v(" "),n("p",[t._v("鼠标的事件属性。")]),t._v(" "),n("ul",[n("li",[t._v("onclick")]),t._v(" "),n("li",[t._v("ondblclick")]),t._v(" "),n("li",[t._v("onmousedown")]),t._v(" "),n("li",[t._v("onmouseenter")]),t._v(" "),n("li",[t._v("onmouseleave")]),t._v(" "),n("li",[t._v("onmousemove")]),t._v(" "),n("li",[t._v("onmouseout")]),t._v(" "),n("li",[t._v("onmouseover")]),t._v(" "),n("li",[t._v("onmouseup")]),t._v(" "),n("li",[t._v("onwheel")])]),t._v(" "),n("p",[t._v("键盘的事件属性。")]),t._v(" "),n("ul",[n("li",[t._v("onkeydown")]),t._v(" "),n("li",[t._v("onkeypress")]),t._v(" "),n("li",[t._v("onkeyup")])]),t._v(" "),n("p",[t._v("焦点的事件属性。")]),t._v(" "),n("ul",[n("li",[t._v("onblur")]),t._v(" "),n("li",[t._v("onfocus")])]),t._v(" "),n("p",[t._v("表单的事件属性。")]),t._v(" "),n("ul",[n("li",[t._v("oninput")]),t._v(" "),n("li",[t._v("onchange")]),t._v(" "),n("li",[t._v("onsubmit")]),t._v(" "),n("li",[t._v("onreset")]),t._v(" "),n("li",[t._v("oninvalid")]),t._v(" "),n("li",[t._v("onselect")])]),t._v(" "),n("p",[t._v("触摸的事件属性。")]),t._v(" "),n("ul",[n("li",[t._v("ontouchcancel")]),t._v(" "),n("li",[t._v("ontouchend")]),t._v(" "),n("li",[t._v("ontouchmove")]),t._v(" "),n("li",[t._v("ontouchstart")])]),t._v(" "),n("p",[t._v("拖动的事件属性分成两类：一类与被拖动元素相关，另一类与接收被拖动元素的容器元素相关。")]),t._v(" "),n("p",[t._v("被拖动元素的事件属性。")]),t._v(" "),n("ul",[n("li",[t._v("ondragstart：拖动开始")]),t._v(" "),n("li",[t._v("ondrag：拖动过程中，每隔几百毫秒触发一次")]),t._v(" "),n("li",[t._v("ondragend：拖动结束")])]),t._v(" "),n("p",[t._v("接收被拖动元素的容器元素的事件属性。")]),t._v(" "),n("ul",[n("li",[t._v("ondragenter：被拖动元素进入容器元素。")]),t._v(" "),n("li",[t._v("ondragleave：被拖动元素离开容器元素。")]),t._v(" "),n("li",[t._v("ondragover：被拖动元素在容器元素上方，每隔几百毫秒触发一次。")]),t._v(" "),n("li",[t._v("ondrop：松开鼠标后，被拖动元素放入容器元素。")])]),t._v(" "),n("p",[n("code",[t._v("<dialog>")]),t._v("对话框元素的事件属性。")]),t._v(" "),n("ul",[n("li",[t._v("oncancel")]),t._v(" "),n("li",[t._v("onclose")])])])}),[],!1,null,null,null);a.default=e.exports}}]);