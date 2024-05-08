function printDash(number){
  for(let i=0;i<number;i++)
  {
      let array="";
    for(let j=0;j<number-1 ;j++)
    {
      array+="*";
    }
    console.log(array);
  }
}
printDash(4);