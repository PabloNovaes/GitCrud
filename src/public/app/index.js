const url = 'http://192.168.0.174:3000/'
const form = document.getElementById('form')
const message = document.getElementById('response')
const name = document.getElementById('name')
const age = document.getElementById('age')
const avatar = document.getElementById('avatar')
const ul = document.getElementById('apiView')
const li = ul.querySelectorAll('li')



form.addEventListener('submit', async function (e) {
    e.preventDefault()

    if (name.value !== "" && avatar.value !== "" && age.value !== "") {
        const user = {
            nome: name.value,
            idade: age.value,
            avatar_url: avatar.value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }
        await axios.post(url, user)
            .then(res => {
                name.value = ""
                age.value = ""
                avatar.value = ""
                createdModal()
                getData()
            })
            .catch(err => console.log(err))
    } else {
        console.log(Error('Os campos devem ser preenchidos corretamente!'))
        return
    }
})

async function getData() {
    await axios.get(url)
        .then(response => {
            const data = response.data
            console.log(data);
            if (data.length <= 0) {
                ul.innerHTML = `
                <p id="response" >Nenhum resultado encontrado</p>
                `
            } else {
                ul.innerHTML = ''
                for (let user of data) {
                    const { nome, idade, avatar_url, created_date, id } = user
                    const li = document.createElement('li')
                    li.setAttribute('id', id)
                    li.innerHTML = `
                <div class="avatar">
                <img src="${avatar_url}">
            </div>
            <div class="content">
                <span class="controls">
                    <p>${nome}</p>
                    <div onclick="deleteOrUpdate()" class="controls-buttons">
                        <i  id="edit" class="ph-bold ph-pencil"></i>
                        <i id="delete" class=" ph-bold ph-trash"></i>
                    </div>
                </span>
                <div class="user-info">
                    <span>${idade} anos</span>
                    <span>${created_date}</span>
                </div>
            </div>
                `
                    ul.appendChild(li)
                }
            }
        })
        .catch(err => {
            ul.innerHTML = `
            <p id="response" >Nenhum resultado encontrado</p>
            `
            console.log(err)
        })

}

function deleteOrUpdate() {
    let userCase = event.target.parentNode
    for (let i = 0; i < 3; i++) {
        if (userCase.parentNode) {
            userCase = userCase.parentNode
        }
    }
    const id = userCase.id

    if (event.target.id === 'edit') {
        updateUser(id)
    }
    if (event.target.id === "delete") {
        DeleteModal(id)
    }
}

async function deleteUser(id) {
    await axios.delete(url + id)
        .then(response => () => {
            console.log(response)
            getData()
        })
        .catch(err => console.log(err))
}

async function update(id, nome, idade, avatar_url) {
    const updatedData = {
        nome,
        idade,
        avatar_url
    }

    await axios.put(url + id, updatedData)
        .then(data => {
            updatedModal()
            getData()
        })

        .catch(err => new Error({
            message: err
        }))
}

const DeleteModal = (id) => {
    Swal.fire({
        title: 'Deseja deletar este usuario?',
        text: "Você não podera desfazer essa ação!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#1554dd',
        cancelButtonColor: '#d33',
        iconColor: "#fff",
        background: '#ffffff21',
        confirmButtonText: 'Sim, deletar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteUser(id)
            Swal.fire({
                icon: 'success',
                title: "Usuario deletado",
                text: "Exclusão executada com exito!",
                background: '#ffffff21',
                confirmButtonColor: "#1A57DF",
                cancelButtonColor: "red"

            })
            getData()
        }
    })
}

const createdModal = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-left',
        color: '#e6e6e6',
        icon: "#fff",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })

    Toast.fire({
        icon: 'success',
        title: 'Usuario cadastrado',
        color: "black"
    })
}

const updatedModal = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-left',
        color: '#e6e6e6',
        icon: "#fff",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })

    Toast.fire({
        icon: 'success',
        title: 'Dados atualizados',
        color: "black"
    })
}

const updateUser = async (id) => {
    await axios.get(`${url}update/${id}`)
        .then(res => {
            const data = res.data[0]
            return data
        })
        .then(data => {

            const { nome, idade, avatar_url } = data

            Swal.fire({
                title: 'Preencha o formulário',
                html: `
        <label>Nome:</label>
        <input type="text" id="swalName" class="swal2-input" value="${nome}">
        <label>Idade:</label>
        <input id="swalIdade" class="swal2-input" value="${idade}" placeholder="Digite sua idade">
        <label for=""swalUrl>URL:</label>
        <input id="swalUrl" class="swal2-input" value="${avatar_url}" placeholder="Digite a url">
        `,

                showCancelButton: true,
                cancelButtonText: "Cancelar",
                cancelButtonColor: "red",
                background: '#ffffff21',
                confirmButtonColor: "#1A57DF",
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        let name = document.getElementById('swalName').value
                        let age = document.getElementById('swalIdade').value
                        let url = document.getElementById('swalUrl').value

                        update(id, name, age, url)
                    }

                })


        })

}

getData()