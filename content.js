function main() {
	const a = document.querySelector('a');
	url = `${location.href}${a.getAttribute('href')}`;

	const urlShorts = "https://www.youtube.com/shorts/"
	const urlVideo = "https://www.youtube.com/video/"

	if (url.slice(0, urlShorts.length) == urlShorts)
	{
		window.location.href = urlVideo + url.slice(urlShorts.length);
	}
}

main();
