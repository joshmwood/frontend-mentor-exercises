async function fillChart() {

    fetch("data.JSON")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let highest = 0;
            let highestnode;
            data.forEach(ele => {
                console.log(ele.day);
                console.log(ele.amount);
                let node = document.getElementById(`${ele.day}`).children[0]
                node.style.height = `${ele.amount * 2.5}px`
                node.classList.add("bar__red");
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