const output = document.querySelector("#js-output");
const btn = document.querySelector("#getAllUsers");
const btn1 = document.querySelector("#getUserById");
const btn2 = document.querySelector("#updateUser");
const btn3 = document.querySelector("#deleteUser");
const btn4 = document.querySelector("#addUser");

const getAllUsers = () => {
	fetch("https://test-users-api.herokuapp.com/users")
		.then(response => {
			if (response.ok) return response.json();
			throw new Error("Error fetching data");
		})
		.then(data => {
      document.getElementById("js-output").innerHTML = '';
      let valuesOfData = Object.values(data.data);
      for(let i=0; i<valuesOfData.length; i++){
        for(let key in valuesOfData[i]){
          let val = key + " : " + valuesOfData[i][key];
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
};

const getUserById = () => {
  let id2 = document.querySelector(".idOfUser2").value;
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
      throw new Error("Error fetching data");
    })

    .then(data => {
      document.getElementById("js-output").innerHTML = '';
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

}


const updateUser = () => {
  let name1 = document.querySelector(".nameOfUser1").value;
  let age1 = document.querySelector(".ageOfUser1").value;
  var id = document.querySelector(".idOfUser").value;;
  fetch("https://test-users-api.herokuapp.com/users/"+id, {
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
      throw new Error("Error fetching data");
    })

    .then(data =>{
      document.getElementById("js-output").innerHTML = '';
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

}

const removeUser = () => {
  var id1 = document.querySelector(".idOfUser1").value;
  fetch("https://test-users-api.herokuapp.com/users/"+id1, {
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
      throw new Error("Error fetching data");
    })

    .then(data =>{
      document.getElementById("js-output").innerHTML = '';
        let element = document.createElement("div");
        element.className = "el";
        element.textContent = "This element was deleted";
        output.appendChild(element);
    })
    
    .catch(error => {
        console.error("Error: ", error);
    });

}

const addUser = () => {
  let name2 = document.querySelector(".nameOfUser2").value;
  let age2 = document.querySelector(".ageOfUser2").value;
  fetch("https://test-users-api.herokuapp.com/users/", {
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
      throw new Error("Error fetching data");
    })

    .then(data =>{
      document.getElementById("js-output").innerHTML = '';
        let element = document.createElement("div");
        element.className = "el";
        element.textContent = "You have added the new element";
        output.appendChild(element);
    })
    
    .catch(error => {
        console.error("Error: ", error);
    });

}

btn.addEventListener("click", getAllUsers);
btn1.addEventListener("click", getUserById);
btn2.addEventListener("click", updateUser);
btn3.addEventListener("click", removeUser);
btn4.addEventListener("click", addUser);