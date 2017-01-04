'use strict';

let m = require('mithril');

console.log('Hello World!');

//model
var Page = {
	list: () => {
		//return m.request({method: "GET", url: "pages.json"});
		return m.prop([
		{
			"title": "n1b.ch",
			"url": "https://www.n1b.ch",
		},
		{
			"title": "pfadi-brunnen.ch",
			"url": "https://www.pfadi-brunnen.ch",
		},
		]);
	}
};

var Demo = {
	//controller
	controller: function() {
		var pages = Page.list();
		return {
			pages: pages,
			rotate: function() {
				pages().push(pages().shift());
			}
		}
	},

	//view
	view: function(ctrl) {
		return m("div", [
			ctrl.pages().map(function(page) {
				return m("a", {
					href: page.url
				}, page.title);
			}),
			m("button", {
				onclick: ctrl.rotate
			}, "Rotate links")
		]);
	}
};


//initialize
m.mount(document.getElementById("example"), Demo);