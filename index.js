//seleção do elemento html <canvas> e inserção na const canvas
const canvas = document.querySelector('canvas')

//definição de contexto do canvas (função do elemento canvas), como desenho 2d
const context = canvas.getContext('2d')

//resolução 16:9
canvas.width = 1024
canvas.height = 576

//definição de cor
context.fillStyle = 'white'

//desenho de retângulo (inicio eixo x, inicio eixo y, largura, altura)
context.fillRect(0, 0, canvas.width, canvas.height)

//importando o mapa
const image = new Image()
image.src = './images/mapa.png'
console.log(image)

// esperar o carregamento total da imagem
image.onload = () => {
    context.drawImage(image, -400, -350)
}