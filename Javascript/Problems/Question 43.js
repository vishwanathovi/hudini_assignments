function triangleDown(number)
{
  let string = "";
  for (let i = number; i >=0; i--) {
    for (let j = 1; j <= number - i; j++) {
      string += " ";
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
        }
        string += "\n";
  }
  console.log(string);
}
triangleDown(6);