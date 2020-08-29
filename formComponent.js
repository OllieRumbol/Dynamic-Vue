Vue.component('form-component', {
    props: {

    },
    template:
    `
        <div>
            <div>
                <h1>Input Form</h1>
            </div>
            <div v-if="!showPassword">
                <div>
                    <username-and-password-component
                        @submit="submit"
                    ></username-and-password-component>
                </div>
                <div>
                    <a href="#" v-on:click="showPassword = true">Forgot Password</a>
                </div>
            </div>
            <div v-if="showPassword">
            <button v-on:click="showPassword = false">X</button>
                <reset-password-component
                    @submit="forgotPasswordSubmit"
                ></reset-password-component>
            </div>
            <div>
                <p>Subscribe today</p>
            </div>
        </div>
    `,
    data(){
        return{
            username: "",
            password: "",
            showPassword: false
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