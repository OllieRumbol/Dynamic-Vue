//Check if cookie exists
if (getCookie("test") === "") {
    //Get body element of html page
    var body = document.getElementsByTagName('body')[0];
    //Create div tag for vue to bind too
    var div = document.createElement('div');
    div.id = "app";
    div.className = "blocker"
    div.innerHTML = "<form-component></form-component>"
    body.appendChild(div);
    //Add vue script to the page
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js';
    script.id = 'vueScript';
    script.onload = function () {
        Vue.component('form-component', {
            props: {

            },
            template:
                `
            <div>
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
                                <button class="crossButton" v-on:click="showPassword = false">X</button>
                            </div>
                            <reset-password-component
                                @submit="forgotPasswordSubmit"
                            ></reset-password-component>
                        </div>
                        <div class="largeSpacer"></div>
                        <div class="line"></div>
                        <p class="subscribeLink centreText">Subscribe today</p> 
                    </div>
                </div>
            </div>
        `,
            data() {
                return {
                    showPassword: false,
                    showError: false,
                    errorMessage: "Incorrect username and password"
                }
            },
            methods: {
                submit: function (username, password) {
                    console.log(username, password);
                    setCookie("test", true, 1, getDomain());
                },
                forgotPasswordSubmit: function (email) {
                    console.log(email);
                },
                close: function () {
                    var appElement = document.getElementById('app');
                    appElement.remove();
                    var vueScript = document.getElementById('vueScript');
                    vueScript.remove();
                }
            },
            computed: {

            }
        });

        Vue.component('username-and-password-component', {
            props: {

            },
            template:
                `
        <div>
            <input type="text" class="textBox" v-model="username" placeholder="Email Address"/>
            <div class="extraLargeSpacer"></div>
            <input type="text" class="textBox" v-model="password" placeholder="Password"/>
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

            },
            methods: {

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