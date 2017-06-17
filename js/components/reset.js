$(window).resize(function(){
	if($(window).width() >= $smlBp && $(window).width() < $medBp) {
		
	}
	if($(window).width() >= $smlBp) {
		
	}
    if($(window).width() >= $medBp) {

	}
});

function resetMobToAboveMob() {

}

function resetAboveMobToMob() {

}

function resetSmlToAboveSml() {

}
function resetAboveSmlToSml() {

}

function resetMedToAboveMed() {

}
function resetAboveMedToMed() {

}

function resetBelowMobToAboveMed() {

}
function resetBelowSmlToAboveMed() {

}
function resetBelowMedToAboveMed() {

}
function resetBelowLrgToAboveLrg() {

}

var $window = $(window),
previousDimensions = {
    width: $window.width(),
    height: $window.height()
};
$window.resize(function() {
    var newDimensions = {
        width: $window.width(),
        height: $window.height()
    };
    if (newDimensions.width >= previousDimensions.width && previousDimensions.width < $smlBp && $(window).width() >= $smlBp) {
        resetMobToAboveMob(); 
    } 
    else if (newDimensions.width < previousDimensions.width && previousDimensions.width >= $smlBp && $(window).width() < $smlBp) {
        resetAboveMobToMob();
    }
    else if (newDimensions.width >= previousDimensions.width && previousDimensions.width < $medBp && $(window).width() >= $medBp) {
        resetSmlToAboveSml();  
    } 
    else if (newDimensions.width < previousDimensions.width && previousDimensions.width >= $medBp && $(window).width() < $medBp) {
        resetAboveSmlToSml();
    }
    else if (newDimensions.width >= previousDimensions.width && previousDimensions.width < $lrgBp && $(window).width() >= $lrgBp) {
        resetMedToAboveMed();  
    } 
    else if (newDimensions.width < previousDimensions.width && previousDimensions.width >= $lrgBp && $(window).width() < $lrgBp) {
        resetAboveMedToMed();
    }
    else if (newDimensions.width >= previousDimensions.width && previousDimensions.width < $smlBp && $(window).width() >= $lrgBp) {
        resetBelowMobToAboveMed();  
    } 
    else if (newDimensions.width >= previousDimensions.width && previousDimensions.width < $medBp && $(window).width() >= $lrgBp) {
        resetBelowSmlToAboveMed();  
    }
    else if (newDimensions.width >= previousDimensions.width && previousDimensions.width < $lrgBp && $(window).width() >= $lrgBp) {
        resetBelowMedToAboveMed();  
    }
    else if (newDimensions.width >= previousDimensions.width && previousDimensions.width < $xlrgBp && $(window).width() >= $xlrgBp) {
        resetBelowLrgToAboveLrg();  
    }
    previousDimensions = newDimensions;
});