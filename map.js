const map = L.map("map").setView([20, 0], 2)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18
}).addTo(map)

/* загрузка городов */
let cities = JSON.parse(localStorage.getItem("visitedCities") || "[]")

/* восстановление меток */
cities.forEach(city => {
    createMarker(city)
})

/* клик по карте */
map.on("click", e => {
    const { lat, lng } = e.latlng

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
        .then(r => r.json())
        .then(data => {
            const name =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.country

            if (!name) return

            if (cities.some(c => c.name === name)) return

            const city = { name, lat, lng }
            cities.push(city)
            localStorage.setItem("visitedCities", JSON.stringify(cities))

            createMarker(city)
        })
})

/* функция создания метки */
function createMarker(city) {
    const marker = L.marker([city.lat, city.lng]).addTo(map)
        .bindPopup(city.name)

    marker.on("click", () => {
        map.removeLayer(marker)
        cities = cities.filter(c => c.name !== city.name)
        localStorage.setItem("visitedCities", JSON.stringify(cities))
    })
}
