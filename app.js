function addFuntionalityTo(tableNumber){
    let container = document.querySelector(`.table${tableNumber} .container`);

    function calculateItemAmount(quantity, rate) {
        return quantity * rate;
    }

    document.querySelector(`.table${tableNumber} .right`).addEventListener("click", ()=>{
        let newList = document.createElement("div");
        newList.classList = "list";
        newList.innerHTML = `
            <select class="item_name"> 
                <option value="0">Select the Option</option>     
                <optgroup label="Manchurian">   
                    <option value="60">Manchurian(Half)</option>       
                    <option value="120">Manchurian(Full)</option>
                    <option value="70">Veg Crispy(Half)</option>
                    <option value="140">Veg Crispy(Full)</option>
                    <option value="70">Tadka Manchurian(Half)</option>       
                    <option value="140">Tadka Manchurian(Full)</option>
                    <option value="70">Veg Chilli(Half)</option>
                    <option value="140">Veg Chilli(Full)</option>
                    <option value="70">Veg 65(Half)</option>
                    <option value="140">Veg 65(Full)</option>
                    <option value="80">Gravy Manchurian(Half)</option>
                    <option value="160">Gravy Manchurian(Full)</option>
                </optgroup>
                <optgroup label="Noodles">
                    <option value="70">Manchurian Noodles(Half)</option>
                    <option value="140">Manchurian Noodles(Full)</option>
                    <option value="70">Combination(Half)</option>
                    <option value="140">Combination(Full)</option>
                    <option value="80">Singapur Noodles(Half)</option>
                    <option value="160">Singapur Noodles(Full)</option>
                    <option value="100">Triple Noodles(Half)</option>
                    <option value="200">Triple Noodles(Full)</option>
                </optgroup>
                <optgroup label="Rice">
                    <option value="60">Manchurian Rice(Half)</option>
                    <option value="120">Manchurian Rice(Full)</option>
                    <option value="80">Singapur Rice(Half)</option>
                    <option value="160">Singapur Rice(Full)</option>
                    <option value="100">Triple Rice(Half)</option>
                    <option value="200">Triple Rice(Full)</option>
                    <option value="50">Jira Rice(Half)</option>
                    <option value="100">Jira Rice(Full)</option>
                </optgroup>    

                <optgroup label="Soups & other">
                    <option value="50">Soup (Half)</option>
                    <option value="100">Soup (Full)</option> 
                    <option value="70">Paneer Soup (Half)</option>
                    <option value="140">Paneer Soup (Full)</option> 
                    <option value="100">Tomato Soup (Full)</option> 
                    <option value="120">Chinese Bhel(Full)</option>
                    <option value="20">Jain Charges</option>
                </optgroup>
            </select>
            <p class="item_rate">0</p>
            <input type="text" inputmode="numeric" class="item_quantity">
            <p class="item_amount">0</p>
            <button class="remove-btn"><img src="./imgs/remove.png"></button>`;

        container.appendChild(newList);
        updatingList(newList);
        
        generateBill(tableNumber);
    });

    document.querySelector(`.table${tableNumber} .left`).addEventListener("click", ()=>{
        let newList = document.createElement("div");
        newList.classList = "list";
        newList.innerHTML = `
            <select class="item_name"> 
                <option value="0">Select the Option</option>  
                <optgroup label="Dabeli and Pavbhaji">
                    <option value="25">Dabeli</option>  
                    <option value="70">Pavbhaji</option>  
                    <option value="20">Extra Pav(Jodi)</option>
                    <option value="10">Extra Pav(Single)</option>
                    <option value="100">French Fries</option>
                    <option value="100">Special Pavbhaji</option>
                    <option value="100">Kolhapuri Pavbhaji</option>
                    <option value="60">Only bhaji</option>
                    <option value="80">Masala Pav</option>
                </optgroup>
                <optgroup label="Paneer Items">
                    <option value="90">Panner Manchurian(Half)</option>       
                    <option value="180">Paneer Manchurian(Full)</option>
                    <option value="100">Paneer Chilli(Half)</option>
                    <option value="200">Paneer Chilli(Full)</option>
                    <option value="100">Paneer 65(Half)</option>
                    <option value="200">Paneer 65(Full)</option>
                    <option value="90">Panner Rice(Half)</option>       
                    <option value="180">Paneer Rice(Full)</option>
                    <option value="90">Paneer Noodles(Half)</option>       
                    <option value="180">Paneer Noodles(Full)</option>
                    <option value="100">Paneer Tadka(Half)</option>
                    <option value="200">Paneer Tadka(Full)</option>
                    <option value="140">Panner Triple Rice(Half)</option>       
                    <option value="280">Paneer Triple Rice(Full)</option>
                    <option value="140">Paneer Triple Noodles(Half)</option>       
                    <option value="280">Paneer Triple Noodles(Full)</option>
                    <option value="110">Paneer Singapur Rice(Half)</option>       
                    <option value="220">Paneer Singapur Rice(Full)</option>
                    <option value="110">Panner Singapur Noodles(Half)</option>       
                    <option value="220">Paneer Singapur Noodles(Full)</option>
                </optgroup>
                <optgroup label="Cold Section">
                    <option value="10">Cold Drink(10)</option>
                    <option value="20">Cold Drink(20)</option>
                    <option value="25">Cold Drink(25)</option>
                    <option value="45">Cold Drink(45)</option>
                    <option value="15">Ice-Cream(15)</option>
                    <option value="20">Ice-Cream(20)</option>
                    <option value="25">Ice-Cream(25)</option>
                    <option value="30">Ice-Cream(30)</option>
                    <option value="35">Ice-Cream(35)</option>
                    <option value="40">Ice-Cream(40)</option>
                </optgroup>
            </select>
            <p class="item_rate">0</p>
            <input type="text" inputmode="numeric" class="item_quantity">
            <p class="item_amount">0</p>
            <button class="remove-btn"><img src="./imgs/remove.png"></button>`;

        container.appendChild(newList);
        updatingList(newList);
        
        generateBill(tableNumber);
    });

    function updatingList(newList) {
        let itemQuantityInput = newList.querySelector('.item_quantity');
        let itemRate = newList.querySelector('.item_rate');
        let itemAmount = newList.querySelector('.item_amount');
        let itemNameSelect = newList.querySelector('.item_name');

        itemNameSelect.addEventListener('change', () => {
            let selectedOption = itemNameSelect.value;
            itemRate.textContent = selectedOption;
            calculateAndUpdateAmount();
        });

        itemQuantityInput.addEventListener('input', () => {
            calculateAndUpdateAmount();
            generateBill(tableNumber);
        });

        function calculateAndUpdateAmount() {
            let quantity = parseInt(itemQuantityInput.value) || 0;
            let rate = parseInt(itemRate.textContent) || 0;
            let amount = calculateItemAmount(quantity, rate);
            itemAmount.textContent = amount;
        }

        newList.querySelector('.remove-btn').addEventListener('click', () => {
            newList.remove();
            generateBill(tableNumber);
        });
    }

    function generateBill(tableNumber){
        let total = 0;
        let items = container.querySelectorAll('.list');
        items.forEach(item => {
            let itemAmount = parseInt(item.querySelector('.item_amount').textContent);
            total += itemAmount;
        });
        document.querySelector(`.table${tableNumber} .total`).innerHTML = `Rs. ${total}`;
    }

    let heightofTable = document.querySelector(`.table${tableNumber}`);
    let heightManipul = document.querySelector(`.table${tableNumber} .heightManipulation`)

    document.querySelector(`.table${tableNumber} .final img`).addEventListener("click", ()=>{    
        if(heightofTable.style.height == "60px" || heightofTable.style.height == ""){
            heightofTable.style.height = 100 + "%";
            heightofTable.style.backgroundColor = "White";
            heightManipul.style.display = "block";
        }else{
            heightofTable.style.height = 60 + "px"; 
            heightofTable.style.backgroundColor = "#8f45ff";
            heightManipul.style.display = "none";
        }
    })
}

for(let tables = 1; tables<=9; tables++){
    addFuntionalityTo(tables);
}


window.onload = function() {
    disableAutoRefresh();
};

function disableAutoRefresh() {
    window.location.reload = function() {
        console.log("Auto-refresh is disabled.");
    }
}
