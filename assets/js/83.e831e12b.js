(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{490:function(v,_,t){"use strict";t.r(_);var e=t(44),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"dom-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom-概述"}},[v._v("#")]),v._v(" DOM 概述")]),v._v(" "),t("h2",{attrs:{id:"dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom"}},[v._v("#")]),v._v(" DOM")]),v._v(" "),t("p",[v._v("DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。")]),v._v(" "),t("p",[v._v("浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。")]),v._v(" "),t("p",[v._v("DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。后面介绍的就是 JavaScript 对 DOM 标准的实现和用法。")]),v._v(" "),t("h2",{attrs:{id:"节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点"}},[v._v("#")]),v._v(" 节点")]),v._v(" "),t("p",[v._v("DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM 树），就是由各种不同类型的节点组成。每个节点可以看作是文档树的一片叶子。")]),v._v(" "),t("p",[v._v("节点的类型有七种。")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("Document")]),v._v("：整个文档树的顶层节点")]),v._v(" "),t("li",[t("code",[v._v("DocumentType")]),v._v("："),t("code",[v._v("doctype")]),v._v("标签（比如"),t("code",[v._v("<!DOCTYPE html>")]),v._v("）")]),v._v(" "),t("li",[t("code",[v._v("Element")]),v._v("：网页的各种HTML标签（比如"),t("code",[v._v("<body>")]),v._v("、"),t("code",[v._v("<a>")]),v._v("等）")]),v._v(" "),t("li",[t("code",[v._v("Attr")]),v._v("：网页元素的属性（比如"),t("code",[v._v('class="right"')]),v._v("）")]),v._v(" "),t("li",[t("code",[v._v("Text")]),v._v("：标签之间或标签包含的文本")]),v._v(" "),t("li",[t("code",[v._v("Comment")]),v._v("：注释")]),v._v(" "),t("li",[t("code",[v._v("DocumentFragment")]),v._v("：文档的片段")])]),v._v(" "),t("p",[v._v("浏览器提供一个原生的节点对象"),t("code",[v._v("Node")]),v._v("，上面这七种节点都继承了"),t("code",[v._v("Node")]),v._v("，因此具有一些共同的属性和方法。")]),v._v(" "),t("h2",{attrs:{id:"节点树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点树"}},[v._v("#")]),v._v(" 节点树")]),v._v(" "),t("p",[v._v("一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构，又像一棵树。")]),v._v(" "),t("p",[v._v("浏览器原生提供"),t("code",[v._v("document")]),v._v("节点，代表整个文档。")]),v._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[v._v("document\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 整个文档树")]),v._v("\n")])])]),t("p",[v._v("文档的第一层有两个节点，第一个是文档类型节点（"),t("code",[v._v("<!doctype html>")]),v._v("），第二个是 HTML 网页的顶层容器标签"),t("code",[v._v("<html>")]),v._v("。后者构成了树结构的根节点（root node），其他 HTML 标签节点都是它的下级节点。")]),v._v(" "),t("p",[v._v("除了根节点，其他节点都有三种层级关系。")]),v._v(" "),t("ul",[t("li",[v._v("父节点关系（parentNode）：直接的那个上级节点")]),v._v(" "),t("li",[v._v("子节点关系（childNodes）：直接的下级节点")]),v._v(" "),t("li",[v._v("同级节点关系（sibling）：拥有同一个父节点的节点")])]),v._v(" "),t("p",[v._v("DOM 提供操作接口，用来获取这三种关系的节点。比如，子节点接口包括"),t("code",[v._v("firstChild")]),v._v("（第一个子节点）和"),t("code",[v._v("lastChild")]),v._v("（最后一个子节点）等属性，同级节点接口包括"),t("code",[v._v("nextSibling")]),v._v("（紧邻在后的那个同级节点）和"),t("code",[v._v("previousSibling")]),v._v("（紧邻在前的那个同级节点）属性。")])])}),[],!1,null,null,null);_.default=a.exports}}]);