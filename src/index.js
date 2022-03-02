// Any code related to DOM manipulation should go in init or a fn called within init

const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.children[1];
    // const input = document.querySelector("input#searchByID")

    console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // replace some HTML content with data retrieved from the server
        // first access the content from HTML:

        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
