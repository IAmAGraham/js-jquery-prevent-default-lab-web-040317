$(document).ready(function(){
  // call functions here
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event){
    let listedItem = $('#item').val();
    $('#list ol').append('<li>' + listedItem + '</li>')
    event.preventDefault();
  });
}

// define functions here
