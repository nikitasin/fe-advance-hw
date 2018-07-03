const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");
const userResult = document.querySelectorAll('.validate');
let res = {};


submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault()
  for (let i = 0; i < userResult.length; i++) {
    res.firstnameBoolean = userResult[0].checkValidity();
    res.lastnameBoolean = userResult[1].checkValidity();
    res.telBoolean = userResult[2].checkValidity();
  }
  if(userResult[0].checkValidity()){
    res.firstname = userResult[0].value;
  }
  if(userResult[1].checkValidity()){
    res.lastname = userResult[1].value;
  }
  if(userResult[2].checkValidity()){
    res.tel = userResult[2].value;
  }
  console.log(res);
}


function showResults(results) {
  resultsList.innerHTML = "";

  let firstLi = document.createElement('li');
  let secondLi = document.createElement('li');
  let thirdLi = document.createElement('li');
  
  if(res.firstnameBoolean){
    firstLi.textContent = res.firstname;
  } else{
    firstLi.textContent = "Error";
    firstLi.style.color = "red";
  }

  if(res.lastnameBoolean){
    secondLi.textContent = res.lastname;
  } else{
    secondLi.textContent = "Error";
    secondLi.style.color = "red";
  }

  if(res.telBoolean){
    thirdLi.textContent = res.tel;
  } else{
    thirdLi.textContent = "Error";
    thirdLi.style.color = "red";
  }
  resultsList.appendChild(firstLi);
  resultsList.appendChild(secondLi);
  resultsList.appendChild(thirdLi);
}
submitBtn.addEventListener("click", showResults);