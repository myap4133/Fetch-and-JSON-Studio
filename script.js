// TODO: add code here
window.addEventListener("load", function(){
    let data;
    let response = fetch("https://handlers.education.launchcode.org/static/astronauts.json").
    then(function(response){
        console.log(response);
        response.json().then(function(data){
            const container = document.getElementById("container");
            let temp;
            for(let j = 0; j < data.length; ++j){
                for(let k = j + 1; k < data.length; ++k){
                    if(data[j].hoursInSpace < data[k].hoursInSpace){
                        temp = data[k];
                        data[k] = data[j];
                        data[j] = temp;
                    }
                }
            }
            container.innerHTML += `<h2>${data.length} Astronaut Profiles</h2>`;

            for(let i = 0; i < data.length; ++i){
                if(data[i].active){
                    container.innerHTML += `<div class="astronaut">
                <div class="bio">
                    <h3>Astronaut ${i + 1}: ${data[i].firstName} ${data[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                        <li style="color:green;">Active: ${data[i].active}</li>
                        <li>Skills: ${data[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${data[i].picture}>
                </div>`;
                }
                else{
                    container.innerHTML += `<div class="astronaut">
                <div class="bio">
                    <h3>Astronaut ${i + 1}: ${data[i].firstName} ${data[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                        <li>Active: ${data[i].active}</li>
                        <li>Skills: ${data[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${data[i].picture}>
                </div>`;
                }
            }
        })
    })
});