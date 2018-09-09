const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");
const Tiles = require("./Tiles.js");
const Modal = require("./Modal.js");
const CreateModal = require("./CreateModal.js");
const Canvas = require("./Canvas.js");

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



class Monitor {
	constructor(vnode){
		this.ctrl = {
			createTile: function (e){
				const openModal = function (ch){
					MODEL.modalopen(true);
					MODEL.modalcomponent(ch)
				};
				openModal( CreateModal )
			},
			saveSession: function (e){
				console.log(e)
				return;
			},
			getOutput: function (e){
				console.log(e)
				return;
			},
			zoom: function (dir){
				return;
			}
		}
		return;
	}
	view(vnode){
		const that = this;
		return m("div.monitor", {}, [
			m("h1", "ASCII Level Maker"),
			m(Canvas),
			m(Tiles),
			m("div.buttons", [
				buttons.map(function (b){
					return m("button", {
						class: b.class,
						onclick: that.ctrl[b.click],
					}, b.title);
				})
			]),
		]);
	}
}
module.exports = Monitor;
