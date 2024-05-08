function printDollor(number)
{
  for(let i=0;i<number;i++)
  {
    
    for(let j=0;j<=1;j++)
    {
      let string='';
      for(let k=0;k<=1;k++)
      {
        string+='$';
      }
      console.log(string)
    }
    console.log('\t');
  }
}
printDollor(3);