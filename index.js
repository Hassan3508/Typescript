const menu = [
  { name: "margherica", prices: 8}
  , { name: "pepperoni", prices: 10}
  , { name: "hawaiian", prices: 10}
  , { name: "veggie", prices: 9}
]

 cashInRegister = 100
 const nextOrderId = 1 
 const orderQueue = []

 // challenge add a utility function addNewPizza that takes a pizza object and adds it to the menu array

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj)
}
/**
 write another utility function, placeholder that takes a pizza name parameter and 
 1.finds that pizza object in the menu,
 2. adds the income to the cashInRegister,
3. pushes a new order object to the orderQueue 
e.g {pizza: selectedPizzaObjectFromStep1. status: "ordered"}
4. returns the new order object (just in case we need it later )
 **/

function placeholder(pizzaName) {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  cashInRegister += selectedPizza.prices
  const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
  orderQueue.push(newOrder)
  return newOrder
}

 /** 
  challenge write another utility function completeOrder that takes an orderId as a parameter
  finds the correct order in the orderQueue, and marks its status as "completed". for good measure,
  return the found order from the function.

  * Note: youll need to ensure that were adding IDs to our orders when we create new orders.
   you can use a globbal nextOrderId variable and icrement it every time a new order is created to
    stimulate real IDs being managed for us by a database.
  **/

    function completeOrder(orderId) {
      const order = orderQueue.find(order => order.id === orderId)
      order.status = "completed"
      return order
    }

    addNewPizza({ name: "bbq chicken", prices: 12 })
    addNewPizza({ name: "meat feast", prices: 14 })
    addNewPizza({ name: "supreme", prices: 13 })

    placeOrder("bbq chicken")
    completeOrder(1)
    console.log("menu:", menu)
    console.log("cashInRegister:", cashInRegister)
    console.log("orderQueue:", orderQueue)