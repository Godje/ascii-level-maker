const m = require("mithril");
m.stream = require("mithril-stream");
const frame = require("../frame.js");
const MODEL = frame.MODEL;

const imageLocation = "website-assets/images/<image>.png";
const Tools = {
	oninit: function(vnode){
		let that = this;
		this.nodes = {
			Tool: {
				view: function (vnode){
					let className = "tool tool-" + vnode.attrs.name.toLowerCase() + " " + (vnode.attrs.selected ? "selected":"");
					let name = vnode.attrs.name;
					return m("div", { 
						className,
						"data-tool": name,
						onclick: that.ctrl.selectTool
					}, [
						m("img", { src: imageLocation.replace("<image>", name.toLowerCase()) }),
						m("span", name)
					]);
				}
			}
		};
		this.ctrl = {
			selectTool: function (e){
				let el = e.currentTarget;
				let tool = el.dataset.tool;
				MODEL.currenttool(tool);
				return;
			},
			toggleAlwaysOpen: function (value){
				MODEL.toolsopen(value);
				return;
			}
		}
		return;
	},
	view: function(vnode){
		let that = this;
		return m("div", {
			className: "tools " + (MODEL.toolsopen() ? "open": "")
		}, [
			m("div.wrapper", [
				m("span", "Tools"),
				MODEL.tools.map(function(name){
					return m(that.nodes.Tool, {
						name,
						selected: name == MODEL.currenttool()
					} )
				}),
				m("div.always-open", [
					m("input", { 
						type: "checkbox",
						id: "tools-always-open",
						onchange: m.withAttr("checked", this.ctrl.toggleAlwaysOpen),
						checked: MODEL.toolsopen(),
					}),
					m("label", { for: "tools-always-open" }, "Always open")
				])
			]),
		]);
	}
}

module.exports = Tools;
