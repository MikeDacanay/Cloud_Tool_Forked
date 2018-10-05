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
    if ($('input[name=company]').val() == "") {
        $('input[name=company]').addClass("error");
        incomplete = true;
    }
    if ($('input[name=jobTitle]').val() == "") {
        $('input[name=jobTitle]').addClass("error");
        incomplete = true;
    }
    if ($('select[name=country]').val() == "Select Country" || $('select[name=country]').val() == "" || $('select[name=country]').val() == "None Selected") {
        $('#field17').addClass("error");
        incomplete = true;
    }

    if ($('input[name=address]').val() == "") {
        $('input[name=address]').addClass("error");
        incomplete = true;
    }

    if ($('select[name=stateOrProvince]').val() == "Select State" || $('select[name=stateOrProvince]').val() ==null)  {

        $('#field15').addClass("error");
        incomplete = true;
    }
    if ($('input[name=city]').val() == "") {
        $('input[name=city]').addClass("error");
        incomplete = true;
    }

    if ($('input[name=lastName]').val() == "") {
        $('input[name=lastName]').addClass("error");
        incomplete = true;
    }
    if ($('input[name=phoneNumber]').val() == "") {
        $('input[name=phoneNumber]').addClass("error");
        incomplete = true;
    }
    if ($('input[name=phoneNumber]').val() == "") {
        $('input[name=phoneNumber]').addClass("error");
        incomplete = true;
    }
    if ($('input[name=zipPostalCode]').val() == "") {
        $('input[name=zipPostalCode]').addClass("error");
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
        $('#form-popup').bPopup().close();

        document.getElementById("field18").value="Customer considers themselves "+familiarity_dataviz+" familiar with Data Visualization.  They " +familiarity_oracle+" an Oracle account. They "+oracle_customer+" a current Oracle customer. Job role is: " + role_text+ ".";
        //testing
        // $('#form196').submit();

        //production
        $('#form1048').submit();
    }


}