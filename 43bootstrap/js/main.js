// var btnList=document.querySelectorAll('.btn-group .btn');
// var totalQty=document.getElementsByName('totalQty')[0];

// for (const key in btnList) {
//     if (btnList.hasOwnProperty(key)) {
//         const element = btnList[key];
//         switch(element.name){
//             case 'increase':element.addEventListener('click',increaseValue);break;
//             case 'decrease':element.addEventListener('click',decreaseValue);break;
//             case 'addToCart':element.addEventListener('click',addToCart);break;
//         }        
//     }
// }
// function increaseValue(e){
//       var qtyObj=  e.target.nextElementSibling;
//       var qty=parseInt(qtyObj.innerText);
//       qty++;
//       qtyObj.innerText=qty;
//       console.log(qty);        
// }
// function decreaseValue(e){
//     var qtyObj=  e.target.previousElementSibling;
//     var qty=parseInt(qtyObj.innerText);
//    if(qty>1) qty--;
//    else qty=0;
//     qtyObj.innerText=qty;
//     console.log(qty);        
// }

// function addToCart(e){
//     var qtyObj=  e.target.previousElementSibling.previousElementSibling;
//     var qty=parseInt(qtyObj.innerText);
//     var total=parseInt(totalQty.innerText);
//     total+=qty;
//     totalQty.innerText=total;  
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

// var product1 = new Product('01', '鼠标', '43bootstrap\images\02.jpg', 99);

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
// var order = new Order(product1, 2, true);
// var Sname = order.Sname;

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
var cartdata = new Cartdata();

//购物车操作类
class ShoppingCart {

    //   将购物车数据写入本地存储中
    setDataToLocalStorage(cartdata) {
        var cartdataString = JSON.stringify(cartdata);
        // 写入本地存储
        localStorage.setItem('test', cartdataString);
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
            // 购物车总样本+1
            cartdata.orderList.push(order);
            cartdata.units++;
        }
        cartdata.totalQty += order.qty;
        cartdata.totalAmount = order.price * order.qty;
        this.setDataToLocalStorage(cartdata);

    }
        //   从本地存储中获取购物车数据
        getDataFromLocalStorage() {
            return localStorage.getItem('test');
        }
        //  获取选中对象的订单列表
        getSelectedList() {
    
        }  
        // 获取选中对象列表的总数量
        getSelectedQty() {
    
        }
        // 获取选中对象列表的总价格
        getSelectedAmount() {
    
        }
        // 设置购物车订单项选中状态
        setItemSelectStatus(id, selectStatus) {
            //获取购物车数据
            let cartdata = this.getDataFromLocalStorage();
            let orderList = cartdata.orderList;
            //   查找Id对应的订单
            let order= this.find(id,orderList);
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
    
    
        //     var cartdata = this.getDataFromLocalStorage();
        //     let orderList = cartdata.orderList;
        //     let isNewProduct = false;
        //     for (const i in orderList) {
        //         if (id == orderList[i].id) {
        //             orderList[i].selectStatus = selectStatus;
        //             isNewProduct = true;
        //         }
        //     }
        //     if ( isNewProduct) this.setDataToLocalStorage(cartdata);
        // }
    
        find(id,orderList) {
            // let cartdata = this.getDataFromLocalStorage();
            // let orderList = cartdata.orderList;
          
            for (const i in orderList) {
                if (id == orderList[i].id) {
                   return orderList[i];
                }
            }
            return null;
        }
    clearCart() {

    }
}
