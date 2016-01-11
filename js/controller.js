// JavaScript Document

$(function () {

	//DEMO UPLOAD SUCCESS
	$("#next_upload").click(function() {
      $("#form_upload").addClass("hide");
      $("#img_preview").addClass("show");
    });
	$("#save_upload").click(function() {
      $("#upload_preview, .note").addClass("hide");
      $("#upload_preview").removeClass("show");
      $("#upload_success").addClass("show");
      $("#upload_success").removeClass("hide");
    });

	var mq   = window.matchMedia('(min-width: 992px)');
	var sq   = window.matchMedia('(min-width: 768px)');
	var sqm  = window.matchMedia('(max-width: 767px)');
	var sqm2 = window.matchMedia('(max-width: 480px)');

	$(".hl_campaign").css("height", $(window).height() - 65);

	$('[data-toggle="tooltip"]').tooltip()

	$('.dropdown-toggle').dropdown();

	$('.dropdown').on('shown.bs.dropdown', function () {
	  // do something…
	  $("#stick_menu").css("z-index", 1);
	});
	$('.dropdown').on('hidden.bs.dropdown', function () {
	  // do something…
	  $("#stick_menu").css("z-index", 2);
	});

	//DEMO FOLLOW
	$("#klik_follow").click(function() {
		$(this).toggleClass("icon-check");
		return false
	});

	if (sq.matches) {

		//CUSTOM SCROLL
		Ps.initialize(document.getElementById('demo_scroll'));
		Ps.initialize(document.getElementById('demo_scroll2'));
		Ps.initialize(document.getElementById('demo_scroll3'));
		Ps.initialize(document.getElementById('demo_scroll4'));

		Ps.initialize(document.getElementById('setting_scroll'));
		Ps.initialize(document.getElementById('messages_scroll'));
		Ps.initialize(document.getElementById('notif_scroll'));

		//PARALLAX
		$.fn.parallax = function(options) {

	        var windowHeight = $(window).height();

	        // Establish default settings
	        var settings = $.extend({
	            speed        : 0.15
	        }, options);

	        // Iterate over each object in collection
	        return this.each( function() {

	        // Save a reference to the element
	        var $this = $(this);

	        // Set up Scroll Handler
	        $(document).scroll(function()	{

	    	var scrollTop = $(window).scrollTop();
	        var offset = $this.offset().top;
	        var height = $this.outerHeight();

	    	// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}

			var yBgPosition = Math.round((offset - scrollTop) * settings.speed) - 16;

		    	// Apply the Y Background Position to Set the Parallax Effect
		    	$this.css('background-position', '50% ' + yBgPosition + 'px');

	        	});
	     	});
	    }

	    $(".hl_campaign").parallax({
			speed : 0.25
		});
		$("footer .bg, .hl_promo").parallax({
			speed : -0.2
		});

		// Cache the Window object
		$window = $(window);
	                
	   	$('div[data-type="background"]').each(function(){
	    var $bgobj  = $(this); // assigning the object
		
			/* 
			 * Create HTML5 elements for IE's sake
			 */
			document.createElement("article");
			document.createElement("div");

			//CATEGORY STICK MENU
			var s = $(".hc #stick_menu");
		    var pos = s.position();  
		    var hl_cat_height = $(".hc").height(); 
		    var h_menu = s.height(); 
		                   
		    $(window).scroll(function() {
		        var windowpos = $window.scrollTop();
		        var size = {
					width: $(window).width(),
					container: $('.container').width(),
					}

		        if (windowpos >= pos.top) {
		            $(".hc").addClass("stick");
		            $(".hc").css({
		            	marginBottom: -(h_menu + 65)
		            });
		            $(".content_cat").css({
		            	top: hl_cat_height,
		            	marginBottom: hl_cat_height
		            });
		            $("#hl_profile.stick #link_profile > ul").css("margin-right", (size.width - size.container)/2);
		        } else {
		            $(".hc").removeClass("stick"); 
		            $(".hc").css({
		            	marginBottom: 0
		            });
		            $(".content_cat").css({
		            	top: 0,
		            	marginBottom: 0
		            });
		            $("#hl_profile #link_profile > ul").css("margin-right", 0);

		            // Scroll the background at var speed
					// the yPos is a negative value because we're scrolling it UP!								
					var yPos = -($window.scrollTop() / $bgobj.data('speed'));
					
					// Put together our final background position
					var coords = '50% '+ yPos + 'px';
					//var trans = 'translate3d(0px,' + yPos + 'px, 0px)';

					// Move the background
					$bgobj.css({ backgroundPosition: coords });
					//$bgobj.css({ transform: trans });

		        }

		        rescale();

		    });

	    });

		$(".comment #comment_wrap").wrapAll("<div id='comment_more'></div>");

		$(".list_video .comment .more a").click(function() {
			var size = {
					width: $(window).width(),
					height: $(window).height(),
					container: $('.container').width(),
					user: $('#user').height() + 30
					}
			var lebar_menu = 320;
			var jarak = 15;

			if ($("body").hasClass("nav_open")) {
				$("body").removeClass("nav_open");
				$("#menu_btn").removeClass("open");
			}
			$("body").addClass("now_playing");

			if($(".comment > #comment_more").hasClass("show_comment")) {
				$(".comment > #comment_more").removeClass("show_comment");
				$("body").removeClass("comment_open");
			}
			else {
				$(".comment > #comment_more").addClass("show_comment");
				$("body").addClass("now_playing comment_open");
			}
			if($(".loves > #loves_more").hasClass("show_loves")) {
				$(".loves > #loves_more").removeClass("show_loves");
				$("body").removeClass("loves_open");
			}

			if($(window).width() > 1080) {
				$("#topnav").css("margin-right", lebar_menu + jarak - (size.width - size.container)/2);
			}
			else {
				$("#topnav").css("margin-right", lebar_menu);
			}

			if (sq.matches) {
				var user_info = $('#playing > .user_info').outerHeight();
				var thumb = $('#mobile_scroll .content').outerHeight() + 9;
				$(".hc .dis_table, #stick_menu").css({
						paddingRight: lebar_menu + jarak,
						paddingLeft: lebar_menu - (lebar_menu + jarak - (size.width - size.container)/2)
					});
				$(".content_cat > .container").css("padding-right", lebar_menu + (jarak*3) - (size.width - size.container)/2);
				$("#playing #mobile_scroll > .scrollable").css("height", size.height - (user_info + thumb));
			}

			return false
			rescale();
		});

		$("#close_comment").click(function() {
			$(".comment > #comment_more").removeClass("show_comment");
			$("body").removeClass("comment_open");
			return false
		});

	}

	//TABS MENU
	$(".tabs").idTabs(function(id,list,set){ 
	  $("a",set).removeClass("selected") 
	  .filter("[href='"+id+"']",set).addClass("selected"); 
	  for(i in list) 
		$(list[i]).hide(); 
	  $(id).fadeIn(); 
	  return false
	}); 
	
	//IMAGE LIQUID
    $(".lqd").imgLiquid();
	
	//STICKY
	$(window).load(function(){
		
		//STICKY NAV
		$("#promo .navbar").stick_in_parent({
			parent:"body",
			offset_top: 65
		});
	});
	
	//MENU
	$('#menu_btn').click(function(){
		var size = {
			width: $(window).width(),
			height: $(window).height(),
			container: $('.container').width(),
			user: $('#user').height() + 30
			}
		var lebar_menu = 320;
		var jarak = 15;

		// if ($("body").hasClass("now_playing")) {
		// 	$("body").removeClass("now_playing");
		// 	$(".play_btn").removeClass("on");
		// }

		if ($(this).hasClass("open")) {
			$("body").removeClass("nav_open menu_open");
			$(".slide_menu").removeClass("show_menu");
			$(this).removeClass("open");
			/*$('#menu').animate({'right':'-320px'},200,function(){
			});*/
			$("#topnav").css("margin-right", 0);
		}
		else {
			//$('#main').animate({'margin-left':'-50px'},300,function(){});
			$(this).addClass("open");
			$("body").addClass("nav_open");  
			
			/*$('#menu').animate({'right':'0px'},200,function(){
			}); */
			if($(window).width() > 1080) {
				$("#topnav").css("margin-right", lebar_menu + jarak - (size.width - size.container)/2);
			}
			else {
				$("#topnav").css("margin-right", lebar_menu);
			}
		}
		
		rescale();
	});
	
	// $(".scrollable").mCustomScrollbar({
	// 	  theme:"dark",
	// 	  scrollEasing:"easeOut"
	// });
		
	/*$("#menu").hover(function () {
		$("body").css("overflow", "hidden");
	},
	function () {
		$("body").css("overflow", "auto");
	});*/

	//PLAYING
	$(".play_btn").click(function() {
		var size = {
			width: $(window).width(),
			height: $(window).height(),
			container: $('.container').width(),
			user: $('#user').height() + 30
			}
		var lebar_menu = 320;
		var jarak = 15;
		if ($("body").hasClass("nav_open")) {
			$("body").removeClass("nav_open");
			$("#menu_btn").removeClass("open");
		}
		$("body").addClass("now_playing");
		$(this).addClass("on");
		
		if($(window).width() > 1080) {
			$("#topnav").css("margin-right", lebar_menu + jarak - (size.width - size.container)/2);
		}
		else {
			$("#topnav").css("margin-right", lebar_menu);
		}
		if (sq.matches) {
			var user_info = $('#playing > .user_info').outerHeight();
			var thumb = $('#mobile_scroll .content').outerHeight() + 9;
			$(".hc .dis_table, #stick_menu").css({
					paddingRight: lebar_menu + jarak,
					paddingLeft: lebar_menu - (lebar_menu + jarak - (size.width - size.container)/2)
				});
			$(".content_cat > .container").css("padding-right", lebar_menu + (jarak*3) - (size.width - size.container)/2);
			$("#playing #mobile_scroll > .scrollable").css("height", size.height - (user_info + thumb));
		}

		return false;
		rescale();
	});

	$("#stop_play_btn").click(function() {
		$("body").removeClass("now_playing menu_open");
		if($(".comment > #comment_more").hasClass("show_comment")) {
			$(".comment > #comment_more").removeClass("show_comment");
			$("body").removeClass("comment_open");
		}
		if($(".loves > #loves_more").hasClass("show_loves")) {
			$(".loves > #loves_more").removeClass("show_loves");
			$("body").removeClass("loves_open");
		}
		$(".play_btn").removeClass("on");
		$("#topnav").css("margin-right", 0);
		$(".content_cat > .container").css("padding-right", 15);
		$(".hc .dis_table, #stick_menu").css({
			paddingRight: 0,
			paddingLeft: 0
		});
		return false;
	});

	//LOVES MORE
	$("#playing .loves .user li a.click_love").click(function() {
		var size = {
			width: $(window).width(),
			height: $(window).height(),
			vid_content: $("#mobile_scroll .content").height()
			}
		if($(".loves > #loves_more").hasClass("show_loves")) {
			$(".loves > #loves_more").removeClass("show_loves");
			$("body").removeClass("loves_open");
		}
		else {
			$(".loves > #loves_more").addClass("show_loves");
			$("body").addClass("loves_open");
		}
		if($(".comment > #comment_more").hasClass("show_comment")) {
			$(".comment > #comment_more").removeClass("show_comment");
			$("body").removeClass("comment_open");
		}
		return false
	});

	$("#close_loves").click(function() {
		$(".loves > #loves_more").removeClass("show_loves");
		$("body").removeClass("loves_open");
		return false
	});

	$(".expand_video .loves .user li a.click_love").click(function() {
		$("#loves_more_detail").addClass("show_loves_detail");
		$(".full_top #loves_more_detail .scrollable").css("height", $("#loves_more_detail").height() - 53);
		return false
	});

	$("#close_loves_detail").click(function() {
		$("#loves_more_detail").removeClass("show_loves_detail");
		return false
	});

	//MENU SLIDE USER
	$("#menu #open_setting").click(function() {
		if($("#menu #setting").hasClass("show_menu")) {
			$("#menu #setting").removeClass("show_menu");
			$("body").removeClass("menu_open");
		}
		else {
			$("#menu #setting").addClass("show_menu");
			$("body").addClass("menu_open");
		}

		if($("#menu #messages, #menu #notif").hasClass("show_menu")) {
			$("#menu #messages, #menu #notif").removeClass("show_menu");
		}
		if($(".loves #loves_more").hasClass("show_loves")) {
			$(".loves #loves_more").removeClass("show_loves");
			$("body").removeClass("loves_open");
		}
		if($(".comment #comment_more").hasClass("show_comment")) {
			$(".comment #comment_more").removeClass("show_comment");
			$("body").removeClass("comment_open");
		}
		
		return false
	});

	$("#menu #open_messages").click(function() {
		if($("#menu #messages").hasClass("show_menu")) {
			$("#menu #messages").removeClass("show_menu");
			$("body").removeClass("menu_open");
		}
		else {
			$("#menu #messages").addClass("show_menu");
			$("body").addClass("menu_open");
		}

		if($("#menu #setting, #menu #notif").hasClass("show_menu")) {
			$("#menu #setting, #menu #notif").removeClass("show_menu");
		}
		if($(".loves #loves_more").hasClass("show_loves")) {
			$(".loves #loves_more").removeClass("show_loves");
			$("body").removeClass("loves_open");
		}
		if($(".comment #comment_more").hasClass("show_comment")) {
			$(".comment #comment_more").removeClass("show_comment");
			$("body").removeClass("comment_open");
		}

		return false
	});

	$(".click_message").click(function() {
		$("#list_messages").fadeOut();
		$("#conversation").fadeIn();
		$("#messages").addClass("open_con");
		return false
	});

	$("#menu #open_notif").click(function() {
		if($("#menu #notif").hasClass("show_menu")) {
			$("#menu #notif").removeClass("show_menu");
			$("body").removeClass("menu_open");
		}
		else {
			$("#menu #notif").addClass("show_menu");
			$("body").addClass("menu_open");
		}

		if($("#menu #setting, #menu #messages").hasClass("show_menu")) {
			$("#menu #setting, #menu #messages").removeClass("show_menu");
		}
		if($(".loves #loves_more").hasClass("show_loves")) {
			$(".loves #loves_more").removeClass("show_loves");
			$("body").removeClass("loves_open");
		}
		if($(".comment #comment_more").hasClass("show_comment")) {
			$(".comment #comment_more").removeClass("show_comment");
			$("body").removeClass("comment_open");
		}

		return false
	});

	$(".close_menu").click(function() {
		if($(this).parent(".title2").parent("#messages").hasClass("open_con")) {
			$("#list_messages").fadeIn();
			$("#conversation").fadeOut();
			$("#messages").removeClass("open_con");
		}
		else {
			$("#menu .slide_menu").removeClass("show_menu");
			$("body").removeClass("menu_open");
		}
		return false
	});
	
	//SEARCH
	var hahay = document.body
	var morphSearch = document.getElementById( 'morphsearch' ),
	input = morphSearch.querySelector( 'input.morphsearch-input' ),
	ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
	isOpen = isAnimating = false,
	// show/hide search area
	toggleSearch = function(evt) {
		// return if open and the input gets focused
		if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

		var offsets = morphsearch.getBoundingClientRect();
		if( isOpen ) {
			classie.remove( morphSearch, 'open' );
			classie.remove( hahay, 'noscroll' );
			$(this).siblings('.morphsearch-form').children('.morphsearch-input').removeAttr('placeholder');
			if (sq.matches) {
				$(this).siblings('.morphsearch-content').css('height', 0);
				$(this).siblings('.morphsearch-content').children('.list').css('height', 0);
			}

			// trick to hide input text once the search overlay closes 
			// todo: hardcoded times, should be done after transition ends
			if( input.value !== '' ) {
				setTimeout(function() {
					classie.add( morphSearch, 'hideInput' );
					setTimeout(function() {
						classie.remove( morphSearch, 'hideInput' );
						input.value = '';
					}, 300 );
				}, 500);
			}
			
			input.blur();
		}
		else {
			classie.add( morphSearch, 'open' );
			classie.add( hahay, 'noscroll' );
			$(this).attr('placeholder', 'Enter keyword');
			/*$(".morphsearch.open").css({
				"max-width": 1065,
				margin: "0 auto"
			});*/
		}
		isOpen = !isOpen;
		
		rescale();
		
	};

	// events
	input.addEventListener( 'focus', toggleSearch );
	ctrlClose.addEventListener( 'click', toggleSearch );
	// esc key closes search overlay
	// keyboard navigation events
	document.addEventListener( 'keydown', function( ev ) {
		var keyCode = ev.keyCode || ev.which;
		if( keyCode === 27 && isOpen ) {
			toggleSearch(ev);
		}
	});
	
	/***** for demo purposes only: don't allow to submit the form *****/
	morphSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );
		
	function rescale(){
		var size = {
		width: $(window).width(),
		height: $(window).height(),
		container: $('.container').width(),
		user: $('#user').height() + 30
		}
		var lebar_menu = 320;
		var jarak = 15;
		var hl_cat_height = $(".box_hl_cat").height(); 

		$(".hl_campaign").css("height", size.height - 65); 

		if ($("body").hasClass("nav_open") || $("body").hasClass("now_playing")) {
			$("#topnav").css("margin-right", lebar_menu + jarak - (size.width - size.container)/2);
		}
		$("#hl_profile.stick #link_profile > ul").css("margin-right", (size.width - size.container)/2);
		if (sq.matches) {
			var user_info = $('#playing > .user_info').outerHeight();
			var thumb = $('#mobile_scroll .content').outerHeight() + 9;
			if ($("body").hasClass("now_playing")) {
				$(".hc .dis_table, #stick_menu").css({
					paddingRight: lebar_menu + jarak,
					paddingLeft: lebar_menu - (lebar_menu + jarak - (size.width - size.container)/2)
				});
				$(".content_cat > .container").css("padding-right", lebar_menu + (jarak*3) - (size.width - size.container)/2);
				$("#playing #mobile_scroll > .scrollable").css("height", size.height - (user_info + thumb));
			}
		
			$('.morphsearch.open .morphsearch-content').css('height', size.height/1.4 );
			$('.morphsearch.open .morphsearch-content .list').css('height', size.height/1.25 - 183 );

		}

		if(mq.matches) {

			var full_top = $('.video').actual("height");

			// $(".full_top").css("height", full_top);
			$(".full_top .comment").css("height", full_top);
			$(".full_top .deskripsi").css("height", full_top);
			$(".full_top .comment_wrap .scrollable").css("height", full_top - 90);
			$(".full_top .deskripsi .scrollable").css("height", full_top - 220);
			$(".modal .full_bottom").css("height", size.height - full_top);
			$(".modal .full_bottom .scrollable").css("height", size.height - full_top - 132);

		}
		$(".full_top #loves_more_detail .scrollable").css("height", $("#loves_more_detail").height() - 53);

		$('.box_hl_cat').height();  

		if ($(".hc").hasClass("stick")) {
			$(".content_cat").css({
            	top: hl_cat_height,
            	marginBottom: hl_cat_height
            });	
		}

		//MODAL FOLLOWING / FOLLOWER
		$(".modal-body > .user.scrollable").css("height", size.height / 1.75);

	}

	$(window).bind("resize", rescale);

	if(sqm.matches) {
		$("footer #upload span").removeClass("hidden-xs");
	}
	
	$('#carousel').carouFredSel({
		width: "100%",
		scroll: {
			items: 2
		},
		swipe: {
			 onMouse: true,
			 onTouch: true
		},
		circular: false,
		infinite: false,
		auto: false,
		easing: 'linear',
		prev: '#prev',
		next: '#next'
	});

	//UPLOAD PROCESS
	'use strict';
    // Change this to the location of your server-side upload handler:
    var url = window.location.hostname === 'blueimp.github.io' ?
                '//jquery-file-upload.appspot.com/' : 'videos/',
        uploadButton = $('<button/>')
            .addClass('btn btn-primary')
            .prop('disabled', true)
            .text('Processing...')
            .on('click', function () {
                var $this = $(this),
                    data = $this.data();
                $this
                    .off('click')
                    .text('Abort')
                    .on('click', function () {
                        $this.remove();
                        data.abort();
                    });
                data.submit().always(function () {
                    $this.remove();
                });
            });
    $('#fileupload').fileupload({
        url: url,
        dataType: 'json',
        autoUpload: true,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|mp4|3gp|mpe?g)$/i,
        //maxFileSize: 999000,
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator.userAgent),
        previewMaxWidth: 432,
        previewMaxHeight: 243,
        previewCrop: true
    }).on('fileuploadadd', function (e, data) {
        data.context = $('<div/>').appendTo('#files');
        $.each(data.files, function (index, file) {
            var node = $('<p/>')
                    //.append($('<span/>').text(file.name));
            // if (!index) {
            //     node
            //         .append('<br>')
            //         .append(uploadButton.clone(true).data(data));
            // }
            node.appendTo(data.context);
        });
        $(".fileinput").addClass("hide")
        $("#upload_preview").addClass("show")
    }).on('fileuploadprocessalways', function (e, data) {
        var index = data.index,
            file = data.files[index],
            node = $(data.context.children()[index]);
        if (file.preview) {
            node
                //.prepend('<br>')
                .prepend(file.preview);
        }
        if (file.error) {
            node
                //.append('<br>')
                .append($('<span class="text-danger"/>').text(file.error));
        }
        if (index + 1 === data.files.length) {
            data.context.find('button')
                .text('Upload')
                .prop('disabled', !!data.files.error);
        }
    }).on('fileuploadprogressall', function (e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progress .progress-bar').css(
            'width',
            progress + '%'
        );
        $("#processing").html("Processing " + progress + "%");
    }).on('fileuploaddone', function (e, data) {
        $.each(data.result.files, function (index, file) {
            if (file.url) {
                var link = $('<a>')
                    .attr('target', '_blank')
                    .prop('href', file.url);
                $(data.context.children()[index])
                    .wrap(link);
            } else if (file.error) {
                var error = $('<span class="text-danger"/>').text(file.error);
                $(data.context.children()[index])
                    .append('<br>')
                    .append(error);
            }
        });
    }).on('fileuploadfail', function (e, data) {
        $.each(data.files, function (index) {
            var error = $('<span class="text-danger"/>').text('File upload failed.');
            $(data.context.children()[index])
                .append('<br>')
                .append(error);
        });
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');

    //THUMBNAIL SELECT
    $("#upload_preview .thumb label").click(function() {
		$("#upload_preview .thumb label").children(".summary").removeClass("set");
		$(this).children(".summary").addClass("set");
	});

	//MODAL FOLLOWING / FOLLOWER
	$(".modal-body > .user.scrollable").css({
		"height": $(window).height() / 1.75,
		"margin": 0
	});

	//MODALBOX EXPAND VIDEO

	//NOT MODAL
	if (mq.matches) {

		rescale();

		var full_top = $('.video').actual("height");
		var size = {
			height: $(window).height()
			}

		// $(".full_top").css("height", full_top);
		$(".full_top .comment").css("height", full_top);
		$(".full_top .deskripsi").css("height", full_top);
		$(".full_top .comment_wrap .scrollable").css("height", full_top - 90);
		$(".full_top .deskripsi .scrollable").css("height", full_top - 220);
		$(".full_top #loves_more_detail .scrollable").css("height", full_top - 53);

	}
	
	$('body').on('click', '.mod', function()
		{
			var id = $(this).data('ref'); //here i got the id of the clicked link
			var titlebox = '.title'+id;
			var title = $(titlebox).html(); //here i got the content from the content div. 
			var imagebox = '.image'+id;
			var image = $(imagebox).html(); //here i got the content from the content div. 
			var infobox = '.image_info'+id;
			var info = $(infobox).html(); //here i got the content from the content div. 
			var creditbox = '.credit'+id;
			var credit = $(creditbox).html(); //here i got the content from the content div. 
			
			$('#myModal').modal('show'); // here manually load the model 
			$('.modal-header .entry-title').html(title); // here manually inject the text taken from the hidden field to the modal text area. 
			$('.modal-body .image').html(image); // here manually inject the text taken from the hidden field to the modal text area.
			$('.modal-body .image_info').html(info); // here manually inject the text taken from the hidden field to the modal text area.
			$('.modal-body .credit').html(credit); // here manually inject the text taken from the hidden field to the modal text area.
			//$('.modal-body').css('height',$( window ).height()*0.8);
			//jQuery('.modal-body .metaslider img').css('max-height',jQuery( window ).height()*0.8);

			if (mq.matches) {

			rescale();

			var full_top = $('.video').actual("height");
			var size = {
				height: $(window).height()
				}

			// $(".full_top").css("height", full_top);
			$(".full_top .comment").css("height", full_top);
			$(".full_top .deskripsi").css("height", full_top);
			$(".full_top .comment_wrap .scrollable").css("height", full_top - 90);
			$(".full_top .deskripsi .scrollable").css("height", full_top - 220);
			$(".modal .full_bottom").css("height", size.height - full_top);
			$(".modal .full_bottom .scrollable").css("height", size.height - full_top - 132);

			}
			
	});

	//DATE TIME PICKER
	$('.datetimepicker').datetimepicker({
		viewMode: 'years',
        format: 'DD/MM/YYYY'
	});

});

/*MORPH BUTTON*/
(function() {	
	var docElem = window.document.documentElement, didScroll, scrollPosition;

	// trick to prevent scrolling when opening/closing button
	function noScrollFn() {
		window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
	}

	function noScroll() {
		window.removeEventListener( 'scroll', scrollHandler );
		window.addEventListener( 'scroll', noScrollFn );
	}

	function scrollFn() {
		window.addEventListener( 'scroll', scrollHandler );
	}

	function canScroll() {
		window.removeEventListener( 'scroll', noScrollFn );
		scrollFn();
	}

	function scrollHandler() {
		if( !didScroll ) {
			didScroll = true;
			setTimeout( function() { scrollPage(); }, 60 );
		}
	};

	function scrollPage() {
		scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
		didScroll = false;
	};

	scrollFn();
	
	[].slice.call( document.querySelectorAll( '.morph-button' ) ).forEach( function( bttn ) {
	
		new UIMorphingButton( bttn, {
			closeEl : '.icon-close',
			onBeforeOpen : function() {
				// don't allow to scroll
				noScroll();
				classie.addClass( document.body, 'noscroll' );
				classie.addClass( document.body, 'mod_open' );
			},
			onAfterOpen : function() {
				// can scroll again
				canScroll();
				// add class "noscroll" to body
				//classie.addClass( document.body, 'noscroll' );
				//classie.addClass( document.body, 'mod_open' );
				// add scroll class to main el
				classie.addClass( bttn, 'scroll' );
			},
			onBeforeClose : function() {
				// remove class "noscroll" to body
				classie.removeClass( document.body, 'noscroll' );
				classie.removeClass( document.body, 'mod_open' );
				// remove scroll class from main el
				classie.removeClass( bttn, 'scroll' );
				// don't allow to scroll
				noScroll();
			},
			onAfterClose : function() {
				// can scroll again
				canScroll();
			}
		} );
	} );
})();