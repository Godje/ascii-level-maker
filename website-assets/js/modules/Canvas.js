const m = require("mithril");
m.stream= require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;

var defaultscale = 20;

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
				m("button", {
					onclick: CTRL.zoomIn,
				}, "+"),
				m("hr"),
				m("button", {
					onclick: CTRL.zoomOut
				}, "-")
			])
		]);
	}
}

module.exports = Canvas;
