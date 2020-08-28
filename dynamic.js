console.log("Working");
var body = document.getElementsByTagName('body')[0];
//
var div = document.createElement('div');
div.id="app";
div.innerHTML="<form-component></form-component>"
body.appendChild(div);
//
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js';
script.onload = function(){

    //Add form component when ready 
    var formComponent = document.createElement('script');
    formComponent.type = 'text/javascript';
    formComponent.src = './formComponent.js';
    formComponent.onload = function(){
        //Add app component when ready 
        var appComponent = document.createElement('script');
        appComponent.type = 'text/javascript';
        appComponent.src = './app.js';
        body.appendChild(appComponent);
    }
    body.appendChild(formComponent);
}
body.appendChild(script);

