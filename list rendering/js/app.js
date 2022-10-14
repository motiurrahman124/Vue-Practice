var app = Vue.createApp({
    data(){
        return{
            // skills: ["Html","CSS","Js","Php"],
            skills:[
                {name: "Html", experience: 5},
                {name: "CSS", experience: 5},
                {name: "Js", experience: 4},
            ],
            newSkill: {name: "", experience: 0},
        };
    },

    methods: {
        addSkill(){
            this.skills.push( this.newSkill);
            this.newSkill = {};
        },
        removeSkill(i){
            this.skills.splice(i, 1);
        }
    },

    
});

app.mount("#app");