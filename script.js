$("#submit").click(function(event){
    event.preventDefault();
    pesquisar();

function pesquisar(){
     var data = document.getElementById ("date").value
    $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=Gu0MZYR5dc4VHP5VISzp9eQINX6AibiJsP8BR9Ai&date=${data}`,
    
        success: function(parametro) {
        $('#img').attr('src', parametro.url)
        $('#title').text( parametro.title)
        $('#explanation').text( parametro.explanation)
        $('#copyright').text( parametro.copyright);}})
    }