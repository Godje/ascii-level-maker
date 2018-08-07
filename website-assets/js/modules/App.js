const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");
const Canvas = require("./Canvas.js");

class Settings {
	constructor(vnode){
		return;
	}
	view(vnode){
		return m("div.settings.open", [
			m("div.wrapper", [
				m("h1", "Settings")
			])
		])
	}
}

class App {
	constructor(vnode){

	}
	view(vnode){
		return m(".screen", [
			m(Settings),
			m("div.monitor", [
				m(Canvas)
			])
		]);
	}
}

module.exports = App;
