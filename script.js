document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CARREGAMENTO DINÂMICO DE IMAGENS (API Unsplash com Licença Livre)
    // Usamos resoluções ideais para performance e palavras-chave do tema
    const imagesToLoad = {
        "hero-img": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80", // Painel Solar clássico aesthetic
        "gallery-1": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80",  /* Sol entre os dedos/natureza */
        "gallery-2": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80"   /* Turbinas/Energia limpa folhagens */
    };

    // Aplica as URLs nos elementos correspondentes
    for (const [id, url] of Object.entries(imagesToLoad)) {
        const imgElement = document.getElementById(id);
        if (imgElement) {
            imgElement.src = url;
        }
    }

    // 2. ACESSIBILIDADE & INTERAÇÃO: Menu Hamburguer Mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            
            // Alterna o estado do atributo de acessibilidade aria-expanded
            menuToggle.setAttribute("aria-expanded", !isExpanded);
            
            // Lógica simples de exibição para o mobile
            if (!isExpanded) {
                navLinks.style.display = "block";
                navLinks.style.position = "absolute";
                navLinks.style.top = "70px";
                navLinks.style.left = "0";
                navLinks.style.width = "100%";
                navLinks.style.backgroundColor = "#FBF9F6";
                navLinks.style.padding = "2rem";
                navLinks.style.boxShadow = "0 10px 15px rgba(0,0,0,0.05)";
            } else {
                navLinks.style.display = "none";
            }
        });
    }
});