var logoAssetSrc120x600 = '120x600/logos/havBnr17-120x600-';
var logoUrlSrc120x600 = 'https://s0.2mdn.net/creatives/assets/2050224/havBnr17-120x600-';
var overlayAssetSrc120x600 = '120x600/overlays/havBnr17-120x600-';
var overlayUrlSrc120x600 = 'https://s0.2mdn.net/creatives/assets/2047592/havBnr17-120x600-';
var imgAssetSrc120x600 = '120x600/imgs/havBnr17-120x600-';
var imgUrlSrc120x600 = 'https://s0.2mdn.net/creatives/assets/2047589/havBnr17-120x600-';

var imgStore120x600 = {};	
imgStore120x600[0] = {};
imgStore120x600[0][0] = [imgUrlSrc120x600+'br_sandart_01_2015.jpg', 'br_sandart_01_2015.jpg', '', 'selected', ''];
imgStore120x600[0][1] = [imgUrlSrc120x600+'ct_beach_12_13.jpg', 'ct_beach_12_13.jpg', 'selected', '', ''];
imgStore120x600[0][2] = [imgUrlSrc120x600+'ha_aerialadventure_10_2015.jpg', 'ha_aerialadventure_10_2015.jpg', '', '', 'selected'];
imgStore120x600[0][3] = [imgUrlSrc120x600+'hm_boatinglake_11_2015.jpg', 'hm_boatinglake_11_2015.jpg', '', '', ''];
imgStore120x600[0][4] = [imgUrlSrc120x600+'hm_naturerockz_beach_01_2015.jpg', 'hm_naturerockz_beach_01_2015.jpg', '', '', ''];
imgStore120x600[0][5] = [imgUrlSrc120x600+'kp_beachwalkfam_03_2014.jpg', 'kp_beachwalkfam_03_2014.jpg', '', '', ''];
imgStore120x600[0][6] = [imgUrlSrc120x600+'kp_beachwalkfam_05_2014.jpg', 'kp_beachwalkfam_05_2014.jpg', '', '', ''];
imgStore120x600[0][7] = [imgUrlSrc120x600+'la_woodlandwalk_06_2013.jpg', 'la_woodlandwalk_06_2013.jpg', '', '', ''];
imgStore120x600[0][8] = [imgUrlSrc120x600+'pv_naturerockz_beachcombing_01_2014.jpg', 'pv_naturerockz_beachcombing_01_2014.jpg', '', '', ''];
imgStore120x600[0][9] = [imgUrlSrc120x600+'pv_naturerockz_beachcombing_03_2014.jpg', 'pv_naturerockz_beachcombing_03_2014.jpg', '', '', ''];
imgStore120x600[0][10] = [imgUrlSrc120x600+'pv_naturerockz_beachcombing_22_2014.jpg', 'pv_naturerockz_beachcombing_22_2014.jpg', '', '', ''];
imgStore120x600[0][11] = [imgUrlSrc120x600+'qw_ropescourse_07_2015.jpg', 'qw_ropescourse_07_2015.jpg', '', '', ''];
imgStore120x600[0][12] = [imgUrlSrc120x600+'rp_beachdadgirl_03_2015.jpg', 'rp_beachdadgirl_03_2015.jpg', '', '', ''];
imgStore120x600[0][13] = [imgUrlSrc120x600+'rv_beachkids_07_12.jpg', 'rv_beachkids_07_12.jpg', '', '', ''];
imgStore120x600[0][14] = [imgUrlSrc120x600+'rv_beachtotboat_04_2013.jpg', 'rv_beachtotboat_04_2013.jpg', '', '', ''];
imgStore120x600[0][15] = [imgUrlSrc120x600+'sa_mashbarrelterrace_09_2015.jpg', 'sa_mashbarrelterrace_09_2015.jpg', '', '', ''];

var img1HowMany120x600 = Object.keys(imgStore120x600[0]).length;
for (var ia = 0; ia < img1HowMany120x600; ia++ ) {
	$('.img1 .gallery120x600').append('<div class="galItem '+imgStore120x600[0][ia][2]+'"><div class="img"><img title="'+imgStore120x600[0][ia][1]+'" src="'+thumbImg+imgStore120x600[0][ia][1]+'"/></div></div>');
	$('.img2 .gallery120x600').append('<div class="galItem '+imgStore120x600[0][ia][3]+'"><div class="img"><img title="'+imgStore120x600[0][ia][1]+'" src="'+thumbImg+imgStore120x600[0][ia][1]+'"/></div></div>');
	$('.imgExtra .gallery120x600').append('<div class="galItem '+imgStore120x600[0][ia][4]+'"><div class="img"><img title="'+imgStore120x600[0][ia][1]+'" src="'+thumbImg+imgStore120x600[0][ia][1]+'"/></div></div>');
}

var bnrInput120x600 = {};
bnrInput120x600= [{}];
bnrInput120x600[0].bgColor = "#F1B434";
bnrInput120x600[0].messageTxtColor = "#ffffff";
bnrInput120x600[0].roundelColor = "#ffffff";
bnrInput120x600[0].roundelTxtColor = "#719949";
bnrInput120x600[0].btn1Color = "#ffffff";
bnrInput120x600[0].btn1TxtColor = "#719949";
bnrInput120x600[0].btn2Color = "#ffffff";
bnrInput120x600[0].btn2TxtColor = "#719949";
bnrInput120x600[0].logo = "havenWhiteLogo";
bnrInput120x600[0].overlay = "circles";
bnrInput120x600[0].extraFrame = false;
bnrInput120x600[0].message1Txt = '<p class="font-gd font-50">Get ready</p><p class="font-25">for your 2017 holiday</p>';
bnrInput120x600[0].messageExtraTxt = '<p class="font-gd font-50">Extra frame</p>';
bnrInput120x600[0].message2Txt = '<p class="font-gd font-50">Spring breaks</p>';
bnrInput120x600[0].roundelTxt = '<p class="font-16">from only</p><p class="font-bold font-35">£79</p><p class="font-16">for the whole family</p>';
bnrInput120x600[0].btn1Txt = "View offers >";
bnrInput120x600[0].btn2Txt = "View offers >";
bnrInput120x600[0].img1 = imgStore120x600[0][1][1];
bnrInput120x600[0].imgExtra = imgStore120x600[0][2][1];
bnrInput120x600[0].img2 = imgStore120x600[0][0][1];
bnrInput120x600[0].exitUrl = "https://www.haven.com/";

var bnrBuild120x600 = '<div id="bnrWrapper-120x600"><div id="logo-120x600"></div><div id="innerWrap-120x600"><div id="btnWrap-120x600"><div id="btn1-120x600" class="btn-120x600"><p id="btn1Txt-120x600"></p></div><div id="btn2-120x600" class="btn-120x600"><p id="btn2Txt-120x600"></p></div></div><div id="overlay-120x600"></div><div id="fade1-120x600" class="fade"><div id="message1Wrap-120x600" class="messageWrap"><div id="message1-120x600" class="message"></div></div><div id="img1-120x600" class="img"></div></div><div id="fadeExtra-120x600" class="fade"><div id="messageExtraWrap-120x600" class="messageWrap"><div id="messageExtra-120x600" class="message"></div></div><div id="imgExtra-120x600" class="img"></div></div><div id="fade2-120x600" class="fade"><div id="message2Wrap-120x600" class="messageWrap"><div id="message2-120x600" class="message"></div></div><div id="img2-120x600" class="img"></div><div id="roundelWrap-120x600"><div id="roundelMessage-120x600"></div><svg version="1.1" id="roundel-120x600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.9 67.2" xml:space="preserve"><path d="M70.6,27.9c0-0.3-0.1-0.5-0.2-0.8V27c-1.2-5.9-5.1-10.6-10.2-14.3c-0.9-1.2-1.8-2.3-2.9-3.4C46.9-1.3,30.8-2.8,18.7,4.6 c-5.5,1.2-10.4,3.8-14,8.2c-5.7,7.1-5.5,16.4-2.8,25c1.5,4.9,3.8,9.6,6.2,13.5c3.6,5.8,8.5,11.4,14.8,14.2c4,1.8,8.3,2,12.5,1.3 c1.5-0.2,3.1-0.5,4.7-1c13.7-4.1,29.8-18.1,30.8-33.2C70.9,31,70.8,29.4,70.6,27.9z M28.7,66.1c-5.5-1.1-10.2-4.6-13.9-8.7 C8.4,50.2,3,40.1,2,30c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.2-3,0.1-6,0.8-8.8c2-7.2,7-11.5,13.2-13.9c-1,0.8-2.1,1.7-3,2.6 C0.7,21.3,0.6,41.2,12.8,53.5s32.1,12.4,44.4,0.2C67.1,43.8,69.1,28.9,63,17c1.8,2,3.4,4.2,4.5,6.7c0.7,1.5,1.1,3.1,1.4,4.6 c1.9,12.7-8.8,24.4-18.5,31.2c-4.1,2.9-9,5.6-14.1,6.7C33.8,66.5,31.2,66.6,28.7,66.1z"/></svg></div></div></div></div>';
function build120x600() {
	$('.bnrWrap.bnr120x600').append(bnrBuild120x600);
}
build120x600();
function destroy120x600() {
	$('.bnrWrap.bnr120x600').empty();
}

var feed120x600 = bnrInput120x600[0];

$('select[name=logo-120x600]').val(feed120x600.logo);
$('select[name=overlay-120x600]').val(feed120x600.overlay);
$('input[name=bgColor-120x600]').val(feed120x600.bgColor);
$('input[name=bgColor-120x600]').parents('.pickerWrap').find('.swatch').css({background: feed120x600.bgColor});
$('input[name=messageTxtColor-120x600]').val(feed120x600.messageTxtColor);
$('input[name=messageTxtColor-120x600]').parents('.pickerWrap').find('.swatch').css({background: feed120x600.messageTxtColor});
$('input[name=roundelColor-120x600]').val(feed120x600.roundelColor);
$('input[name=roundelColor-120x600]').parents('.pickerWrap').find('.swatch').css({background: feed120x600.roundelColor});
$('input[name=roundelTxtColor-120x600]').val(feed120x600.roundelTxtColor);
$('input[name=roundelTxtColor-120x600]').parents('.pickerWrap').find('.swatch').css({background: feed120x600.roundelTxtColor});

$('input[name=btn1Color-120x600]').val(feed120x600.btn1Color);
$('input[name=btn1Color-120x600]').parents('.pickerWrap').find('.swatch').css({background: feed120x600.btn1Color});
$('input[name=btn1TxtColor-120x600]').val(feed120x600.btn1TxtColor);
$('input[name=btn1TxtColor-120x600]').parents('.pickerWrap').find('.swatch').css({background: feed120x600.btn1TxtColor});
$('input[name=btn2Color-120x600]').val(feed120x600.btn2Color);
$('input[name=btn2Color-120x600]').parents('.pickerWrap').find('.swatch').css({background: feed120x600.btn2Color});
$('input[name=btn2TxtColor-120x600]').val(feed120x600.btn2TxtColor);
$('input[name=btn2TxtColor-120x600]').parents('.pickerWrap').find('.swatch').css({background: feed120x600.btn2TxtColor});

$('input[name=message1Txt-120x600]').val(feed120x600.message1Txt);
$('input[name=messageExtraTxt-120x600]').val(feed120x600.messageExtraTxt);
$('input[name=message2Txt-120x600]').val(feed120x600.message2Txt);
$('input[name=roundelTxt-120x600]').val(feed120x600.roundelTxt);

$('input[name=btn1Txt-120x600]').val(feed120x600.btn1Txt);
$('input[name=btn2Txt-120x600]').val(feed120x600.btn2Txt);

$('input[name=exitUrl-120x600]').val(feed120x600.exitUrl);

function bgColor120x600() {
	$('#bnrWrapper-120x600').css({background:$('input[name=bgColor-120x600]').val()});
}

function messageTxtColor120x600() {
	$('#message1-120x600, #messageExtra-120x600, #message2-120x600').find('p').css({color:$('input[name=messageTxtColor-120x600]').val()});
}

function roundelColor120x600() {
	$('#roundel-120x600').css({fill:$('input[name=roundelColor-120x600]').val()});
}

function roundelTxtColor120x600() {
	$('#roundelMessage-120x600').find('p').css({color:$('input[name=roundelTxtColor-120x600]').val()});
}

function logo120x600() {
	for (var i = 0; i < whichLogo.length; i++ ) {
		if($('select[name=logo-120x600]').val() === whichLogo[i]) {
			$('#logo-120x600').css({background:'url("'+logoUrlSrc120x600+whichLogo[i]+'.svg") no-repeat'});
		}
	}	
}

function overlay120x600() {
	for (var i = 0; i < whichOverlay.length; i++ ) {
		if($('select[name=overlay-120x600]').val() === whichOverlay[i]) {
			$('#overlay-120x600').css({background:'url("'+overlayUrlSrc120x600+whichOverlay[i]+'.svg") no-repeat'});
		}	
	}
}

function btn1Color120x600() {
	$('#btn1Txt-120x600').css({background:$('input[name=btn1Color-120x600]').val()});
}
function btn1TxtColor120x600() {
	$('#btn1Txt-120x600').css({color:$('input[name=btn1TxtColor-120x600]').val()});
}
function btn2Color120x600() {
	$('#btn2Txt-120x600').css({background:$('input[name=btn2Color-120x600]').val()});
}
function btn2TxtColor120x600() {
	$('#btn2Txt-120x600').css({color:$('input[name=btn2TxtColor-120x600]').val()});
}

function message1Txt120x600() {
	$('#message1-120x600').html($('input[name=message1Txt-120x600]').val());
}
function messageExtraTxt120x600() {
	$('#messageExtra-120x600').html($('input[name=messageExtraTxt-120x600]').val());
}
function message2Txt120x600() {
	$('#message2-120x600').html($('input[name=message2Txt-120x600]').val());
}
function roundelTxt120x600() {
	$('#roundelMessage-120x600').html($('input[name=roundelTxt-120x600]').val());
}

function btn1Txt120x600() {
	$('#btn1Txt-120x600').html($('input[name=btn1Txt-120x600]').val());
}
function btn2Txt120x600() {
	$('#btn2Txt-120x600').html($('input[name=btn2Txt-120x600]').val());
}

function img1120x600() {
	$('input[name=img1-120x600]').val(feed120x600.img1);
	$('#img1-120x600').css({background:'url("'+imgUrlSrc120x600+feed120x600.img1+'") no-repeat'});
}
function imgExtra120x600() {
	$('input[name=imgExtra-120x600]').val(feed120x600.imgExtra);
	$('#imgExtra-120x600').css({background:'url("'+imgUrlSrc120x600+feed120x600.imgExtra+'") no-repeat'});
}
function img2120x600() {
	$('input[name=img2-120x600]').val(feed120x600.img2);
	$('#img2-120x600').css({background:'url("'+imgUrlSrc120x600+feed120x600.img2+'") no-repeat'});
}

function init120x600Content() {	
	document.getElementById('bnrWrapper-120x600').style.display = "block";
	bgColor120x600();
	roundelColor120x600();

	logo120x600();
	overlay120x600();
	btn1Color120x600();		
	btn1TxtColor120x600();
	btn2Color120x600();		
	btn2TxtColor120x600();

	message1Txt120x600();
	messageExtraTxt120x600();
	message2Txt120x600();
	roundelTxt120x600();

	btn1Txt120x600();
	btn2Txt120x600();

	img1120x600();
	imgExtra120x600();
	img2120x600();

	messageTxtColor120x600();
	roundelTxtColor120x600();			
}
init120x600Content();

// animation start
var transition120x600 = 1000;
var btnTransition120x600 = 0;
var onScreen120x600 = 3000;
var frameLag120x600 = 500;
var frameDuration120x600 = transition120x600 + onScreen120x600 + frameLag120x600;
var easeIn120x600 = "easeInOutQuad";
var easeOut120x600 = "easeInOutQuad";
var runTime120x600;

function init120x600() {
	runTime120x600 = 0;
	
	$('#logo-120x600').velocity({top: 0}, {easing: easeIn120x600, duration: transition120x600, delay: 0});
	$('#btnWrap-120x600').velocity({bottom: 7}, {easing: easeIn120x600, duration: transition120x600, delay: 0});
	runTime120x600 = runTime120x600 + transition120x600;
	
	$('#fade1-120x600').velocity({opacity: 1}, {easing: easeIn120x600, duration: transition120x600, delay: runTime120x600});
	$('#fade1-120x600').velocity({opacity: 0}, {easing: easeOut120x600, duration: (transition120x600/2), delay: onScreen120x600});
	
	runTime120x600 = runTime120x600 + frameDuration120x600;
	
	if(feed120x600.extraFrame === true) {
		$('#fadeExtra-120x600').velocity({opacity: 1}, {easing: easeIn120x600, duration: transition120x600, delay: runTime120x600});
		$('#fadeExtra-120x600').velocity({opacity: 0}, {easing: easeOut120x600, duration: (transition120x600/2), delay: onScreen120x600});
		
		runTime120x600 = runTime120x600 + frameDuration120x600;	
	}
	
	$('#fade2-120x600').velocity({opacity: 1}, {easing: easeIn120x600, duration: transition120x600, delay: runTime120x600});
	
	if(feed120x600.btn1Color === feed120x600.btn2Color) {
		btnTransition120x600 = 0;
	}
	else {
		btnTransition120x600 = transition120x600;
	}
	$('#btn1-120x600').velocity({opacity: 0}, {easing: easeOut120x600, duration: (transition120x600/2), delay: runTime120x600});
	$('#btn2-120x600').velocity({opacity: 1}, {easing: easeIn120x600, duration: transition120x600, delay: runTime120x600});

	runTime120x600 = runTime120x600 + transition120x600;
}
$(document).ready(function(){
	setTimeout(function(){
	    init120x600();
	}, 1000);
});

function initframe1120x600() {
	$('#logo-120x600').css({top: 0});
	$('#btnWrap-120x600').css({bottom: 7});
	$('#fade1-120x600').css({opacity: 1});
}
function initframeExtra120x600() {
	$('#logo-120x600').css({top: 0});
	$('#btnWrap-120x600').css({bottom: 7});
	$('#fadeExtra-120x600').css({opacity: 1});
}
function initframe2120x600() {
	$('#logo-120x600').css({top: 0});
 	$('#btnWrap-120x600').css({bottom: 7});
	$('#fade2-120x600').css({opacity: 1});
	$('#btn1-120x600').css({opacity: 0});
	$('#btn2-120x600').css({opacity: 1});
}
function reset120x600() {
	destroy120x600();
	build120x600();
}

function extraFrameTrue120x600() {
	$('.frame3-120x600').show();
	$('.extraField-120x600').show();
	positionSliders();
	feed120x600.extraFrame = true;
}
function extraFrameFalse120x600() {
	$('.frame3-120x600').hide();
	$('.extraField-120x600').hide();
	feed120x600.extraFrame = false;
}

function checkExtraFrame120x600() {
	if ($('.extraFrameCheck-120x600 input[class=true]').is(':checked')){
		extraFrameTrue120x600();
	}
	else {
		extraFrameFalse120x600();
	}
}
checkExtraFrame120x600();

$('.replay-120x600').click(function(){
	btnDeselect($(this));
	reset120x600();
	init120x600Content();
	init120x600();
});
$('.frame1-120x600').click(function(){
	btnSelect($(this));
	reset120x600();
	init120x600Content();
	initframe1120x600();
});
$('.frame2-120x600').click(function(){
	btnSelect($(this));
	if(feed120x600.extraFrame === true) {
		reset120x600();
		init120x600Content();
		initframeExtra120x600();
	}
	else {
		reset120x600();
		init120x600Content();
		initframe2120x600();
	}	
});
$('.frame3-120x600').click(function(){
	btnSelect($(this));
	reset120x600();
	init120x600Content();
	initframe2120x600();
});

$('.extraFrameCheck-120x600').click(function() {
	checkExtraFrame120x600();
	$('.replay-120x600')[0].click();
});

$('select[name="logo-120x600"]').on('change', function() {
	logo120x600();
});
$('select[name="overlay-120x600"]').on('change', function() {
	overlay120x600();
});
$('input[name=bgColor-120x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		bgColorMirror($(this));
	}
	else {
		bgColor120x600();
	}
});
$('input[name=roundelColor-120x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelColorMirror($(this));
	}
	else {
		roundelColor120x600();
	}
});
$('input[name=messageTxtColor-120x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		messageTxtColorMirror($(this));
	}
	else {
		messageTxtColor120x600();
	}
});
$('input[name=roundelTxtColor-120x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelTxtColorMirror($(this));
	}
	else {
		roundelTxtColor120x600();
	}
});
$('input[name=btn1Color-120x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1ColorMirror($(this));
	}
	else {
		btn1Color120x600();
	}
});
$('input[name=btn1TxtColor-120x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1TxtColorMirror($(this));
	}
	else {
		btn1TxtColor120x600();
	}
});
$('input[name=btn2Color-120x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2ColorMirror($(this));
	}
	else {
		btn2Color120x600();
	}
});
$('input[name=btn2TxtColor-120x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2TxtColorMirror($(this));
	}
	else {
		btn2TxtColor120x600();
	}
});
$('input[name=message1Txt-120x600]').keyup(function() {
	message1Txt120x600();
	messageTxtColor120x600();
});
$('input[name=messageExtraTxt-120x600]').keyup(function() {
	messageExtraTxt120x600();
	messageTxtColor120x600();
});
$('input[name=message2Txt-120x600]').keyup(function() {
	message2Txt120x600();
	messageTxtColor120x600();
});
$('input[name=roundelTxt-120x600]').keyup(function() {
	roundelTxt120x600();
	roundelTxtColor120x600();
});
$('input[name=btn1Txt-120x600]').keyup(function() {
	btn1Txt120x600();
});
$('input[name=btn2Txt-120x600]').keyup(function() {
	btn2Txt120x600();
});	

function selectImg($this) {
	$this.closest('.gallery').find('.galItem').not($this).removeClass('selected');
	$this.addClass('selected');
}

$('.img1 .gallery120x600').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img1-120x600').css({background:'url("'+imgUrlSrc120x600+img+'") no-repeat'});
		selectImg($(this));
		bnrInput120x600[0].img1 = img;
		$('input[name=img1-120x600]').val(bnrInput120x600[0].img1);
	}
});
$('.imgExtra .gallery120x600').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#imgExtra-120x600').css({background:'url("'+imgUrlSrc120x600+img+'") no-repeat'});
		selectImg($(this));
		bnrInput120x600[0].imgExtra = img;
		$('input[name=imgExtra-120x600]').val(bnrInput120x600[0].imgExtra);
	}
});
$('.img2 .gallery120x600').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img2-120x600').css({background:'url("'+imgUrlSrc120x600+img+'") no-repeat'});
		selectImg($(this));
		bnrInput120x600[0].img2 = img;
		$('input[name=img2-120x600]').val(bnrInput120x600[0].img2);
	}
});

function postContactToGoogle120x600() {
	var logoVal120x600 = logoAssetSrc120x600+$('select[name=logo-120x600]').val()+'.svg';
	var overlayVal120x600 = overlayAssetSrc120x600+$('select[name=overlay-120x600]').val()+'.svg';
	var bgColorVal120x600 = $('input[name=bgColor-120x600]').val();
	var btn1ColorVal120x600 = $('input[name=btn1Color-120x600]').val();
	var btn1TxtColorVal120x600 = $('input[name=btn1TxtColor-120x600]').val();
	var btn2ColorVal120x600 = $('input[name=btn1Color-120x600]').val();
	var btn2TxtColorVal120x600 = $('input[name=btn1TxtColor-120x600]').val();
	var mesTxtColorVal120x600 = $('input[name=messageTxtColor-120x600]').val();
	var roundelColorVal120x600 = $('input[name=roundelColor-120x600]').val();
	var roundelTxtColorVal120x600 = $('input[name=roundelTxtColor-120x600]').val();
	var mes1TxtVal120x600 = $('input[name=message1Txt-120x600]').val();
	var mes2TxtVal120x600 = $('input[name=message2Txt-120x600]').val();
	var roundelTxtVal120x600 = $('input[name=roundelTxt-120x600]').val();
	var img1Val120x600 = imgAssetSrc120x600+$('input[name=img1-120x600]').val();
	var img2Val120x600 = imgAssetSrc120x600+$('input[name=img2-120x600]').val();
	var btn1TxtVal120x600 = $('input[name=btn1Txt-120x600]').val();
	var btn2TxtVal120x600 = $('input[name=btn2Txt-120x600]').val();
	var exitUrlVal120x600 = $('input[name=exitUrl-120x600]').val();
	var mesExtraTxtVal120x600;
	var imgExtraVal120x600;
	if(feed120x600.extraFrame === true) {
		mesExtraTxtVal120x600 = $('input[name=messageExtraTxt-120x600]').val();
		imgExtraVal120x600 = imgAssetSrc120x600+$('input[name=imgExtra-120x600]').val();
	}
	else {
		mesExtraTxtVal120x600 = 'N/A';
		imgExtraVal120x600 = blankImg;
	}

	$.ajax({
// 		url:"https://docs.google.com/forms/d/e/1FAIpQLSdfXtDb6IeYxfR9sLnmycaKf5vLaIEbMF--gzm5fg1GbmoxuQ/formResponse",
		data:{
			"entry_57793852":logoVal120x600,
			"entry_710629118":overlayVal120x600,
			"entry_1056887831":bgColorVal120x600,
			"entry_1970663478":btn1ColorVal120x600,
			"entry_1439940585":btn1TxtColorVal120x600,
			"entry_2083868184":btn2ColorVal120x600,
			"entry_1585123416":btn2TxtColorVal120x600,
			"entry_243732690":mesTxtColorVal120x600,
			"entry_1029643130":roundelColorVal120x600,
			"entry_2062109151":roundelTxtColorVal120x600,
			"entry_791765641":feed120x600.extraFrame,
			"entry_210126843":mes1TxtVal120x600,
			"entry_28722010":mesExtraTxtVal120x600,
			"entry_1158727021":mes2TxtVal120x600,
			"entry_519432673":roundelTxtVal120x600,
			"entry_302277476":img1Val120x600,
			"entry_1877115306":imgExtraVal120x600,
			"entry_1881036811":img2Val120x600,
			"entry_534078953":btn1TxtVal120x600,
			"entry_843299888":btn2TxtVal120x600,
			"entry_312657314":exitUrlVal120x600,
		},
		type:"POST",
		dataType:"xml",
		statusCode: {}
	});
}

$('#pageWrap').on('click', '.submit-120x600', function(){
	postContactToGoogle120x600();
});