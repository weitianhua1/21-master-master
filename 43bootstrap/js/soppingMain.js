var cart=new ShoppingCart();

function shoppingList(){
// 获取购物车订单列表
    let cartdata=cart.getDataFromLocalStorage();
    console.log(cartdata);
    let orderList=cartdata.orderList;
    // 订单列表
    for (let i in orderList){
        let order=orderList[i];
        console.log(order);
        node =exmapleNode.console(true);
      cartList.appendChild(node);

    //   节点id
      node.id=order.id;
      


    }
}
shoppingList();