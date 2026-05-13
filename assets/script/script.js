document.addEventListener("DOMContentLoaded", function(){



    $.fn.setCursorPosition = function(pos) {
        const el = $(this).get(0);
        if (el.setSelectionRange) {
            el.setSelectionRange(pos, pos);
        } else if (el.createTextRange) {
            const range = el.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    return this;
    };
    $('input[type="tel"]')
    .mask('+7 (999) 999 99 99', { autoclear: false })
    .on('click', function(e) {
        const value = $(this).val();

        const clean = value.replace(/[^0-9]/g, '');

        if (clean.length <= 3) {
        e.preventDefault();
        $(this).setCursorPosition(6);
        }
    });


    const swiperElement = document.querySelector('.mySwiper');
    if (swiperElement) {
        new Swiper('.mySwiper', {
            navigation: {
                nextEl: '.slider__button-right',
                prevEl: '.slider__button-left',
            },
        });
    }



    (function faqAccordion() {
        const faqItems = document.querySelectorAll('.faq__item');
        if (!faqItems.length) return;
        faqItems.forEach((faqItem) => {
            const faqButton = faqItem.querySelector('.faq__item-head');
            const faqBody = faqItem.querySelector('.faq__item-body');
            if (!faqButton || !faqBody) return;
            if (faqItem.classList.contains('active')) {
                faqBody.style.maxHeight = faqBody.scrollHeight + 'px';
            }
            faqButton.addEventListener('click', () => {
                faqItem.classList.toggle('active');

                if (faqItem.classList.contains('active')) {
                    faqBody.style.maxHeight = faqBody.scrollHeight + 'px';
                } else {
                    faqBody.style.maxHeight = null;
                }
            });
        });
    })();


    //бургер
    const burger = document.querySelector('.burger');
    const overlay = document.querySelector('.opacite');
    const body = document.body;
    const burgerButtons = document.querySelectorAll('#nav-icon1, #nav-icon2');
    if (!burger || !overlay || !burgerButtons.length) return;
    burgerButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            button.classList.toggle('open');
            burger.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('hidden');
        });
    });
    document.addEventListener('click', function (e) {
        const clickedInsideBurger = e.target.closest('.burger');
        const clickedBurgerButton = e.target.closest('#nav-icon1, #nav-icon2');
        if (
            burger.classList.contains('active') &&
            !clickedInsideBurger &&
            !clickedBurgerButton
        ) {
            burger.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('hidden');
            burgerButtons.forEach(button => {
                button.classList.remove('open');
            });
        }
    });




    //каталог
    (function popularItems() {

        const popularWrapper = document.querySelector('.popularJS');

        if (!popularWrapper) return;

        const popularItems = popularWrapper.querySelectorAll('.popular__item');
        const popularButton = document.querySelector('.popular__button');

        let visibleItems = 9;

        if (window.innerWidth < 768) {
            visibleItems = 6;
        }

        if (window.innerWidth < 576) {
            visibleItems = 4;
        }

        if (popularItems.length <= visibleItems) {

            if (popularButton) {
                popularButton.style.display = 'none';
            }

            return;
        }

        popularItems.forEach((item, index) => {

            if (index >= visibleItems) {
                item.style.display = 'none';
            }

        });

        if (popularButton) {

            popularButton.addEventListener('click', function () {

                popularItems.forEach(item => {
                    item.style.display = '';
                });

                popularButton.style.display = 'none';

            });

        }

    })();


    //галерея
    (function galleryItems() {
        const galleryWrapper = document.querySelector('.gallery__wrapper');
        if (!galleryWrapper) return;
        const galleryItems = galleryWrapper.querySelectorAll('img');
        const galleryButton = document.querySelector('.gallery__button');
        let visibleItems = 9;
        if (window.innerWidth < 768) {
            visibleItems = 6;
        }
        if (window.innerWidth < 576) {
            visibleItems = 4;
        }
        if (galleryItems.length <= visibleItems) {
            if (galleryButton) {
                galleryButton.style.display = 'none';
            }
            return;
        }
        galleryItems.forEach((item, index) => {
            if (index >= visibleItems) {
                item.style.display = 'none';
            }
        });
        if (galleryButton) {
            galleryButton.addEventListener('click', function () {
                galleryItems.forEach(item => {
                    item.style.display = '';
                });
                galleryButton.style.display = 'none';
            });
        }
    })();



})