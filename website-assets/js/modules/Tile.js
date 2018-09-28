const m = require("mithril");
m.stream= require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const EditModal = require("./EditModal.js");

const Tile = {
	oninit: function(vnode){
		let that = this;
		this.getOriginal = function (id){
			return MODEL.session.tiles.filter(function (el){
				return el.id() == id;
			})[0];
		};
		this.original = this.getOriginal( vnode.attrs.id );
		this.selectTile = function (e){
			MODEL.currenttile( that.original );
			MODEL.session.tiles.forEach( (tile) => tile.selected(false) );
			that.original.selected(true);
		};
		this.editTile = function(e){
			let that = this;
			const openModal = function (ch){
				MODEL.modalopen(true);
				MODEL.modalcomponent(ch);
			}
			openModal({
				view: function (vnode){
					console.log(that.original)
					return m(EditModal, { 
						tile: that.original
					})
				}
			})
		}
	},
	onupdate: function (vnode){
		this.original = this.getOriginal( vnode.attrs.id );
	},
	view: function(vnode){
		this.original = this.getOriginal( vnode.attrs.id );
		return m("div", {
			class: "tile "+ (this.original.selected() ? "selected":""),
			onclick: this.selectTile,
		}, [
			m("div.color", {
				style: "background-color: "+this.original.color()
			}),
			m("div.title", this.original.title()),
			m("div.info", [
				m("span.symbol", this.original.symbol()),
				m("span.edit-button", {
					onclick: this.editTile.bind(this),
					"data-id": this.original.id()
				}, "Edit")
			])
		]);
	}
}


module.exports = Tile;
