const m = require("mithril");
m.stream= require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const EditModal = require("./EditModal.js");

const Tile = {
	oninit: function(vnode){
		let that = this;
		this.realIndex = MODEL.session.tiles.indexOf(vnode.attrs);
		this.selectTile = function (e){
			let el = e.srcElement;
			let id = el.dataset.id;
			MODEL.currenttile(id);
			MODEL.session.tiles.forEach( (tile) => tile.selected(false) );
			MODEL.session.tiles[ that.realIndex ].selected(true);
			return;
		},
			this.editTile = function(e){
				let that = this;
				const openModal = function (ch){
					MODEL.modalopen(true);
					MODEL.modalcomponent(ch);
				}
				openModal({
					view: function (){
						return m(EditModal, { realIndex: that.realIndex })
					}
				})
				return;
			}
	},
	view: function(vnode){
		return m("div", {
			class: "tile "+ (vnode.attrs.selected() ? "selected":""),
			onclick: this.selectTile,
			"data-id": vnode.attrs.id()
		}, [
			m("div.color", {
				style: "background-color: "+vnode.attrs.color()
			}),
			m("div.title", vnode.attrs.title()),
			m("div.info", [
				m("span.symbol", vnode.attrs.symbol()),
				m("span.edit-button", {
					onclick: this.editTile.bind(this)
				}, "Edit")
			])
		]);
	}
}


module.exports = Tile;
