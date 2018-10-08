/**
 * Created by erinkerrigan on 10/5/18.
 */


function validateFields() {
    //bPopup.close();
    test = document.forms[0];
    var incomplete = false;

    if ($('input[name=firstName]').val() == "") {
        $('input[name=firstName]').addClass("error");
        incomplete = true;
    }

    if ($('select[name=country]').val() == "Select Country" || $('select[name=country]').val() == "" || $('select[name=country]').val() == "None Selected") {
        $('#field17').addClass("error");
        incomplete = true;
    }


    if ($('input[name=lastName]').val() == "") {
        $('input[name=lastName]').addClass("error");
        incomplete = true;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('input[name=emailAddress]').val())) {
    }

    else {
        $('input[name=emailAddress]').addClass("error");
        incomplete = true;
    }

    if (incomplete == true) {

        return;

    }
    else {
      //  $('#form-popup').bPopup().close();
//THIS IS WHERE RESULTS GO
        document.getElementById("field18").value="";


        //testing
        // $('#form196').submit();

        //production
        $('#form1048').submit();
    }


}