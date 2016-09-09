
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

