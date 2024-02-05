let musicas = [
    {titulo:'believer', artista:'imagine dragons', src:'audio/Imagine_Dragons_-_Believer.mp3', img:'img/imagine dragons.jpg'},
    {titulo:'centuries', artista:'boys', src:'audio/Fall-Out-Boy-Centuries.mp3', img:'img/fall out boys.webp'},
    {titulo:'in the end', artista:'linkin', src:'audio/Linkin-Park-In-The-End.mp3', img:'img/linkin park.jpg'},
];

let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
let imagem = document.querySelector(' img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

redenrizarMusica(indexMusica);

//Eventos
document.querySelector('.botton-maior').addEventListener('click', tocarMusica);

document.querySelector('.botton-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate',atualizarBarra);

document.querySelector('.anterior').addEventListener('click',() =>{// função anomina
    indexMusica--;
    redenrizarMusica(indexMusica);
   
});
document.querySelector('.proxima').addEventListener('click',() =>{// função anomina
    indexMusica++;
    redenrizarMusica(indexMusica);
   

});
// Funções
function  redenrizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });

}

function tocarMusica(){
    musica.play();
    document.querySelector('.botton-pause').style.display = 'block';
    document.querySelector('.botton-maior').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botton-pause').style.display = 'none';
    document.querySelector('.botton-maior').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width =Math.floor((musica.currentTime / musica.duration) * 100) + '%' ;
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent =segundosParaMinutos(Math.floor (musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}



