Vue.component('form-component', {
    props: {

    },
    template:
    `
        <div>
            <div>
                <h1>Input Form</h1>
            </div>
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
            console.log("HELLO WORLD")
        }
    },
    component:{

    }
});