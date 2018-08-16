const m = require("mithril");
			m.stream = require("mithril-stream");


const Tile {
	view: function (vnode){
		return m("div.tile", {}, [
			m("div.color"),
			m("div.title"),
			m("div.info", [
				m("span.symbol", ""),
				m("span.edit", "Edit")
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
				"Tiles"
			]),
		]);
	}
}
module.exports = Tiles
