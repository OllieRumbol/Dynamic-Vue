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
                        <div>
                            <username-and-password-component
                                @submit="submit"
                            ></username-and-password-component>
                        </div>
                        <div class="spacer"></div>
                        <div class="centreText">
                            <a href="#" v-on:click="showPassword = true">Forgot Password</a>
                        </div>
                    </div>
                    <div v-if="showPassword">
                        <button v-on:click="showPassword = false">X</button>
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
    data(){
        return{
            username: "",
            password: "",
            showPassword: false,
            showError: true,
            errorMessage: "Incorrect username and password"
        }
    },
    methods: {
        submit: function(username, password){
            console.log(username, password);
        },
        forgotPasswordSubmit: function(email){
            console.log(email);
        }
    },
    component:{

    }
});