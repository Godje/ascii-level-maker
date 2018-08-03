const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");
const Canvas = require("./Canvas.js");

class App {
	constructor(vnode){

	}
	view(vnode){
		return m(".screen", [
			m("p", "Test"),
			m(Canvas)
		]);
	}
}

module.exports = App;
