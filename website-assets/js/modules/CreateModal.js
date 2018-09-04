const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");

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
			let id = MODEL.tileid()
			MODEL.session.tiles.push({
				id: m.stream(id + 1),
				title: m.stream(title),
				symbol: m.stream(symbol),
				color: m.stream(color),
				selected: m.stream(false),
			});
			MODEL.tileid( id + 1 )
			console.log(MODEL.session.tiles)
		};
	},
	view: function(vnode){
		return m("div.create-tile", [
			m("div.create-inputs", [
				m("div.color-input", [
					m("label[for='new-tile-color']", "Color"),
					m("input[type='color']", {
						id: "new-tile-color",
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
							maxlength: 1,
						}),
					]),
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

module.exports = CreateModal;
