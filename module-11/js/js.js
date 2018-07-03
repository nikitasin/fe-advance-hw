let getUserById = document.querySelector(".getUserId")
let listName = document.querySelector(".list_name");
let buttonAllList = document.querySelector(".all");
let addUserName = document.querySelector(".add_name");
let addUserScore = document.querySelector(".add_score");
let addButton = document.querySelector(".btn_add");
let removeButton = document.querySelector(".btn_remove");
let updateUserName = document.querySelector(".add_name_update");
let updateUserScore = document.querySelector(".add_score_update");
let updateUserId = document.querySelector(".add_id_update");
let updateButton = document.querySelector(".btn_update");
buttonAllList.addEventListener('click', function getAllUsers (){
fetch(`https://test-users-api.herokuapp.com/users/`)
   .then(res => res.json())
   .then(res => {
     console.log(res);
    document.getElementById("output").innerHTML = '';
      let valuesOfres = Object.values(res.data);
      for(let i=0; i<valuesOfres.length; i++){
        for(let key in valuesOfres[i]){
          let val = key + " : " + valuesOfres[i][key];
          let element = document.createElement("div");
          element.className = "el";
          element.textContent = val;
          output.appendChild(element);
        }
      }
    
   })
    .catch(error => {
      	console.error("Error: ", error);
    	});
});
addButton.addEventListener('click', function addUser(){
    let name2 = document.querySelector(".add_name").value;
    let age2 = document.querySelector(".add_score").value;
  fetch(`https://test-users-api.herokuapp.com/users/`, {
      method: 'POST',
  body: JSON.stringify({name: name2, age: age2}),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    }
  })
    .then(response => {
      if (response) {
        return response.json();
      }
      throw new Error("Error data");
    })
    .catch(error => {
        console.error("Error: ", error);
    });
});
 removeButton.addEventListener("click", function removeUser(){
     let id1 = document.querySelector(".remove_id").value;
  fetch('https://test-users-api.herokuapp.com/users/'+id1, {
      method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    }
  })
      .then(response => {
      if (response) {
        return response.json();
      }
      throw new Error("Error data");
    })
       .catch(error => {
        console.error("Error: ", error);
  });
 });

updateButton.addEventListener("click", function updateUser(){
   let name1 = document.querySelector(".add_name_update").value;
  let age1 = document.querySelector(".add_score_update").value;
  var id = document.querySelector(".add_id_update").value;
  fetch('https://test-users-api.herokuapp.com/users/'+id, {
  method: 'PUT',
  body: JSON.stringify({name: name1, age: age1}),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
     .then(response => {
      if (response) {
        return response.json();
      }
      throw new Error("Error data");
    })
        .catch(error => {
        console.error("Error: ", error);
    });
 });

getUserId.addEventListener("click", function getUserById (){
    let id2 = document.querySelector(".getUser").value;
    fetch("https://test-users-api.herokuapp.com/users/"+id2, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
    .then(response => {
      if (response) {
        return response.json();
      }
      throw new Error("Error data");
    })

    .then(data => {
      document.getElementById("output").innerHTML = '';
      for(let key in data.data){
        let val = key + ": " + data.data[key];
        let element = document.createElement("div");
        element.className = "el";
        element.textContent = val;
        output.appendChild(element);
      }
    })
    
    .catch(error => {
        console.error("Error: ", error);
    });
})