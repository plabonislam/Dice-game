/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var  scores,roundscroes,activeplayer,dice,getActive,ct,kt;
init();

//getter....we are getting id valu current 0/1 in variable x;
var x=document.querySelector('#current-'+activeplayer).textContent;
console.log(x);
document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function()
	{
		if(getActive)
		{
		dice=Math.floor(Math.random()*6+1);

		//document.querySelector('#current-1').textContent=dice;
		var domdice=document.querySelector('.dice');//1 ta event onek bar use korar khetre tar instance niye kaj kora better
	domdice.style.display='block';
	domdice.src='dice-'+ dice +'.png';
	
	if (dice===5 && ct===1)
	{
		kt=1;
	}

	if(dice===5)
	{
		ct=1;
	}
	else
	{
		ct=0;
	}


	if(dice!==1)
	{
if (dice===5 && kt===1)
{
	document.querySelector('#current-'+activeplayer).textContent='0';
	document.getElementById('score-'+activeplayer).textContent='0';
	nextplayer();
}

else
	{
		roundscroes+=dice;
		document.querySelector('#current-'+activeplayer).textContent=roundscroes;
	}

	}
	else
	{
		nextplayer();
	}

}
	});



document.querySelector('.btn-hold').addEventListener('click',function()
{
	if(getActive)
	{

	score[activeplayer]+=roundscroes;

	document.getElementById('score-'+activeplayer).textContent=score[activeplayer];
	if(score[activeplayer]>=100)
	{
		document.getElementById('name-'+activeplayer).innerHTML='Winner';
		document.querySelector('.dice').style.display='none';
		document.querySelector('.player-'+ activeplayer +'-panel').classList.add('winner');
		document.querySelector('.player-'+ activeplayer +'-panel').classList.remove('active');
getActive=false;
	}
	
	else
	{
	nextplayer();
}
}

});

function  nextplayer()
{
	activeplayer=== 0 ? activeplayer = 1 : activeplayer = 0;
		roundscroes=0;
		document.querySelector('#current-0').textContent=0;
		document.querySelector('#current-1').textContent=0;

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);


function init()
{
score=[0,0];
roundscroes=0;
activeplayer=0;
getActive=true;
dice=Math.floor(Math.random()*6+1);
kt=0;
ct=0;
//setter because using this we set value for id current-0
//document.querySelector('#current-0').textContent=dice;
//document.querySelector('#current-0').innerHTML='<em>'+ dice + '</em>';
//difference of writing textContent & innerHTML is for innerHTML you can put some html code.
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.dice').style.display='none';	

document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');
}