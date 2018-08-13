const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");

const tools = [
	{ name: "Brush" },
	{ name: "Eraser" },
	{ name: "Line" },
	{ name: "Square" }
];

class Tools {
	constructor(vnode){
		this.nodes = {
			Tool: {
				view: function (vnode){
					return m("button", {
						className: "tool tool-" + vnode.attrs.name.toLowerCase(),
					}, "Tool");
				}
			}
		};
		this.ctrl = {
			selectTool: function (e){
				return;
			}
		}
		return;
	}
	view(vnode){
		const that = this;
		return m("div.tools.open", [
			m("div.wrapper", [
				m("span", "Tools"),
				tools.map(function(el){
					return m(that.nodes.Tool, el )
				})
			]),
		]);
	}
}

module.exports = Tools;
