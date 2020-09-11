//Question4

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
    for(let i=0; i<details.length; i++)
    {
        if(details[i].country=="india")
        {
        console.log(details[i])
        }
        
    }
    for(let i=0; i<details.length; i++)
    {
        if(details[i].age<30)
        {
        console.log(details[i])
        }
    }
