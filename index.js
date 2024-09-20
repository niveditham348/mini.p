
       
        $(document).ready(function() {
            
            $('#dashboard-page').hide();

           
            $('#login-form').on('submit', function(e) {
                alert("Login successfull !!");
                e.preventDefault();
                $('#login-page').hide();
                $('#dashboard-page').show();
            });

           
            $('#add-club').click(function() {
                $('#add-club-form').show();
            });

            
            $('#club-form').on('submit', function(e) {
                e.preventDefault();
                
               
                var clubName = $('#clubName').val();
                var prize = $('#prize').val();
                var days = $('#days').val();
                
               
                $('#club-table-body').append(
                    `<tr>
                        <td>${clubName}</td>
                        <td>${prize}</td>
                        <td>${days}</td>
                    </tr>`
                );
                
             
                $('#clubName').val('');
                $('#prize').val('');
                $('#days').val('');
            });
        });
        