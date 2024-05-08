function printNumbers(number)
{
  for(let i=number;i>0;i--)
  {
    let string="";
    let num=0;
      for(let j=1;j<=i;j++)
      {
        string+=j;
      }
      console.log(string);
  }
}
printNumbers(5);