const m = require("mithril");
			m.stream = require("mithril-stream");
const MODEL = require("../model.js");

class Modal {
	constructor(vnode){
	}
	view(vnode){
		return m("div.modal-wrapper", [
			m("div.modal-backdrop"),
			m("div.modal-content", vnode.children)
		])
	}
}

module.exports = Modal;
