const m = require("mithril");
			m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;

const Modal = {
	oninit: function(vnode){
		this.closeModal = function (e){
			MODEL.modalopen(false)
		}
		return;
	},
	view: function(vnode){
		return m("div.modal-wrapper", [
			m("div.modal-backdrop", {
				onclick: this.closeModal
			}),
			m("div.modal-content", m(MODEL.modalcomponent()))
		])
	}
}

module.exports = Modal;
