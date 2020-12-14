//singleton pattern

let singleton = (function() {

    let config;

    function initialConfig(name, age){
        this.name = name;
        this.age = age;
    }


    return {
        getDetails: function(name,age){
            if(!config){
                config = new initialConfig(name, age);
            }

            return config;
        }
    }

})();

let data1 = singleton.getDetails("shreya", "22");

console.log(data1);
let data2 = singleton.getDetails("hehe");
console.log(data2);