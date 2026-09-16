//Global
const filterToggleBtn = document.getElementById('filterToggleBtn');
const applyFilterBtn = document.getElementById('applyFilterBtn');
const filterSidebar = document.querySelector('.products-filter');
//Add Active Class To Filter Side 
filterToggleBtn.addEventListener('click', () => {
    filterSidebar.classList.toggle('active');
});
//Add Apply Filter And Remove Filter Side
applyFilterBtn.addEventListener('click', () => {
    filterSidebar.classList.remove('active');    
});