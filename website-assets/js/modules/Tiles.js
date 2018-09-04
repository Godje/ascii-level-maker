const m = require("mithril");
			m.stream = require("mithril-stream");
const MODEL = require("../model.js");
const EditModal = require("./EditModal.js");

class Tiles {
	constructor(vnode){
		this.nodes = {
			Tile: {
				oninit: function (vnode){
					let that = this;
					this.realIndex = MODEL.session.tiles.indexOf(vnode.attrs);
					this.ctrl = {
						selectTile: function (e){
							let el = e.srcElement;
							let id = el.dataset.id;
							MODEL.currenttile(id);
							MODEL.session.tiles.forEach(function (el){
								el.selected(false)
							});
							vnode.attrs.selected(true);
							console.log(MODEL.session.tiles)
							return;
						},
						editTile: function (e){
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
					}
					return;
				},
				view: function (vnode){
					return m("div", {
						class: "tile "+ (vnode.attrs.selected() ? "selected":""),
						onclick: this.ctrl.selectTile,
						"data-id": vnode.attrs.id()
					}, [
						m("div.color", {
							style: "background-color: "+vnode.attrs.color()
						}),
						m("div.title", vnode.attrs.title()),
						m("div.info", [
							m("span.symbol", vnode.attrs.symbol()),
							m("span.edit-button", {
								onclick: this.ctrl.editTile.bind(this)
							}, "Edit")
						])
					]);
				}
			}
		}
	}
	view(vnode){
		let that = this;
		return m("div.tiles", [
			m("div.wrapper", [
				m("div.tiles-list", [
					MODEL.session.tiles.map(function(el){
						return m(that.nodes.Tile, el)
					})
				]),
			]),
		]);
	}
}
module.exports = Tiles;
