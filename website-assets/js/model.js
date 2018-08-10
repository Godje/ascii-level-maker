const m = require("mithril");
			m.stream = require("mithril-stream");

const MODEL = {
	size: m.stream(10),
	type: m.stream(""),
	tilesize: m.stream(10),
	output: m.stream(""),
	canvas: undefined,
	menuopen: m.stream(false),
	types: [ { 
		name: m.stream("Air"),
		symbol: m.stream("=")
	}, {

	} ]
}

module.exports = MODEL;