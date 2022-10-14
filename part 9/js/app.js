var app = Vue.createApp({
    data(){
        return{
            show: false,
            skills:[
                {name: "Html", experience: 5},
                {name: "CSS", experience: 5},
                {name: "Js", experience: 4},
                {name: "Java", experience: 3},
                {name: "Php", experience: 6},
                {name: "Python", experience: 4},
                {name: "C#", experience: 5},
                {name: "C++", experience: 5},
                {name: "Go", experience: 2},
            ],
        };
    },

    methods: {
        toggle(){
            this.show = !this.show;
        }
    },
    
});

app.mount("#app");