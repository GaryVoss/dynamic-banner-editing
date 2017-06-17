var logoAssetSrc300x600 = '300x600/logos/havBnr17-300x600-';
var logoUrlSrc300x600 = 'https://s0.2mdn.net/creatives/assets/2054032/havBnr17-300x600-';
var overlayAssetSrc300x600 = '300x600/overlays/havBnr17-300x600-';
var overlayUrlSrc300x600 = 'https://s0.2mdn.net/creatives/assets/2047628/havBnr17-300x600-';
var imgAssetSrc300x600 = '300x600/imgs/havBnr17-300x600-';
var imgUrlSrc300x600 = 'https://s0.2mdn.net/creatives/assets/2054029/havBnr17-300x600-';

var imgStore300x600 = {};	
imgStore300x600[0] = {};
imgStore300x600[0][0] = [imgUrlSrc300x600+'br_sandart_01_2015.jpg', 'br_sandart_01_2015.jpg', '', 'selected', ''];
imgStore300x600[0][1] = [imgUrlSrc300x600+'ct_beach_12_13.jpg', 'ct_beach_12_13.jpg', 'selected', '', ''];
imgStore300x600[0][2] = [imgUrlSrc300x600+'ha_aerialadventure_10_2015.jpg', 'ha_aerialadventure_10_2015.jpg', '', '', 'selected'];
imgStore300x600[0][3] = [imgUrlSrc300x600+'hm_boatinglake_11_2015.jpg', 'hm_boatinglake_11_2015.jpg', '', '', ''];
imgStore300x600[0][4] = [imgUrlSrc300x600+'hm_naturerockz_beach_01_2015.jpg', 'hm_naturerockz_beach_01_2015.jpg', '', '', ''];
imgStore300x600[0][5] = [imgUrlSrc300x600+'kp_beachwalkfam_03_2014.jpg', 'kp_beachwalkfam_03_2014.jpg', '', '', ''];
imgStore300x600[0][6] = [imgUrlSrc300x600+'kp_beachwalkfam_05_2014.jpg', 'kp_beachwalkfam_05_2014.jpg', '', '', ''];
imgStore300x600[0][7] = [imgUrlSrc300x600+'la_woodlandwalk_06_2013.jpg', 'la_woodlandwalk_06_2013.jpg', '', '', ''];
imgStore300x600[0][8] = [imgUrlSrc300x600+'pv_naturerockz_beachcombing_01_2014.jpg', 'pv_naturerockz_beachcombing_01_2014.jpg', '', '', ''];
imgStore300x600[0][9] = [imgUrlSrc300x600+'pv_naturerockz_beachcombing_03_2014.jpg', 'pv_naturerockz_beachcombing_03_2014.jpg', '', '', ''];
imgStore300x600[0][10] = [imgUrlSrc300x600+'pv_naturerockz_beachcombing_22_2014.jpg', 'pv_naturerockz_beachcombing_22_2014.jpg', '', '', ''];
imgStore300x600[0][11] = [imgUrlSrc300x600+'qw_ropescourse_07_2015.jpg', 'qw_ropescourse_07_2015.jpg', '', '', ''];
imgStore300x600[0][12] = [imgUrlSrc300x600+'rp_beachdadgirl_03_2015.jpg', 'rp_beachdadgirl_03_2015.jpg', '', '', ''];
imgStore300x600[0][13] = [imgUrlSrc300x600+'rv_beachkids_07_12.jpg', 'rv_beachkids_07_12.jpg', '', '', ''];
imgStore300x600[0][14] = [imgUrlSrc300x600+'rv_beachtotboat_04_2013.jpg', 'rv_beachtotboat_04_2013.jpg', '', '', ''];
imgStore300x600[0][15] = [imgUrlSrc300x600+'sa_mashbarrelterrace_09_2015.jpg', 'sa_mashbarrelterrace_09_2015.jpg', '', '', ''];

var img1HowMany300x600 = Object.keys(imgStore300x600[0]).length;
for (var ia = 0; ia < img1HowMany300x600; ia++ ) {
	$('.img1 .gallery300x600').append('<div class="galItem '+imgStore300x600[0][ia][2]+'"><div class="img"><img title="'+imgStore300x600[0][ia][1]+'" src="'+thumbImg+imgStore300x600[0][ia][1]+'"/></div></div>');
	$('.img2 .gallery300x600').append('<div class="galItem '+imgStore300x600[0][ia][3]+'"><div class="img"><img title="'+imgStore300x600[0][ia][1]+'" src="'+thumbImg+imgStore300x600[0][ia][1]+'"/></div></div>');
	$('.imgExtra .gallery300x600').append('<div class="galItem '+imgStore300x600[0][ia][4]+'"><div class="img"><img title="'+imgStore300x600[0][ia][1]+'" src="'+thumbImg+imgStore300x600[0][ia][1]+'"/></div></div>');
}

var bnrInput300x600 = {};
bnrInput300x600= [{}];
bnrInput300x600[0].bgColor = "#F1B434";
bnrInput300x600[0].messageTxtColor = "#ffffff";
bnrInput300x600[0].roundelColor = "#ffffff";
bnrInput300x600[0].roundelTxtColor = "#719949";
bnrInput300x600[0].btn1Color = "#ffffff";
bnrInput300x600[0].btn1TxtColor = "#719949";
bnrInput300x600[0].btn2Color = "#719949";
bnrInput300x600[0].btn2TxtColor = "#ffffff";
bnrInput300x600[0].logo = "havenWhiteLogo";
bnrInput300x600[0].overlay = "circles";
bnrInput300x600[0].extraFrame = false;
bnrInput300x600[0].message1Txt = '<p class="font-gd font-60 font-margin10">Get ready</p><p class="font-25">for your 2017 holiday</p>';
bnrInput300x600[0].messageExtraTxt = '<p class="font-gd font-50">Extra frame</p>';
bnrInput300x600[0].roundelTxt = '<p class="font-gd font-50 font-margin10">Spring breaks</p><p class="font-18">from only</p><p class="font-bold font-60">£79</p><p class="font-18">for the whole family</p>';
bnrInput300x600[0].btn1Txt = "View offers >";
bnrInput300x600[0].btn2Txt = "View offers >";
bnrInput300x600[0].img1 = imgStore300x600[0][1][1];
bnrInput300x600[0].imgExtra = imgStore300x600[0][2][1];
bnrInput300x600[0].img2 = imgStore300x600[0][0][1];
bnrInput300x600[0].exitUrl = "https://www.haven.com/";

var bnrBuild300x600 = '<div id="bnrWrapper-300x600"><div id="logo-300x600"></div><div id="innerWrap-300x600"><div id="btnWrap-300x600"><div id="btn1-300x600" class="btn-300x600"><p id="btn1Txt-300x600"></p></div><div id="btn2-300x600" class="btn-300x600"><p id="btn2Txt-300x600"></p></div></div><div id="overlay-300x600"></div><div id="fade1-300x600" class="fade"><div id="message1Wrap-300x600" class="messageWrap"><div id="message1-300x600" class="message"></div></div><div id="img1-300x600" class="img"></div></div><div id="fadeExtra-300x600" class="fade"><div id="messageExtraWrap-300x600" class="messageWrap"><div id="messageExtra-300x600" class="message"></div></div><div id="imgExtra-300x600" class="img"></div></div><div id="fade2-300x600" class="fade"><div id="message2Wrap-300x600" class="messageWrap"><div id="message2-300x600" class="message"></div></div><div id="img2-300x600" class="img"></div><div id="roundelWrap-300x600"><div id="roundelMessage-300x600"></div><svg version="1.1" id="roundel-300x600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.9 67.2" xml:space="preserve"><path d="M70.6,27.9c0-0.3-0.1-0.5-0.2-0.8V27c-1.2-5.9-5.1-10.6-10.2-14.3c-0.9-1.2-1.8-2.3-2.9-3.4C46.9-1.3,30.8-2.8,18.7,4.6 c-5.5,1.2-10.4,3.8-14,8.2c-5.7,7.1-5.5,16.4-2.8,25c1.5,4.9,3.8,9.6,6.2,13.5c3.6,5.8,8.5,11.4,14.8,14.2c4,1.8,8.3,2,12.5,1.3 c1.5-0.2,3.1-0.5,4.7-1c13.7-4.1,29.8-18.1,30.8-33.2C70.9,31,70.8,29.4,70.6,27.9z M28.7,66.1c-5.5-1.1-10.2-4.6-13.9-8.7 C8.4,50.2,3,40.1,2,30c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.2-3,0.1-6,0.8-8.8c2-7.2,7-11.5,13.2-13.9c-1,0.8-2.1,1.7-3,2.6 C0.7,21.3,0.6,41.2,12.8,53.5s32.1,12.4,44.4,0.2C67.1,43.8,69.1,28.9,63,17c1.8,2,3.4,4.2,4.5,6.7c0.7,1.5,1.1,3.1,1.4,4.6 c1.9,12.7-8.8,24.4-18.5,31.2c-4.1,2.9-9,5.6-14.1,6.7C33.8,66.5,31.2,66.6,28.7,66.1z"/></svg></div></div></div></div>';
function build300x600() {
	$('.bnrWrap.bnr300x600').append(bnrBuild300x600);
}
build300x600();
function destroy300x600() {
	$('.bnrWrap.bnr300x600').empty();
}

var feed300x600 = bnrInput300x600[0];

$('select[name=logo-300x600]').val(feed300x600.logo);
$('select[name=overlay-300x600]').val(feed300x600.overlay);
$('input[name=bgColor-300x600]').val(feed300x600.bgColor);
$('input[name=bgColor-300x600]').parents('.pickerWrap').find('.swatch').css({background: feed300x600.bgColor});
$('input[name=messageTxtColor-300x600]').val(feed300x600.messageTxtColor);
$('input[name=messageTxtColor-300x600]').parents('.pickerWrap').find('.swatch').css({background: feed300x600.messageTxtColor});
$('input[name=roundelColor-300x600]').val(feed300x600.roundelColor);
$('input[name=roundelColor-300x600]').parents('.pickerWrap').find('.swatch').css({background: feed300x600.roundelColor});
$('input[name=roundelTxtColor-300x600]').val(feed300x600.roundelTxtColor);
$('input[name=roundelTxtColor-300x600]').parents('.pickerWrap').find('.swatch').css({background: feed300x600.roundelTxtColor});

$('input[name=btn1Color-300x600]').val(feed300x600.btn1Color);
$('input[name=btn1Color-300x600]').parents('.pickerWrap').find('.swatch').css({background: feed300x600.btn1Color});
$('input[name=btn1TxtColor-300x600]').val(feed300x600.btn1TxtColor);
$('input[name=btn1TxtColor-300x600]').parents('.pickerWrap').find('.swatch').css({background: feed300x600.btn1TxtColor});
$('input[name=btn2Color-300x600]').val(feed300x600.btn2Color);
$('input[name=btn2Color-300x600]').parents('.pickerWrap').find('.swatch').css({background: feed300x600.btn2Color});
$('input[name=btn2TxtColor-300x600]').val(feed300x600.btn2TxtColor);
$('input[name=btn2TxtColor-300x600]').parents('.pickerWrap').find('.swatch').css({background: feed300x600.btn2TxtColor});

$('input[name=message1Txt-300x600]').val(feed300x600.message1Txt);
$('input[name=messageExtraTxt-300x600]').val(feed300x600.messageExtraTxt);
$('input[name=roundelTxt-300x600]').val(feed300x600.roundelTxt);

$('input[name=btn1Txt-300x600]').val(feed300x600.btn1Txt);
$('input[name=btn2Txt-300x600]').val(feed300x600.btn2Txt);

$('input[name=exitUrl-300x600]').val(feed300x600.exitUrl);

function bgColor300x600() {
	$('#bnrWrapper-300x600').css({background:$('input[name=bgColor-300x600]').val()});
}

function messageTxtColor300x600() {
	$('#message1-300x600, #messageExtra-300x600, #message2-300x600').find('p').css({color:$('input[name=messageTxtColor-300x600]').val()});
}

function roundelColor300x600() {
	$('#roundel-300x600').css({fill:$('input[name=roundelColor-300x600]').val()});
}

function roundelTxtColor300x600() {
	$('#roundelMessage-300x600').find('p').css({color:$('input[name=roundelTxtColor-300x600]').val()});
}

function logo300x600() {
	for (var i = 0; i < whichLogo.length; i++ ) {
		if($('select[name=logo-300x600]').val() === whichLogo[i]) {
			$('#logo-300x600').css({background:'url("'+logoUrlSrc300x600+whichLogo[i]+'.svg") no-repeat'});
		}
	}	
}

function overlay300x600() {
	for (var i = 0; i < whichOverlay.length; i++ ) {
		if($('select[name=overlay-300x600]').val() === whichOverlay[i]) {
			$('#overlay-300x600').css({background:'url("'+overlayUrlSrc300x600+whichOverlay[i]+'.svg") no-repeat'});
		}	
	}
}

function btn1Color300x600() {
	$('#btn1Txt-300x600').css({background:$('input[name=btn1Color-300x600]').val()});
}
function btn1TxtColor300x600() {
	$('#btn1Txt-300x600').css({color:$('input[name=btn1TxtColor-300x600]').val()});
}
function btn2Color300x600() {
	$('#btn2Txt-300x600').css({background:$('input[name=btn2Color-300x600]').val()});
}
function btn2TxtColor300x600() {
	$('#btn2Txt-300x600').css({color:$('input[name=btn2TxtColor-300x600]').val()});
}

function message1Txt300x600() {
	$('#message1-300x600').html($('input[name=message1Txt-300x600]').val());
}
function messageExtraTxt300x600() {
	$('#messageExtra-300x600').html($('input[name=messageExtraTxt-300x600]').val());
}
function roundelTxt300x600() {
	$('#roundelMessage-300x600').html($('input[name=roundelTxt-300x600]').val());
}

function btn1Txt300x600() {
	$('#btn1Txt-300x600').html($('input[name=btn1Txt-300x600]').val());
}
function btn2Txt300x600() {
	$('#btn2Txt-300x600').html($('input[name=btn2Txt-300x600]').val());
}

function img1300x600() {
	$('input[name=img1-300x600]').val(feed300x600.img1);
	$('#img1-300x600').css({background:'url("'+imgUrlSrc300x600+feed300x600.img1+'") no-repeat'});
}
function imgExtra300x600() {
	$('input[name=imgExtra-300x600]').val(feed300x600.imgExtra);
	$('#imgExtra-300x600').css({background:'url("'+imgUrlSrc300x600+feed300x600.imgExtra+'") no-repeat'});
}
function img2300x600() {
	$('input[name=img2-300x600]').val(feed300x600.img2);
	$('#img2-300x600').css({background:'url("'+imgUrlSrc300x600+feed300x600.img2+'") no-repeat'});
}

function init300x600Content() {	
	document.getElementById('bnrWrapper-300x600').style.display = "block";
	bgColor300x600();
	roundelColor300x600();
			
	logo300x600();
	overlay300x600();
	btn1Color300x600();		
	btn1TxtColor300x600();
	btn2Color300x600();		
	btn2TxtColor300x600();
	
	message1Txt300x600();
	messageExtraTxt300x600();
	roundelTxt300x600();
	
	btn1Txt300x600();
	btn2Txt300x600();
	
	img1300x600();
	imgExtra300x600();
	img2300x600();
	
	messageTxtColor300x600();
	roundelTxtColor300x600();			
}
init300x600Content();

// animation start
var transition300x600 = 1000;
var btnTransition300x600 = 0;
var onScreen300x600 = 3000;
var frameLag300x600 = 500;
var frameDuration300x600 = transition300x600 + onScreen300x600 + frameLag300x600;
var easeIn300x600 = "easeInOutQuad";
var easeOut300x600 = "easeInOutQuad";
var runTime300x600;

function init300x600() {
	runTime300x600 = 0;
	
	$('#logo-300x600').velocity({top: 0}, {easing: easeIn300x600, duration: transition300x600, delay: 0});
	$('#btnWrap-300x600').velocity({bottom: 7}, {easing: easeIn300x600, duration: transition300x600, delay: 0});
	runTime300x600 = runTime300x600 + transition300x600;
	
	$('#fade1-300x600').velocity({opacity: 1}, {easing: easeIn300x600, duration: transition300x600, delay: runTime300x600});
	$('#fade1-300x600').velocity({opacity: 0}, {easing: easeOut300x600, duration: (transition300x600/2), delay: onScreen300x600});
	
	runTime300x600 = runTime300x600 + frameDuration300x600;
	
	if(feed300x600.extraFrame === true) {
		$('#fadeExtra-300x600').velocity({opacity: 1}, {easing: easeIn300x600, duration: transition300x600, delay: runTime300x600});
		$('#fadeExtra-300x600').velocity({opacity: 0}, {easing: easeOut300x600, duration: (transition300x600/2), delay: onScreen300x600});
		
		runTime300x600 = runTime300x600 + frameDuration300x600;	
	}
	
	$('#fade2-300x600').velocity({opacity: 1}, {easing: easeIn300x600, duration: transition300x600, delay: runTime300x600});
	
	if(feed300x600.btn1Color === feed300x600.btn2Color) {
		btnTransition300x600 = 0;
	}
	else {
		btnTransition300x600 = transition300x600;
	}
	$('#btn1-300x600').velocity({opacity: 0}, {easing: easeOut300x600, duration: (transition300x600/2), delay: runTime300x600});
	$('#btn2-300x600').velocity({opacity: 1}, {easing: easeIn300x600, duration: transition300x600, delay: runTime300x600});

	runTime300x600 = runTime300x600 + transition300x600;
}
init300x600();

function initframe1300x600() {
	$('#logo-300x600').css({top: 0});
	$('#btnWrap-300x600').css({bottom: 7});
	$('#fade1-300x600').css({opacity: 1});
}
function initframeExtra300x600() {
	$('#logo-300x600').css({top: 0});
	$('#btnWrap-300x600').css({bottom: 7});
	$('#fadeExtra-300x600').css({opacity: 1});
}
function initframe2300x600() {
	$('#logo-300x600').css({top: 0});
 	$('#btnWrap-300x600').css({bottom: 7});
	$('#fade2-300x600').css({opacity: 1});
	$('#btn1-300x600').css({opacity: 0});
	$('#btn2-300x600').css({opacity: 1});
}
function reset300x600() {
	destroy300x600();
	build300x600();
}

function extraFrameTrue300x600() {
	$('.frame3-300x600').show();
	$('.extraField-300x600').show();
	positionSliders();
	feed300x600.extraFrame = true;
}
function extraFrameFalse300x600() {
	$('.frame3-300x600').hide();
	$('.extraField-300x600').hide();
	feed300x600.extraFrame = false;
}

function checkExtraFrame300x600() {
	if ($('.extraFrameCheck-300x600 input[class=true]').is(':checked')){
		extraFrameTrue300x600();
	}
	else {
		extraFrameFalse300x600();
	}
}
checkExtraFrame300x600();

$('.replay-300x600').click(function(){
	btnDeselect($(this));
	reset300x600();
	init300x600Content();
	init300x600();
});
$('.frame1-300x600').click(function(){
	btnSelect($(this));
	reset300x600();
	init300x600Content();
	initframe1300x600();
});
$('.frame2-300x600').click(function(){
	btnSelect($(this));
	if(feed300x600.extraFrame === true) {
		reset300x600();
		init300x600Content();
		initframeExtra300x600();
	}
	else {
		reset300x600();
		init300x600Content();
		initframe2300x600();
	}	
});
$('.frame3-300x600').click(function(){
	btnSelect($(this));
	reset300x600();
	init300x600Content();
	initframe2300x600();
});

$('.extraFrameCheck-300x600').click(function() {
	checkExtraFrame300x600();
	$('.replay-300x600')[0].click();
});

$('select[name="logo-300x600"]').on('change', function() {
	logo300x600();
});
$('select[name="overlay-300x600"]').on('change', function() {
	overlay300x600();
});
$('input[name=bgColor-300x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		bgColorMirror($(this));
	}
	else {
		bgColor300x600();
	}
});
$('input[name=roundelColor-300x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelColorMirror($(this));
	}
	else {
		roundelColor300x600();
	}
});
$('input[name=messageTxtColor-300x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		messageTxtColorMirror($(this));
	}
	else {
		messageTxtColor300x600();
	}
});
$('input[name=roundelTxtColor-300x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelTxtColorMirror($(this));
	}
	else {
		roundelTxtColor300x600();
	}
});
$('input[name=btn1Color-300x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1ColorMirror($(this));
	}
	else {
		btn1Color300x600();
	}
});
$('input[name=btn1TxtColor-300x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1TxtColorMirror($(this));
	}
	else {
		btn1TxtColor300x600();
	}
});
$('input[name=btn2Color-300x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2ColorMirror($(this));
	}
	else {
		btn2Color300x600();
	}
});
$('input[name=btn2TxtColor-300x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2TxtColorMirror($(this));
	}
	else {
		btn2TxtColor300x600();
	}
});
$('input[name=message1Txt-300x600]').keyup(function() {
	message1Txt300x600();
	messageTxtColor300x600();
});
$('input[name=messageExtraTxt-300x600]').keyup(function() {
	messageExtraTxt300x600();
	messageTxtColor300x600();
});
$('input[name=roundelTxt-300x600]').keyup(function() {
	roundelTxt300x600();
	roundelTxtColor300x600();
});
$('input[name=btn1Txt-300x600]').keyup(function() {
	btn1Txt300x600();
});
$('input[name=btn2Txt-300x600]').keyup(function() {
	btn2Txt300x600();
});	

function selectImg($this) {
	$this.closest('.gallery').find('.galItem').not($this).removeClass('selected');
	$this.addClass('selected');
}

$('.img1 .gallery300x600').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img1-300x600').css({background:'url("'+imgUrlSrc300x600+img+'") no-repeat'});
		selectImg($(this));
		bnrInput300x600[0].img1 = img;
		$('input[name=img1-300x600]').val(bnrInput300x600[0].img1);
	}
});
$('.imgExtra .gallery300x600').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#imgExtra-300x600').css({background:'url("'+imgUrlSrc300x600+img+'") no-repeat'});
		selectImg($(this));
		bnrInput300x600[0].imgExtra = img;
		$('input[name=imgExtra-300x600]').val(bnrInput300x600[0].imgExtra);
	}
});
$('.img2 .gallery300x600').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img2-300x600').css({background:'url("'+imgUrlSrc300x600+img+'") no-repeat'});
		selectImg($(this));
		bnrInput300x600[0].img2 = img;
		$('input[name=img2-300x600]').val(bnrInput300x600[0].img2);
	}
});

function postContactToGoogle300x600() {
	var logoVal300x600 = logoAssetSrc300x600+$('select[name=logo-300x600]').val()+'.svg';
	var overlayVal300x600 = overlayAssetSrc300x600+$('select[name=overlay-300x600]').val()+'.svg';
	var bgColorVal300x600 = $('input[name=bgColor-300x600]').val();
	var btn1ColorVal300x600 = $('input[name=btn1Color-300x600]').val();
	var btn1TxtColorVal300x600 = $('input[name=btn1TxtColor-300x600]').val();
	var btn2ColorVal300x600 = $('input[name=btn1Color-300x600]').val();
	var btn2TxtColorVal300x600 = $('input[name=btn1TxtColor-300x600]').val();
	var mesTxtColorVal300x600 = $('input[name=messageTxtColor-300x600]').val();
	var roundelColorVal300x600 = $('input[name=roundelColor-300x600]').val();
	var roundelTxtColorVal300x600 = $('input[name=roundelTxtColor-300x600]').val();
	var mes1TxtVal300x600 = $('input[name=message1Txt-300x600]').val();
	var mes2TxtVal300x600 = 'N/A';
	var roundelTxtVal300x600 = $('input[name=roundelTxt-300x600]').val();
	var img1Val300x600 = imgAssetSrc300x600+$('input[name=img1-300x600]').val();
	var img2Val300x600 = imgAssetSrc300x600+$('input[name=img2-300x600]').val();
	var btn1TxtVal300x600 = $('input[name=btn1Txt-300x600]').val();
	var btn2TxtVal300x600 = $('input[name=btn2Txt-300x600]').val();
	var exitUrlVal300x600 = $('input[name=exitUrl-300x600]').val();
	var mesExtraTxtVal300x600;
	var imgExtraVal300x600;
	if(feed300x600.extraFrame === true) {
		mesExtraTxtVal300x600 = $('input[name=messageExtraTxt-300x600]').val();
		imgExtraVal300x600 = imgAssetSrc300x600+$('input[name=imgExtra-300x600]').val();
	}
	else {
		mesExtraTxtVal300x600 = 'N/A';
		imgExtraVal300x600 = blankImg;
	}

	$.ajax({
// 		url:"https://docs.google.com/forms/d/e/1FAIpQLSfjt5TdBz2SXJADkY-mXIXXYuzpn5Iyukf0N3V94o4ssTuQog/formResponse",
		data:{
			"entry_57793852":logoVal300x600,
			"entry_710629118":overlayVal300x600,
			"entry_1056887831":bgColorVal300x600,
			"entry_1970663478":btn1ColorVal300x600,
			"entry_1439940585":btn1TxtColorVal300x600,
			"entry_2083868184":btn2ColorVal300x600,
			"entry_1585123416":btn2TxtColorVal300x600,
			"entry_243732690":mesTxtColorVal300x600,
			"entry_1029643130":roundelColorVal300x600,
			"entry_2062109151":roundelTxtColorVal300x600,
			"entry_791765641":feed300x600.extraFrame,
			"entry_210126843":mes1TxtVal300x600,
			"entry_28722010":mesExtraTxtVal300x600,
			"entry_1158727021":mes2TxtVal300x600,
			"entry_519432673":roundelTxtVal300x600,
			"entry_302277476":img1Val300x600,
			"entry_1877115306":imgExtraVal300x600,
			"entry_1881036811":img2Val300x600,
			"entry_534078953":btn1TxtVal300x600,
			"entry_843299888":btn2TxtVal300x600,
			"entry_312657314":exitUrlVal300x600,
		},
		type:"POST",
		dataType:"xml",
		statusCode: {}
	});
}

$('#pageWrap').on('click', '.submit-300x600', function(){
	postContactToGoogle300x600();
});