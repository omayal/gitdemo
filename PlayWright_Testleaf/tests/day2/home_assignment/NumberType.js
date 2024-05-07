function NumberType(number)
{
    if(number>0)
    {
return "Number is Positive"
    }
    else if(number<0)
    {
        return "Number is Negative"
    }
    else
    {
      return "Number is Neutral"
    }
}
let number=-10
console.log(NumberType(number))