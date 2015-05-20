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
        var result = '';
        for (var i = 0; i < array.length-1; i++) {
          result += array[i].name + ', ';
        }
        result += array[array.length-1].name;
        return result;
      };



    request.onload = function() {
      window.studentInfo = (JSON.parse(this.responseText));
      var badgeNames = badgeLoop(studentInfo.badges);

      var infoForScreen = "This Treehouse Student's name is " + studentInfo.name + ". They have " + studentInfo.badges.length + " Treehouse badge(s). The badge names are " + badgeNames + ".";
      document.write(infoForScreen);

    }

    request.open("get", "http://teamtreehouse.com/" + usernameInput + ".json");
    request.send();

})





})();

//make a way to get through the json data and show name, badge total and badge names.
