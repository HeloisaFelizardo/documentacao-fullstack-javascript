function mostraModalFavorito() {
	$("#modal-fav").addClass("active");
	$("body").addClass("oculta-scroll");
}

function ocultarModalFavorito() {
	$("#modal-fav").removeClass("active");
	$("body").removeClass("oculta-scroll");
}

function mostraModalAvaliacao(texto) {
	if(texto != undefined){
		$("#modal-avalia span").html(texto);
	}
	$("#modal-avalia").addClass("active");
	$("body").addClass("oculta-scroll");
}

function ocultarModalAvaliacao() {
	$("#modal-avalia").removeClass("active");
	$("body").removeClass("oculta-scroll");
}

function mostraModalMsg(texto) {
	if(texto != undefined){
		$("#modal-msg span").html(texto);
	}
	$("#modal-msg").addClass("active");
	$("body").addClass("oculta-scroll");
}

function ocultarModalMsg() {
	$("#modal-msg").removeClass("active");
	$("body").removeClass("oculta-scroll");
}

function isOnScreen(element) {
	var win = $(window);
	var screenTop = win.scrollTop();
	var screenBottom = screenTop + win.height();

	var elementTop = element.offset().top;
	var elementBottom = elementTop + element.height();

	var vertical = elementBottom > screenTop && elementTop < screenBottom;

	var screenLeft = win.scrollLeft();
	var screenRight = screenLeft + win.width();

	var elementLeft = element.offset().left;
	var elementRight = elementLeft + element.width();

	var horizontal = elementRight > screenLeft && elementLeft < screenRight;

	return vertical && horizontal;
}

function loadImages(){
	$.each($(".lazy-img"), function(){
		var block = $(this);
		var image = block.find("img");

		if(isOnScreen(block)){
			var url = image.data("src");
			
			if(image.attr("src") != url){
				image.on('load', function(){
					block.addClass("loaded");
				});
				image.attr("src",url);
			};
		}
	});
}

function showAvaliacaoLogado(){
	mostraModalAvaliacao("Voc� precisa estar <a style='display: inline; padding:0;' href='https://www.devmedia.com.br/login/login.asp' target='_blank'>logado</a> para dar seu feedback.");
}
function showAvaliacaoVotado(){
	mostraModalAvaliacao("Voc� j� deu seu feedback para esse exemplo.<br>Obrigado :D");
}

function calcHeightItens(){
	$(".nav-itens").css("height", window.innerHeight - $(".nav-itens")[0].getBoundingClientRect().top);
}

function calcArea(){
	$(".box-guia-content").css("height", window.innerHeight - $(".box-guia-content")[0].getBoundingClientRect().top);
}

var pulseStarted = false;
	
function pulseButtons(){
	if(!pulseStarted && $(".btn-ir-cod-font").length > 0){
		if(isOnScreen($(".btn-ir-cod-font"))){
			$(".btn-ir-cod-font").addClass("pulse");
			pulseStarted = true;  
		}
	}
}

$(document).ready(function () {
	var linkMVP = "<a style='display: inline; padding:0;' href='https://www.devmedia.com.br/mvp' rel='nofollow' target='_blank'>assinante MVP</a>";
	var linkLogin = "<a style='display: inline; padding:0;' href='https://www.devmedia.com.br/login/login.asp' rel='nofollow' target='_blank'>login</a>";

	if($(".ismenu:visible").length==0)
	{
		$("#top-navbar").addClass("hide_topnav");
		$("main").addClass("topnav_hidden");
		$(".push_down").css("height","30px");
		//$("#nav-projeto").css("top","120px");
		//$("#nav-projeto").css("height","calc(100% - 160px)");
	}

	if($("#nav-projeto .nav-itens>li:first-child:not(.item-pai)").length>0)
	{
		//console.log("A");
		if($("#nav-projeto .nav-itens>li:first-child:not(.item-pai)").hasClass("active"))
		{
			//console.log("B");
			if($("#nav-projeto .nav-itens>li:first-child:not(.item-pai)>ul.nav-sub-itens").length==0)
			{
				$("h2.item-titulo").removeClass("h2_item");
				$("h2.item-titulo").addClass("titulo_desc_move");
			}
		}
		else
		{
			$("h2.item-titulo").addClass("h2_item");
			$("h2.item-titulo").removeClass("titulo_desc_move");
		}
	}
	else
	{
		if($("#nav-projeto .nav-itens>.nav-item:first-child>.nav-sub-itens>li:first-child:not(.item-pai).active").length>0)
		{
			$("h2.item-titulo").removeClass("h2_item");
			$("h2.item-titulo").addClass("titulo_desc_move");
		}
		else
		{
			$("h2.item-titulo").addClass("h2_item");
			$("h2.item-titulo").removeClass("titulo_desc_move");
		}
	}

	$("body").on("click","#nav-projeto",function()
	{
		if($("#nav-projeto .nav-itens>li:first-child:not(.item-pai)").length>0)
		{
			//console.log("A");
			if($("#nav-projeto .nav-itens>li:first-child:not(.item-pai)").hasClass("active"))
			{
				//console.log("B");
				if($("#nav-projeto .nav-itens>li:first-child:not(.item-pai)>ul.nav-sub-itens").length==0)
				{
					//console.log("C");
					$("#projeto-conteudo-area").removeClass("titulo_desc_move");
					$(".projeto_titulo_descricao").css("display","block");
					$("#projeto-conteudo-area").addClass("titulo_desc_hide");
					$("#projeto-topo").css("justify-content","space-between");
					$("h2.item-titulo").removeClass("h2_item");
					$("h2.item-titulo").addClass("titulo_desc_move");
					$(".fav-like").removeClass("fav-like-maxbottom");
				}
			}
			else
			{
				//console.log("D");
				if($(".projeto_titulo_descricao").css("display")=="block")
				{
					//console.log("E");
					$("#projeto-conteudo-area").addClass("titulo_desc_hide");	
					//console.log("F");
				}
				else
				{
					//console.log("G");
					$("#projeto-conteudo-area").removeClass("titulo_desc_hide");
					//console.log("H");
				}

				$("#projeto-conteudo-area").addClass("titulo_desc_move");
				$(".projeto_titulo_descricao").css("display","none");
				$("#projeto-topo").css("justify-content","flex-end");
				$("h2.item-titulo").addClass("h2_item");
				$("h2.item-titulo").removeClass("titulo_desc_move");
				$(".fav-like").addClass("fav-like-maxbottom");
			}
			//$("#nav-projeto .nav-itens>li:first-child:not(.item-pai)").css("cssText","background:red !important");
		}
		else
		{
			//console.log("I");
			if($("#nav-projeto .nav-itens>.nav-item:first-child>.nav-sub-itens>li:first-child:not(.item-pai).active").length>0)
			{
				//console.log("J");
				$("#projeto-conteudo-area").removeClass("titulo_desc_move");
				$(".projeto_titulo_descricao").css("display","block");
				$("#projeto-conteudo-area").addClass("titulo_desc_hide");
				$("#projeto-topo").css("justify-content","space-between");
				$("h2.item-titulo").removeClass("h2_item");
				$("h2.item-titulo").addClass("titulo_desc_move");
				$(".fav-like").removeClass("fav-like-maxbottom");
			}
			else
			{
				//console.log("K");
				if($(".projeto_titulo_descricao").css("display")=="block")
				{
					//console.log("L");
					$("#projeto-conteudo-area").addClass("titulo_desc_hide");	
				}
				else
				{
					//console.log("M");
					$("#projeto-conteudo-area").removeClass("titulo_desc_hide");
				}

				$("#projeto-conteudo-area").addClass("titulo_desc_move");
				$(".projeto_titulo_descricao").css("display","none");
				$("#projeto-topo").css("justify-content","flex-end");
				$("h2.item-titulo").addClass("h2_item");
				$("h2.item-titulo").removeClass("titulo_desc_move");
				$(".fav-like").addClass("fav-like-maxbottom");
			}
			//$("#nav-projeto .nav-itens .nav-sub-itens>li:first-child:not(.item-pai)").css("cssText","background:red !important");
		}
	});

    //$("body .nav-itens").menuFixer(window.innerHeight*0.20+40, $(".exemplo-item-navegacao"));

    function inViewport($el) {
		if($el.length==0)
		{
			return false;
		}

        var elH = $el.outerHeight(),
            H   = $(window).height(),
            r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
        return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
	}

	if (typeof hljs != "undefined") {
		//hljs.initHighlightingOnLoad();
		//hljs.initLineNumbersOnLoad();

		$('pre code').each(function (i, block) {
			hljs.highlightBlock(block);
			if(!$(block).hasClass("nonumber")){
				hljs.lineNumbersBlock(block);
			}
		});
	}

	$("#mkt-list").on("mousedown",".projeto-img img",function(e){
        var href = $(this).data("url");

        switch(e.which){
            case 1:
                if(e.shiftKey || e.ctrlKey){
                    window.open(href, '_blank');
                }else{
                    window.location.href=href;
                }
            break;
            case 2:
                window.open(href, '_blank');
            break;
        }
        
        return true;
    });

	$(".box-guia-title").on("click", function(){
		var box = $("#box-guia");
		if(box.data("guia") == undefined || box.data("guia") == ""){
			return false;
		}

		var attr = box.data("guia");

		if(!box.hasClass("loaded") && !box.hasClass("loading")){
				$.ajax({
				type: "POST",
				data: { idguia: attr },
				url: "https://www.devmedia.com.br/articlesdev/navegacao_topicos_guias.php",
				dataType: "html",
				success: function(result){
					$(".box-guia-content").append(result);

					if (typeof mCustomScrollbar != "undefined") {
						calcArea();
						$(".box-guia-content").mCustomScrollbar({
							//theme: "minimal-dark",
							scrollInertia: 600,
							theme:"dark",
						});

						$(window).resize(function(){
							calcArea();
							$(".box-guia-content").mCustomScrollbar("update");
						});
					}
												
					box.removeClass("loading");
					box.addClass("loaded").addClass("opened");
					
				},error: function(result){
					box.removeClass("loading");
					console.log(result);
				}
			});
		}else{
			box.toggleClass("opened");
		}
	});

	if ($("#banner").length) {
		if (typeof particlesJS != "undefined") {
			initParticles();
		}else{
			var particleScript = $("#particlesJsScript");
			particleScript[0].addEventListener('load', function() {
				initParticles();
			});
		}
	}

	$("#tirar-duvida").click(function(){
		var page = $('body,html'); 
		page.animate({ 
			scrollTop: $(".comentario-area").offset().top-80 
		}, 600);
	});
	
	$("body").on("click",".nav-item.item-pai>span", function(e){
		e.preventDefault();

		if($(e.target).parent().children("ul").hasClass("animate-ul"))
		{
			$(e.target).parent().children("ul").slideToggle(500);
			$(e.target).parent().removeClass("rotate-arrow");
			$(e.target).parent().children("ul").removeClass("animate-ul");
		}
		else
		{
			$(e.target).parent().children("ul").slideToggle(500);
			$(e.target).parent().addClass("rotate-arrow");
			$(e.target).parent().children("ul").addClass("animate-ul");
		}
	});

	/*$("body").on("click", "#nav-projeto .nav-item:not(.nav-item-projeto):not(.admin-item):not(.home) a, .exemplo-item-navegacao a:not(.nav-mvp-link)", function (e) {
		e.preventDefault();
		var link = $(this);
		var idprojeto = link.attr("data-projeto");
		var iditem = link.attr("data-id");
		var ordem = link.attr("data-ordem");
		var url = link.attr("href");

		if (idprojeto > 0 && !link.closest(".nav-item:not(.item-pai), .nav-sub-item").hasClass("active")) {
			$("#projeto-conteudo-area").addClass("loading");

			$.ajax({
				url: 'https://www.devmedia.com.br/exemplos/include/viewitem.php',
				type: 'POST',
				data: { projeto_id: idprojeto, item: iditem },
			})
				.done(function (data) {
					$("#projeto-conteudo-area").html(data);
					$(".nav-item, .nav-sub-item, .projeto-label").removeClass("active");
					$("#view-area.projeto-view").removeClass("projeto-view");
					var li = $("#nav-projeto .nav-item a[data-id="+ iditem +"]").closest("li");
					li.addClass("active");
					if (li.hasClass("nav-sub-item")) {
						li.closest(".item-pai").addClass("active");
					}

					$('pre code').each(function (i, block) {
						hljs.highlightBlock(block);
						if(!$(block).hasClass("nonumber")){
							hljs.lineNumbersBlock(block);
						}
					});

					var top = $("#projeto-topo p").offset().top;
					
					if($(window).width()<=1099)
					{
						$(".ismenu.menu").html("<a href='javascript:void(0);'>Abrir Menu</a>");
						$(".ismenu.menu").addClass('bg-menu');
						$(".ismenu.menu").removeClass('fechar-nav');
						$("#nav-projeto").removeClass('left-menu-open');
					}

					if($("#nav-projeto .nav-itens>li:first-child:not(.item-pai)").length>0)
					{
						//console.log("A");
						if($("#nav-projeto .nav-itens>li:first-child:not(.item-pai)").hasClass("active"))
						{
							//console.log("B");
							if($("#nav-projeto .nav-itens>li:first-child:not(.item-pai)>ul.nav-sub-itens").length==0)
							{
								//console.log("C");
								$("#projeto-conteudo-area").removeClass("titulo_desc_move");
								$(".projeto_titulo_descricao").css("display","block");
								$("#projeto-conteudo-area").addClass("titulo_desc_hide");
								$("#projeto-topo").css("justify-content","space-between");
								$("h2.item-titulo").removeClass("h2_item");
								$("h2.item-titulo").addClass("titulo_desc_move");
								$(".fav-like").removeClass("fav-like-maxbottom");
							}
						}
						else
						{
							//console.log("D");
							if($(".projeto_titulo_descricao").css("display")=="block")
							{
								//console.log("E");
								$("#projeto-conteudo-area").addClass("titulo_desc_hide");	
								//console.log("F");
							}
							else
							{
								//console.log("G");
								$("#projeto-conteudo-area").removeClass("titulo_desc_hide");
								//console.log("H");
							}

							$("#projeto-conteudo-area").addClass("titulo_desc_move");
							$(".projeto_titulo_descricao").css("display","none");
							$("#projeto-topo").css("justify-content","flex-end");
							$("h2.item-titulo").addClass("h2_item");
							$("h2.item-titulo").removeClass("titulo_desc_move");
							$(".fav-like").addClass("fav-like-maxbottom");
						}
						//$("#nav-projeto .nav-itens>li:first-child:not(.item-pai)").css("cssText","background:red !important");
					}
					else
					{
						//console.log("I");
						if($("#nav-projeto .nav-itens>.nav-item:first-child>.nav-sub-itens>li:first-child:not(.item-pai).active").length>0)
						{
							//console.log("J");
							$("#projeto-conteudo-area").removeClass("titulo_desc_move");
							$(".projeto_titulo_descricao").css("display","block");
							$("#projeto-conteudo-area").addClass("titulo_desc_hide");
							$("#projeto-topo").css("justify-content","space-between");
							$("h2.item-titulo").removeClass("h2_item");
							$("h2.item-titulo").addClass("titulo_desc_move");
							$(".fav-like").removeClass("fav-like-maxbottom");
						}
						else
						{
							//console.log("K");
							if($(".projeto_titulo_descricao").css("display")=="block")
							{
								//console.log("L");
								$("#projeto-conteudo-area").addClass("titulo_desc_hide");	
							}
							else
							{
								//console.log("M");
								$("#projeto-conteudo-area").removeClass("titulo_desc_hide");
							}

							$("#projeto-conteudo-area").addClass("titulo_desc_move");
							$(".projeto_titulo_descricao").css("display","none");
							$("#projeto-topo").css("justify-content","flex-end");
							$("h2.item-titulo").addClass("h2_item");
							$("h2.item-titulo").removeClass("titulo_desc_move");
							$(".fav-like").addClass("fav-like-maxbottom");
						}
						//$("#nav-projeto .nav-itens .nav-sub-itens>li:first-child:not(.item-pai)").css("cssText","background:red !important");
					}					

					$("html, body").animate({ scrollTop: 0 });
					history.pushState(null, null, url);

          			$("#nav-projeto").removeClass("aberto");
          			$(".fixed-nav-position").removeClass("fixed-nav-show");
					$("body").removeClass("oculta-scroll");

				})
				.fail(function () {
					console.log("Erro ao carregar cursos");
				})
				.always(function () {
					$("#projeto-conteudo-area").removeClass("loading");
					$("#projeto-conteudo-area").removeClass("titulo_desc_hide");
				});
		}
	});*/

	$("body").on("click",".bg-fav" ,function () {
		var id = $(this).attr("data-id");
		alternarCursoFavorito(id);
	});

	$(".bg-download.off").on("click", function () {
		var comp = $(".bg-download.off").data("id");
		$.ajax({
			url: "https://www.devmedia.com.br/includeb/check_user_php.asp",
			method:"GET",
			data: {c: comp},
			success: function (data) {
				if(data == 0){
					mostraModalMsg("Para efetuar o download voc� precisa fazer o " + linkLogin);
				}else if(data == 1){
					mostraModalMsg("Para efetuar o download voc� precisa ser um " + linkMVP + " :)");
				}else{
					console.info("retorno", data);
				}
			},
			error: function(data){
				console.info("erro", data);
			}
		});
	});

	$(".bg-projeto.off").on("click", function () {
		var comp = $(".bg-projeto.off").data("id");
		$.ajax({
			url: "https://www.devmedia.com.br/includeb/check_user_php.asp",
			method:"GET",
			data: {c: comp},
			success: function (data) {
				if(data == 0){
					mostraModalMsg("Para ver o projeto em execu��o voc� precisa fazer o " + linkLogin);
				}else if(data == 1){
					mostraModalMsg("Para ver o projeto em execu��o voc� precisa ser um " + linkMVP + " :)");
				}else{
					console.info("retorno", data);
				}
			},
			error: function(data){
				console.info("erro", data);
			}
		});
	});

	$("body").on("click", ".bg-like.off", function(e){
		if($(this).hasClass("nomvp")){
			mostraModalAvaliacao("Para avaliar o exemplo voc� precisa ser um <a style='display: inline; padding:0;' href='https://www.devmedia.com.br/mvp' target='_blank'>assinante MVP</a> :)");
		}else{
			showAvaliacaoLogado();
		}
	});

	$("body").on("click", ".bg-like.votado", function(e){
		showAvaliacaoVotado();
	});

	$(".bg-like:not(.off):not(.votado) span.like, .bg-like:not(.off):not(.votado) span.dislike").on("click", function (e) {
		var valor = $(this).attr("data-v");
		var comp = $(this).attr("data-c");
		/*var usuario = $(this).attr("data-u");*/

		var dados = { "idcomp": comp, "util": valor };
		enviarAvaliacao(dados);
	});

	$("body").on("click", "#modal-fav, #modal-fav i", function () {
		ocultarModalFavorito();
	});

	$("body").on("click", "#modal-fav p", function (e) {
		e.stopPropagation();
	});

	$("body").on("click", "#modal-avalia, #modal-avalia i", function () {
		ocultarModalAvaliacao();
	});

	$("body").on("click", "#modal-avalia p", function (e) {
		e.stopPropagation();
	});

	$("body").on("click", "#modal-msg, #modal-msg i", function () {
		ocultarModalMsg();
	});

	$("body").on("click", "#modal-msg p", function (e) {
		e.stopPropagation();
	});

	$("body").on("click", ".bg-menu", function () {
        $("#nav-projeto").addClass("left-menu-open");
		$(".fixed-nav-position").addClass("fixed-nav-show");
		$(".bg-menu a").text("Fechar Menu");
		$(".bg-menu").addClass("fechar-nav menu");
		$(".bg-menu").removeClass("bg-menu");
	    $("body").addClass("oculta-scroll");
	});

	$("body").on("click", ".fechar-nav", function () {
        $("#nav-projeto").removeClass("left-menu-open");
		$(".fixed-nav-position").removeClass("fixed-nav-show");
		$(".ismenu.menu a").text("Abrir Menu");
		$(".ismenu.menu").removeClass("fechar-nav");
		$(".ismenu.menu").addClass("bg-menu");
		$("body").removeClass("oculta-scroll");
    });

	$(document).on("scroll",function(){

		if($(window).scrollTop()<=55)
        {
			var hello_barsize = parseInt($(".under_hellobar_wrapper").height());
			
			if(hello_barsize==null)
			{
				hello_barsize = 0;
			}

			if($(".ismenu:visible").length==0)
			{
				var final_size = 140+hello_barsize;
				$("#nav-projeto").css("height","calc(100% - "+final_size+"px)");
			}
			else
			{
				var final_size = 190+hello_barsize;
				$("#nav-projeto").css("height","calc(100% - "+final_size+"px)");
			}
		}
		else
		{
			
				var hello_barsize = 0;
				if($(".ismenu:visible").length==0)
				{
					$("#nav-projeto").css("height",inViewport($(".desc-area")));
				}
				else
				{
					$("#nav-projeto").css("height",inViewport($(".desc-area")));
				}
			
		}
        loadImages();
	});

	$(window).on("resize",function(){
		if($(".ismenu:visible").length==0)
		{
			$("#top-navbar").addClass("hide_topnav");
			$("main").addClass("topnav_hidden");
			$(".push_down").css("height","30px");
			//$("#nav-projeto").css("top","120px");
			$("#nav-projeto").css("height","calc(100% - 140px)");
		}
		else
		{
			$("#top-navbar").removeClass("hide_topnav");
			$(".push_down").css("height","80px");
			$("main").removeClass("topnav_hidden");
			//$("#nav-projeto").css("top","170px");
			$("#nav-projeto").css("height","calc(100% - 190px)");
		}
		loadImages();
	});

	loadImages();
	
	var devslider;
	if($("#devslider").length > 0){
		function runSlider() {	
			var sliderTags = $.find("[id='slide-comp']");
			$(sliderTags).each(function(i,e){
				$(e).addClass("slider-box");
			});
			
			devslider = new DevSlider(".slider-box");
		}

		if(typeof DevSlider == "undefined"){	
			$("#devslider")[0].onload = runSlider;
		}else{	
			runSlider();
		}
	}

	$(window).on("scroll", function(){
		pulseButtons();
	});
	
	pulseButtons();
});