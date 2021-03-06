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




/*
$(document).ready(function(){
//To display countries
	$(".region1").click(function(){
		$(".asia").css({
			"display":"block",
		});
	});
//hide other countries
    $(".region1").click(function(){
        $(".europe, .northAmerica, .latinAmerica").css({
			"display":"none",
		});
    })
//tab active
    $(".region1").click(function(){
    	$(this).addClass("tab_active").removeClass("tab_inactive");
    });

    $(".region1").click(function(){
    	$(".region2, .region3, .region4").removeClass("tab_active").addClass("tab_inactive");
    });

}
);

$(document).ready(function(){
//To display countries
	$(".region2").click(function(){
		$(".europe").css({
			"display":"block",
		});
	});
//hide other countries
    $(".region2").click(function(){
        $(".asia, .northAmerica, .latinAmerica").css({
			"display":"none",
		});
    })

    $(".region2").click(function(){
    	$(this).addClass("tab_active").removeClass("tab_inactive");
    });

    $(".region2").click(function(){
    	$(".region1, .region3, .region4").removeClass("tab_active").addClass("tab_inactive");
    });

}
);

$(document).ready(function(){
//To display countries
	$(".region3").click(function(){
		$(".northAmerica").css({
			"display":"block",
		});
	});
//hide other countries
    $(".region3").click(function(){
        $(".asia, .latinAmerica, .europe").css({
			"display":"none",
		});
    })
    $(".region3").click(function(){
    	$(this).addClass("tab_active").removeClass("tab_inactive");
    });

    $(".region3").click(function(){
    	$(".region1, .region2, .region4").removeClass("tab_active").addClass("tab_inactive");
    });

}
);

$(document).ready(function(){
//To display countries
	$(".region4").click(function(){
		$(".latinAmerica").css({
			"display":"block",
		});
	});
//hide other countries
    $(".region4").click(function(){
        $(".europe, .northAmerica, .asia").css({
			"display":"none",
		});
    })
    $(".region4").click(function(){
    	$(this).addClass("tab_active").removeClass("tab_inactive");
    });

    $(".region4").click(function(){
    	$(".region1, .region3, .region2").removeClass("tab_active").addClass("tab_inactive");
    });

}
);

*/