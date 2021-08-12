const onCreate = () => {
  const valuesInput = ['name', 'lastName', 'age'];
  const valuesSelect = ['sex', 'experienceLevel'];
  const valuesCheckboc = ['hasGuitar'];
  const requestBody = {};

  valuesInput.forEach((name) => {
    const value = $(`input[name=${name}]`).val();
    requestBody[name] = value;
  });

  valuesSelect.forEach((name) => {
    const value = $(`select[name=${name}]`).val();
    requestBody[name] = value;
  });

  valuesCheckboc.forEach((name) => {
    const checked = $(`input[name=${name}]:checked`).length > 0;
    requestBody[name] = checked;
  });

  $.ajax({
    url: '/student/profile/update',
    type: 'POST',
    data: requestBody,
    success: () => {
      Swal.fire({
        icon: 'success',
        title: 'Tu perfil se ha modificado con éxito',
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/student';
        }
      });
    },
    error: () => {
      Swal.fire({
        icon: 'error',
        title: 'Ha habido un error!',
        text: 'Debe llenar los campos obligatorios (*). Por favor, intente de nuevo.',
      });
    },
  });
};

$(window).on('load', () => {
  $('#submitButton').click(onCreate);
});
