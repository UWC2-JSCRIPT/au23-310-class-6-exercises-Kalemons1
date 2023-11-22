// Do not change
$(document).ready(function() {
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});



// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
$('#more-info').click(function(event) {
  event.preventDefault(); // Prevent the default
  alert("Here's some info");
});


// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
$('#dog').click(function(event) {
  event.stopPropagation(); // Stop the event
  alert('Bow wow!');
});

});