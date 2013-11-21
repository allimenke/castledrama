function nextPage(curr) {

var next, currPage, nextPag;
next=curr+1;
currPage=document.getElementById('page' + curr);
nextPag=document.getElementById('page' + next);

currPage.style.display= 'none';
nextPage.style.display= 'block';

}

function start()
{
document.getElementById('page0').style.display='block';
}


function help()
{
alert('To play the game you must first pick the name of the prince that will help save the princess. '+
'You will have to navigate through each room but choosing if you would like to run, fight, or pick up certain items. '+
'When you encounter different enemies, only certain items will defeat them. '+ 'Best of luck saving the princess!')
}


 
