const input1 = document.getElementById('note1');
const input2 = document.getElementById('note2');
const input3 = document.getElementById('note3');

const retrieveNote = document.querySelector('.report-retrieve');
const winNote = document.querySelector('.report-win');
const excellentNote = document.querySelector('.report-excellent');

const finalNote = document.getElementById('p-msj');

const btnCalculate = document.getElementById('btn-calculate');

btnCalculate.addEventListener('click',calculateNote);

const regex = new RegExp("^[1-5]{1}$");

btnCalculate.addEventListener('click', calculateNote);

function calculateNote() {
  let note1 = parseFloat(input1.value);
  let note2 = parseFloat(input2.value);
  let note3 = parseFloat(input3.value);
  let final = (note1 * 0.30) + (note2 * 0.30) + (note3 * 0.40);
  finalNote.textContent = final.toFixed(2);

  retrieveNote.textContent = "Si deseas recuperar, necesitas: "+secondChance();
  winNote.textContent = "Para ganar necesitarías mínimo: " + toWinNote();
  excellentNote.textContent = "Para ganar con honores necesitarías mínimo: " + noteWithHonors();
  return "Su nota en este momento es: "+final.toFixed(2);
}

function secondChance() {
  let note1 = parseFloat(input1.value);
  let note2 = parseFloat(input2.value);
  let pendingNote = 2.5 - ((note1 * 0.30)+(note2 * 0.30));  
  return (pendingNote / 0.40).toFixed(2);
}

function toWinNote() {
  let note1 = parseFloat(input1.value);
  let note2 = parseFloat(input2.value);
  let pendingNote = 3.5 - ((note1 * 0.30)+(note2 * 0.30));  
  return (pendingNote / 0.40).toFixed(2);
}

function noteWithHonors() {
  let note1 = parseFloat(input1.value);
  let note2 = parseFloat(input2.value);
  let pendingNote = 4.5 - ((note1 * 0.30)+(note2 * 0.30));  
  return (pendingNote / 0.40).toFixed(2);
}