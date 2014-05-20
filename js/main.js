// main.js
// "use strict";
//check to see if doc is loaded

$(document).ready(function(){
  var contacts = [];
  var counter = 0;


  var addContact = function(newContact){
   var contactString = ["<li id='", newContact.id, "' class='contact'>",
                          "<div>", newContact.name,  "</div>", 
                          "<div>", newContact.phone,  "</div>", 
                          "<div>", newContact.email,  "</div>", 
                          "<div>", newContact.img,  "</div>",
                          "<span class='edit'>Edit</span>",
                          "<span class='delete'>Delete</span>",
                       "</li>"].join("");

$("#contacts").append(contactString);
  };

  $('#newContact').submit(function(event){
    event.preventDefault();
    var name = $('#contact_name').val();
    var phone = $('#contact_phone').val();
    var email = $('#contact_email').val();
    var imgUrl = $('#contact_img_url').val();
    alert("I was submitted");

    //keeping track of new contacts
    var newContact = {id: counter,
                       name: name,
                       phone: phone,
                       email: email,
                       imgUrl: imgUrl
                     };
console.log(name, phone, email, imgUrl);
this.reset();
    contacts.push(newContact);
    counter += 1;

//call a function to add our contact to the page.
  addContact(newContact);



  });

  $('ul').on('click', 'span.edit', function(){
    $(this).parent(function(){
      $(this).map();
      this.reset;
    });
  });

  $('ul').on('click', 'span.delete', function(){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
  });


  
   // return contacts;
});




