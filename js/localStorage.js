const localStorage = window.localStorage;

function getItem(key) {
	return window.localStorage.getItem(key);
}

function setItem(key, value) {
	return window.localStorage.setItem(key, value);
}

function removeItem(key) {
	return window.localStorage.removeItem(key);
}

function addUser(user) {
	return setItem('user', user);
}

function removeUser() {
	return removeItem('user');
}

function addScore(score) {
	return setItem('score', score);
}
