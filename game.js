function changePage(curr,next) 
{
var currPage, nextPag;

currPage=document.getElementById(curr);
nextPag=document.getElementById(next);

currPage.style.display= 'none';
nextPag.style.display= 'block';

}

function start()
{
document.getElementById('startPage').style.display='block';

}
function princeName(prince)
{
alert('Your name is '+ prince);
}


function help()
{
alert('To play the game you must first pick the name of the prince that will help save the princess. '+
'You will have to navigate through each room but choosing if you would like to run, fight, or pick up certain items. '+
'When you encounter different enemies, only certain items will defeat them. '+ 'Best of luck saving the princess!');
}


function sword(hasSword)
{
if (hasSword===true)
{
alert('You Picked up the Sword!');
return true;
}
else 
{
alert('You did not pick up the Sword!');
return false;
}
}

function fight1()
{
  if (sword()===true)
  {
  alert('You have defeated the Knight' + 'Move onto the next room');
  moveOn();
  }
  else 
  {
  alert('The Knight killed you.' + 'Game Over');
  reStart();
  }
}

function jump()
{
alert('You commited suicide, Game Over');
} 
function moveOn()
{
document.getElementById('moveOnButton').style.visibility="visible";
}
function reStart()
{
document.getElementById('gameOverButton').style.visibility="visible";
} 
