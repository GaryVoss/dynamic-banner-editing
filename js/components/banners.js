var whichSize = ['120x600', '160x600', '300x600', '300x250', '480x320', '970x250', '728x90', '468x60', '320x50', '300x50'];
var whichLogo = ['havenBlueLogo', 'havenWhiteLogo'];
var whichOverlay = ['circles', 'drops', 'flower', 'flower2', 'leaf', 'shell', 'starfish', 'stars', 'sun', 'windmill'];

var thumbImg = 'https://s0.2mdn.net/creatives/assets/2058121/havBnr17-thumb-';
var blankImg = 'shared/blank.png';

function btnSelect($this) {
	$this.siblings().removeClass('selected');
	$this.addClass('selected');
}
function btnDeselect($this) {
	$this.parent().find('.btn').removeClass('selected');
}

function positionSliders() {
	$('.gallery').each(function () {
		if($(this).is(':visible')) {
			$(this).get(0).slick.setPosition();
		}
	});
}

$('.tab').click(function() {
	$(this).parent().find('.tab').not($(this)).removeClass('active');
	if(!$(this).hasClass('active')) {
		$(this).addClass('active');
	}
	for (var i = 0; i < whichSize.length; i++ ) {
		if($(this).hasClass('tab'+whichSize[i])) {
			if($(this).parent().hasClass('sizeTabs')) {
				$(this).closest('.contentWrap').find('.sizeContent').hide();
				$(this).closest('.contentWrap').find('.sizeContent.content'+whichSize[i]).show();
				$(this).closest('.contentWrap').find('.sizeContent.content'+whichSize[i]).find('.replay')[0].click();
			}
		}
	}
	positionSliders();
});

$('.modalTrig').click(function(){
	for (var i = 0; i < whichSize.length; i++ ) {
		if($(this).hasClass('modalTrigSubmit-'+whichSize[i])) {
			$('.modalSubmit .submitOnly').html('<span class="submit-'+whichSize[i]+'">Submit only '+whichSize[i]+' banner size</span>');
		}
	}
});

function bgColorMirror($this) {
	var color = $this.data('hex');
	for (var i = 0; i < whichSize.length; i++ ) {
		$('#bnrWrapper-'+whichSize[i]).css({background:color});
		$('input[name=bgColor-'+whichSize[i]+']').val(color);
		$('input[name=bgColor-'+whichSize[i]+']').closest('.pickerWrap').find('.swatch').css({background: color});
	}
}
function roundelColorMirror($this) {
	var color = $this.data('hex');
	for (var i = 0; i < whichSize.length; i++ ) {
		$('#roundel-'+whichSize[i]).css({fill:color});
		$('input[name=roundelColor-'+whichSize[i]+']').val(color);
		$('input[name=roundelColor-'+whichSize[i]+']').closest('.pickerWrap').find('.swatch').css({background: color});
	}
}
function messageTxtColorMirror($this) {
	var color = $this.data('hex');
	for (var i = 0; i < whichSize.length; i++ ) {
		$('#message1-'+whichSize[i]+', #messageExtra-'+whichSize[i]+', #message2-'+whichSize[i]).find('p').css({color:color});
		$('input[name=messageTxtColor-'+whichSize[i]+']').val(color);
		$('input[name=messageTxtColor-'+whichSize[i]+']').closest('.pickerWrap').find('.swatch').css({background: color});
	}
}
function roundelTxtColorMirror($this) {
	var color = $this.data('hex');
	for (var i = 0; i < whichSize.length; i++ ) {
		$('#roundelMessage-'+whichSize[i]).find('p').css({color:color});
		$('input[name=roundelTxtColor-'+whichSize[i]+']').val(color);
		$('input[name=roundelTxtColor-'+whichSize[i]+']').closest('.pickerWrap').find('.swatch').css({background: color});
	}
}
function btn1ColorMirror($this) {
	var color = $this.data('hex');
	for (var i = 0; i < whichSize.length; i++ ) {
		$('#btn1Txt-'+whichSize[i]).css({background:color});
		$('input[name=btn1Color-'+whichSize[i]+']').val(color);
		$('input[name=btn1Color-'+whichSize[i]+']').closest('.pickerWrap').find('.swatch').css({background: color});
	}
}
function btn1TxtColorMirror($this) {
	var color = $this.data('hex');
	for (var i = 0; i < whichSize.length; i++ ) {
		$('#btn1Txt-'+whichSize[i]).css({color:color});
		$('input[name=btn1TxtColor-'+whichSize[i]+']').val(color);
		$('input[name=btn1TxtColor-'+whichSize[i]+']').closest('.pickerWrap').find('.swatch').css({background: color});
	}
}
function btn2ColorMirror($this) {
	var color = $this.data('hex');
	for (var i = 0; i < whichSize.length; i++ ) {
		$('#btn2Txt-'+whichSize[i]).css({background:color});
		$('input[name=btn2Color-'+whichSize[i]+']').val(color);
		$('input[name=btn2Color-'+whichSize[i]+']').closest('.pickerWrap').find('.swatch').css({background: color});
	}
}
function btn2TxtColorMirror($this) {
	var color = $this.data('hex');
	for (var i = 0; i < whichSize.length; i++ ) {
		$('#btn2Txt-'+whichSize[i]).css({color:color});
		$('input[name=btn2TxtColor-'+whichSize[i]+']').val(color);
		$('input[name=btn2TxtColor-'+whichSize[i]+']').closest('.pickerWrap').find('.swatch').css({background: color});
	}
}

// @codekit-append "banners/bnr120x600.js"
// @codekit-append "banners/bnr160x600.js"
// @codekit-append "banners/bnr300x600.js"
// @codekit-append "banners/bnr300x250.js"
// @codekit-append "banners/bnr480x320.js"
// @codekit-append "banners/bnr970x250.js"
// @codekit-append "banners/bnr728x90.js"
// @codekit-append "banners/bnr468x60.js"
// @codekit-append "banners/bnr320x50.js"
// @codekit-append "banners/bnr300x50.js"
// @codekit-append "banners/last.js"