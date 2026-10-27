
const btnCadastrar = document.getElementById('btnCadastrar')
const btnCancelar = document.getElementById('btnCancelar')
const modal = document.getElementById('modalCadastro')
const form = document.getElementById('formJogo')
const lista = document.getElementById('listarjogos')
const mensagemVazia = document.getElementById('mensagemVazia')

btnCadastrar.addEventListener('click', () => {
    modal.showModal()
})

btnCancelar.addEventListener('click', () => {
    modal.close()
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const id = document.getElementById('id').value.trim()
    const titulo = document.getElementById('titulo').value.trim()
    const plataforma = document.getElementById('plataforma').value.trim()
    const desenvolvedora = document.getElementById('dev').value.trim()
    const imagem = document.getElementById('url').value.trim()
    const preco = Number(document.getElementById('preco').value)
    const data = document.getElementById('data').value

    criarCard(id, titulo, plataforma, desenvolvedora, imagem, preco, data)

    form.reset()
    modal.close()
})

function criarCard(id, titulo, plataforma, desenvolvedora, imagem, preco, data) {
    mensagemVazia.hidden = true

    const card = document.createElement('article')
    card.classList.add('card-jogo')

    const capa = document.createElement('div')
    capa.classList.add('capa')

    const imagemCapa = document.createElement('img')
    imagemCapa.src = imagem
    imagemCapa.alt = 'capa do jogo ' + titulo

    capa.appendChild(imagemCapa)

    const info = document.createElement('div')
    info.classList.add('info-jogo')

    const nomeJogo = document.createElement('h3')
    nomeJogo.textContent = titulo

    const identificacao = document.createElement('p')
    identificacao.textContent = 'id: ' + id

    const nomePlataforma = document.createElement('p')
    nomePlataforma.textContent = 'plataforma: ' + plataforma

    const nomeDesenvolvedora = document.createElement('p')
    nomeDesenvolvedora.textContent = 'desenvolvedora: ' + desenvolvedora

    const dataCadastro = document.createElement('p')
    dataCadastro.textContent = 'data de cadastro: ' + data

    const valor = document.createElement('strong')
    valor.classList.add('preco')
    valor.textContent = preco.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'brl'
    })

    info.append(
        nomeJogo,
        identificacao,
        nomePlataforma,
        nomeDesenvolvedora,
        dataCadastro,
        valor
    )

    card.append(capa, info)
    lista.appendChild(card)
}
