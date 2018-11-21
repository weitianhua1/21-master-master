
//商品类
class Product {
    constructor(id, Sname, imgSRC, price) {
        // 商品类成员
        this.id = id;
        this.Sname = Sname;
        this.imgSRC = imgSRC;
        this.price = price;
    }
}



// 订单类成员
class Order {
    constructor(product, qty, selectStatus) {

        this.id = product.id;
        this.Sname = product.Sname;
        this.price = product.price;
        this.imgSRC = product.imgSRC;
        this.qty = qty;
        this.selectStatus = selectStatus;
    }
}
// 购物车数据类---确定格式
class Cartdata {
    // 数据成员 订单列表 总样本 总件数 总金额
    constructor() {
        this.orderList = new Array();
        this.units = 0;//总样本
        this.totalQty = 0;//总件数
        this.totalAmount = 0;//总金额
    }
}
//购物车操作类
class ShoppingCart {

    //   将购物车数据写入本地存储中
    setDataToLocalStorage(cartdata) {
        var cartdataString = JSON.stringify(cartdata);
        // 写入本地存储
        localStorage.setItem('test', cartdataString);
    }
    //   从本地存储中获取购物车数据
    getDataFromLocalStorage() {
        let test= localStorage.getItem('test');
        // 判断购物车是否为空
        if (test == null || test == '') {
            return new CartData();
        }
        else {
            return JSON.parse(test);
        }
    }
    // 加入购物车
    addToCart(order) {
        cartdata = this.getDataFromLocalStorage();
    
        var isNewProduct = false;
        for (const i in cartdata.orderList) {
            if (order.id == cartdata.orderList[i].id) {
                isNewProduct = true;
                cartdata.orderList[i].qty += order.qty;
                break;
            }
        }
        // 如果是新商品
        if (!isNewProduct) { 
            cartdata.orderList.push(order);
            // 购物车总样本+1
            cartdata.units++;
        }
        cartdata.totalQty += order.qty;
        cartdata.totalAmount = order.price * order.qty;
        this.setDataToLocalStorage(cartdata);

    }
    clearCart() {

    }

    //  获取选中对象的订单列表
    getSelectedList() {

    }
    // 获取选中对象列表的总数量
    getSelectedQty() {
        let selectQty=0;
        let cartdata=this.getDataFromLocalStorage();
        for(let i=0;i<cartdata.orderList.length;i++){
            if(cartdata.orderList[i].selectStatus){
                selectQty+=cartdata.orderList[i].qty;
            }
        }
        return selectQty;

    }
    // 获取选中对象列表的总价格
    getSelectedAmount() {
        let selectAmount =0;
        let cartdata=this.getDataFromLocalStorage();
        let orderList=cartdata.orderList;
        for (let i in orderList){
            if(orderList[i].selectStatus){
                selectAmount+=cartdata.orderList[i].price*cartdata.orderList[i].qty;
            }
        }
return selectAmount;
    }
    // 设置购物车订单项选中状态
    setItemSelectStatus(id, selectStatus) {

    }
}
