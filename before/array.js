var quiz = {
    'step-n' : {
      'step-number' : 0,
      'title' : 'Какой бизнес Вы планируете <span class="nowrap">открыть? *</span>',
      'step-count' : 4,
      'next' : 'step-0',
      'coupon' : {
        'text' : 'Получите <span class="bold">скидку</span>:',
        'discount' : '10%'
      },
      'list' : {
        'type' : 'radio',
        'name' : 'business',
        'items' : [
          {
            'text' : 'Медицинский',
            'value' : 'med',
            'next' : 'step-0'
          },
          {
            'text' : 'Фармацевтический',
            'value' : 'farm',
            'next' : 'step-0'
          },
          {
            'text' : 'Алкогольный',
            'value' : 'alc',
            'next' : 'step-0'
          },
          {
            'text' : 'Образовательный',
            'value' : 'educ',
            'next' : 'step-0'
          },
          {
            'text' : 'Обращение с опасными отходами',
            'value' : 'dang',
            'next' : 'step-0'
          },
          {
            'text' : 'Другое',
            'value' : 'another',
            'next' : 'final'
          }
        ]
      }
    },

    'step-0' : {
      'med' : {
        'business' : 'Медицинский',
        'step-count' : 4,
        'step-number' : 0,
        'title' : 'Какой вид медицинской <span class="nowrap">деятельности? *</span>',
        'next' : 'step-1',
        //'prev' : 'step-n',
        'assistanceprice' : 70000,
        'roomassistanceprice' : 50000,
        'coupon' : {
          'text' : 'Получите <span class="bold">скидку</span>:',
          'discount' : '10%'
        },
        'list' : {
          'type' : 'radio',
          'name' : 'activity',
          'items' : [
            {
              'text' : 'Стоматология',
              'value' : '1',
              'price' : 130000,
              'next' : 'step-1'
            },
            {
              'text' : 'Косметология',
              'value' : '2',
              'price' : 100000,
              'next' : 'step-1'
            },
            {
              'text' : 'Массаж',
              'value' : '3',
              'price' : 100000,
              'next' : 'step-1'
            },
            {
              'text' : 'Клиника на 5 и более видов деятельности',
              'value' : '4',
              'price' : 130000,
              'next' : 'step-1'
            },
            {
              'text' : 'Клиника на 10 и более видов деятельности',
              'value' : '5',
              'price' : 180000,
              'next' : 'step-1'
            },
            {
              'text' : 'Другое',
              'value' : 'another',
              'price' : 100000,
              'next' : 'step-1'
            }
          ]
        }
      },
      'farm' : {
        'business' : 'Фармацевтический',
        'step-count' : 3,
        'step-number' : 0,
        'title' : 'Какой вид фармацевтической <span class="nowrap">деятельности? *</span>',
        'next' : 'step-1',
        //'prev' : 'step-n',
        'assistanceprice' : 60000,
        'roomassistanceprice' : 50000,
        'coupon' : {
          'text' : 'Ваша скидка:',
          'discount' : '4%'
        },
        'list' : {
          'type' : 'radio',
          'name' : 'activity',
          'items' : [
            {
              'text' : 'Розничная продажа',
              'value' : '1',
              'price' : 100000,
              'next' : 'step-1'
            },
            {
              'text' : 'Оптовая продажа',
              'value' : '2',
              'price' : 840000,
              'next' : 'step-1'
            }
          ]
        }
      },
      'alc' : {
        'business' : 'Алкогольный',
        'step-count' : 2,
        'step-number' : 0,
        'title' : 'Какой вид алкогольной <span class="nowrap">деятельности? *</span>',
        'next' : 'final',
        //'prev' : 'step-n',
        'coupon' : {
          'text' : 'Ваша скидка:',
          'discount' : '5%'
        },
        'list' : {
          'type' : 'radio',
          'name' : 'activity',
          'items' : [
            {
              'text' : 'Кафе',
              'value' : '1',
              'price' : 60000,
              'next' : 'final'
            },
            {
              'text' : 'Магазин',
              'value' : '2',
              'price' : 100000,
              'next' : 'final'
            },
            {
              'text' : 'Оптовая продажа',
              'value' : '3',
              'price' : 150000,
              'next' : 'final'
            }
          ]
        }
      },
      'educ' : {
        'business' : 'Образовательный',
        'step-count' : 3,
        'step-number' : 0,
        'title' : 'Какой вид образовательной <span class="nowrap">деятельности? *</span>',
        'next' : 'step-1',
        //'prev' : 'step-n',
        'assistanceprice' : 80000,
        'roomassistanceprice' : 50000,
        'coupon' : {
          'text' : 'Ваша скидка:',
          'discount' : '4%'
        },
        'list' : {
          'type' : 'radio',
          'name' : 'activity',
          'items' : [
            {
              'text' : 'Колледж',
              'value' : '1',
              'price' : 800000,
              'next' : 'step-1'
            },
            {
              'text' : 'Курсы повышения квалификации',
              'value' : '2',
              'price' : 100000,
              'next' : 'step-1'
            },
            {
              'text' : 'Школа иностранных языко',
              'value' : '3',
              'price' : 100001,
              'next' : 'step-1'
            },
            {
              'text' : 'Дистанционное обучение',
              'value' : '4',
              'price' : 100002,
              'next' : 'step-1'
            }
          ]
        }
      },
      'dang' : {
        'business' : 'Обращение с опасными отходами',
        'step-count' : 3,
        'step-number' : 0,
        'title' : 'Какой вид деятельности по обращению с <span class="nowrap">отходами? *</span>',
        'next' : 'step-1',
        //'prev' : 'step-n',
        'assistanceprice' : 150000,
        'roomassistanceprice' : 50000,
        'coupon' : {
          'text' : 'Ваша скидка:',
          'discount' : '4%'
        },
        'list' : {
          'type' : 'checkbox',
          'name' : 'activity',
          'items' : [
            {
              'text' : 'Сбор',
              'value' : '1',
              'price' : 200000,
              'next' : 'step-1'
            },
            {
              'text' : 'Транспортировка',
              'value' : '2',
              'price' : 200001,
              'next' : 'step-1'
            },
            {
              'text' : 'Хранение',
              'value' : '3',
              'price' : 200002,
              'next' : 'step-1'
            },
            {
              'text' : 'Переработка',
              'value' : '4',
              'price' : 350000,
              'next' : 'step-1'
            },
            {
              'text' : 'Утилизация',
              'value' : '5',
              'price' : 350001,
              'next' : 'step-1'
            },
            {
              'text' : 'Обезвреживание',
              'value' : '6',
              'price' : 350002,
              'next' : 'step-1'
            },
            {
              'text' : 'Захоронение',
              'value' : '7',
              'price' : 350003,
              'next' : 'step-1'
            },
          ]
        }
      },
      'another' : {
        'business' : 'Другое',
        'step-count' : 2,
        'step-number' : 0,
        'title' : 'Свяжитесь с нами',
        'coupon' : {
          'text' : 'Ваша скидка:',
          'discount' : '10%'
        }
      }
    },

    'step-1' : {
      'step-number' : 1,
      'title' : 'Какая лицензия нужна?',
      'step-count' : 4,
      'type' : 'education',
      'next' : 'step-2',
      // 'prev' : 'step-0',
      'coupon' : {
        'text' : 'Ваша скидка:',
        'discount' : '4%'
      },
      'list' : {
        'type' : 'radio',
        'name' : 'room',
        'items' : [
          {
            'text' : 'Дополнительное образование для детей и взрослых',
            'value' : '1',
            'next' : 'step-2',
            'prev' : 'step-0',
            'roomassistance' : null
          },
          {
            'text' : 'Дополнительное профессиональное образование',
            'value' : '2',
            'next' : 'step-2',
            'prev' : 'step-0',
            'roomassistance' : null
          },
          {
            'text' : 'Дистанционное обучение',
            'value' : '3',
            'next' : 'step-2',
            'prev' : 'step-0',
            'roomassistance' : null
          },
          {
            'text' : 'Нужна помощь',
            'value' : '4',
            'next' : 'step-2',
            'prev' : 'step-0',
            'roomassistance' : 1
          }
        ]
      }
    },

    'step-2' : {
      'step-number' : 2,
      'title' : 'Есть ли помещение в аренде или <span class="nowrap">собственности? </span>',
      'step-count' : 4,
      'next' : 'step-3',
      'prev' : 'step-1',
      'coupon' : {
        'text' : 'Ваша скидка:',
        'discount' : '8%'
      },
      'list' : {
        'type' : 'radio',
        'name' : 'type',
        'items' : [
          {
            'text' : 'Да',
            'value' : '1',
            'next' : 'step-3',
            'prev' : 'step-1',
            'assistance' : null
          },
          {
            'text' : 'Нет',
            'value' : '2',
            'next' : 'step-3',
            'prev' : 'step-1',
            'assistance' : null
          },
          {
            'text' : 'Нужна помощь',
            'value' : '3',
            'next' : 'step-3',
            'prev' : 'step-1',
            'assistance' : 1
          },
          {
            'text' : 'У нас только дистанционная форма',
            'value' : '4',
            'next' : 'step-3',
            'prev' : 'step-1',
            'assistance' : 1
          }
        ]
      }
    },

    'step-3' : {
      'step-number' : 3,
      'title' : 'Есть ли санитарно-эпидемиологическое <span class="nowrap">заключение?</span>',
      'step-count' : 4,
      'next' : 'final',
      'prev' : 'step-2',
      'coupon' : {
        'text' : 'Ваша скидка:',
        'discount' : '10%'
      },
      'list' : {
        'type' : 'radio',
        'name' : 'conclusion',
        'items' : [
          {
            'text' : 'Да',
            'value' : '1',
            'next' : 'final',
            'prev' : 'step-2',
            'assistance' : null
          },
          {
            'text' : 'Нет',
            'value' : '2',
            'next' : 'final',
            'prev' : 'step-2',
            'assistance' : null
          },
          {
            'text' : 'Нужна помощь',
            'value' : '3',
            'next' : 'final',
            'prev' : 'step-2',
            'assistance' : 1
          },
          {
            'text' : 'У нас только дистанционная форма',
            'value' : '4',
            'next' : 'final',
            'prev' : 'step-2',
            'assistance' : 1
          }
        ]
      }
    },

    'final' : {
      'title' : ''
    }

  };