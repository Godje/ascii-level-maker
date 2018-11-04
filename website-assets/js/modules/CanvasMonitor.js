const m = require("mithril");
m.stream= require("mithril-stream");
const frame = require("../frame.js");
const CanvasControl = require("./Canvas.js");
const Settings = require("./Settings.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;

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
		if( vnode.attrs.toggleRedraw == true ) return true;
		return false;
	},
	view: function (vnode){
		return m("canvas", {
			id: "canvas",
			width: vnode.attrs.width,
			height: vnode.attrs.height,
		})
	},
}

const CanvasMonitor = {
	oninit: function (vnode){
		this.ctrl = {
			scroll: function (e){
				MODEL.scroll.x( e.target.scrollLeft );
				MODEL.scroll.y( e.target.scrollTop );
			},
			zoomInput: function (value){
				else return;
			},
			openSettings: function (){
				CTRL.openModal( Settings );
				return;
			}
		};
	},
	view: function (vnode){
		return m("div.canvas-wrapper", {
			style: ` width: 600px; max-height: 600px; `,
			onscroll: this.ctrl.scroll.bind(this)
		}, [
			m(Canvas, {
				width: MODEL.dimensions.width() * MODEL.defaultscale(),
				height: MODEL.dimensions.height() * MODEL.defaultscale(),
				toggleRedraw: MODEL.toggleRedraw()
			}),
			m("div.control-bar", [
				m("div.zoom", [
					m("input", {
						type: "number",
						oninput: m.withAttr("value", this.ctrl.zoomInput),
						value: MODEL.zoom()
					}),
					m("button", {
						title: "Zoom In",
						onclick: CTRL.zoomIn,
					}, "+"),
					m("hr"),
					m("button", {
						title: "Zoom Out",
						onclick: CTRL.zoomOut
					}, "-")
				]),
				m("button", {
					onclick: CTRL.redrawCanvas,
					title: "Redraw"
				}, m("span.fas.fa-sync-alt")),
				m("button", {
					onclick: this.ctrl.openSettings,
					title: "Settings"
				}, m("span.fas.fa-cog"))
			])
		]);
	}
}

module.exports = CanvasMonitor;
