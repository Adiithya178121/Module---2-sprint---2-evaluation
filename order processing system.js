function createOrderManager() {
  let orders = [];
  return {
    addOrder(order) {
      if(!order.createdAt) {
       order.createdAt = new date()
      }
      orders.push(order)

    },
    updateOrder(id, newStatus) {
      const order = orders.find(order => order.id ==== id);
      if (order){
        order.status = newStatus
        return true ;
      }
      return false ;
    },
    filterOrders(status) {
      return orders.filter(order => order.status === status);
    },
    sortOrders(by) {
      return [...orders].sort((a,b) =>
        {
          if( by === "date") {
            return new Date (a.createdAt) - new Date (b.createdAt);
          }
          else if ( by === "status"){
            return a.status.localeCompare(b.status);
          }
          return 0;
        })
         },
    getTotalRevenue() {
      return orders.reduce((total,order) => {
        const orderTotal = orders.items.reduce ((sum,item) => {
          return sum + (item.price * (item.quantity || 1 )); },0)
          return total + orderTotal;
        
        },0)
        },
    exportOrders(){
      return JASON.stringify(orders,null,2);
    },   
    }
     }


const manager = createOrderManager();
manager.addOrder({ id: 1, customerName: "Alice", items: [{ name: "Laptop", price: 1000, quantity: 1 }], status: "pending", createdAt: new Date("2024-03-01") });
manager.addOrder({ id: 2, customerName: "Bob", items: [{ name: "Phone", price: 500, quantity: 2 }], status: "shipped", createdAt: new Date("2024-03-02") });
console.log(manager.filterOrders("pending"));

console.log(manager.getTotalRevenue());

