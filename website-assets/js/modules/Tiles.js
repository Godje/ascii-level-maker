const m = require("mithril");
			m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;
const EditModal = require("./EditModal.js");
const Tile = require("./Tile.js");

const Tiles = {
	view: function(vnode){
		let that = this;
		return m("div.tiles", [
			m("div.wrapper", [
				m("div.tiles-list", [
					MODEL.session.tiles.map(function(el, ind, arr){
						return m(Tile, {
							id: el.id()
						})
					})
				]),
			]),
		]);
	}
}
module.exports = Tiles;
