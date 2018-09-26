const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
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
			m(Monitor),
			m(Tools),
			( MODEL.modalopen() ? m(Modal) : "" )
		]);
	}
}

module.exports = App;
