const m = require("mithril");
m.stream= require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;

const monitorwidth = 600;
const defaultscale = m.stream.combine( function ( width, height ){
	let size = monitorwidth / width()
	return size;
}, [ MODEL.dimensions.width, MODEL.dimensions.height ] );

console.log(defaultscale)

const Canvas = {
	oninit: function (vnode){
		this.mouse = {
			x: m.stream(0),
			y: m.stream(0),
			mX: m.stream(0),
			mY: m.stream(0)
		};
		this.scroll = {
			x: m.stream(0),
			y: m.stream(0),
		}
		this.ctrl = {
			scroll: function (e){
				this.scroll.x( e.target.scrollLeft );
				this.scroll.y( e.target.scrollTop );
				console.log( this.scroll.x(), this.scroll.y() )
			},
			mousemove: function (e){
				let coords = {
					x: e.offsetX,
					y: e.offsetY
				}
				this.mouse.x( coords.x );
				this.mouse.y( coords.y );
				this.mouse.mX( Math.floor( coords.x/defaultscale ) )
				this.mouse.mY( Math.floor( coords.y/defaultscale ) )
			}
		};
		this.preview = MODEL.session.output()
	},
	view: function (vnode){
		return m("div.canvas-wrapper", {
			style: ` width: 600px; max-height: 600px; `,
			onscroll: this.ctrl.scroll.bind(this)
		}, [
			m("canvas", {
				width: MODEL.dimensions.width() * defaultscale * MODEL.zoom(),
				height: MODEL.dimensions.height() * defaultscale * MODEL.zoom(),
				onmousemove: this.ctrl.mousemove.bind(this)
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
