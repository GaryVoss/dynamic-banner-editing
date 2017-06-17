var logoAssetSrc300x50 = '300x50/logos/havBnr17-300x50-';
var logoUrlSrc300x50 = 'https://s0.2mdn.net/creatives/assets/2053942/havBnr17-300x50-';
var overlayAssetSrc300x50 = '300x50/overlays/havBnr17-300x50-';
var overlayUrlSrc300x50 = 'https://s0.2mdn.net/creatives/assets/2047607/havBnr17-300x50-';

var bnrInput300x50 = {};
bnrInput300x50= [{}];
bnrInput300x50[0].bgColor = "#F1B434";
bnrInput300x50[0].messageTxtColor = "#ffffff";
bnrInput300x50[0].roundelColor = "#ffffff";
bnrInput300x50[0].roundelTxtColor = "#719949";
bnrInput300x50[0].btn1Color = "#ffffff";
bnrInput300x50[0].btn1TxtColor = "#719949";
bnrInput300x50[0].btn2Color = "#719949";
bnrInput300x50[0].btn2TxtColor = "#ffffff";
bnrInput300x50[0].logo = "havenWhiteLogo";
bnrInput300x50[0].overlay = "circles";
bnrInput300x50[0].extraFrame = false;
bnrInput300x50[0].message1Txt = '<p class="font-gd font-20">Get ready</p><p class="font-13">for your 2017 holiday</p>';
bnrInput300x50[0].messageExtraTxt = '<p class="font-gd font-20">Extra frame</p>';
bnrInput300x50[0].roundelTxt = '<p class="font-gd font-17">Spring breaks</p><p class="font-10">from only <span class="font-bold font-13">£79</span></p><p class="font-10">for the whole family</p>';
bnrInput300x50[0].btn1Txt = "View offers >";
bnrInput300x50[0].btn2Txt = "View offers >";
bnrInput300x50[0].exitUrl = "https://www.haven.com/";

var bnrBuild300x50 = '<div id="bnrWrapper-300x50"><div id="logo-300x50"></div><div id="innerWrap-300x50"><div id="btnWrap-300x50"><div id="btn1-300x50" class="btn-300x50"><p id="btn1Txt-300x50"></p></div><div id="btn2-300x50" class="btn-300x50"><p id="btn2Txt-300x50"></p></div></div><div id="overlay-300x50"></div><div id="fade1-300x50" class="fade"><div id="message1Wrap-300x50" class="messageWrap"><div id="message1-300x50" class="message"></div></div><div id="img1-300x50" class="img"></div></div><div id="fadeExtra-300x50" class="fade"><div id="messageExtraWrap-300x50" class="messageWrap"><div id="messageExtra-300x50" class="message"></div></div><div id="imgExtra-300x50" class="img"></div></div><div id="fade2-300x50" class="fade"><div id="message2Wrap-300x50" class="messageWrap"><div id="message2-300x50" class="message"></div></div><div id="img2-300x50" class="img"></div><div id="roundelWrap-300x50"><div id="roundelMessage-300x50"></div><svg version="1.1" id="roundel-300x50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.9 67.2" xml:space="preserve"><path d="M70.6,27.9c0-0.3-0.1-0.5-0.2-0.8V27c-1.2-5.9-5.1-10.6-10.2-14.3c-0.9-1.2-1.8-2.3-2.9-3.4C46.9-1.3,30.8-2.8,18.7,4.6 c-5.5,1.2-10.4,3.8-14,8.2c-5.7,7.1-5.5,16.4-2.8,25c1.5,4.9,3.8,9.6,6.2,13.5c3.6,5.8,8.5,11.4,14.8,14.2c4,1.8,8.3,2,12.5,1.3 c1.5-0.2,3.1-0.5,4.7-1c13.7-4.1,29.8-18.1,30.8-33.2C70.9,31,70.8,29.4,70.6,27.9z M28.7,66.1c-5.5-1.1-10.2-4.6-13.9-8.7 C8.4,50.2,3,40.1,2,30c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.2-3,0.1-6,0.8-8.8c2-7.2,7-11.5,13.2-13.9c-1,0.8-2.1,1.7-3,2.6 C0.7,21.3,0.6,41.2,12.8,53.5s32.1,12.4,44.4,0.2C67.1,43.8,69.1,28.9,63,17c1.8,2,3.4,4.2,4.5,6.7c0.7,1.5,1.1,3.1,1.4,4.6 c1.9,12.7-8.8,24.4-18.5,31.2c-4.1,2.9-9,5.6-14.1,6.7C33.8,66.5,31.2,66.6,28.7,66.1z"/></svg></div></div></div></div>';
function build300x50() {
	$('.bnrWrap.bnr300x50').append(bnrBuild300x50);
}
build300x50();
function destroy300x50() {
	$('.bnrWrap.bnr300x50').empty();
}

var feed300x50 = bnrInput300x50[0];

$('select[name=logo-300x50]').val(feed300x50.logo);
$('select[name=overlay-300x50]').val(feed300x50.overlay);
$('input[name=bgColor-300x50]').val(feed300x50.bgColor);
$('input[name=bgColor-300x50]').parents('.pickerWrap').find('.swatch').css({background: feed300x50.bgColor});
$('input[name=messageTxtColor-300x50]').val(feed300x50.messageTxtColor);
$('input[name=messageTxtColor-300x50]').parents('.pickerWrap').find('.swatch').css({background: feed300x50.messageTxtColor});
$('input[name=roundelColor-300x50]').val(feed300x50.roundelColor);
$('input[name=roundelColor-300x50]').parents('.pickerWrap').find('.swatch').css({background: feed300x50.roundelColor});
$('input[name=roundelTxtColor-300x50]').val(feed300x50.roundelTxtColor);
$('input[name=roundelTxtColor-300x50]').parents('.pickerWrap').find('.swatch').css({background: feed300x50.roundelTxtColor});

$('input[name=btn1Color-300x50]').val(feed300x50.btn1Color);
$('input[name=btn1Color-300x50]').parents('.pickerWrap').find('.swatch').css({background: feed300x50.btn1Color});
$('input[name=btn1TxtColor-300x50]').val(feed300x50.btn1TxtColor);
$('input[name=btn1TxtColor-300x50]').parents('.pickerWrap').find('.swatch').css({background: feed300x50.btn1TxtColor});
$('input[name=btn2Color-300x50]').val(feed300x50.btn2Color);
$('input[name=btn2Color-300x50]').parents('.pickerWrap').find('.swatch').css({background: feed300x50.btn2Color});
$('input[name=btn2TxtColor-300x50]').val(feed300x50.btn2TxtColor);
$('input[name=btn2TxtColor-300x50]').parents('.pickerWrap').find('.swatch').css({background: feed300x50.btn2TxtColor});

$('input[name=message1Txt-300x50]').val(feed300x50.message1Txt);
$('input[name=messageExtraTxt-300x50]').val(feed300x50.messageExtraTxt);
$('input[name=roundelTxt-300x50]').val(feed300x50.roundelTxt);

$('input[name=btn1Txt-300x50]').val(feed300x50.btn1Txt);
$('input[name=btn2Txt-300x50]').val(feed300x50.btn2Txt);

$('input[name=exitUrl-300x50]').val(feed300x50.exitUrl);

function bgColor300x50() {
	$('#bnrWrapper-300x50').css({background:$('input[name=bgColor-300x50]').val()});
}

function messageTxtColor300x50() {
	$('#message1-300x50, #messageExtra-300x50').find('p').css({color:$('input[name=messageTxtColor-300x50]').val()});
}

function roundelColor300x50() {
	$('#roundel-300x50').css({fill:$('input[name=roundelColor-300x50]').val()});
	$('#img2-300x50').css({background:$('input[name=roundelColor-300x50]').val()});
}

function roundelTxtColor300x50() {
	$('#roundelMessage-300x50').find('p').css({color:$('input[name=roundelTxtColor-300x50]').val()});
}

function logo300x50() {
	for (var i = 0; i < whichLogo.length; i++ ) {
		if($('select[name=logo-300x50]').val() === whichLogo[i]) {
			$('#logo-300x50').css({background:'url("'+logoUrlSrc300x50+whichLogo[i]+'.svg") no-repeat'});
		}
	}	
}

function overlay300x50() {
	for (var i = 0; i < whichOverlay.length; i++ ) {
		if($('select[name=overlay-300x50]').val() === whichOverlay[i]) {
			$('#overlay-300x50').css({background:'url("'+overlayUrlSrc300x50+whichOverlay[i]+'.svg") no-repeat'});
		}	
	}
}

function btn1Color300x50() {
	$('#btn1Txt-300x50').css({background:$('input[name=btn1Color-300x50]').val()});
}
function btn1TxtColor300x50() {
	$('#btn1Txt-300x50').css({color:$('input[name=btn1TxtColor-300x50]').val()});
}
function btn2Color300x50() {
	$('#btn2Txt-300x50').css({background:$('input[name=btn2Color-300x50]').val()});
}
function btn2TxtColor300x50() {
	$('#btn2Txt-300x50').css({color:$('input[name=btn2TxtColor-300x50]').val()});
}

function message1Txt300x50() {
	$('#message1-300x50').html($('input[name=message1Txt-300x50]').val());
}
function messageExtraTxt300x50() {
	$('#messageExtra-300x50').html($('input[name=messageExtraTxt-300x50]').val());
}
function roundelTxt300x50() {
	$('#roundelMessage-300x50').html($('input[name=roundelTxt-300x50]').val());
}

function btn1Txt300x50() {
	$('#btn1Txt-300x50').html($('input[name=btn1Txt-300x50]').val());
}
function btn2Txt300x50() {
	$('#btn2Txt-300x50').html($('input[name=btn2Txt-300x50]').val());
}

function init300x50Content() {	
	document.getElementById('bnrWrapper-300x50').style.display = "block";
	bgColor300x50();
	roundelColor300x50();
			
	logo300x50();
	overlay300x50();
	btn1Color300x50();		
	btn1TxtColor300x50();
	btn2Color300x50();		
	btn2TxtColor300x50();
	
	message1Txt300x50();
	messageExtraTxt300x50();
	roundelTxt300x50();
	
	btn1Txt300x50();
	btn2Txt300x50();
	
	messageTxtColor300x50();
	roundelTxtColor300x50();			
}
init300x50Content();

// animation start
var transition300x50 = 1000;
var btnTransition300x50 = 0;
var onScreen300x50 = 3000;
var frameLag300x50 = 500;
var frameDuration300x50 = transition300x50 + onScreen300x50 + frameLag300x50;
var easeIn300x50 = "easeInOutQuad";
var easeOut300x50 = "easeInOutQuad";
var runTime300x50;

function init300x50() {
	runTime300x50 = 0;
	
	$('#logo-300x50').velocity({left: 0}, {easing: easeIn300x50, duration: transition300x50, delay: 0});
	
	$('#btnWrap-300x50').velocity({right: 0}, {easing: easeIn300x50, duration: transition300x50, delay: 0});
	runTime300x50 = runTime300x50 + transition300x50;
	
	$('#fade1-300x50').velocity({opacity: 1}, {easing: easeIn300x50, duration: transition300x50, delay: runTime300x50});
	$('#fade1-300x50').velocity({opacity: 0}, {easing: easeOut300x50, duration: (transition300x50/2), delay: onScreen300x50});
	
	runTime300x50 = runTime300x50 + frameDuration300x50;
	
	if(feed300x50.extraFrame === true) {
		$('#fadeExtra-300x50').velocity({opacity: 1}, {easing: easeIn300x50, duration: transition300x50, delay: runTime300x50});
		$('#fadeExtra-300x50').velocity({opacity: 0}, {easing: easeOut300x50, duration: (transition300x50/2), delay: onScreen300x50});
		
		runTime300x50 = runTime300x50 + frameDuration300x50;	
	}
	
	$('#fade2-300x50').velocity({opacity: 1}, {easing: easeIn300x50, duration: transition300x50, delay: runTime300x50});
	
	if(feed300x50.btn1Color === feed300x50.btn2Color) {
		btnTransition300x50 = 0;
	}
	else {
		btnTransition300x50 = transition300x50;
	}
	$('#btn1-300x50').velocity({opacity: 0}, {easing: easeOut300x50, duration: (transition300x50/2), delay: runTime300x50});
	$('#btn2-300x50').velocity({opacity: 1}, {easing: easeIn300x50, duration: transition300x50, delay: runTime300x50});

	runTime300x50 = runTime300x50 + transition300x50;	
}
init300x50();

function initframe1300x50() {
	$('#logo-300x50').css({left: 0});
	$('#btnWrap-300x50').css({right: 0});
	$('#fade1-300x50').css({opacity: 1});
}
function initframeExtra300x50() {
	$('#logo-300x50').css({left: 0});
	$('#btnWrap-300x50').css({right: 0});
	$('#fadeExtra-300x50').css({opacity: 1});
}
function initframe2300x50() {
	$('#logo-300x50').css({left: 0});
	$('#btnWrap-300x50').css({right: 0});
	$('#fade2-300x50').css({opacity: 1});
	$('#btn1-300x50').css({opacity: 0});
	$('#btn2-300x50').css({opacity: 1});
}
function reset300x50() {
	destroy300x50();
	build300x50();
}

function extraFrameTrue300x50() {
	$('.frame3-300x50').show();
	$('.extraField-300x50').show();
	positionSliders();
	feed300x50.extraFrame = true;
}
function extraFrameFalse300x50() {
	$('.frame3-300x50').hide();
	$('.extraField-300x50').hide();
	feed300x50.extraFrame = false;
}

function checkExtraFrame300x50() {
	if ($('.extraFrameCheck-300x50 input[class=true]').is(':checked')){
		extraFrameTrue300x50();
	}
	else {
		extraFrameFalse300x50();
	}
}
checkExtraFrame300x50();

$('.replay-300x50').click(function(){
	btnDeselect($(this));
	reset300x50();
	init300x50Content();
	init300x50();
});
$('.frame1-300x50').click(function(){
	btnSelect($(this));
	reset300x50();
	init300x50Content();
	initframe1300x50();
});
$('.frame2-300x50').click(function(){
	btnSelect($(this));
	if(feed300x50.extraFrame === true) {
		reset300x50();
		init300x50Content();
		initframeExtra300x50();
	}
	else {
		reset300x50();
		init300x50Content();
		initframe2300x50();
	}	
});
$('.frame3-300x50').click(function(){
	btnSelect($(this));
	reset300x50();
	init300x50Content();
	initframe2300x50();
});

$('.extraFrameCheck-300x50').click(function() {
	checkExtraFrame300x50();
	$('.replay-300x50')[0].click();
});

$('select[name="logo-300x50"]').on('change', function() {
	logo300x50();
});
$('select[name="overlay-300x50"]').on('change', function() {
	overlay300x50();
});
$('input[name=bgColor-300x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		bgColorMirror($(this));
	}
	else {
		bgColor300x50();
	}
});
$('input[name=roundelColor-300x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelColorMirror($(this));
	}
	else {
		roundelColor300x50();
	}
});
$('input[name=messageTxtColor-300x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		messageTxtColorMirror($(this));
	}
	else {
		messageTxtColor300x50();
	}
});
$('input[name=roundelTxtColor-300x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelTxtColorMirror($(this));
	}
	else {
		roundelTxtColor300x50();
	}
});
$('input[name=btn1Color-300x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1ColorMirror($(this));
	}
	else {
		btn1Color300x50();
	}
});
$('input[name=btn1TxtColor-300x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1TxtColorMirror($(this));
	}
	else {
		btn1TxtColor300x50();
	}
});
$('input[name=btn2Color-300x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2ColorMirror($(this));
	}
	else {
		btn2Color300x50();
	}
});
$('input[name=btn2TxtColor-300x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2TxtColorMirror($(this));
	}
	else {
		btn2TxtColor300x50();
	}
});
$('input[name=message1Txt-300x50]').keyup(function() {
	message1Txt300x50();
	messageTxtColor300x50();
});
$('input[name=messageExtraTxt-300x50]').keyup(function() {
	messageExtraTxt300x50();
	messageTxtColor300x50();
});
$('input[name=roundelTxt-300x50]').keyup(function() {
	roundelTxt300x50();
	roundelTxtColor300x50();
});
$('input[name=btn1Txt-300x50]').keyup(function() {
	btn1Txt300x50();
});
$('input[name=btn2Txt-300x50]').keyup(function() {
	btn2Txt300x50();
});	

function postContactToGoogle300x50() {
	var logoVal300x50 = logoAssetSrc300x50+$('select[name=logo-300x50]').val()+'.svg';
	var overlayVal300x50 = overlayAssetSrc300x50+$('select[name=overlay-300x50]').val()+'.svg';
	var bgColorVal300x50 = $('input[name=bgColor-300x50]').val();
	var btn1ColorVal300x50 = $('input[name=btn1Color-300x50]').val();
	var btn1TxtColorVal300x50 = $('input[name=btn1TxtColor-300x50]').val();
	var btn2ColorVal300x50 = $('input[name=btn1Color-300x50]').val();
	var btn2TxtColorVal300x50 = $('input[name=btn1TxtColor-300x50]').val();
	var mesTxtColorVal300x50 = $('input[name=messageTxtColor-300x50]').val();
	var roundelColorVal300x50 = $('input[name=roundelColor-300x50]').val();
	var roundelTxtColorVal300x50 = $('input[name=roundelTxtColor-300x50]').val();
	var mes1TxtVal300x50 = $('input[name=message1Txt-300x50]').val();
	var mes2TxtVal300x50 = 'N/A';
	var roundelTxtVal300x50 = $('input[name=roundelTxt-300x50]').val();
	var img1Val300x50 = 'N/A';
	var img2Val300x50 = 'N/A';
	var btn1TxtVal300x50 = $('input[name=btn1Txt-300x50]').val();
	var btn2TxtVal300x50 = $('input[name=btn2Txt-300x50]').val();
	var exitUrlVal300x50 = $('input[name=exitUrl-300x50]').val();
	var mesExtraTxtVal300x50;
	var imgExtraVal300x50 = 'N/A';
	if(feed300x50.extraFrame === true) {
		mesExtraTxtVal300x50 = $('input[name=messageExtraTxt-300x50]').val();
	}
	else {
		mesExtraTxtVal300x50 = 'N/A';
	}

	$.ajax({
// 		url:"https://docs.google.com/forms/d/e/1FAIpQLSeNvYxOH9nJUjLbRSfoapFIessQOUNjwL_Ft1LrJlN96JYJZQ/formResponse",
		data:{
			"entry_57793852":logoVal300x50,
			"entry_710629118":overlayVal300x50,
			"entry_1056887831":bgColorVal300x50,
			"entry_1970663478":btn1ColorVal300x50,
			"entry_1439940585":btn1TxtColorVal300x50,
			"entry_2083868184":btn2ColorVal300x50,
			"entry_1585123416":btn2TxtColorVal300x50,
			"entry_243732690":mesTxtColorVal300x50,
			"entry_1029643130":roundelColorVal300x50,
			"entry_2062109151":roundelTxtColorVal300x50,
			"entry_791765641":feed300x50.extraFrame,
			"entry_210126843":mes1TxtVal300x50,
			"entry_28722010":mesExtraTxtVal300x50,
			"entry_1158727021":mes2TxtVal300x50,
			"entry_519432673":roundelTxtVal300x50,
			"entry_302277476":img1Val300x50,
			"entry_1877115306":imgExtraVal300x50,
			"entry_1881036811":img2Val300x50,
			"entry_534078953":btn1TxtVal300x50,
			"entry_843299888":btn2TxtVal300x50,
			"entry_312657314":exitUrlVal300x50,
		},
		type:"POST",
		dataType:"xml",
		statusCode: {}
	});
}

$('#pageWrap').on('click', '.submit-300x50', function(){
	postContactToGoogle300x50();
});