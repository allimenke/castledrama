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
var prince={
name: '',
hasSword: 'yes',
hasSpear: 'yes',
hasKey: 'no',
};


function princeName(pname)
{
alert('Your name is '+ pname);
prince.name=pname;
pickedName();
}


function help()
{
alert('To play the game you must first pick the name of the prince that will help save the princess. '+
'You will have to navigate through each room but choosing if you would like to run, fight, or pick up certain items. '+
'When you encounter different enemies, only certain items will defeat them. '+ 'Best of luck saving the princess!');
}


function sword(pickup)
{
if(pickup===true)
{
alert('You Picked up the Sword!');
prince.hasSword='yes';
keepWalk();
}
else 
{
alert('You did not pick up the Sword!');
prince.hasSword='no';
keepWalk();
}
}

function fight1()
{

  if(prince.hasSword==='yes'){
  alert('You have defeated the Knight' + 'Move onto the next room');

  moveOn();
  }
 else
 {
 alert('The knight Killed You!'+'Game Over!');
 reStart();
 }
}

function jump()
{
alert('You commited suicide, Game Over');
reStart();
} 

function fight2()
{
var person = ['wizard','knight'];
enemy=person[Math.floor(Math.random()*person.length)];
if(enemy==='wizard')
{
alert('The Wizard defeated you!  Game Over');
reStart2();
}
else if(enemy==='knight')
{
alert('You defeated the Knight!  You take the key from the Knight and advance to the next room');
prince.hasKey='yes';
goOn();
}
}

function spear(pickup2)
{
if(pickup2===true)
{
alert('You Picked up the Spear!');
prince.hasSpear='yes';
keepWalk2();
}
else 
{
alert('You did not pick up the Spear!');
prince.hasSpear='no';
keepWalk2();
}
}

function fight3()
{

  if(prince.hasSpear==='yes'){
  alert('You have defeated the Dragon' + 'Go Save the Princess');
  goToPrincess();
  }
 else
 {
 alert('The Dragon Killed You!'+'Game Over!');
 reStart3();
 }
}

function dance()
{
var party = ['dance','slap'];
dancing=party[Math.floor(Math.random()*party.length)];
if(dancing==='dance')
{
alert('The princess chose to dance the night away with you! Play again!');
reStart4();
}
else if(dancing==='slap')
{
alert('The princess is mad at you for letting her get trapped!  She slaps you in the face. Play again');
reStart4();
}
}






function moveOn()
{
document.getElementById('moveOnButton').style.visibility="visible";
}
function reStart()
{
document.getElementById('gameOverButton').style.visibility="visible";
} 
function keepWalk()
{
document.getElementById('keepWalkButton').style.visibility="visible";
}
function pickedName()
{
document.getElementById('enteredName').style.visibility="visible";

}
function goOn()
{
document.getElementById('moveOnButton2').style.visibility="visible";

}
function reStart2()
{
document.getElementById('gameOverButton2').style.visibility="visible";
} 
function keepWalk2()
{
document.getElementById('keepWalkButton2').style.visibility="visible";

}
function reStart3()
{
document.getElementById('gameOverButton3').style.visibility="visible";
} 

function reStart4()
{
document.getElementById('gameOverButton4').style.visibility="visible";
} 



