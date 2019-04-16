/**
 * Created by erinkerrigan on 10/5/18.
 */

var fullGate=false;
var cmid='WWMK181008P00030C0002';


if(localStorage.getItem('gateVersion')=='elqComplete'){
    fullGate=true;
    $('.form-short').remove();
    $('.full-form').show();
    cmid='WWMK181008P00030C0001';
}
else{

    $('.form-short').show();
    $('.full-form').remove();
}


function validateFields() {

    //RESULTS READOUT
    // var results= "Region: " + sessionStorage.regionSummary + " Sector: " + sessionStorage.sectorSummary + " Q2: " + comparison.TwoUser + " Q3: " + comparison.ThreeUser +
    //     " Q4: " + comparison.FourUser + " Q5: " + comparison.FiveUser + " Q6A: " + comparison.SixUser + " Q6B:" + comparison.SixUser1 + " Q6C: " + comparison.SixUser2 +
    //     " Q7: " + comparison.SevenUser + " Q8: " + comparison.EightUser + " Q9: " + comparison.NineUser + " Summary: " + comparison.summary_user;

    var results= 

        {
            Region: sessionStorage.regionSummary, 
            Sector: sessionStorage.sectorSummary, 
            
            Q2A: sessionStorage.secTwoA,
            Q2B: sessionStorage.secTwoB,
            Q2C: sessionStorage.secTwoC,
            Q2D: sessionStorage.secTwoD,
            Q2E: sessionStorage.secTwoE,
            Q2F: sessionStorage.secTwoF,

            Q3A: sessionStorage.secThreeA,
            Q3B: sessionStorage.secThreeB,
            Q3C: sessionStorage.secThreeC,
            Q3D: sessionStorage.secThreeD,
            Q3E: sessionStorage.secThreeE,

            Q4A: sessionStorage.secFourA,
            Q4B: sessionStorage.secFourB,
            Q4C: sessionStorage.secFourC,
            Q4D: sessionStorage.secFourD,
            Q4E: sessionStorage.secFourE,

            Q5A: sessionStorage.secFiveA,
            Q5B: sessionStorage.secFiveB,

            Q6A: sessionStorage.secSixA,
            Q6B: sessionStorage.secSixB,
            Q6C: sessionStorage.secSixC,            

            Q7A: sessionStorage.secSevenA,
            Q7B: sessionStorage.secSevenB,
            Q7C: sessionStorage.secSevenC,
            Q7D: sessionStorage.secSevenD,
            Q7E: sessionStorage.secSevenE,

            Q8A: sessionStorage.secEightA,
            Q8B: sessionStorage.secEightB,
            Q8C: sessionStorage.secEightC,
            Q8D: sessionStorage.secEightD,

            Q9A: sessionStorage.secNineA,
            Q9B: sessionStorage.secNineB,
            Q9C: sessionStorage.secNineC,
            Q9D: sessionStorage.secNineD,
            Q9E: sessionStorage.secNineE,

            Summary: comparison.summary_user,
        };



            




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
    if(fullGate == true){
        if ($('select[name=stateOrProvince]').val() == "Select State" || $('select[name=stateOrProvince]').val() == "" || $('select[name=stateOrProvince]').val() == "None Selected") {
            $('#field15').addClass("error");
            incomplete = true;
        }
        if ($('input[name=company]').val() == ""|| $('input[name=company]').val() == "Company" ) {
            $('input[name=company]').addClass("error");
            incomplete = true;
        }
        if ($('input[name=jobTitle]').val() == ""|| $('input[name=jobTitle]').val() == "Title" ) {
            $('input[name=jobTitle]').addClass("error");
            incomplete = true;
        }
        if ($('input[name=zipPostalCode]').val() == ""|| $('input[name=zipPostalCode]').val() == "Zip/Postcode" ) {
            $('input[name=zipPostalCode]').addClass("error");
            incomplete = true;
        }
        if ($('input[name=phoneNumber]').val() == ""|| $('input[name=phoneNumber]').val() == "Phone Number" ) {
            $('input[name=phoneNumber]').addClass("error");
            incomplete = true;
        }



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

    var src=localStorage.getItem('sourceParam');
    var d = new Date();
    var timestamp = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
    $("#field1").val(cmid);
    $("#src1").val(src);
    $("#field3").val(timestamp);
    document.getElementById("field18").value=results;
    document.getElementById('header-name').innerHTML= $('input[name=firstName]').val();
    //production
    $('#form1048').submit();
    console.log( $('#form1048').serialize());
    setTimeout(function(){
        $('.modal').remove();
    },250)

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