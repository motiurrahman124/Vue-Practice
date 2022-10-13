var app = Vue.createApp({
    data(){
        return{
            
        };
    },

    methods: {
        handleKey(e){
            // console.log(e);
            console.log(e.target.value);
        }
    },
});

app.mount("#app");