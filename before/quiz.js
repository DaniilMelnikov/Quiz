/* --- QUIZ --- */

var quiz_var_business = null;
var quiz_var_type = null;
var quiz_var_room = null;
var quiz_var_conclusion = null;
var quiz_var_city = null;
var quiz_var_businessstom = null;
var quiz_var_xray = null;

let quiz_results;

if(quiz['step-1']['type'] == "stom"){
	quiz_results = {
    'quiz_var_businessstom' : {
        'value' : null,
        'step' : null
    },
    'quiz_var_city' : {
        'value' : null,
        'step' : null
    },
    'quiz_var_xray' : {
        'value' : null,
        'step' : null
    },
    'quiz_var_conclusion' : {
        'value' : null,
        'step' : null
    },
}
}else{

quiz_results = {
    'quiz_var_business' : {
        'value' : null,
        'step' : null
    },
    'quiz_var_type' : {
        'value' : null,
        'step' : null
    },
    'quiz_var_room' : {
        'value' : null,
        'step' : null
    },
    'quiz_var_conclusion' : {
        'value' : null,
        'step' : null
    },
	'quiz_var_city' : {
        'value' : null,
        'step' : null
    },
}
}
function quiz_fill_hidden_fields(){
  var text_business = '';
  var text_type = new Array;
  var text_room = '';
  var text_conclusion = '';
  var text_city = '';
  var text_businessstom = '';
  var text_xray = '';

  if(quiz['business']) {
        text_business = quiz['business'];
  }
  if (typeof quiz_var_business !== 'undefined' && quiz_var_business) {
      
    if (typeof quiz['step-2'][quiz_var_business.val()]['business'] !== 'undefined') {
      text_business = quiz['step-2'][quiz_var_business.val()]['business'];
    }
  }
  
  if (typeof quiz_var_type !== 'undefined' && quiz_var_type) {
      var quiz_var_type_arr;
    if(/^[,]+$/.test(quiz_var_type)) {
        quiz_var_type_arr = quiz_var_type.split(',');
    } else {
        quiz_var_type_arr = quiz_var_type;
    }
	let stepCon;
	if(quiz['step-1']['type'] == "stom"){
		stepCon = quiz_results['quiz_var_city']['step'];
	}else if(quiz['step-1']['type'] == "education"){
		stepCon = quiz_results['quiz_var_room']['step'];
	}else{
		stepCon = quiz_results['quiz_var_type']['step'];
	}
    if (typeof quiz_var_type_arr === 'object') {
      for(quiz_var_type_arr_i in quiz_var_type_arr){
        if('list' in quiz[stepCon]) {
            quizType(quiz[stepCon]['list']['items'])
        } else if (typeof quiz[stepCon][quiz_var_business.val()]['list']['items'] !== 'undefined') {
          quizType( quiz[stepCon][quiz_var_business.val()]['list']['items'],'branching')
        }
        function quizType(currentElem, currentAction) {
            
            switch(currentAction) {
              case 'branching': 
               currentElem.forEach(function(item, i, arr){
                if (typeof item.value !== 'undefined' && item.value == quiz_var_type_arr[quiz_var_type_arr_i].value && typeof item.text !== 'undefined') {
                    text_type.push(item.text);
                }
                }); 
                break;

              default:
                //text_type = quiz['step-2'].currentElem.text; 
                currentElem.forEach(function(item, i, arr){
                if (typeof item.value !== 'undefined' && item.value == quiz_var_type_arr[quiz_var_type_arr_i].value && typeof item.text !== 'undefined') {
                    text_type.push(item.text);
                }
                }); 
                break;
            }     
            // if(currentAction == 'simple')  {
                  
            // } else {
               
            // }
        }
      }
    }
  }
  text_type = text_type.join(', ');
  
  if(quiz['step-1']['type']=="stom"){
	  if (typeof quiz_var_businessstom !== 'undefined' && quiz_var_businessstom) {
      let stepCon = quiz_results['quiz_var_businessstom']['step'];
    if (typeof quiz[stepCon]['list']['items'] !== 'undefined') {
      quiz[stepCon]['list']['items'].forEach(function(item, i, arr) {
        if (typeof item.value !== 'undefined' && item.value == quiz_var_businessstom.val() && typeof item.text !== 'undefined') {
          text_businessstom += item.text;
        }
      });
    }
  }
  if(typeof quiz_var_city !== 'undefined' && quiz_var_city) {
    let stepCon = quiz_results['quiz_var_city']['step'];
    if (typeof quiz[stepCon]['list']['items'] !== 'undefined') {
      quiz[stepCon]['list']['items'].forEach(function(item, i, arr) {
        if (typeof item.value !== 'undefined' && item.value == quiz_var_city.val() && typeof item.text !== 'undefined') {
          text_city += item.text;
        }
      });
    }
  }
  if (typeof quiz_var_xray !== 'undefined' && quiz_var_xray) {
      let stepCon = quiz_results['quiz_var_xray']['step'];
    if (typeof quiz[stepCon]['list']['items'] !== 'undefined') {
      quiz[stepCon]['list']['items'].forEach(function(item, i, arr) {
        if (typeof item.value !== 'undefined' && item.value == quiz_var_xray.val() && typeof item.text !== 'undefined') {
          text_xray += item.text;
        }
      });
    }
  }
  if (typeof quiz_var_conclusion !== 'undefined' && quiz_var_conclusion) {
    let stepCon = quiz_results['quiz_var_conclusion']['step'];
    if (typeof quiz[stepCon]['list']['items'] !== 'undefined') {
      quiz[stepCon]['list']['items'].forEach(function(item, i, arr) {
        if (typeof item.value !== 'undefined' && item.value == quiz_var_conclusion.val() && typeof item.text !== 'undefined') {
          text_conclusion += item.text;
        }
      });
    }
  }
  
    
  
  

//console.log(text_businessstom)
//console.log(text_city)
//console.log(text_xray)
//console.log(text_conclusion)
//console.log(quiz_results)
  
  $('#quizform-businessstom').val(text_businessstom);
  $('#quizform-city').val(text_city);
  $('#quizform-xray').val(text_xray);
  $('#quizform-conclusion').val(text_conclusion);
  
  }else{

  if (typeof quiz_var_room !== 'undefined' && quiz_var_room) {
      let stepCon = quiz_results['quiz_var_room']['step'];
    if (typeof quiz[stepCon]['list']['items'] !== 'undefined') {
      quiz[stepCon]['list']['items'].forEach(function(item, i, arr) {
        if (typeof item.value !== 'undefined' && item.value == quiz_var_room && typeof item.text !== 'undefined') {
          text_room += item.text;
        }
      });
    }
  }
  if (typeof quiz_var_type !== 'undefined' && quiz_var_type) {
      let stepCon = quiz_results['quiz_var_type']['step'];
    if (typeof quiz[stepCon]['list']['items'] !== 'undefined') {
      quiz[stepCon]['list']['items'].forEach(function(item, i, arr) {
        if (typeof item.value !== 'undefined' && item.value == quiz_var_type.val() && typeof item.text !== 'undefined') {
          text_type = item.text;
        }
      });
    }
  }
    
  if (typeof quiz_var_conclusion !== 'undefined' && quiz_var_conclusion) {
    let stepCon = quiz_results['quiz_var_conclusion']['step'];
    if (typeof quiz[stepCon]['list']['items'] !== 'undefined') {
      quiz[stepCon]['list']['items'].forEach(function(item, i, arr) {
        if (typeof item.value !== 'undefined' && item.value == quiz_var_conclusion.val() && typeof item.text !== 'undefined') {
          text_conclusion += item.text;
        }
      });
    }
  }
  if(typeof quiz_var_city !== 'undefined' && quiz_var_city) {
    let stepCon = quiz_results['quiz_var_city']['step'];
    if (typeof quiz[stepCon]['list']['items'] !== 'undefined') {
      quiz[stepCon]['list']['items'].forEach(function(item, i, arr) {
        if (typeof item.value !== 'undefined' && item.value == quiz_var_city.val() && typeof item.text !== 'undefined') {
          text_city += item.text;
        }
      });
    }
  }

//console.log(text_business)
//console.log(text_type)
//console.log(text_room)
//console.log(text_conclusion)
//console.log(text_city)
//console.log(quiz_results)
  $('#quizform-business').val(text_business);
  $('#quizform-type').val(text_type);
  $('#quizform-room').val(text_room);
  $('#quizform-conclusion').val(text_conclusion);
  $('#quizform-city').val(text_city);
}
}

function quiz_step_n(){
  if (typeof quiz === 'object') {
    var step_number = quiz['step-n']['step-number'] || 0;
    var title = quiz['step-n']['title'] || '';
    var step_count = quiz['step-n']['step-count'] || 0;
    var coupon_text = quiz['step-n'].coupon.text || '';
    var coupon_discount = quiz['step-n'].coupon.discount || '';
    var list = quiz['step-n'].list || null;
    var next_step = quiz['step-n'].next || null;
    var prev_step = quiz['step-n'].prev || null;

    var btn_business = null;
    var btn_price = null;
    var btn_roomassistanceprice = null;
    var btn_roomassistance = null;
    var btn_assistanceprice = null;
    var btn_assistance = null;

    var checkbox = '';
    if (list) {
      for(one in list.items){
        var one_name = list.name || '';
        var one_text = list.items[one].text || '';
        var one_value = list.items[one].value || '';
        var one_checked = '';
        if (checkbox === '') {
          one_checked = 'checked';
        }
        if (one_checked === 'checked') {
          btn_business = one_value;
        }
        var one_data = {
          'next' : list.items[one].next,
          'business' : one_value,
          'price' : null,
          'assistanceprice' : null,
          'roomassistanceprice' : null,
        }
        if (list.type === 'radio') {
          checkbox += custom_radio(one_name, one_value, one_text, one_checked, one_data);
        } else if (list.type === 'checkbox') {
          checkbox += custom_checkbox(one_name, one_value, one_text, one_checked, one_data);
        }
      }
    }

    step_number = LdgZero(step_number);
    step_count = '/ ' + LdgZero(step_count);

    $('.b-quiz__item-title').html(title);
    $('.b-quiz__counter-active').html(step_number);
    $('.b-quiz__counter-all').html(step_count);
    $('.b-quiz__coupon-text').html(coupon_text);
    $('.b-quiz__coupon-num').html(coupon_discount);

    $('.b-quiz__btn.quiz-btn-prev').attr('data-business', btn_business).attr('data-price', btn_price).attr('data-roomassistanceprice', btn_roomassistanceprice).attr('data-roomassistance', btn_roomassistance).attr('data-assistanceprice', btn_assistanceprice).attr('data-assistance', btn_assistance);
    $('.b-quiz__btn.quiz-btn-next').attr('data-business', btn_business).attr('data-price', btn_price).attr('data-roomassistanceprice', btn_roomassistanceprice).attr('data-roomassistance', btn_roomassistance).attr('data-assistanceprice', btn_assistanceprice).attr('data-assistance', btn_assistance).attr('data-step', '0');

    if (next_step) {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', next_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', '').addClass('hidden');
    }

    if (prev_step) {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', prev_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', '').addClass('hidden');
    }

    $('.b-quiz__progress .progress-bar').css('width', '0').attr('aria-valuenow', '0');
    $('.b-quiz__progress-num').html('0%');

    $('.b-quiz__form-checkbox-list').html(checkbox);

    quiz_var_business = null;
    quiz_var_type = null;
    quiz_var_room = null;
    quiz_var_conclusion = null;
	quiz_var_city = null;
  }
}

function quiz_step_0(business){
  if (typeof quiz === 'object') {
    var step_number = quiz['step-0'][business]['step-number'] || 0;
    var title = quiz['step-0'][business]['title'] || '';
    var step_count = quiz['step-0'][business]['step-count'] || 0;

    if (step_count == 0) {
      progress = 0;
    } else {
      var progress = (step_number - 1) / step_count * 100;
      progress = Math.ceil(progress);
      if (progress > 100) {
        progress = 100;
      } else if (progress < 0) {
        progress = 0;
      }
    }

    var roomassistanceprice = quiz['step-0'][business].roomassistanceprice || null;
    var assistanceprice = quiz['step-0'][business].assistanceprice || null;
    var coupon_text = quiz['step-0'][business].coupon.text || '';
    var coupon_discount = quiz['step-0'][business].coupon.discount || '';
    var list = quiz['step-0'][business].list || null;
    var next_step = quiz['step-0'][business].next || null;
    var prev_step = quiz['step-0'][business].prev || null;
    var btn_price = null;
    var btn_roomassistance = null;
    var btn_assistance = null;

    var checkbox = '';
    if (list) {
      for(one in list.items){
        var one_name = list.name || '';
        var one_text = list.items[one].text || '';
        var one_value = list.items[one].value || '';
        var one_price = list.items[one].price || '';


        var one_checked = '';
        if (checkbox === '') {
          one_checked = 'checked';
        }
        if (one_checked === 'checked') {
          btn_price = one_price;
        }
        var one_data = {
          'next' : list.items[one].next,
          'business' : business,
          'price' : one_price,
          'roomassistanceprice' : roomassistanceprice,
          'assistanceprice' : assistanceprice
        }
        if (list.type === 'radio') {
          checkbox += custom_radio(one_name, one_value, one_text, one_checked, one_data);
        } else if (list.type === 'checkbox') {
          checkbox += custom_checkbox(one_name, one_value, one_text, one_checked, one_data);
        }
      }
    }

    step_number = LdgZero(step_number);
    step_count = '/ ' + LdgZero(step_count);

    $('.b-quiz__item-title').html(title);
    $('.b-quiz__counter-active').html(step_number);
    $('.b-quiz__counter-all').html(step_count);
    $('.b-quiz__coupon-text').html(coupon_text);
    $('.b-quiz__coupon-num').html(coupon_discount);

    $('.b-quiz__btn.quiz-btn-prev').attr('data-business', business).attr('data-price', btn_price).attr('data-roomassistanceprice', roomassistanceprice).attr('data-roomassistance', btn_roomassistance).attr('data-assistanceprice', assistanceprice).attr('data-assistance', btn_assistance);
    $('.b-quiz__btn.quiz-btn-next').attr('data-business', business).attr('data-price', btn_price).attr('data-roomassistanceprice', roomassistanceprice).attr('data-roomassistance', btn_roomassistance).attr('data-assistanceprice', assistanceprice).attr('data-assistance', btn_assistance).attr('data-step', '1');

    if (next_step) {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', next_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', '').addClass('hidden');
    }

    if (prev_step) {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', prev_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', '').addClass('hidden');
    }

    $('.b-quiz__progress .progress-bar').attr('aria-valuenow', progress);
    progress = progress + '%';
    $('.b-quiz__progress .progress-bar').css({'width' : progress});
    $('.b-quiz__progress-num').html(progress);

    $('.b-quiz__form-checkbox-list').html(checkbox);

    quiz_var_business = business;
    quiz_var_type = null;
    quiz_var_room = null;
    quiz_var_conclusion = null;
	quiz_var_city = null;
  }
}

function quiz_step_1(business, price, roomassistanceprice, assistanceprice){
  if (typeof quiz === 'object') {
    var step_number = quiz['step-1']['step-number'] || 0;
    var title = quiz['step-1']['title'] || '';
    var step_count = quiz['step-1']['step-count'] || 0;


    progress = 0;

    var coupon_text = quiz['step-1'].coupon.text || '';
    var coupon_discount = quiz['step-1'].coupon.discount || '';
    var list = quiz['step-1'].list || null;
    var next_step = quiz['step-1'].next || null;
    var prev_step = quiz['step-1'].prev || null;
    var btn_roomassistance = null;

    var checkbox = '';
    if (list) {
      for(one in list.items){
        var one_name = list.name || '';
        var one_text = list.items[one].text || '';
        var one_value = list.items[one].value || '';
        var one_checked = '';
        if (checkbox === '') {
          one_checked = 'checked';
        }
        if (one_checked === 'checked') {
          btn_roomassistance = list.items[one].roomassistance;
        }
        var one_data = {
          'next' : list.items[one].next,
          'business' : business,
          'roomassistance' : list.items[one].roomassistance,
          'price' : price,
          'roomassistanceprice' : roomassistanceprice,
          'assistanceprice' : assistanceprice,
        }
        if (list.type === 'radio') {
          checkbox += custom_radio(one_name, one_value, one_text, one_checked, one_data);
        } else if (list.type === 'checkbox') {
          checkbox += custom_checkbox(one_name, one_value, one_text, one_checked, one_data);
        }
      }
    }

    step_number = LdgZero(step_number);
    step_count = '/ ' + LdgZero(step_count);

    $('.b-quiz__item-title').html(title);
    $('.b-quiz__counter-active').html(step_number);
    $('.b-quiz__counter-all').html(step_count);
    $('.b-quiz__coupon-text').html(coupon_text);
    $('.b-quiz__coupon-num').html(coupon_discount);

    $('.b-quiz__btn.quiz-btn-prev').attr('data-business', business).attr('data-price', price).attr('data-roomassistanceprice', roomassistanceprice).attr('data-roomassistance', btn_roomassistance).attr('data-assistanceprice', assistanceprice);
    $('.b-quiz__btn.quiz-btn-next').attr('data-business', business).attr('data-price', price).attr('data-roomassistanceprice', roomassistanceprice).attr('data-roomassistance', btn_roomassistance).attr('data-assistanceprice', assistanceprice).attr('data-step', '2');

    if (next_step) {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', next_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', '').addClass('hidden');
    }

    if (prev_step) {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', prev_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', '').addClass('hidden');
    }

    $('.b-quiz__progress .progress-bar').attr('aria-valuenow', progress);
    progress = progress + '%';
    $('.b-quiz__progress .progress-bar').css({'width' : progress});
    $('.b-quiz__progress-num').html(progress);

    $('.b-quiz__form-checkbox-list').html(checkbox);


    $(".b-quiz__btn.quiz-btn-next").attr("id", `dalee-1-2`),
    $(".b-quiz__form-checkbox-list .b-quiz__form-radio input").each(function (index) {
        $(this).attr("id", `answer-1-${index + 1}`);
    });
  }
}


function quiz_step_2(business, price, roomassistanceprice, roomassistance, assistanceprice){
    const inputChecked = $('.b-quiz input[name="business"]:checked');
    
  if (typeof quiz === 'object') {
    //   if(inputChecked.length != 0) {
    //       quiz_var_business = inputChecked;
    //   }
      if(inputChecked.length == 0 && !quiz_var_business) {
            for (let key in quiz) {
              if(quiz[key].branching == 1) {
                  quiz_step_1(business, price, roomassistanceprice, assistanceprice);
                  return false;
              }
            }
      }
    var step_number,title,step_count,coupon_text,coupon_discount,list,next_step,prev_step,btn_assistance;
    
    if(quiz['step-2']) {
       if(quiz['step-2']['branching'] == '1') {
        inputCheckedValue(quiz['step-2'][quiz_var_business.val()]);
        } else {
            inputCheckedValue(quiz['step-2']);
        } 
    }
    
    
    function inputCheckedValue(quizData) {
         step_number = quizData['step-number'] || 0;
         title = quizData['title'] || '';
         step_count = quizData['step-count'] || 0;
    
        progress = 50;
    
         coupon_text = quizData.coupon.text || '';
         coupon_discount = quizData.coupon.discount || '';
         list = quizData.list || null;
         next_step = quizData.next || null;
         prev_step = quizData.prev || null;
         btn_assistance = null;
    }
    
    // var step_number = quiz['step-2']['step-number'] || 0;
    // var title = quiz['step-2']['title'] || '';
    // var step_count = quiz['step-2']['step-count'] || 0;

    // progress = 50;

    // var coupon_text = quiz['step-2'].coupon.text || '';
    // var coupon_discount = quiz['step-2'].coupon.discount || '';
    // var list = quiz['step-2'].list || null;
    // var next_step = quiz['step-2'].next || null;
    // var prev_step = quiz['step-2'].prev || null;
    // var btn_assistance = null;

    var checkbox = '';
    if (list) {
      for(one in list.items){
        var one_name = list.name || '';
        var one_text = list.items[one].text || '';
        var one_value = list.items[one].value || '';
        var one_checked = '';
        if (checkbox === '') {
          one_checked = 'checked';
        }
        if (one_checked === 'checked') {
          btn_assistance = list.items[one].assistance;
        }
        var one_data = {
          'next' : list.items[one].next,
          'business' : business,
          'roomassistance' : roomassistance,
          'roomassistanceprice' : roomassistanceprice,
          'assistance' : list.items[one].assistance,
          'price' : price,
          'assistanceprice' : assistanceprice
        }
        if (list.type === 'radio') {
          checkbox += custom_radio(one_name, one_value, one_text, one_checked, one_data);
        } else if (list.type === 'checkbox') {
          checkbox += custom_checkbox(one_name, one_value, one_text, one_checked, one_data);
        }
      }
    }

    step_number = LdgZero(step_number);
    step_count = '/ ' + LdgZero(step_count);

    $('.b-quiz__item-title').html(title);
    $('.b-quiz__counter-active').html(step_number);
    $('.b-quiz__counter-all').html(step_count);
    $('.b-quiz__coupon-text').html(coupon_text);
    $('.b-quiz__coupon-num').html(coupon_discount);

    $('.b-quiz__btn.quiz-btn-prev').attr('data-business', business).attr('data-price', price).attr('data-roomassistanceprice', roomassistanceprice).attr('data-roomassistance', roomassistance).attr('data-assistanceprice', assistanceprice).attr('data-assistance', btn_assistance);
    $('.b-quiz__btn.quiz-btn-next').attr('data-business', business).attr('data-price', price).attr('data-roomassistanceprice', roomassistanceprice).attr('data-roomassistance', roomassistance).attr('data-assistanceprice', assistanceprice).attr('data-assistance', btn_assistance).attr('data-step', '3');

    if (next_step) {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', next_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', '').addClass('hidden');
    }

    if (prev_step) {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', prev_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', '').addClass('hidden');
    }

    $('.b-quiz__progress .progress-bar').attr('aria-valuenow', progress);
    progress = progress + '%';
    $('.b-quiz__progress .progress-bar').css({'width' : progress});
    $('.b-quiz__progress-num').html(progress);

    $('.b-quiz__form-checkbox-list').html(checkbox);
    $(".b-quiz__btn.quiz-btn-next").attr("id", `dalee-2-3`),
    $(".b-quiz__form-checkbox-list .b-quiz__form-radio input").each(function (index) {
        $(this).attr("id", `answer-2-${index + 1}`);
    });
  }
}

function quiz_step_3(business, price, assistanceprice){
  if (typeof quiz === 'object') {
      const inputChecked = $('.b-quiz input[name="type"]:checked');
	  if(quiz['step-1']['type']!="med"){
		quiz_var_type = inputChecked;
	  }
    
    if(quiz['step-3']) {
        var step_number = quiz['step-3']['step-number'] || 0;
        var title = quiz['step-3']['title'] || '';
        var step_count = quiz['step-3']['step-count'] || 0;
        
        var coupon_text = quiz['step-3'].coupon.text || '';
        var coupon_discount = quiz['step-3'].coupon.discount || '';
        var list = quiz['step-3'].list || null;
        var next_step = quiz['step-3'].next || null;
        var prev_step = quiz['step-3'].prev || null;
        var btn_assistance = null;
    }
    
    
    if (step_count == 0) {
      progress = 0;
    } else {
      var progress = step_number / step_count * 100;
      progress = Math.ceil(progress);
      if (progress > 100) {
        progress = 100;
      } else if (progress < 0) {
        progress = 0;
      }
    }

    

    var checkbox = '';
    if (list) {
      for(one in list.items){
        var one_name = list.name || '';
        var one_text = list.items[one].text || '';
        var one_value = list.items[one].value || '';
        var one_checked = '';
        if (checkbox === '') {
          one_checked = 'checked';
        }
        if (one_checked === 'checked') {
          btn_assistance = list.items[one].assistance;
        }
        var one_data = {
          'next' : list.items[one].next,
          'business' : business,
          'assistance' : list.items[one].assistance,
          'price' : price,
          'assistanceprice' : assistanceprice
        }
        if (list.type === 'radio') {
          checkbox += custom_radio(one_name, one_value, one_text, one_checked, one_data);
        } else if (list.type === 'checkbox') {
          checkbox += custom_checkbox(one_name, one_value, one_text, one_checked, one_data);
        }
      }
    }

    step_number = LdgZero(step_number);
    step_count = '/ ' + LdgZero(step_count);

    $('.b-quiz__item-title').html(title);
    $('.b-quiz__counter-active').html(step_number);
    $('.b-quiz__counter-all').html(step_count);
    $('.b-quiz__coupon-text').html(coupon_text);
    $('.b-quiz__coupon-num').html(coupon_discount);

    $('.b-quiz__btn.quiz-btn-prev').attr('data-business', business).attr('data-price', price).attr('data-assistanceprice', assistanceprice).attr('data-assistance', btn_assistance);
    $('.b-quiz__btn.quiz-btn-next').attr('data-business', business).attr('data-price', price).attr('data-assistanceprice', assistanceprice).attr('data-assistance', btn_assistance).attr('data-step', '4');

    if (next_step) {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', next_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', '').addClass('hidden');
    }

    if (prev_step) {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', prev_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', '').addClass('hidden');
    }

    $('.b-quiz__progress .progress-bar').attr('aria-valuenow', progress);
    progress = progress + '%';
    $('.b-quiz__progress .progress-bar').css({'width' : progress});
    $('.b-quiz__progress-num').html(progress);

    $('.b-quiz__form-checkbox-list').html(checkbox);
    
    
    $(".b-quiz__btn.quiz-btn-next").attr("id", `dalee-3`);
    
    
  }
}

function quiz_step_4(business, price, assistanceprice, assistance, step){
    
//   const inputChecked = $('.b-quiz input[name="conclusion"]:checked');
//   quiz_var_conclusion = inputChecked;

  if (typeof quiz === 'object') {
      const inputChecked = $('.b-quiz input[name="type"]:checked');
      //quiz_var_type = inputChecked;
    
    if(quiz['step-4']) {
        var step_number = quiz['step-4']['step-number'] || 0;
        var title = quiz['step-4']['title'] || '';
        var step_count = quiz['step-4']['step-count'] || 0;
        
        var coupon_text = quiz['step-4'].coupon.text || '';
        var coupon_discount = quiz['step-4'].coupon.discount || '';
        var list = quiz['step-4'].list || null;
        var next_step = quiz['step-4'].next || null;
        var prev_step = quiz['step-4'].prev || null;
        var btn_assistance = null;
    }
    
    
    if (step_count == 0) {
      progress = 0;
    } else {
      var progress = step_number / step_count * 100;
      progress = Math.ceil(progress);
      if (progress > 100) {
        progress = 100;
      } else if (progress < 0) {
        progress = 0;
      }
    }

    

    var checkbox = '';
    if (list) {
      for(one in list.items){
        var one_name = list.name || '';
        var one_text = list.items[one].text || '';
        var one_value = list.items[one].value || '';
        var one_checked = '';
        if (checkbox === '') {
          one_checked = 'checked';
        }
        if (one_checked === 'checked') {
          btn_assistance = list.items[one].assistance;
        }
        var one_data = {
          'next' : list.items[one].next,
          'business' : business,
          'assistance' : list.items[one].assistance,
          'price' : price,
          'assistanceprice' : assistanceprice
        }
        if (list.type === 'radio') {
          checkbox += custom_radio(one_name, one_value, one_text, one_checked, one_data);
        } else if (list.type === 'checkbox') {
          checkbox += custom_checkbox(one_name, one_value, one_text, one_checked, one_data);
        }
      }
    }

    step_number = LdgZero(step_number);
    step_count = '/ ' + LdgZero(step_count);

    $('.b-quiz__item-title').html(title);
    $('.b-quiz__counter-active').html(step_number);
    $('.b-quiz__counter-all').html(step_count);
    $('.b-quiz__coupon-text').html(coupon_text);
    $('.b-quiz__coupon-num').html(coupon_discount);

    $('.b-quiz__btn.quiz-btn-prev').attr('data-business', business).attr('data-price', price).attr('data-assistanceprice', assistanceprice).attr('data-assistance', btn_assistance);
    $('.b-quiz__btn.quiz-btn-next').attr('data-business', business).attr('data-price', price).attr('data-assistanceprice', assistanceprice).attr('data-assistance', btn_assistance).attr('data-step', '5');

    if (next_step) {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', next_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-next').attr('data-next', '').addClass('hidden');
    }

    if (prev_step) {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', prev_step).removeClass('hidden');
    } else {
      $('.b-quiz__btn.quiz-btn-prev').attr('data-prev', '').addClass('hidden');
    }

    $('.b-quiz__progress .progress-bar').attr('aria-valuenow', progress);
    progress = progress + '%';
    $('.b-quiz__progress .progress-bar').css({'width' : progress});
    $('.b-quiz__progress-num').html(progress);

    $('.b-quiz__form-checkbox-list').html(checkbox);
    
    
    $(".b-quiz__btn.quiz-btn-next").attr("id", `dalee-4`);
    
    
  }

  
}
function quiz_step_5(business, price, assistanceprice, assistance, step,fin){
    
//   const inputChecked = $('.b-quiz input[name="conclusion"]:checked');
//   quiz_var_conclusion = inputChecked;
var total = 0;
  if (typeof price !== 'undefined') {
    price = parseInt(price);
    total += price;
  }
  if (typeof assistance !== 'undefined' && assistance == 1) {
    if (typeof assistanceprice !== 'undefined') {
      assistanceprice = parseInt(assistanceprice);
      total += assistanceprice;
    }
  }

  if (typeof step !== 'undefined') {
    step = parseInt(step);
    var step_number = 0;
     step_number = step;
    step_number = LdgZero(step_number);
    var step_count = '/ ' + step_number;
    $('.b-quiz__counter-active').html(step_number);
    $('.b-quiz__counter-all').html(step_count);
  }

  $('.b-quiz__final-total').html(total);
  $('.b-quiz__coupon-num').html('10');

  $('.b-quiz__progress .progress-bar').css('width', '100%').attr('aria-valuenow', '100');
  $('.b-quiz__progress-num').html('100%');

  if (total > 0) {
    $('.b-quiz__item-undertitle').removeClass('hidden');
  } else {
    $('.b-quiz__item-undertitle').addClass('hidden');
  }

  $('.b-quiz__tabs').addClass('hidden');
  $('.b-quiz__final').removeClass('hidden');
  quiz_fill_hidden_fields();
}


$(document).on('click', '.quiz-btn-next, .quiz-btn-prev', function(){
    let inputChecked,
    currectStep =`step-${(+$('.b-quiz__btn.quiz-btn-next').attr('data-step') - 1)}`;
    console.log(quiz_results);
	var type = quiz['step-1']['type'];

	if(type == "stom"){
		if($('.b-quiz input[name="businessstom"]:checked').length > 0) {
        inputChecked = $('.b-quiz input[name="businessstom"]:checked');
        quiz_var_businessstom = inputChecked;
        quiz_results['quiz_var_businessstom']['value'] = inputChecked;
        quiz_results['quiz_var_businessstom']['step'] = currectStep;
    }
    
    if($('.b-quiz input[name="city"]:checked').length > 0) {
        inputChecked = $('.b-quiz input[name="city"]:checked');
        quiz_var_city = inputChecked;
        quiz_results['quiz_var_city']['value'] = inputChecked;
        quiz_results['quiz_var_city']['step'] = currectStep;
    }
	if($('.b-quiz input[name="xray"]:checked').length > 0) {
        inputChecked = $('.b-quiz input[name="xray"]:checked');
        quiz_var_xray = inputChecked;
        quiz_results['quiz_var_xray']['value'] = inputChecked;
        quiz_results['quiz_var_xray']['step'] = currectStep;
    }
    if($('.b-quiz input[name="conclusion"]:checked').length > 0) {
        inputChecked = $('.b-quiz input[name="conclusion"]:checked');
        quiz_var_conclusion = inputChecked;
        quiz_results['quiz_var_conclusion']['value'] = inputChecked;
        quiz_results['quiz_var_conclusion']['step'] = currectStep;
    }
	}
	else{
    if($('.b-quiz input[name="business"]:checked').length > 0) {
        inputChecked = $('.b-quiz input[name="business"]:checked');
        if(inputChecked.length != 0) {
              quiz_var_business = inputChecked;
              
              quiz_results['quiz_var_business']['value'] = inputChecked;
              quiz_results['quiz_var_business']['step'] = currectStep;
        }
    }
    
    if($('.b-quiz input[name="type"]:checked').length > 0) {
        inputChecked = $('.b-quiz input[name="type"]:checked');
        quiz_var_type = inputChecked;
        quiz_results['quiz_var_type']['value'] = inputChecked;
        quiz_results['quiz_var_type']['step'] = currectStep;
    }
    
    if($('.b-quiz input[name="conclusion"]:checked').length > 0) {
        inputChecked = $('.b-quiz input[name="conclusion"]:checked');
        quiz_var_conclusion = inputChecked;
        quiz_results['quiz_var_conclusion']['value'] = inputChecked;
        quiz_results['quiz_var_conclusion']['step'] = currectStep;
    }
	if($('.b-quiz input[name="city"]:checked').length > 0) {
        inputChecked = $('.b-quiz input[name="city"]:checked');
        quiz_var_city = inputChecked;
        quiz_results['quiz_var_city']['value'] = inputChecked;
        quiz_results['quiz_var_city']['step'] = currectStep;
    }
    if($('.b-quiz input[name="room"]:checked').length > 0) {
        inputChecked = $('.b-quiz input[name="room"]:checked');
        quiz_var_conclusion = inputChecked;
        quiz_results['quiz_var_room']['value'] = inputChecked;
        quiz_results['quiz_var_room']['step'] = currectStep;
    }
	}

  var data_next = $(this).attr('data-next') || null;

  if (!data_next) { 
    if($(this).hasClass('quiz-btn-prev')) {
      data_next = $(this).attr('data-prev') || null;
    }
  }

  var business = $(this).attr('data-business') || null;
  var price = $(this).attr('data-price') || null;
  var roomassistanceprice = $(this).attr('data-roomassistanceprice') || null;
  var roomassistance = $(this).attr('data-roomassistance') || null;
  var assistanceprice = $(this).attr('data-assistanceprice') || null;
  var assistance = $(this).attr('data-assistance') || null;
  var step = $(this).attr('data-step') || null;

  if ($('.b-quiz__form-radio input[name="activity"]').length > 0) {
    quiz_var_type = $('.b-quiz__form-radio input[name="activity"]:checked').val();
    quiz_results['quiz_var_type']['value'] = quiz_var_type;
    quiz_results['quiz_var_type']['step'] = currectStep;
  } else if ($('.b-quiz__form-checkbox input[name="activity"]').length > 0) {
    var quiz_var_type_arr = new Array();
    $('.b-quiz__form-checkbox input[name="activity"]:checked').each(function(){
      var quiz_var_type_arr_one = $(this).val();
      quiz_var_type_arr.push(quiz_var_type_arr_one);
    });
    quiz_var_type = quiz_var_type_arr.join(',');
    
    quiz_results['quiz_var_type']['value'] = quiz_var_type_arr;
    quiz_results['quiz_var_type']['step'] = currectStep;
  }
  if ($('.b-quiz__form-radio input[name="room"]').length > 0) {
    quiz_var_room = $('.b-quiz__form-radio input[name="room"]:checked').val();
  }
  if ($('.b-quiz__form-radio input[name="conclusion"]').length > 0) {
    quiz_var_conclusion = $('.b-quiz__form-radio input[name="conclusion"]:checked');
  }
  if ($('.b-quiz__form-radio input[name="city"]').length > 0) {
    quiz_var_city = $('.b-quiz__form-radio input[name="city"]:checked');
  }
  if ($('.b-quiz__form-radio input[name="businessstom"]').length > 0) {
    quiz_var_businessstom = $('.b-quiz__form-radio input[name="businessstom"]:checked');
  }
  if ($('.b-quiz__form-radio input[name="xray"]').length > 0) {
    quiz_var_xray = $('.b-quiz__form-radio input[name="xray"]:checked');
  }

  if (data_next == 'step-n') {

    quiz_step_n();

  } else if (data_next == 'step-0') {

    quiz_step_0(business);

  } else if (data_next == 'step-1') {

    quiz_step_1(business, price, roomassistanceprice, assistanceprice);

  } else if (data_next == 'step-2') {


quiz_step_2(business, price, roomassistanceprice, roomassistance, assistanceprice);
    // quiz_var_type = 1; // стоматология
    // if (quiz_var_type) {
    //   quiz_step_2(business, price, roomassistanceprice, roomassistance, assistanceprice);
    // }

  } else if (data_next == 'step-3') {
     quiz_step_3(business, price, roomassistanceprice, roomassistance, assistanceprice, assistance, step);
      
  } else if (data_next == 'step-4') {
      
    quiz_step_4(business, price, assistanceprice, assistance, step)
  }else if(data_next == 'final'){
	  let fin_number = 4;
	   if($('.b-quiz__btn.quiz-btn-next').attr('data-step') == 3) {
          fin_number = 3
      }
	   quiz_step_5(business, price, assistanceprice, assistance, step,fin_number);
  }

});


$(document).on('click', '.b-quiz__form-radio input:checked', function(){
  $(this).trigger('change');
});


$(document).on('change', '.b-quiz__form-radio input', function(){
  var name = $(this).prop('name') || null;
  if (name) {
    var selector = '.b-quiz__form-radio input[name="'+name+'"]:checked';
    var input = $(selector);
    if (input.length > 0) {
      var business = input.attr('data-business') || null;
      var price = input.attr('data-price') || null;
      var assistanceprice = input.attr('data-assistanceprice') || null;
      var roomassistanceprice = input.attr('data-roomassistanceprice') || null;
      var roomassistance = input.attr('data-roomassistance') || null;
      var assistance = input.attr('data-assistance') || null;
      var next = input.attr('data-next') || null;

      $('.b-quiz__btn.quiz-btn-prev').attr('data-business', business).attr('data-price', price).attr('data-roomassistanceprice', roomassistanceprice).attr('data-roomassistance', roomassistance).attr('data-assistanceprice', assistanceprice).attr('data-assistance', assistance);
      $('.b-quiz__btn.quiz-btn-next').attr('data-business', business).attr('data-price', price).attr('data-roomassistanceprice', roomassistanceprice).attr('data-roomassistance', roomassistance).attr('data-assistanceprice', assistanceprice).attr('data-assistance', assistance).attr('data-next', next);
      
      if($(this).prop('name') !== 'room' && $(this).prop('name') !== 'conclusion' && $(this).prop('name') !== 'city'){
        //$('.b-quiz__btn.quiz-btn-next').click();
      }
    }
  }
});


$(document).on('change', '.b-quiz__form-checkbox input', function(){
  var name = $(this).prop('name') || null;
  if (name) {
    var selector = '.b-quiz__form-checkbox input[name="'+name+'"]:checked';
    var input = $(selector);
    if (input.length > 0) {

      var business = null;
      var price = null;
      var roomassistanceprice = null;
      var roomassistance = null;
      var assistanceprice = null;
      var assistance = null;
      var next = null;
      var price_total = 0;

      input.each(function(){
        business = $(this).attr('data-business') || null;
        price = $(this).attr('data-price') || null;
        roomassistanceprice = $(this).attr('data-roomassistanceprice') || null;
        roomassistance = $(this).attr('data-roomassistance') || null;
        assistanceprice = $(this).attr('data-assistanceprice') || null;
        assistance = $(this).attr('data-assistance') || null;
        next = $(this).attr('data-next') || null;
        if (price) {
          price = parseInt(price);
          price_total += price;
        }
      });

      $('.b-quiz__btn.quiz-btn-prev').attr('data-business', business).attr('data-price', price_total).attr('data-roomassistanceprice', roomassistanceprice).attr('data-roomassistance', roomassistance).attr('data-assistanceprice', assistanceprice).attr('data-assistance', assistance);
      $('.b-quiz__btn.quiz-btn-next').attr('data-business', business).attr('data-price', price_total).attr('data-roomassistanceprice', roomassistanceprice).attr('data-roomassistance', roomassistance).attr('data-assistanceprice', assistanceprice).attr('data-assistance', assistance).attr('data-next', next);
    }
  }
});


quiz_step_1('med', 100000, 50000, 70000);

/* end --- QUIZ --- end */