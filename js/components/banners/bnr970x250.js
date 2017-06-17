var logoAssetSrc970x250 = '970x250/logos/havBnr17-970x250-';
var logoUrlSrc970x250 = 'https://s0.2mdn.net/creatives/assets/2054065/havBnr17-970x250-';
var overlayAssetSrc970x250 = '970x250/overlays/havBnr17-970x250-';
var overlayUrlSrc970x250 = 'https://s0.2mdn.net/creatives/assets/2054068/havBnr17-970x250-';
var imgAssetSrc970x250 = '970x250/imgs/havBnr17-970x250-';
var imgUrlSrc970x250 = 'https://s0.2mdn.net/creatives/assets/2050353/havBnr17-970x250-';

var imgStore970x250 = {};	
imgStore970x250[0] = {};
imgStore970x250[0][0] = [imgUrlSrc970x250+'br_sandart_01_2015.jpg', 'br_sandart_01_2015.jpg', '', 'selected', ''];
imgStore970x250[0][1] = [imgUrlSrc970x250+'ct_beach_12_13.jpg', 'ct_beach_12_13.jpg', 'selected', '', ''];
imgStore970x250[0][2] = [imgUrlSrc970x250+'ha_aerialadventure_10_2015.jpg', 'ha_aerialadventure_10_2015.jpg', '', '', 'selected'];
imgStore970x250[0][3] = [imgUrlSrc970x250+'hm_boatinglake_11_2015.jpg', 'hm_boatinglake_11_2015.jpg', '', '', ''];
imgStore970x250[0][4] = [imgUrlSrc970x250+'hm_naturerockz_beach_01_2015.jpg', 'hm_naturerockz_beach_01_2015.jpg', '', '', ''];
imgStore970x250[0][5] = [imgUrlSrc970x250+'kp_beachwalkfam_03_2014.jpg', 'kp_beachwalkfam_03_2014.jpg', '', '', ''];
imgStore970x250[0][6] = [imgUrlSrc970x250+'kp_beachwalkfam_05_2014.jpg', 'kp_beachwalkfam_05_2014.jpg', '', '', ''];
imgStore970x250[0][7] = [imgUrlSrc970x250+'la_woodlandwalk_06_2013.jpg', 'la_woodlandwalk_06_2013.jpg', '', '', ''];
imgStore970x250[0][8] = [imgUrlSrc970x250+'pv_naturerockz_beachcombing_01_2014.jpg', 'pv_naturerockz_beachcombing_01_2014.jpg', '', '', ''];
imgStore970x250[0][9] = [imgUrlSrc970x250+'pv_naturerockz_beachcombing_03_2014.jpg', 'pv_naturerockz_beachcombing_03_2014.jpg', '', '', ''];
imgStore970x250[0][10] = [imgUrlSrc970x250+'pv_naturerockz_beachcombing_22_2014.jpg', 'pv_naturerockz_beachcombing_22_2014.jpg', '', '', ''];
imgStore970x250[0][11] = [imgUrlSrc970x250+'qw_ropescourse_07_2015.jpg', 'qw_ropescourse_07_2015.jpg', '', '', ''];
imgStore970x250[0][12] = [imgUrlSrc970x250+'rp_beachdadgirl_03_2015.jpg', 'rp_beachdadgirl_03_2015.jpg', '', '', ''];
imgStore970x250[0][13] = [imgUrlSrc970x250+'rv_beachkids_07_12.jpg', 'rv_beachkids_07_12.jpg', '', '', ''];
imgStore970x250[0][14] = [imgUrlSrc970x250+'rv_beachtotboat_04_2013.jpg', 'rv_beachtotboat_04_2013.jpg', '', '', ''];
imgStore970x250[0][15] = [imgUrlSrc970x250+'sa_mashbarrelterrace_09_2015.jpg', 'sa_mashbarrelterrace_09_2015.jpg', '', '', ''];

var img1HowMany970x250 = Object.keys(imgStore970x250[0]).length;
for (var ia = 0; ia < img1HowMany970x250; ia++ ) {
	$('.img1 .gallery970x250').append('<div class="galItem '+imgStore970x250[0][ia][2]+'"><div class="img"><img title="'+imgStore970x250[0][ia][1]+'" src="'+thumbImg+imgStore970x250[0][ia][1]+'"/></div></div>');
	$('.img2 .gallery970x250').append('<div class="galItem '+imgStore970x250[0][ia][3]+'"><div class="img"><img title="'+imgStore970x250[0][ia][1]+'" src="'+thumbImg+imgStore970x250[0][ia][1]+'"/></div></div>');
	$('.imgExtra .gallery970x250').append('<div class="galItem '+imgStore970x250[0][ia][4]+'"><div class="img"><img title="'+imgStore970x250[0][ia][1]+'" src="'+thumbImg+imgStore970x250[0][ia][1]+'"/></div></div>');
}

var bnrInput970x250 = {};
bnrInput970x250= [{}];
bnrInput970x250[0].bgColor = "#F1B434";
bnrInput970x250[0].messageTxtColor = "#ffffff";
bnrInput970x250[0].roundelColor = "#ffffff";
bnrInput970x250[0].roundelTxtColor = "#719949";
bnrInput970x250[0].btn1Color = "#ffffff";
bnrInput970x250[0].btn1TxtColor = "#719949";
bnrInput970x250[0].btn2Color = "#719949";
bnrInput970x250[0].btn2TxtColor = "#ffffff";
bnrInput970x250[0].logo = "havenWhiteLogo";
bnrInput970x250[0].overlay = "circles";
bnrInput970x250[0].extraFrame = false;
bnrInput970x250[0].message1Txt = '<p class="font-gd font-50 font-margin10">Get ready</p><p class="font-30">for your 2017 holiday</p>';
bnrInput970x250[0].messageExtraTxt = '<p class="font-gd font-50">Extra frame</p>';
bnrInput970x250[0].roundelTxt = '<p class="font-gd font-50 font-margin10">Spring breaks</p><p class="font-20">from only</p><p class="font-bold font-40">£79</p><p class="font-20">for the whole family</p>';
bnrInput970x250[0].btn1Txt = "View offers >";
bnrInput970x250[0].btn2Txt = "View offers >";
bnrInput970x250[0].img1 = imgStore970x250[0][1][1];
bnrInput970x250[0].imgExtra = imgStore970x250[0][2][1];
bnrInput970x250[0].img2 = imgStore970x250[0][0][1];
bnrInput970x250[0].exitUrl = "https://www.haven.com/";

var bnrBuild970x250 = '<div id="bnrWrapper-970x250"><div id="logo-970x250"></div><div id="innerWrap-970x250"><div id="btnWrap-970x250"><div id="btn1-970x250" class="btn-970x250"><p id="btn1Txt-970x250"></p></div><div id="btn2-970x250" class="btn-970x250"><p id="btn2Txt-970x250"></p></div></div><div id="overlay-970x250"></div><div id="fade1-970x250" class="fade"><div id="message1Wrap-970x250" class="messageWrap"><div id="message1-970x250" class="message"></div></div><div id="img1-970x250" class="img"></div></div><div id="fadeExtra-970x250" class="fade"><div id="messageExtraWrap-970x250" class="messageWrap"><div id="messageExtra-970x250" class="message"></div></div><div id="imgExtra-970x250" class="img"></div></div><div id="fade2-970x250" class="fade"><div id="message2Wrap-970x250" class="messageWrap"><div id="message2-970x250" class="message"></div></div><div id="img2-970x250" class="img"></div><div id="roundelWrap-970x250"><div id="roundelMessage-970x250"></div><svg version="1.1" id="roundel-970x250" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.9 67.2" xml:space="preserve"><path d="M70.6,27.9c0-0.3-0.1-0.5-0.2-0.8V27c-1.2-5.9-5.1-10.6-10.2-14.3c-0.9-1.2-1.8-2.3-2.9-3.4C46.9-1.3,30.8-2.8,18.7,4.6 c-5.5,1.2-10.4,3.8-14,8.2c-5.7,7.1-5.5,16.4-2.8,25c1.5,4.9,3.8,9.6,6.2,13.5c3.6,5.8,8.5,11.4,14.8,14.2c4,1.8,8.3,2,12.5,1.3 c1.5-0.2,3.1-0.5,4.7-1c13.7-4.1,29.8-18.1,30.8-33.2C70.9,31,70.8,29.4,70.6,27.9z M28.7,66.1c-5.5-1.1-10.2-4.6-13.9-8.7 C8.4,50.2,3,40.1,2,30c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.2-3,0.1-6,0.8-8.8c2-7.2,7-11.5,13.2-13.9c-1,0.8-2.1,1.7-3,2.6 C0.7,21.3,0.6,41.2,12.8,53.5s32.1,12.4,44.4,0.2C67.1,43.8,69.1,28.9,63,17c1.8,2,3.4,4.2,4.5,6.7c0.7,1.5,1.1,3.1,1.4,4.6 c1.9,12.7-8.8,24.4-18.5,31.2c-4.1,2.9-9,5.6-14.1,6.7C33.8,66.5,31.2,66.6,28.7,66.1z"/></svg></div></div></div></div>';
function build970x250() {
	$('.bnrWrap.bnr970x250').append(bnrBuild970x250);
}
build970x250();
function destroy970x250() {
	$('.bnrWrap.bnr970x250').empty();
}

var feed970x250 = bnrInput970x250[0];

$('select[name=logo-970x250]').val(feed970x250.logo);
$('select[name=overlay-970x250]').val(feed970x250.overlay);
$('input[name=bgColor-970x250]').val(feed970x250.bgColor);
$('input[name=bgColor-970x250]').parents('.pickerWrap').find('.swatch').css({background: feed970x250.bgColor});
$('input[name=messageTxtColor-970x250]').val(feed970x250.messageTxtColor);
$('input[name=messageTxtColor-970x250]').parents('.pickerWrap').find('.swatch').css({background: feed970x250.messageTxtColor});
$('input[name=roundelColor-970x250]').val(feed970x250.roundelColor);
$('input[name=roundelColor-970x250]').parents('.pickerWrap').find('.swatch').css({background: feed970x250.roundelColor});
$('input[name=roundelTxtColor-970x250]').val(feed970x250.roundelTxtColor);
$('input[name=roundelTxtColor-970x250]').parents('.pickerWrap').find('.swatch').css({background: feed970x250.roundelTxtColor});

$('input[name=btn1Color-970x250]').val(feed970x250.btn1Color);
$('input[name=btn1Color-970x250]').parents('.pickerWrap').find('.swatch').css({background: feed970x250.btn1Color});
$('input[name=btn1TxtColor-970x250]').val(feed970x250.btn1TxtColor);
$('input[name=btn1TxtColor-970x250]').parents('.pickerWrap').find('.swatch').css({background: feed970x250.btn1TxtColor});
$('input[name=btn2Color-970x250]').val(feed970x250.btn2Color);
$('input[name=btn2Color-970x250]').parents('.pickerWrap').find('.swatch').css({background: feed970x250.btn2Color});
$('input[name=btn2TxtColor-970x250]').val(feed970x250.btn2TxtColor);
$('input[name=btn2TxtColor-970x250]').parents('.pickerWrap').find('.swatch').css({background: feed970x250.btn2TxtColor});

$('input[name=message1Txt-970x250]').val(feed970x250.message1Txt);
$('input[name=messageExtraTxt-970x250]').val(feed970x250.messageExtraTxt);
$('input[name=roundelTxt-970x250]').val(feed970x250.roundelTxt);

$('input[name=btn1Txt-970x250]').val(feed970x250.btn1Txt);
$('input[name=btn2Txt-970x250]').val(feed970x250.btn2Txt);

$('input[name=exitUrl-970x250]').val(feed970x250.exitUrl);

function bgColor970x250() {
	$('#bnrWrapper-970x250').css({background:$('input[name=bgColor-970x250]').val()});
}

function messageTxtColor970x250() {
	$('#message1-970x250, #messageExtra-970x250, #message2-970x250').find('p').css({color:$('input[name=messageTxtColor-970x250]').val()});
}

function roundelColor970x250() {
	$('#roundel-970x250').css({fill:$('input[name=roundelColor-970x250]').val()});
}

function roundelTxtColor970x250() {
	$('#roundelMessage-970x250').find('p').css({color:$('input[name=roundelTxtColor-970x250]').val()});
}

function logo970x250() {
	for (var i = 0; i < whichLogo.length; i++ ) {
		if($('select[name=logo-970x250]').val() === whichLogo[i]) {
			$('#logo-970x250').css({background:'url("'+logoUrlSrc970x250+whichLogo[i]+'.svg") no-repeat'});
		}
	}	
}

function overlay970x250() {
	for (var i = 0; i < whichOverlay.length; i++ ) {
		if($('select[name=overlay-970x250]').val() === whichOverlay[i]) {
			$('#overlay-970x250').css({background:'url("'+overlayUrlSrc970x250+whichOverlay[i]+'.svg") no-repeat'});
		}	
	}
}

function btn1Color970x250() {
	$('#btn1Txt-970x250').css({background:$('input[name=btn1Color-970x250]').val()});
}
function btn1TxtColor970x250() {
	$('#btn1Txt-970x250').css({color:$('input[name=btn1TxtColor-970x250]').val()});
}
function btn2Color970x250() {
	$('#btn2Txt-970x250').css({background:$('input[name=btn2Color-970x250]').val()});
}
function btn2TxtColor970x250() {
	$('#btn2Txt-970x250').css({color:$('input[name=btn2TxtColor-970x250]').val()});
}

function message1Txt970x250() {
	$('#message1-970x250').html($('input[name=message1Txt-970x250]').val());
}
function messageExtraTxt970x250() {
	$('#messageExtra-970x250').html($('input[name=messageExtraTxt-970x250]').val());
}
function roundelTxt970x250() {
	$('#roundelMessage-970x250').html($('input[name=roundelTxt-970x250]').val());
}

function btn1Txt970x250() {
	$('#btn1Txt-970x250').html($('input[name=btn1Txt-970x250]').val());
}
function btn2Txt970x250() {
	$('#btn2Txt-970x250').html($('input[name=btn2Txt-970x250]').val());
}

function img1970x250() {
	$('input[name=img1-970x250]').val(feed970x250.img1);
	$('#img1-970x250').css({background:'url("'+imgUrlSrc970x250+feed970x250.img1+'") no-repeat'});
}
function imgExtra970x250() {
	$('input[name=imgExtra-970x250]').val(feed970x250.imgExtra);
	$('#imgExtra-970x250').css({background:'url("'+imgUrlSrc970x250+feed970x250.imgExtra+'") no-repeat'});
}
function img2970x250() {
	$('input[name=img2-970x250]').val(feed970x250.img2);
	$('#img2-970x250').css({background:'url("'+imgUrlSrc970x250+feed970x250.img2+'") no-repeat'});
}

function init970x250Content() {	
	document.getElementById('bnrWrapper-970x250').style.display = "block";
	bgColor970x250();
	roundelColor970x250();
			
	logo970x250();
	overlay970x250();
	btn1Color970x250();		
	btn1TxtColor970x250();
	btn2Color970x250();		
	btn2TxtColor970x250();
	
	message1Txt970x250();
	messageExtraTxt970x250();
	roundelTxt970x250();
	
	btn1Txt970x250();
	btn2Txt970x250();
	
	img1970x250();
	imgExtra970x250();
	img2970x250();
	
	messageTxtColor970x250();
	roundelTxtColor970x250();			
}
init970x250Content();

// animation start
var transition970x250 = 1000;
var btnTransition970x250 = 0;
var onScreen970x250 = 3000;
var frameLag970x250 = 500;
var frameDuration970x250 = transition970x250 + onScreen970x250 + frameLag970x250;
var easeIn970x250 = "easeInOutQuad";
var easeOut970x250 = "easeInOutQuad";
var runTime970x250;

function init970x250() {
	runTime970x250 = 0;
	
	$('#logo-970x250').velocity({left: 0}, {easing: easeIn970x250, duration: transition970x250, delay: 0});
	runTime970x250 = runTime970x250 + transition970x250;
	
	$('#btn1-970x250').velocity({opacity: 1}, {easing: easeIn970x250, duration: transition970x250, delay: runTime970x250});
	$('#fade1-970x250').velocity({opacity: 1}, {easing: easeIn970x250, duration: transition970x250, delay: runTime970x250});
	$('#fade1-970x250').velocity({opacity: 0}, {easing: easeOut970x250, duration: (transition970x250/2), delay: onScreen970x250});
	
	runTime970x250 = runTime970x250 + frameDuration970x250;
	
	if(feed970x250.extraFrame === true) {
		$('#fadeExtra-970x250').velocity({opacity: 1}, {easing: easeIn970x250, duration: transition970x250, delay: runTime970x250});
		$('#fadeExtra-970x250').velocity({opacity: 0}, {easing: easeOut970x250, duration: (transition970x250/2), delay: onScreen970x250});
		
		runTime970x250 = runTime970x250 + frameDuration970x250;	
	}
	
	$('#fade2-970x250').velocity({opacity: 1}, {easing: easeIn970x250, duration: transition970x250, delay: runTime970x250});
	
	if(feed970x250.btn1Color === feed970x250.btn2Color) {
		btnTransition970x250 = 0;
	}
	else {
		btnTransition970x250 = transition970x250;
	}
	$('#btn1-970x250').velocity({opacity: 0}, {easing: easeOut970x250, duration: (transition970x250/2), delay: runTime970x250});
	$('#btn2-970x250').velocity({opacity: 1}, {easing: easeIn970x250, duration: transition970x250, delay: runTime970x250});

	runTime970x250 = runTime970x250 + transition970x250;	
}
init970x250();

function initframe1970x250() {
	$('#logo-970x250').css({left: 0});
	$('#btn1-970x250').css({opacity: 1});
	$('#fade1-970x250').css({opacity: 1});
}
function initframeExtra970x250() {
	$('#logo-970x250').css({left: 0});
	$('#btn1-970x250').css({opacity: 1});
	$('#fadeExtra-970x250').css({opacity: 1});
}
function initframe2970x250() {
	$('#logo-970x250').css({left: 0});
	$('#fade2-970x250').css({opacity: 1});
	$('#btn1-970x250').css({opacity: 0});
	$('#btn2-970x250').css({opacity: 1});
}
function reset970x250() {
	destroy970x250();
	build970x250();
}

function extraFrameTrue970x250() {
	$('.frame3-970x250').show();
	$('.extraField-970x250').show();
	positionSliders();
	feed970x250.extraFrame = true;
}
function extraFrameFalse970x250() {
	$('.frame3-970x250').hide();
	$('.extraField-970x250').hide();
	feed970x250.extraFrame = false;
}

function checkExtraFrame970x250() {
	if ($('.extraFrameCheck-970x250 input[class=true]').is(':checked')){
		extraFrameTrue970x250();
	}
	else {
		extraFrameFalse970x250();
	}
}
checkExtraFrame970x250();

$('.replay-970x250').click(function(){
	btnDeselect($(this));
	reset970x250();
	init970x250Content();
	init970x250();
});
$('.frame1-970x250').click(function(){
	btnSelect($(this));
	reset970x250();
	init970x250Content();
	initframe1970x250();
});
$('.frame2-970x250').click(function(){
	btnSelect($(this));
	if(feed970x250.extraFrame === true) {
		reset970x250();
		init970x250Content();
		initframeExtra970x250();
	}
	else {
		reset970x250();
		init970x250Content();
		initframe2970x250();
	}	
});
$('.frame3-970x250').click(function(){
	btnSelect($(this));
	reset970x250();
	init970x250Content();
	initframe2970x250();
});

$('.extraFrameCheck-970x250').click(function() {
	checkExtraFrame970x250();
	$('.replay-970x250')[0].click();
});

$('select[name="logo-970x250"]').on('change', function() {
	logo970x250();
});
$('select[name="overlay-970x250"]').on('change', function() {
	overlay970x250();
});
$('input[name=bgColor-970x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		bgColorMirror($(this));
	}
	else {
		bgColor970x250();
	}
});
$('input[name=roundelColor-970x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelColorMirror($(this));
	}
	else {
		roundelColor970x250();
	}
});
$('input[name=messageTxtColor-970x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		messageTxtColorMirror($(this));
	}
	else {
		messageTxtColor970x250();
	}
});
$('input[name=roundelTxtColor-970x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelTxtColorMirror($(this));
	}
	else {
		roundelTxtColor970x250();
	}
});
$('input[name=btn1Color-970x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1ColorMirror($(this));
	}
	else {
		btn1Color970x250();
	}
});
$('input[name=btn1TxtColor-970x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1TxtColorMirror($(this));
	}
	else {
		btn1TxtColor970x250();
	}
});
$('input[name=btn2Color-970x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2ColorMirror($(this));
	}
	else {
		btn2Color970x250();
	}
});
$('input[name=btn2TxtColor-970x250]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2TxtColorMirror($(this));
	}
	else {
		btn2TxtColor970x250();
	}
});
$('input[name=message1Txt-970x250]').keyup(function() {
	message1Txt970x250();
	messageTxtColor970x250();
});
$('input[name=messageExtraTxt-970x250]').keyup(function() {
	messageExtraTxt970x250();
	messageTxtColor970x250();
});
$('input[name=roundelTxt-970x250]').keyup(function() {
	roundelTxt970x250();
	roundelTxtColor970x250();
});
$('input[name=btn1Txt-970x250]').keyup(function() {
	btn1Txt970x250();
});
$('input[name=btn2Txt-970x250]').keyup(function() {
	btn2Txt970x250();
});	

function selectImg($this) {
	$this.closest('.gallery').find('.galItem').not($this).removeClass('selected');
	$this.addClass('selected');
}

$('.img1 .gallery970x250').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img1-970x250').css({background:'url("'+imgUrlSrc970x250+img+'") no-repeat'});
		selectImg($(this));
		bnrInput970x250[0].img1 = img;
		$('input[name=img1-970x250]').val(bnrInput970x250[0].img1);
	}
});
$('.imgExtra .gallery970x250').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#imgExtra-970x250').css({background:'url("'+imgUrlSrc970x250+img+'") no-repeat'});
		selectImg($(this));
		bnrInput970x250[0].imgExtra = img;
		$('input[name=imgExtra-970x250]').val(bnrInput970x250[0].imgExtra);
	}
});
$('.img2 .gallery970x250').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img2-970x250').css({background:'url("'+imgUrlSrc970x250+img+'") no-repeat'});
		selectImg($(this));
		bnrInput970x250[0].img2 = img;
		$('input[name=img2-970x250]').val(bnrInput970x250[0].img2);
	}
});

function postContactToGoogle970x250() {
	var logoVal970x250 = logoAssetSrc970x250+$('select[name=logo-970x250]').val()+'.svg';
	var overlayVal970x250 = overlayAssetSrc970x250+$('select[name=overlay-970x250]').val()+'.svg';
	var bgColorVal970x250 = $('input[name=bgColor-970x250]').val();
	var btn1ColorVal970x250 = $('input[name=btn1Color-970x250]').val();
	var btn1TxtColorVal970x250 = $('input[name=btn1TxtColor-970x250]').val();
	var btn2ColorVal970x250 = $('input[name=btn1Color-970x250]').val();
	var btn2TxtColorVal970x250 = $('input[name=btn1TxtColor-970x250]').val();
	var mesTxtColorVal970x250 = $('input[name=messageTxtColor-970x250]').val();
	var roundelColorVal970x250 = $('input[name=roundelColor-970x250]').val();
	var roundelTxtColorVal970x250 = $('input[name=roundelTxtColor-970x250]').val();
	var mes1TxtVal970x250 = $('input[name=message1Txt-970x250]').val();
	var mes2TxtVal970x250 = 'N/A';
	var roundelTxtVal970x250 = $('input[name=roundelTxt-970x250]').val();
	var img1Val970x250 = imgAssetSrc970x250+$('input[name=img1-970x250]').val();
	var img2Val970x250 = imgAssetSrc970x250+$('input[name=img2-970x250]').val();
	var btn1TxtVal970x250 = $('input[name=btn1Txt-970x250]').val();
	var btn2TxtVal970x250 = $('input[name=btn2Txt-970x250]').val();
	var exitUrlVal970x250 = $('input[name=exitUrl-970x250]').val();
	var mesExtraTxtVal970x250;
	var imgExtraVal970x250;
	if(feed970x250.extraFrame === true) {
		mesExtraTxtVal970x250 = $('input[name=messageExtraTxt-970x250]').val();
		imgExtraVal970x250 = imgAssetSrc970x250+$('input[name=imgExtra-970x250]').val();
	}
	else {
		mesExtraTxtVal970x250 = 'N/A';
		imgExtraVal970x250 = blankImg;
	}

	$.ajax({
// 		url:"https://docs.google.com/forms/d/e/1FAIpQLScoXI7yC5zk9a0xU_T-gR1pe-QXbbKxMWFnzZJAUfQXOgu1mA/formResponse",
		data:{
			"entry_57793852":logoVal970x250,
			"entry_710629118":overlayVal970x250,
			"entry_1056887831":bgColorVal970x250,
			"entry_1970663478":btn1ColorVal970x250,
			"entry_1439940585":btn1TxtColorVal970x250,
			"entry_2083868184":btn2ColorVal970x250,
			"entry_1585123416":btn2TxtColorVal970x250,
			"entry_243732690":mesTxtColorVal970x250,
			"entry_1029643130":roundelColorVal970x250,
			"entry_2062109151":roundelTxtColorVal970x250,
			"entry_791765641":feed970x250.extraFrame,
			"entry_210126843":mes1TxtVal970x250,
			"entry_28722010":mesExtraTxtVal970x250,
			"entry_1158727021":mes2TxtVal970x250,
			"entry_519432673":roundelTxtVal970x250,
			"entry_302277476":img1Val970x250,
			"entry_1877115306":imgExtraVal970x250,
			"entry_1881036811":img2Val970x250,
			"entry_534078953":btn1TxtVal970x250,
			"entry_843299888":btn2TxtVal970x250,
			"entry_312657314":exitUrlVal970x250,
		},
		type:"POST",
		dataType:"xml",
		statusCode: {}
	});
}

$('#pageWrap').on('click', '.submit-970x250', function(){
	postContactToGoogle970x250();
});