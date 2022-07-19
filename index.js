
  var RandomNum=Math.floor(Math.random()*6)+1;
  var imgSrc="images/dice"+RandomNum+".png";
  document.querySelectorAll('img')[0].setAttribute("src", imgSrc);

  var RandomNum2=Math.floor(Math.random()*6)+1;
  var imgSrc2="images/dice"+RandomNum2+".png";
  document.querySelectorAll('img')[1].setAttribute("src", imgSrc2);


if(RandomNum>RandomNum2)
{
document.querySelector('h1').textContent="Player 1 Win!";
}
else if(RandomNum<RandomNum2)
{
  document.querySelector('h1').textContent="Player 2 Win!";
}
else{
    document.querySelector('h1').textContent="It's a Draw!";
}
