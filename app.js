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