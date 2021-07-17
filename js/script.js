let scoreElem = document.querySelector('.digit');

function chooseSymbol(handSelected) {
	window.localStorage.setItem('user', handSelected);
	gamePlay(handSelected);
	// e.target.style = 'transform: translate(10px, 10px)';
}

function gamePlay(user) {
	document.querySelector('.choices') &&
		document.querySelector('.choices').remove();
	let paper = createHand('rock');
	let scissor = createHand('paper');
	let rock = createHand('scissor');

	let alignment = document.createElement('div');
	alignment.classList.add('alignment');

	let handWrapper = document.createElement('div');
	handWrapper.classList.add('hand-wrapper');
	handWrapper.style.order = '-1';
	let txt = document.createElement('div');
	txt.classList.add('txt');
	txt.textContent = 'You Picked';

	handWrapper.append(txt);
	handWrapper.append(rock);

	alignment.append(handWrapper);

	setTimeout(() => {
		let paper = createHand('rock');
		let scissor = createHand('paper');
		let rock = createHand('scissor');

		let info = document.createElement('div');
		info.classList.add('info');
		info.style.order = '0';
		let infoTxt = document.createElement('div');
		infoTxt.classList.add('text');
		infoTxt.textContent = 'You Won!';

		let playAgain = document.createElement('button');
		playAgain.classList.add('btn');
		playAgain.textContent = 'PLAY AGAIN';

		playAgain.addEventListener('click', function (e) {
			window.localStorage.removeItem('user');
			alignment.remove();
			showHands();
		});

		info.append(infoTxt);
		info.append(playAgain);

		alignment.append(info);
		houseLoading.remove();
		houseHandWrapper.append(rock);
		let newScore = window.localStorage.getItem('score');
		newScore++;
		window.localStorage.setItem('score', newScore);
		scoreElem.textContent = newScore;
	}, 2000);

	let houseHandWrapper = document.createElement('div');
	houseHandWrapper.classList.add('hand-wrapper');
	houseHandWrapper.style.order = '1';

	let houseTxt = document.createElement('div');
	houseTxt.classList.add('txt');
	houseTxt.textContent = 'The House Picked';

	let houseLoading = document.createElement('div');
	houseLoading.classList.add('house-loading');

	houseHandWrapper.append(houseTxt);
	houseHandWrapper.append(houseLoading);

	alignment.append(houseHandWrapper);

	document.querySelector('body').append(alignment);
}

function showHands() {
	let choices = document.createElement('div');
	choices.classList.add('choices');
	// choices.style =
	// 	"background:url('./images/bg-triangle.svg');background-repeat: no-repeat;background-size:70%;background-position: 62px 70px";
	let paper = createHand('rock');
	let scissor = createHand('paper');
	let rock = createHand('scissor');

	scissor.addEventListener('click', () => chooseSymbol('scissor'));
	rock.addEventListener('click', () => chooseSymbol('rock'));
	paper.addEventListener('click', () => chooseSymbol('paper'));

	choices.append(rock);
	choices.append(paper);
	choices.append(scissor);

	document.querySelector('body').append(choices);
}

function showRules() {
	let ruleElem = document.createElement('div');

	ruleElem.classList.add('modal');
	let modalContent = document.createElement('div');
	modalContent.classList.add('modal-content');

	let title = document.createElement('div');
	title.classList.add('title');
	title.textContent = 'RULES';

	let closeBtn = document.createElement('button');
	closeBtn.classList.add('close-btn');
	closeBtn.innerHTML = '&times;';

	function removeElem() {
		ruleElem.remove();
	}
	ruleElem.addEventListener('click', function (e) {
		if (e.target === ruleElem) {
			removeElem();
		}
	});

	closeBtn.addEventListener('click', removeElem);

	let imgTag = document.createElement('img');
	imgTag.src = '/images/image-rules.svg';
	imgTag.alt = 'Rules';

	ruleElem.append(modalContent);

	modalContent.append(title);
	modalContent.append(closeBtn);
	modalContent.append(imgTag);
	document.querySelector('body').append(ruleElem);
}

let ruleBtn = document.querySelector('.rules-btn');
ruleBtn.addEventListener('click', function (e) {
	showRules();
});

function createHand(symbol) {
	let hand = document.createElement('div');
	hand.classList.add('outer-circle');
	hand.classList.add(symbol);

	hand.innerHTML = `<div class="inner-circle">
	           <img src="./images/icon-${symbol}.svg" ></div>`;

	return hand;
}

function startGame() {
	let score = window.localStorage.getItem('score') || 0;
	scoreElem.textContent = score;

	let user = window.localStorage.getItem('user');
	if (user) {
		gamePlay(user);
	} else {
		showHands();
	}
}

startGame();
