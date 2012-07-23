function hbars(){
	/* not used in plurality-demo */
}

function continueText() {
	
    var headerTextId = document.getElementById('headerText');
    
    headerTextId.innerHTML = 'Notice anything UNFAIR about these results?<br />Most people (30% + 29% = 59%)<br />like the puppies more than the kitten... <span onclick="more1()" class="link">MORE</span>';
    
}

function more1() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = '...BUT THE KITTEN STILL WINS!<br />This is called a Split Vote. <span onclick="continueText()" class="link">BACK</span> | <span onclick="more2()" class="link">MORE</span>';
    
}

function more2() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'A Split Vote happens when some people like more<br />than one of the things they are voting for,<br />but are only allowed to pick one. <span onclick="more1()" class="link">BACK</span> | <span onclick="more3()" class="link">MORE</span>';
    
}

function more3() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'In this case, each puppy only gets some of the<br />votes from the puppy-lovers, but the kitten gets ALL<br />the votes from the kitten-lovers. <span onclick="more2()" class="link">BACK</span> | <span onclick="more4()" class="link">MORE</span>';
    
}

function more4() {
	
    var headerTextId = document.getElementById('headerText');
    
    
    headerTextId.innerHTML = 'BUT WHAT IF YOU DID NOT HAVE TO PICK JUST ONE?<br />Let\'s vote again... <a href="approval.html" class="link">A BETTER WAY</a>';
    
}