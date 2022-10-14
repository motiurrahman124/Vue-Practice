var app = Vue.createApp({
    data(){
        return{
            number: "",
            name:{
                firstName: "",
                lastName: "",
            }
            
        };
    },

    watch:{
        number(newValue, oldValue){
            if(isNaN(newValue)){
                alert("Enter valid mobile number");
                this.number = oldValue;
            }
            if(newValue.length==11){
                alert("An otp has been sent");
            }
        },
        'name.firstName': function (newValue, oldValue){
            console.log(newValue, oldValue);
        }

    }
    
});

app.mount("#app");