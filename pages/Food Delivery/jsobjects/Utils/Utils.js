export default {
	orderStatusOptions:[
  {
    "name": "Order Placed",
    "code": "ORDER PLACED"
  },
  {
    "name": "Delayed",
    "code": "DELAYED"
  },
  {
    "name": "Delivered",
    "code": "DELIVERED"
  },
	 {
    "name": "Refunded",
    "code": "REFUNDED"
  }
],
addOrder:async () =>{
	const orderId= this.generateRandomID();
	await Insert_order.run({id:orderId});
	await add_product.run({id:orderId});
	await fetch_orders.run();
	await resetWidget('add_order');
	return closeModal('add_order');
},
	generateRandomID:() => {
		return '_' + Math.random().toString(36).substr(2,9);
	},
	updateOrder: async ()=>{
		await edit_order.run();
		await fetch_orders.run();
		return closeModal('edit_modal');
	},
	refundOrder:async() => {
		await Api1.run();
		await update_order_amount.run();
		return await fetch_orders.run();
	}
}