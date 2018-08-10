const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");

class Tools {
	constructor(vnode){
		
		return;
	}
	view(vnode){
		return m("div.tools", [
			"Tools, TEST"
		]);
	}
}

module.exports = Tools;
