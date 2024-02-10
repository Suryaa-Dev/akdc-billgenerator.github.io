function addFuntionalityTo(tableNumber){
    let container = document.querySelector(`.table${tableNumber} .container`);

    function calculateItemAmount(quantity, rate) {
        return quantity * rate;
    }

    document.querySelector(`.table${tableNumber} .add-list`).addEventListener("click", ()=>{
        let newList = document.createElement("div");
        newList.classList = "list";
        newList.innerHTML = `
            <select class="item_name"> 
                <option value="0">Select the Option</option>  
                <option value="20">Dabeli</option>  
                <option value="60">Pavbhaji</option>  
                <option value="20">Extra Pav(Jodi)</option>
                <option value="10">Extra Pav(Single)</option>  
                <option value="80">Special Pavbhaji</option>
                <option value="70">Masala Pav</option>   
                <optgroup label="Manchurian">   
                    <option value="50">Manchurian(Half)</option>       
                    <option value="100">Manchurian(Full)</option>
                    <option value="60">Veg Crispy(Half)</option>
                    <option value="120">Veg Crispy(Full)</option>
                    <option value="60">Veg Chilli(Half)</option>
                    <option value="120">Veg Chilli(Full)</option>
                    <option value="60">Veg 65(Half)</option>
                    <option value="120">Veg 65(Full)</option>
                    <option value="70">Gravy Manchurian(Half)</option>
                    <option value="140">Gravy Manchurian(Full)</option>
                </optgroup>
                <optgroup label="Noodles">
                    <option value="60">Manchurian Noodles(Half)</option>
                    <option value="120">Manchurian Noodles(Full)</option>
                    <option value="70">Singapur Noodles(Half)</option>
                    <option value="140">Singapur Noodles(Full)</option>
                    <option value="90">Triple Noodles(Half)</option>
                    <option value="180">Triple Noodles(Full)</option>
                </optgroup>
                <optgroup label="Rice">
                    <option value="60">Manchurian Rice(Half)</option>
                    <option value="120">Manchurian Rice(Full)</option>
                    <option value="70">Singapur Rice(Half)</option>
                    <option value="140">Singapur Rice(Full)</option>
                    <option value="90">Triple Rice(Half)</option>
                    <option value="180">Triple Rice(Full)</option>
                </optgroup>    
                <optgroup label="Paneer Items">
                    <option value="80">Panner Manchurian(Half)</option>       
                    <option value="160">Paneer Manchurian(Full)</option>
                    <option value="90">Paneer Chilli(Half)</option>
                    <option value="170">Paneer Chilli(Full)</option>
                    <option value="90">Paneer 65(Half)</option>
                    <option value="170">Paneer 65(Full)</option>
                </optgroup>
                <optgroup label="Soups & other">
                    <option value="40">Soup (Half)</option>
                    <option value="80">Soup (Full)</option> 
                    <option value="100">Chinese Bhel(Full)</option>
                </optgroup>
                <option value="10">Cold Drink(10)</option>
                <option value="20">Cold Drink(20)</option>
                <option value="10">Cold Drink(45)</option>
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
        if(heightofTable.style.height == "100%" || heightofTable.style.height == ""){
            heightofTable.style.height = 60 + "px"; 
            heightofTable.style.backgroundColor = "#8f45ff";
            heightManipul.style.display = "none";
        }else{
            heightofTable.style.height = 100 + "%";
            heightofTable.style.backgroundColor = "White";
            heightManipul.style.display = "block";
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