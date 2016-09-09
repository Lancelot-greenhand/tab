$(document).ready(function(){
	var tabs = filterSpaceNode(document.getElementById("tab").childNodes);
	for (var i=0; i<tabs.length; i++){
		tabs[i].onclick=tab_click;
	}
});

function tab_click(){
	var tabs = filterSpaceNode(document.getElementById("tab").childNodes);
	console.log(tabs);
	var contents = $("#tab_content").children(); 
	for (var i=0; i<tabs.length; i++){
		tabs[i].className="tab_inactive";
		$(this).addClass("tab_active");
		$(this).removeClass("tab_inactive");
		var active_num = tabs.indexOf(this);
		//contents
		$(contents[i]).css("display","none");
		$(contents[active_num]).css("display","block");
	}
}


function filterSpaceNode(nodes){
	var arr = [];
	for(var i = 0;i<nodes.length;i++){
		if(nodes[i].nodeType==3 && /^\s+$/.test(nodes[i].nodeValue)){
			continue;
		}
		arr.push(nodes[i]);
	}
	return arr;
};