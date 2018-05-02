var i;
var vowel= prompt("Enter a word:");
vowel= vowel.toUpperCase();
var arrVowel=vowel.split("");
alert (arrVowel.length);
var result=[];
for (i=0; i<arrVowel.length;i++)
{

    if (arrVowel[i]==="A"|| arrVowel[i]==="I"|| arrVowel[i]==="O"|| arrVowel[i]==="E"||arrVowel[i]==="U")
    {
      result.push(arrVowel[i]);

    }

}
    alert(result.length);
