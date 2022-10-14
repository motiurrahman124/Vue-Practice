var app = Vue.createApp({
    data(){
        return{
            // skills: ["Html","CSS","Js","Php"],
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
            newSkill: {name: "", experience: 0},
        };
    },
    computed:{
        totalCount1(){
            return this.skills.length;
        },
        experiencedSkills(){
            let es = this.skills.filter(item=>{
                return item.experience>= 4;
            });
            return es;
        }
    },

    methods: {
        addSkill(){
            this.skills.push( this.newSkill);
            this.newSkill = {};
        },
        removeSkill(i){
            this.skills.splice(i, 1);
        },
        totalCount(){
            return this.skills.length;
        }
    },

    
});

app.mount("#app");