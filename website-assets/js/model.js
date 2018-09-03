const m = require("mithril");
			m.stream = require("mithril-stream");

const tileid = m.stream(0);

const MODEL = {
	dimensions: {
		width: m.stream(10),
		height: m.stream(10)
	},
	type: m.stream(""),
	tilesize: m.stream(60),
	canvas: undefined,
	menuopen: m.stream(false),
	toolsopen: m.stream(true),
	currenttool: m.stream("Brush"),
	tools: [ "Brush", "Eraser", "Line", "Square" ],
	currenttile: m.stream(1),
	modalopen: m.stream(false),
	modalcomponent: m.stream([]),
	session: { //JSON will be exported
		output: m.stream(""),
		tiles: [ //Sample tiles. Testing purposes
			{
				id: tileid(tileid()+1),
				title: m.stream("Stone"),
				color: m.stream("#999"),
				symbol: m.stream("o"),
				selected: m.stream(false)
			},
			{
				id: tileid(tileid()+1),
				title: m.stream("Air"),
				color: m.stream("#a33"),
				symbol: m.stream("-"),
				selected: m.stream(false)
			},
			{
				id: tileid(tileid()+1),
				title: m.stream("Grass"),
				color: m.stream("#9f9"),
				symbol: m.stream("="),
				selected: m.stream(true)
			},
		],
	},
	tileid: m.stream(tileid())
}

module.exports = MODEL;
