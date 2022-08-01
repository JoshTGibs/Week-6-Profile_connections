var profileName = document.querySelector("#jane");
var requests = document.querySelector("#requests");
var connections = document.querySelector("#connections");


function change(){
    profileName.innerText = "John Reacher"
}

function accept(id){
    var element = document.querySelector(id)
    element.remove()
    requests.innerText--
    connections.innerText++
}

function ignore(id){
    var element = document.querySelector(id)
    element.remove()
    requests.innerText--
}