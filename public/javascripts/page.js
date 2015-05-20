(function() {


  var form = document.createElement('form');
  document.body.appendChild(form);

  function createDiv(labelDisplay, labelFor, inputType, inputName) {
    var newDiv = document.createElement('div');
    form.appendChild(newDiv);
    var label1 = document.createElement('label');
    label1.innerHTML=labelDisplay;
    label1.setAttribute("for", labelFor);
    newDiv.appendChild(label1);
    var input1 =document.createElement('input');
    input1.setAttribute("type", inputType);
    input1.setAttribute("name", inputName);
    newDiv.appendChild(input1);
    return newDiv;
  }

  var div1 = createDiv("Username: ", "username", "text", "username");

  var submitButton = document.createElement('input');
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "submit");
  form.appendChild(submitButton);



  var theForm =document.getElementsByTagName('form')[0];
  theForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var divs = document.getElementsByTagName('div');
    var usernameInput = divs[0].children[1].value;

    var request = new XMLHttpRequest();

    function badgeLoop (array) {
        for (var i = 0; i < array.length; i++) {
          var badgeImage = document.createElement('img');
             badgeImage.setAttribute("src", array[i].icon_url);
             badgeImage.setAttribute("width", "50px");
             document.body.appendChild(badgeImage);

        }
      };



    request.onload = function() {
      window.studentInfo = (JSON.parse(this.responseText));
      // var badgeNames = badgeLoop(studentInfo.badges);
      badgeLoop(studentInfo.badges);
      var results = document.createElement('p');
      results.innerHTML = "This Treehouse Student's name is " + studentInfo.name + ". They have " + studentInfo.badges.length + " Treehouse badge(s), shown above.";
      form.appendChild(results);

    }

    request.open("get", "http://teamtreehouse.com/" + usernameInput + ".json");
    request.send();

})


// theForm.addEventListener('submit', function(event) {
//      event.preventDefault();
//      var request = new XMLHttpRequest ();
//      request.onload = function () {
//          var texxxt = JSON.parse(this.responseText)
//          alert(this.responseText); //unecessary, knida annoying
//
//          //loop over badge array pulled from JSON file
//          for(var i = 0; i < texxxt.badges.length; i++){
//              var badgeImage = document.createElement('img');
//              badgeImage.setAttribute("src", texxxt.badges[i].icon_url);
//              badgeImage.setAttribute("width", "50px");
//
//              document.body.appendChild(badgeImage);
//          };
//
//          //create element for badge count that displays 'i' from badge array loop
//          var badgeCount = document.createElement('h1');
//          badgeCount.innerHTML = (inputs[0].value + " has " + i + " badges");
//          theForm.appendChild(badgeCount);
//
//

})();

//make a way to get through the json data and show name, badge total and badge names.
