
let data;
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => data = json);
   

function sort(type){
    let cardsToShow = "";
    console.log(data)
for(let i = 0; i != data.length; i++){
    let card = " <a href='"+ data[i].url +"'> <div class='card-main d-flex row align-items-start'>  <h1 class='card-title  d-flex'>" + data[i].title + "</h1><div class='card-img-top  d-flex' style='background: url("+ data[i].image +"); background-size: cover; background-repeat: no-repeat;'></div> <div class='card-body  d-flex'><p class='card-text  d-flex'>"+ data[i].description + "</p></div></div></a>"
  
    if(type == data[i].type){
        cardsToShow += card
    }

    else if(type == "allweb"){
        if("web" == data[i].type){
            cardsToShow += card
        } 
        else if("sec" == data[i].type){
            cardsToShow += card
        } 
    }
    
    else if(type == "allskill"){
        if("webskill" == data[i].type){
            cardsToShow += card
        } 
        else if("secskill" == data[i].type){
            cardsToShow += card
        } 
}
   
}
document.getElementById("cards").innerHTML = cardsToShow;
}

function setActiveTab(input){

        var element = document.getElementById("1");
        element.classList.remove("activeTab");
        var element = document.getElementById("h1");
        element.classList.remove("activeTab");
        var element = document.getElementById("2");
        element.classList.remove("activeTab");
        var element = document.getElementById("h2");
        element.classList.remove("activeTab");
        var element = document.getElementById("4");
        element.classList.remove("activeTab");
        var element = document.getElementById("h4");
        element.classList.remove("activeTab");
    if(input == "web"){
    //document.getElementById("tabs").innerHTML = "";
        
        var element = document.getElementById("1");
        element.classList.add("activeTab");
        var element = document.getElementById("h1");
        element.classList.add("activeTab");
    }
    else if(input == "sec"){
        var element = document.getElementById("2");
        element.classList.add("activeTab");
        var element = document.getElementById("h2");
        element.classList.add("activeTab");
    }
    else if(input == "hard"){
        var element = document.getElementById("3");
        element.classList.add("activeTab");
        var element = document.getElementById("h3");
        element.classList.add("activeTab");
    }
    else if(input == "allweb"){
        var element = document.getElementById("4");
        element.classList.add("activeTab");
        var element = document.getElementById("h4");
        element.classList.add("activeTab");
    }
    else if(input == "allskill"){
        var element = document.getElementById("4");
        element.classList.add("activeTab");
        var element = document.getElementById("h4");
        element.classList.add("activeTab");
    }
}

