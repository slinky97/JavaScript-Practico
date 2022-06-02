//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){ 
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
}


//console.log({
//    precioOriginal,
//   descuento,
//   porcentajePrecioDescuento,
//   precioConDescuento,
//});

function priceDiscount(){
    const inputPrice = document.getElementById("input-price");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("input-coupon");
    const couponValue = inputCoupon.value;

    const coupons = [
        {
            name: "SoyBatman",
            discount: 15,
        },
        {
            name: "pero_no_le_digas_a_nadie",
            discount: 30,
        },
        {
            name: "es_un_secreto",
            discount: 25,
        },        "no_le_digas_a_nadie",
        "es un secreto",
    ]
    // let descuento;
    // switch(couponValue){
    //     case coupons[0]:
    //         descuento = 15;
    //     break;
    //     case coupons[1]: 
    //         descuento = 30;
    //     break;
    //     case coupons[2]: 
    //         descuento = 25;
    //     break;  
    // }
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("resultPrice");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }   

    // if(!coupons.includes(couponValue)){
    //     alert("El cupon" + couponValue + "no es valido");
    // }else if (couponValue === "SoyBatman"){
    //     descuento = 15;
    // }else if(couponValue === "pero_no_le_digas_a_nadie"){
    //     descuento = 30;
    // }else if(couponValue === "es_un_secreto"){
    // }

    // const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    // const resultP = document.getElementById("resultPrice");
    // resultP.innerText = "El precio con descuento es $" + precioConDescuento;
}


