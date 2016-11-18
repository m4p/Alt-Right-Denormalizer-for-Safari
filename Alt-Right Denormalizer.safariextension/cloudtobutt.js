// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	
    v = v.replace(/\balt-right\b/g, "rebranded white nationalism");
	v = v.replace(/\bAlt-right\b/g, "Rebranded white nationalism");
	v = v.replace(/\bAlt-Right\b/g, "Rebranded White Nationalism");
    v = v.replace(/\balt right\b/g, "rebranded white nationalism");
	v = v.replace(/\bAlt right\b/g, "Rebranded white nationalism");
	v = v.replace(/\bAlt Right\b/g, "Rebranded White Nationalism");
	
	textNode.nodeValue = v;
}
