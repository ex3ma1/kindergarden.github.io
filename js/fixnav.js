$(document).ready(function(){
			// Фикмированная шапка при скролле
			$("#fixmenu").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 45) {
					$("#fixmenu").addClass("default").fadeIn('fast');
				} else {
					$("#fixmenu").removeClass("default").fadeIn('fast');
				};

				if($(window).width() < 900) {
					$("#fixmenu").removeClass("default").fadeIn('fast');
				}
			});
		});

