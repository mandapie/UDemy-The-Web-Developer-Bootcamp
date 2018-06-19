//delay JS so that HTML can load before JS
window.setTimeout(function () {
    var choice = prompt("What would you like to do?");
    var list = [];
    while (choice !== "quit") {
        if (choice === "new") {
            list.push(prompt("Add an item!"));
        }
        else if (choice === "list") {
            console.log(list);
        }
        choice = prompt("What would you like to do?");
    }
}, 500);