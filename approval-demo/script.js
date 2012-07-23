function clear() {
	var candidateIsSelectedId1 = document.getElementById('candidateIsSelected-1');
	var candidateIsSelectedId2 = document.getElementById('candidateIsSelected-2');
	var candidateIsSelectedId3 = document.getElementById('candidateIsSelected-3');
	
	candidateIsSelectedId1.checked = false;
	candidateIsSelectedId2.checked = false;
	candidateIsSelectedId3.checked = false;
}

function selectOne(selected, unselected1, unselected2) {
	if (document.getElementById(selected).classList.contains('frozen')) {
		/* Do nothing */
	} else {
		document.getElementById(selected).classList.add('isSelected');
		document.getElementById(unselected1).classList.remove('isSelected');
		document.getElementById(unselected2).classList.remove('isSelected');
	}
}

function toggleMany(selected) {
	if (document.getElementById(selected).classList.contains('frozen')) {
		/* Do nothing */
	} else {
		document.getElementById(selected).classList.toggle('isSelected');
	}
}

function submit(voteTypeIn) {
	
	var voteId = document.getElementById('vote');
	
	var resultsId = document.getElementById('results');
	
	var candidateId1 = document.getElementById('candidate-1');
	var candidateId2 = document.getElementById('candidate-2');
	var candidateId3 = document.getElementById('candidate-3');

	var candidateIsSelectedId1 = document.getElementById('candidateIsSelected-1');
	var candidateIsSelectedId2 = document.getElementById('candidateIsSelected-2');
	var candidateIsSelectedId3 = document.getElementById('candidateIsSelected-3');
	
	var headerTextId = document.getElementById('headerText');
	
	if (!candidateIsSelectedId1.checked && !candidateIsSelectedId2.checked  && !candidateIsSelectedId3.checked ) {
		headerTextId.innerHTML = 'I know it\'s difficult, but please<br />make a choice, then click <span onclick="submit(\'plurality\')" class="link">VOTE</span>';
	} else {
		
		var yourChoice = "";
	
		var ballot = [];
		
		var voteType = voteTypeIn;
		
		var candidateName1 = "Taylor Swift";
		var candidateName2 = "Mila Kunis";
		var candidateName3 = "Chace Crawford";
		var descriptor = "hottest";
		
		var candidateVote1 = 0;
		var candidateVote2 = 0;
		var candidateVote3 = 0;
		
		var onlyCandidate1 = 0;
		var onlyCandidate2 = 0;
		var onlyCandidate3 = 0;
		var candidates1and2 = 0;
		var candidates1and3 = 0;
		var candidates2and3 = 0;
		var allCandidates = 0;
		
		voteId.classList.add('hidden');
		    
		candidateId1.classList.add('frozen');
		candidateId2.classList.add('frozen');
		candidateId3.classList.add('frozen');
		
		if (voteType === 'plurality') {
			if (candidateIsSelectedId1.checked) {
				candidateVote1 = 1;
				onlyCandidate1 = 1;
				yourChoice = candidateName1 + " is the " + descriptor + ".<br />";
			} else if (candidateIsSelectedId2.checked) {
				candidateVote2 = 1;
				onlyCandidate2 = 1;
				yourChoice = candidateName2 + " is the " + descriptor + ".<br />";
			} else if (candidateIsSelectedId3.checked) {
				candidateVote3 = 1;
				onlyCandidate3 = 1;
				yourChoice = candidateName3 + " is the " + descriptor + ".<br />";
			} else {
				/* Do nothing */
			}
		} else { /* voteType === 'approval' */
			if (candidateIsSelectedId1.checked) {
				candidateVote1 = 1;						/* 1 - - */
				if (candidateIsSelectedId2.checked) {
					candidateVote2 = 1;					/* 1 1 - */
					if (candidateIsSelectedId3.checked) {
						candidateVote3 = 1;				/* 1 1 1 */
						allCandidates = 1;
						yourChoice = "all three are the " + descriptor + ".<br />";
					} else { /* candidateVote3 = 0 */	/* 1 1 0 */
						candidates1and2 = 1;
						yourChoice = candidateName1 + " and " + candidateName2 + " are<br /> the " + descriptor + ". ";
					}
				} else { /* candidateVote2 = 0 */			/* 1 0 - */
					if (candidateIsSelectedId3.checked) {
						candidateVote3 = 1;				/* 1 0 1 */
						candidates1and3 = 1;
						yourChoice = candidateName1 + " and " + candidateName3 + " are<br /> the " + descriptor + ". ";
					} else { /* candidateVote3 = 0 */	/* 1 0 0 */
						onlyCandidate1 = 1;
						yourChoice = candidateName1 + " is the " + descriptor + ".<br />";
					}
				}
			} else { /* candidateVote1 = 0 */			/* 0 - - */
				if (candidateIsSelectedId2.checked) {
					candidateVote2 = 1;					/* 0 1 - */
					if (candidateIsSelectedId3.checked) {
						candidateVote3 = 1;				/* 0 1 1 */
						candidates2and3 = 1;
						yourChoice = candidateName2 + " and " + candidateName3 + " are<br /> the " + descriptor + ". ";
					} else { /* candidateVote3 = 0 */	/* 0 1 0 */
						onlyCandidate2 = 1;
						yourChoice = candidateName2 + " is the " + descriptor + ".<br />";
					}
				} else { /* candidateVote2 = 0 */			/* 0 0 - */
					if (candidateIsSelectedId3.checked) {
						candidateVote3 = 1;				/* 0 0 1 */
						onlyCandidate3 = 1;
						yourChoice = candidateName3 + " is the " + descriptor + ".<br />";
					} else { /* candidateVote3 = 0 */	/* 0 0 0 */
						/* Do nothing */
					}
				}
			}
		} /* end nested ifs */
		
		ballot = [voteType, candidateVote1, candidateVote2, candidateVote3, onlyCandidate1, onlyCandidate2, onlyCandidate3, candidates1and2, candidates1and3, candidates2and3, allCandidates];
		
		resultsId.classList.remove('hidden');
		
		headerTextId.innerHTML = 'You think that ' + yourChoice + 'To see the final tally, click <span onclick="results()" class="link">See Results</span>';
		
	}
}

function results() {

	var candidateId1 = document.getElementById('candidate-1');
	var candidateId2 = document.getElementById('candidate-2');
	var candidateId3 = document.getElementById('candidate-3');
	
	var submitResultsId = document.getElementById('submitResults');
	
	var barId1 = document.getElementById('bar-1');
	var barId2 = document.getElementById('bar-2');
	var barId3 = document.getElementById('bar-3');
	
	var headerTextId = document.getElementById('headerText');
	
	headerTextId.innerHTML = "";
	
	candidateId1.classList.remove('isSelected');
	candidateId2.classList.remove('isSelected');
	candidateId3.classList.remove('isSelected');
	
	submitResultsId.classList.add('hidden');
    
	barId1.classList.remove('hidden');
	barId2.classList.remove('hidden');
	barId3.classList.remove('hidden');
    
	barId1.classList.add('running');
	barId2.classList.add('running');
	barId3.classList.add('running');
	
	setTimeout('displayTables()', 1000);
}

function displayTables() {

	var tablesId = document.getElementById('tables');
	
	tablesId.classList.remove('hidden');
	
	hbars();
	
	continueText();
}