/* --- QUIZ --- */

// Ставим счётчик квиза
stepCount = quiz['step-1']['step-count'];
$(".b-quiz__counter-all").html(`/ 0${stepCount}`);

// Функция генерирует вопросы квиз, осуществляется замена информации
function generationQuizMain(stepNow) {
    // Записываем прогресс
    
    if (stepNow['step-number'] == 1) {
        $(".b-quiz__progress-num").html(`0%`);
    } else {
        let progress = 100 / stepCount * stepNow['step-number'];
        $(".b-quiz__progress-num").html(`${progress}%`);
        $(".progress-bar").attr('style', `width: ${progress}%;`);
        $(".progress-bar").attr('aria-valuenow', `${progress}`);
    }

    // Меняем информацию
    if (!stepNow['title']) {
        $(".b-quiz__tabs").html('');
        $(".b-quiz__final").attr('class', '.b-quiz__final');
        $(".b-quiz__progress-num").html(`100%`);
        $(".b-quiz__counter-active").html('0'+String(stepCount));
    } else {
        $(".b-quiz__coupon-num").html(stepNow['coupon']['discount']);
        $(".b-quiz__counter-active").html('0'+String(stepNow['step-number']));
        $(".b-quiz__item-title").html(stepNow['title']);
        $('.quiz-btn-next').attr('data-next', `${stepNow['next']}`);

        if (!stepNow['prev']) {
            $('.quiz-btn-prev').attr('disabled', true);
        } else {
            $('.quiz-btn-prev').attr('disabled', false);
            $('.quiz-btn-prev').attr('data-prev', `${stepNow['prev']}`);
        }
        
        // Удаление прошлых вопросов
        $(".b-quiz__form-checkbox-list").html('');

        // Генерация Вопросов
        let count = 0;
        stepNow['list']['items'].forEach((el) => {

            jQuery('<div>', {
                class: 'b-quiz__form-radio',
                id: `div-${count}-${stepNow['step-number']}`,
            }).appendTo('.b-quiz__form-checkbox-list');

            jQuery('<label>', {
                id: `label-${count}-${stepNow['step-number']}`,
            }).appendTo(`#div-${count}-${stepNow['step-number']}`);

            jQuery('<input>', {
                type: 'radio',
                name: stepNow['list']['name'],
                value: stepNow['list']['items'][count]['value'],
            }).appendTo(`#label-${count}-${stepNow['step-number']}`);

            jQuery('<span>', {
                class: 'custom-checkbox-input',
            }).appendTo(`#label-${count}-${stepNow['step-number']}`);

            if (count == 0) {
                $(`#label-${count}-${stepNow['step-number']} > input`).attr('checked', '');
            }

            jQuery('<span>', {
                class: 'custom-checkbox-text',
            }).appendTo(`#label-${count}-${stepNow['step-number']}`);

            $(`#label-${count}-${stepNow['step-number']} .custom-checkbox-text`).html(stepNow['list']['items'][count]['text']);
            count++;
        });

    }
}

// Функция смотрит какой шаг следующий и берёт информацию из объекта
function genrationQuizNext(){
    stepNow = quiz[$('.quiz-btn-next').attr('data-next')];
    if (stepNow['title']) {
        $(`input#quizform-${stepNow['list']['name']}`).attr('value', stepNow['list']['items'][0]['text']);
    }
    
    console.log(stepNow);
    generationQuizMain(stepNow);
}

// Функция смотрит какой шаг предыдущий и берёт информацию из объекта
function genrationQuizPrev() {
    stepNow = quiz[$('.quiz-btn-prev').attr('data-prev')];
    console.log(stepNow);
    generationQuizMain(stepNow);
}

// Функция динамически меняет информацию в список ответов
function clickInput() {
    $('input').on('click', function(){
        $(`input#quizform-${stepNow['list']['name']}`).attr('value', stepNow['list']['items'][$(`input[name="${stepNow['list']['name']}"]:checked`).attr('value')-1]['text']);
    })
}

// Генерируем первый вопрос Квиз
// genrationQuizNext();
stepNow = quiz['step-1'];
clickInput();

// Листаем квиз вперёд
$('.quiz-btn-next').on('click', function(){
    genrationQuizNext();
    clickInput();
})

// Листаем квиз назад
$('.quiz-btn-prev').on('click', function(){
    genrationQuizPrev();
    clickInput();
})


/* end --- QUIZ --- end */