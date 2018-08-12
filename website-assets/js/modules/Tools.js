const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");

class Tools {
	constructor(vnode){
		this.ctrl = {
			selectTool: function (e){
				return;
			}
		}
		return;
	}
	view(vnode){
		return m("div.tools", [
			m("div.wrapper", [
				m("span", "Tools"),
			]),
		]);
	}
}

module.exports = Tools;
