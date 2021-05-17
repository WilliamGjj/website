(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{433:function(v,_,a){"use strict";a.r(_);var t=a(44),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"url-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-简介"}},[v._v("#")]),v._v(" URL 简介")]),v._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),a("p",[v._v("URL 是“统一资源定位符”（Uniform Resource Locator）的首字母缩写，中文译为“网址”，表示各种资源的互联网地址。下面就是一个典型的 URL。")]),v._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[v._v("https://www.example.com/path/index.html\n")])])]),a("p",[v._v("所谓资源，可以简单理解成各种可以通过互联网访问的文件，比如网页、图像、音频、视频、JavaScript 脚本等等。只有知道了它们的 URL，才能在互联网上获取它们。")]),v._v(" "),a("p",[v._v("只要资源可以通过互联网访问，它就必然有对应的 URL。一个 URL 对应一个资源，但是同一个资源可能对应多个 URL。")]),v._v(" "),a("p",[v._v("URL 是互联网的基础。互联网之所以“互联”，就是因为网页可以通过“链接”（link），包含其他 URL。用户只要点击，就可以从一个 URL 跳转到另一个 URL，前往不同的网站。")]),v._v(" "),a("h2",{attrs:{id:"网址的组成部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网址的组成部分"}},[v._v("#")]),v._v(" 网址的组成部分")]),v._v(" "),a("p",[v._v("URL 由多个部分组成。下面是一个比较复杂的 URL，实际的 URL 通常不会有这么多部分。")]),v._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[v._v("https://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#anchor\n")])])]),a("p",[v._v("我们看看，这个 URL 的各个部分。")]),v._v(" "),a("h3",{attrs:{id:"协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协议"}},[v._v("#")]),v._v(" 协议")]),v._v(" "),a("p",[v._v("协议（scheme）是浏览器请求服务器资源的方法，上例是"),a("code",[v._v("https://")]),v._v("的部分，表示使用 HTTPS 协议。")]),v._v(" "),a("p",[v._v("互联网支持多种协议，必须指明网址使用哪一种协议，默认是 HTTP 协议。也就是说，如果省略协议，直接在浏览器地址栏输入"),a("code",[v._v("www.example.com")]),v._v("，那么浏览器默认会访问"),a("code",[v._v("http://www.example.com")]),v._v("。HTTPS 是 HTTP 的加密版本，出于安全考虑，越来越多的网站使用这个协议。")]),v._v(" "),a("p",[v._v("HTTP 和 HTTPS 的协议名称后面，紧跟着一个冒号和两个斜杠（"),a("code",[v._v("://")]),v._v("）。其他协议不一定如此，邮件地址协议"),a("code",[v._v("mailto:")]),v._v("的协议名后面只有一个冒号，比如"),a("code",[v._v("mailto:foo@example.com")]),v._v("。")]),v._v(" "),a("h3",{attrs:{id:"主机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主机"}},[v._v("#")]),v._v(" 主机")]),v._v(" "),a("p",[v._v("主机（host）是资源所在的网站名或服务器的名字，又称为域名。上例的主机是"),a("code",[v._v("www.example.com")]),v._v("。")]),v._v(" "),a("p",[v._v("有些主机没有域名，只有 IP 地址，比如"),a("code",[v._v("192.168.2.15")]),v._v("。这种情况常常出现在局域网。")]),v._v(" "),a("h3",{attrs:{id:"端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#端口"}},[v._v("#")]),v._v(" 端口")]),v._v(" "),a("p",[v._v("同一个域名下面可能同时包含多个网站，它们之间通过端口（port）区分。“端口”就是一个整数，可以简单理解成，访问者告诉服务器，想要访问哪一个网站。默认端口是80，如果省略了这个参数，服务器就会返回80端口的网站。")]),v._v(" "),a("p",[v._v("端口紧跟在域名后面，两者之间使用冒号分隔，比如"),a("code",[v._v("www.example.com:80")]),v._v("。")]),v._v(" "),a("h3",{attrs:{id:"路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径"}},[v._v("#")]),v._v(" 路径")]),v._v(" "),a("p",[v._v("路径（path）是资源在网站的位置。比如，"),a("code",[v._v("/path/index.html")]),v._v("这个路径，指向网站的"),a("code",[v._v("/path")]),v._v("子目录下面的网页文件"),a("code",[v._v("index.html")]),v._v("。")]),v._v(" "),a("p",[v._v("互联网的早期，路径是真实存在的物理位置。现在由于服务器可以模拟这些位置，所以路径只是虚拟位置。")]),v._v(" "),a("p",[v._v("路径可能只包含目录，不包含文件名，比如"),a("code",[v._v("/foo/")]),v._v("，甚至结尾的斜杠都可以省略。这时，服务器通常会默认跳转到该目录里面的"),a("code",[v._v("index.html")]),v._v("文件（即等同于请求"),a("code",[v._v("/foo/index.html")]),v._v("），但也可能有其他的处理（比如列出目录里面的所有文件），这取决于服务器的设置。一般来说，访问"),a("code",[v._v("www.example.com")]),v._v("这个网址，很可能返回的是网页文件"),a("code",[v._v("www.example.com/index.html")]),v._v("。")]),v._v(" "),a("h3",{attrs:{id:"查询参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询参数"}},[v._v("#")]),v._v(" 查询参数")]),v._v(" "),a("p",[v._v("查询参数（parameter）是提供给服务器的额外信息。参数的位置是在路径后面，两者之间使用"),a("code",[v._v("?")]),v._v("分隔，上例是"),a("code",[v._v("?key1=value1&key2=value2")]),v._v("。")]),v._v(" "),a("p",[v._v("查询参数可以有一组或多组。每组参数都是键值对（key-value pair）的形式，同时具有键名(key)和键值(value)，它们之间使用等号（"),a("code",[v._v("=")]),v._v("）连接。比如，"),a("code",[v._v("key1=value")]),v._v("就是一个键值对，"),a("code",[v._v("key1")]),v._v("是键名，"),a("code",[v._v("value1")]),v._v("是键值。")]),v._v(" "),a("p",[v._v("多组参数之间使用"),a("code",[v._v("&")]),v._v("连接，比如"),a("code",[v._v("key1=value1&key2=value2")]),v._v("。")]),v._v(" "),a("h3",{attrs:{id:"锚点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锚点"}},[v._v("#")]),v._v(" 锚点")]),v._v(" "),a("p",[v._v("锚点（anchor）是网页内部的定位点，使用"),a("code",[v._v("#")]),v._v("加上锚点名称，放在网址的最后，比如"),a("code",[v._v("#anchor")]),v._v("。浏览器加载页面以后，会自动滚动到锚点所在的位置。")]),v._v(" "),a("p",[v._v("锚点名称通过网页元素的"),a("code",[v._v("id")]),v._v("属性命名，详见《元素的属性》一章。")]),v._v(" "),a("h2",{attrs:{id:"url-字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-字符"}},[v._v("#")]),v._v(" URL 字符")]),v._v(" "),a("p",[v._v("URL 的各个组成部分，只能使用以下这些字符。")]),v._v(" "),a("ul",[a("li",[v._v("26个英语字母（包括大写和小写）")]),v._v(" "),a("li",[v._v("10个阿拉伯数字")]),v._v(" "),a("li",[v._v("连词号（"),a("code",[v._v("-")]),v._v("）")]),v._v(" "),a("li",[v._v("句点（"),a("code",[v._v(".")]),v._v("）")]),v._v(" "),a("li",[v._v("下划线（"),a("code",[v._v("_")]),v._v("）")])]),v._v(" "),a("p",[v._v("此外，还有18个字符属于 URL 的保留字符，只能在给定的位置出现。比如，查询参数的开头是问号（"),a("code",[v._v("?")]),v._v("），也就是说，问号只能出现查询参数的开头，出现在其他位置就是非法的，会导致网址解析错误。网址的其他部分如果要使用这些保留字符，必须使用它们的转义形式。")]),v._v(" "),a("p",[v._v("URL 字符转义的方法是，在这些字符的十六进制 ASCII 码前面加上百分号（"),a("code",[v._v("%")]),v._v("）。下面是这18个字符及其转义形式。")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("!")]),v._v("：%21")]),v._v(" "),a("li",[a("code",[v._v("#")]),v._v("：%23")]),v._v(" "),a("li",[a("code",[v._v("$")]),v._v("：%24")]),v._v(" "),a("li",[a("code",[v._v("&")]),v._v("：%26")]),v._v(" "),a("li",[a("code",[v._v("'")]),v._v("：%27")]),v._v(" "),a("li",[a("code",[v._v("(")]),v._v("：%28")]),v._v(" "),a("li",[a("code",[v._v(")")]),v._v("：%29")]),v._v(" "),a("li",[a("code",[v._v("*")]),v._v("：%2A")]),v._v(" "),a("li",[a("code",[v._v("+")]),v._v("：%2B")]),v._v(" "),a("li",[a("code",[v._v(",")]),v._v("：%2C")]),v._v(" "),a("li",[a("code",[v._v("/")]),v._v("：%2F")]),v._v(" "),a("li",[a("code",[v._v(":")]),v._v("：%3A")]),v._v(" "),a("li",[a("code",[v._v(";")]),v._v("：%3B")]),v._v(" "),a("li",[a("code",[v._v("=")]),v._v("：%3D")]),v._v(" "),a("li",[a("code",[v._v("?")]),v._v("：%3F")]),v._v(" "),a("li",[a("code",[v._v("@")]),v._v("：%40")]),v._v(" "),a("li",[a("code",[v._v("[")]),v._v("：%5B")]),v._v(" "),a("li",[a("code",[v._v("]")]),v._v("：%5D")])]),v._v(" "),a("p",[v._v("举例来说，有一个网页的 URL 是"),a("code",[v._v("foo?bar.html")]),v._v("，即文件里面包含一个问号，那么需要写成"),a("code",[v._v("foo%3Fbar.html")]),v._v("。")]),v._v(" "),a("p",[v._v("URL 的合法字符，其实也可以采用这种转义方法，但是不建议使用。比如，字母"),a("code",[v._v("a")]),v._v("的十六进制 ASCII 码是"),a("code",[v._v("61")]),v._v("，转义形式后就是"),a("code",[v._v("%61")]),v._v("。因此，"),a("code",[v._v("www.apple.com")]),v._v("又可以写成"),a("code",[v._v("www.%61pple.com")]),v._v("，浏览器一样识别。")]),v._v(" "),a("p",[v._v("值得注意的是，空格的转义形式是"),a("code",[v._v("%20")]),v._v("。对于那些包含空格的文件名，这个转义是必须的。")]),v._v(" "),a("p",[v._v("既不属于合法字符、也不属于保留字符的其他字符（比如汉字），理论上不需要手动转义，可以直接写在 URL 里面，比如"),a("code",[v._v("www.example.com/中国.html")]),v._v("，浏览器会自动将它们转义，发给服务器。转义方法是使用这些字符的十六进制 UTF-8 编码，每两位算作一组，然后每组头部添加百分号（"),a("code",[v._v("%")]),v._v("）。")]),v._v(" "),a("p",[v._v("举例来说，汉字"),a("code",[v._v("中")]),v._v("的 UTF-8 十六进制编码是"),a("code",[v._v("e4b8ad")]),v._v("，每两个字符一组，URL 转义后就为"),a("code",[v._v("%e4%b8%ad")]),v._v("。也就是说，URL 里面凡是有汉字"),a("code",[v._v("中")]),v._v("的地方，都要写成"),a("code",[v._v("%e4%b8%ad")]),v._v("。因此，访问"),a("code",[v._v("www.example.com/中国.html")]),v._v("这个网址，需要写成下面的样子。")]),v._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[v._v("www.example.com/%e4%b8%ad%e5%9b%bd.html\n")])])]),a("p",[v._v("上面代码中，"),a("code",[v._v("中")]),v._v("的转义形式是"),a("code",[v._v("%e4%b8%ad")]),v._v("，"),a("code",[v._v("国")]),v._v("是"),a("code",[v._v("%e5%9b%bd")]),v._v("。")]),v._v(" "),a("h2",{attrs:{id:"绝对-url-和相对-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绝对-url-和相对-url"}},[v._v("#")]),v._v(" 绝对 URL 和相对 URL")]),v._v(" "),a("p",[v._v("URL 分成两种：绝对 URL 和相对 URL。")]),v._v(" "),a("p",[v._v("绝对 URL 指的是，只靠 URL 本身就能确定资源的位置。这意味着，URL 必须带有资源的完整信息，包含协议、主机、路径等部分。前面的例子都是绝对 URL。")]),v._v(" "),a("p",[v._v("相对 URL 指的是，URL 不包含资源位置的全部信息，必须结合当前网页的位置，才能定位资源。比如，当前网页的 URL 是"),a("code",[v._v("https://www.example.com/path/index.html")]),v._v("，该网页上面有一个资源，URL 指向"),a("code",[v._v("a.html")]),v._v("，这个就是相对 URL。因为只知道"),a("code",[v._v("a.html")]),v._v("，并不能定位资源。浏览器假定，"),a("code",[v._v("a.html")]),v._v("与当前网址在同一个子目录下面，从而得到绝对 URL "),a("code",[v._v("https://www.example.com/path/a.html")]),v._v("。")]),v._v(" "),a("p",[v._v("相对 URL 如果以斜杠（"),a("code",[v._v("/")]),v._v("）开头，就表示网站的根目录。否则，必须以当前目录为起点，推算资源的位置。比如，相对 URL "),a("code",[v._v("/foo/bar.html")]),v._v("表示网站根目录的子目录"),a("code",[v._v("foo")]),v._v("，"),a("code",[v._v("foo/bar.html")]),v._v("表示在当前目录的"),a("code",[v._v("foo")]),v._v("子目录。")]),v._v(" "),a("p",[v._v("URL 还可以使用两个特殊简写，表示特定位置。")]),v._v(" "),a("ul",[a("li",[a("code",[v._v(".")]),v._v("：表示当前目录，比如"),a("code",[v._v("./a.html")]),v._v("（当前目录下的"),a("code",[v._v("a.html")]),v._v("文件）")]),v._v(" "),a("li",[a("code",[v._v("..")]),v._v("：表示上级目录，比如"),a("code",[v._v("../a.html")]),v._v("（上级目录下的"),a("code",[v._v("a.html")]),v._v("文件）")])]),v._v(" "),a("p",[v._v("这两种简写可以多个连用，比如"),a("code",[v._v("../../")]),v._v("表示上两级目录。")]),v._v(" "),a("p",[v._v("绝对 URL 也可以使用这两个简写，比如"),a("code",[v._v("www.example.com/./index.html")]),v._v("等同于"),a("code",[v._v("www.example.com/index.html")]),v._v("，这时"),a("code",[v._v(".")]),v._v("相当于根目录的当前目录，即根目录本身。")]),v._v(" "),a("h2",{attrs:{id:"base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[v._v("#")]),v._v(" "),a("code",[v._v("<base>")])]),v._v(" "),a("p",[a("code",[v._v("<base>")]),v._v("标签指定网页内部的所有相对 URL 的计算基准。整张网页只能有一个"),a("code",[v._v("<base>")]),v._v("标签，而且只能放在"),a("code",[v._v("<head>")]),v._v("里面。它是单独使用的标签，没有闭合标签，下面是一个例子。")]),v._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("base")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[v._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("https://www.example.com/files/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),v._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("target")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[v._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("_blank"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("</")]),v._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n")])])]),a("p",[a("code",[v._v("<base>")]),v._v("标签的"),a("code",[v._v("href")]),v._v("属性给出计算的基准网址，"),a("code",[v._v("target")]),v._v("属性给出如何打开链接的说明（参见《链接》一章）。已知计算基准是"),a("code",[v._v("https://www.example.com/files/")]),v._v("，那么相对 URL "),a("code",[v._v("foo.html")]),v._v("，就可以转成绝对 URL "),a("code",[v._v("https://www.example.com/files/foo.html")]),v._v("。")]),v._v(" "),a("p",[v._v("注意，"),a("code",[v._v("<base>")]),v._v("标签必须至少具有"),a("code",[v._v("href")]),v._v("属性或"),a("code",[v._v("target")]),v._v("属性之一。")]),v._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("base")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[v._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("http://foo.com/app/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("base")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("target")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[v._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("_blank"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n")])])]),a("p",[v._v("一旦设置了"),a("code",[v._v("<base>")]),v._v("，就对整个网页都有效。如果要改变某个链接的行为，只能用绝对链接替代相对链接。尤其需要注意锚点，这时锚点也是针对"),a("code",[v._v("<base>")]),v._v("计算的，而不是针对当前网页的 URL。")])])}),[],!1,null,null,null);_.default=e.exports}}]);