$(document).ready(function() {
    
  // start #services-tabs
  $('.wishlist-tabs .tabs-btns  li').click(function(){
  	 var tab_id = $(this).attr('data-tabs');

  	 $('.wishlist-tabs  .tabs-btns li').removeClass('active');
  	 $('.wishlist-tabs   .tab-container').removeClass('active');

  	 $(this).addClass('active');
  	 $('.tab-container[data-tabs='+tab_id+']' ).addClass('active');
  	 return false;
   })
  
$('.show-wish-list').click(function(e){
    //close search
    closeNav();
    $('.wishlist-sidebar .side-overlay').addClass('visible');
    $('.side-overlay .side-wishlist').addClass('active');
    samllCartCalculation();
    calculateWisthlistItems();
    return false;
});
    
   $('#show-walit-list').click(function(e){
   //close search
    closeNav();
     $('.wallet-sidebar .side-overlay').addClass('visible')
     $('.side-overlay .side-wallet').addClass('active')
     return false;
   })
  


    
    
   
// calculate points  on wallet sidebar
var lolyPoints = 0;
var totalWallet = 0; 
    
$('.side-wallet ul li').each(function(index){  
    lolyPoints = $(this).find('.lp-points').text();
    totalWallet = totalWallet + parseInt(lolyPoints);
    
});    
$('.side-wallet .wallet-total .wallet').text(totalWallet);    

   
    
    
$('.side-wishlist,.side-wallet').click(function(e) {
        e.stopPropagation();
    });

$('div.close-sidebare').click(function(){
    $('.side-overlay').removeClass('visible');
});
  
    
    
$(document).click(function() {
  $('.side-overlay').removeClass('visible')
  $('.side-overlay .side-wallet,.side-overlay .side-wishlist').removeClass('active')
});
    
    
  // end #services-tabs
  $('.wallet-tabs li').click(function(){
    $(this).siblings('li').removeClass('active')
    $(this).toggleClass('active')
  });
  $('.wallet-tabs li .delete').click(function(){
    $(this).parents('li').remove()
    get_side_wallet_tabs_count()
  });

  $(".history-page #wishlist").stick_in_parent();

  $('body').on('click','.lp-count .bttn' , function(){

    var currentValue = parseInt($(this).siblings('input').val());
    var plus= 1;
    if (currentValue > 100){
      plus=100;
    }
    if ($(this).hasClass('plus')){
      var lpNum = parseInt($('.checkout-count .lp-num b').text(),10)
      var proNum = parseInt($('.product-lp-num').text(),10)
      if ( lpNum >= proNum && lpNum >0){
        $('#myModal').modal('show')
        // $(this).val(ms)
        return false;
      }
      $(this).siblings('input').val(currentValue +plus)

    }
    else{
      $(this).siblings('input').val(currentValue -plus)
    }
    get_card_lp_count()
    get_lp_count()
    get_side_card_lp_count()
    var eval=$(this).siblings('input').val()
    if(eval<=0 || isNaN(eval) || eval <=" "){$(this).siblings('input').val(0)}
  })
  
  
  
  
  // start main slider
  $('#da-slider').slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
  	// easing: 'easeInOutSine',
  	// prevArrow: $('#main-slider-navs .prev') ,
  	// nextArrow: $('#main-slider-navs .next')

  });
  // end main slider

  // start thumbs slider
  $('.thumbs-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows:true
  	// easing: 'easeInOutSine',
  	// prevArrow: $('#main-slider-navs .prev') ,
  	// nextArrow: $('#main-slider-navs .next')

  });
  // end thumbs slider

  $('.small-product-slider,.partners-slider').slick({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 7,
  	centerMode: false,
  	slidesToScroll: 7,
  	// autoplay:true,
    arrows: true,
  	responsive: [
  		{
        breakpoint: 1124,
        settings: {
          // centerMode: true,
          slidesToShow: 6,
  				slidesToScroll: 6,
        }
      },
  		{
        breakpoint: 980,
        settings: {
          // centerMode: true,
          slidesToShow: 5,
  				slidesToScroll: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          // centerMode: true,
          slidesToShow: 4,
  				slidesToScroll: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          // centerMode: true,
          slidesToShow: 2,
  				slidesToScroll: 2,
        }
      }
    ]

  });

  //end small-product-slider

    
  
  
// show wish-grid
/*
  $('.side-show-more').click(function(){
    if ($(this).hasClass('active')){
      $('.wish-grid:nth-of-type(1n+6),.wallet-grid:nth-of-type(1n+6)').slideUp(800)
      $(this).removeClass('active')
    }else{

      var divs =$(this).parent().find('.wish-grid:hidden,.wallet-grid:hidden')
      var count = divs.length
      for (var i = 0; i < count; i++ ) {
          divs.eq(i).fadeIn(1500)
      }
      $(this).addClass('active')
    }

    return false;
  })
// end show wish-grid

function sidewishlistCount() {
  var wishCount= $('.tab-container[data-tabs="wishlist-tab"]').children('.item').length
  var cartCount= $('.tab-container[data-tabs="cart-tab"').children('.item').length
  $('li[data-tabs="wishlist-tab"] .total-wish-count').text(wishCount)
  $('li[data-tabs="cart-tab"] .total-cart-count').text(cartCount)
}
sidewishlistCount()
$('.side-wishlist .item .delete').click(function(){
  $(this).parents('.item').remove()
  sidewishlistCount()
  //get_side_card_lp_count()
})



$('#wishlist .total .num').text($('.history-day:first-of-type .count .num').text());
$('#wishlist .title span').text('(' + $('.history-day:first-of-type').attr('data-date') +')');
function get_date_redeemed() {
  var totalAll=0;
  $('.history-day').each(function(){
    var arrNumber = new Array();
    $(this).find('.item').each(function(){
      var price = $(this).find('.price .num').text()
      arrNumber.push( price);
    })

    var totalLp = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        totalLp += arrNumber[i] << 0;
    }
    totalAll += totalLp;
    $(this).find('.count .num').text(totalLp)

    $('#wishlist .total-all').text(totalAll +' LP');

    if ($(window).scrollTop() +50 >= $(this).offset().top ) {
      $('#wishlist .total .num').text($(this).find('.count .num').text());
      $('#wishlist .title span').text('(' + $(this).attr('data-date') +')');
        return; //break the loop
    }
  })

}
*/



$(window).load(function () {

    $(window).on("scroll resize load", function () {
      //get_date_redeemed()
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });

})


//sticky menu
$(window).scroll(function(){
  var sticky = $('.page-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100){ 
    sticky.addClass('fixed');
      $('.page-header .header-bottom-menu').hide();
      $('.main').css('margin-top','176px');
 
  }else {
      sticky.removeClass('fixed');
      $('.page-header .header-bottom-menu').fadeIn(100);
      $('.main').css('margin-top','40px');
  }
});

//sticky for home page
$(window).scroll(function(){
  var sticky = $('#home .page-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100){ 
    sticky.addClass('fixed');
      $('#home .page-header .header-bottom-menu').hide();
      $('#home .main').css('margin-top','136px');
 
  }else {
      sticky.removeClass('fixed');
      $('#home .page-header .header-bottom-menu').fadeIn(100);
      $('#home .main').css('margin-top','0');
  }
});


/*************hala edit*********************/
$('.Signuplink' ).hover(function() {
	
   $('.Signup').attr('src', './images/new-use-red.png');
},function() {
	
   $('.Signup').attr('src', './images/new-use.png');
} );

$('.loglink' ).hover(function() {
	
   $('.log').attr('src', './images/login-red.png');
},function() {
	
   $('.log').attr('src', './images/login.png');
} );
$('.sub-link').hover(function() {
	
   $(this).css('text-decoration','underline');
     $('.form-control').val($(this).text()) ;
},function() {
	
   $('.sub-link').css('text-decoration','none');
      $('.form-control').val('search') ;
} );

$('.catagory-link').hover(function() {
	
   $('#search-by').text( $(this).text() 
   );
},function() {
	
   $('#search-by').text('catagory');
} );
 
$('#herfSignUP').click(function(){
	if($('#divTap1').hasClass("tapClickleft")){
	$('#divTap1').addClass("tapUnClick").removeClass("tapClickleft");
	$('#divTap2').addClass("tapClickRight").removeClass("tapUnClick");
	}
	$('#tabs2').css('display','none');
	$('#tabs1').css('display','block');

});
$('#herfLogIn').click(function(){
  if($('#divTap2').hasClass("tapClickRight")){
	$('#divTap2').addClass("tapUnClick");
	$('#divTap1').removeClass("tapUnClick");
	$('#divTap1').addClass("tapClickleft");
    $('#divTap2').removeClass("tapClickRight");
	}
	$('#tabs2').css('display','block');
    $('#tabs1').css('display','none');	
});



/* toggling active class */
var selector = '.sidenav .list-group>a';

$(selector).on('click', function(){

    $(selector).removeClass('item-active');
    $(this).addClass('item-active');    
});

$('.sidenav .list-group>a.has-dropdown').click(function() {
    $(this).find($(".glyphicon")).toggleClass('glyphicon-menu-down').toggleClass('glyphicon-menu-up');

});



/*********************** Start: wisthlist - cart buttons ***************************/
$('.btn-wishlist').click(function(){
   $(this).toggleClass('btn-wishlist-bg'); 
});
$('.btn-cart').click(function(){
   $(this).toggleClass('btn-cart-bg'); 
});
/*********************** End: wisthlist - cart buttons ***************************/






 /*********************** Start: Product Page ***************************/
  // slide to programs with redeem button click
  $('#show-select-redeemable').click(function(){
      $("#select-redeemable").show();
      $('html,body').animate({scrollTop: $("#select-redeemable").offset().top},'slow');
      
  })

  //add and remove row with program button click
  $('.select-redeemable-items ul.programs li .img-block button').click(function(){
      
    var program = $(this).closest('.program');
    var program_id = program.data('program');
    var program_img = program.find('.img-block img').attr('src');
    var program_title = program.find('.caption h4').text();   

    program.toggleClass('active');
    
    $(this).toggleClass('btn-warning');
    $(this).toggleClass('btn-success');
    $('.select-redeemable-items ul.programs li .img-block button.btn-success').html("<span style='color:#fff;' class='glyphicon glyphicon-ok'></span>");
    $('.select-redeemable-items ul.programs li .img-block button.btn-warning').html("Select Program");

    if(program.hasClass('active')){
        $('.lp-table tbody').append("<tr data-program-in-table="+ program_id +"><td>"+ program_title +"</td><td><img src="+ program_img +"></td><td class='blue-color'>1000 Point</td><td class='green-color'><span class='program-lp-points'>333</span> LP</td><td class='blue-color'><span class='glyphicon glyphicon-minus'></span> <span class='program-lp-to-redeem'>0</span> <span class='glyphicon glyphicon-plus'></span></td><td class='green-color'><span class='program-lp-to-checkout'>0</span> LP <div class='extra-icons'><span class='glyphicon glyphicon-remove'></span><span class='glyphicon glyphicon-menu-down' type='button' data-toggle='popover' data-placement='bottom' data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'></span></div></td></tr>");
      }else{
            $('.lp-table table tbody').find('tr[data-program-in-table='+program_id+']').remove();
      }
      
      total_lp();
      
  });
  
// popover  
$('body').on('click', '.lp-table .glyphicon-menu-down', function () {
  $('[data-toggle="popover"]').popover();
})
  
//delete program row in table when x button is clicked
  $('body').on('click', '.lp-table tbody tr td .extra-icons span.glyphicon-remove', function(){
      
    var program_row = $(this).closest('tr');
    var programID = program_row.data('program-in-table');
    program_row.remove();
      
    $('.select-redeemable-items ul.programs .program[data-program='+programID+']').removeClass('active');
    $('.select-redeemable-items ul.programs .program[data-program='+programID+'] li .img-block button').toggleClass('btn-warning');
    $('.select-redeemable-items ul.programs .program[data-program='+programID+'] li .img-block button').toggleClass('btn-success');
    $('.select-redeemable-items ul.programs li .img-block button.btn-warning').html("Select Program");
      
    total_lp();
    
  }); 

//increase program lp-to-redeem value with plus button
$('body').on('click', '.lp-table tr td .glyphicon-plus', function(){
    
    var program_lp_to_redeem_new_value;
    var program_lp_points_new_value;
    
    var program_lp_to_redeem = parseInt($(this).closest('td').find('.program-lp-to-redeem').text());
    var program_lp_points = parseInt($(this).closest('tr').find('.program-lp-points').text());
    
    program_lp_to_redeem_new_value =++ program_lp_to_redeem;
    program_lp_points_new_value =-- program_lp_points;
    
    $(this).closest('td').find('.program-lp-to-redeem').text(program_lp_to_redeem_new_value);
    $(this).closest('tr').find('.program-lp-to-checkout').text(program_lp_to_redeem_new_value);
    $(this).closest('tr').find('.program-lp-points').text(program_lp_points);
    
    total_lp();
});

//decrease program lp-to-redeem value with minus button
$('body').on('click', '.lp-table tr td .glyphicon-minus', function(){
    var program_lp_to_redeem_new_value;
    var program_lp_points_new_value;
    
    var program_lp_to_redeem = parseInt($(this).closest('td').find('.program-lp-to-redeem').text());
    var program_lp_points = parseInt($(this).closest('tr').find('.program-lp-points').text());
    
    program_lp_to_redeem_new_value =-- program_lp_to_redeem;
    program_lp_points_new_value =++  program_lp_points;
    
    $(this).closest('td').find('.program-lp-to-redeem').text(program_lp_to_redeem_new_value);
    $(this).closest('tr').find('.program-lp-to-checkout').text(program_lp_to_redeem_new_value);
    $(this).closest('tr').find('.program-lp-points').text(program_lp_points_new_value);
    total_lp();
});

//calculate total lp
function total_lp(){
    
    var totalLp = 0;
    
    $('.lp-table table tbody tr').each(function(){
        totalLp = totalLp + parseInt($(this).find('td .program-lp-to-redeem').text());
    });
    
    totalLp = totalLp + parseInt($('.lp-table table tfoot tr td .program-lp-to-redeem').text());
    
    $('.total-lp').text(totalLp);
    //console.log(totalLp);
}
    
/*********************** End: Product Page ***************************/  





/*********************** Start: cart page ***************************/
      
// side part scroll effect
$(window).scroll(function(){
 
    var  scroll = $(window).scrollTop();

  if (scroll >= 250 && scroll <= 600){ 
    $('.cart-page .side').addClass('fixed-side');
  }else{
       $('.cart-page .side').removeClass('fixed-side');
  }
    
});

cartPageCalculation();

//cart calculation
function cartPageCalculation(){
    var cartPageTotalProgramLP = 0;
    var cartPageTotalEarningLP = 0;
    
    var count = 0;
    
    $('.big-cart .cart-inner .body .item').each(function(){

        var itemProgramLP = parseInt($(this).find('.program-points').text());
        var itemEarningLP = parseInt($(this).find('.earning-points').text());

        cartPageTotalProgramLP = cartPageTotalProgramLP + itemProgramLP;
        cartPageTotalEarningLP = cartPageTotalEarningLP + itemEarningLP;
        
        count ++;
    });
    
    $('.big-cart-total-program-points').text(cartPageTotalProgramLP);
    $('.big-cart-total-earning-points').text(cartPageTotalEarningLP);
    $('.big-cart-cartTotalItems').text(count);
}

// remove item when remove button is clicked
$('.big-cart .cart-inner .body .item .glyphicon-remove').click(function(){
   $(this).closest('.item').remove();
    cartPageCalculation();
});


// detect the changing of quantity

 $('.big-cart .cart-inner .body .item').each(function(){
     
     var itemProgramLP = parseInt($(this).find('.program-points').text());
     var itemEarningLP = parseInt($(this).find('.earning-points').text());
     
     var itemsNumber = $(this).find(':input[type="number"]');
     
     itemsNumber.bind('keyup kedown mouseup mousedown', function () {
        
        $(this).closest('.item').find('.program-points').text(itemsNumber.val() * itemProgramLP);
        $(this).closest('.item').find('.earning-points').text(itemsNumber.val() * itemEarningLP);
         cartPageCalculation();
    });
     
 });


/*********************** End: cart page ***************************/






/*********************** Start: small cart & wisthlist sidebare ***************************/
    
/***** Start: wishlist *****/
function calculateWisthlistItems(){
    var count = 0;
    $('.wishlist-tabs .wishlist .item').each(function(){
        count ++;
    });
    $('.tabs-btns .total-wish-count').text(count);
}
// remove item when remove button is clicked
$('.wishlist-tabs .item .delete').click(function(){
    $(this).closest('.item').remove();
    calculateWisthlistItems();
});
 calculateWisthlistItems();
/***** End: wishlist *****/
    
    
/***** Start: cart *****/
samllCartCalculation();

//cart calculation
function samllCartCalculation(){
    var cartPageTotalProgramLP = 0;
    var cartPageTotalEarningLP = 0;
    
    var count = 0;
    
    $('.small-cart .cart-inner .body .item').each(function(){

        var itemProgramLP = parseInt($(this).find('.program-points').text());
        var itemEarningLP = parseInt($(this).find('.earning-points').text());

        cartPageTotalProgramLP = cartPageTotalProgramLP + itemProgramLP;
        cartPageTotalEarningLP = cartPageTotalEarningLP + itemEarningLP;
        
        count ++;
    });
    
    $('.small-cart .total-programs-points').text(cartPageTotalProgramLP);
    $('.small-cart .total-earning-points').text(cartPageTotalEarningLP);
    $('.tabs-btns .total-cart-count').text(count);
}

// remove item when remove button is clicked
$('.small-cart .cart-inner .body .item .glyphicon-remove').click(function(){
   $(this).closest('.item').remove();
    samllCartCalculation();
});


// detect the changing of quantity
 $('.small-cart .cart-inner .body .item').each(function(){
     
     var itemProgramLP = parseInt($(this).find('.program-points').text());
     var itemEarningLP = parseInt($(this).find('.earning-points').text());
     
     var itemsNumber = $(this).find(':input[type="number"]');
     
     itemsNumber.bind('keyup kedown mouseup mousedown', function () {
        
        $(this).closest('.item').find('.program-points').text(itemsNumber.val() * itemProgramLP);
        $(this).closest('.item').find('.earning-points').text(itemsNumber.val() * itemEarningLP);
         samllCartCalculation();
    });
     
 });
/***** Start: cart *****/

/*********************** End: small cart sidebare ***************************/
 

});