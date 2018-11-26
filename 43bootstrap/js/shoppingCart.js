
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
        let test = localStorage.getItem('test');
        // 判断购物车是否为空
        if (test == null || test == '') {
            let cartdata = new Cartdata();
            console.log(cartdata);
            return cartdata;
        }
        else {
            return JSON.parse(test);
        }
    }
    // 加入购物车
    addToCart(order) {
     let cartdata = this.getDataFromLocalStorage();
     console.log(cartdata);

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
        let selectQty = 0;
        let cartdata = this.getDataFromLocalStorage();
        for (let i = 0; i < cartdata.orderList.length; i++) {
            if (cartdata.orderList[i].selectStatus) {
                selectQty += cartdata.orderList[i].qty;
            }
        }
        return selectQty;

    }
    // 获取选中对象列表的总价格
    getSelectedAmount() {
        let selectAmount = 0;
        let cartdata = this.getDataFromLocalStorage();
        let orderList = cartdata.orderList;
        for (let i in orderList) {
            if (orderList[i].selectStatus) {
                selectAmount += cartdata.orderList[i].price * cartdata.orderList[i].qty;
            }
        }
        return selectAmount;
    }
    // 设置购物车订单项选中状态
    setItemSelectStatus(id, selectStatus) {
        //获取购物车数据
        let cartdata = this.getDataFromLocalStorage();
        let orderList = cartdata.orderList;
        //   查找Id对应的订单
        let order = this.find(id, orderList);
        //   判断位置，位置为空报错提示，如果不为空就设置状态
        if (order == null) {
            //   没有找到id
            console.log('订单ID有误');
            return;
        }
        else {
            //   找到对应id
            order.selectStatus = selectStatus;
        }
        //   写入本地存储
        this.setDataToLocalStorage(cartdata);
    }

    find(id, orderList) {
        // let cartdata = this.getDataFromLocalStorage();
        // let orderList = cartdata.orderList;

        for (const i in orderList) {
            if (id == orderList[i].id) {
                return orderList[i];
            }
        }
        return null;

    
    }
    deleteItem(id) {
        //  获取购物车数据
        let cartdata = this.getDataFromLocalStorage();
        // 获取订单列表
        let orderList = cartdata.orderList;
        //   查找指定ID的订单（要删除的订单）
        let order= this.find(id,orderList);
        // 定位要删除的订单在数组中的位置
        let index=orderList.indexOf(order,0);

        if (index == -1) {
            //   没有找到id
            console.log('订单ID有误');
          
        }
        else{
            // 删除当前订单
            orderList.splice(index,1);
            // 变更总商品总件数
         cartdata.totalQty-=order.qty;
        //  变更商品总价格
         cartdata.totalAmount-=order.qty*order.price;
        //  变更总商品件数
        cartdata.units--;
        // 数据回写购物车
        this.setDataToLocalStorage(cartdata);
        }
    }

}

