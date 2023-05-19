/* Abrir modal de la concina */
function openModalCocina() {
    const modal = new bootstrap.Modal(document.getElementById('cocinaModal'), {
        keyboard: true
    });
    modal.toggle();
}

/* Abrir modal de las habitaciones secundarias */
function openHabTwoModal() {
    const modal = new bootstrap.Modal(document.getElementById('habTwoModal'), {
        keyboard: true
    });
    modal.toggle();
}

/* Abrir modal de la habitación principal */
function openHabModal() {
    const modal = new bootstrap.Modal(document.getElementById('habModal'), {
        keyboard: true
    });
    modal.toggle();
}

/* Abrir modal de la sala */
function openSalaModal() {
    const modal = new bootstrap.Modal(document.getElementById('salaModal'), {
        keyboard: true
    });
    modal.toggle();
}
