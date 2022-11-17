var app = angular.module("app", ["ngRoute"]);

app.controller('MainCtrl', ['$scope', function ($scope) {
  console.log(1);
  $scope.initMenu = function(){
    console.log(2);
    if (typeof mCustomScrollbar != "undefined") {
      console.log(3);
      calcHeightItens();

      $("#nav-projeto").mCustomScrollbar({
        theme: "dark",
        scrollInertia: 600, 
        axis: "y"
      });

      $(window).resize(function(){
        calcHeightItens();
        $("#nav-projeto").mCustomScrollbar("update");
      });
    }
  }
  $scope.initTop = function(){
    calcHeightItens();
    if (typeof mCustomScrollbar != "undefined") {
      $("#top-navbar").mCustomScrollbar({
        theme: "dark",
        scrollInertia: 600,
        axis: "x"
      });
  
      $(window).resize(function(){
        window.calcHeightItens();
        $("#top-navbar").mCustomScrollbar("update");
      });
    }
  }
}]);

app.controller('GlobalCtrl', function ($scope, $route, $location) {
  $("#nav-projeto .nav-itens .active").removeClass("active");
  $("#nav-projeto .nav-item a[href='#!"+$location.path()+"']").parent().addClass("active");

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
}); 

app.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "./view/um-introducao.html",
      controller:"GlobalCtrl"
    })     
    .when("/um-introducao", {
      templateUrl: "./view/um-introducao.html",
      controller:"GlobalCtrl"
    })
    .when("/um-configurando-o-servidor-http", {
      templateUrl: "./view/um-configurando-o-servidor-http.html",
      controller:"GlobalCtrl"
    })
    .when("/um-configuracao-de-banco-de-dados", {
      templateUrl: "./view/um-configuracao-de-banco-de-dados.html",
      controller:"GlobalCtrl"
    })
    .when("/um-instanciando-o-sequelize", {
      templateUrl: "./view/um-instanciando-o-sequelize.html",
      controller:"GlobalCtrl"
    })
    
    .when("/um-criando-um-model-com-o-sequelize", {
      templateUrl: "./view/um-criando-um-model-com-o-sequelize.html",
      controller:"GlobalCtrl"
    })
    .when("/um-programacao-de-middlewares-de-controller-no-express", {
      templateUrl: "./view/um-programacao-de-middlewares-de-controller-no-express.html",
      controller:"GlobalCtrl"
    })
    .when("/um-conectando-os-middlewares", {
      templateUrl: "./view/um-conectando-os-middlewares.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-programando-o-appjs", {
      templateUrl: "./view/dois-programando-o-appjs.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-criação-de-spoilers", {
      templateUrl: "./view/dois-criação-de-spoilers.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-listagem-de-spoilers", {
      templateUrl: "./view/dois-listagem-de-spoilers.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-edicao-de-spoiler", {
      templateUrl: "./view/dois-edicao-de-spoiler.html",
      controller:"GlobalCtrl"
    })
    .when("/dois-confirmacao-para-remocao", {
      templateUrl: "./view/dois-confirmacao-para-remocao.html",
      controller:"GlobalCtrl"
    })
    
    
    .when('/outro', { template: 'no outro' });
    //.otherwise({ redirectTo: './view/introducao.html' })
});

app.component('barraNavegacao', {
  templateUrl: './templates/navigationBar.html'
})

app.component('menuTopo', {
  templateUrl: './templates/menuTopo.html'
})

//angular.bootstrap(document, [ app.name ])