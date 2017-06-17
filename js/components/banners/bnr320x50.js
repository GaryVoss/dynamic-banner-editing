var logoAssetSrc320x50 = '320x50/logos/havBnr17-320x50-';
var logoUrlSrc320x50 = 'https://s0.2mdn.net/creatives/assets/2050374/havBnr17-320x50-';
var overlayAssetSrc320x50 = '320x50/overlays/havBnr17-320x50-';
var overlayUrlSrc320x50 = 'https://s0.2mdn.net/creatives/assets/2054041/havBnr17-320x50-';

var bnrInput320x50 = {};
bnrInput320x50= [{}];
bnrInput320x50[0].bgColor = "#F1B434";
bnrInput320x50[0].messageTxtColor = "#ffffff";
bnrInput320x50[0].roundelColor = "#ffffff";
bnrInput320x50[0].roundelTxtColor = "#719949";
bnrInput320x50[0].btn1Color = "#ffffff";
bnrInput320x50[0].btn1TxtColor = "#719949";
bnrInput320x50[0].btn2Color = "#719949";
bnrInput320x50[0].btn2TxtColor = "#ffffff";
bnrInput320x50[0].logo = "havenWhiteLogo";
bnrInput320x50[0].overlay = "circles";
bnrInput320x50[0].extraFrame = false;
bnrInput320x50[0].message1Txt = '<p class="font-gd font-20">Get ready</p><p class="font-13">for your 2017 holiday</p>';
bnrInput320x50[0].messageExtraTxt = '<p class="font-gd font-30">Extra frame</p>';
bnrInput320x50[0].roundelTxt = '<p class="font-gd font-17">Spring breaks</p><p class="font-10">from only <span class="font-bold font-13">£79</span> for the whole family</p>';
bnrInput320x50[0].btn1Txt = "View offers >";
bnrInput320x50[0].btn2Txt = "View offers >";
bnrInput320x50[0].exitUrl = "https://www.haven.com/";

var bnrBuild320x50 = '<div id="bnrWrapper-320x50"><div id="logo-320x50"></div><div id="innerWrap-320x50"><div id="btnWrap-320x50"><div id="btn1-320x50" class="btn-320x50"><p id="btn1Txt-320x50"></p></div><div id="btn2-320x50" class="btn-320x50"><p id="btn2Txt-320x50"></p></div></div><div id="overlay-320x50"></div><div id="fade1-320x50" class="fade"><div id="message1Wrap-320x50" class="messageWrap"><div id="message1-320x50" class="message"></div></div><div id="img1-320x50" class="img"></div></div><div id="fadeExtra-320x50" class="fade"><div id="messageExtraWrap-320x50" class="messageWrap"><div id="messageExtra-320x50" class="message"></div></div><div id="imgExtra-320x50" class="img"></div></div><div id="fade2-320x50" class="fade"><div id="message2Wrap-320x50" class="messageWrap"><div id="message2-320x50" class="message"></div></div><div id="img2-320x50" class="img"></div><div id="roundelWrap-320x50"><div id="roundelMessage-320x50"></div><svg version="1.1" id="roundel-320x50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.9 67.2" xml:space="preserve"><path d="M70.6,27.9c0-0.3-0.1-0.5-0.2-0.8V27c-1.2-5.9-5.1-10.6-10.2-14.3c-0.9-1.2-1.8-2.3-2.9-3.4C46.9-1.3,30.8-2.8,18.7,4.6 c-5.5,1.2-10.4,3.8-14,8.2c-5.7,7.1-5.5,16.4-2.8,25c1.5,4.9,3.8,9.6,6.2,13.5c3.6,5.8,8.5,11.4,14.8,14.2c4,1.8,8.3,2,12.5,1.3 c1.5-0.2,3.1-0.5,4.7-1c13.7-4.1,29.8-18.1,30.8-33.2C70.9,31,70.8,29.4,70.6,27.9z M28.7,66.1c-5.5-1.1-10.2-4.6-13.9-8.7 C8.4,50.2,3,40.1,2,30c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.2-3,0.1-6,0.8-8.8c2-7.2,7-11.5,13.2-13.9c-1,0.8-2.1,1.7-3,2.6 C0.7,21.3,0.6,41.2,12.8,53.5s32.1,12.4,44.4,0.2C67.1,43.8,69.1,28.9,63,17c1.8,2,3.4,4.2,4.5,6.7c0.7,1.5,1.1,3.1,1.4,4.6 c1.9,12.7-8.8,24.4-18.5,31.2c-4.1,2.9-9,5.6-14.1,6.7C33.8,66.5,31.2,66.6,28.7,66.1z"/></svg></div></div></div></div>';
function build320x50() {
	$('.bnrWrap.bnr320x50').append(bnrBuild320x50);
}
build320x50();
function destroy320x50() {
	$('.bnrWrap.bnr320x50').empty();
}

var feed320x50 = bnrInput320x50[0];

$('select[name=logo-320x50]').val(feed320x50.logo);
$('select[name=overlay-320x50]').val(feed320x50.overlay);
$('input[name=bgColor-320x50]').val(feed320x50.bgColor);
$('input[name=bgColor-320x50]').parents('.pickerWrap').find('.swatch').css({background: feed320x50.bgColor});
$('input[name=messageTxtColor-320x50]').val(feed320x50.messageTxtColor);
$('input[name=messageTxtColor-320x50]').parents('.pickerWrap').find('.swatch').css({background: feed320x50.messageTxtColor});
$('input[name=roundelColor-320x50]').val(feed320x50.roundelColor);
$('input[name=roundelColor-320x50]').parents('.pickerWrap').find('.swatch').css({background: feed320x50.roundelColor});
$('input[name=roundelTxtColor-320x50]').val(feed320x50.roundelTxtColor);
$('input[name=roundelTxtColor-320x50]').parents('.pickerWrap').find('.swatch').css({background: feed320x50.roundelTxtColor});

$('input[name=btn1Color-320x50]').val(feed320x50.btn1Color);
$('input[name=btn1Color-320x50]').parents('.pickerWrap').find('.swatch').css({background: feed320x50.btn1Color});
$('input[name=btn1TxtColor-320x50]').val(feed320x50.btn1TxtColor);
$('input[name=btn1TxtColor-320x50]').parents('.pickerWrap').find('.swatch').css({background: feed320x50.btn1TxtColor});
$('input[name=btn2Color-320x50]').val(feed320x50.btn2Color);
$('input[name=btn2Color-320x50]').parents('.pickerWrap').find('.swatch').css({background: feed320x50.btn2Color});
$('input[name=btn2TxtColor-320x50]').val(feed320x50.btn2TxtColor);
$('input[name=btn2TxtColor-320x50]').parents('.pickerWrap').find('.swatch').css({background: feed320x50.btn2TxtColor});

$('input[name=message1Txt-320x50]').val(feed320x50.message1Txt);
$('input[name=messageExtraTxt-320x50]').val(feed320x50.messageExtraTxt);
$('input[name=roundelTxt-320x50]').val(feed320x50.roundelTxt);

$('input[name=btn1Txt-320x50]').val(feed320x50.btn1Txt);
$('input[name=btn2Txt-320x50]').val(feed320x50.btn2Txt);

$('input[name=exitUrl-320x50]').val(feed320x50.exitUrl);

function bgColor320x50() {
	$('#bnrWrapper-320x50').css({background:$('input[name=bgColor-320x50]').val()});
}

function messageTxtColor320x50() {
	$('#message1-320x50, #messageExtra-320x50').find('p').css({color:$('input[name=messageTxtColor-320x50]').val()});
}

function roundelColor320x50() {
	$('#roundel-320x50').css({fill:$('input[name=roundelColor-320x50]').val()});
	$('#img2-320x50').css({background:$('input[name=roundelColor-320x50]').val()});
}

function roundelTxtColor320x50() {
	$('#roundelMessage-320x50').find('p').css({color:$('input[name=roundelTxtColor-320x50]').val()});
}

function logo320x50() {
	for (var i = 0; i < whichLogo.length; i++ ) {
		if($('select[name=logo-320x50]').val() === whichLogo[i]) {
			$('#logo-320x50').css({background:'url("'+logoUrlSrc320x50+whichLogo[i]+'.svg") no-repeat'});
		}
	}	
}

function overlay320x50() {
	for (var i = 0; i < whichOverlay.length; i++ ) {
		if($('select[name=overlay-320x50]').val() === whichOverlay[i]) {
			$('#overlay-320x50').css({background:'url("'+overlayUrlSrc320x50+whichOverlay[i]+'.svg") no-repeat'});
		}	
	}
}

function btn1Color320x50() {
	$('#btn1Txt-320x50').css({background:$('input[name=btn1Color-320x50]').val()});
}
function btn1TxtColor320x50() {
	$('#btn1Txt-320x50').css({color:$('input[name=btn1TxtColor-320x50]').val()});
}
function btn2Color320x50() {
	$('#btn2Txt-320x50').css({background:$('input[name=btn2Color-320x50]').val()});
}
function btn2TxtColor320x50() {
	$('#btn2Txt-320x50').css({color:$('input[name=btn2TxtColor-320x50]').val()});
}

function message1Txt320x50() {
	$('#message1-320x50').html($('input[name=message1Txt-320x50]').val());
}
function messageExtraTxt320x50() {
	$('#messageExtra-320x50').html($('input[name=messageExtraTxt-320x50]').val());
}
function roundelTxt320x50() {
	$('#roundelMessage-320x50').html($('input[name=roundelTxt-320x50]').val());
}

function btn1Txt320x50() {
	$('#btn1Txt-320x50').html($('input[name=btn1Txt-320x50]').val());
}
function btn2Txt320x50() {
	$('#btn2Txt-320x50').html($('input[name=btn2Txt-320x50]').val());
}

function init320x50Content() {	
	document.getElementById('bnrWrapper-320x50').style.display = "block";
	bgColor320x50();
	roundelColor320x50();
			
	logo320x50();
	overlay320x50();
	btn1Color320x50();		
	btn1TxtColor320x50();
	btn2Color320x50();		
	btn2TxtColor320x50();
	
	message1Txt320x50();
	messageExtraTxt320x50();
	roundelTxt320x50();
	
	btn1Txt320x50();
	btn2Txt320x50();
	
	messageTxtColor320x50();
	roundelTxtColor320x50();			
}
init320x50Content();

// animation start
var transition320x50 = 1000;
var btnTransition320x50 = 0;
var onScreen320x50 = 3000;
var frameLag320x50 = 500;
var frameDuration320x50 = transition320x50 + onScreen320x50 + frameLag320x50;
var easeIn320x50 = "easeInOutQuad";
var easeOut320x50 = "easeInOutQuad";
var runTime320x50;

function init320x50() {
	runTime320x50 = 0;
	
	$('#logo-320x50').velocity({left: 0}, {easing: easeIn320x50, duration: transition320x50, delay: 0});
	
	$('#btnWrap-320x50').velocity({right: 0}, {easing: easeIn320x50, duration: transition320x50, delay: 0});
	runTime320x50 = runTime320x50 + transition320x50;
	
	$('#fade1-320x50').velocity({opacity: 1}, {easing: easeIn320x50, duration: transition320x50, delay: runTime320x50});
	$('#fade1-320x50').velocity({opacity: 0}, {easing: easeOut320x50, duration: (transition320x50/2), delay: onScreen320x50});
	
	runTime320x50 = runTime320x50 + frameDuration320x50;
	
	if(feed320x50.extraFrame === true) {
		$('#fadeExtra-320x50').velocity({opacity: 1}, {easing: easeIn320x50, duration: transition320x50, delay: runTime320x50});
		$('#fadeExtra-320x50').velocity({opacity: 0}, {easing: easeOut320x50, duration: (transition320x50/2), delay: onScreen320x50});
		
		runTime320x50 = runTime320x50 + frameDuration320x50;	
	}
	
	$('#fade2-320x50').velocity({opacity: 1}, {easing: easeIn320x50, duration: transition320x50, delay: runTime320x50});
	
	if(feed320x50.btn1Color === feed320x50.btn2Color) {
		btnTransition320x50 = 0;
	}
	else {
		btnTransition320x50 = transition320x50;
	}
	$('#btn1-320x50').velocity({opacity: 0}, {easing: easeOut320x50, duration: (transition320x50/2), delay: runTime320x50});
	$('#btn2-320x50').velocity({opacity: 1}, {easing: easeIn320x50, duration: transition320x50, delay: runTime320x50});

	runTime320x50 = runTime320x50 + transition320x50;	
}
init320x50();

function initframe1320x50() {
	$('#logo-320x50').css({left: 0});
	$('#btnWrap-320x50').css({right: 0});
	$('#fade1-320x50').css({opacity: 1});
}
function initframeExtra320x50() {
	$('#logo-320x50').css({left: 0});
	$('#btnWrap-320x50').css({right: 0});
	$('#fadeExtra-320x50').css({opacity: 1});
}
function initframe2320x50() {
	$('#logo-320x50').css({left: 0});
	$('#btnWrap-320x50').css({right: 0});
	$('#fade2-320x50').css({opacity: 1});
	$('#btn1-320x50').css({opacity: 0});
	$('#btn2-320x50').css({opacity: 1});
}
function reset320x50() {
	destroy320x50();
	build320x50();
}

function extraFrameTrue320x50() {
	$('.frame3-320x50').show();
	$('.extraField-320x50').show();
	positionSliders();
	feed320x50.extraFrame = true;
}
function extraFrameFalse320x50() {
	$('.frame3-320x50').hide();
	$('.extraField-320x50').hide();
	feed320x50.extraFrame = false;
}

function checkExtraFrame320x50() {
	if ($('.extraFrameCheck-320x50 input[class=true]').is(':checked')){
		extraFrameTrue320x50();
	}
	else {
		extraFrameFalse320x50();
	}
}
checkExtraFrame320x50();

$('.replay-320x50').click(function(){
	btnDeselect($(this));
	reset320x50();
	init320x50Content();
	init320x50();
});
$('.frame1-320x50').click(function(){
	btnSelect($(this));
	reset320x50();
	init320x50Content();
	initframe1320x50();
});
$('.frame2-320x50').click(function(){
	btnSelect($(this));
	if(feed320x50.extraFrame === true) {
		reset320x50();
		init320x50Content();
		initframeExtra320x50();
	}
	else {
		reset320x50();
		init320x50Content();
		initframe2320x50();
	}	
});
$('.frame3-320x50').click(function(){
	btnSelect($(this));
	reset320x50();
	init320x50Content();
	initframe2320x50();
});

$('.extraFrameCheck-320x50').click(function() {
	checkExtraFrame320x50();
	$('.replay-320x50')[0].click();
});

$('select[name="logo-320x50"]').on('change', function() {
	logo320x50();
});
$('select[name="overlay-320x50"]').on('change', function() {
	overlay320x50();
});
$('input[name=bgColor-320x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		bgColorMirror($(this));
	}
	else {
		bgColor320x50();
	}
});
$('input[name=roundelColor-320x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelColorMirror($(this));
	}
	else {
		roundelColor320x50();
	}
});
$('input[name=messageTxtColor-320x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		messageTxtColorMirror($(this));
	}
	else {
		messageTxtColor320x50();
	}
});
$('input[name=roundelTxtColor-320x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelTxtColorMirror($(this));
	}
	else {
		roundelTxtColor320x50();
	}
});
$('input[name=btn1Color-320x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1ColorMirror($(this));
	}
	else {
		btn1Color320x50();
	}
});
$('input[name=btn1TxtColor-320x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1TxtColorMirror($(this));
	}
	else {
		btn1TxtColor320x50();
	}
});
$('input[name=btn2Color-320x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2ColorMirror($(this));
	}
	else {
		btn2Color320x50();
	}
});
$('input[name=btn2TxtColor-320x50]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2TxtColorMirror($(this));
	}
	else {
		btn2TxtColor320x50();
	}
});
$('input[name=message1Txt-320x50]').keyup(function() {
	message1Txt320x50();
	messageTxtColor320x50();
});
$('input[name=messageExtraTxt-320x50]').keyup(function() {
	messageExtraTxt320x50();
	messageTxtColor320x50();
});
$('input[name=roundelTxt-320x50]').keyup(function() {
	roundelTxt320x50();
	roundelTxtColor320x50();
});
$('input[name=btn1Txt-320x50]').keyup(function() {
	btn1Txt320x50();
});
$('input[name=btn2Txt-320x50]').keyup(function() {
	btn2Txt320x50();
});	

function selectImg($this) {
	$this.closest('.gallery').find('.galItem').not($this).removeClass('selected');
	$this.addClass('selected');
}

$('.img1 .gallery320x50').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('src');
		$('#img1-320x50').css({background:'url("'+img+'") no-repeat'});
		selectImg($(this));
		bnrInput320x50[0].img1 = img;
		$('input[name=img1-320x50]').val(bnrInput320x50[0].img1);
	}
});
$('.img2 .gallery320x50').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('src');
		$('#img2-320x50').css({background:'url("'+img+'") no-repeat'});
		selectImg($(this));
		bnrInput320x50[0].img2 = img;
		$('input[name=img2-320x50]').val(bnrInput320x50[0].img2);
	}
});

function postContactToGoogle320x50() {
	var logoVal320x50 = logoAssetSrc320x50+$('select[name=logo-320x50]').val()+'.svg';
	var overlayVal320x50 = overlayAssetSrc320x50+$('select[name=overlay-320x50]').val()+'.svg';
	var bgColorVal320x50 = $('input[name=bgColor-320x50]').val();
	var btn1ColorVal320x50 = $('input[name=btn1Color-320x50]').val();
	var btn1TxtColorVal320x50 = $('input[name=btn1TxtColor-320x50]').val();
	var btn2ColorVal320x50 = $('input[name=btn1Color-320x50]').val();
	var btn2TxtColorVal320x50 = $('input[name=btn1TxtColor-320x50]').val();
	var mesTxtColorVal320x50 = $('input[name=messageTxtColor-320x50]').val();
	var roundelColorVal320x50 = $('input[name=roundelColor-320x50]').val();
	var roundelTxtColorVal320x50 = $('input[name=roundelTxtColor-320x50]').val();
	var mes1TxtVal320x50 = $('input[name=message1Txt-320x50]').val();
	var mes2TxtVal320x50 = 'N/A';
	var roundelTxtVal320x50 = $('input[name=roundelTxt-320x50]').val();
	var img1Val320x50 = 'N/A';
	var img2Val320x50 = 'N/A';
	var btn1TxtVal320x50 = $('input[name=btn1Txt-320x50]').val();
	var btn2TxtVal320x50 = $('input[name=btn2Txt-320x50]').val();
	var exitUrlVal320x50 = $('input[name=exitUrl-320x50]').val();
	var mesExtraTxtVal320x50;
	var imgExtraVal320x50 = 'N/A';
	if(feed320x50.extraFrame === true) {
		mesExtraTxtVal320x50 = $('input[name=messageExtraTxt-320x50]').val();
	}
	else {
		mesExtraTxtVal320x50 = 'N/A';
	}

	$.ajax({
// 		url:"https://docs.google.com/forms/d/e/1FAIpQLSeSKerlHqaMwbshvmfiMEoWKNFh9fn2YsslIe5_l0U69vG2QA/formResponse",
		data:{
			"entry_57793852":logoVal320x50,
			"entry_710629118":overlayVal320x50,
			"entry_1056887831":bgColorVal320x50,
			"entry_1970663478":btn1ColorVal320x50,
			"entry_1439940585":btn1TxtColorVal320x50,
			"entry_2083868184":btn2ColorVal320x50,
			"entry_1585123416":btn2TxtColorVal320x50,
			"entry_243732690":mesTxtColorVal320x50,
			"entry_1029643130":roundelColorVal320x50,
			"entry_2062109151":roundelTxtColorVal320x50,
			"entry_791765641":feed320x50.extraFrame,
			"entry_210126843":mes1TxtVal320x50,
			"entry_28722010":mesExtraTxtVal320x50,
			"entry_1158727021":mes2TxtVal320x50,
			"entry_519432673":roundelTxtVal320x50,
			"entry_302277476":img1Val320x50,
			"entry_1877115306":imgExtraVal320x50,
			"entry_1881036811":img2Val320x50,
			"entry_534078953":btn1TxtVal320x50,
			"entry_843299888":btn2TxtVal320x50,
			"entry_312657314":exitUrlVal320x50,
		},
		type:"POST",
		dataType:"xml",
		statusCode: {}
	});
}

$('#pageWrap').on('click', '.submit-320x50', function(){
	postContactToGoogle320x50();
});