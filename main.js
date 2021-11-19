/*
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


const app = new Vue({

    el: '#app',

    data: {
        apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
        mailList: [],
        emailTot: 10,
    },

    computed: {
        mailListOk() {
            return this.mailList.length === this.emailTot ?
                true : false;
        },
    },

    created() {
       this.getMailList();
    },
    

    methods: {
            getMailList() {
                for (let i = 0; i < this.emailTot; i++) {
                    axios.get(this.apiURL)
                    .then((result) => {
                        this.mailList.push(result.data.response);
                    })
                } 

                console.log(this.mailList);
            }
    },

})