const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");
const Settings = require("./Settings.js");
const Tools = require("./Tools.js");
const Monitor = require("./Monitor.js");

class App {
	constructor(vnode){
		this.menuClick = function(e){
			MODEL.menuopen( !MODEL.menuopen() )
		}
		return;
	}
	view(vnode){
		return m(".screen", [
			m("div", {
				class: "settings-toggle "+(MODEL.menuopen() ? "open" : ""),
				onclick: this.menuClick
			}, [
				m("div.line-1"), m("div.line-2"), m("div.line-3")
			]),
			m(Settings),
			m(Tools),
			m(Monitor)
		]);
	}
}

module.exports = App;
