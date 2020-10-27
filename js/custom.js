jQuery(document).ready(function($) {
	"use strict";

// ______________ RESPONSIVE MENU
$('#navigation').superfish({
  delay: 300,
  animation: {
	opacity: 'show',
	height: 'show'
  },
  speed: 'fast',
  dropShadows: false
});

$(function() {
  $('#navigation').slicknav({
	label: "MENU",
	closedSymbol: "&#8594;",
	openedSymbol: "&#8595;"
  });
});

// ______________ FIXED MENU AT SCROLL

var nav = $('.header-navigation');
if ($(window).width() > 767) {
$(window).scroll(function () {
 if ($(this).scrollTop() > 200) {
   nav.addClass("f-nav fadeindown");
 } else {
   nav.removeClass("f-nav fadeindown");
 }
});
}


// ______________ ANIMATE EFFECTS
var wow = new WOW({
boxClass: 'wow',
animateClass: 'animated',
offset: 0,
mobile: false
});
wow.init();

// ______________ SEARCH FORM OVERLAY
$(function () {
  $('a[href="#search"]').on('click', function(event) {
	  event.preventDefault();
	  $('#search').addClass('open');
	  $('#search > form > input[type="search"]').focus();
  });

  $('#search, #search button.close').on('click keyup', function(event) {
	  if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
		  $(this).removeClass('open');
	  }
  });
});

// ______________ TOOLTIPS
  $('[data-toggle="tooltip"]').tooltip();

// ______________ ACCORDION ICONS
 $('.collapse').on('show.bs.collapse', function(){
  var i = $(this).parent().find('i')
  i.toggleClass('fa-plus-square-o fa-minus-square-o');
}).on('hide.bs.collapse', function(){
  var i = $(this).parent().find('i')
  i.toggleClass('fa-minus-square-o fa-plus-square-o');
});

// ______________ BACK TO TOP BUTTON
$(window).scroll(function() {
if ($(this).scrollTop() > 300) {
  $('#back-to-top').fadeIn('slow');
} else {
  $('#back-to-top').fadeOut('slow');
}
});
$('#back-to-top').on('click', function(event) {
$("html, body").animate({
  scrollTop: 0
}, 600);
return false;
});
});
		  // Função para formatar 1 em 01
		  const zeroFill = n => {
			  return ('0' + n).slice(-2);
		  }

		  // Cria intervalo
		  const interval = setInterval(() => {
			  // Pega o horário atual
			  const now = new Date();

			  // Formata a data conforme dd/mm/aaaa hh:ii:ss
			  const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

			  // Exibe na tela usando a div#data-hora
			  document.getElementById('hora').innerHTML = dataHora;
		  }, 1000);
  
	$('.nav a[href^="#"]').on('click', function(e) {
	  e.preventDefault();
	  var id = $(this).attr('href'),
		  targetOffset = $(id).offset().top;
		  
	  $('html, body').animate({ 
		scrollTop: targetOffset - 100
	  }, 500);
	});

	$('.posts a[href^="#"]').on('click', function(e) {
	  e.preventDefault();
	  var id = $(this).attr('href'),
		  targetOffset = $(id).offset().top;
		  
	  $('html, body').animate({ 
		scrollTop: targetOffset - 100
	  }, 500);
	});

//calendar

$(function () {
  function c() {
	  p();
	  var e = h();
	  var r = 0;
	  var u = false;
	  l.empty();
	  while (!u) {
		  if (s[r] == e[0].weekday) {
			  u = true
		  } else {
			  l.append('<div class="blank"></div>');
			  r++
		  }
	  }
	  for (var c = 0; c < 42 - r; c++) {
		  if (c >= e.length) {
			  l.append('<div class="blank"></div>')
		  } else {
			  var v = e[c].day;
			  var m = g(new Date(t, n - 1, v)) ? '<div class="today">' : "<div>";
			  l.append(m + "" + v + "</div>")
		  }
	  }
	  var y = o[n - 1];
	  a.css("background-color", y).find("h1").text(i[n - 1] + " " + t);
	  f.find("div").css("color", y);
	  l.find(".today").css("background-color", y);
	  d()
  }

  function h() {
	  var e = [];
	  for (var r = 1; r < v(t, n) + 1; r++) {
		  e.push({
			  day: r,
			  weekday: s[m(t, n, r)]
		  })
	  }
	  return e
  }

  function p() {
	  f.empty();
	  for (var e = 0; e < 7; e++) {
		  f.append("<div>" + s[e].substring(0, 3) + "</div>")
	  }
  }

  function d() {
	  var t;
	  var n = $("#calendar").css("width", e + "px");
	  n.find(t = "#calendar_weekdays, #calendar_content").css("width", e + "px").find("div").css({
		  width: e / 7 + "px",
		  height: e / 7 + "px",
		  "line-height": e / 7 + "px"
	  });
	  n.find("#calendar_header").css({
		  height: e * (1 / 7) + "px"
	  }).find('i[class^="icon-chevron"]').css("line-height", e * (1 / 7) + "px")
  }

  function v(e, t) {
	  return (new Date(e, t, 0)).getDate()
  }

  function m(e, t, n) {
	  return (new Date(e, t - 1, n)).getDay()
  }

  function g(e) {
	  return y(new Date) == y(e)
  }

  function y(e) {
	  return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate()
  }

  function b() {
	  var e = new Date;
	  t = e.getFullYear();
	  n = e.getMonth() + 1
  }
  var e = 480;
  var t = 2013;
  var n = 9;
  var r = [];
  var i = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  var s = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var o = ["#16a085", "#1abc9c", "#c0392b", "#27ae60", "#FF6860", "#f39c12", "#f1c40f", "#e67e22", "#2ecc71", "#e74c3c", "#d35400", "#2c3e50"];
  var u = $("#calendar");
  var a = u.find("#calendar_header");
  var f = u.find("#calendar_weekdays");
  var l = u.find("#calendar_content");
  b();
  c();
  a.find('i[class^="icon-chevron"]').on("click", function () {
	  var e = $(this);
	  var r = function (e) {
		  n = e == "next" ? n + 1 : n - 1;
		  if (n < 1) {
			  n = 12;
			  t--
		  } else if (n > 12) {
			  n = 1;
			  t++
		  }
		  c()
	  };
	  if (e.attr("class").indexOf("left") != -1) {
		  r("previous")
	  } else {
		  r("next")
	  }
  })
})

$(document).ready(function(e) {
  
  $("form[ajax=true]").submit(function(e) {
	  
	  e.preventDefault();
	  
	  var form_data = $(this).serialize();
	  var form_url = $(this).attr("action");
	  var form_method = $(this).attr("method").toUpperCase();
	  
	  $("#loadingimg").show();
	  
	  $.ajax({
		  url: form_url, 
		  type: form_method,      
		  data: form_data,     
		  cache: false,
		  success: function(returnhtml){                          
			  $("#result").html(returnhtml); 
			  $("#loadingimg").hide();                    
		  }           
	  });    
	  
  });
  
});