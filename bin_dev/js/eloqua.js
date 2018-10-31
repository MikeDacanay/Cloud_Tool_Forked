/**
 * Created by erinkerrigan on 10/5/18.
 */



function validateFields() {

    //THIS IS WHERE RESULTS GO
    var results= "Region: " + a.region + " Sector: " + a.sector + " Currency: " + currency + " Q2: " + comparison.TwoUser + " Q3: " + comparison.ThreeUser +
        " Q4: " + comparison.FourUser + " Q5: " + comparison.FiveUser + " Q6A: " + comparison.SixUser + " Q6B:" + comparison.SixUser1 + " Q6C: " + comparison.SixUser2 +
        " Q7: " + comparison.SevenUser + " Q8: " + comparison.EightUser + " Q9: " + comparison.NineUser + " Summary: " + comparison.summary_user();





    test = document.forms[0];
    var incomplete = false;

    if ($('input[name=firstName]').val() == ""|| $('input[name=firstName]').val() == "First Name" ) {
        $('input[name=firstName]').addClass("error");
        incomplete = true;
    }

    if ($('select[name=country]').val() == "Select Country" || $('select[name=country]').val() == "" || $('select[name=country]').val() == "None Selected") {
        $('#field17').addClass("error");
        incomplete = true;
    }


    if ($('input[name=lastName]').val() == ""|| $('input[name=lastName]').val() == "Last Name" ) {
        $('input[name=lastName]').addClass("error");
        incomplete = true;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('input[name=emailAddress]').val())) {
    }

    else {
        $('input[name=emailAddress]').addClass("error");
        incomplete = true;
    }
    var selectedCountryIndex = document.getElementById('field17').selectedIndex;
    switch (selectedCountryIndex) {
        case 122:
            if ($('.korea:checked').length < $('.korea').length) {
                $('.korea').addClass('error');
                $('.korea:checked').removeClass('error');
                incomplete = true;
            }
            break;
        case 186:
            if ($('.russia:checked').length < $('.russia').length) {
                $('.russia').addClass('error');
                $('.russia:checked').removeClass('error');
                incomplete = true;
            }
            break;
        default:
        //everyone else
    }
    if (incomplete == true) {
        $('#end_alert').show();
        return;
    }
    else {
    }
    console.log('results: ' + results)
    document.getElementById("field18").value=results;
    document.getElementById('header-name').innerHTML= $('input[name=firstName]').val();
    $('.modal').remove();


        //production
       // $('#form1048').submit();
    }



function setLegal(){
    var selectedCountryIndex = document.getElementById('field17').selectedIndex;
    switch(selectedCountryIndex) {
        case 122:
            $('.terms').hide();
            $('#terms_korea').show();
            break;
        case 178:
            $('.terms').hide();
            $('#terms_phillipines').show();
            break;
        case 186:
            $('.terms').hide();
            $('#terms_russia').show();
            break;

        default:
            $('.terms').hide();
            $('#terms_main').show();
    }

}