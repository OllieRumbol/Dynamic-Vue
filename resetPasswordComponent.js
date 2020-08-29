Vue.component('reset-password-component', {
    props: {

    },
    template:
        `
    <div>
        <div>
            <p>Forgot password</p>
        </div>
        <div>
            <input type="text" v-model="email"/>
            {{ email }}
        </div>
        <div>
            <button v-on:click="click">Submit</button>
        </div>
    </div>
    `,
    data() {
        return {
            email: ""
        }
    },
    methods: {
        click: function(){
            this.$emit("submit", this.email)
        }
    },
    component: {

    }
});