const m = require("mithril");
			m.stream = require("mithril-stream");
const MODEL = require("../model.js");

class Modal {
	constructor(vnode){
		return vnode;
	}
	view(vnode){
		return m("div.modal-wrapper", [
			m("div.modal-backdrop"),
			m("div.modal-content", 1)
		])
	}
}

module.exports = Modal;
