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

    request.onload = function() {
      console.log(JSON.parse(this.responseText));
    };

      request.open("get", "http://teamtreehouse.com/" + usernameInput + ".json");
      request.send();
  })



  // function badgeLoop (array) {
    //   for (var i = 0; i < array.length; i++) {
    //     console.log(array[i].name);
      // }

    // var badgeNames = badgeLoop(studentInfo.badges);
    // }

    // document.write(studentInfo.name);
    // document.write(studentInfo.badges.length);
    // document.write()








})();

//make a way to get through the json data and show name, badge total and badge names.
