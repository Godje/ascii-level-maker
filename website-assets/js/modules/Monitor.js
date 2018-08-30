const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");
const Tiles = require("./Tiles.js");
const Modal = require("./Modal.js");

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
			width: MODEL.dimensions.width()*MODEL.tilesize(),
			height: MODEL.dimensions.height()*MODEL.tilesize()
		});
	}
};

class Monitor {
	constructor(vnode){
		this.ctrl = {
			createTile: function (e){
				const name = m.stream("Name"),
							symbol = m.stream("");
				const inputs = [
					{

					}
				]
				openModal([
					m("div.add-tile-wrapper", [
						m("div.color-input"),
						m("div.text-inputs", [
							m("div.input", [
								m("label[for='']")
							])
						]),
					]),
				])
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
