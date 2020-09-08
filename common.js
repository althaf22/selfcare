function menu() {
    var html = "";

    html += "<div id=menu class='row no-pad d-none d-lg-flex'>";

    if (new String(window.location).toLowerCase().indexOf("subscriptions.") >= 0)
        html += "<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'><div class='curved_buttons_top_current'>Subscriptions</div></div>";
    else
        html += "<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'><div class='curved_buttons_top' onclick=window.location='subscriptions.html'>Subscriptions</div></div>";


    if (new String(window.location).toLowerCase().indexOf("payments.") >= 0)
        html += "<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'><div class='curved_buttons_top_current'>Payments</div></div>";
    else
        html += "<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'><div class='curved_buttons_top' onclick=window.location='payments.html'>Payments</div></div>";

    if (new String(window.location).toLowerCase().indexOf("orders") >= 0)
        html += "<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'><div class='curved_buttons_top_current'>Orders</div></div>";
    else
        html += "<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'><div class='curved_buttons_top' onclick=window.location='orders.html'>Orders</div></div>";
	
	 if (new String(window.location).toLowerCase().indexOf("accounts.") >= 0)
        html += "<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'><div class='curved_buttons_top_current'>Account</div></div>";
    else
        html += "<div class='col-xs-12 col-sm-12 col-md-3 col-lg-3'><div class='curved_buttons_top' onclick=window.location='accounts.html'>Account</div></div>";


    html += "</div>";

    html += "<div style='height:20px' class='d-none d-sm-block'></div>";


    document.write(html)
}


function mobilemenu2() {

    var html = "";
    html += "<div id='myNav' class='overlay  d-block d-lg-none'>";
    html += "			  <!-- Button to close the overlay navigation -->";
    html += "			  <div style='height:20px' class='d-block d-lg-none'></div>";
    html += "			  <!--<span onclick='closeNav()' style='cursor:pointer;padding-left:12px;color:#000000'><img src='close.svg' /></span>-->";
    html += "			  <span style='font-family:Gotham-Book;font-size:18pt;color:#000000;padding-left:12px' onclick=closeNav()>X</span>";

    html += "			  <!-- Overlay content -->";
    html += "			  <div class='overlay-content'>";

    //html += "				<div class='container'>";
    html += "					<div style='height:30px'></div>";

    html += "					<div class='row'>";
    html += "						<div class='col-12' onclick=window.location='subscriptions.html' style='cursor:pointer'>";
    html += "							<div style='float:left;width:50px'><img src='subscription.png'></div>";
    html += "							<div style='float:left'>Subscriptions</div>";
    html += "						</div>";
    html += "					</div>";

    html += "					<div class='row no-pad'>";
    html += "						<div class='col-12 pt-3 pb-3'>";
    html += "							<hr>";
    html += "						</div>";
    html += "					</div>";

    html += "					<div class='row'>";
    html += "						<div class='col-12' onclick=window.location='payments.html' style='cursor:pointer'>";
    html += "							<div style='float:left;width:50px'><img src='payment.png'></div>";
    html += "							<div style='float:left'>Payment</div>";
    html += "						</div>";
    html += "					</div>";

    html += "					<div class='row no-pad'>";
    html += "						<div class='col-12 pt-3 pb-3'>";
    html += "							<hr>";
    html += "						</div>";
    html += "					</div>";

    html += "					<div class='row'>";
    html += "						<div class='col-12' onclick=window.location='orders.html' style='cursor:pointer'>";
    html += "							<div style='float:left;width:50px'><img src='order.png'></div>";
    html += "							<div style='float:left'>Orders</div>";
    html += "						</div>";
    html += "					</div>";

    html += "					<div class='row no-pad'>";
    html += "						<div class='col-12 pt-3 pb-3'>";
    html += "							<hr>";
    html += "						</div>";
    html += "					</div>";
	
	html += "					<div class='row'>";
    html += "						<div class='col-12' onclick=window.location='accounts.html' style='cursor:pointer'>";
    html += "							<div style='float:left;width:50px'><img src='account.png'></div>";
    html += "							<div style='float:left'>Account</div>";
    html += "						</div>";
    html += "					</div>";

    html += "					<div class='row no-pad'>";
    html += "						<div class='col-12 pt-3 pb-3'>";
    html += "							<hr>";
    html += "						</div>";
    html += "					</div>";
	
    if (new String(window.location).indexOf("user.html") < 0 && new String(window.location).indexOf("create.html") < 0) {
        html += "					<div class='row'>";
        html += "						<div class='col-12' onclick=window.location='signin.html' style='cursor:pointer'>";
        html += "							<div style='float:left;width:50px'><img src='exit.png' width=26></div>";
        html += "							<div style='float:left'>Sign Out</div>";
        html += "						</div>";
        html += "					</div>";
    }

    html += "						<div class='row no-pad'>";
    html += "								<div class='col-12'>";
    html += "									<div style='height:20px'></div>";
    html += "									<div><hr class=ruler></div>";
    html += "								</div>";
    html += "						</div>";


    //html += "						</div>";
    //html += "						</div>";

    //html += "					</div>";


    html += "				  </div>";
    html += "				</div>";
    document.write(html);
}



function header2() {
    var html = "";
    html += "<div style='width:100%;background-color:#fff' class='d-none d-lg-block'>";

    html += "<div id=header class='container'>";
    html += "<div style='height:5px'></div>";
    html += "		<div class='row no-pad vertical'  style='background-color:#fff'>";
    html += "			<div class='col-xs-12 col-sm-12 col-md-12 col-lg-6'>";
    html += "				<a class='home-link' href='http://bein.net/en'>";
    html += "				<img src='bein-Logo.png' class='logo' alt='Logo beIn Sports'>";
    html += "				</a>";
    html += "			</div>";
    html += "			<div class='col-lg-6 text-right mt-2'>";
    if (new String(window.location).indexOf("user.html") < 0 && new String(window.location).indexOf("create.html") < 0)
        html += "				<div style='clear:both;font-style:italic;font-size:16px' class=languagenone onclick=window.location='signin.html'>Sign Out&nbsp;&nbsp;&nbsp;&nbsp;</div>";
    html += "			</div>";
    html += "		</div>";
    html += "<div style='height:5px'></div>";
    html += "</div>";
    html += "</div>";


    html += "<div id='myNav-open' class='d-block d-lg-none pt-3'>";
    html += "<span onclick='openNav()' style='cursor:pointer;padding-left:10px'><img src='burger.svg'></a>";
    html += "<span><img src='bein.svg' align='right' style='padding-right:10px'></a>";
    html += "</div>";
	
	
	html +="</div>";


    document.write(html);
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function footer() {
    var html = ""
    html = "<div class='footer d-none d-lg-block' width=100%>";
    html += "  <div class='container'>";

    html += "		<div class='row no-pad'>";

    html += "				<div class='col-xs-12 col-sm-7 col-md-5 col-lg-8'>";
    html += "									©&nbsp;beIN&nbsp;MEDIA&nbsp;GROUP";
    html += "									<a class=footerlinks href='http://bein.net/en/terms-conditions/'>Terms&nbsp;&amp;&nbsp;Conditions</a>&nbsp;|";
    html += "									<a class=footerlinks href='https://getbein.beinsports.com/us/privacy-policy/'>Privacy Policy</a>&nbsp;|";
    html += "									<a class=footerlinks href='https://www.bein.net/en/contact-center/'>Contact Us</a>";
    html += "				</div>";
    html += "				<div class='col-xs-12 col-sm-5 col-md-7 col-lg-4 text-right'>";
    html += "									<a ss=footerlinks href='https://twitter.com/beINmena?lang=en' data-ga-category='' data-ga-label='link-https://twitter.com/beINmena?lang=en' target='_blank'>";
    html += "										<img width='18' src='twitter2x.png' alt=''></a>";
    html += "									<a  href='https://www.facebook.com/beinmena/' data-ga-category='' data-ga-label='link-https://www.facebook.com/beinmena/' target='_blank'>";
    html += "										<img width='18' src='facebook2x.png' alt=''></a>";
    html += "									<a href='http://instagram.com/bein' data-ga-category='' data-ga-label='link-http://instagram.com/bein' target='_blank'>";
    html += "										<img width='18' src='instagram2x.png' alt=''></a>";
    html += "									<a  href='https://www.youtube.com/beinmena' data-ga-category='' data-ga-label='link-https://www.youtube.com/beinmena' target='_blank'>";
    html += "										<img width='18' src='youtube2x.png' alt=''></a>";
    html += "				</div>";

    html += "			</div>";

    html += "		</div>";



    html += "</div>";
    document.write(html);
    //if ($(window).scrollTop() + $(window).height() == $(document).height()) 
    //$('.footer').show();
}

function fixheight() {
    var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var pageHeight = $('body').height();
    if (pageHeight < winHeight) {
        $('.all').css('min-height', winHeight - 150)
    }
}


function realign() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('.footer').show();
    } else {
        if ($(window).scrollTop() + $(window).height() < $(document).height())
            $('.footer').hide();
    }
}


$(document).click(function() {
    fixheight();
});

$( document ).ready(function() {
     if (new String(window.location).indexOf("signin.html") == -1 && new String(window.location).indexOf("subscriptions.html") == -1 && new String(window.location).indexOf("payments.html") == -1 && new String(window.location).indexOf("orders.html") == -1 && new String(window.location).indexOf("create.html") == -1 && new String(window.location).indexOf("accounts.html") == -1  && new String(window.location).indexOf("register.html") == -1) {
        initial();
    }
    fixheight();
});
/*window.onload = function() {
	//dont run if it is sign in page
    if (new String(window.location).indexOf("signin.html") == -1 && new String(window.location).indexOf("subscriptions.html") == -1 && new String(window.location).indexOf("payments.html") == -1 && new String(window.location).indexOf("orders.html") == -1 && new String(window.location).indexOf("create.html") == -1 && new String(window.location).indexOf("accounts.html") == -1) {
        initial();
    }
	
    fixheight();
}*/
$(window).resize(function() {
    fixheight();
});


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function showmodal(modalid) {
    $('#' + modalid).modal('show');
}

function hidemodal(modalid) {
    $('#' + modalid).modal('hide');
}

function initial() {
	if(new String(window.location).indexOf("payments")>0)
	return;

    if ($("#mobilemode").css("display") == "" || $("#mobilemode").css("display") == "block") {
        //$("#order_summary").hide();
    } else {


        $(".summarybuttons").show();


        if (new String(window.location).indexOf("pr.html") > 0 || new String(window.location).indexOf("ad.html") >0 || new String(window.location).indexOf("re.html") >0 || new String(window.location).indexOf("up.html") >0 || new String(window.location).indexOf("bo.html")>0 || new String(window.location).indexOf("gifts.html")>0) {
			$(".summarybuttonsall").show();
            $("#order_summary").removeClass("order_summary_nodisplay").addClass("order_summary");
        }
		else if (new String(window.location).indexOf("to.html") > 0 || new String(window.location).indexOf("wallet.html") > 0) {
			$(".summarybuttonsall_2").hide();
            $("#order_summary").removeClass("order_summary").addClass("order_summary_nodisplay");
        } 		
		else {
			//for users page
			
			if(d==0)
			{
			$(".summarybuttonsall").hide();
			$("#order_summary").removeClass("order_summary").addClass("order_summary_nodisplay");
			}
		
            /*if (d > 0) {
                $("#order_summary").show();
            } else if (d == 10) {
                $("#order_summary").hide();
            }*/
        }
    }
}

function footer_mobiletab() {
	
	html="<div class='fixed-bottom row' id='footer-area'>";
	html+="<div class=container>";
	
		/*if(new String(window.location).indexOf("pr.html")>0 || new String(window.location).indexOf("ad.html")>0 || new String(window.location).indexOf("re.html")>0)
		{
		html+="<div class='row no-pad'>";
		html+="				<div class='col-12 col-sm-12 col-md-12 col-lg-12'>";
		html+="					<div class='curved_buttons_left' onclick=goback()>Back</div>";
		html+="					<div class='curved_buttons_right' onclick=gonext()>Next</div>";
		html+="					<div id='btnfooterconfirm' class='curved_buttons_confirm_footer curved_buttons_right' onclick=gonext() style='display:none;float:inherit'>Confirm Order</div>";
		html+="				</div>";
		html+="</div>";
		}*/
	
		html+= "<div class='row no-pad footers_pr'>";
		
		html += "                    <div class='col-3 text-center'>";
		
		if(new String(window.location).indexOf("subscriptions")>0)
		html += "						<img src='subscription_on.png'>";
		else
		html += "						<img src='subscription.png' onclick=window.location='subscriptions.html'>";
		
		html += "						<div class='text-center mobiletabmenutext'>Subscriptions</div>";
		html += "					</div>";
		html += "                    <div class='col-3 text-center'>";
		
		if(new String(window.location).indexOf("orders")>0)
			html += "						<img src='order_on.png'>";
		else
			html += "						<img src='order.png' onclick=window.location='orders.html'>";
		
		html += "						<div class='text-center mobiletabmenutext'>Orders</div>";
		html += "					</div>";
		html += "                    <div class='col-3 text-center'>";
		if(new String(window.location).indexOf("payment")>0)
			html += "						<img src='payment_on.png'>";
		else
			html += "						<img src='payment.png' onclick=window.location='payments.html'>";
		html += "						<div class='text-center mobiletabmenutext'>Payment</div>";
		html += "					</div>";
		html += "                    <div class='col-3 text-center'>";
		if(new String(window.location).indexOf("account")>0)
			html += "						<img src='account_on.png'>";
		else
				html += "						<img src='account.png' onclick=window.location='accounts.html'>";
		html += "						<div class='text-center mobiletabmenutext'>Account</div>";
		html += "					</div>";
		html += "                </div>";
	html+="</div>";
	html+="</div>";
    document.write(html);
}

	function selects(object)
			{
				for(i=0;i<=$(object).closest("tbody").find("tr").length-1;i++)
				{	
					var mytr=$(object).closest("tbody").find("tr")[i].children[1].innerHTML='';
					
				}
				object.children[1].innerHTML="<i class='fas fa-check'>";
			}
			
			
			
			
 //when dropdown arrrow is clicked in mobile mode
    function shows(obj) {
		
		event.stopPropagation();

        //for promotions pages and all other pages 
        if ($(obj).closest(".oneitem").attr("status") == "collapsed") {
			
			if($(obj).closest(".oneitem").attr("chosen") == "true")
			{
				$(obj).closest(".locate").find(".mobileshow").show();
				$(obj).closest(".oneitem").attr("status", "expanded");
				$(obj).closest(".locate").removeClass("middle_collapsed").addClass("middle_expanded",200);
				$(obj).removeClass("fa-chevron-down").addClass("fa-chevron-up");
			}
			else
			{
			
			$(obj).closest(".locate").find(".mobileshow").show();
			$(obj).closest(".oneitem").attr("status", "expanded");
			$(obj).closest(".locate").removeClass("middle_collapsed").addClass("middle_expanded",200);
            $(obj).removeClass("fa-chevron-down").addClass("fa-chevron-up");
			}
        } else {

			$(obj).closest(".oneitem").attr("status", "collapsed");
			//$(obj).closest(".locate").find(".collapsible").hide();
			$(obj).closest(".locate").find(".expandable").show();
			$(obj).closest(".locate").find(".mobileshow").hide();
			$(obj).closest(".locate").removeClass("middle_expanded").addClass("middle_collapsed",200);
            $(obj).removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
        return;
    }

	
	function selectfrommobile(obj) {
		//dont allow to click if it is not mobile
		
		if(!ismobile())
		return;
	
	    if ($(obj).closest(".oneitem").attr("ignoreselect") != "true") {
			if($(obj).closest(".oneitem").attr("chosen")=="true")
			{
				//for promotions
				$(obj).closest(".oneitem").removeAttr("chosen");
				$(obj).closest(".oneitem").find(".select").html("Select")
				
				if($(obj).closest(".oneitem").attr("payment")=="true" && $(obj).closest(".oneitem").attr("id")=="card1"  )
				$("#visa_master_content").hide("fast");

			
				$(obj).closest(".locate").switchClass("middle_selected","middle",0,"linear",function(){});
			}
			else
			{

				$(obj).closest(".oneitem").attr("chosen","true");
				$(obj).closest(".middle").find(".mobileshow").hide();
				
				if($(obj).closest(".oneitem").attr("payment")!="true")
				$(obj).closest(".middle").find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
				
				if($(obj).closest(".oneitem").attr("payment")=="true"  && $(obj).closest(".oneitem").attr("id")=="card1" )
				$("#visa_master_content").show("fast");
			
				$(obj).closest(".oneitem").find(".select").html("&#10003")
				$(obj).closest(".locate").switchClass("middle","middle_selected",0,"linear",function(){});
				$(obj).closest(".locate").removeClass("middle_expanded");
				$(obj).closest(".oneitem").attr("status", "collapsed");

			}
        }
    }	

	

	 function resizecode() {
		//initial();
        //showhideelements(d);
    }
	
	
	function expand(item,object)
 {
	
	if($("#"+item).css("display")=="none")
	{
		$("#"+item).fadeIn("fast");
		$(object).removeClass("fa-chevron-down").addClass("fa-chevron-up");
	}
	else
	{
		$("#"+item).fadeOut("fast");
		$(object).removeClass("fa-chevron-up").addClass("fa-chevron-down");
	}
 }
 
 function ismobile()
 {
	 if ($(window).width() < 768) 
		 return true;
	 else
		 return false;
		 
 }
 
 
 
 //if the select button on desktop mode was clicked , this is also being autoclicked when the user selects an item in mobile mode
        