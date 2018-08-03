const m = require("mithril");
m.stream = require("mithril-stream");

class Canvas {
	constructor(vnode){

	}
	view(vnode){
		return m("canvas");
	}
}
module.exports = Canvas;
