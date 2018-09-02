const m = require("mithril");
			m.stream = require("mithril-stream");
const MODEL = require("../model.js");

class Modal {
	constructor(vnode){
		return;
	}
	view(vnode){
		return m("div.modal-wrapper", [
			m("div.modal-backdrop"),
			m("div.modal-content", MODEL.modalchildren())
		])
	}
}

module.exports = Modal;
