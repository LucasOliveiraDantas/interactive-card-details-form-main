
function nameCard(){
    const nameForm = document.getElementById('name-form').value
    document.getElementById('name-card').value = nameForm
}
function numberCard(){
    const numberForm = document.getElementById('number-form').value
    document.getElementById('number-card').value = (
        numberForm.slice(0, 4) + " " + numberForm.slice(4, 8) + " " + numberForm.slice(8, 12) + " " + numberForm.slice(12, 16)
        )
}

function dateCard(){

    let dateCard = {
        monthy: document.getElementById('monthy-form').value,
        year:   document.getElementById('year-form').value,
    }

    
    document.getElementById('date-card').value = (dateCard.monthy + "/" + dateCard.year)
}


function cvcCard() {
    const cvcCard = document.getElementById('cvc-form').value
    document.getElementById('cvc-card').value = cvcCard

}