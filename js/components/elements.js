function lockScreen() {
	$('body').height($(window).height());
	$('body').css({'overflow': 'hidden'});
}
function unlockScreen() {
	$('body').removeAttr('style');
}
function fadeInContentOnLoad() {
	$('.rowWrap').animate({opacity:1});
} 
function showContent() {
	$('.rowWrap').css({opacity:1});
}  
fadeInContentOnLoad();
for(var $i = 0; $i < 10; $i++){
	setTimeout(showContent, 100);
}
$(window).resize(function() {
	for(var $i = 0; $i < 10; $i++){
		setTimeout(showContent, 100);
	}
});

//color picker start
var colorRow = {};	

colorRow[0] = {};
colorRow[0][0] = ['FFFFFF', 'White', 'Global colours'];
colorRow[0][1] = ['575757', 'Body copy'];

colorRow[1] = {};
colorRow[1][0] = ['A1224E', 'Marron flush', 'Main colours'];
colorRow[1][1] = ['E06287', 'Blush pink'];
colorRow[1][2] = ['E0004D', 'Razzmatazz'];
colorRow[1][3] = ['A20067', 'Lipstick'];
colorRow[1][4] = ['CF4520', 'Raw sienna'];
colorRow[1][5] = ['DC6B2F', 'Flame'];
colorRow[1][6] = ['F1B434', 'Honey'];
colorRow[1][7] = ['AF272F', 'Poppy'];
colorRow[1][8] = ['28939D', 'Teal'];
colorRow[1][9] = ['00C19F', 'Mint green'];
colorRow[1][10] = ['97D700', 'Conifer'];
colorRow[1][11] = ['719949', 'Apple'];
colorRow[1][12] = ['00594C', 'Amazon green'];
colorRow[1][13] = ['71C5E8', 'Ice blue'];
colorRow[1][14] = ['007CC3', 'Haven blue'];
colorRow[1][15] = ['154EA2', 'Classic blue'];
colorRow[1][16] = ['7C2529', 'Deep burgundy'];
colorRow[1][17] = ['7474C1', 'Lavendar'];
colorRow[1][18] = ['93328E', 'Plum'];
colorRow[1][19] = ['6D2077', 'Blackcurrant'];

colorRow[2] = {};
colorRow[2][0] = ['425563', 'Slate grey', 'Support colours'];
colorRow[2][1] = ['8C8985', 'Natural grey'];
colorRow[2][2] = ['B1B3B3', 'Pebble'];
colorRow[2][3] = ['85B09A', 'Bay leaf'];
colorRow[2][4] = ['B0AA7E', 'Golden sage'];

colorRow[3] = {};
colorRow[3][0] = ['DA291C', 'Sales red', 'Sale colours'];


var colorRows = Object.keys(colorRow).length;
var picker = $('.picker');
var pickerWithOff = $('.picker.colorOff');
for (var ia = 0; ia < colorRows; ia++ ) {
	picker.append('<ul class="pickRow'+ia+'"></ul>');
	picker.find('ul.pickRow'+ia).append('<p>'+colorRow[ia][0][2]+'</p>');
	var items = Object.keys(colorRow[ia]).length;
	for (var ib = 0; ib < items; ib++ ) {
		picker.find('ul.pickRow'+ia).append('<li title="' + colorRow[ia][ib][1] + '" data-hex="#' + colorRow[ia][ib][0] + '" style="background-color:#' + colorRow[ia][ib][0] + ';"></li>');
	}
}
pickerWithOff.find('ul.pickRow0').prepend('<li class="noColor"></li>');

$('.picker li').click(function(){
	if($(this).hasClass('noColor')){
		$(this).parents('.pickerWrap').find('.swatch').addClass('noColor');
		$(this).parents('.pickerWrap').find('.swatch').removeAttr('style');
		$(this).parents('.pickerWrap').find('.pickerOutput').val('None');
	}
	else {
		var color = $(this).data('hex');
		$(this).parents('.pickerWrap').find('.swatch').removeClass('noColor');
		$(this).parents('.pickerWrap').find('.swatch').css({background: color});
		$(this).parents('.pickerWrap').find('.pickerOutput').val(color);
	}
});

function openPicker($this) {
	var $thisPicker = $this.parents('.pickerWrap').find('.picker');
	$('.picker').not($thisPicker).hide();
	if($thisPicker.is(':hidden')) {
		$thisPicker.show();
	}
	else {
		$thisPicker.hide();
	}
}

$('.pickerTrigger').click(function(){
	openPicker($(this));
});
$('.swatch').click(function(){
	openPicker($(this));
});
$('body').click(function(){
	$('.picker').hide();
});	
$('.pickerTrigger').click(function(){
	event.stopPropagation();
});	
$('.swatch').click(function(){
	event.stopPropagation();
});	
//color picker end	

//modal function start
function resetModal($this) {
	$('.modal').removeClass('open');
	setTimeout(function() {
		$('.modalCont').removeClass('show');
	}, 500);
	if($this.parent().find('video').length >= 1){
		$this.parent().find('video').get(0).pause();
	}
}
$('.modalTrig').click(function(){
	var $howMany = $('.modalCont').length;
	for(var $i = 0; $i < $howMany; $i++){
		if($(this).hasClass('modalTrig'+$i)) {
			$('.modal').addClass('open');
			$('.modalCont').not($('.modalCont'+$i)).removeClass('show');
			$('.modalCont'+$i).addClass('show');
			if($('.modalCont'+$i).parent().find('video').length >= 1){
				$('.modalCont'+$i).parent().find('video').get(0).play();
			}
		}
	}
	lockScreen();
});
$('.modal .icon-cross').click(function(){
	resetModal($(this));
	unlockScreen();
});
//modal function end

//toggle slide start
var slideMouseDown = false;
function slideToggleAni($this) {
	var $trackWidth = $this.parent().width();
	var $dragWidth = $this.outerWidth();
    var $dragPos = $this.position();
	if ($dragPos.left < ($trackWidth/2 - ($dragWidth/2))){
		$this.stop().animate({left: 0});
		$this.parent().find('.leftSide').find('p').hide();
		$this.parent().find('.rightSide').find('p').show();
		$this.parent().addClass('toggleOn').removeClass('toggleOff');
	}
	else {
		$this.stop().animate({left: $trackWidth - $dragWidth});
		$this.parent().find('.leftSide').find('p').show();
		$this.parent().find('.rightSide').find('p').hide();
		$this.parent().addClass('toggleOff').removeClass('toggleOn');
	}
}
$('.slideToggle').each(function(){
	var $trackWidth = $(this).width();
	var $dragWidth = $(this).find('.circle').outerWidth();
	if($(this).hasClass('toggleOff')) {
		$(this).find('.circle').css({left: $trackWidth - $dragWidth});
		$(this).find('.leftSide').find('p').show();
		$(this).find('.rightSide').find('p').hide();
	}
});
$('.slideToggle').find('.circle').draggable({ containment: 'parent', axis: 'x'});
$('.slideToggle').find('.circle').mousedown(function() {
  slideMouseDown = true;
});
$('.slideToggle').find('.circle').mouseup(function(){
	slideToggleAni($(this));
	slideMouseDown = false;
});
$(document).mouseup(function() {
	if(slideMouseDown === true) {
		$('.slideToggle').find('.circle').each(function () {
			slideToggleAni($(this));
		});
	}
	slideMouseDown = false;
});
$('.slideToggle').find('.leftSide').click(function(){	
	if($(this).find('p').is(':visible')) {
		$(this).parent().find('.circle').stop().animate({left: 0});
		$(this).find('p').hide();
		$(this).parent().find('.rightSide').find('p').show();
		$(this).parent().addClass('toggleOn').removeClass('toggleOff');
	}
});
$('.slideToggle').find('.rightSide').click(function(){	
	var $trackWidth = $(this).parent().width();
	var $dragWidth = $(this).parent().find('.circle').outerWidth();
	var $leftPos = $trackWidth - $dragWidth;
	if($(this).find('p').is(':visible')) {
		$(this).parent().find('.circle').stop().animate({left: $leftPos});
		$(this).find('p').hide();
		$(this).parent().find('.leftSide').find('p').show();
		$(this).parent().addClass('toggleOff').removeClass('toggleOn');
	}
});
function toggleAction() {
	if($('.slideToggle').hasClass('toggleOn')) {
		$('.toggleWrap').addClass('mirrorColors');
	}
	else {
		$('.toggleWrap').removeClass('mirrorColors');
	}
}
$('.slideToggle').click(function(){
	toggleAction();
});
$(document).mouseup(function() {
	toggleAction();
});
//toggle slide end

$('.submit').click(function(){
	$(this).closest('.col').find('.confirmHide').hide();
	$(this).closest('.col').find('.confirmShow').show();
});