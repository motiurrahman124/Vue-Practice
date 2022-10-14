var app = Vue.createApp({
    data(){
        return{
            aboutMe:{
                name: "Md. Motiur Rahman",
                nickName: "Motiur",
                website: "https://google.com"
            },
            skills:[
                {name: "Html", experience: 5},
                {name: "CSS", experience: 5},
                {name: "Js", experience: 4},
            ],
        };
    },

    
});

app.mount("#app");