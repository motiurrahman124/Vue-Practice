var app = Vue.createApp({
    data(){
        return{
            name: "",
        };
    },

    methods: {
        handleKey(e){
            // console.log(e);
            // console.log(e.target.value);
            this.name = e.target.value;
        },
        handleCardClick(e){
            console.log(e);
        }
    },
});

app.mount("#app");