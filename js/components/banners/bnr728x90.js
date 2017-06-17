var logoAssetSrc728x90 = '728x90/logos/havBnr17-728x90-';
var logoUrlSrc728x90 = 'https://s0.2mdn.net/creatives/assets/2047661/havBnr17-728x90-';
var overlayAssetSrc728x90 = '728x90/overlays/havBnr17-728x90-';
var overlayUrlSrc728x90 = 'https://s0.2mdn.net/creatives/assets/2047664/havBnr17-728x90-';

var bnrInput728x90 = {};
bnrInput728x90= [{}];
bnrInput728x90[0].bgColor = "#F1B434";
bnrInput728x90[0].messageTxtColor = "#ffffff";
bnrInput728x90[0].roundelColor = "#ffffff";
bnrInput728x90[0].roundelTxtColor = "#719949";
bnrInput728x90[0].btn1Color = "#ffffff";
bnrInput728x90[0].btn1TxtColor = "#719949";
bnrInput728x90[0].btn2Color = "#719949";
bnrInput728x90[0].btn2TxtColor = "#ffffff";
bnrInput728x90[0].logo = "havenWhiteLogo";
bnrInput728x90[0].overlay = "circles";
bnrInput728x90[0].extraFrame = false;
bnrInput728x90[0].message1Txt = '<p class="font-gd font-40">Get ready</p><p class="font-25">for your 2017 holiday</p>';
bnrInput728x90[0].messageExtraTxt = '<p class="font-gd font-50">Extra frame</p>';
bnrInput728x90[0].roundelTxt = '<p class="font-gd font-40">Spring breaks</p><p class="font-20">from only <span class="font-bold font-30">£79</span> for the whole family</p>';
bnrInput728x90[0].btn1Txt = "View offers >";
bnrInput728x90[0].btn2Txt = "View offers >";
bnrInput728x90[0].exitUrl = "https://www.haven.com/";

var bnrBuild728x90 = '<div id="bnrWrapper-728x90"><div id="logo-728x90"></div><div id="innerWrap-728x90"><div id="btnWrap-728x90"><div id="btn1-728x90" class="btn-728x90"><p id="btn1Txt-728x90"></p></div><div id="btn2-728x90" class="btn-728x90"><p id="btn2Txt-728x90"></p></div></div><div id="overlay-728x90"></div><div id="fade1-728x90" class="fade"><div id="message1Wrap-728x90" class="messageWrap"><div id="message1-728x90" class="message"></div></div><div id="img1-728x90" class="img"></div></div><div id="fadeExtra-728x90" class="fade"><div id="messageExtraWrap-728x90" class="messageWrap"><div id="messageExtra-728x90" class="message"></div></div><div id="imgExtra-728x90" class="img"></div></div><div id="fade2-728x90" class="fade"><div id="message2Wrap-728x90" class="messageWrap"><div id="message2-728x90" class="message"></div></div><div id="img2-728x90" class="img"></div><div id="roundelWrap-728x90"><div id="roundelMessage-728x90"></div><svg version="1.1" id="roundel-728x90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.9 67.2" xml:space="preserve"><path d="M70.6,27.9c0-0.3-0.1-0.5-0.2-0.8V27c-1.2-5.9-5.1-10.6-10.2-14.3c-0.9-1.2-1.8-2.3-2.9-3.4C46.9-1.3,30.8-2.8,18.7,4.6 c-5.5,1.2-10.4,3.8-14,8.2c-5.7,7.1-5.5,16.4-2.8,25c1.5,4.9,3.8,9.6,6.2,13.5c3.6,5.8,8.5,11.4,14.8,14.2c4,1.8,8.3,2,12.5,1.3 c1.5-0.2,3.1-0.5,4.7-1c13.7-4.1,29.8-18.1,30.8-33.2C70.9,31,70.8,29.4,70.6,27.9z M28.7,66.1c-5.5-1.1-10.2-4.6-13.9-8.7 C8.4,50.2,3,40.1,2,30c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.2-3,0.1-6,0.8-8.8c2-7.2,7-11.5,13.2-13.9c-1,0.8-2.1,1.7-3,2.6 C0.7,21.3,0.6,41.2,12.8,53.5s32.1,12.4,44.4,0.2C67.1,43.8,69.1,28.9,63,17c1.8,2,3.4,4.2,4.5,6.7c0.7,1.5,1.1,3.1,1.4,4.6 c1.9,12.7-8.8,24.4-18.5,31.2c-4.1,2.9-9,5.6-14.1,6.7C33.8,66.5,31.2,66.6,28.7,66.1z"/></svg></div></div></div></div>';
function build728x90() {
	$('.bnrWrap.bnr728x90').append(bnrBuild728x90);
}
build728x90();
function destroy728x90() {
	$('.bnrWrap.bnr728x90').empty();
}

var feed728x90 = bnrInput728x90[0];

$('select[name=logo-728x90]').val(feed728x90.logo);
$('select[name=overlay-728x90]').val(feed728x90.overlay);
$('input[name=bgColor-728x90]').val(feed728x90.bgColor);
$('input[name=bgColor-728x90]').parents('.pickerWrap').find('.swatch').css({background: feed728x90.bgColor});
$('input[name=messageTxtColor-728x90]').val(feed728x90.messageTxtColor);
$('input[name=messageTxtColor-728x90]').parents('.pickerWrap').find('.swatch').css({background: feed728x90.messageTxtColor});
$('input[name=roundelColor-728x90]').val(feed728x90.roundelColor);
$('input[name=roundelColor-728x90]').parents('.pickerWrap').find('.swatch').css({background: feed728x90.roundelColor});
$('input[name=roundelTxtColor-728x90]').val(feed728x90.roundelTxtColor);
$('input[name=roundelTxtColor-728x90]').parents('.pickerWrap').find('.swatch').css({background: feed728x90.roundelTxtColor});

$('input[name=btn1Color-728x90]').val(feed728x90.btn1Color);
$('input[name=btn1Color-728x90]').parents('.pickerWrap').find('.swatch').css({background: feed728x90.btn1Color});
$('input[name=btn1TxtColor-728x90]').val(feed728x90.btn1TxtColor);
$('input[name=btn1TxtColor-728x90]').parents('.pickerWrap').find('.swatch').css({background: feed728x90.btn1TxtColor});
$('input[name=btn2Color-728x90]').val(feed728x90.btn2Color);
$('input[name=btn2Color-728x90]').parents('.pickerWrap').find('.swatch').css({background: feed728x90.btn2Color});
$('input[name=btn2TxtColor-728x90]').val(feed728x90.btn2TxtColor);
$('input[name=btn2TxtColor-728x90]').parents('.pickerWrap').find('.swatch').css({background: feed728x90.btn2TxtColor});

$('input[name=message1Txt-728x90]').val(feed728x90.message1Txt);
$('input[name=messageExtraTxt-728x90]').val(feed728x90.messageExtraTxt);
$('input[name=roundelTxt-728x90]').val(feed728x90.roundelTxt);

$('input[name=btn1Txt-728x90]').val(feed728x90.btn1Txt);
$('input[name=btn2Txt-728x90]').val(feed728x90.btn2Txt);

$('input[name=exitUrl-728x90]').val(feed728x90.exitUrl);

function bgColor728x90() {
	$('#bnrWrapper-728x90').css({background:$('input[name=bgColor-728x90]').val()});
}

function messageTxtColor728x90() {
	$('#message1-728x90, #messageExtra-728x90').find('p').css({color:$('input[name=messageTxtColor-728x90]').val()});
}

function roundelColor728x90() {
	$('#roundel-728x90').css({fill:$('input[name=roundelColor-728x90]').val()});
	$('#img2-728x90').css({background:$('input[name=roundelColor-728x90]').val()});
}

function roundelTxtColor728x90() {
	$('#roundelMessage-728x90').find('p').css({color:$('input[name=roundelTxtColor-728x90]').val()});
}

function logo728x90() {
	for (var i = 0; i < whichLogo.length; i++ ) {
		if($('select[name=logo-728x90]').val() === whichLogo[i]) {
			$('#logo-728x90').css({background:'url("'+logoUrlSrc728x90+whichLogo[i]+'.svg") no-repeat'});
		}
	}	
}

function overlay728x90() {
	for (var i = 0; i < whichOverlay.length; i++ ) {
		if($('select[name=overlay-728x90]').val() === whichOverlay[i]) {
			$('#overlay-728x90').css({background:'url("'+overlayUrlSrc728x90+whichOverlay[i]+'.svg") no-repeat'});
		}	
	}
}

function btn1Color728x90() {
	$('#btn1Txt-728x90').css({background:$('input[name=btn1Color-728x90]').val()});
}
function btn1TxtColor728x90() {
	$('#btn1Txt-728x90').css({color:$('input[name=btn1TxtColor-728x90]').val()});
}
function btn2Color728x90() {
	$('#btn2Txt-728x90').css({background:$('input[name=btn2Color-728x90]').val()});
}
function btn2TxtColor728x90() {
	$('#btn2Txt-728x90').css({color:$('input[name=btn2TxtColor-728x90]').val()});
}

function message1Txt728x90() {
	$('#message1-728x90').html($('input[name=message1Txt-728x90]').val());
}
function messageExtraTxt728x90() {
	$('#messageExtra-728x90').html($('input[name=messageExtraTxt-728x90]').val());
}
function roundelTxt728x90() {
	$('#roundelMessage-728x90').html($('input[name=roundelTxt-728x90]').val());
}

function btn1Txt728x90() {
	$('#btn1Txt-728x90').html($('input[name=btn1Txt-728x90]').val());
}
function btn2Txt728x90() {
	$('#btn2Txt-728x90').html($('input[name=btn2Txt-728x90]').val());
}

function init728x90Content() {	
	document.getElementById('bnrWrapper-728x90').style.display = "block";
	bgColor728x90();
	roundelColor728x90();
			
	logo728x90();
	overlay728x90();
	btn1Color728x90();		
	btn1TxtColor728x90();
	btn2Color728x90();		
	btn2TxtColor728x90();
	
	message1Txt728x90();
	messageExtraTxt728x90();
	roundelTxt728x90();
	
	btn1Txt728x90();
	btn2Txt728x90();
	
	messageTxtColor728x90();
	roundelTxtColor728x90();			
}
init728x90Content();

// animation start
var transition728x90 = 1000;
var btnTransition728x90 = 0;
var onScreen728x90 = 3000;
var frameLag728x90 = 500;
var frameDuration728x90 = transition728x90 + onScreen728x90 + frameLag728x90;
var easeIn728x90 = "easeInOutQuad";
var easeOut728x90 = "easeInOutQuad";
var runTime728x90;

function init728x90() {
	runTime728x90 = 0;
	
	$('#logo-728x90').velocity({left: 0}, {easing: easeIn728x90, duration: transition728x90, delay: 0});
	
	$('#btnWrap-728x90').velocity({right: 0}, {easing: easeIn728x90, duration: transition728x90, delay: 0});
	runTime728x90 = runTime728x90 + transition728x90;
	
	$('#fade1-728x90').velocity({opacity: 1}, {easing: easeIn728x90, duration: transition728x90, delay: runTime728x90});
	$('#fade1-728x90').velocity({opacity: 0}, {easing: easeOut728x90, duration: (transition728x90/2), delay: onScreen728x90});
	
	runTime728x90 = runTime728x90 + frameDuration728x90;
	
	if(feed728x90.extraFrame === true) {
		$('#fadeExtra-728x90').velocity({opacity: 1}, {easing: easeIn728x90, duration: transition728x90, delay: runTime728x90});
		$('#fadeExtra-728x90').velocity({opacity: 0}, {easing: easeOut728x90, duration: (transition728x90/2), delay: onScreen728x90});
		
		runTime728x90 = runTime728x90 + frameDuration728x90;	
	}
	
	$('#fade2-728x90').velocity({opacity: 1}, {easing: easeIn728x90, duration: transition728x90, delay: runTime728x90});
	
	if(feed728x90.btn1Color === feed728x90.btn2Color) {
		btnTransition728x90 = 0;
	}
	else {
		btnTransition728x90 = transition728x90;
	}
	$('#btn1-728x90').velocity({opacity: 0}, {easing: easeOut728x90, duration: (transition728x90/2), delay: runTime728x90});
	$('#btn2-728x90').velocity({opacity: 1}, {easing: easeIn728x90, duration: transition728x90, delay: runTime728x90});

	runTime728x90 = runTime728x90 + transition728x90;	
}
init728x90();

function initframe1728x90() {
	$('#logo-728x90').css({left: 0});
	$('#btnWrap-728x90').css({right: 0});
	$('#fade1-728x90').css({opacity: 1});
}
function initframeExtra728x90() {
	$('#logo-728x90').css({left: 0});
	$('#btnWrap-728x90').css({right: 0});
	$('#fadeExtra-728x90').css({opacity: 1});
}
function initframe2728x90() {
	$('#logo-728x90').css({left: 0});
	$('#btnWrap-728x90').css({right: 0});
	$('#fade2-728x90').css({opacity: 1});
	$('#btn1-728x90').css({opacity: 0});
	$('#btn2-728x90').css({opacity: 1});
}
function reset728x90() {
	destroy728x90();
	build728x90();
}

function extraFrameTrue728x90() {
	$('.frame3-728x90').show();
	$('.extraField-728x90').show();
	positionSliders();
	feed728x90.extraFrame = true;
}
function extraFrameFalse728x90() {
	$('.frame3-728x90').hide();
	$('.extraField-728x90').hide();
	feed728x90.extraFrame = false;
}

function checkExtraFrame728x90() {
	if ($('.extraFrameCheck-728x90 input[class=true]').is(':checked')){
		extraFrameTrue728x90();
	}
	else {
		extraFrameFalse728x90();
	}
}
checkExtraFrame728x90();

$('.replay-728x90').click(function(){
	btnDeselect($(this));
	reset728x90();
	init728x90Content();
	init728x90();
});
$('.frame1-728x90').click(function(){
	btnSelect($(this));
	reset728x90();
	init728x90Content();
	initframe1728x90();
});
$('.frame2-728x90').click(function(){
	btnSelect($(this));
	if(feed728x90.extraFrame === true) {
		reset728x90();
		init728x90Content();
		initframeExtra728x90();
	}
	else {
		reset728x90();
		init728x90Content();
		initframe2728x90();
	}	
});
$('.frame3-728x90').click(function(){
	btnSelect($(this));
	reset728x90();
	init728x90Content();
	initframe2728x90();
});

$('.extraFrameCheck-728x90').click(function() {
	checkExtraFrame728x90();
	$('.replay-728x90')[0].click();
});

$('select[name="logo-728x90"]').on('change', function() {
	logo728x90();
});
$('select[name="overlay-728x90"]').on('change', function() {
	overlay728x90();
});
$('input[name=bgColor-728x90]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		bgColorMirror($(this));
	}
	else {
		bgColor728x90();
	}
});
$('input[name=roundelColor-728x90]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelColorMirror($(this));
	}
	else {
		roundelColor728x90();
	}
});
$('input[name=messageTxtColor-728x90]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		messageTxtColorMirror($(this));
	}
	else {
		messageTxtColor728x90();
	}
});
$('input[name=roundelTxtColor-728x90]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelTxtColorMirror($(this));
	}
	else {
		roundelTxtColor728x90();
	}
});
$('input[name=btn1Color-728x90]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1ColorMirror($(this));
	}
	else {
		btn1Color728x90();
	}
});
$('input[name=btn1TxtColor-728x90]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1TxtColorMirror($(this));
	}
	else {
		btn1TxtColor728x90();
	}
});
$('input[name=btn2Color-728x90]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2ColorMirror($(this));
	}
	else {
		btn2Color728x90();
	}
});
$('input[name=btn2TxtColor-728x90]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2TxtColorMirror($(this));
	}
	else {
		btn2TxtColor728x90();
	}
});
$('input[name=message1Txt-728x90]').keyup(function() {
	message1Txt728x90();
	messageTxtColor728x90();
});
$('input[name=messageExtraTxt-728x90]').keyup(function() {
	messageExtraTxt728x90();
	messageTxtColor728x90();
});
$('input[name=roundelTxt-728x90]').keyup(function() {
	roundelTxt728x90();
	roundelTxtColor728x90();
});
$('input[name=btn1Txt-728x90]').keyup(function() {
	btn1Txt728x90();
});
$('input[name=btn2Txt-728x90]').keyup(function() {
	btn2Txt728x90();
});	

function postContactToGoogle728x90() {
	var logoVal728x90 = logoAssetSrc728x90+$('select[name=logo-728x90]').val()+'.svg';
	var overlayVal728x90 = overlayAssetSrc728x90+$('select[name=overlay-728x90]').val()+'.svg';
	var bgColorVal728x90 = $('input[name=bgColor-728x90]').val();
	var btn1ColorVal728x90 = $('input[name=btn1Color-728x90]').val();
	var btn1TxtColorVal728x90 = $('input[name=btn1TxtColor-728x90]').val();
	var btn2ColorVal728x90 = $('input[name=btn1Color-728x90]').val();
	var btn2TxtColorVal728x90 = $('input[name=btn1TxtColor-728x90]').val();
	var mesTxtColorVal728x90 = $('input[name=messageTxtColor-728x90]').val();
	var roundelColorVal728x90 = $('input[name=roundelColor-728x90]').val();
	var roundelTxtColorVal728x90 = $('input[name=roundelTxtColor-728x90]').val();
	var mes1TxtVal728x90 = $('input[name=message1Txt-728x90]').val();
	var mes2TxtVal728x90 = 'N/A';
	var roundelTxtVal728x90 = $('input[name=roundelTxt-728x90]').val();
	var img1Val728x90 = 'N/A';
	var img2Val728x90 = 'N/A';
	var btn1TxtVal728x90 = $('input[name=btn1Txt-728x90]').val();
	var btn2TxtVal728x90 = $('input[name=btn2Txt-728x90]').val();
	var exitUrlVal728x90 = $('input[name=exitUrl-728x90]').val();
	var mesExtraTxtVal728x90;
	var imgExtraVal728x90 = 'N/A';
	if(feed728x90.extraFrame === true) {
		mesExtraTxtVal728x90 = $('input[name=messageExtraTxt-728x90]').val();
	}
	else {
		mesExtraTxtVal728x90 = 'N/A';
	}

	$.ajax({
// 		url:"https://docs.google.com/forms/d/e/1FAIpQLSeknZvfe-ximzca4loeNqfFoAUnUjyNAuctD3SOsE-5WT53ww/formResponse",
		data:{
			"entry_57793852":logoVal728x90,
			"entry_710629118":overlayVal728x90,
			"entry_1056887831":bgColorVal728x90,
			"entry_1970663478":btn1ColorVal728x90,
			"entry_1439940585":btn1TxtColorVal728x90,
			"entry_2083868184":btn2ColorVal728x90,
			"entry_1585123416":btn2TxtColorVal728x90,
			"entry_243732690":mesTxtColorVal728x90,
			"entry_1029643130":roundelColorVal728x90,
			"entry_2062109151":roundelTxtColorVal728x90,
			"entry_791765641":feed728x90.extraFrame,
			"entry_210126843":mes1TxtVal728x90,
			"entry_28722010":mesExtraTxtVal728x90,
			"entry_1158727021":mes2TxtVal728x90,
			"entry_519432673":roundelTxtVal728x90,
			"entry_302277476":img1Val728x90,
			"entry_1877115306":imgExtraVal728x90,
			"entry_1881036811":img2Val728x90,
			"entry_534078953":btn1TxtVal728x90,
			"entry_843299888":btn2TxtVal728x90,
			"entry_312657314":exitUrlVal728x90,
		},
		type:"POST",
		dataType:"xml",
		statusCode: {}
	});
}

$('#pageWrap').on('click', '.submit-728x90', function(){
	postContactToGoogle728x90();
});