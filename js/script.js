const content = document.getElementById(`content`);
const names = document.getElementById(`name`);
const ref = document.getElementById(`ref`);
const grade = document.getElementById(`grade`);

fetch("https://bn-hadith-api.herokuapp.com/hadiths")
    .then((response) => response.json())
    .then((data) => {
            const main = document.querySelector(`.main`);
            main.innerHTML = `${data
      .map(function (element) {
        return `<div class="card">
                <p id="name" class="author">${element.name}</p>
                <p id="content" class="conten">
                   ${element.description}
                </p>
                <div class="flex">
                    <p id="grade">
                    ${element.grade}</p>
                    <p id="ref">
                    ${element.references}
                    </p>
                </div>
            </div>`;
      })
      .join("")}`;
    const card = document.querySelectorAll(".card");
    card.forEach((card) => {
      const cardHeight = card.scrollHeight;

      if (cardHeight <= 429) {
        card.classList.add("HideScrollBer");
      } else {
        card.classList.add("scroll");
      }
    });
  });