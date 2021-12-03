var httpRequest = new XMLHttpRequest();
var url = "http://localhost/info2180-finalproject/backend.php";
let d = 0;

window.addEventListener("load", (e)=>{
    
    var menu= document.getElementById('menu');
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
        menu.classList.add('hide');
        e.preventDefault();
        if(sess == -1){
            ajaxRequest("login");
        }else if (sess ==1){
            loadadmin();
        }else if (sess >1){
            loaduser();
        }else{
            menu.classList.add('hide');
        }
    });

    logout.addEventListener("click", (e)=>{
        e.preventDefault();
        sess = -1;
        var h= document.getElementById('homeButton');
        var a= document.getElementById('addUserButton');
        var n= document.getElementById('newIssueButton');
        var lo= document.getElementById('logoutButton');
        var li= document.getElementById('loginButton');
        h.classList.add('hide');
        a.classList.add('hide');
        n.classList.add('hide');
        lo.classList.add('hide');
        menu.classList.add('hide');
        menu.style.display= null;
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
                if(query=="home"){
                    var issbuttons=document.getElementsByClassName("vb");
                     //console.log(issbuttons.length);
                    loadvjPage(issbuttons);
                }
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
    var menu= document.getElementById('menu');
    
    if(emailv == ""||passv ==""){
    menu.classList.add('hide');
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
                        $(".menu").hide();
                        if(d < 1){
                            $(".menu").hide();
                            $(".center").prepend("Incorrect username or Password!");
                        }
                        d += 1;
                    }else if(resp > 1){
                        $(".menu").show();
                        loaduser();
                        d = 0;
                    }else if(resp == 1){
                        $(".menu").show();
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
    var menu= document.getElementById('menu');
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
        menu.classList.remove('hide');
        ajaxRequest("home");
}
function loaduser(){
    var menu= document.getElementById('menu');
    var h= document.getElementById('homeButton');
        var n= document.getElementById('newIssueButton');
        var lo= document.getElementById('logoutButton');
        var li= document.getElementById('loginButton');
        h.classList.remove('hide');
        n.classList.remove('hide');
        lo.classList.remove('hide');
        li.classList.add('hide');
        menu.classList.remove('hide');
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
function loadvjPage(buttons){ //should have issueid as a parameter
    //load page will be the event listener for whatever options are clicked.
    // get id from somewhere
    //var issueid=1;
    //console.log(buttons.length);
    for(i=0;i<buttons.length;i++){
        //console.log(buttons[i].id);
        buttons[i].addEventListener('click',function(event){
            event.preventDefault();
            var issueid=event.target.id;
            console.log(event.target.id);
            vjajaxRequest(issueid,"issid");
        });
    }


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

                //initvjpage(mcbutton,mipbutton);
                     mcbutton.addEventListener("click",function(event){
            event.preventDefault();
            console.log("MC");
            changeStatus("Closed",query);//changed from issueid
        });//mc event listener
        mipbutton.addEventListener("click",function(event){
            event.preventDefault();
            console.log("MIP");
            changeStatus("In-Progress",query); //changed from issueid
    });//mip event listener
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