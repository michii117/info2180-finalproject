var httpRequest = new XMLHttpRequest();
var url = "http://localhost/info2180-finalproject/backend.php";
var log= false;


window.addEventListener("load", (e)=>{
    
    
    var home= document.getElementById("homeButton");
    var addUser= document.getElementById("addUserButton");
    var login= document.getElementById("loginButton");
    var newIssue= document.getElementById("newIssueButton");

    home.addEventListener("click", (e)=>{
        e.preventDefault();
        ajaxRequest("home");
    });

    addUser.addEventListener("click", (e)=>{
        e.preventDefault();
        ajaxRequest("adduser");
    });

    newIssue.addEventListener("click", (e)=>{
        e.preventDefault();
        ajaxRequest("newIssue");
    });


    login.addEventListener("click", (e)=>{
        e.preventDefault();
        ajaxRequest("login");

        if(log==false){
            login.children[1].innerHTML = "Login";
            log=true;
        }else{
            login.children[1].innerHTML = "Logout";
            log=false;
        }
    });
    //loadvjPage();
});

function ajaxRequest(query){
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                var resultdiv= document.getElementById("main");
                resultdiv.innerHTML=response;
                
            } else {
                alert('There was a problem with the request.');
            }
        } 
    }

    url= url + "?query=" + query;

    console.log(url);

    httpRequest.open('Get', url, true);
    httpRequest.send();
    url = "http://localhost/info2180-finalproject/backend.php";
}

//View job details functions
//var issueid=1;
var url2 = "http://localhost/info2180-finalproject/viewjob.php";


function initvjpage(mcbutton,mipbutton){ // adds event listeners to the viewjobdetails page
    //unable to acess elements made in php
    
    mcbutton.addEventListener("click",function(event){
        event.preventDefault();
        console.log("MC");
        changeStatus("Closed",issueid);
    });//mc event listener
    mipbutton.addEventListener("click",function(event){
        event.preventDefault();
        console.log("MIP");
        changeStatus("In-Progress",issueid);
    });//mip event listener
}
function loadvjPage(){ //should have issueid as a parameter
    //load page will be the event listener for whatever options are clicked.
    // get id from somewhere
    vjajaxRequest(issueid,"issid");

}
function changeStatus(stat,issueid){
     httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200) {              
                vjajaxRequest(issueid,"issid");  
                //location.reload();              
            } else {
                alert('There was a problem with the request.');
            }
        } 
    }
    staturl="http://localhost/info2180-finalproject/viewjob.php";

    staturl= staturl+ "?issid="+issueid+"&status="+stat;

    httpRequest.open('Get', staturl, true);
    httpRequest.send();
    
}

function vjajaxRequest(query,param){
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                var resultdiv= document.getElementById("main");
                resultdiv.innerHTML=response;
                var mcbutton=document.getElementById("vjclosedbutton");
                var mipbutton=document.getElementById('vjipbutton');
                
                initvjpage(mcbutton,mipbutton);
            } else {
                alert('There was a problem with the request.');
            }
        } 
    }

    url2= url2 + "?"+param+"=" + query;

    //console.log(url2);

    httpRequest.open('Get', url2, true);
    httpRequest.send();
    url2 = "http://localhost/info2180-finalproject/viewjob.php";
}