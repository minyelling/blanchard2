console.log('Init!');

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate(
  '.form',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      right: '15px',
    }
  }
);


new window.JustValidate('.form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
       return Number(phone) && phone.length === 10;
      }
    }
  },

  colorWrong: 'var(--red-bright); padding-left: 20px;',
messages: {
  name: {
    required: 'Вы не ввели имя',
    minLength: 'Введите 3 и более символов',
    maxLength: 'Запрещено вводить более 15 символов',
  },
  email: {
    email: 'Введите корректный email',
   required: 'Вы не ввели e-mail'
},
 tel: {
  required: 'Вы не ввели телефон',
  function: 'Здесь должно быть 10 символов без +7'
}
},
  submitHandler: function(thisForm) {

  }
})
