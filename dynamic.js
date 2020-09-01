console.log("Working");
//Get body element of html page
var body = document.getElementsByTagName('body')[0];
//Create div tag for vue to bind too
var div = document.createElement('div');
div.id="app";
div.className="blocker"
div.innerHTML="<form-component></form-component>"
body.appendChild(div);
//Add vue script to the page
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js';
script.onload = function(){
    //Add components once the Vue script has loaded (before will error)
    //Username and Password Component
    var usernameAndPasswordComponent = document.createElement('script');
    usernameAndPasswordComponent.type = 'text/javascript';
    usernameAndPasswordComponent.src = './usernameAndPasswordComponent.js';
    body.appendChild(usernameAndPasswordComponent);
    //Reset password component
    var resetPasswordComponent = document.createElement('script');
    resetPasswordComponent.type = 'text/javascript';
    resetPasswordComponent.src = './resetPasswordComponent.js';
    body.appendChild(resetPasswordComponent);
    //Form Component
    var formComponent = document.createElement('script');
    formComponent.type = 'text/javascript';
    formComponent.src = './formComponent.js';
    //Once the form component is loaded then add the main app component
    formComponent.onload = function(){
        var appComponent = document.createElement('script');
        appComponent.type = 'text/javascript';
        appComponent.src = './app.js';
        body.appendChild(appComponent);
    }
    body.appendChild(formComponent);
}
body.appendChild(script);

function scriptTagHelper(){


}

