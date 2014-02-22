window.onload = function(){

	var showDefinition = document.querySelectorAll('.pp-desktop-show #shared .module-title, .pp-desktop-show #shared .module-icon');
	for(var a = 0; a<showDefinition.length; a++) {
		showDefinition[a].onclick = function(){
				this.parentNode.querySelector('.module-definition').classList.toggle('pp-show-definition');
				this.parentNode.querySelector('.module-definition').classList.toggle('pp-hide-this');
				this.parentNode.querySelector('.pp-triangle').classList.toggle('pp-open-triangle');
		};
	}

	var moduleClick = document.querySelectorAll('.pp-mobile-show .module');
	for(var b = 0; b<moduleClick.length; b++){
		moduleClick[b].onclick = function(){
			var targetClass = this.getAttribute('class');
			var myRegex = /(module).(sharedCategory)?(nonShared)?\s/g;
			var iconRegex = /(module).(sharedCategory)?(nonShared)?\s/g;
			var toShow = targetClass.replace(myRegex, '.mobileModule.');
			var iconActive = targetClass.replace(iconRegex, '');
			var allIcons = document.querySelectorAll('[data-attr="'+iconActive+'"]');
			for(var c = 0; c<allIcons.length; c++){
				allIcons[c].parentNode.className = 'pp-active';
			}
			if(document.querySelector(toShow).classList.contains('pp-hide-detail')){
				document.querySelector(toShow).classList.toggle('pp-hide-detail');
				document.querySelector(toShow).classList.toggle('pp-show-detail');
			}
			else {
				document.querySelector(toShow).classList.toggle('pp-show-detail');
			}
		};
	}

	var moduleClose = document.querySelectorAll('.module-close');
	for(var d = 0; d<moduleClose.length; d++) {
		moduleClose[d].onclick = function() {
			var allFooterIcons = document.querySelectorAll('.module-footer-nav .pp-footer-icon');
			for(var e = 0; e<allFooterIcons.length; e++){
				if (allFooterIcons[e].parentNode.classList.contains('pp-active')){
					allFooterIcons[e].parentNode.classList.toggle('pp-active');
				}
			}
			var allMobileModules = document.querySelectorAll('.mobileModule');
			for(var f = 0; f<allMobileModules.length; f++) {
				if(allMobileModules[f].classList.contains('pp-show-detail')) {
					allMobileModules[f].classList.toggle('pp-hide-detail-show');
					setTimeout(function(){
						var allMobileModules = document.querySelectorAll('.mobileModule');
						for(var g = 0; g<allMobileModules.length; g++){
							if(allMobileModules[g].classList.contains('pp-show-detail')) {
								allMobileModules[g].classList.toggle('pp-show-detail');
								allMobileModules[g].classList.toggle('pp-hide-detail-show');
								allMobileModules[g].classList.toggle('pp-hide-detail');
							}
						}
					} , 200);
				}
				else if(allMobileModules[f].classList.contains('pp-show-detail-nav')) {
					allMobileModules[f].classList.toggle('pp-hide-detail-show');
					setTimeout(function(){
						var allMobileModules = document.querySelectorAll('.mobileModule');
						for(var h = 0; h<allMobileModules.length; h++){
							if(allMobileModules[h].classList.contains('pp-hide-detail-show')) {
								allMobileModules[h].classList.toggle('pp-show-detail-nav');
								allMobileModules[h].classList.toggle('pp-hide-detail-show');
								allMobileModules[h].classList.toggle('pp-hide-detail');
							}
						}
					} , 200);
				}
			}
		};
	}

	var allInfoButtons = document.querySelectorAll('.pp-info-button');
	for(var j = 0; j<allInfoButtons.length; j++){
		allInfoButtons[j].onclick = function(){
			if(this.parentNode.querySelector('.module-definition').classList.contains('pp-show-definition')) {
				this.classList.toggle('pp-active-info-button');
				this.parentNode.querySelector('.module-definition').classList.toggle('pp-show-definition');
				this.parentNode.querySelector('.module-definition').classList.toggle('pp-hide-this');
			}
			else {
				this.classList.toggle('pp-active-info-button');
				this.parentNode.querySelector('.module-definition').classList.toggle('pp-show-definition');
				this.parentNode.querySelector('.module-definition').classList.toggle('pp-hide-this');
			}
		};
	}

	var allFooterIcons = document.querySelectorAll('.module-footer-nav .pp-footer-icon');
	for(var k = 0; k<allFooterIcons.length; k++){
		allFooterIcons[k].onclick = function(){
			var dataAttr = this.getAttribute('data-attr');
			var mobileShow = '.'+dataAttr;
			var iconRegex = /(\.)/g;
			var iconActive = mobileShow.replace(iconRegex, '');

			var allIcons = document.querySelectorAll('.module-footer-nav .pp-footer-icon');
			for(var l = 0; l<allIcons.length; l++){
				allIcons[l].parentNode.className = '';
			}
			var icon = document.querySelectorAll('[data-attr="'+iconActive+'"]');
			for(var m = 0; m<icon.length; m++){
				icon[m].parentNode.className = 'pp-active';
			}

			var allMobileModules = document.querySelectorAll('.mobileModule');
			for(var n = 0; n<allMobileModules.length; n++) {
				if(allMobileModules[n].classList.contains('pp-show-detail-nav')){
					allMobileModules[n].classList.toggle('pp-show-detail-nav');
				}
				else if (allMobileModules[n].classList.contains('pp-show-detail')){
					allMobileModules[n].classList.toggle('pp-show-detail');
				}
			}

			var mobileModuleShow = document.querySelector('.mobileModule'+mobileShow);
			if(mobileModuleShow.classList.contains('pp-hide-detail')){
				mobileModuleShow.classList.toggle('pp-hide-detail');
				mobileModuleShow.classList.toggle('pp-show-detail-nav');
			}
			else if(mobileModuleShow.classList.contains('pp-show-detail')){
				mobileModuleShow.classList.toggle('pp-show-detail-nav');
			}
			else {
				mobileModuleShow.classList.toggle('pp-show-detail-nav');
			}
		};
	}
};
