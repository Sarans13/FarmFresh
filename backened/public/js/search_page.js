const allCards = document.querySelectorAll(".card");
const searchCardGrid = document.querySelector(".search-cards-grid");
const searchBox = document.querySelector(".search-bar");

searchBox.addEventListener("input", (e) => {
	let searchTerm = e.target.value;

	let newCards = Array.from(allCards).filter((element) => {
		let title = element.querySelector(".cropHead").textContent;
		return title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	for (const newNode of allCards) {
		searchCardGrid.replaceChildren(...newCards);
		console.log("hemlo");
	}
});
