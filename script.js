
var movieList=['https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg','https://i.pinimg.com/474x/21/3c/a3/213ca3735c4d4b57b3edc478d7cdf36b.jpg','https://static.wixstatic.com/media/631c57_23e5e2ea5ae0436abed197f299cccfae~mv2.jpg/v1/fill/w_751,h_1063,al_c,q_85,enc_auto/631c57_23e5e2ea5ae0436abed197f299cccfae~mv2.jpg','https://viewerscommentary.files.wordpress.com/2016/02/pokemon-the-first-movie.jpg','https://img.elo7.com.br/product/original/2679A20/big-poster-filme-matrix-lo03-tamanho-90x60-cm-geek.jpg','https://1.bp.blogspot.com/-SWt9furxjhU/WD4cHIz_g3I/AAAAAAAB3R0/DCU7KcT8Kykcof5I8IYFiMiPNodwH6AkgCLcB/s1600/Capit%25C3%25A3o%2BFant%25C3%25A1stico.jpg', 'https://live.staticflickr.com/3327/3428645998_e6a6775888_z.jpg', 'https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_FMjpg_UX1000_.jpg', 'https://m.media-amazon.com/images/I/81Z6-ieAIyL.jpg', 'https://viureview.com.br/images/filmes8/La-la-land.jpg', 'https://static.rogerebert.com/uploads/movie/movie_poster/the-bridges-of-madison-county-1995/large_czRuGEx9Yhnh6nApirTLPToxHNu.jpg', 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg', 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg', 'https://2.bp.blogspot.com/-KdOZ8zOrSsA/UVT4Sm4G1OI/AAAAAAAAAEQ/PZOtknEMUps/s1600/English_Spirited_Away_Poster_by_behruz.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Amsterdam_%282022_film%29.jpg/220px-Amsterdam_%282022_film%29.jpg'];

movieList.push('https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg', 'https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-chamber-of-secrets-vintage-movie-poster-original-1-sheet-27x41.jpg');

var movieName = ['Lord of The Rings', 'My Neighbor Totoro', 'Spider-Man No Way Home', 'Pokemon Mewtwo Strikes Back', 'Matrix','Capitão Fantástico', 'Kill Bill 1', 'Estrelas além do tempo', 'O grande hotel Budapeste', 'La La Land', 'As pontes de Madison', 'Soul', 'Bastardos Inglórios', 'A viagem de Chihiro', 'Amsterdam', 'Divertidamente', 'Harry Potter e a Câmara Secreta'];
// movieList[0]='https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg';
// movieList[1]='https://i.pinimg.com/474x/21/3c/a3/213ca3735c4d4b57b3edc478d7cdf36b.jpg';
// movieList[2]='https://static.wixstatic.com/media/631c57_23e5e2ea5ae0436abed197f299cccfae~mv2.jpg/v1/fill/w_751,h_1063,al_c,q_85,enc_auto/631c57_23e5e2ea5ae0436abed197f299cccfae~mv2.jpg';

document.write('<div class="container_todosFilmes">')


for(var i=0;i<movieList.length;i++){
  if((movieList[i].endsWith('jpg')) || (movieList[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ movieList[i] +'>');
        document.write('<p>'+ movieName[i] +'</p>'); 
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
};
document.write('</div>')


