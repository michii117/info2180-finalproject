var httpRequest = new XMLHttpRequest();
var url = "http://localhost/info2180-finalproject/backend.php";


window.addEventListener("load", (e)=>{
    
    var home= document.getElementById("homeButton");
    var addUser= document.getElementById("addUserButton");
    var login= document.getElementById("loginButton");
    var logout= document.getElementById("logoutButton");
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
    });

    logout.addEventListener("click", (e)=>{
        e.preventDefault();
        var h= document.getElementById('homeButton');
        var a= document.getElementById('addUserButton');
        var n= document.getElementById('newIssueButton');
        var lo= document.getElementById('logoutButton');
        var li= document.getElementById('loginButton');
        h.classList.add('hide');
        a.classList.add('hide');
        n.classList.add('hide');
        lo.classList.add('hide');
        li.classList.remove('hide');
        ajaxRequest("logout");
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

function mylogin(){
    var emailv= document.getElementById("email").value;
    var passv = document.getElementById("passcode").value;

    if((emailv == "admin@project2.com") & (passv =="password123")){
        var h= document.getElementById('homeButton');
        var a= document.getElementById('addUserButton');
        var n= document.getElementById('newIssueButton');
        var lo= document.getElementById('logoutButton');
        var li= document.getElementById('loginButton');
        h.classList.remove('hide');
        a.classList.remove('hide');
        n.classList.remove('hide');
        lo.classList.remove('hide');
        li.classList.add('hide');
        ajaxRequest("home");
    }
    else{
        var h= document.getElementById('homeButton');
        var n= document.getElementById('newIssueButton');
        var lo= document.getElementById('logoutButton');
        var li= document.getElementById('loginButton');
        h.classList.remove('hide');
        n.classList.remove('hide');
        lo.classList.remove('hide');
        li.classList.add('hide');
        ajaxRequest("home"); 
    }
}

function toggle(){
    var btnContainer = document.getElementById('issuesSectionContainers');
    var btns = btnContainer.getElementsByClassName('filterButtons');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function(){
            var current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', ' ');
            this.className += ' active';
        });
        }
}

