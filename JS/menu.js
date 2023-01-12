const nav = document.querySelector('.nav');

nav.innerHTML = `
<div class="nav_logo">
<a href="/index.html"><img src="/Images/Logo.jpg" class="logo"></a>
</div>

<ul class="nav_link nav_link--menu">
<li class="nav_items">
    <a href="/index.html" class="nav_links">Inicio</a>
</li>
<li class="nav_items">
    <a href="/habitantes/habitantes.html" class="nav_links">Habitantes</a>
</li>
<li class="nav_items">
    <a href="/Libros/poemario.html" class="nav_links">Poemario</a>
</li>
<li class="nav_items">
    <a href="/galeria.html" class="nav_links">Galería</a>
</li>
<li class="nav_items">
    <a href="/postales.html" class="nav_links">Postales</a>
</li>
<li class="nav_items">
    <a href="/tienda.html" class="nav_links">Tienda</a>
</li>
<li class="nav_items">
    <a href="/contacto.html" class="nav_links">Contacto</a>
</li>

<img src="/Images/close.svg" alt="calima" class="nav_close">
</ul>

<div class="nav_menu">
<img src="/Images/menu.svg" class="nav_img">
</div>
`;

const footer = document.querySelector('.footer');

footer.innerHTML = `
<section class="footer_container container">
            <nav class="nav nav--footer">
                <h2 class="footer_title">Habitantes de la Calima</h2>
                <ul class="nav_link nav_link--footer">
                    <li class="nav_items">
                    <a href="/index.html" class="footer_links">Inicio</a>
                    </li>
                    <li class="nav_items">
                        <a href="/habitantes/habitantes/habitantes.html" class="footer_links">Habitantes</a>
                    </li>
                    <li class="nav_items">
                        <a href="/Libros/poemario.html" class="footer_links">Poemario</a>
                    </li>
                    <li class="nav_items">
                        <a href="/galeria.html" class="footer_links">Galería</a>
                    </li>
                    <li class="nav_items">
                        <a href="/postales.html" class="footer_links">Postales</a>
                    </li>
                    <li class="nav_items">
                        <a href="/tienda.html" class="footer_links">Tienda</a>
                    </li>
                </ul>
            </nav>
            <form class="footer_form" action="https://formspree.io/f/mzbwkvqv" method="POST">
                <h2 class="footer_postales">Recibe las postales de Calima</h2>
                <div class="footer_inputs">
                    <input type="email" placeholder="Email:" class="footer_input" name="email">
                    <input type="submit" value="Únete" class="footer_sumit cta">
                </div>
            </form>
        </section>

        <section class="footer_copy container">
            <div id="footer_social">
                <a href="https://www.facebook.com/habitantesdelacalima" class="footer_icons"><img src="/Images/facebook.svg" class="footer_img"></a>
                <a href="https://www.instagram.com/habitantesdelacalima/" class="footer_icons"><img src="/Images/instagram.svg" class="footer_img"></a>
                <a href="mailto:habitantesdelacalima@gmail.com" class="footer_icons"><img src="/Images/gmail.svg" class="footer_img"></a>
            </div>

            <h3 class="footer_copyright">Derechos reservados &copy; Habitantes de la Calima</h3>
        </section>
`;





(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');


    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
        openButton.style.display = 'none';
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
        openButton.style.display = 'block';
    });
})();
