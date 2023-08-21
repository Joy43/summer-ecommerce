// product
let total = 0;
let originalPrice = 0;
const minimumPriceForCoupon = 200; 
const discountPercentage = 0.2; 

function ProductClickBtn(target) {
  const SelectFirstProduct = document.getElementById('selected-product');
  const itemName = target.parentNode.childNodes[3].innerText;

  const li = document.createElement('li');
  li.innerText = itemName;
  SelectFirstProduct.appendChild(li);
  
  const price = parseInt(target.parentNode.childNodes[5].innerText.split(" ")[1]);
  originalPrice += price; 
  total = originalPrice; 
  // document.getElementById("total").innerText = total;
  document.getElementById("total").innerText=`${total} tk`;

  if (originalPrice < minimumPriceForCoupon) {
    document.getElementById("couponCode").disabled = true;
    document.getElementById("applyCouponBtn").disabled = true;
    document.getElementById("discountResult").innerText = "Can't use this promocode.because less than 200 taka";
    
  } else {
    document.getElementById("couponCode").disabled = false;
    document.getElementById("applyCouponBtn").disabled = false;
    document.getElementById("discountResult").innerText = "";
  }
};

// Function to apply coupon and calculate discounted price

document.getElementById("form-control").addEventListener("submit", function(event){
 
  event.preventDefault()


});

function applyCoupon() {
 
  // alert('heleleooo');
  const couponCodeInput = document.getElementById("couponCode");
  const couponCode = couponCodeInput.value;
  
  if (couponCode === "SELL200") { 
    const discountedPrice = originalPrice * (1 - discountPercentage);
    total = discountedPrice;
    
    const discountAmount=originalPrice-discountedPrice;
    document.getElementById('discountList').innerText=`${discountAmount} Taka`;
    document.getElementById("discountResult").innerText = ` ${discountedPrice} Taka`;
    console.log(discountedPrice);
  } else {
    document.getElementById("discountResult").innerText = "invalid code";
  }
}


// module btn
document.addEventListener("DOMContentLoaded", function() {
  const refreshBtn = document.getElementById("refreshBtn");

  refreshBtn.addEventListener("click", function() {
      location.reload(); // Refresh the current page
  });
});



