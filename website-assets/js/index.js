const m = require("mithril");
			m.stream = require("mithril-stream");
const MODEL = require("./model.js");
const App = require("./modules/App.js");

const root = document.querySelector(".root");

if( window.location.href.indexOf("godje.github.io") !== -1 ) alert("Warning! This website is currently under development. It is not functional, or functioning as should. This alert will no longer be shown when a functioning, advertiser-worthy release will be pushed.");

m.route(root, "/", {
	"/": App
})
