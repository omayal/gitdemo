function GradeforScore(score)
{
    switch(true)
{
    case (score<100 && score>=80):
        return "GradeA";
    break;
    case (score<80 && score>=60):
       return "Grade B";
    break;
    case (score<60 && score>=40):
        return "Grade C";
    break;
    case score<40 :
        return "Grade E";
    break;
    default:
        return "Not a valid number";
}
}
score=80

console.log(GradeforScore(score));