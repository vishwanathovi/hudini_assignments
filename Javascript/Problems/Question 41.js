function printNumberonReverse2(number)
{
  for(let i=number;i>0;i--)
  {
    let string="";
      for(let j=number;j>number-i;j--)
      {
        string+=j;
      }
      console.log(string);
      number--;
  }
}
printNumberonReverse2(10);