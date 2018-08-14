const m = require("mithril");
m.stream = require("mithril-stream");
const MODEL = require("../model.js");

const imageLocation = "website-assets/images/<image>.png";
class Tools {
	constructor(vnode){
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
			}
		}
		return;
	}
	view(vnode){
		const that = this;
		return m("div.tools.open", [
			m("div.wrapper", [
				m("span", "Tools"),
				MODEL.tools.map(function(name){
					return m(that.nodes.Tool, {
						name,
						selected: name == MODEL.currenttool()
					} )
				})
			]),
		]);
	}
}

module.exports = Tools;
