//create an array of objects with objects 

let details= [
{
    name:"shifa",
    age:23,
    country:"india",
    hobbies:["chess","readingbooks","drawing"],
},
{
    name:"shiha",
    age:20,
    country:"nepal",
    hobbies:["cooking","skating","drawing"]
},
{
    name:"shahroz",
    age:33,
    country:"india",
    hobbies:["football","cricket","basketball"]
}
];
        function display(){
       for(let i=0; i<details.length; i++)
       {
        console.log(details[i])
       }
    }
    display();
    
