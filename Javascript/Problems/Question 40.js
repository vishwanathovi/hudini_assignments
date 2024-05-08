function patternDowntoup(number)
{
  let size=number;
  for(let i=number;i>0;i--)
  {
    let string="";
      for(let j=number;j>number-i;j--)
      {
        string+="*";
      }
      console.log(string);
      number--;
  }
  for(let i=1;i<=size;i++)
  {
    let string="";
    let num=0;
      for(let j=1;j<=i;j++)
      {
        string+="*";
      }
      console.log(string);
  }
}
patternDowntoup(5);