//Example of fetch using openlibrary.org api
document.querySelector("button").addEventListener("click", getFetch);
document.querySelector("h3").innerText = localStorage.getItem("books");

async function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://openlibrary.org/isbn/${choice}.json`;

  if (!choice) {
    document.querySelector("h4").textContent = "Please provide an ISBN!";
    console.log("Please provide an ISBN!");
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("The network response was not ok");
    }
    const data = await response.json();
    console.log(data.title);

    if (!localStorage.getItem("books")) {
      localStorage.setItem("books", data.title);
    } else {
      let books = localStorage.getItem("books") + " ; " + data.title;
      localStorage.setItem("books", books);
    }
    document.querySelector("h3").innerText = localStorage.getItem("books");
  } catch (err) {
    console.log(`error ${err}`);
  }
}
// 9780140328721
// 0451526538
//
