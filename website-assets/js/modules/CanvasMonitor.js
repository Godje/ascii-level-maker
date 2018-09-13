const m = require("mithril");
m.stream= require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;
const CanvasControl = require("./Canvas.js");

const Canvas = {
	oncreate: function (vnode){
		CanvasControl( vnode.dom )
	},
	onupdate: function (vnode){
		CanvasControl( vnode.dom );
	},
	onbeforeupdate: function (vnode, old){
		if( vnode.attrs.width !== old.attrs.width ) return true;
		if( vnode.attrs.height !== old.attrs.height ) return true;
		return false;
	},
	view: function (vnode){
		return m("canvas", {
			id: "canvas",
			width: vnode.attrs.width,
			height: vnode.attrs.height,
		})
	}
}

const CanvasMonitor = {
	oninit: function (vnode){
		this.ctrl = {
			scroll: function (e){
				MODEL.scroll.x( e.target.scrollLeft );
				MODEL.scroll.y( e.target.scrollTop );
			},
			zoomInput: function (value){
				if(value >= 1) MODEL.zoom( value );
				else return;
			}
		};
	},
	view: function (vnode){
		return m("div.canvas-wrapper", {
			style: ` width: 600px; max-height: 600px; `,
			onscroll: this.ctrl.scroll.bind(this)
		}, [
			m(Canvas, {
				width: MODEL.dimensions.width() * MODEL.defaultscale() * MODEL.zoom(),
				height: MODEL.dimensions.height() * MODEL.defaultscale() * MODEL.zoom(),
			}),
			m("div.zoom", [
				m("input", {
					type: "number",
					oninput: m.withAttr("value", this.ctrl.zoomInput),
					value: MODEL.zoom()
				}),
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

module.exports = CanvasMonitor;
