var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("easy-table")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

connection.query('SELECT * FROM `products`', function(err, res){
    if (err) throw err;
    var t = new Table;

    res.forEach(function(result){
        t.cell('Product ID', result.item_id)
        t.cell('Product Name', result.product_name)
        t.cell('Department', result.department_name)
        t.cell('Price', result.price)
        t.cell('Quantity', result.stock_quantity)
        t.newRow()
    })
    console.log(t.toString())
    buyItem()
})

function buyItem(){
    connection.query('SELECT * FROM `products`', function(err, res){
        if (err) throw err;
    inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "What item ID would you like to buy?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like?"
        }
    ])
    .then(function (answer) {
        var chosenItem = answer.item;
        // console.log(chosenItem);
        var chosenQuantity = answer.quantity;
        var availableQuantity = 'SELECT `stock_quantity` FROM `products` WHERE `item_id` IN ${chosenItem}
        var idArr = [];
        // console.log(chosenQuantity);
        for (var i = 0; i < res.length; i++) {
          idArr.push(res[i].item_id);
        }
        chosenItem = parseInt(chosenItem);
        if (idArr.includes(chosenItem)) {
          console.log("Good Choice!");
        } else {
          console.log("The item ID doesn't exist");
          buyItem()
        }
      });
       
});
}
