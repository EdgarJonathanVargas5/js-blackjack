
/**
 * Esta funcion crea una carta 
 * @param {String} carta 
 * @returns {HTMLImageElement} 
 */

export const crearCartaHTML = ( carta ) => {

    if(!carta) throw new Error("Argumento carta es obligatorio");
     const imgCarta = document.createElement('img');
     imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
  
    return imgCarta;
}