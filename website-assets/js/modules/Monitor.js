const m = require("mithril");
m.stream = require("mithril-stream");
const Tiles = require("./Tiles.js");
const Modal = require("./Modal.js");

const canvasSize = 600;
const modalOpen = true;

const buttons = [
	{
		title: "+ Add Tile",
		click: "createTile",
		class: "add-tile",
	},
	{
		title: "Save JSON session",
		click: "saveSession",
		class: "save-session",
	},
	{
		title: "Get Ouput",
		click: "getOutput",
		class: "get-output",
	}
];

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
			},
			getOutput: function (e){
				console.log(e)
				return;
			}
		}
		return;
	}
	view(vnode){
		const that = this;
		return m("div.monitor", {}, [
			m("h1", "ASCII Level Maker"),
			m(Canvas, {
				size: canvasSize
			}),
			m(Tiles),
			m("div.buttons", [
				buttons.map(function (b){
					return m("button", {
						class: b.class,
						onclick: that.ctrl[b.click],
					}, b.title);
				})
			]),
			// MODAL EXAMPLE. Uncomment to see "Test" on the bottom of Monitor
			// (modalOpen ? m(Modal, [
			// 	m("div.thing", "Test")
			// ]) : "")
		]);
	}
}
module.exports = Monitor;
