function hbars(){
	/* not used in plurality-demo */
}

function continueText() {
	
    var headerTextId = document.getElementById('headerText');
    
    headerTextId.innerHTML = 'Notice anything UNDEMOCRATIC about these results?<br />A clear majority (30% + 29% = 59%)<br />prefers the women over the man... <span onclick="more1()" class="link">MORE</span>';
    
}

function more1() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = '...BUT THE MAN STILL WINS!<br />This is called a Split Vote. <span onclick="continueText()" class="link">BACK</span> | <span onclick="more2()" class="link">MORE</span>';
    
}

function more2() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'A Split Vote occurs when you have more than<br />two candidates and two or more of them appeal<br />to the same group of voters. <span onclick="more1()" class="link">BACK</span> | <span onclick="more3()" class="link">MORE</span>';
    
}

function more3() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'In this case, the two women are competing for the<br />same female-attracted voters while the man has<br />all the male-attracted voters to himself. <span onclick="more2()" class="link">BACK</span> | <span onclick="more4()" class="link">MORE</span>';
    
}

function more4() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'BUT WHAT IF YOU DID NOT HAVE TO CHOOSE?<br />Let\'s run this election again... <a href="approval.html" class="link">A BETTER WAY</a>';
    
}