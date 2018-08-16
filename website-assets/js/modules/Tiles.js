const m = require("mithril");
			m.stream = require("mithril-stream");
const MODEL = require("../model.js");

const Tile = {
	oninit: function (vnode){
		this.ctrl = {
			selectTile: function (e){
				return;
			},
			editTile: function (e){
				return;
			}
		}
		return;
	},
	view: function (vnode){
		return m("div.tile", {
			onclick: this.ctrl.selectTile
		}, [
			m("div.color", {
				style: "background-color: "+vnode.attrs.color()
			}),
			m("div.title", vnode.attrs.title()),
			m("div.info", [
				m("span.symbol", vnode.attrs.symbol()),
				m("span.edit-button", {
					onclick: this.ctrl.editTile
				},
					"Edit")
			])
		]);
	}
};

class Tiles {
	constructor(vnode){
		return;
	}
	view(vnode){
		return m("div.tiles", [
			m("div.wrapper", [
				m("div.tiles-list", [
					MODEL.tiles.map(function (el){
						return m(Tile, {
							title: el.title,
							color: el.color,
							symbol: el.symbol,
							selected: false
						})
					})
				]),
				m("div.create-tile", [

				])
			]),
		]);
	}
}
module.exports = Tiles
