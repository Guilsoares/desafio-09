$(document).ready(function(){

    //Incluir novo item na lista
    $('form').on('submit', function(e){
        e.preventDefault()
        
        const incluirEmLista = $('#infolist').val()
        const novoItem = $(`<li> ${incluirEmLista} </li>`)
        $(novoItem).appendTo('ul')

        $('#infolist').val('')
    })

    //risca Item da Lista
    $('ul').click(function(){
        $('li').addClass('risco')
    })

    //Retira risco
    $('ul').dblclick(function(){
        $('li').removeClass('risco')
    })













})