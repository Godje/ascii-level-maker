const m = require("mithril");
			m.stream = require("mithril-stream");
const MODEL = {
	size: m.stream(10),
	type: m.stream(""),
	tilesize: m.stream(10),
	output: m.stream(""),
	canvas: undefined
}

module.exports = MODEL;
