var logoAssetSrc480x320 = '480x320/logos/havBnr17-480x320-';
var logoUrlSrc480x320 = 'https://s0.2mdn.net/creatives/assets/2050344/havBnr17-480x320-';
var overlayAssetSrc480x320 = '480x320/overlays/havBnr17-480x320-';
var overlayUrlSrc480x320 = 'https://s0.2mdn.net/creatives/assets/2050380/havBnr17-480x320-';
var imgAssetSrc480x320 = '480x320/imgs/havBnr17-480x320-';
var imgUrlSrc480x320 = 'https://s0.2mdn.net/creatives/assets/2047634/havBnr17-480x320-';

var imgStore480x320 = {};	
imgStore480x320[0] = {};
imgStore480x320[0][0] = [imgUrlSrc480x320+'br_sandart_01_2015.jpg', 'br_sandart_01_2015.jpg', '', 'selected', ''];
imgStore480x320[0][1] = [imgUrlSrc480x320+'ct_beach_12_13.jpg', 'ct_beach_12_13.jpg', 'selected', '', ''];
imgStore480x320[0][2] = [imgUrlSrc480x320+'ha_aerialadventure_10_2015.jpg', 'ha_aerialadventure_10_2015.jpg', '', '', 'selected'];
imgStore480x320[0][3] = [imgUrlSrc480x320+'hm_boatinglake_11_2015.jpg', 'hm_boatinglake_11_2015.jpg', '', '', ''];
imgStore480x320[0][4] = [imgUrlSrc480x320+'hm_naturerockz_beach_01_2015.jpg', 'hm_naturerockz_beach_01_2015.jpg', '', '', ''];
imgStore480x320[0][5] = [imgUrlSrc480x320+'kp_beachwalkfam_03_2014.jpg', 'kp_beachwalkfam_03_2014.jpg', '', '', ''];
imgStore480x320[0][6] = [imgUrlSrc480x320+'kp_beachwalkfam_05_2014.jpg', 'kp_beachwalkfam_05_2014.jpg', '', '', ''];
imgStore480x320[0][7] = [imgUrlSrc480x320+'la_woodlandwalk_06_2013.jpg', 'la_woodlandwalk_06_2013.jpg', '', '', ''];
imgStore480x320[0][8] = [imgUrlSrc480x320+'pv_naturerockz_beachcombing_01_2014.jpg', 'pv_naturerockz_beachcombing_01_2014.jpg', '', '', ''];
imgStore480x320[0][9] = [imgUrlSrc480x320+'pv_naturerockz_beachcombing_03_2014.jpg', 'pv_naturerockz_beachcombing_03_2014.jpg', '', '', ''];
imgStore480x320[0][10] = [imgUrlSrc480x320+'pv_naturerockz_beachcombing_22_2014.jpg', 'pv_naturerockz_beachcombing_22_2014.jpg', '', '', ''];
imgStore480x320[0][11] = [imgUrlSrc480x320+'qw_ropescourse_07_2015.jpg', 'qw_ropescourse_07_2015.jpg', '', '', ''];
imgStore480x320[0][12] = [imgUrlSrc480x320+'rp_beachdadgirl_03_2015.jpg', 'rp_beachdadgirl_03_2015.jpg', '', '', ''];
imgStore480x320[0][13] = [imgUrlSrc480x320+'rv_beachkids_07_12.jpg', 'rv_beachkids_07_12.jpg', '', '', ''];
imgStore480x320[0][14] = [imgUrlSrc480x320+'rv_beachtotboat_04_2013.jpg', 'rv_beachtotboat_04_2013.jpg', '', '', ''];
imgStore480x320[0][15] = [imgUrlSrc480x320+'sa_mashbarrelterrace_09_2015.jpg', 'sa_mashbarrelterrace_09_2015.jpg', '', '', ''];

var img1HowMany480x320 = Object.keys(imgStore480x320[0]).length;
for (var ia = 0; ia < img1HowMany480x320; ia++ ) {
	$('.img1 .gallery480x320').append('<div class="galItem '+imgStore480x320[0][ia][2]+'"><div class="img"><img title="'+imgStore480x320[0][ia][1]+'" src="'+thumbImg+imgStore480x320[0][ia][1]+'"/></div></div>');
	$('.img2 .gallery480x320').append('<div class="galItem '+imgStore480x320[0][ia][3]+'"><div class="img"><img title="'+imgStore480x320[0][ia][1]+'" src="'+thumbImg+imgStore480x320[0][ia][1]+'"/></div></div>');
	$('.imgExtra .gallery480x320').append('<div class="galItem '+imgStore480x320[0][ia][4]+'"><div class="img"><img title="'+imgStore480x320[0][ia][1]+'" src="'+thumbImg+imgStore480x320[0][ia][1]+'"/></div></div>');
}

var bnrInput480x320 = {};
bnrInput480x320= [{}];
bnrInput480x320[0].bgColor = "#F1B434";
bnrInput480x320[0].messageTxtColor = "#ffffff";
bnrInput480x320[0].roundelColor = "#ffffff";
bnrInput480x320[0].roundelTxtColor = "#719949";
bnrInput480x320[0].btn1Color = "#ffffff";
bnrInput480x320[0].btn1TxtColor = "#719949";
bnrInput480x320[0].btn2Color = "#719949";
bnrInput480x320[0].btn2TxtColor = "#ffffff";
bnrInput480x320[0].logo = "havenWhiteLogo";
bnrInput480x320[0].overlay = "circles";
bnrInput480x320[0].extraFrame = false;
bnrInput480x320[0].message1Txt = '<p class="font-gd font-50 font-margin5">Get ready</p><p class="font-25">for your 2017 holiday</p>';
bnrInput480x320[0].messageExtraTxt = '<p class="font-gd font-50">Extra frame</p>';
bnrInput480x320[0].roundelTxt = '<p class="font-gd font-35 font-margin5">Spring breaks</p><p class="font-20">from only</p><p class="font-bold font-40">£79</p><p class="font-20">for the whole family</p>';
bnrInput480x320[0].btn1Txt = "View offers >";
bnrInput480x320[0].btn2Txt = "View offers >";
bnrInput480x320[0].img1 = imgStore480x320[0][1][1];
bnrInput480x320[0].imgExtra = imgStore480x320[0][2][1];
bnrInput480x320[0].img2 = imgStore480x320[0][0][1];
bnrInput480x320[0].exitUrl = "https://www.haven.com/";

var bnrBuild480x320 = '<div id="bnrWrapper-480x320"><div id="logo-480x320"></div><div id="innerWrap-480x320"><div id="btnWrap-480x320"><div id="btn1-480x320" class="btn-480x320"><p id="btn1Txt-480x320"></p></div><div id="btn2-480x320" class="btn-480x320"><p id="btn2Txt-480x320"></p></div></div><div id="overlay-480x320"></div><div id="fade1-480x320" class="fade"><div id="message1Wrap-480x320" class="messageWrap"><div id="message1-480x320" class="message"></div></div><div id="img1-480x320" class="img"></div></div><div id="fadeExtra-480x320" class="fade"><div id="messageExtraWrap-480x320" class="messageWrap"><div id="messageExtra-480x320" class="message"></div></div><div id="imgExtra-480x320" class="img"></div></div><div id="fade2-480x320" class="fade"><div id="message2Wrap-480x320" class="messageWrap"><div id="message2-480x320" class="message"></div></div><div id="img2-480x320" class="img"></div><div id="roundelWrap-480x320"><div id="roundelMessage-480x320"></div><svg version="1.1" id="roundel-480x320" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.9 67.2" xml:space="preserve"><path d="M70.6,27.9c0-0.3-0.1-0.5-0.2-0.8V27c-1.2-5.9-5.1-10.6-10.2-14.3c-0.9-1.2-1.8-2.3-2.9-3.4C46.9-1.3,30.8-2.8,18.7,4.6 c-5.5,1.2-10.4,3.8-14,8.2c-5.7,7.1-5.5,16.4-2.8,25c1.5,4.9,3.8,9.6,6.2,13.5c3.6,5.8,8.5,11.4,14.8,14.2c4,1.8,8.3,2,12.5,1.3 c1.5-0.2,3.1-0.5,4.7-1c13.7-4.1,29.8-18.1,30.8-33.2C70.9,31,70.8,29.4,70.6,27.9z M28.7,66.1c-5.5-1.1-10.2-4.6-13.9-8.7 C8.4,50.2,3,40.1,2,30c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.2-3,0.1-6,0.8-8.8c2-7.2,7-11.5,13.2-13.9c-1,0.8-2.1,1.7-3,2.6 C0.7,21.3,0.6,41.2,12.8,53.5s32.1,12.4,44.4,0.2C67.1,43.8,69.1,28.9,63,17c1.8,2,3.4,4.2,4.5,6.7c0.7,1.5,1.1,3.1,1.4,4.6 c1.9,12.7-8.8,24.4-18.5,31.2c-4.1,2.9-9,5.6-14.1,6.7C33.8,66.5,31.2,66.6,28.7,66.1z"/></svg></div></div></div></div>';
function build480x320() {
	$('.bnrWrap.bnr480x320').append(bnrBuild480x320);
}
build480x320();
function destroy480x320() {
	$('.bnrWrap.bnr480x320').empty();
}

var feed480x320 = bnrInput480x320[0];

$('select[name=logo-480x320]').val(feed480x320.logo);
$('select[name=overlay-480x320]').val(feed480x320.overlay);
$('input[name=bgColor-480x320]').val(feed480x320.bgColor);
$('input[name=bgColor-480x320]').parents('.pickerWrap').find('.swatch').css({background: feed480x320.bgColor});
$('input[name=messageTxtColor-480x320]').val(feed480x320.messageTxtColor);
$('input[name=messageTxtColor-480x320]').parents('.pickerWrap').find('.swatch').css({background: feed480x320.messageTxtColor});
$('input[name=roundelColor-480x320]').val(feed480x320.roundelColor);
$('input[name=roundelColor-480x320]').parents('.pickerWrap').find('.swatch').css({background: feed480x320.roundelColor});
$('input[name=roundelTxtColor-480x320]').val(feed480x320.roundelTxtColor);
$('input[name=roundelTxtColor-480x320]').parents('.pickerWrap').find('.swatch').css({background: feed480x320.roundelTxtColor});

$('input[name=btn1Color-480x320]').val(feed480x320.btn1Color);
$('input[name=btn1Color-480x320]').parents('.pickerWrap').find('.swatch').css({background: feed480x320.btn1Color});
$('input[name=btn1TxtColor-480x320]').val(feed480x320.btn1TxtColor);
$('input[name=btn1TxtColor-480x320]').parents('.pickerWrap').find('.swatch').css({background: feed480x320.btn1TxtColor});
$('input[name=btn2Color-480x320]').val(feed480x320.btn2Color);
$('input[name=btn2Color-480x320]').parents('.pickerWrap').find('.swatch').css({background: feed480x320.btn2Color});
$('input[name=btn2TxtColor-480x320]').val(feed480x320.btn2TxtColor);
$('input[name=btn2TxtColor-480x320]').parents('.pickerWrap').find('.swatch').css({background: feed480x320.btn2TxtColor});

$('input[name=message1Txt-480x320]').val(feed480x320.message1Txt);
$('input[name=messageExtraTxt-480x320]').val(feed480x320.messageExtraTxt);
$('input[name=roundelTxt-480x320]').val(feed480x320.roundelTxt);

$('input[name=btn1Txt-480x320]').val(feed480x320.btn1Txt);
$('input[name=btn2Txt-480x320]').val(feed480x320.btn2Txt);

$('input[name=exitUrl-480x320]').val(feed480x320.exitUrl);

function bgColor480x320() {
	$('#bnrWrapper-480x320').css({background:$('input[name=bgColor-480x320]').val()});
}

function messageTxtColor480x320() {
	$('#message1-480x320, #messageExtra-480x320, #message2-480x320').find('p').css({color:$('input[name=messageTxtColor-480x320]').val()});
}

function roundelColor480x320() {
	$('#roundel-480x320').css({fill:$('input[name=roundelColor-480x320]').val()});
}

function roundelTxtColor480x320() {
	$('#roundelMessage-480x320').find('p').css({color:$('input[name=roundelTxtColor-480x320]').val()});
}

function logo480x320() {
	for (var i = 0; i < whichLogo.length; i++ ) {
		if($('select[name=logo-480x320]').val() === whichLogo[i]) {
			$('#logo-480x320').css({background:'url("'+logoUrlSrc480x320+whichLogo[i]+'.svg") no-repeat'});
		}
	}	
}

function overlay480x320() {
	for (var i = 0; i < whichOverlay.length; i++ ) {
		if($('select[name=overlay-480x320]').val() === whichOverlay[i]) {
			$('#overlay-480x320').css({background:'url("'+overlayUrlSrc480x320+whichOverlay[i]+'.svg") no-repeat'});
		}	
	}
}

function btn1Color480x320() {
	$('#btn1Txt-480x320').css({background:$('input[name=btn1Color-480x320]').val()});
}
function btn1TxtColor480x320() {
	$('#btn1Txt-480x320').css({color:$('input[name=btn1TxtColor-480x320]').val()});
}
function btn2Color480x320() {
	$('#btn2Txt-480x320').css({background:$('input[name=btn2Color-480x320]').val()});
}
function btn2TxtColor480x320() {
	$('#btn2Txt-480x320').css({color:$('input[name=btn2TxtColor-480x320]').val()});
}

function message1Txt480x320() {
	$('#message1-480x320').html($('input[name=message1Txt-480x320]').val());
}
function messageExtraTxt480x320() {
	$('#messageExtra-480x320').html($('input[name=messageExtraTxt-480x320]').val());
}
function roundelTxt480x320() {
	$('#roundelMessage-480x320').html($('input[name=roundelTxt-480x320]').val());
}

function btn1Txt480x320() {
	$('#btn1Txt-480x320').html($('input[name=btn1Txt-480x320]').val());
}
function btn2Txt480x320() {
	$('#btn2Txt-480x320').html($('input[name=btn2Txt-480x320]').val());
}

function img1480x320() {
	$('input[name=img1-480x320]').val(feed480x320.img1);
	$('#img1-480x320').css({background:'url("'+imgUrlSrc480x320+feed480x320.img1+'") no-repeat'});
}
function imgExtra480x320() {
	$('input[name=imgExtra-480x320]').val(feed480x320.imgExtra);
	$('#imgExtra-480x320').css({background:'url("'+imgUrlSrc480x320+feed480x320.imgExtra+'") no-repeat'});
}
function img2480x320() {
	$('input[name=img2-480x320]').val(feed480x320.img2);
	$('#img2-480x320').css({background:'url("'+imgUrlSrc480x320+feed480x320.img2+'") no-repeat'});
}

function init480x320Content() {	
	document.getElementById('bnrWrapper-480x320').style.display = "block";
	bgColor480x320();
	roundelColor480x320();
			
	logo480x320();
	overlay480x320();
	btn1Color480x320();		
	btn1TxtColor480x320();
	btn2Color480x320();		
	btn2TxtColor480x320();
	
	message1Txt480x320();
	messageExtraTxt480x320();
	roundelTxt480x320();
	
	btn1Txt480x320();
	btn2Txt480x320();
	
	img1480x320();
	imgExtra480x320();
	img2480x320();
	
	messageTxtColor480x320();
	roundelTxtColor480x320();			
}
init480x320Content();

// animation start
var transition480x320 = 1000;
var btnTransition480x320 = 0;
var onScreen480x320 = 3000;
var frameLag480x320 = 500;
var frameDuration480x320 = transition480x320 + onScreen480x320 + frameLag480x320;
var easeIn480x320 = "easeInOutQuad";
var easeOut480x320 = "easeInOutQuad";
var runTime480x320;

function init480x320() {
	runTime480x320 = 0;
	
	$('#logo-480x320').velocity({top: 0}, {easing: easeIn480x320, duration: transition480x320, delay: 0});
	$('#btnWrap-480x320').velocity({bottom: 9}, {easing: easeIn480x320, duration: transition480x320, delay: 0});
	runTime480x320 = runTime480x320 + transition480x320;
	
	$('#fade1-480x320').velocity({opacity: 1}, {easing: easeIn480x320, duration: transition480x320, delay: runTime480x320});
	$('#fade1-480x320').velocity({opacity: 0}, {easing: easeOut480x320, duration: (transition480x320/2), delay: onScreen480x320});
	
	runTime480x320 = runTime480x320 + frameDuration480x320;
	
	if(feed480x320.extraFrame === true) {
		$('#fadeExtra-480x320').velocity({opacity: 1}, {easing: easeIn480x320, duration: transition480x320, delay: runTime480x320});
		$('#fadeExtra-480x320').velocity({opacity: 0}, {easing: easeOut480x320, duration: (transition480x320/2), delay: onScreen480x320});
		
		runTime480x320 = runTime480x320 + frameDuration480x320;	
	}
	
	$('#fade2-480x320').velocity({opacity: 1}, {easing: easeIn480x320, duration: transition480x320, delay: runTime480x320});
	
	if(feed480x320.btn1Color === feed480x320.btn2Color) {
		btnTransition480x320 = 0;
	}
	else {
		btnTransition480x320 = transition480x320;
	}
	$('#btn1-480x320').velocity({opacity: 0}, {easing: easeOut480x320, duration: (transition480x320/2), delay: runTime480x320});
	$('#btn2-480x320').velocity({opacity: 1}, {easing: easeIn480x320, duration: transition480x320, delay: runTime480x320});

	runTime480x320 = runTime480x320 + transition480x320;
}
init480x320();

function initframe1480x320() {
	$('#logo-480x320').css({top: 0});
	$('#btnWrap-480x320').css({bottom: 9});
	$('#fade1-480x320').css({opacity: 1});
}
function initframeExtra480x320() {
	$('#logo-480x320').css({top: 0});
	$('#btnWrap-480x320').css({bottom: 9});
	$('#fadeExtra-480x320').css({opacity: 1});
}
function initframe2480x320() {
	$('#logo-480x320').css({top: 0});
 	$('#btnWrap-480x320').css({bottom: 9});
	$('#fade2-480x320').css({opacity: 1});
	$('#btn1-480x320').css({opacity: 0});
	$('#btn2-480x320').css({opacity: 1});
}
function reset480x320() {
	destroy480x320();
	build480x320();
}

function extraFrameTrue480x320() {
	$('.frame3-480x320').show();
	$('.extraField-480x320').show();
	positionSliders();
	feed480x320.extraFrame = true;
}
function extraFrameFalse480x320() {
	$('.frame3-480x320').hide();
	$('.extraField-480x320').hide();
	feed480x320.extraFrame = false;
}

function checkExtraFrame480x320() {
	if ($('.extraFrameCheck-480x320 input[class=true]').is(':checked')){
		extraFrameTrue480x320();
	}
	else {
		extraFrameFalse480x320();
	}
}
checkExtraFrame480x320();

$('.replay-480x320').click(function(){
	btnDeselect($(this));
	reset480x320();
	init480x320Content();
	init480x320();
});
$('.frame1-480x320').click(function(){
	btnSelect($(this));
	reset480x320();
	init480x320Content();
	initframe1480x320();
});
$('.frame2-480x320').click(function(){
	btnSelect($(this));
	if(feed480x320.extraFrame === true) {
		reset480x320();
		init480x320Content();
		initframeExtra480x320();
	}
	else {
		reset480x320();
		init480x320Content();
		initframe2480x320();
	}	
});
$('.frame3-480x320').click(function(){
	btnSelect($(this));
	reset480x320();
	init480x320Content();
	initframe2480x320();
});

$('.extraFrameCheck-480x320').click(function() {
	checkExtraFrame480x320();
	$('.replay-480x320')[0].click();
});

$('select[name="logo-480x320"]').on('change', function() {
	logo480x320();
});
$('select[name="overlay-480x320"]').on('change', function() {
	overlay480x320();
});
$('input[name=bgColor-480x320]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		bgColorMirror($(this));
	}
	else {
		bgColor480x320();
	}
});
$('input[name=roundelColor-480x320]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelColorMirror($(this));
	}
	else {
		roundelColor480x320();
	}
});
$('input[name=messageTxtColor-480x320]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		messageTxtColorMirror($(this));
	}
	else {
		messageTxtColor480x320();
	}
});
$('input[name=roundelTxtColor-480x320]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelTxtColorMirror($(this));
	}
	else {
		roundelTxtColor480x320();
	}
});
$('input[name=btn1Color-480x320]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1ColorMirror($(this));
	}
	else {
		btn1Color480x320();
	}
});
$('input[name=btn1TxtColor-480x320]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1TxtColorMirror($(this));
	}
	else {
		btn1TxtColor480x320();
	}
});
$('input[name=btn2Color-480x320]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2ColorMirror($(this));
	}
	else {
		btn2Color480x320();
	}
});
$('input[name=btn2TxtColor-480x320]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2TxtColorMirror($(this));
	}
	else {
		btn2TxtColor480x320();
	}
});
$('input[name=message1Txt-480x320]').keyup(function() {
	message1Txt480x320();
	messageTxtColor480x320();
});
$('input[name=messageExtraTxt-480x320]').keyup(function() {
	messageExtraTxt480x320();
	messageTxtColor480x320();
});
$('input[name=roundelTxt-480x320]').keyup(function() {
	roundelTxt480x320();
	roundelTxtColor480x320();
});
$('input[name=btn1Txt-480x320]').keyup(function() {
	btn1Txt480x320();
});
$('input[name=btn2Txt-480x320]').keyup(function() {
	btn2Txt480x320();
});	

function selectImg($this) {
	$this.closest('.gallery').find('.galItem').not($this).removeClass('selected');
	$this.addClass('selected');
}

$('.img1 .gallery480x320').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img1-480x320').css({background:'url("'+imgUrlSrc480x320+img+'") no-repeat'});
		selectImg($(this));
		bnrInput480x320[0].img1 = img;
		$('input[name=img1-480x320]').val(bnrInput480x320[0].img1);
	}
});
$('.imgExtra .gallery480x320').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#imgExtra-480x320').css({background:'url("'+imgUrlSrc480x320+img+'") no-repeat'});
		selectImg($(this));
		bnrInput480x320[0].imgExtra = img;
		$('input[name=imgExtra-480x320]').val(bnrInput480x320[0].imgExtra);
	}
});
$('.img2 .gallery480x320').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img2-480x320').css({background:'url("'+imgUrlSrc480x320+img+'") no-repeat'});
		selectImg($(this));
		bnrInput480x320[0].img2 = img;
		$('input[name=img2-480x320]').val(bnrInput480x320[0].img2);
	}
});

function postContactToGoogle480x320() {
	var logoVal480x320 = logoAssetSrc480x320+$('select[name=logo-480x320]').val()+'.svg';
	var overlayVal480x320 = overlayAssetSrc480x320+$('select[name=overlay-480x320]').val()+'.svg';
	var bgColorVal480x320 = $('input[name=bgColor-480x320]').val();
	var btn1ColorVal480x320 = $('input[name=btn1Color-480x320]').val();
	var btn1TxtColorVal480x320 = $('input[name=btn1TxtColor-480x320]').val();
	var btn2ColorVal480x320 = $('input[name=btn1Color-480x320]').val();
	var btn2TxtColorVal480x320 = $('input[name=btn1TxtColor-480x320]').val();
	var mesTxtColorVal480x320 = $('input[name=messageTxtColor-480x320]').val();
	var roundelColorVal480x320 = $('input[name=roundelColor-480x320]').val();
	var roundelTxtColorVal480x320 = $('input[name=roundelTxtColor-480x320]').val();
	var mes1TxtVal480x320 = $('input[name=message1Txt-480x320]').val();
	var mes2TxtVal480x320 = 'N/A';
	var roundelTxtVal480x320 = $('input[name=roundelTxt-480x320]').val();
	var img1Val480x320 = imgAssetSrc480x320+$('input[name=img1-480x320]').val();
	var img2Val480x320 = imgAssetSrc480x320+$('input[name=img2-480x320]').val();
	var btn1TxtVal480x320 = $('input[name=btn1Txt-480x320]').val();
	var btn2TxtVal480x320 = $('input[name=btn2Txt-480x320]').val();
	var exitUrlVal480x320 = $('input[name=exitUrl-480x320]').val();
	var mesExtraTxtVal480x320;
	var imgExtraVal480x320;
	if(feed480x320.extraFrame === true) {
		mesExtraTxtVal480x320 = $('input[name=messageExtraTxt-480x320]').val();
		imgExtraVal480x320 = imgAssetSrc480x320+$('input[name=imgExtra-480x320]').val();
	}
	else {
		mesExtraTxtVal480x320 = 'N/A';
		imgExtraVal480x320 = blankImg;
	}

	$.ajax({
// 		url:"https://docs.google.com/forms/d/e/1FAIpQLSdONL7og1RJjOVWqIbMdbO9aSgPybg4iu9U85wZtHtYGfhexg/formResponse",
		data:{
			"entry_57793852":logoVal480x320,
			"entry_710629118":overlayVal480x320,
			"entry_1056887831":bgColorVal480x320,
			"entry_1970663478":btn1ColorVal480x320,
			"entry_1439940585":btn1TxtColorVal480x320,
			"entry_2083868184":btn2ColorVal480x320,
			"entry_1585123416":btn2TxtColorVal480x320,
			"entry_243732690":mesTxtColorVal480x320,
			"entry_1029643130":roundelColorVal480x320,
			"entry_2062109151":roundelTxtColorVal480x320,
			"entry_791765641":feed480x320.extraFrame,
			"entry_210126843":mes1TxtVal480x320,
			"entry_28722010":mesExtraTxtVal480x320,
			"entry_1158727021":mes2TxtVal480x320,
			"entry_519432673":roundelTxtVal480x320,
			"entry_302277476":img1Val480x320,
			"entry_1877115306":imgExtraVal480x320,
			"entry_1881036811":img2Val480x320,
			"entry_534078953":btn1TxtVal480x320,
			"entry_843299888":btn2TxtVal480x320,
			"entry_312657314":exitUrlVal480x320,
		},
		type:"POST",
		dataType:"xml",
		statusCode: {}
	});
}

$('#pageWrap').on('click', '.submit-480x320', function(){
	postContactToGoogle480x320();
});