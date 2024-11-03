const catches = document.getElementById('catches');
const formAdd = document.querySelector("#addForm")
const addBtn = document.querySelector('.add')

const loadBtn = document.querySelector('.load');
loadBtn.addEventListener('click', loadCatches)
let dataUser = null;
dataUser = JSON.parse(sessionStorage.getItem('dataUser'))
catches.innerHTML = '';
if (dataUser !== null) {
    document.getElementById('user').style.display = "inline-block"
    document.getElementById('guest').style.display = "none"
    document.querySelector("p.email span").textContent = dataUser.email
    addBtn.disabled = false
    loadCatches()
} else {
    addBtn.disabled = true
    document.getElementById('user').style.display = 'none'
    document.getElementById('guest').style.display = "inline-block"
}
async function loadCatches() {
    const url = `http://localhost:3030/data/catches`
    const response = await fetch(url)
    const data = await response.json()
    document.getElementById('catches').replaceChildren(...data.map(createInfo));
}
document.querySelector('#main').addEventListener('click', onButtons)
function onButtons(e) {
    if (e.target.nodeName != 'BUTTON') {
        return;
    }
    const currentBtn = e.target.textContent
    const id = e.target.parentElement.getAttribute('data-id');
    const currentEl = e.target.parentElement
    if (currentBtn === "Delete") {
        onDelete(id)
    } else if (currentBtn === 'Update') {
        onUpdate(id, currentEl)
    }
}
async function onDelete(id) {
    const url = `http://localhost:3030/data/catches/${id}`

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': dataUser.accessToken
            },
        })
        await response.json()
        loadCatches()
    } catch (e) {
        alert(e.message)
    }
}
async function onUpdate(id, currentEl) {
    let [angler, weight, species, location, bait, captureTime] = currentEl.querySelectorAll('input')
    const url = `http://localhost:3030/data/catches/${id}`
    const body = JSON.stringify({
        angler: angler.value,
        weight: Number(weight.value),
        species: species.value,
        location: location.value,
        bait: bait.value,
        captureTime: Number(captureTime.value)
    })
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': dataUser.accessToken
            },
            body,
        })
        const data = await response.json()
        if (!response.ok) throw new Error(data.message)
        loadCatches()
    } catch (e) {
        alert(e.message)
    }
}
formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onAdd([...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {}))
    e.target.reset()
});

async function onAdd(body) {
    // console.log(body)

    const url = `http://localhost:3030/data/catches`

    try {
        if (Object.values(body).some(x => x === "")) return alert("All fields are required!")

        const response = await fetch(url, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': dataUser.accessToken,
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        console.log(data)
        if (!response.ok) throw new Error(data.message)
        loadCatches()
    } catch (e) {
        alert(e.message)

    }

}
function createInfo(user) {
    const div = document.createElement('div');
    div.classList.add('catch');
    div.setAttribute('data-id', user._id);

    div.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${user.angler}">
    <label>Weight</label>
    <input type="text" class="weight" value='${user.weight}'>
    <label>Species</label>
    <input type="text" class="species" value="${user.species}">
    <label>Location</label>
    <input type="text" class="location" value="${user.location}">
    <label>Bait</label>
    <input type="text" class="bait" value="${user.bait}">
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${user.captureTime}">
    <button class="update" data-id="${user._id}">Update</button>
    <button class="delete" data-id="${user._id}">Delete</button>
    `;

    const hasPermission = dataUser && dataUser.id == user._ownerId;

    if (!hasPermission) {
        Array.from(div.children)
            .filter((x) => x.nodeName == 'INPUT' || 'BUTTON')
            .map((x) => (x.disabled = true));
    }
    return div;
}
document.getElementById('logout').addEventListener('click', async (e) => {
    const url = `http://localhost:3030/users/logout`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'X-Authorization': dataUser.accessToken,
        },
    })
    const data = await response.json();
    sessionStorage.clear();
    window.location = '/src/index.html'
});
