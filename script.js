search()
function search(){
     var data = document.getElementById ("date").value
    $.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=Gu0MZYR5dc4VHP5VISzp9eQINX6AibiJsP8BR9Ai&date=${data}`,
    
        success: function(data) {
        $('#img').attr('src', data.url)
        $('#title').text(data.title)
        $('#explanation').text(data.explanation)
        $('#copyright').text(data.copyright);}})
    }
