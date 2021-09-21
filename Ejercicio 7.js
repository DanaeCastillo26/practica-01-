function contarVocales(texto){
    return texto.replace(/[^aeiouAEIOUáéíóúÁÉÍÓÚ]/g, "").length;
}