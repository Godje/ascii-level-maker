const m = require("mithril");
m.stream= require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const CTRL = frame.CTRL;

const EditModal = {
	oninit: function (vnode){
		let i = vnode.attrs.id;
		this.original = vnode.attrs.tile;
		this.index = MODEL.session.tiles.indexOf( this.original );
		this.fake = {
			title: m.stream(this.original.title()),
			symbol: m.stream(this.original.symbol()),
			color: m.stream(this.original.color()),
			selected: m.stream(this.original.selected()),
		}
		this.acceptInput = ()=>{
			if(this.fake.title().length > 0 && this.fake.symbol().length > 0) this.submitEdit();
			else { alert("All fields must have data") }
		}
		this.submitEdit = function (){
			Object.assign( this.original, this.fake )
			CTRL.redrawCanvas()
		}
		this.deleteTile = function (){
			MODEL.session.tiles.splice( this.index, 1 );
		}
		return;
	},
	view: function(vnode){
		return m("div.edit-tile", [
			m("h2", "Edit Tile"),
			m("div.create-inputs", [
				m("div.color-input", [
					m("label[for='new-tile-color']", "Color"),
					m("input[type='color']", {
						id: "new-tile-color",
						onchange: m.withAttr("value", this.fake.color),
						value: this.fake.color()
					})
				]),
				m("div.text-inputs", [
					m("div.input", [
						m("label[for='new-tile-name']", "Name"),
						m("input[type='text']", {
							id: "new-tile-name",
							oninput: m.withAttr("value", this.fake.title),
							value: this.fake.title()
						}),
					]),
					m("div.input", [
						m("label[for='new-tile-symbol']", "Symbol"),
						m("input[type='text']", {
							id: "new-tile-symbol",
							oninput: m.withAttr("value", this.fake.symbol),
							value: this.fake.symbol(),
							maxlength: 1,
						}),
					]),
				]),
			]),
			m("div.buttons", [
				m("button", {
					onclick: function(){ 
						MODEL.modalopen(false);
						this.acceptInput();
					}.bind(this)
				}, "Edit Tile"),
				m("button.delete", {
					onclick: function(){
						MODEL.modalopen(false);
						this.deleteTile();
					}.bind(this)
				}, "Delete Tile")
			])
		]);
	}
}

module.exports = EditModal;
