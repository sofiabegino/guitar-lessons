const onDelete = (chapterId, card) => {
  $.ajax({
    url: `/chapters/${chapterId}`,
    type: 'DELETE',
    success(result) {
      Swal.fire(
        'Eliminado!',
        'El capitulo se ha borrado correctamente!',
        'success',
      );
      $(card).remove();
    },
    error: () => {
      Swal.fire({
        icon: 'error',
        title: 'Ha habido un error!',
        text: 'Por favor, intente de nuevo.',
      });
    },
  });
};

$(window).on('load', () => {
  $('.deleteButton').click(function () {
    const card = $(this).parents('div.cards');
    const chapterId = card.attr('chapterId');
    onDelete(chapterId, card);
  });
});
