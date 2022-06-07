async function fillChart() {

    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let highest = 0;
            let highestnode;

            data.forEach(ele => {
                console.log(ele.day);
                console.log(ele.amount);
                let node = document.getElementById(`${ele.day}`)
                node.style.height = `${Math.floor(ele.amount * 2.5)}px`
                node.classList.add("bar__red");

                let spendingAmount = document.createElement("div");
                spendingAmount.innerText = `$${ele.amount}`;
                spendingAmount.classList.add("chart--spending-amount");
                spendingAmount.classList.add("chart--spending-amount__hidden");
                spendingAmount.id = `${ele.day}Amount`

                node.insertAdjacentElement("beforebegin", spendingAmount);
                node.addEventListener("mouseover", showSpendingAmount);
                node.addEventListener("mouseleave", dontShowSpendingAmount)
                console.log(node);

                if (ele.amount > highest) {
                    highestnode = node;
                    highest = ele.amount;
                }
            })

            highestnode.classList.remove("bar__red");
            highestnode.classList.add("bar__blue");
        })
}

fillChart();

function showSpendingAmount() {
    let id = `${this.id}Amount`;
    document.getElementById(id).classList.add("chart--spending-amount__show");
}

function dontShowSpendingAmount() {
    let id = `${this.id}Amount`;
    document.getElementById(id).classList.add("chart--spending-amount__hidden");
    document.getElementById(id).classList.remove("chart--spending-amount__show");
}