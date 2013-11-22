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
function  name()
{
prince=document.getElementById('nameBox').value;
}


function help()
{
alert('To play the game you must first pick the name of the prince that will help save the princess. '+
'You will have to navigate through each room but choosing if you would like to run, fight, or pick up certain items. '+
'When you encounter different enemies, only certain items will defeat them. '+ 'Best of luck saving the princess!')
}

function swordTrue()
{
swordYes=document.getElementById('bridgeRight').value=true;
}

function swordFalse()
{
swordNo=document.getElementById('bridgeRight').value=false;
}

function sword(hasSword)
{
if (swordYes===true)
{
alert('You Picked up the Sword')
}
else 
{
alert('You cannot fight the knight, you die')
}
}

 
