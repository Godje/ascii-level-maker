const m = require("mithril");
			m.stream = require("mithril-stream");
const MODEL = require("../model.js");
const EditModal = require("./EditModal.js");
const Tile = require("./Tile.js");

class Tiles {
	constructor(vnode){
		return;
	} 
	view(vnode){
		let that = this;
		return m("div.tiles", [
			m("div.wrapper", [
				m("div.tiles-list", [
					MODEL.session.tiles.map(function(el){
						return m(Tile, el)
					})
				]),
			]),
		]);
	}
}
module.exports = Tiles;
