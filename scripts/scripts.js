window.onload = function() {
  const form = document.querySelector("form");
  const blamBtn = document.querySelector("#button");
  const results = document.querySelector("#results-list");

  blamBtn.addEventListener("click", function(){
    const favoriteThings = [
      document.querySelector('#favorite1').value,
      document.querySelector('#favorite2').value,
      document.querySelector('#favorite3').value,
      document.querySelector('#favorite4').value,
      document.querySelector('#favorite5').value,
    ]

  const li_1 = document.createElement("li");
  li_1.append(favoriteThings[0]);
  results.append(li_1);
  })
}



