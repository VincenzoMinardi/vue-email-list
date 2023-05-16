const root = Vue.createApp({
    data() {
        return {
            emailRandom: [
                
            ],
        }
    },

    methods: {
        getRandomEmail(){
        for (let i = 0; i < 10 ; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(serverRandom => this.emailRandom.push(serverRandom.data.response))
        }          

        }
    },

    created() {
        this.getRandomEmail()
    },
});

root.mount('#app')