$(window).on('load', () => {
  $('#profile').click(() => {
    $.ajax({
      url: '/student/exists',
      type: 'GET',
      success: (data) => {
        window.location = data.count > 0 ? '/student/profile' : '/student/new';
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Ha habido un error!',
          text: 'Por favor, intente de nuevo.',
        });
      },
    });
  });
});
