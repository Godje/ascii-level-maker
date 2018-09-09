const m = require("mithril");
m.stream= require("mithril-stream");
const MODEL = require("../model.js");

var defaultscale = 60;

const Canvas = {
	view: function (vnode){
		return m("div.canvas-wrapper", {
			style: ` width: 600px; max-height: 600px;`
		}, [
			m("canvas", {
				width: MODEL.dimensions.width() * defaultscale * MODEL.zoom(),
				height: MODEL.dimensions.height() * defaultscale * MODEL.zoom(),
			}),
			m("div.zoom", [
				m("button", "+"),
				m("hr"),
				m("button", "-")
			])
		]);
	}
}

module.exports = Canvas;
