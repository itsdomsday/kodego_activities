// 1. Select the section with an id of container without using querySelector.

document.getElementById("container");

// 2. Select the section with an id of container using querySelector.

document.querySelector("section");

// 3. Select all of the list items with a class of "second".

document.getElementsByClassName("second");

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.

document.getElementsByTagName("ol")[0].getElementsByClassName("third")[0];

// 5. Give the section with an id of container the text "Hello!".

document.getElementById("container").innerText = "Hello!";

// 6. Add the class main to the div with a class of footer.

document.getElementsByClassName("footer").classList.add("main");

// 7. Remove the class main on the div with a class of footer.

document.getElementsByClassName("footer").classList.remove("main");

// 8. Create a new li element.

document.createElement("li");

// 9. Give the li the text "four".

document.getElementsByTagName("li").innerText = "four";

// 10. Append the li to the ul element.

document.getElementsByTagName("ul").appendChild("li");

// 11. Loop over all of the lis inside the ol tag and give them a background color of "green".

document.getElementsByTagName("ol").querySelectorAll("li").style = "background-color: green";

// 12. Remove the div with a class of footer.

document.getElementsByClassName("footer").remove();