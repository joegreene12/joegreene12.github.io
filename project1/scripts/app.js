$(document).ready(function(){

  console.log("All resources are loaded");

  //contact submit event handler

$('.loading').hide();
$('.success').hide();
$('.error').hide();


  $('#form_send').on('click',function(){
    var formdata = app.createFormObject();
    console.log(formdata);
    console.log('Clicked form submit...');
    app.sendEmail(formdata);


  });




});

var app = app || {}
app.createFormObject = function() {

  var retJson = {};

  retJson.userName = $('#user_name').val();
  retJson.userEmail = $('#user_email').val;
  retJson.request = $('#user_request').val();


  //testing.. comment when done
  //console.log(retJson);


  return retJson;

}



app.sendEmail = function(emailData) {
  //display loading info...
  $('.loading').slideDown(); // .show()
  //hide old messages... bc this is new request
  $('.success').hide();
  $('.error').hide();

  // ajax argument
  var ajaxData = {
    url: 'http://imperialholonet.herokuapp.com/api/mail',
    type: 'POST',
    data: emailData,
    success: function(data){
      console.log(data);
      $('.loading').slideUp();
      $('.success').show();
    },
    error: function(err) {
      console.log(err);
      $('.loading').slideUp();
      $('.error').show();
    }
  };

  $.ajax(ajaxData);


}
