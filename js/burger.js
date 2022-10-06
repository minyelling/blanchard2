(() =>{
	function setBurger(params) {
		const btn = document.querySelector(`.${params.btnClass}`);
		const menu = document.querySelector(`.${params.menuClass}`);
		const links = menu.querySelectorAll(`.${params.linksClass}`);
		
		btn.setAttribute('aria-expanded', false);

		function onBtnClick () {
			if (window.getWindowWidth() <= window.TABLET_WIDTH) {
			btn.classList.toggle(params.activeClass);
			
			if (
			  !menu.classList.contains(params.activeClass) &&
			  !menu.classList.contains(params.hiddenClass)
			) {
			  menu.classList.add(params.activeClass);
			  document.body.style.overflow = 'hidden';
			  btn.setAttribute('aria-expanded','Закрыть главное меню');
			} else {
			  menu.classList.add(params.hiddenClass);
			  document.body.removeAttribute('style');
			  btn.setAttribute('aria-expanded','Открыть главное меню');
			  btn.classList.toggle(params.hiddenClass);
			}
		}
		}
	  
		menu.addEventListener("animationend", function () {
		  if (this.classList.contains(params.hiddenClass)) {
			this.classList.remove(params.activeClass);
			this.classList.remove(params.hiddenClass);
			btn.classList.remove(params.hiddenClass);
		  }
		});
	  
		btn.addEventListener("click", window.debounce(onBtnClick, 500));

		links.forEach((link) => {
			link.addEventListener("click", window.debounce(onBtnClick, 500));
			
		});
	  }
	  
	  // здесь мы вызываем функцию и передаем в нее классы наших элементов
	  setBurger({
		btnClass: "js-burger", // класс бургера
		menuClass: "js-menu-wrap", // класс меню
		activeClass: "is-opened", // класс открытого состояния
		hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
		linksClass: "js-menu-link"
	  });
}) ();