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


    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".slider__button-right",
        prevEl: ".slider__button-left",
      },
    });



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


    




})