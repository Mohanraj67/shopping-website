let productcontainer = document.getElementById("product");
let search = document.getElementById("ss");
let productlist = productcontainer.getElementsByClassName("products"); // Change this line

search.addEventListener("keyup", function () {
 let enteredvalue = event.target.value.toUpperCase();

 for (let i = 0; i < productlist.length; i = i + 1) {
    let productname = productlist[i].getElementsByTagName("h4")[0].innerText; // Change this line

    if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
      productlist[i].style.display = "none";
    } else {
      productlist[i].style.display = "block";
    }
 }
});