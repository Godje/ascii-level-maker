const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const Settings = require("./Settings.js");
const Tools = require("./Tools.js");
const Monitor = require("./Monitor.js");
const Modal = require("./Modal.js");

const App = {
	oninit: function(vnode){
		this.menuClick = function(e){
			MODEL.menuopen( !MODEL.menuopen() )
		}
		return;
	},
	view: function(vnode){
		return m(".screen", [
			m("div", {
				class: "settings-toggle "+(MODEL.menuopen() ? "open" : ""),
				onclick: this.menuClick
			}, [
				m("div.line-1"), m("div.line-2"), m("div.line-3")
			]),
			m(Monitor),
			m(Settings),
			m(Tools),
			( MODEL.modalopen() ? m(Modal) : "" )
		]);
	}
}

module.exports = App;
