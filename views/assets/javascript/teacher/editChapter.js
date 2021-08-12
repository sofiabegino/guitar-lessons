const onEdit = (chapterId) => {
  const valuesInput = ['title', 'songName'];
  const valuesTextArea = ['description', 'content', 'tips'];
  const requestBody = { tablature: [] };

  valuesInput.forEach((name) => {
    const value = $(`input[name=${name}]`).val();
    requestBody[name] = value;
  });

  valuesTextArea.forEach((name) => {
    const value = $(`textarea[name=${name}]`).val();
    requestBody[name] = value;
  });

  $("tr[class^='row-']").each((i, tr) => {
    const rowNumber = tr.classList[0].split('-')[1];
    const cuerdaTraste = $(`input[name=cuerda-traste-${rowNumber}]`).val();
    const positions = [];

    cuerdaTraste.split(',').map((e) => {
      const str = e.split('-')[0];
      const fret = e.split('-')[1];
      positions.push({ str, fret });
    });

    const duration = $(`input[name=duracion-${rowNumber}]`).val();

    requestBody.tablature.push({ positions, duration });
  });

  $.ajax({
    url: `/chapters/${chapterId}/update`,
    type: 'POST',
    data: requestBody,
    success: () => {
      Swal.fire({
        icon: 'success',
        title: 'La leccion ha sido guardada con éxito!',
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/teacher';
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
  $('#submitButton').click(function () {
    const card = $(this).parents('div.chapterContent');
    const chapterId = card.attr('chapterId');
    onEdit(chapterId);
  });

  $('[data-toggle="popover"]').popover();

  $('.imgTrash').click(function () {
    $(this).parents('tr').remove();
  });
});
