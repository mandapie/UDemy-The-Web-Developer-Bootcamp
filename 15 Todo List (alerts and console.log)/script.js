//delay JS so that HTML can load before JS
window.setTimeout(function () {
    var choice = prompt("What would you like to do?");
    var list = [];
    while (choice !== "quit") {
        if (choice === "new") {
            newItem();
        }
        else if (choice === "list") {
            listItems();
        }
        else if (choice === "delete") {
            deleteItem();
        }
        choice = prompt("What would you like to do?");
    }
    console.log("You quitted the app.");

    function newItem() {
        var newItem = prompt("Add an item!");
        list.push(newItem);
        console.log(newItem + " was added to the list.");
    }
    function listItems() {
        console.log("*******");
        list.forEach(function (item, i) {
            console.log(i + ": " + item);
        });
        // for (var i = 0; i < list.length; i++) {
        //     console.log(i + ": " + list[i]);
        // }
        console.log("*******");
    }
    function deleteItem() {
        var index = prompt("Choose the item number to remove from list.");
        console.log(list[index] + " is removed."); //console.log before removing so that won't print out next item instead
        list.splice(index, 1); //from index, remove 1 item
    }
}, 500);