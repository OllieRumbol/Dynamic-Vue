Vue.component('username-and-password-component', {
    props: {

    },
    template:
    `
    <div>
        <div>
            <input type="text" class="textBox" v-model="username" placeholder="Email Address"/>
            {{ username }}
        </div>
        <div class="extraLargeSpacer"></div>
        <div>
            <input type="text" class="textBox" v-model="password" placeholder="Password"/>
            {{ password }}
        </div>
        <div class="largeSpacer"></div>
        <div>
            <button v-on:click="click" class="loginButton">Submit</button>
        </div>
    </div>
    `,
    data(){
        return{
            username: "",
            password: ""
        }
    },
    methods: {
        click: function(){
            this.$emit("submit", this.username, this.password);
        }
    },
    component:{

    }
});