var logoAssetSrc300x250 = '300x250/logos/havBnr17-300x250-';
var logoUrlSrc300x250 = 'https://s0.2mdn.net/creatives/assets/2054008/havBnr17-300x250-';
var overlayAssetSrc300x250 = '300x250/overlays/havBnr17-300x250-';
var overlayUrlSrc300x250 = 'https://s0.2mdn.net/creatives/assets/2054020/havBnr17-300x250-';
var imgAssetSrc300x250 = '300x250/imgs/havBnr17-300x250-';
var imgUrlSrc300x250 = 'https://s0.2mdn.net/creatives/assets/2053945/havBnr17-300x250-';

var imgStore300x250 = {};	
imgStore300x250[0] = {};
imgStore300x250[0][0] = [imgUrlSrc300x250+'br_sandart_01_2015.jpg', 'br_sandart_01_2015.jpg', '', 'selected', ''];
imgStore300x250[0][1] = [imgUrlSrc300x250+'ct_beach_12_13.jpg', 'ct_beach_12_13.jpg', 'selected', '', ''];
imgStore300x250[0][2] = [imgUrlSrc300x250+'ha_aerialadventure_10_2015.jpg', 'ha_aerialadventure_10_2015.jpg', '', '', 'selected'];
imgStore300x250[0][3] = [imgUrlSrc300x250+'hm_boatinglake_11_2015.jpg', 'hm_boatinglake_11_2015.jpg', '', '', ''];
imgStore300x250[0][4] = [imgUrlSrc300x250+'hm_naturerockz_beach_01_2015.jpg', 'hm_naturerockz_beach_01_2015.jpg', '', '', ''];
imgStore300x250[0][5] = [imgUrlSrc300x250+'kp_beachwalkfam_03_2014.jpg', 'kp_beachwalkfam_03_2014.jpg', '', '', ''];
imgStore300x250[0][6] = [imgUrlSrc300x250+'kp_beachwalkfam_05_2014.jpg', 'kp_beachwalkfam_05_2014.jpg', '', '', ''];
imgStore300x250[0][7] = [imgUrlSrc300x250+'la_woodlandwalk_06_2013.jpg', 'la_woodlandwalk_06_2013.jpg', '', '', ''];
imgStore300x250[0][8] = [imgUrlSrc300x250+'pv_naturerockz_beachcombing_01_2014.jpg', 'pv_naturerockz_beachcombing_01_2014.jpg', '', '', ''];
imgStore300x250[0][9] = [imgUrlSrc300x250+'pv_naturerockz_beachcombing_03_2014.jpg', 'pv_naturerockz_beachcombing_03_2014.jpg', '', '', ''];
imgStore300x250[0][10] = [imgUrlSrc300x250+'pv_naturerockz_beachcombing_22_2014.jpg', 'pv_naturerockz_beachcombing_22_2014.jpg', '', '', ''];
imgStore300x250[0][11] = [imgUrlSrc300x250+'qw_ropescourse_07_2015.jpg', 'qw_ropescourse_07_2015.jpg', '', '', ''];
imgStore300x250[0][12] = [imgUrlSrc300x250+'rp_beachdadgirl_03_2015.jpg', 'rp_beachdadgirl_03_2015.jpg', '', '', ''];
imgStore300x250[0][13] = [imgUrlSrc300x250+'rv_beachkids_07_12.jpg', 'rv_beachkids_07_12.jpg', '', '', ''];
imgStore300x250[0][14] = [imgUrlSrc300x250+'rv_beachtotboat_04_2013.jpg', 'rv_beachtotboat_04_2013.jpg', '', '', ''];
imgStore300x250[0][15] = [imgUrlSrc300x250+'sa_mashbarrelterrace_09_2015.jpg', 'sa_mashbarrelterrace_09_2015.jpg', '', '', ''];

var img1HowMany300x250 = Object.keys(imgStore300x250[0]).length;
for (var ia = 0; ia < img1HowMany300x250; ia++ ) {
	$('.img1 .gallery300x250').append('<div class="galItem '+imgStore300x250[0][ia][2]+'"><div class="img"><img title="'+imgStore300x250[0][ia][1]+'" src="'+thumbImg+imgStore300x250[0][ia][1]+'"/></div></div>');
	$('.img2 .gallery300x250').append('<div class="galItem '+imgStore300x250[0][ia][3]+'"><div class="img"><img title="'+imgStore300x250[0][ia][1]+'" src="'+thumbImg+imgStore300x250[0][ia][1]+'"/></div></div>');
	$('.imgExtra .gallery300x250').append('<div class="galItem '+imgStore300x250[0][ia][4]+'"><div class="img"><img title="'+imgStore300x250[0][ia][1]+'" src="'+thumbImg+imgStore300x250[0][ia][1]+'"/></div></div>');
}

var bnrInput300x250 = {};
bnrInput300x250= [{}];
bnrInput300x250[0].bgColor = "#F1B434";
bnrInput300x250[0].messageTxtColor = "#ffffff";
bnrInput300x250[0].roundelColor = "#ffffff";
bnrInput300x250[0].roundelTxtColor = "#719949";
bnrInput300x250[0].btn1Color = "#ffffff";
bnrInput300x250[0].btn1TxtColor = "#719949";
bnrInput300x250[0].btn2Color = "#719949";
bnrInput300x250[0].btn2TxtColor = "#ffffff";
bnrInput300x250[0].logo = "havenWhiteLogo";
bnrInput300x250[0].overlay = "circles";
bnrInput300x250[0].extraFrame = false;
bnrInput300x250[0].message1Txt = '<p class="font-gd font-35 font-margin5">Get ready</p><p class="font-18">for your 2017 holiday</p>';
bnrInput300x250[0].messageExtraTxt = '<p class="font-gd font-50">Extra frame</p>';
bnrInput300x250[0].roundelTxt = '<p class="font-gd font-25 font-margin5">Spring breaks</p><p class="font-14">from only</p><p class="font-bold font-30">£79</p><p class="font-14">for the whole family</p>';
bnrInput300x250[0].btn1Txt = "View offers >";
bnrInput300x250[0].btn2Txt = "View offers >";
bnrInput300x250[0].img1 = imgStore300x250[0][1][1];
bnrInput300x250[0].imgExtra = imgStore300x250[0][2][1];
bnrInput300x250[0].img2 = imgStore300x250[0][0][1];
bnrInput300x250[0].exitUrl = "https://www.haven.com/";

var bnrBuild300x250 = '<div id="bnrWrapper-300x250"><div id="logo-300x250"></div><div id="innerWrap-300x250"><div id="btnWrap-300x250"><div id="btn1-300x250" class="btn-300x250"><p id="btn1Txt-300x250"></p></div><div id="btn2-300x250" class="btn-300x250"><p id="btn2Txt-300x250"></p></div></div><div id="overlay-300x250"></div><div id="fade1-300x250" class="fade"><div id="message1Wrap-300x250" class="messageWrap"><div id="message1-300x250" class="message"></div></div><div id="img1-300x250" class="img"></div></div><div id="fadeExtra-300x250" class="fade"><div id="messageExtraWrap-300x250" class="messageWrap"><div id="messageExtra-300x250" class="message"></div></div><div id="imgExtra-300x250" class="img"></div></div><div id="fade2-300x250" class="fade"><div id="message2Wrap-300x250" class="messageWrap"><div id="message2-300x250" class="message"></div></div><div id="img2-300x250" class="img"></div><div id="roundelWrap-300x250"><div id="roundelMessage-300x250"></div><svg version="1.1" id="roundel-300x250" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.9 67.2" xml:space="preserve"><path d="M70.6,27.9c0-0.3-0.1-0.5-0.2-0.8V27c-1.2-5.9-5.1-10.6-10.2-14.3c-0.9-1.2-1.8-2.3-2.9-3.4C46.9-1.3,30.8-2.8,18.7,4.6 c-5.5,1.2-10.4,3.8-14,8.2c-5.7,7.1-5.5,16.4-2.8,25c1.5,4.9,3.8,9.6,6.2,13.5c3.6,5.8,8.5,11.4,14.8,14.2c4,1.8,8.3,2,12.5,1.3 c1.5-0.2,3.1-0.5,4.7-1c13.7-4.1,29.8-18.1,30.8-33.2C70.9,31,70.8,29.4,70.6,27.9z M28.7,66.1c-5.5-1.1-10.2-4.6-13.9-8.7 C8.4,50.2,3,40.1,2,30c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.2-3,0.1-6,0.8-8.8c2-7.2,7-11.5,13.2-13.9c-1,0.8-2.1,1.7-3,2.6 C0.7,21.3,0.6,41.2,12.8,53.5s32.1,12.4,44.4,0.2C67.1,43.8,69.1,28.9,63,17c1.8,2,3.4,4.2,4.5,6.7c0.7,1.5,1.1,3.1,1.4,4.6 c1.9,12.7-8.8,24.4-18.5,31.2c-4.1,2.9-9,5.6-14.1,6.7C33.8,66.5,31.2,66.6,28.7,66.1z"/></svg></div></div></div></div>';
function build300x250() {
	$('.bnrWrap.bnr300x250').append(bnrBuild300x250);
}
build300x250();
function destroy300x250() {
	$('.bnrWrap.bnr300x250').empty();
}

var feed300x250 = bnrInput300x250[0];

$('select[name=logo-300x250]').val(feed300x250.logo);
$('select[name=overlay-300x250]').val(feed300x250.overlay);
$('input[name=bgColor-300x250]').val(feed300x250.bgColor);
$('input[name=bgColor-300x250]').parents('.pickerWrap').find('.swatch').css({background: feed300x250.bgColor});
$('input[name=messageTxtColor-300x250]').val(feed300x250.messageTxtColor);
$('input[name=messageTxtColor-300x250]').parents('.pickerWrap').find('.swatch').css({background: feed300x250.messageTxtColor});
$('input[name=roundelColor-300x250]').val(feed300x250.roundelColor);
$('input[name=roundelColor-300x250]').parents('.pickerWrap').find('.swatch').css({background: feed300x250.roundelColor});
$('input[name=roundelTxtColor-300x250]').val(feed300x250.roundelTxtColor);
$('input[name=roundelTxtColor-300x250]').parents('.pickerWrap').find('.swatch').css({background: feed300x250.roundelTxtColor});

$('input[name=btn1Color-300x250]').val(feed300x250.btn1Color);
$('input[name=btn1Color-300x250]').parents('.pickerWrap').find('.swatch').css({background: feed300x250.btn1Color});
$('input[name=btn1TxtColor-300x250]').val(feed300x250.btn1TxtColor);
$('input[name=btn1TxtColor-300x250]').parents('.pickerWrap').find('.swatch').css({background: feed300x250.btn1TxtColor});
$('input[name=btn2Color-300x250]').val(feed300x250.btn2Color);
$('input[name=btn2Color-300x250]').parents('.pickerWrap').find('.swatch').css({background: feed300x250.btn2Color});
$('input[name=btn2TxtColor-300x250]').val(feed300x250.btn2TxtColor);
$('input[name=btn2TxtColor-300x250]').parents('.pickerWrap').find('.swatch').css({background: feed300x250.btn2TxtColor});

$('input[name=message1Txt-300x250]').val(feed300x250.message1Txt);
$('input[name=messageExtraTxt-300x250]').val(feed300x250.messageExtraTxt);
$('input[name=roundelTxt-300x250]').val(feed300x250.roundelTxt);

$('input[name=btn1Txt-300x250]').val(feed300x250.btn1Txt);
$('input[name=btn2Txt-300x250]').val(feed300x250.btn2Txt);

$('input[name=exitUrl-300x250]').val(feed300x250.exitUrl);

function bgColor300x250() {
	$('#bnrWrapper-300x250').css({background:$('input[name=bgColor-300x250]').val()});
}

function messageTxtColor300x250() {
	$('#message1-300x250, #messageExtra-300x250, #message2-300x250').find('p').css({color:$('input[name=messageTxtColor-300x250]').val()});
}

function roundelColor300x250() {
	$('#roundel-300x250').css({fill:$('input[name=roundelColor-300x250]').val()});
}

function roundelTxtColor300x250() {
	$('#roundelMessage-300x250').find('p').css({color:$('input[name=roundelTxtColor-300x250]').val()});
}

function logo300x250() {
	for (var i = 0; i < whichLogo.length; i++ ) {
		if($('select[name=logo-300x250]').val() === whichLogo[i]) {
			$('#logo-300x250').css({background:'url("'+logoUrlSrc300x250+whichLogo[i]+'.svg") no-repeat'});
		}
	}	
}

function overlay300x250() {
	for (var i = 0; i < whichOverlay.length; i++ ) {
		if($('select[name=overlay-300x250]').val() === whichOverlay[i]) {
			$('#overlay-300x250').css({background:'url("'+overlayUrlSrc300x250+whichOverlay[i]+'.svg") no-repeat'});
		}	
	}
}

function btn1Color300x250() {
	$('#btn1Txt-300x250').css({background:$('input[name=btn1Color-300x250]').val()});
}
function btn1TxtColor300x250() {
	$('#btn1Txt-300x250').css({color:$('input[name=btn1TxtColor-300x250]').val()});
}
function btn2Color300x250() {
	$('#btn2Txt-300x250').css({background:$('input[name=btn2Color-300x250]').val()});
}
function btn2TxtColor300x250() {
	$('#btn2Txt-300x250').css({color:$('input[name=btn2TxtColor-300x250]').val()});
}

function message1Txt300x250() {
	$('#message1-300x250').html($('input[name=message1Txt-300x250]').val());
}
function messageExtraTxt300x250() {
	$('#messageExtra-300x250').html($('input[name=messageExtraTxt-300x250]').val());
}
function roundelTxt300x250() {
	$('#roundelMessage-300x250').html($('input[name=roundelTxt-300x250]').val());
}

function btn1Txt300x250() {
	$('#btn1Txt-300x250').html($('input[name=btn1Txt-300x250]').val());
}
function btn2Txt300x250() {
	$('#btn2Txt-300x250').html($('input[name=btn2Txt-300x250]').val());
}

function img1300x250() {
	$('input[name=img1-300x250]').val(feed300x250.img1);
	$('#img1-300x250').css({background:'url("'+imgUrlSrc300x250+feed300x250.img1+'") no-repeat'});
}
function imgExtra300x250() {
	$('input[name=imgExtra-300x250]').val(feed300x250.imgExtra);
	$('#imgExtra-300x250').css({background:'url("'+imgUrlSrc300x250+feed300x250.imgExtra+'") no-repeat'});
}
function img2300x250() {
	$('input[name=img2-300x250]').val(feed300x250.img2);
	$('#img2-300x250').css({background:'url("'+imgUrlSrc300x250+feed300x250.img2+'") no-repeat'});
}

function init300x250Content() {	
	document.getElementById('bnrWrapper-300x250').style.display = "block";
	bgColor300x250();
	roundelColor300x250();
			
	logo300x250();
	overlay300x250();
	btn1Color300x250();		
	btn1TxtColor300x250();
	btn2Color300x250();		
	btn2TxtColor300x250();
	
	message1Txt300x250();
	messageExtraTxt300x250();
	roundelTxt300x250();
	
	btn1Txt300x250();
	btn2Txt300x250();
	
	img1300x250();
	imgExtra300x250();
	img2300x250();
	
	messageTxtColor300x250();
	roundelTxtColor300x250();			
}
init300x250Content();

// animation start
var transition300x250 = 1000;
var btnTransition300x250 = 0;
var onScreen300x250 = 3000;
var frameLag300x250 = 500;
var frameDuration300x250 = transition300x250 + onScreen300x250 + frameLag300x250;
var easeIn300x250 = "easeInOutQuad";
var easeOut300x250 = "easeInOutQuad";
var runTime300x250;

function init300x250() {
	runTime300x250 = 0;
	
	$('#logo-300x250').velocity({top: 0}, {easing: easeIn300x250, duration: transition300x250, delay: 0});
	$('#btnWrap-300x250').velocity({bottom: 9}, {easing: easeIn300x250, duration: transition300x250, delay: 0});
	runTime300x250 = runTime300x250 + transition300x250;
	
	$('#fade1-300x250').velocity({opacity: 1}, {easing: easeIn300x250, duration: transition300x250, delay: runTime300x250});
	$('#fade1-300x250').velocity({opacity: 0}, {easing: easeOut300x250, duration: (transition300x250/2), delay: onScreen300x250});
	
	runTime300x250 = runTime300x250 + frameDuration300x250;
	
	if(feed300x250.extraFrame === true) {
		$('#fadeExtra-300x250').velocity({opacity: 1}, {easing: easeIn300x250, duration: transition300x250, delay: runTime300x250});
		$('#fadeExtra-300x250').velocity({opacity: 0}, {easing: easeOut300x250, duration: (transition300x250/2), delay: onScreen300x250});
		
		runTime300x250 = runTime300x250 + frameDuration300x250;	
	}
	
	$('#fade2-300x250').velocity({opacity: 1}, {easing: easeIn300x250, duration: transition300x250, delay: runTime300x250});
	
	if(feed300x250.btn1Color === feed300x250.btn2Color) {
		btnTransition300x250 = 0;
	}
	else {
		btnTransition300x250 = transition300x250;
	}
	$('#btn1-300x250').velocity({opacity: 0}, {easing: easeOut300x250, duration: (transition300x250/2), delay: runTime300x250});
	$('#btn2-300x250').velocity({opacity: 1}, {easing: easeIn300x250, duration: transition300x250, delay: runTime300x250});

	runTime300x250 = runTime300x250 + transition300x250;
}
init300x250();

function initframe1300x250() {
	$('#logo-300x250').css({top: 0});
	$('#btnWrap-300x250').css({bottom: 9});
	$('#fade1-300x250').css({opacity: 1});
}
function initframeExtra300x250() {
	$('#logo-300x250').css({top: 0});
	$('#btnWrap-300x250').css({bottom: 9});
	$('#fadeExtra-300x250').css({opacity: 1});
}
function initframe2300x250() {
	$('#logo-300x250').css({top: 0});
 	$('#btnWrap-300x250').css({bottom: 9});
	$('#fade2-300x250').css({opacity: 1});
	$('#btn1-300x250').css({opacity: 0});
	$('#btn2-300x250').css({opacity: 1});
}
function reset300x250() {
	destroy300x250();
	build300x250();
}

function extraFrameTrue300x250() {
	$('.frame3-300x250').show();
	$('.extraField-300x250').show();
	positionSliders();
	feed300x250.extraFrame = true;
}
function extraFrameFalse300x250() {
	$('.frame3-300x250').hide();
	$('.extraField-300x250').hide();
	feed300x250.extraFrame = false;
}

function checkExtraFrame300x250() {
	if ($('.extraFrameCheck-300x250 input[class=true]').is(':checked')){
		extraFrameTrue300x250();
	}
	else {
		extraFrameFalse300x250();
	}
}
checkExtraFrame300x250();

$('.replay-300x250').click(function(){
	btnDeselect($(this));
	reset300x250();
	init300x250Content();
	init300x250();
});
$('.frame1-300x250').click(function(){
	btnSelect($(this));
	reset300x250();
	init300x250Content();
	initframe1300x250();
});
$('.frame2-300x250').click(function(){
	btnSelect($(this));
	if(feed300x250.extraFrame === true) {
		reset300x250();
		init300x250Content();
		initframeExtra300x250();
	}
	else {
		reset300x250();
		init300x250Content();
		initframe2300x250();
	}	
});
$('.frame3-300x250').click(function(){
	btnSelect($(this));
	reset300x250();
	init300x250Content();
	initframe2300x250();
});

$('.extraFrameCheck-300x250').click(function() {
	checkExtraFrame300x250();
	$('.replay-300x250')[0].click();
});

$('select[name="logo-300x250"]').on('change', function() {
	logo300x250();
});
$('select[name="overlay-300x250"]').on('change', function() {
	overlay300x250();
});
$('input[name=bgColor-300x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		bgColorMirror($(this));
	}
	else {
		bgColor300x250();
	}
});
$('input[name=roundelColor-300x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelColorMirror($(this));
	}
	else {
		roundelColor300x250();
	}
});
$('input[name=messageTxtColor-300x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		messageTxtColorMirror($(this));
	}
	else {
		messageTxtColor300x250();
	}
});
$('input[name=roundelTxtColor-300x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelTxtColorMirror($(this));
	}
	else {
		roundelTxtColor300x250();
	}
});
$('input[name=btn1Color-300x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1ColorMirror($(this));
	}
	else {
		btn1Color300x250();
	}
});
$('input[name=btn1TxtColor-300x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1TxtColorMirror($(this));
	}
	else {
		btn1TxtColor300x250();
	}
});
$('input[name=btn2Color-300x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2ColorMirror($(this));
	}
	else {
		btn2Color300x250();
	}
});
$('input[name=btn2TxtColor-300x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2TxtColorMirror($(this));
	}
	else {
		btn2TxtColor300x250();
	}
});
$('input[name=message1Txt-300x250]').keyup(function() {
	message1Txt300x250();
	messageTxtColor300x250();
});
$('input[name=messageExtraTxt-300x250]').keyup(function() {
	messageExtraTxt300x250();
	messageTxtColor300x250();
});
$('input[name=roundelTxt-300x250]').keyup(function() {
	roundelTxt300x250();
	roundelTxtColor300x250();
});
$('input[name=btn1Txt-300x250]').keyup(function() {
	btn1Txt300x250();
});
$('input[name=btn2Txt-300x250]').keyup(function() {
	btn2Txt300x250();
});	

function selectImg($this) {
	$this.closest('.gallery').find('.galItem').not($this).removeClass('selected');
	$this.addClass('selected');
}

$('.img1 .gallery300x250').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img1-300x250').css({background:'url("'+imgUrlSrc300x250+img+'") no-repeat'});
		selectImg($(this));
		bnrInput300x250[0].img1 = img;
		$('input[name=img1-300x250]').val(bnrInput300x250[0].img1);
	}
});
$('.imgExtra .gallery300x250').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#imgExtra-300x250').css({background:'url("'+imgUrlSrc300x250+img+'") no-repeat'});
		selectImg($(this));
		bnrInput300x250[0].imgExtra = img;
		$('input[name=imgExtra-300x250]').val(bnrInput300x250[0].imgExtra);
	}
});
$('.img2 .gallery300x250').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img2-300x250').css({background:'url("'+imgUrlSrc300x250+img+'") no-repeat'});
		selectImg($(this));
		bnrInput300x250[0].img2 = img;
		$('input[name=img2-300x250]').val(bnrInput300x250[0].img2);
	}
});

function postContactToGoogle300x250() {
	var logoVal300x250 = logoAssetSrc300x250+$('select[name=logo-300x250]').val()+'.svg';
	var overlayVal300x250 = overlayAssetSrc300x250+$('select[name=overlay-300x250]').val()+'.svg';
	var bgColorVal300x250 = $('input[name=bgColor-300x250]').val();
	var btn1ColorVal300x250 = $('input[name=btn1Color-300x250]').val();
	var btn1TxtColorVal300x250 = $('input[name=btn1TxtColor-300x250]').val();
	var btn2ColorVal300x250 = $('input[name=btn1Color-300x250]').val();
	var btn2TxtColorVal300x250 = $('input[name=btn1TxtColor-300x250]').val();
	var mesTxtColorVal300x250 = $('input[name=messageTxtColor-300x250]').val();
	var roundelColorVal300x250 = $('input[name=roundelColor-300x250]').val();
	var roundelTxtColorVal300x250 = $('input[name=roundelTxtColor-300x250]').val();
	var mes1TxtVal300x250 = $('input[name=message1Txt-300x250]').val();
	var mes2TxtVal300x250 = 'N/A';
	var roundelTxtVal300x250 = $('input[name=roundelTxt-300x250]').val();
	var img1Val300x250 = imgAssetSrc300x250+$('input[name=img1-300x250]').val();
	var img2Val300x250 = imgAssetSrc300x250+$('input[name=img2-300x250]').val();
	var btn1TxtVal300x250 = $('input[name=btn1Txt-300x250]').val();
	var btn2TxtVal300x250 = $('input[name=btn2Txt-300x250]').val();
	var exitUrlVal300x250 = $('input[name=exitUrl-300x250]').val();
	var mesExtraTxtVal300x250;
	var imgExtraVal300x250;
	if(feed300x250.extraFrame === true) {
		mesExtraTxtVal300x250 = $('input[name=messageExtraTxt-300x250]').val();
		imgExtraVal300x250 = imgAssetSrc300x250+$('input[name=imgExtra-300x250]').val();
	}
	else {
		mesExtraTxtVal300x250 = 'N/A';
		imgExtraVal300x250 = blankImg;
	}

	$.ajax({
// 		url:"https://docs.google.com/forms/d/e/1FAIpQLSd74W0JHKjl9qlZKEF5citelfcyfxhkJNWMYZJoLFS3B4WyTg/formResponse",
		data:{
			"entry_57793852":logoVal300x250,
			"entry_710629118":overlayVal300x250,
			"entry_1056887831":bgColorVal300x250,
			"entry_1970663478":btn1ColorVal300x250,
			"entry_1439940585":btn1TxtColorVal300x250,
			"entry_2083868184":btn2ColorVal300x250,
			"entry_1585123416":btn2TxtColorVal300x250,
			"entry_243732690":mesTxtColorVal300x250,
			"entry_1029643130":roundelColorVal300x250,
			"entry_2062109151":roundelTxtColorVal300x250,
			"entry_791765641":feed300x250.extraFrame,
			"entry_210126843":mes1TxtVal300x250,
			"entry_28722010":mesExtraTxtVal300x250,
			"entry_1158727021":mes2TxtVal300x250,
			"entry_519432673":roundelTxtVal300x250,
			"entry_302277476":img1Val300x250,
			"entry_1877115306":imgExtraVal300x250,
			"entry_1881036811":img2Val300x250,
			"entry_534078953":btn1TxtVal300x250,
			"entry_843299888":btn2TxtVal300x250,
			"entry_312657314":exitUrlVal300x250,
		},
		type:"POST",
		dataType:"xml",
		statusCode: {}
	});
}

$('#pageWrap').on('click', '.submit-300x250', function(){
	postContactToGoogle300x250();
});