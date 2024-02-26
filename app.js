
const allBtn = document.getElementsByClassName('add-btn');

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {

        const name = e.target.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = e.target.parentNode.childNodes[5].childNodes[1].innerText;


        const selectedContainer = document.getElementById('Selected-container');


        //Budget
        const budget = getConvertedValue("budget");
        document.getElementById('budget').innerText = budget - parseInt(price);

        // card count
        const cardCount = getConvertedValue('card');
        document.getElementById('card').innerText = cardCount + 1;

        // left Card
        const left = getConvertedValue('left');
        document.getElementById('left').innerText = left - 1



        const div = document.createElement('div');
        div.classList.add('selected-st')

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.innerText = name;
        p2.innerText = category;
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div)

        updateTotalPrice(price);
        updateGrandTotal()

    });
};



function updateGrandTotal(status) {
    const totalPrice = getConvertedValue('total-price');
    if (status == undefined) {
        document.getElementById('grand-total').innerText = totalPrice;
    }
    else {
        const couponCode = document.getElementById('input-field').value;
        if (couponCode === 'BPL2024') {
            let discount = totalPrice * 0.2;
            document.getElementById('grand-total').innerText = totalPrice - discount;
        }
        else {
            alert('Please Enter Valid Coupon')
        }
    }
};




function updateTotalPrice(value) {
    const totalPrice = getConvertedValue('total-price');
    const sum = totalPrice + parseInt(value);
    document.getElementById('total-price').innerText = sum;
};


//value converted
function getConvertedValue(id) {
    const valueText = document.getElementById(id).innerText;
    const value = parseInt(valueText)
    return value;
};



