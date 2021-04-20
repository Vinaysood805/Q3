
    let listItem = document.getElementById("listItem"); // Error1 fixed (list -> listItem)
    let addButton = document.querySelector("#listItem + input");
    let ul = document.querySelector("ul"); // Error2 fixed (querySelect -> querySelector)

    addButton.onclick = (e) => {
        // Error3 fixed (prevent default was missing)
        e.preventDefault();
        let li = document.createElement("li");
        let delButton = document.createElement("button");
        let checkBox = document.createElement("input");

        let item = listItem.value;
        li.textContent = item;
        delButton.textContent = "Got It!";

        li.appendChild(delButton);
        ul.appendChild(li);//Error4 fixed (changed "li" to li)

        delButton.onclick = deleteIt;
    };

    function deleteIt(e) {
        alert("Are you sure you want to delete this from your grocery list?");
        let delItem = e.target.closest("li");//Error5 fixed (closet -> closest)
        delItem.remove();
    }