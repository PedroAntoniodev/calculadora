document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', function() {
        var input1 = document.getElementById('input1').value;
        var input2 = document.getElementById('input2').value;

        if (input1 && input2) {
            showImage();
        } else {
            alert('Por favor, preencha ambos os campos.');
        }
    });
});

function showImage() {
    var imgContainer = document.getElementById('imageContainer');
    imgContainer.innerHTML = '<img src="./imagens/manoRafa.jpg" alt="Imagem">'; // URL da imagem
    imgContainer.style.display = 'block'; // Mostrar o contêiner da imagem
}
