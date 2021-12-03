
(function(window, document, undefined){
    window.onload = init;

      function init()
      {
    
      }
    
    })(window, document, undefined);


    function createissue()
    {
        var title = document.getElementById("titleField").value;
        var description = document.getElementById("descriptionField").value;
        var assignto = document.getElementById("assigned").value;
        var type = document.getElementById("type").value;
        var priority = document.getElementById("pri").value;
        var status = "Open";
        $.ajax(
            {
                url: 'createissue.php',
                method: 'POST',
                data:{
                    cissue:1,
                    ti:title,
                    des:description,
                    assi: assignto,
                    typ: type,
                    pri: priority,
                    sta: status,
                },
                success: function(response){
                    alert(response);
                },
                dataType: 'text'
            }
        );
    }    
