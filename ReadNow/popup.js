document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click',
		onclick, false)
	function onclick() {
		chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, 'Hot Trending')
		})
			window.open("https://cnn.com/");
	}
})