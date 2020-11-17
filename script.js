const aktivitet = ['Jogging','Aerobics','Bordtennis','Fotball','Golf'];
var url = document.URL;
var page = null;


function aktivitetsvalg(){
    for(var i = 0; i < aktivitet.length; i++){
    document.getElementById('content1').innerHTML += '<button class="button" onclick="next1('+page+','+i+')">'+aktivitet[i]+'</button>'+'<br>';
    }
}

function next1(page, i){
    window.location = 'side2.html?vakt='+i;
}


function setPage(){
    switch(window.location.pathname){
        case 'index.html': 
            page = 1;
        break;

        case 'side2.html':
            page = 2;
        break;

        case 'side3.html':
            page = 3;
        break;

        default:
            page = 1;

    }

}
////////////////
setPage();


switch(page){
    case 1:
        aktivitetsvalg();
    break;

    case 2:
// TODO: lage intensitetsnivå valgknappene
    break;

    case 3:
//TODO: lage input boks, oppgi tid
    break;

    default:
        alert('Feil med koden');
}



