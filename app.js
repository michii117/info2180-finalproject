var httpRequest = new XMLHttpRequest();
var url = "http://localhost/info2180-finalproject/backend.php";
let d = 0;

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
        if(sess == -1){
            ajaxRequest("login");
        }else if (sess ==2){
            loadadmin();
        }else if (sess ==1){
            loaduser();
        }
        
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
    var resp = -1;
    
    if(emailv == ""||passv ==""){
        alert("no");
    }else{
        $.ajax(
            {
                url: 'login.php',
                method: 'POST',
                data:{
                    login:1,
                    email: emailv,
                    password: passv
                },
                success: function(response){
                    console.log(response);
                    resp = response;//0 -not logged in, 1- normal user, 2 - admin
                    if(resp == 0){
                        console.log("nope")
                        if(d < 1){
                            $(".center").prepend("Incorrect username or Password!");
                        }
                        d += 1;
                    }else if(resp == 1){
                        loaduser();
                        d = 0;
                    }else if(resp == 2){
                        loadadmin();
                        d = 0;
                    }
                },
                dataType: 'text'
            }
        );
    }
}
function loadadmin(){
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
function loaduser(){
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

function addusr(){
    var usrfname = document.getElementById('firstnameFeild');
    var usrlname = document.getElementById('lastnameFeild');
    var usrmail = document.getElementById('emailFeild');
    var usrpass = document.getElementById('passwordFeild');
    $.ajax(
        {
            url: 'usrcontrol.php',
            method: 'POST',
            data:{
                addusr:1,
                Fname:usrfname.value,
                Lname:usrlname.value,
                email: usrmail.value,
                password: usrpass.value
            },
            success: function(response){
                alert(response)
            },
            dataType: 'text'
        }
    );
}