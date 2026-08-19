// ==UserScript==
// @name         Crunchyroll Chunk Fix
// @namespace    https://multarix.com/
// @version      1.0.0
// @description  Replaces a broken Crunchyroll Webpack chunk
// @author       Multarix
// @match        https://www.crunchyroll.com/*
// @run-at       document-start
// @grant        none
// @updateURL    https://github.com/Multarix/Crunchyroll-Chunk-Fix/raw/refs/heads/master/crunchy.user.js
// @downloadURL  https://github.com/Multarix/Crunchyroll-Chunk-Fix/raw/refs/heads/master/crunchy.user.js
// ==/UserScript==

(() => {
	const ORIGINAL = "https://www.crunchyroll.com/build/_next/static/chunks/8cf7a42c.8e367a181ce67b7f.js";
	const REPLACEMENT = "https://multarix.com/static/crunchy/8cf7a42c.8e367a181ce67b7f.js";
	
	const originalAppendChild = Node.prototype.appendChild;
	Node.prototype.appendChild = function (node) {
		if(node instanceof HTMLScriptElement && new URL(node.src, location.href).href === ORIGINAL){
			console.log("[CR Fix] Replacing 8cf7a42c chunk");
			node.src = REPLACEMENT;
		}

		return originalAppendChild.call(this, node);
	};
})();
