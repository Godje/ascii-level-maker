const m = require("mithril");
			m.stream = require("mithril-stream");

let tileid = 0;

const MODEL = {
	dimensions: {
		width: m.stream(10),
		height: m.stream(10)
	},
	type: m.stream(""),
	tilesize: m.stream(10),
	output: m.stream(""),
	canvas: undefined,
	menuopen: m.stream(false),
	toolsopen: m.stream(true),
	currenttool: m.stream("Brush"),
	tools: [ "Brush", "Eraser", "Line", "Square" ],
	currenttile: m.stream(1),
	tiles: [ //Sample tiles. Testing purposes
		{
			id: ++tileid,
			title: m.stream("Stone"),
			color: m.stream("#999"),
			symbol: m.stream("o"),
			selected: m.stream(false)
		},
		{
			id: ++tileid,
			title: m.stream("Air"),
			color: m.stream("#a33"),
			symbol: m.stream("-"),
			selected: m.stream(false)
		},
		{
			id: ++tileid,
			title: m.stream("Grass"),
			color: m.stream("#9f9"),
			symbol: m.stream("="),
			selected: m.stream(true)
		},
	],
}

module.exports = MODEL;
