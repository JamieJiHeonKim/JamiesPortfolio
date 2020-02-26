document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click',
		onclick, false)
	function onclick(clicked_id) {
		chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, 'ReadNow')
		})
		window.open("https://www.jiheonkim.com/ReadNow/");
	}
})