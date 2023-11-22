$(document).ready(function () {
/**
 * Toggles "done" class on <li> element
 */
$('.today-list').on('click', 'li', function(){
  $(this).toggleClass('done'); 
});
/**
 * Delete element when delete link clicked
 */
$('.today-list').on('click', '.delete', function (){
  $(this).parent().remove(); 
}); 
/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();

  const text = $('#new-todo').val().trim();

  if (text !== '') {
    // Create a new list item with span and delete link
    const newItem = $('<li><span>' + text + '</span><a class="delete">Delete</a></li>');

    // Append the new item to the list
    $('.today-list').append(newItem);
    
    // Clear the input field
    $('#new-todo').val('');
  }
};
// add listener for add
$(document).on('click', '.add-item', addListItem);
}); 
