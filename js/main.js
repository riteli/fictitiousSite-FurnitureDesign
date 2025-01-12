$(function() {
  const $menuToggle = $('.menu-toggle-btn');
  const $menuList = $('.hamburger-menu-list');
  const $bars = $('.bar');
  const $overlay = $('.hamburger-overlay');

  function toggleMenu() {
    $menuToggle.toggleClass('isActived');
    $menuList.toggleClass('isActived');
    $bars.toggleClass('isActived');
    $overlay.toggleClass('isActived');

    const isExpanded = $menuToggle.attr('aria-expanded') === 'false';
    $menuToggle.attr('aria-expanded', isExpanded ? 'true' : 'false');
    $menuList.attr('aria-hidden', isExpanded ? 'false' : 'true');
  }

  $menuToggle.click(toggleMenu);
  $overlay.click(toggleMenu);

  $(document).keyup(function(event) {
    if (event.key === 'Escape' && $menuToggle.hasClass('isActived')) {
      toggleMenu();
    }
  });
});