function printDash(number){
  for(let i=0;i<number;i++)
  {
      let array="";
    for(let j=0;j<number;j++)
    {
      array+="-";
    }
    console.log(array);
  }
}
printDash(3);