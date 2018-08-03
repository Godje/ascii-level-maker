const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("./model.js");
const App = require("./modules/App.js");

const root = document.querySelector(".root");

m.route(root, "/", {
	"/": App
})
