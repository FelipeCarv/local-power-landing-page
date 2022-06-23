export default function scriptsIndex(){
   
    
const btnForm = document.getElementById('btn-grid1');

function activeForm(){
    
    const sectionOpen = document.getElementById('grid-2');
    sectionOpen.classList.remove('active');
}

btnForm.addEventListener('click', activeForm);

}
