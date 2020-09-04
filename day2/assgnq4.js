//Program to display only elements containing 'a' in them from a array
    let arr1=["java","python", "perl", "javascript"]
    for(let i=0;i<arr1.length;i++)
    {
      if(arr1[i].includes("a"))
      {
      console.log(arr1[i])
      }
    }