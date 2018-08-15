const m = require("mithril");
m.stream = require("mithril-stream");

const canvasSize = 600;

const Canvas = {
	view: function (vnode){
		return m("canvas", {
			width: vnode.attrs.size,
			height: vnode.attrs.size,
		});
	}
};

class Monitor {
	constructor(vnode){
		return;
	}
	view(vnode){
		return m("div.monitor", {}, [
			m("h1", "ASCII Level Maker"),
			m(Canvas, {
				size: canvasSize
			}),
		]);
	}
}
	module.exports = Monitor;
