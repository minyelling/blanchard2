// Это один из возможных вариантов использования. Ссылка на github плагина https://github.com/michu2k/Accordion

// ВАЖНО!!! Этот пример аккордеона работает с версией плагина  3.1.1. Вот она: https://unpkg.com/accordion-js@3.1.1/dist/accordion.min.js

(() => {
	new Accordion(".js-accordion-container", {
	  openOnInit: [0]
	});
  })();
  
  
  // Табы
  const params = {
	tabsClass: "js-tab-btn",
	wrap: "js-tabs-wrap",
	content: "js-tab-content",
	active: "active"
  };
  
  function setTabs(params) {
	const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);
  
	function onTabClick(e) {
	  e.preventDefault();
	  const path = this.dataset.path;
	  const wrap = this.closest(`.${params.wrap}`);
	  const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
	  const contents = wrap.querySelectorAll(`.${params.content}`);
  
	  contents.forEach((el) => {
		el.classList.remove(params.active);
	  });
  
	  currentContent.classList.add(params.active);
	  
	  tabBtns.forEach((el) => {
		el.classList.remove(params.active);
	  });
	  
	  this.classList.add(params.active);
	}
  
	tabBtns.forEach(function (el) {
	  el.addEventListener("click", onTabClick);
	});
  }
  
  setTabs(params);