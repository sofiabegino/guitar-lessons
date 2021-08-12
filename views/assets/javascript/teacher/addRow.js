const removeRow = (button) => {
  $(button).parents('tr').remove();
};

const addRow = () => {
  const table = document.getElementById('tab');
  const rowCount = table.rows.length;
  const row = table.insertRow(rowCount);
  row.className = `row-${rowCount}`;
  const celdaCuerda = row.insertCell(0);
  const celdaDuracion = row.insertCell(1);
  const celdaEliminar = row.insertCell(2);

  const cuerdaInput = document.createElement('input');
  cuerdaInput.type = 'text';
  cuerdaInput.name = `cuerda-traste-${rowCount}`;

  const duracionInput = document.createElement('input');
  duracionInput.type = 'text';
  duracionInput.name = `duracion-${rowCount}`;

  const deleteButton = document.createElement('img');
  deleteButton.src = '/assets/images/blackTrash.png';
  deleteButton.classList = 'imgTrash';
  deleteButton.id = 'delete';

  deleteButton.addEventListener('click', function () {
    removeRow(this);
  });

  celdaCuerda.appendChild(cuerdaInput);
  celdaDuracion.appendChild(duracionInput);
  celdaEliminar.appendChild(deleteButton);
};

$(window).on('load', () => {
  $('#addChord').click(addRow);
});
