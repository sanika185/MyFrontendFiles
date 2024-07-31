//Main logic
var parent = document.getElementsByClassName("right")[0];
var one = document.getElementById("one");

var medicines = null;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        medicines = data;
        const typeSet = new Set(medicines.map(obj => obj.Type));
        
        const uniqueTypes = Array.from(typeSet);
        console.log(uniqueTypes);
        adddatatoHtml();
        addTypetoHtml(uniqueTypes);

    });

let index = 1;
let minwidth = 250;
function adddatatoHtml() {
    medicines.forEach(med => {
        var div = document.createElement("div");
        div.className = "flip-box";
        div.dataset.type = med.Type;
        div.innerHTML = ` 
            <div class="flip-box-inner">
                <div class="card">
                    <img src="./img/img${index}.jpg" alt="" srcset="">
                    <div data-value="Container" class="scroll-container " id="text-container-${index}">
                        <div data-value="Content" class="scroll-content " id="text-content-${index}">
                            ${med.Name}
                        </div>
                    </div>
                    <hr id="hr">
                    <p>
                        <span id="span">$${med.price}</span>
                        <span> |</span>
                        <span style="color: green;"> ${med.mrp}</span>
                    </p>
                    <hr>
                    <hr>
                    <span style="margin-left: 20px;">Qtys</span>
                    <input class="input" type="number" name="" id="">
                    <a href="">Add to cart</a>
                </div>
            </div>
        `;

        parent.appendChild(div);

        // Adding event listeners after element creation
        const textContainer = document.getElementById(`text-container-${index}`);
        const textContent = document.getElementById(`text-content-${index}`);

        let x = parseInt(textContent.offsetWidth)
        if (x > minwidth) {
            textContent.classList.add("scroll");
        }

        index++;

    });
}

function addTypetoHtml(uniqueTypes) {
    uniqueTypes.forEach(type => {
        var div = document.createElement("div");
        div.className = "radiobtn";
        div.innerHTML = `
            <input type="radio" name="category" id="cat1" value=${type}>Category :${type}
        `
        one.append(div)
    }
    )
    const radioButtons = document.querySelectorAll('input[name="category"]');

        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                const filterType = radio.value; 
                console.log(radio.checked);
                document.querySelectorAll('.flip-box').forEach(card => {
                    if (filterType === 'all' || card.dataset.type === filterType) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

}