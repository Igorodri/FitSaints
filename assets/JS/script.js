const sections = ['home', 'servico', 'equipamentos', 'planos', 'contatos'];
const btn_planos = document.getElementById("planos2");

sections.forEach(section => {
    document.getElementById(section).addEventListener("click", () => {
        sections.forEach(sec => {
            const button = document.getElementById(sec);
            button.style.backgroundColor = sec === section ? 'white' : 'black';
            button.style.color = sec === section ? '#4169E1' : 'white';
            
            document.getElementById(`section-${sec}`).style.display = sec === section 
                ? (section === "home" ? "flex" : "block") 
                : "none";
        });
    });
});


btn_planos.addEventListener("click", function(){
    document.getElementById("section-planos").style.display = 'block';
    
    const btn_planos_section = document.getElementById("planos")

    btn_planos_section.style.backgroundColor = 'white'
    btn_planos_section.style.color = '#4169E1'

    document.getElementById("section-home").style.display = 'none'

    const btn_home = document.getElementById("home");

    btn_home.style.backgroundColor = 'black'
    btn_home.style.color = 'white'
})