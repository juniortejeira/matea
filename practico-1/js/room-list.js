const minPriceInput = document.querySelector("#min-price")
const maxPriceInput = document.querySelector("#max-price")
const bathsInput = document.querySelector("#baths-input")
const minSingleBedsInput = document.querySelector("#single-beds")
const minDoubleBedsInput = document.querySelector("#double-beds")
const airConditionerCheck = document.querySelector("#air-conditioner")
const filterBtn = document.querySelector("#filter-btn")

const rooms = [
    {
        price: 1000,
        baths: 1,
        people: 2,
        imgUrl: "./img/hab-1.jpg",
        singleBeds: 0,
        doubleBeds: 1,
        airConditioner: false
    }, {
        price: 3000,
        baths: 2,
        people: 4,
        imgUrl: "./img/hab-2.jpg",
        singleBeds: 2,
        doubleBeds: 1,
        airConditioner: true
    }, {
        price: 1500,
        baths: 1,
        people: 2,
        imgUrl: "./img/hab-3.jpg",
        singleBeds: 0,
        doubleBeds: 1,
        airConditioner: true
    }, {
        price: 1000,
        baths: 1,
        people: 2,
        imgUrl: "./img/hab-4.jpg",
        singleBeds: 0,
        doubleBeds: 2,
        airConditioner: true
    }, {
        price: 1250,
        baths: 1,
        people: 3,
        imgUrl: "./img/hab-2.jpg",
        singleBeds: 3,
        doubleBeds: 0,
        airConditioner: true
    }, {
        price: 2000,
        baths: 2,
        people: 3,
        imgUrl: "./img/hab-3.jpg",
        singleBeds: 1,
        doubleBeds: 2,
        airConditioner: true
    },
]

const roomsCtn = document.querySelector("#rooms-list")

const renderRooms = (rooms) => {
    roomsCtn.innerHTML = ""
    rooms.forEach(room => {
        const item = document.createElement("li")
        item.innerHTML = `
            <img src="${room.imgUrl}"/>
            <div class="room__section">
                <div>
                    <img src="./svg/people.svg"/>
                    <p>${room.people}</>
                </div>
                <div>
                    <img src="./svg/bed.svg"/>
                    <div>
                        ${room.singleBeds ? `<p>${room.singleBeds} simple${room.singleBeds > 1 ? "s" : ""} </p>` : ""} 
                        ${room.doubleBeds ? `<p>${room.doubleBeds} doble${room.doubleBeds > 1 ? "s" : ""} </p>` : ""} 
                    </div>
                </div>
                <div>
                    <img src="./svg/bath.svg" />
                    <p>${room.baths} baños</p>
                </div>
            </div>
            ${room.airConditioner ?
                ` <div class="separator"></div>
                <div class="room__section">
                ${room.airConditioner ? `
                    <div>
                        <img src="./svg/air-conditioner.svg" />
                        <p>climatizador</>
                    </div>` : ""
                }
                
                
            </div>`
                : ""
            }
            <div class="separator"></div>
            <div class="room__price">
                <p>$${room.price} por noche</p>
            </div>
        `
        roomsCtn.appendChild(item)
    })
}

renderRooms(rooms)

filterBtn.addEventListener("click", () => {
    let minPrice = minPriceInput.value || 0
    let maxPrice = maxPriceInput.value || Infinity
    let minSingleBeds = minSingleBedsInput.value || 0
    let minDoubleBeds = minDoubleBedsInput.value || 0
    let airConditioner = airConditionerCheck.checked
    let minBaths = bathsInput.value || 0
    let filteredRooms = rooms.filter(room => (room.price >= minPrice) && (room.price <= maxPrice) && (room.singleBeds >= minSingleBeds) && (room.doubleBeds >= minDoubleBeds) && (room.baths >= minBaths))
    console.log(filteredRooms)
    if (airConditioner) filteredRooms = filteredRooms.filter(room => room.airConditioner)
    renderRooms(filteredRooms)
})