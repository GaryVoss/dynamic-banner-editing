var logoAssetSrc160x600 = '160x600/logos/havBnr17-160x600-';
var logoUrlSrc160x600 = 'https://s0.2mdn.net/creatives/assets/2050281/havBnr17-160x600-';
var overlayAssetSrc160x600 = '160x600/overlays/havBnr17-160x600-';
var overlayUrlSrc160x600 = 'https://s0.2mdn.net/creatives/assets/2050278/havBnr17-160x600-';
var imgAssetSrc160x600 = '160x600/imgs/havBnr17-160x600-';
var imgUrlSrc160x600 = 'https://s0.2mdn.net/creatives/assets/2050275/havBnr17-160x600-';

var imgStore160x600 = {};	
imgStore160x600[0] = {};
imgStore160x600[0][0] = [imgUrlSrc160x600+'br_sandart_01_2015.jpg', 'br_sandart_01_2015.jpg', '', 'selected', ''];
imgStore160x600[0][1] = [imgUrlSrc160x600+'ct_beach_12_13.jpg', 'ct_beach_12_13.jpg', 'selected', '', ''];
imgStore160x600[0][2] = [imgUrlSrc160x600+'ha_aerialadventure_10_2015.jpg', 'ha_aerialadventure_10_2015.jpg', '', '', 'selected'];
imgStore160x600[0][3] = [imgUrlSrc160x600+'hm_boatinglake_11_2015.jpg', 'hm_boatinglake_11_2015.jpg', '', '', ''];
imgStore160x600[0][4] = [imgUrlSrc160x600+'hm_naturerockz_beach_01_2015.jpg', 'hm_naturerockz_beach_01_2015.jpg', '', '', ''];
imgStore160x600[0][5] = [imgUrlSrc160x600+'kp_beachwalkfam_03_2014.jpg', 'kp_beachwalkfam_03_2014.jpg', '', '', ''];
imgStore160x600[0][6] = [imgUrlSrc160x600+'kp_beachwalkfam_05_2014.jpg', 'kp_beachwalkfam_05_2014.jpg', '', '', ''];
imgStore160x600[0][7] = [imgUrlSrc160x600+'la_woodlandwalk_06_2013.jpg', 'la_woodlandwalk_06_2013.jpg', '', '', ''];
imgStore160x600[0][8] = [imgUrlSrc160x600+'pv_naturerockz_beachcombing_01_2014.jpg', 'pv_naturerockz_beachcombing_01_2014.jpg', '', '', ''];
imgStore160x600[0][9] = [imgUrlSrc160x600+'pv_naturerockz_beachcombing_03_2014.jpg', 'pv_naturerockz_beachcombing_03_2014.jpg', '', '', ''];
imgStore160x600[0][10] = [imgUrlSrc160x600+'pv_naturerockz_beachcombing_22_2014.jpg', 'pv_naturerockz_beachcombing_22_2014.jpg', '', '', ''];
imgStore160x600[0][11] = [imgUrlSrc160x600+'qw_ropescourse_07_2015.jpg', 'qw_ropescourse_07_2015.jpg', '', '', ''];
imgStore160x600[0][12] = [imgUrlSrc160x600+'rp_beachdadgirl_03_2015.jpg', 'rp_beachdadgirl_03_2015.jpg', '', '', ''];
imgStore160x600[0][13] = [imgUrlSrc160x600+'rv_beachkids_07_12.jpg', 'rv_beachkids_07_12.jpg', '', '', ''];
imgStore160x600[0][14] = [imgUrlSrc160x600+'rv_beachtotboat_04_2013.jpg', 'rv_beachtotboat_04_2013.jpg', '', '', ''];
imgStore160x600[0][15] = [imgUrlSrc160x600+'sa_mashbarrelterrace_09_2015.jpg', 'sa_mashbarrelterrace_09_2015.jpg', '', '', ''];

var img1HowMany160x600 = Object.keys(imgStore160x600[0]).length;
for (var ia = 0; ia < img1HowMany160x600; ia++ ) {
	$('.img1 .gallery160x600').append('<div class="galItem '+imgStore160x600[0][ia][2]+'"><div class="img"><img title="'+imgStore160x600[0][ia][1]+'" src="'+thumbImg+imgStore160x600[0][ia][1]+'"/></div></div>');
	$('.img2 .gallery160x600').append('<div class="galItem '+imgStore160x600[0][ia][3]+'"><div class="img"><img title="'+imgStore160x600[0][ia][1]+'" src="'+thumbImg+imgStore160x600[0][ia][1]+'"/></div></div>');
	$('.imgExtra .gallery160x600').append('<div class="galItem '+imgStore160x600[0][ia][4]+'"><div class="img"><img title="'+imgStore160x600[0][ia][1]+'" src="'+thumbImg+imgStore160x600[0][ia][1]+'"/></div></div>');
}

var bnrInput160x600 = {};
bnrInput160x600= [{}];
bnrInput160x600[0].bgColor = "#F1B434";
bnrInput160x600[0].messageTxtColor = "#ffffff";
bnrInput160x600[0].roundelColor = "#ffffff";
bnrInput160x600[0].roundelTxtColor = "#719949";
bnrInput160x600[0].btn1Color = "#ffffff";
bnrInput160x600[0].btn1TxtColor = "#719949";
bnrInput160x600[0].btn2Color = "#ffffff";
bnrInput160x600[0].btn2TxtColor = "#719949";
bnrInput160x600[0].logo = "havenWhiteLogo";
bnrInput160x600[0].overlay = "circles";
bnrInput160x600[0].extraFrame = false;
bnrInput160x600[0].message1Txt = '<p class="font-gd font-50">Get ready</p><p class="font-25">for your 2017 holiday</p>';
bnrInput160x600[0].messageExtraTxt = '<p class="font-gd font-50">Extra frame</p>';
bnrInput160x600[0].message2Txt = '<p class="font-gd font-50">Spring breaks</p>';
bnrInput160x600[0].roundelTxt = '<p class="font-18">from only</p><p class="font-bold font-40">£79</p><p class="font-18">for the whole family</p>';
bnrInput160x600[0].btn1Txt = "View offers >";
bnrInput160x600[0].btn2Txt = "View offers >";
bnrInput160x600[0].img1 = imgStore160x600[0][1][1];
bnrInput160x600[0].imgExtra = imgStore160x600[0][2][1];
bnrInput160x600[0].img2 = imgStore160x600[0][0][1];
bnrInput160x600[0].exitUrl = "https://www.haven.com/";

var bnrBuild160x600 = '<div id="bnrWrapper-160x600"><div id="logo-160x600"></div><div id="innerWrap-160x600"><div id="btnWrap-160x600"><div id="btn1-160x600" class="btn-160x600"><p id="btn1Txt-160x600"></p></div><div id="btn2-160x600" class="btn-160x600"><p id="btn2Txt-160x600"></p></div></div><div id="overlay-160x600"></div><div id="fade1-160x600" class="fade"><div id="message1Wrap-160x600" class="messageWrap"><div id="message1-160x600" class="message"></div></div><div id="img1-160x600" class="img"></div></div><div id="fadeExtra-160x600" class="fade"><div id="messageExtraWrap-160x600" class="messageWrap"><div id="messageExtra-160x600" class="message"></div></div><div id="imgExtra-160x600" class="img"></div></div><div id="fade2-160x600" class="fade"><div id="message2Wrap-160x600" class="messageWrap"><div id="message2-160x600" class="message"></div></div><div id="img2-160x600" class="img"></div><div id="roundelWrap-160x600"><div id="roundelMessage-160x600"></div><svg version="1.1" id="roundel-160x600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 70.9 67.2" xml:space="preserve"><path d="M70.6,27.9c0-0.3-0.1-0.5-0.2-0.8V27c-1.2-5.9-5.1-10.6-10.2-14.3c-0.9-1.2-1.8-2.3-2.9-3.4C46.9-1.3,30.8-2.8,18.7,4.6 c-5.5,1.2-10.4,3.8-14,8.2c-5.7,7.1-5.5,16.4-2.8,25c1.5,4.9,3.8,9.6,6.2,13.5c3.6,5.8,8.5,11.4,14.8,14.2c4,1.8,8.3,2,12.5,1.3 c1.5-0.2,3.1-0.5,4.7-1c13.7-4.1,29.8-18.1,30.8-33.2C70.9,31,70.8,29.4,70.6,27.9z M28.7,66.1c-5.5-1.1-10.2-4.6-13.9-8.7 C8.4,50.2,3,40.1,2,30c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.2-3,0.1-6,0.8-8.8c2-7.2,7-11.5,13.2-13.9c-1,0.8-2.1,1.7-3,2.6 C0.7,21.3,0.6,41.2,12.8,53.5s32.1,12.4,44.4,0.2C67.1,43.8,69.1,28.9,63,17c1.8,2,3.4,4.2,4.5,6.7c0.7,1.5,1.1,3.1,1.4,4.6 c1.9,12.7-8.8,24.4-18.5,31.2c-4.1,2.9-9,5.6-14.1,6.7C33.8,66.5,31.2,66.6,28.7,66.1z"/></svg></div></div></div></div>';
function build160x600() {
	$('.bnrWrap.bnr160x600').append(bnrBuild160x600);
}
build160x600();
function destroy160x600() {
	$('.bnrWrap.bnr160x600').empty();
}

var feed160x600 = bnrInput160x600[0];

$('select[name=logo-160x600]').val(feed160x600.logo);
$('select[name=overlay-160x600]').val(feed160x600.overlay);
$('input[name=bgColor-160x600]').val(feed160x600.bgColor);
$('input[name=bgColor-160x600]').parents('.pickerWrap').find('.swatch').css({background: feed160x600.bgColor});
$('input[name=messageTxtColor-160x600]').val(feed160x600.messageTxtColor);
$('input[name=messageTxtColor-160x600]').parents('.pickerWrap').find('.swatch').css({background: feed160x600.messageTxtColor});
$('input[name=roundelColor-160x600]').val(feed160x600.roundelColor);
$('input[name=roundelColor-160x600]').parents('.pickerWrap').find('.swatch').css({background: feed160x600.roundelColor});
$('input[name=roundelTxtColor-160x600]').val(feed160x600.roundelTxtColor);
$('input[name=roundelTxtColor-160x600]').parents('.pickerWrap').find('.swatch').css({background: feed160x600.roundelTxtColor});

$('input[name=btn1Color-160x600]').val(feed160x600.btn1Color);
$('input[name=btn1Color-160x600]').parents('.pickerWrap').find('.swatch').css({background: feed160x600.btn1Color});
$('input[name=btn1TxtColor-160x600]').val(feed160x600.btn1TxtColor);
$('input[name=btn1TxtColor-160x600]').parents('.pickerWrap').find('.swatch').css({background: feed160x600.btn1TxtColor});
$('input[name=btn2Color-160x600]').val(feed160x600.btn2Color);
$('input[name=btn2Color-160x600]').parents('.pickerWrap').find('.swatch').css({background: feed160x600.btn2Color});
$('input[name=btn2TxtColor-160x600]').val(feed160x600.btn2TxtColor);
$('input[name=btn2TxtColor-160x600]').parents('.pickerWrap').find('.swatch').css({background: feed160x600.btn2TxtColor});

$('input[name=message1Txt-160x600]').val(feed160x600.message1Txt);
$('input[name=messageExtraTxt-160x600]').val(feed160x600.messageExtraTxt);
$('input[name=message2Txt-160x600]').val(feed160x600.message2Txt);
$('input[name=roundelTxt-160x600]').val(feed160x600.roundelTxt);

$('input[name=btn1Txt-160x600]').val(feed160x600.btn1Txt);
$('input[name=btn2Txt-160x600]').val(feed160x600.btn2Txt);

$('input[name=exitUrl-160x600]').val(feed160x600.exitUrl);

function bgColor160x600() {
	$('#bnrWrapper-160x600').css({background:$('input[name=bgColor-160x600]').val()});
}

function messageTxtColor160x600() {
	$('#message1-160x600, #messageExtra-160x600, #message2-160x600').find('p').css({color:$('input[name=messageTxtColor-160x600]').val()});
}

function roundelColor160x600() {
	$('#roundel-160x600').css({fill:$('input[name=roundelColor-160x600]').val()});
}

function roundelTxtColor160x600() {
	$('#roundelMessage-160x600').find('p').css({color:$('input[name=roundelTxtColor-160x600]').val()});
}

function logo160x600() {
	for (var i = 0; i < whichLogo.length; i++ ) {
		if($('select[name=logo-160x600]').val() === whichLogo[i]) {
			$('#logo-160x600').css({background:'url("'+logoUrlSrc160x600+whichLogo[i]+'.svg") no-repeat'});
		}
	}	
}

function overlay160x600() {
	for (var i = 0; i < whichOverlay.length; i++ ) {
		if($('select[name=overlay-160x600]').val() === whichOverlay[i]) {
			$('#overlay-160x600').css({background:'url("'+overlayUrlSrc160x600+whichOverlay[i]+'.svg") no-repeat'});
		}	
	}
}

function btn1Color160x600() {
	$('#btn1Txt-160x600').css({background:$('input[name=btn1Color-160x600]').val()});
}
function btn1TxtColor160x600() {
	$('#btn1Txt-160x600').css({color:$('input[name=btn1TxtColor-160x600]').val()});
}
function btn2Color160x600() {
	$('#btn2Txt-160x600').css({background:$('input[name=btn2Color-160x600]').val()});
}
function btn2TxtColor160x600() {
	$('#btn2Txt-160x600').css({color:$('input[name=btn2TxtColor-160x600]').val()});
}

function message1Txt160x600() {
	$('#message1-160x600').html($('input[name=message1Txt-160x600]').val());
}
function messageExtraTxt160x600() {
	$('#messageExtra-160x600').html($('input[name=messageExtraTxt-160x600]').val());
}
function message2Txt160x600() {
	$('#message2-160x600').html($('input[name=message2Txt-160x600]').val());
}
function roundelTxt160x600() {
	$('#roundelMessage-160x600').html($('input[name=roundelTxt-160x600]').val());
}

function btn1Txt160x600() {
	$('#btn1Txt-160x600').html($('input[name=btn1Txt-160x600]').val());
}
function btn2Txt160x600() {
	$('#btn2Txt-160x600').html($('input[name=btn2Txt-160x600]').val());
}

function img1160x600() {
	$('input[name=img1-160x600]').val(feed160x600.img1);
	$('#img1-160x600').css({background:'url("'+imgUrlSrc160x600+feed160x600.img1+'") no-repeat'});
}
function imgExtra160x600() {
	$('input[name=imgExtra-160x600]').val(feed160x600.imgExtra);
	$('#imgExtra-160x600').css({background:'url("'+imgUrlSrc160x600+feed160x600.imgExtra+'") no-repeat'});
}
function img2160x600() {
	$('input[name=img2-160x600]').val(feed160x600.img2);
	$('#img2-160x600').css({background:'url("'+imgUrlSrc160x600+feed160x600.img2+'") no-repeat'});
}

function init160x600Content() {	
	document.getElementById('bnrWrapper-160x600').style.display = "block";
	bgColor160x600();
	roundelColor160x600();
			
	logo160x600();
	overlay160x600();
	btn1Color160x600();		
	btn1TxtColor160x600();
	btn2Color160x600();		
	btn2TxtColor160x600();
	
	message1Txt160x600();
	messageExtraTxt160x600();
	message2Txt160x600();
	roundelTxt160x600();
	
	btn1Txt160x600();
	btn2Txt160x600();
	
	img1160x600();
	imgExtra160x600();
	img2160x600();
	
	messageTxtColor160x600();
	roundelTxtColor160x600();			
}
init160x600Content();

// animation start
var transition160x600 = 1000;
var btnTransition160x600 = 0;
var onScreen160x600 = 3000;
var frameLag160x600 = 500;
var frameDuration160x600 = transition160x600 + onScreen160x600 + frameLag160x600;
var easeIn160x600 = "easeInOutQuad";
var easeOut160x600 = "easeInOutQuad";
var runTime160x600;

function init160x600() {
	runTime160x600 = 0;
	
	$('#logo-160x600').velocity({top: 0}, {easing: easeIn160x600, duration: transition160x600, delay: 0});
	$('#btnWrap-160x600').velocity({bottom: 7}, {easing: easeIn160x600, duration: transition160x600, delay: 0});
	runTime160x600 = runTime160x600 + transition160x600;
	
	$('#fade1-160x600').velocity({opacity: 1}, {easing: easeIn160x600, duration: transition160x600, delay: runTime160x600});
	$('#fade1-160x600').velocity({opacity: 0}, {easing: easeOut160x600, duration: (transition160x600/2), delay: onScreen160x600});
	
	runTime160x600 = runTime160x600 + frameDuration160x600;
	
	if(feed160x600.extraFrame === true) {
		$('#fadeExtra-160x600').velocity({opacity: 1}, {easing: easeIn160x600, duration: transition160x600, delay: runTime160x600});
		$('#fadeExtra-160x600').velocity({opacity: 0}, {easing: easeOut160x600, duration: (transition160x600/2), delay: onScreen160x600});
		
		runTime160x600 = runTime160x600 + frameDuration160x600;	
	}
	
	$('#fade2-160x600').velocity({opacity: 1}, {easing: easeIn160x600, duration: transition160x600, delay: runTime160x600});
	
	if(feed160x600.btn1Color === feed160x600.btn2Color) {
		btnTransition160x600 = 0;
	}
	else {
		btnTransition160x600 = transition160x600;
	}
	$('#btn1-160x600').velocity({opacity: 0}, {easing: easeOut160x600, duration: (transition160x600/2), delay: runTime160x600});
	$('#btn2-160x600').velocity({opacity: 1}, {easing: easeIn160x600, duration: transition160x600, delay: runTime160x600});

	runTime160x600 = runTime160x600 + transition160x600;
}
init160x600();

function initframe1160x600() {
	$('#logo-160x600').css({top: 0});
	$('#btnWrap-160x600').css({bottom: 7});
	$('#fade1-160x600').css({opacity: 1});
}
function initframeExtra160x600() {
	$('#logo-160x600').css({top: 0});
	$('#btnWrap-160x600').css({bottom: 7});
	$('#fadeExtra-160x600').css({opacity: 1});
}
function initframe2160x600() {
	$('#logo-160x600').css({top: 0});
 	$('#btnWrap-160x600').css({bottom: 7});
	$('#fade2-160x600').css({opacity: 1});
	$('#btn1-160x600').css({opacity: 0});
	$('#btn2-160x600').css({opacity: 1});
}
function reset160x600() {
	destroy160x600();
	build160x600();
}

function extraFrameTrue160x600() {
	$('.frame3-160x600').show();
	$('.extraField-160x600').show();
	positionSliders();
	feed160x600.extraFrame = true;
}
function extraFrameFalse160x600() {
	$('.frame3-160x600').hide();
	$('.extraField-160x600').hide();
	feed160x600.extraFrame = false;
}

function checkExtraFrame160x600() {
	if ($('.extraFrameCheck-160x600 input[class=true]').is(':checked')){
		extraFrameTrue160x600();
	}
	else {
		extraFrameFalse160x600();
	}
}
checkExtraFrame160x600();

$('.replay-160x600').click(function(){
	btnDeselect($(this));
	reset160x600();
	init160x600Content();
	init160x600();
});
$('.frame1-160x600').click(function(){
	btnSelect($(this));
	reset160x600();
	init160x600Content();
	initframe1160x600();
});
$('.frame2-160x600').click(function(){
	btnSelect($(this));
	if(feed160x600.extraFrame === true) {
		reset160x600();
		init160x600Content();
		initframeExtra160x600();
	}
	else {
		reset160x600();
		init160x600Content();
		initframe2160x600();
	}	
});
$('.frame3-160x600').click(function(){
	btnSelect($(this));
	reset160x600();
	init160x600Content();
	initframe2160x600();
});

$('.extraFrameCheck-160x600').click(function() {
	checkExtraFrame160x600();
	$('.replay-160x600')[0].click();
});

$('select[name="logo-160x600"]').on('change', function() {
	logo160x600();
});
$('select[name="overlay-160x600"]').on('change', function() {
	overlay160x600();
});
$('input[name=bgColor-160x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		bgColorMirror($(this));
	}
	else {
		bgColor160x600();
	}
});
$('input[name=roundelColor-160x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelColorMirror($(this));
	}
	else {
		roundelColor160x600();
	}
});
$('input[name=messageTxtColor-160x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		messageTxtColorMirror($(this));
	}
	else {
		messageTxtColor160x600();
	}
});
$('input[name=roundelTxtColor-160x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		roundelTxtColorMirror($(this));
	}
	else {
		roundelTxtColor160x600();
	}
});
$('input[name=btn1Color-160x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1ColorMirror($(this));
	}
	else {
		btn1Color160x600();
	}
});
$('input[name=btn1TxtColor-160x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn1TxtColorMirror($(this));
	}
	else {
		btn1TxtColor160x600();
	}
});
$('input[name=btn2Color-160x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2ColorMirror($(this));
	}
	else {
		btn2Color160x600();
	}
});
$('input[name=btn2TxtColor-160x600]').parents('.pickerWrap').find('li').click(function() {
	if($('.toggleWrap').hasClass('mirrorColors')){
		btn2TxtColorMirror($(this));
	}
	else {
		btn2TxtColor160x600();
	}
});
$('input[name=message1Txt-160x600]').keyup(function() {
	message1Txt160x600();
	messageTxtColor160x600();
});
$('input[name=message2Txt-160x600]').keyup(function() {
	message2Txt160x600();
	messageTxtColor160x600();
});
$('input[name=roundelTxt-160x600]').keyup(function() {
	roundelTxt160x600();
	roundelTxtColor160x600();
});
$('input[name=btn1Txt-160x600]').keyup(function() {
	btn1Txt160x600();
});
$('input[name=btn2Txt-160x600]').keyup(function() {
	btn2Txt160x600();
});	

function selectImg($this) {
	$this.closest('.gallery').find('.galItem').not($this).removeClass('selected');
	$this.addClass('selected');
}

$('.img1 .gallery160x600').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img1-160x600').css({background:'url("'+imgUrlSrc160x600+img+'") no-repeat'});
		selectImg($(this));
		bnrInput160x600[0].img1 = img;
		$('input[name=img1-160x600]').val(bnrInput160x600[0].img1);
	}
});
$('.imgExtra .gallery160x600').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#imgExtra-160x600').css({background:'url("'+imgUrlSrc160x600+img+'") no-repeat'});
		selectImg($(this));
		bnrInput160x600[0].imgExtra = img;
		$('input[name=imgExtra-160x600]').val(bnrInput160x600[0].imgExtra);
	}
});
$('.img2 .gallery160x600').on('click', '.galItem', function(){
	if(!$(this).hasClass('selected')) {
		var img = $(this).find('img').attr('title');
		$('#img2-160x600').css({background:'url("'+imgUrlSrc160x600+img+'") no-repeat'});
		selectImg($(this));
		bnrInput160x600[0].img2 = img;
		$('input[name=img2-160x600]').val(bnrInput160x600[0].img2);
	}
});

function postContactToGoogle160x600() {
	var logoVal160x600 = logoAssetSrc160x600+$('select[name=logo-160x600]').val()+'.svg';
	var overlayVal160x600 = overlayAssetSrc160x600+$('select[name=overlay-160x600]').val()+'.svg';
	var bgColorVal160x600 = $('input[name=bgColor-160x600]').val();
	var btn1ColorVal160x600 = $('input[name=btn1Color-160x600]').val();
	var btn1TxtColorVal160x600 = $('input[name=btn1TxtColor-160x600]').val();
	var btn2ColorVal160x600 = $('input[name=btn1Color-160x600]').val();
	var btn2TxtColorVal160x600 = $('input[name=btn1TxtColor-160x600]').val();
	var mesTxtColorVal160x600 = $('input[name=messageTxtColor-160x600]').val();
	var roundelColorVal160x600 = $('input[name=roundelColor-160x600]').val();
	var roundelTxtColorVal160x600 = $('input[name=roundelTxtColor-160x600]').val();
	var mes1TxtVal160x600 = $('input[name=message1Txt-160x600]').val();
	var mes2TxtVal160x600 = $('input[name=message2Txt-160x600]').val();
	var roundelTxtVal160x600 = $('input[name=roundelTxt-160x600]').val();
	var img1Val160x600 = imgAssetSrc160x600+$('input[name=img1-160x600]').val();
	var img2Val160x600 = imgAssetSrc160x600+$('input[name=img2-160x600]').val();
	var btn1TxtVal160x600 = $('input[name=btn1Txt-160x600]').val();
	var btn2TxtVal160x600 = $('input[name=btn2Txt-160x600]').val();
	var exitUrlVal160x600 = $('input[name=exitUrl-160x600]').val();
	var mesExtraTxtVal160x600;
	var imgExtraVal160x600;
	if(feed160x600.extraFrame === true) {
		mesExtraTxtVal160x600 = $('input[name=messageExtraTxt-160x600]').val();
		imgExtraVal160x600 = imgAssetSrc160x600+$('input[name=imgExtra-160x600]').val();
	}
	else {
		mesExtraTxtVal160x600 = 'N/A';
		imgExtraVal160x600 = blankImg;
	}

	$.ajax({
// 		url:"https://docs.google.com/forms/d/e/1FAIpQLSeTv5yMMAhfvVhdiWknUPJt4Q3efzY4_a075Lsn_KNKkf6LkQ/formResponse",
		data:{
			"entry_57793852":logoVal160x600,
			"entry_710629118":overlayVal160x600,
			"entry_1056887831":bgColorVal160x600,
			"entry_1970663478":btn1ColorVal160x600,
			"entry_1439940585":btn1TxtColorVal160x600,
			"entry_2083868184":btn2ColorVal160x600,
			"entry_1585123416":btn2TxtColorVal160x600,
			"entry_243732690":mesTxtColorVal160x600,
			"entry_1029643130":roundelColorVal160x600,
			"entry_2062109151":roundelTxtColorVal160x600,
			"entry_791765641":feed160x600.extraFrame,
			"entry_210126843":mes1TxtVal160x600,
			"entry_28722010":mesExtraTxtVal160x600,
			"entry_1158727021":mes2TxtVal160x600,
			"entry_519432673":roundelTxtVal160x600,
			"entry_302277476":img1Val160x600,
			"entry_1877115306":imgExtraVal160x600,
			"entry_1881036811":img2Val160x600,
			"entry_534078953":btn1TxtVal160x600,
			"entry_843299888":btn2TxtVal160x600,
			"entry_312657314":exitUrlVal160x600,
		},
		type:"POST",
		dataType:"xml",
		statusCode: {}
	});
}

$('#pageWrap').on('click', '.submit-160x600', function(){
	postContactToGoogle160x600();
});