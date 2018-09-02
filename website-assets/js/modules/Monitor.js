const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");
const Tiles = require("./Tiles.js");
const Modal = require("./Modal.js");

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
				const openModal = function (ch){
					MODEL.modalopen(true);
					MODEL.modalchildren(ch)
				};
				const dataStreams = {
					title: m.stream(""),
					symbol: m.stream(""),
					color: m.stream("#222222")
				}
				const pushTile = (title, symbol, color)=>{
					MODEL.session.tiles.push({
						id: MODEL.tileid() + 1,
						title: m.stream(title),
						symbol: m.stream(symbol),
						color: m.stream(color)
					})
				};
				openModal([
					m("div.create-tile", [
						m("div.color-input"),
						m("div.text-inputs", [
							m("div.input", [
								m("label[for='new-tile-name']", "Name"),
								m("input[type='text']", {
									id: "new-tile-name",
									oninput: m.withAttr("value", dataStreams.title),
									value: dataStreams.title()
								}),
								m("label[for='new-tile-symbol']", "Symbol"),
								m("input[type='text']", {
									id: "new-tile-symbol",
									oninput: m.withAttr("value", dataStreams.symbol),
									value: dataStreams.symbol()
								}),
							])
						]),
					]),
				]);
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
