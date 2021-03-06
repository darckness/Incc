(function() {

  var nav = $('nav'), menu = $('nav h1'), main = $('main'), open = false;
  var menuItem = document.getElementsByTagName('li');

  function openOrCloseMenu() {
    open = !open ? true : false;

    nav.toggleClass('menu-active');
    main.toggleClass('menu-active');
    nav.removeClass('menu-hover');
    main.removeClass('menu-hover');

    console.log(open);
  }

  for(var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function(event) {
      var thisElement = event.target || event.srcElement;
      document.getElementsByClassName('content')[0].innerHTML = thisElement.textContent;
      openOrCloseMenu();
    });
  }

  menu.on('click', openOrCloseMenu);

  menu.hover(

    function() {
      if (!open) {
      	nav.addClass('menu-hover');
      	main.addClass('menu-hover');
      }
    }, function() {
      nav.removeClass('menu-hover');
      main.removeClass('menu-hover');
    }

  );

})();
