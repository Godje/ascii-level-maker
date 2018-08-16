const m = require("mithril");
			m.stream = require("mithril-stream");

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
	tiles: [
		{
			title: m.stream("Air"),
			color: m.stream("#a33"),
			symbol: m.stream("="),
		},
	]
}

module.exports = MODEL;
