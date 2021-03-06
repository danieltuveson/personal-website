window.onload = () => {
  const form = document.getElementById('contact-form');
  const name = document.getElementById('form-name');
  const email = document.getElementById('form-email');
  const subject = document.getElementById('form-subject');
  const message = document.getElementById('form-message');
  const thanks = document.getElementById('form-thanks');
  const error = document.getElementById('form-error');

  const submit = (e) => {
    axios.post('/contact', {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    })
    .then((res) => {
      form.setAttribute('hidden', '');
      thanks.removeAttribute('hidden');
      e.preventDefault();
    })
    .catch((err) => {
      console.log(err);
      form.setAttribute('hidden', '');
      error.removeAttribute('hidden');
      e.preventDefault();
    });
  }

  form.onsubmit = submit;
}