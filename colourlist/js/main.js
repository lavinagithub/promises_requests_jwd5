function addItem(item) {
  const itemHTML =
    '<div class="card" style="width: 18rem;">\n' +
    '    <div class="card-body">\n' +
    '        <h5 class="card-title">' +
    item.name +
    "</h5>\n" +
    '        <p class="card-text">' +
    item.pantone_value +
    "</p>\n" +
    '        <div style="background:' +
    item.color +
    ';">' +
    item.color +
    "</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br/>";
  const itemsContainer = document.querySelector("#list-items");
  itemsContainer.innerHTML += itemHTML;
}

fetch("https://reqres.in/api/unknown").then((response) => {
  if (response.status !== 200) {
    document.write(
      "Looks like there was a problem. Status Code: " + response.status
    );
  }
  response.json().then((jsonContent) => {
    // loop through the data array of the json object and print each object inside it
    // add your code here ...
  });
});
