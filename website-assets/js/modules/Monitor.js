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

const CreateModal = {
	oninit: function (vnode){
		this.dataStreams = {
			title: m.stream(""),
			symbol: m.stream(""),
			color: m.stream("#222222")
		};
		this.acceptInput = function (){
			let { title, symbol, color } = this.dataStreams;
			const acceptTile = (title().length > 0 && symbol().length > 0);
			if(acceptTile){
				this.pushTile( title(), symbol(), color() );
			} else {
				alert("All fields are required to be filled.");
			}
		};
		this.pushTile = (title, symbol, color)=>{
			MODEL.session.tiles.push({
				id: MODEL.tileid() + 1,
				title: m.stream(title),
				symbol: m.stream(symbol),
				color: m.stream(color),
				selected: m.stream(false),
			});
		};
	},
	view: function(vnode){
		return m("div.create-tile", [
			m("div.color-input", [
				m("input[type='color']", {
					onchange: m.withAttr("value", this.dataStreams.color),
					value: this.dataStreams.color()
				})
			]),
			m("div.text-inputs", [
				m("div.input", [
					m("label[for='new-tile-name']", "Name"),
					m("input[type='text']", {
						id: "new-tile-name",
						oninput: m.withAttr("value", this.dataStreams.title),
						value: this.dataStreams.title()
					}),
				]),
				m("div.input", [
					m("label[for='new-tile-symbol']", "Symbol"),
					m("input[type='text']", {
						id: "new-tile-symbol",
						oninput: m.withAttr("value", this.dataStreams.symbol),
						value: this.dataStreams.symbol(),
						"max-length": 1,
					}),
				]),
			]),
			m("button", {
				onclick: function(){ 
					MODEL.modalopen(false);
					this.acceptInput();
				}.bind(this)
			}, "Create Tile")
		]);
	}
};

const EditModal = {
	oninit: function (){
		return;
	},
	view: function (vnode){
		return m("div.edit-tile", []);
	}
}

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
