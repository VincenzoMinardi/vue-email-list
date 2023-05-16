const root = Vue.createApp({
    data() {
        return {
            emailRandom: [],
        }
    },

    methods: {
        getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(serverRandom => this.emailRandom = serverRandom.data.response)

        }
    },
});

root.mount('#app')