


var cart = new ShoppingCart();
const dataNameJson = {
    "price": "[data-name='price']",
    "qty": "[data-name='qty']",
    "imgSrc": '[data-name="imgSrc"]',
    "subPrice": '[data-name="subPrice"]',
    "selectedQty": '[data-name="selectedQty"]',
    "selectedAmount": '[data-name="selectedAmount"]',
    "units": '[data-name="units"]'
};

const operatorNameJson = {
    "checkItem": "[data-operator='checkItem']",
    "increase": "[data-operator='increase']",
    "decrease": "[data-operator='decrease']",
    "deleteItem": "[data-operator='deleteItem']"
};


//显示购物车所有订单列表
function displayOrderList() {
    //获取购物车
    let cartData = cart.getDataFromLocalStorage();
    // console.log(cartData);
    //获取购物车的JSON数据中的订单列表
    let orderList = cartData.orderList;
    //挂接到父元素，找到孩子节点
    let cartContent = document.querySelector("#cartContent");
    //获取id
    let exampleNode = document.querySelector('#orderExample');
    for (let i = 0; i < orderList.length; i++) {

        //重新定义一个order,把orderList元素重新赋值给order
        let order = orderList[i];
        //克隆样本节点
        let orderNew = exampleNode.cloneNode(true);
        orderNew.id = order.id;
        // console.log(orderNew); 
        //挂接到父元素，找到孩子节点       
        cartContent.appendChild(orderNew);
        //移除新节点到隐藏属性
        orderNew.classList.remove("d-none");

    //    获取照片的节点
        let imgSrcNew = orderNew.querySelector('[data-name="imgSrc"]');
        imgSrcNew.src = 'images/' + order.imgSRC;

        //获取名字的所有节点
        let nameNew = orderNew.querySelector('[data-name="title"]');
        nameNew.textContent = order.Sname;

        //获取单价的所有节点
        let priceNew = orderNew.querySelector('[data-name="price"]');
        priceNew.textContent = order.price;

    }
}
displayOrderList();