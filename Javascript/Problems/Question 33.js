function printOne(number){
  for(let i=1;i<=number;i++)
  {
    let string="";
      for(let j=1;j<=i;j++)
      {
        string+="1";
      }
      console.log(string);
  }
}
printOne(5);