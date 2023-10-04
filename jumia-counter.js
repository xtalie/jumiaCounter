// getting elements
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const numbers = document.getElementById("numbers");
const upDatedCalcPrice = document.getElementById("updatedPrice");
const removeItem = document.getElementById("remove-item");
const firstSection = document.getElementById("first-section");




// using intl to convert to proper number
const formatNumber = new Intl.NumberFormat("en-US", {});

//  create dry function
const updateCounter = () => {
  numbers.innerText = counterObj.count;
};

// calculate for price
const priceFunc = (count, upDatedCalcPrice) => {
  const result = counterObj.count * counterObj.productPrice;
  upDatedCalcPrice.innerText = formatNumber.format(result);
};

// store data in object literal to help avoid code changing if variable is redeclared
let counterObj = {
  productPrice: 50000,
  count: 1,
  increaseCounter() {
    this.count++;
    updateCounter();
    priceFunc(this.count, upDatedCalcPrice);
  },

  reduceCounter() {
    this.count--;
    updateCounter();
    priceFunc(this.count, upDatedCalcPrice);
  },
};

// add click eventListerner
incrementBtn.addEventListener("click", () => {
  if (Number(numbers.innerText) !== 5) {
    counterObj.increaseCounter();
  }
});

decrementBtn.addEventListener("click", () => {
  if (Number(numbers.innerText) !== 0) {
    counterObj.reduceCounter();
  }
});

removeItem.addEventListener('click',()=>{
  firstSection.style.display='none'
})


