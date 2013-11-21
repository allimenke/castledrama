function nextPage(curr) {

var next, currPage, nextPag;
next=curr+1;
currPage=document.getElementById('page' + curr);
nextPag=document.getElementById('page' + next);

currPage.style.display= 'none';
nextPag.style.display= 'block';

}

function start()
{
document.getElementById('page0').style.display='block';
}

function pickPrince()
{
document.getElementById('page1').innerHTML='Once upon a time in medieval times, '+
'there was a war.  It was between Allitopia and Plante Castle(the enemy).  It was a long '+
'and deadly war.  One day the Plante knights captured the princess of Allitopia and took '+
'her back to the castle and threw her in the dungeon.  In order to make sure she didn’t '+
'escape, they made the vicious dragon guard the dungeon door.  Once the prince found out, '+
'the game begins. ';
         
}



function help()
{
alert('To play the game you must first pick the name of the prince that will help save the princess. '+
'You will have to navigate through each room but choosing if you would like to run, fight, or pick up certain items. '+
'When you encounter different enemies, only certain items will defeat them. '+ 'Best of luck saving the princess!')
}


 
