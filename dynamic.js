//Check if cookie exists
if (getCookie("test") === "") {
    //Get body element of html page
    var body = document.getElementsByTagName('body')[0];
    //Create div tag for vue to bind too
    var div = document.createElement('div');
    div.id = "app";
    body.appendChild(div);
    //Add vue script to the page
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js';
    script.id = 'vueScript';
    //Once vue script is loaded then add vue component
    script.onload = function () {
        Vue.component('username-and-password-component', {
            props: {

            },
            template:
                `
            <div>
                <input type="text" class="textBox" v-model="username" placeholder="Email Address"/>
                <div class="extraLargeSpacer"></div>
                <input type="password" class="textBox" v-model="password" placeholder="Password"/>
                <div class="largeSpacer"></div>
                <button v-on:click="click" class="button">Submit</button>
            </div>
            `,
            data() {
                return {
                    username: "",
                    password: ""
                }
            },
            methods: {
                click: function () {
                    this.$emit("submit", this.username, this.password);
                }
            },
            computed: {

            }
        });

        Vue.component('reset-password-component', {
            props: {

            },
            template:
                `
            <div>
                <div class="extraLargeSpacer"></div>
                <input type="text" class="textBox" v-model="email" placeholder="Email Address"/>
                <div class="largeSpacer"></div>
                <button v-on:click="click" class="button">Submit</button>
            </div>
            `,
            data() {
                return {
                    email: ""
                }
            },
            methods: {
                click: function () {
                    this.$emit("submit", this.email)
                }
            },
            computed: {

            }
        });

        var app = new Vue({
            el: '#app',
            data: {
                showPassword: false,
                showError: false,
                errorMessage: "Incorrect username and password",
                showSuccess: false,
                successMessage: ""
            },
            template:
                `
            <div class="blocker">
                <div class="dark"></div>
                <div class="loginContainer">
                    <div class="bar centreText">
                        <h1>Modal</h1>
                    </div>
                    <div class="loginInner">
                        <div v-if="showError">
                            <div class="failure">
                                {{ errorMessage }}
                            </div>
                            <div class="extraLargeSpacer"></div>                
                        </div>
                        <div v-if="showSuccess">
                            <div class="success">
                                {{ successMessage }}
                            </div>
                            <div class="extraLargeSpacer"></div>                
                        </div>
                        <div v-if="!showPassword">
                            <username-and-password-component
                                @submit="submit"
                            ></username-and-password-component>
                            <div class="spacer"></div>
                            <div class="centreText">
                                <a href="#" v-on:click="showPassword = true">Forgot Password</a>
                            </div>
                        </div>
                        <div v-if="showPassword">
                            <div class="right">
                                <button class="crossButton" v-on:click="closePassword">X</button>
                            </div>
                            <reset-password-component
                                @submit="forgotPasswordSubmit"
                            ></reset-password-component>
                        </div>
                        <div class="largeSpacer"></div>
                        <div class="line"></div>
                        <div class="largeSpacer"></div>
                        <div class="centreText">
                            <a href="#" class="subscribeLink centreText">Subscribe today</a> 
                        </div>
                    </div>
                </div>
            </div>
            `,
            methods: {
                submit: function (username, password) {
                    console.log(username, password);
                    this.errorMessage = false;
                    if (username == "" || password == "") {
                        this.errorMessage = "Username and password can not be empty";
                        this.showError = true;
                        return;
                    }
                    //Add check external stuff here
                    setCookie("test", true, 1, getDomain());
                    this.close();
                },
                forgotPasswordSubmit: function (email) {
                    console.log(email);
                    this.showError = false;
                    if (email == "") {
                        this.errorMessage = "Email can not be empty";
                        this.showError = true;
                        return;
                    }
                    //Add check external stuff here
                    this.successMessage = "Password reset sent";
                    this.showSuccess = true;
                },
                close: function () {
                    var appElement = document.getElementById('app');
                    appElement.remove();
                    var vueScript = document.getElementById('vueScript');
                    vueScript.remove();
                },
                closePassword: function () {
                    this.showPassword = false;
                    this.showError = false;
                    this.showSuccess = false;
                }
            },
        });
    }
    body.appendChild(script);
}

//Cookies
function getDomain() {
    return window.location.hostname;
}

function setCookie(name, value, days, domain) {
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + ";domain=" + domain + ";path=/";
}

function getCookie(name) {
    var name = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = c.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function deleteCookie(name, domain) {
    var date = new Date(1970);
    var expires = "expires=" + date.toUTCString();
    domain = ";domain=" + domain;
    document.cookie = name + "=" + ";" + expires + domain + ";path=/";
}