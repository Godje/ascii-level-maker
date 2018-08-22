const m = require("mithril");
const m.stream = require("mithril-stream");
const MODEL = require("../model.js");

class Modal {
	constructor(vnode){

	}
	view(vnode){
		console.log(vnode)
		return m("div.modal-wrapper", [
			m("div.modal-window", [
				vnode.children
			]),
		])
	}
}

module.export = Modal;
