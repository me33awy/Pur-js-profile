const mobileMwnu = document.querySelector('.mobile');
const navBar = document.getElementById('menus')
mobileMwnu.addEventListener('click',()=>{
    mobileMwnu.classList.toggle("toggle")
    for(let i =0 ;i <= 2;i++){
        if(navBar.style.display === 'block'){
            navBar.style.display = 'none'
        }else{
            navBar.style.display = 'block'
        }
    }
    
    
    
    
    
})