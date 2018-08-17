const m = require("mithril");
m.stream = require("mithril-stream");
const Tiles = require("./Tiles.js")

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
		this.ctrl = {
			createTile: function (e){
				console.log(e)
				return;
			},
			saveSession: function (e){
				console.log(e)
				return;
			}
		}
		return;
	}
	view(vnode){
		return m("div.monitor", {}, [
			m("h1", "ASCII Level Maker"),
			m(Canvas, {
				size: canvasSize
			}),
			m(Tiles),
			m("div.buttons", [
				m("button", {
					class: "add-tile",
					onclick: this.ctrl.createTile
				}, "Add Tile"),
				m("button", {
					class: "save-session",
					onclick: this.ctrl.saveSession
				}, "Save JSON session")
			])
		]);
	}
}
module.exports = Monitor;
