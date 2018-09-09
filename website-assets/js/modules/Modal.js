const m = require("mithril");
			m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;

class Modal {
	constructor(vnode){
		this.closeModal = function (e){
			MODEL.modalopen(false)
		}
		return;
	}
	view(vnode){
		return m("div.modal-wrapper", [
			m("div.modal-backdrop", {
				onclick: this.closeModal
			}),
			m("div.modal-content", m(MODEL.modalcomponent()))
		])
	}
}

module.exports = Modal;
