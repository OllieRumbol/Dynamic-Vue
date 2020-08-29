Vue.component('username-and-password-component', {
    props: {

    },
    template:
    `
    <div>
        <div>
            <p>Username</p>
            <input type="text" v-model="username"/>
            {{ username }}
        </div>
        <div>
            <p>Password</p>
            <input type="text" v-model="password"/>
            {{ password }}
        </div>
        <div>
            <button v-on:click="click">Submit</button>
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