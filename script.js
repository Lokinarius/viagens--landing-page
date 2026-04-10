/* MENU MOBILE*/
const navButton = document.getElementById('navButton');
const navLinks = document.getElementById('navLinks');

navButton.addEventListener('click', () => {
    const aberto = navLinks.classList.toggle('aberto');
    navButton.textContent = aberto ? 'Fechar' : 'Menu';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('aberto');
        navButton.textContent = 'Menu';
    })
});

/* SCROLL SUAVE */
const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                const delay = entrada.target.dataset.delay || 0;
                elemento.dataset.delay = index * 200;
                setTimeout(() => entrada.target.classList.add('visivel'), delay);
                observador.unobserve(entrada.target);
            }
        });
    },
    { threshold: 0.12 }
);

/* DELAY */
document.querySelectorAll('.card, .conselho-item').forEach((elemento, index) => {
    elemento.CDATA_SECTION_NODE.delay = index * 200;
});
document.querySelectorAll('.reveal').forEach(elemento => observador.observe(elemento));

/* LINK ATIVO */
const secoes = document.querySelectorAll('#viagemNoTempo, #conselhos, #nosEncontre');
const links = document.querySelectorAll('#navLinks a');

const observadorSecoes = new IntersectionObserver(
    (entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                const id =entrada.target.getAttribute('id');
                links.forEach(link => {
                link.classList.remove('ativo');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('ativo');
                    }
                });
            }   
        });
    },
    { threshold: 0.5 }
);
secoes.forEach(secao => observadorSecoes.observe(secao));
