function hbars(){
	var hbarId1 = document.getElementById('hbar-1');
	var hbarId2 = document.getElementById('hbar-2');
	var hbarId3 = document.getElementById('hbar-3');
	var hbarId4 = document.getElementById('hbar-4');
	var hbarId5 = document.getElementById('hbar-5');
	var hbarId6 = document.getElementById('hbar-6');
	var hbarId7 = document.getElementById('hbar-7');
	
	hbarId1.classList.add('running');
	hbarId2.classList.add('running');
	hbarId3.classList.add('running');
	hbarId4.classList.add('running');
	hbarId5.classList.add('running');
	hbarId6.classList.add('running');
	hbarId7.classList.add('running');
}

function continueText() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'That\'s more like it! The women are<br />closely divided, but one of them still wins. <span onclick="more1()" class="link">MORE</span>';
    
}

function more1() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'Did you notice anything weird about the final numbers?<br />They add up to more than 100%...<br />Hmmm... <span onclick="continueText()" class="link">BACK</span> | <span onclick="more2()" class="link">MORE</span>';
    
}

function more2() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'The percentages are INDEPENDENT of one another.<br />Each represents the percentage of voters who<br />APPROVE of that candidate. <span onclick="more1()" class="link">BACK</span> | <span onclick="more3()" class="link">MORE</span>';
    
}

function more3() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'If you scroll down the page, you\'ll see the ballot<br />breakdown. You will find that these percentages<br />DO add up to 100%. <span onclick="more2()" class="link">BACK</span> | <span onclick="more4()" class="link">MORE</span>';
    
}

function more4() {
	
    var headerTextId = document.getElementById('headerText');
    
	
    var highlightedId = document.getElementById('highlighted');
	
	highlightedId.classList.remove('highlightRow');
    
    headerTextId.innerHTML = 'These percentages represent the number<br />of voters who approve of each possible<br />combination of candidates. <span onclick="more3()" class="link">BACK</span> | <span onclick="more5()" class="link">MORE</span>';
    
}

function more5() {
	
    var headerTextId = document.getElementById('headerText');
    
	
    var highlightedId = document.getElementById('highlighted');
	
	highlightedId.classList.add('highlightRow');
    
    headerTextId.innerHTML = 'The highlighted row illustrates why<br />there is such a dramatic difference in<br />the two election results. <span onclick="more4()" class="link">BACK</span> | <span onclick="more6()" class="link">MORE</span>';
    
}

function more6() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'Under Approval Voting, all the voters who<br />are torn between the two women ARE FREE TO<br />EXPRESS THEIR APPROVAL OF BOTH. <span onclick="more5()" class="link">BACK</span> | <span onclick="more7()" class="link">MORE</span>';
    
}

function more7() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'To learn more about Approval Voting, please visit<br /><a href="http://www.electology.org/approval-voting" target="_blank" class="link">electology.org</a><br />To run through this demo again <a href="index.html" class="link">CLICK HERE</a>';
    
}