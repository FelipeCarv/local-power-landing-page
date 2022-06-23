export default function scriptsIndex(){
   
    
const btnForm = document.getElementById('btn-grid1');

function activeForm(){
    
    const sectionOpen = document.getElementById('grid-2');
    const sectionClose = document.getElementById('grid-1');
    sectionOpen.classList.remove('active');
    sectionClose.classList.add('close');
}

btnForm.addEventListener('click', activeForm);

}
