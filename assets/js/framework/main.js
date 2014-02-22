window.onload = function(){

	var showDefinition = document.querySelectorAll('.desktop-show #shared .module-title, .desktop-show #shared .module-icon');
	for(var a = 0; a<showDefinition.length; a++) {
		showDefinition[a].onclick = function(){
				this.parentNode.querySelector('.module-definition').classList.toggle('show-definition');
				this.parentNode.querySelector('.module-definition').classList.toggle('hide-this');
				this.parentNode.querySelector('.triangle').classList.toggle('open-triangle');
		};
	}

	var moduleClick = document.querySelectorAll('.mobile-show .module');
	for(var b = 0; b<moduleClick.length; b++){
		moduleClick[b].onclick = function(){
			var targetClass = this.getAttribute('class');
			var myRegex = /(module).(sharedCategory)?(nonShared)?\s/g;
			var iconRegex = /(module).(sharedCategory)?(nonShared)?\s/g;
			var toShow = targetClass.replace(myRegex, '.mobileModule.');
			var iconActive = targetClass.replace(iconRegex, '');
			var allIcons = document.querySelectorAll('[data-attr="'+iconActive+'"]');
			for(var c = 0; c<allIcons.length; c++){
				allIcons[c].parentNode.className = 'active';
			}
			if(document.querySelector(toShow).classList.contains('hide-detail')){
				document.querySelector(toShow).classList.toggle('hide-detail');
				document.querySelector(toShow).classList.toggle('show-detail');
			}
			else {
				document.querySelector(toShow).classList.toggle('show-detail');
			}
		};
	}

	var moduleClose = document.querySelectorAll('.module-close');
	for(var d = 0; d<moduleClose.length; d++) {
		moduleClose[d].onclick = function() {
			var allFooterIcons = document.querySelectorAll('.module-footer-nav .icon');
			for(var e = 0; e<allFooterIcons.length; e++){
				if (allFooterIcons[e].parentNode.classList.contains('active')){
					allFooterIcons[e].parentNode.classList.toggle('active');
				}
			}
			var allMobileModules = document.querySelectorAll('.mobileModule');
			for(var f = 0; f<allMobileModules.length; f++) {
				if(allMobileModules[f].classList.contains('show-detail')) {
					allMobileModules[f].classList.toggle('hide-detail-show');
					setTimeout(function(){
						var allMobileModules = document.querySelectorAll('.mobileModule');
						for(var g = 0; g<allMobileModules.length; g++){
							if(allMobileModules[g].classList.contains('show-detail')) {
								allMobileModules[g].classList.toggle('show-detail');
								allMobileModules[g].classList.toggle('hide-detail-show');
								allMobileModules[g].classList.toggle('hide-detail');
							}
						}
					} , 200);
				}
				else if(allMobileModules[f].classList.contains('show-detail-nav')) {
					allMobileModules[f].classList.toggle('hide-detail-show');
					setTimeout(function(){
						var allMobileModules = document.querySelectorAll('.mobileModule');
						for(var h = 0; h<allMobileModules.length; h++){
							if(allMobileModules[h].classList.contains('hide-detail-show')) {
								allMobileModules[h].classList.toggle('show-detail-nav');
								allMobileModules[h].classList.toggle('hide-detail-show');
								allMobileModules[h].classList.toggle('hide-detail');
							}
						}
					} , 200);
				}
			}
		};
	}

	var allInfoButtons = document.querySelectorAll('.info-button');
	for(var j = 0; j<allInfoButtons.length; j++){
		allInfoButtons[j].onclick = function(){
			if(this.parentNode.querySelector('.module-definition').classList.contains('show-definition')) {
				this.classList.toggle('active-info-button');
				this.parentNode.querySelector('.module-definition').classList.toggle('show-definition');
				this.parentNode.querySelector('.module-definition').classList.toggle('hide-this');
			}
			else {
				this.classList.toggle('active-info-button');
				this.parentNode.querySelector('.module-definition').classList.toggle('show-definition');
				this.parentNode.querySelector('.module-definition').classList.toggle('hide-this');
			}
		};
	}

	var allFooterIcons = document.querySelectorAll('.module-footer-nav .icon');
	for(var k = 0; k<allFooterIcons.length; k++){
		allFooterIcons[k].onclick = function(){
			var dataAttr = this.getAttribute('data-attr');
			var mobileShow = '.'+dataAttr;
			var iconRegex = /(\.)/g;
			var iconActive = mobileShow.replace(iconRegex, '');

			var allIcons = document.querySelectorAll('.module-footer-nav .icon');
			for(var l = 0; l<allIcons.length; l++){
				allIcons[l].parentNode.className = '';
			}
			var icon = document.querySelectorAll('[data-attr="'+iconActive+'"]');
			for(var m = 0; m<icon.length; m++){
				icon[m].parentNode.className = 'active';
			}

			var allMobileModules = document.querySelectorAll('.mobileModule');
			for(var n = 0; n<allMobileModules.length; n++) {
				if(allMobileModules[n].classList.contains('show-detail-nav')){
					allMobileModules[n].classList.toggle('show-detail-nav');
				}
				else if (allMobileModules[n].classList.contains('show-detail')){
					allMobileModules[n].classList.toggle('show-detail');
				}
			}

			var mobileModuleShow = document.querySelector('.mobileModule'+mobileShow);
			if(mobileModuleShow.classList.contains('hide-detail')){
				mobileModuleShow.classList.toggle('hide-detail');
				mobileModuleShow.classList.toggle('show-detail-nav');
			}
			else if(mobileModuleShow.classList.contains('show-detail')){
				mobileModuleShow.classList.toggle('show-detail-nav');
			}
			else {
				mobileModuleShow.classList.toggle('show-detail-nav');
			}
		};
	}
};
