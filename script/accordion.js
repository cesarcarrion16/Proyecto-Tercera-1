document.addEventListener('DOMContentLoaded', function () {
    console.log("Accordion Cargado");

    const dataAccordion = [
        {
            "title": "¿Quienes somos?",
            "desc": "Somos una firma de abogados que se dedica a la práctica de derecho comercial en general con especialidad en temas de negocios y derecho corporativo. Representamos empresas nacionales e internacionales y contamos con corresponsales en todo América Central. Actualmente opera sus oficinas principales en la ciudad de San José y adicionalmente cuenta con oficinas en Guanacaste, Costa Rica. Nuestro equipo esta compuesto por profesionales del más alto nivel, capaces de manejar transacciones complejas. Nuestra misión es brindar un servicio legal de la más alta calidad, a través de un enfoque personalizado, integral e inmediato. Entendemos su negocio, y hacemos nuestra prioridad satisfacer sus necesidades empresariales."
        },
        {
            "title": "Misión",
            "desc": "Nos esforzamos para proporcionar un gran servicio legal y consejo a nuestros clientes, lograr satisfacción professional y personal y traer éxitos a nuestros clientes y personal. Hemos creado una práctica corporativa y comercial exitosa. Nuestra estructura de negocios permite a nuestros abogados y miembros del personal trabajar en equipo y lograr nuestro objetivo común: Brindar un servicio legal de la más alta calidad."
        },
        {
            "title": "Visión",
            "desc": "Asegura el funcionamiento óptimo de cada elemento dentro de la organización, promoviendo el uso eficiente de los recursos aplicándolos para la obtención de las rentabilidades propuestas."
        },
    ];

    (function () {
        let ACCORDION = {
            init: function () {
                let _self = this;
                // Llamamos a las funciones
                this.insertData(_self);
                this.eventhandler(_self);
                this.scrollToAccordion(_self); // Llamamos a la nueva función
            },

            insertData: function (_self) {
                dataAccordion.map(function (item, index) {
                    document.querySelector('.main-accordion-container').insertAdjacentHTML("beforeend", _self.tplAccordionItem(item));
                });
            },

            eventhandler: function (_self) {
                let arrayRefs = document.querySelectorAll('.accordion-item');
                for (let x = 0; x < arrayRefs.length; x++) {
                    arrayRefs[x].addEventListener('click', function (event) {
                        console.log('event: ', event);
                        _self.showTab(arrayRefs[x]);
                    });
                }
            },

            scrollToAccordion: function (_self) {
                document.querySelector('a[href="#accordion-container"]').addEventListener('click', function (event) {
                    event.preventDefault(); // Prevenir el comportamiento predeterminado
                    const accordionContainer = document.getElementById('accordion-container');
                    if (accordionContainer) {
                        accordionContainer.scrollIntoView({ behavior: 'smooth' });
                        // Abrir el primer acordeón
                        const firstAccordionItem = document.querySelector('.accordion-item');
                        if (firstAccordionItem) {
                            _self.showTab(firstAccordionItem);
                        }
                    }
                });
            },

            tplAccordionItem: function (item) {
                return (`<div class='accordion-item'>
                    <div class='accordion-title'><p>${item.title}</p></div>
                    <div class='accordion-desc'><p>${item.desc}</p></div>
                    </div>`
                );
            },

            showTab: function (accordionItem) {
                if (accordionItem.classList.contains('tab-active')) {
                    accordionItem.classList.remove('tab-active');
                } else {
                    let activeTab = document.querySelector('.tab-active');
                    if (activeTab) {
                        activeTab.classList.remove('tab-active');
                    }
                    accordionItem.classList.add('tab-active');
                }
            },
        };
        ACCORDION.init();
    })();
});
