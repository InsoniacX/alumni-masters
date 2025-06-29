$(function () {
    $('.js-basic-example').DataTable({
        responsive: true
    });

    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            'copy',
            {
                extend: 'excel',
                messageTop: ''
            },
            {
                extend: 'pdf',
                messageBottom: null
            },
            {
                extend: 'print',
                messageTop: function () {
                    printCounter++;
 
                    if ( printCounter === 1 ) {
                        return 'Ini adalah dokumen yang pertama di cetak.';
                    }
                    else {
                        return 'Anda Sudah mencetak '+printCounter+' kali';
                    }
                },
                messageBottom: null
            }
        ]
    });
});