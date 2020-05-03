(function(){
	var menuToggler = document.querySelector(".menu-toggler");
	var flexMenu = document.querySelector(".flex-menu");
	menuToggler.addEventListener("click", function(){
		if(this.classList.contains("menu-toggler-close")){
			this.classList.remove("menu-toggler-close");
			flexMenu.classList.add("hidden");
			flexMenu.classList.remove("shown");
		}else{
			this.classList.add("menu-toggler-close");
			flexMenu.classList.add("shown");
			flexMenu.classList.remove("hidden");
		}
	});
	
	var links =  document.querySelectorAll(".flex-menu-item, .dropdown-menu-link, .dropdown-menu-item");
	
	var dropdowns = document.querySelectorAll(".dropdown-menu");
	
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