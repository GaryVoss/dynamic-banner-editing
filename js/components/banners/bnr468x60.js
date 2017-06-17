var logoAssetSrc468x60 = '468x60/logos/havBnr17-468x60-';
var logoUrlSrc468x60 = 'https://s0.2mdn.net/creatives/assets/2054059/havBnr17-468x60-';
var overlayAssetSrc468x60 = '468x60/overlays/havBnr17-468x60-';
var overlayUrlSrc468x60 = 'https://s0.2mdn.net/creatives/assets/2047637/havBnr17-468x60-';

var bnrInput468x60 = {};
bnrInput468x60= [{}];
bnrInput468x60[0].bgColor = "#F1B434";
bnrInput468x60[0].messageTxtColor = "#ffffff";
bnrInput468x60[0].roundelColor = "#ffffff";
bnrInput468x60[0].roundelTxtColor = "#719949";
bnrInput468x60[0].btn1Color = "#ffffff";
bnrInput468x60[0].btn1TxtColor = "#719949";
bnrInput468x60[0].btn2Color = "#719949";
bnrInput468x60[0].btn2TxtColor = "#ffffff";
bnrInput468x60[0].logo = "havenWhiteLogo";
bnrInput468x60[0].overlay = "circles";
bnrInput468x60[0].extraFrame = false;
bnrInput468x60[0].message1Txt = '<p class="font-gd font-25">Get ready</p><p class="font-14">for your 2017 holiday</p>';
bnrInput468x60[0].messageExtraTxt = '<p class="font-gd font-30">Extra frame</p>';
bnrInput468x60[0].roundelTxt = '<p class="font-gd font-25">Spring breaks</p><p class="font-14">from only <span class="font-bold font-18">£79</span> for the whole family</p>';
bnrInput468x60[0].btn1Txt = "View offers >";
bnrInput468x60[0].btn2Txt = "View offers >";
bnrInput468x60[0].exitUrl = "https://www.haven.com/";

var bnrBuild468x60 = '<div id="bnrWrapper-468x60"><div id="logo-468x60"></div><div id="innerWrap-468x60"><div id="btnWrap-468x60"><div id="btn1-468x60" class="btn-468x60"><p id="btn1Txt-468x60"></p></div><div id="btn2-468x60" class="btn-468x60"><p id="btn2Txt-468x60"></p></div></div><div id="overlay-468x60"></div><div id="fade1-468x60" class="fade"><div id="message1Wrap-468x60" class="messageWrap"><div id="message1-468x60" class="message"></div></div><div id="img1-468x60" class="img"></div></div><div id="fadeExtra-468x60" class="fade"><div id="messageExtraWrap-468x60" class="messageWrap"><div id="messageExtra-468x60" class="message"></div></div><div id="imgExtra-468x60" class="img"></div></div><div id="fade2-468x60" class="fade"><div id="message2Wrap-468x60" class="messageWrap"><div id="message2-468x60" class="message"></div></div><div id="img2-468x60" class="img"></div><div id="roundelWrap-468x60"><div id="roundelMessage-468x60"></div><svg version="1.1" id="roundel-468x60" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.9 67.2" xml:space="preserve"><path d="M70.6,27.9c0-0.3-0.1-0.5-0.2-0.8V27c-1.2-5.9-5.1-10.6-10.2-14.3c-0.9-1.2-1.8-2.3-2.9-3.4C46.9-1.3,30.8-2.8,18.7,4.6 c-5.5,1.2-10.4,3.8-14,8.2c-5.7,7.1-5.5,16.4-2.8,25c1.5,4.9,3.8,9.6,6.2,13.5c3.6,5.8,8.5,11.4,14.8,14.2c4,1.8,8.3,2,12.5,1.3 c1.5-0.2,3.1-0.5,4.7-1c13.7-4.1,29.8-18.1,30.8-33.2C70.9,31,70.8,29.4,70.6,27.9z M28.7,66.1c-5.5-1.1-10.2-4.6-13.9-8.7 C8.4,50.2,3,40.1,2,30c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.2-3,0.1-6,0.8-8.8c2-7.2,7-11.5,13.2-13.9c-1,0.8-2.1,1.7-3,2.6 C0.7,21.3,0.6,41.2,12.8,53.5s32.1,12.4,44.4,0.2C67.1,43.8,69.1,28.9,63,17c1.8,2,3.4,4.2,4.5,6.7c0.7,1.5,1.1,3.1,1.4,4.6 c1.9,12.7-8.8,24.4-18.5,31.2c-4.1,2.9-9,5.6-14.1,6.7C33.8,66.5,31.2,66.6,28.7,66.1z"/></svg></div></div></div></div>';
function build468x60() {
	$('.bnrWrap.bnr468x60').append(bnrBuild468x60);
}
build468x60();
function destroy468x60() {
	$('.bnrWrap.bnr468x60').empty();
}

var feed468x60 = bnrInput468x60[0];

$('select[name=logo-468x60]').val(feed468x60.logo);
$('select[name=overlay-468x60]').val(feed468x60.overlay);
$('input[name=bgColor-468x60]').val(feed468x60.bgColor);
$('input[name=bgColor-468x60]').parents('.pickerWrap').find('.swatch').css({background: feed468x60.bgColor});
$('input[name=messageTxtColor-468x60]').val(feed468x60.messageTxtColor);
$('input[name=messageTxtColor-468x60]').parents('.pickerWrap').find('.swatch').css({background: feed468x60.messageTxtColor});
$('input[name=roundelColor-468x60]').val(feed468x60.roundelColor);
$('input[name=roundelColor-468x60]').parents('.pickerWrap').find('.swatch').css({background: feed468x60.roundelColor});
$('input[name=roundelTxtColor-468x60]').val(feed468x60.roundelTxtColor);
$('input[name=roundelTxtColor-468x60]').parents('.pickerWrap').find('.swatch').css({background: feed468x60.roundelTxtColor});

$('input[name=btn1Color-468x60]').val(feed468x60.btn1Color);
$('input[name=btn1Color-468x60]').parents('.pickerWrap').find('.swatch').css({background: feed468x60.btn1Color});
$('input[name=btn1TxtColor-468x60]').val(feed468x60.btn1TxtColor);
$('input[name=btn1TxtColor-468x60]').parents('.pickerWrap').find('.swatch').css({background: feed468x60.btn1TxtColor});
$('input[name=btn2Color-468x60]').val(feed468x60.btn2Color);
$('input[name=btn2Color-468x60]').parents('.pickerWrap').find('.swatch').css({background: feed468x60.btn2Color});
$('input[name=btn2TxtColor-468x60]').val(feed468x60.btn2TxtColor);
$('input[name=btn2TxtColor-468x60]').parents('.pickerWrap').find('.swatch').css({background: feed468x60.btn2TxtColor});

$('input[name=message1Txt-468x60]').val(feed468x60.message1Txt);
$('input[name=messageExtraTxt-468x60]').val(feed468x60.messageExtraTxt);
$('input[name=roundelTxt-468x60]').val(feed468x60.roundelTxt);

$('input[name=btn1Txt-468x60]').val(feed468x60.btn1Txt);
$('input[name=btn2Txt-468x60]').val(feed468x60.btn2Txt);

$('input[name=exitUrl-468x60]').val(feed468x60.exitUrl);

function bgColor468x60() {
	$('#bnrWrapper-468x60').css({background:$('input[name=bgColor-468x60]').val()});
}

function messageTxtColor468x60() {
	$('#message1-468x60, #messageExtra-468x60').find('p').css({color:$('input[name=messageTxtColor-468x60]').val()});
}

function roundelColor468x60() {
	$('#roundel-468x60').css({fill:$('input[name=roundelColor-468x60]').val()});
	$('#img2-468x60').css({background:$('input[name=roundelColor-468x60]').val()});
}

function roundelTxtColor468x60() {
	$('#roundelMessage-468x60').find('p').css({color:$('input[name=roundelTxtColor-468x60]').val()});
}

function logo468x60() {
	for (var i = 0; i < whichLogo.length; i++ ) {
		if($('select[name=logo-468x60]').val() === whichLogo[i]) {
			$('#logo-468x60').css({background:'url("'+logoUrlSrc468x60+whichLogo[i]+'.svg") no-repeat'});
		}
	}	
}

function overlay468x60() {
	for (var i = 0; i < whichOverlay.length; i++ ) {
		if($('select[name=overlay-468x60]').val() === whichOverlay[i]) {
			$('#overlay-468x60').css({background:'url("'+overlayUrlSrc468x60+whichOverlay[i]+'.svg") no-repeat'});
		}	
	}
}

function btn1Color468x60() {
	$('#btn1Txt-468x60').css({background:$('input[name=btn1Color-468x60]').val()});
}
function btn1TxtColor468x60() {
	$('#btn1Txt-468x60').css({color:$('input[name=btn1TxtColor-468x60]').val()});
}
function btn2Color468x60() {
	$('#btn2Txt-468x60').css({background:$('input[name=btn2Color-468x60]').val()});
}
function btn2TxtColor468x60() {
	$('#btn2Txt-468x60').css({color:$('input[name=btn2TxtColor-468x60]').val()});
}

function message1Txt468x60() {
	$('#message1-468x60').html($('input[name=message1Txt-468x60]').val());
}
function messageExtraTxt468x60() {
	$('#messageExtra-468x60').html($('input[name=messageExtraTxt-468x60]').val());
}
function roundelTxt468x60() {
	$('#roundelMessage-468x60').html($('input[name=roundelTxt-468x60]').val());
}

function btn1Txt468x60() {
	$('#btn1Txt-468x60').html($('input[name=btn1Txt-468x60]').val());
}
function btn2Txt468x60() {
	$('#btn2Txt-468x60').html($('input[name=btn2Txt-468x60]').val());
}

function init468x60Content() {	
	document.getElementById('bnrWrapper-468x60').style.display = "block";
	bgColor468x60();
	roundelColor468x60();
			
	logo468x60();
	overlay468x60();
	btn1Color468x60();		
	btn1TxtColor468x60();
	btn2Color468x60();		
	btn2TxtColor468x60();
	
	message1Txt468x60();
	messageExtraTxt468x60();
	roundelTxt468x60();
	
	btn1Txt468x60();
	btn2Txt468x60();
	
	messageTxtColor468x60();
	roundelTxtColor468x60();			
}
init468x60Content();

// animation start
var transition468x60 = 1000;
var btnTransition468x60 = 0;
var onScreen468x60 = 3000;
var frameLag468x60 = 500;
var frameDuration468x60 = transition468x60 + onScreen468x60 + frameLag468x60;
var easeIn468x60 = "easeInOutQuad";
var easeOut468x60 = "easeInOutQuad";
var runTime468x60;

function init468x60() {
	runTime468x60 = 0;
	
	$('#logo-468x60').velocity({left: 0}, {easing: easeIn468x60, duration: transition468x60, delay: 0});
	
	$('#btnWrap-468x60').velocity({right: 0}, {easing: easeIn468x60, duration: transition468x60, delay: 0});
	runTime468x60 = runTime468x60 + transition468x60;
	
	$('#fade1-468x60').velocity({opacity: 1}, {easing: easeIn468x60, duration: transition468x60, delay: runTime468x60});
	$('#fade1-468x60').velocity({opacity: 0}, {easing: easeOut468x60, duration: (transition468x60/2), delay: onScreen468x60});
	
	runTime468x60 = runTime468x60 + frameDuration468x60;
	
	if(feed468x60.extraFrame === true) {
		$('#fadeExtra-468x60').velocity({opacity: 1}, {easing: easeIn468x60, duration: transition468x60, delay: runTime468x60});
		$('#fadeExtra-468x60').velocity({opacity: 0}, {easing: easeOut468x60, duration: (transition468x60/2), delay: onScreen468x60});
		
		runTime468x60 = runTime468x60 + frameDuration468x60;	
	}
	
	$('#fade2-468x60').velocity({opacity: 1}, {easing: easeIn468x60, duration: transition468x60, delay: runTime468x60});
	
	if(feed468x60.btn1Color === feed468x60.btn2Color) {
		btnTransition468x60 = 0;
	}
	else {
		btnTransition468x60 = transition468x60;
	}
	$('#btn1-468x60').velocity({opacity: 0}, {easing: easeOut468x60, duration: (transition468x60/2), delay: runTime468x60});
	$('#btn2-468x60').velocity({opacity: 1}, {easing: easeIn468x60, duration: transition468x60, delay: runTime468x60});

	runTime468x60 = runTime468x60 + transition468x60;	
}
init468x60();

function initframe1468x60() {
	$('#logo-468x60').css({left: 0});
	$('#btnWrap-468x60').css({right: 0});
	$('#fade1-468x60').css({opacity: 1});
}
function initframeExtra468x60() {
	$('#logo-468x60').css({left: 0});
	$('#btnWrap-468x60').css({right: 0});
	$('#fadeExtra-468x60').css({opacity: 1});
}
function initframe2468x60() {
	$('#logo-468x60').css({left: 0});
	$('#btnWrap-468x60').css({right: 0});
	$('#fade2-468x60').css({opacity: 1});
	$('#btn1-468x60').css({opacity: 0});
	$('#btn2-468x60').css({opacity: 1});
}
function reset468x60() {
	destroy468x60();
	build468x60();
}

function extraFrameTrue468x60() {
	$('.frame3-468x60').show();
	$('.extraField-468x60').show();
	positionSliders();
	feed468x60.extraFrame = true;
}
function extraFrameFalse468x60() {
	$('.frame3-468x60').hide();
	$('.extraField-468x60').hide();
	feed468x60.extraFrame = false;
}

function checkExtraFrame468x60() {
	if ($('.extraFrameCheck-468x60 input[class=true]').is(':checked')){
		extraFrameTrue468x60();
	}
	else {
		extraFrameFalse468x60();
	}
}
checkExtraFrame468x60();

$('.replay-468x60').click(function(){
	btnDeselect($(this));
	reset468x60();
	init468x60Content();
	init468x60();
});
$('.frame1-468x60').click(function(){
	btnSelect($(this));
	reset468x60();
	init468x60Content();
	initframe1468x60();
});
$('.frame2-468x60').click(function(){
	btnSelect($(this));
	if(feed468x60.extraFrame === true) {
		reset468x60();
		init468x60Content();
		initframeExtra468x60();
	}
	else {
		reset468x60();
		init468x60Content();
		initframe2468x60();
	}	
});
$('.frame3-468x60').click(function(){
	btnSelect($(this));
	reset468x60();
	init468x60Content();
	initframe2468x60();
});

$('.extraFrameCheck-468x60').click(function() {
	checkExtraFrame468x60();
	$('.replay-468x60')[0].click();
});

$('select[name="logo-468x60"]').on('change', function() {
	logo468x60();
});
$('select[name="overlay-468x60"]').on('change', function() {
	overlay468x60();
});
$('input[name=bgColor-468x60]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		bgColorMirror($(this));
	}
	else {
		bgColor468x60();
	}
});
$('input[name=roundelColor-468x60]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelColorMirror($(this));
	}
	else {
		roundelColor468x60();
	}
});
$('input[name=messageTxtColor-468x60]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		messageTxtColorMirror($(this));
	}
	else {
		messageTxtColor468x60();
	}
});
$('input[name=roundelTxtColor-468x60]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelTxtColorMirror($(this));
	}
	else {
		roundelTxtColor468x60();
	}
});
$('input[name=btn1Color-468x60]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1ColorMirror($(this));
	}
	else {
		btn1Color468x60();
	}
});
$('input[name=btn1TxtColor-468x60]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1TxtColorMirror($(this));
	}
	else {
		btn1TxtColor468x60();
	}
});
$('input[name=btn2Color-468x60]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2ColorMirror($(this));
	}
	else {
		btn2Color468x60();
	}
});
$('input[name=btn2TxtColor-468x60]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2TxtColorMirror($(this));
	}
	else {
		btn2TxtColor468x60();
	}
});
$('input[name=message1Txt-468x60]').keyup(function() {
	message1Txt468x60();
	messageTxtColor468x60();
});
$('input[name=messageExtraTxt-468x60]').keyup(function() {
	messageExtraTxt468x60();
	messageTxtColor468x60();
});
$('input[name=roundelTxt-468x60]').keyup(function() {
	roundelTxt468x60();
	roundelTxtColor468x60();
});
$('input[name=btn1Txt-468x60]').keyup(function() {
	btn1Txt468x60();
});
$('input[name=btn2Txt-468x60]').keyup(function() {
	btn2Txt468x60();
});	

function postContactToGoogle468x60() {
	var logoVal468x60 = logoAssetSrc468x60+$('select[name=logo-468x60]').val()+'.svg';
	var overlayVal468x60 = overlayAssetSrc468x60+$('select[name=overlay-468x60]').val()+'.svg';
	var bgColorVal468x60 = $('input[name=bgColor-468x60]').val();
	var btn1ColorVal468x60 = $('input[name=btn1Color-468x60]').val();
	var btn1TxtColorVal468x60 = $('input[name=btn1TxtColor-468x60]').val();
	var btn2ColorVal468x60 = $('input[name=btn1Color-468x60]').val();
	var btn2TxtColorVal468x60 = $('input[name=btn1TxtColor-468x60]').val();
	var mesTxtColorVal468x60 = $('input[name=messageTxtColor-468x60]').val();
	var roundelColorVal468x60 = $('input[name=roundelColor-468x60]').val();
	var roundelTxtColorVal468x60 = $('input[name=roundelTxtColor-468x60]').val();
	var mes1TxtVal468x60 = $('input[name=message1Txt-468x60]').val();
	var mes2TxtVal468x60 = 'N/A';
	var roundelTxtVal468x60 = $('input[name=roundelTxt-468x60]').val();
	var img1Val468x60 = 'N/A';
	var img2Val468x60 = 'N/A';
	var btn1TxtVal468x60 = $('input[name=btn1Txt-468x60]').val();
	var btn2TxtVal468x60 = $('input[name=btn2Txt-468x60]').val();
	var exitUrlVal468x60 = $('input[name=exitUrl-468x60]').val();
	var mesExtraTxtVal468x60;
	var imgExtraVal468x60 = 'N/A';
	if(feed468x60.extraFrame === true) {
		mesExtraTxtVal468x60 = $('input[name=messageExtraTxt-468x60]').val();
	}
	else {
		mesExtraTxtVal468x60 = 'N/A';
	}

	$.ajax({
// 		url:"https://docs.google.com/forms/d/e/1FAIpQLSfaQgXBbMcoRMP4ZGHCMgc98mDQr5zbJyKQpW490YleeCgOMw/formResponse",
		data:{
			"entry_57793852":logoVal468x60,
			"entry_710629118":overlayVal468x60,
			"entry_1056887831":bgColorVal468x60,
			"entry_1970663478":btn1ColorVal468x60,
			"entry_1439940585":btn1TxtColorVal468x60,
			"entry_2083868184":btn2ColorVal468x60,
			"entry_1585123416":btn2TxtColorVal468x60,
			"entry_243732690":mesTxtColorVal468x60,
			"entry_1029643130":roundelColorVal468x60,
			"entry_2062109151":roundelTxtColorVal468x60,
			"entry_791765641":feed468x60.extraFrame,
			"entry_210126843":mes1TxtVal468x60,
			"entry_28722010":mesExtraTxtVal468x60,
			"entry_1158727021":mes2TxtVal468x60,
			"entry_519432673":roundelTxtVal468x60,
			"entry_302277476":img1Val468x60,
			"entry_1877115306":imgExtraVal468x60,
			"entry_1881036811":img2Val468x60,
			"entry_534078953":btn1TxtVal468x60,
			"entry_843299888":btn2TxtVal468x60,
			"entry_312657314":exitUrlVal468x60,
		},
		type:"POST",
		dataType:"xml",
		statusCode: {}
	});
}

$('#pageWrap').on('click', '.submit-468x60', function(){
	postContactToGoogle468x60();
});