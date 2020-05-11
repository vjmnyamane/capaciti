(function(){
	var menuToggler = document.querySelector(".menu-toggler");
	var flexMenu = document.querySelector(".flex-menu");
	var links =  document.querySelectorAll(".flex-menu-item, .dropdown-menu-link, .dropdown-menu-item");
	var dropdowns = document.querySelectorAll(".dropdown-menu");
	
	var toggleMenu = function(){
		flexMenu.style.display = (flexMenu.style.display || window.getComputedStyle(flexMenu).getPropertyValue("display")) == "flex" ? "none" : "flex";
	};
	
	var toggleMenuToggler = function(){
		if(menuToggler.classList.contains("menu-toggler-close")){
			menuToggler.classList.remove("menu-toggler-close");
		}else{
			menuToggler.classList.add("menu-toggler-close");
		}
	};
	
	menuToggler.addEventListener("click", function(e){
		e.preventDefault();		
		toggleMenu();
		toggleMenuToggler();
	}, false);
	
	var section = document.querySelectorAll(".section-marker");
	var sections = {};
	
	Array.prototype.forEach.call(section, function(e){
		sections[e.id] = e.offsetTop;
	});
	
	window.onscroll = function(){
		var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
		for(i in sections){
			if(sections[i] <= scrollPosition){
				document.querySelector(".active").classList.remove('active');
				document.querySelector('a[href*=' + i +']').classList.add('active');
			}
		}
	}
	
	
	for(linkElement of links){
		linkElement.addEventListener("click", function(e){
			e.preventDefault();
			
			for(activeLink of document.querySelectorAll(".flex-menu .active")){
				activeLink.classList.remove("active");
			}
			
			if(this.classList.contains("dropdown-menu-link")){
				this.nextElementSibling.style.display = (this.nextElementSibling.style.display || window.getComputedStyle(this.nextElementSibling).getPropertyValue("display")) == "none" ? "flex" : "none";

				if(this.closest(".flex-menu-dropdown").classList.contains("dropdown-menu-item-active")){
					this.closest(".flex-menu-dropdown").classList.remove("dropdown-menu-item-active");
				}
				
				if(this.nextElementSibling.style.display == "flex"){
					this.closest(".flex-menu-dropdown").classList.add("dropdown-menu-link-active");
				}else{
					this.closest(".flex-menu-dropdown").classList.remove("dropdown-menu-link-active");
				}

			}else if(this.classList.contains("dropdown-menu-item")){
				if(!this.closest(".flex-menu-dropdown").classList.contains("dropdown-menu-item-active")){
					this.closest(".flex-menu-dropdown").classList.add("dropdown-menu-item-active");
				}
			}else{
				if(document.querySelector(".dropdown-menu-item-active")){
					document.querySelector(".dropdown-menu-item-active").classList.remove("dropdown-menu-item-active");
				}

				if(document.querySelector(".dropdown-menu-link-active")){
					document.querySelector(".dropdown-menu-link-active").classList.remove("dropdown-menu-link-active");
				}
				
				for(dropdown of dropdowns){
					dropdown.style.display = "none";
				}
			}
			
			this.classList.add("active");
			window.location.href  = this.href;
		}, false);
	}
	
}());