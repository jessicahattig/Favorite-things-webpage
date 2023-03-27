window.onload = function() {
console.log("page loaded");
  const form = document.querySelector("form");
  console.log(form);
  const blamBtn = document.querySelector("button");
  const results = document.querySelector("#result-list");
  console.log(results);

  blamBtn.addEventListener("click", function(){
  console.log(results);
    const favoriteThings = [
      document.querySelector('#favorite1').value,
      document.querySelector('#favorite2').value,
      document.querySelector('#favorite3').value,
      document.querySelector('#favorite4').value,
      document.querySelector('#favorite5').value,
    ]
    console.log(favoriteThings);
    console.log(favoriteThings[1]);

  const li_1 = document.createElement("li")
  li_1.append(favoriteThings[0]);
  console.log(li_1);
  results.append(li_1);
  })
}



