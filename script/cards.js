console.log("Cards Cargado");



const dataCards = [
    {
        "title": "Derecho Corporativo",
        "url_image": "./img/Derecho Corporativo.png",
        "desc": "Asesoramos a corporaciones locales e internacionales y brindamos servicios integrales de apoyo legal corporativo y comercial, tales como: constitución de sociedades, opiniones legales sobre empresas corporativas, preparación de contratos y todo tipo de transacciones comerciales.",
        "cta": "Mostrar más...",
        "link": "https://legalcentercr.com/derecho-corporativo/#:~:text=El%20derecho%20corporativo%20en%20Costa,las%20actividades%20empresariales%20y%20comerciales."
    },
    {
        "title": "Fusiones & Adquisiones",
        "url_image": "./img/Fusiones.png",
        "desc": "Tenemos experiencia representando tanto a la parte compradora como de la parte vendedora. Nuestro asesoramiento incluye todas las etapas del proceso de negociación, debida diligencia, redacción de reportes, documentos de compraventa, transacción y acuerdos finales.",
        "cta": "Mostrar más...",
        "link": "https://es.wikipedia.org/wiki/Fusiones_y_adquisiciones"
    },

    {
        "title": "Transacciones Inmobilarias & Derechos Reales",
        "url_image": "./img/Transacciones Inmobilarias.png",
        "desc": "Asesoramos a nuestros clientes en todos los aspectos de las transacciones inmobiliarias; desde la estructuración de las negociaciones hasta las adquisiciones, ventas, construcciones, financiamientos para compra de propiedades, desarrollo, arrendamiento, condominios y regímenes de zonas marítimas.",
        "cta": "Mostrar más...",
        "link": "https://www.bufetetoro.com/blog/que-es-derecho-inmobiliario/"
    },
    
    {
        "title": "Derecho Bancario & Regulación Financiera",
        "url_image": "./img/Derecho Bancario.png",
        "desc": "Ofrecemos asesoría legal en todos los temas de banca y finanzas. Nuestra firma ofrece servicios tales como la preparación, revisión y actualización de todo tipo de contratos bancarios, asesoramiento y preparación de acuerdos de financiación y los valores involucrados, fideicomisos de seguridad, gestión y fideicomisos.",
        "cta": "Mostrar más...",
        "link": "https://www.bufetetoro.com/blog/que-es-derecho-inmobiliario/"
    },

    {
        "title": "Inversión Extranjera.",
        "url_image": "./img/Inversión Extranjera.png",
        "desc": "Nuestra firma tiene amplia experiencia en proveer asistencia legal a empresas e individuos que invierten en Costa Rica. Asistimos a individuos, multinacionales y compañías extranjeras en la preparación de planes de negocios e inversión, la transformación de créditos en inversiones, cláusulas de garantía de inversiones.",
        "cta": "Mostrar más...",
        "link": "https://www.bufetetoro.com/blog/que-es-derecho-inmobiliario/"
    },
    {
        "title": "Litigio Civil & Comercial",
        "url_image": "./img/Litigio Civil.png",
        "desc": "Nuestra práctica de litigios se centra en litigios civiles y comerciales. Asesoramos en todas las etapas del litigio y tenemos amplia experiencia en casos relacionados con litigios inmobiliarios, incumplimiento contractual y cumplimiento de obligaciones, protección al consumidor, mediación y resolución alternativa de litigios.",
        "cta": "Mostrar más...",
        "link": "https://www.bufetetoro.com/blog/que-es-derecho-inmobiliario/"
    },
    {
        "title": "Seguros",
        "url_image": "./img/Seguros.png",
        "desc": "Nos especializamos en asesorar a empresas en el mercado de seguros, ofreciendo servicios legales en redacción y revisión de contratos, asesoría a compañías e intermediarios, y opiniones sobre la Ley Reguladora de Mercado de Seguros y legislación relacionada.",
        "cta": "Mostrar más...",
        "link": "https://www.bufetetoro.com/blog/que-es-derecho-inmobiliario/"
    },
    {
        "title": "Servicios Notariales",
        "url_image": "./img/Servicios Notariales.png",
        "desc": "Asistimos a nuestros clientes con todo tipo de Servicios Notariales.",
        "cta": "Mostrar más...",
        "link": "https://www.bufetetoro.com/blog/que-es-derecho-inmobiliario/"
    },
    {
        "title": "Derecho Laboral",
        "url_image": "./img/Derecho Laboral.png",
        "desc": "Ofrecemos a nuestros clientes un enfoque integral en temas de derecho laboral y empleo. Nuestros servicios incluyen, consejo regulador, políticas, redacción de contratos, contratación y terminación de empleados y litigios de derecho laboral.",
        "cta": "Mostrar más...",
        "link": "https://www.bufetetoro.com/blog/que-es-derecho-inmobiliario/"
    },

];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            // Llamar a las funciones
            this.insertData(_self);
            this.scrollToCard(_self);
        },

        insertData: function (_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        tplCardItem: function (item, index) {
            return (`<div class='card-item' id="card-numer-${index}">
                    <img src= "${item.url_image}"/>
                        <div class='card-info'>
                            <p class= 'card-title'>${item.title} </p>
                            <p class= 'card-desc'>${item.desc} </p>
                            <a class= 'card-cta' target='blank' href='${item.link}'>${item.cta} </a>
                        </div>
                    </div>`
            ); // el target='blank' es para abrir en una nueva pestaña
        },

        scrollToCard: function (_self) {
            document.querySelector('a[href="#card-list-container"]').addEventListener('click', function (event) {
                event.preventDefault(); // Prevenir el comportamiento predeterminado
                const cardContainer = document.getElementById('card-list-container');
                if (cardContainer) {
                    cardContainer.scrollIntoView({ behavior: 'smooth' });
                    // Abrir el primer card
                    const firstCardItem = document.querySelector('.card-item');
                    if (firstCardItem) {
                        firstCardItem.classList.add('active'); // O cualquier acción para resaltar el primer card
                    }
                }
            });
        }
    }
    CARD.init();
})();