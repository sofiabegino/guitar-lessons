const showTablature = async (chapterId) => {
  VF = Vex.Flow;

  const div = document.getElementById('tablature');
  // Create a renderer that uses SVG
  const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  // Configure the rendering context.
  renderer.resize(1100, 200);

  const context = renderer.getContext();
  // Create a tab stave of width 400 at position 10, 40 on the canvas.
  const stave = new VF.TabStave(0, 0, 1000);
  stave.addClef('tab').setContext(context).draw();

  const tablature = await $.get(`/chapters/${chapterId}/tablature`);
  const notas = [];

  tablature.map((nota) => {
    notas.push(new VF.TabNote(nota));
  });

  if (notas.length > 0) {
    VF.Formatter.FormatAndDraw(context, stave, notas);
  }
};

const markAsFinished = (chapterId) => {
  $.ajax({
    url: `/chapters/${chapterId}/finish`,
    type: 'POST',
    success: () => {
      Swal.fire({
        icon: 'success',
        title: 'La leccion ha sido terminada con éxito!',
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
        text: 'Intenta marcar como terminado el capítulo más tarde.',
      });
    },
  });
};

$(window).on('load', () => {
  const chapterId = $('body').attr('chapterId');
  showTablature(chapterId);
  $('.buttonReady').click(() => markAsFinished(chapterId));
});
