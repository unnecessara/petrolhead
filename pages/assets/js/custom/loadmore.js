$(document).ready(() => {
  // By default show the first 6
  $('.photoItem')
    .slice(0, 6)
    .show();

  // Show load more button if there is hidden items
  if ($('.photoItem:hidden').length !== 0) {
    $('#loadMore').show();
  } else {
    $('#loadMore').hide();
  }

  // Show 6 more on click
  $('#loadMore').on('click', (e) => {
    e.preventDefault();
    $('.photoItem:hidden')
      .slice(0, 6)
      .slideDown();

    // If there are no more hidden items fadeout load morebutton
    if ($('.photoItem:hidden').length === 0) {
      $('#loadMore').fadeOut('slow');
    }
  });
});
