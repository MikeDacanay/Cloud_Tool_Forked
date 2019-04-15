/**
 * Created by ekerrigan on 9/21/16.
 * Updated by md 10/8/2018.
*/
// var userbrowser=$(window).browser.browser();
var cloud_user;
var cloud_peers;
var tracker_node_holder=0;
var tracker_sum=0;
var page_tracker=0;
var slider_trigger;
var tracker = {
    '0': 0,
    '1':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,    
    '6':6,  
    '7':7,    
    '8':8
};

var currency;



var sectionSix = {
    "1": "Embedded best practice integration recommendations",
    "2": "Prebuilt flows for common integrations",
    "3": "Ability to deploy identical integration (hybrid integration) in the cloud and on premises",
    "4": "Prebuilt templates for common processes",
    "5": "Large library of pre-integrated application connectors",
    "6": "End-to-end visibility of process and integration flow status",
    "7": "Ease of use for non-integration experts",
    "8": "API management to design, secure and govern application interfaces",
};

var region_currency = {
    'as': [
        ['Australian Dollar','$','AUD'],
        ['CFP Franc','₣','XPF'],
        ['Fiji Dollar','$','FJD'],
        ['Hong Kong Dollar','$','HKD'],
        ['New Zealand Dollar','$','NZD'],
        ['Philippine Peso','₱','PHP'],
        ['Singapore Dollar','$','SGD'],
        ['South Korean Won','₩','KRW'],
        ['Taiwan Dollar','$','TWD'],
        ['Yen','¥','JPY'],
        ['US Dollar', '$','USD']
    ],
    'eu': [
        ['Euro','€','EUR'],
        ['Bulgarian Lev','лв','BGN'],
        ['Czech Koruna','Kč','CZK'],
        ['Denar','ден','MKD'],
        ['Norwegian Krone','kr','NOK'],
        ['Pound Sterling','£','GBP'],
        ['Swedish Krona','kr','SEK'],
        ['Swiss Franc','₣','CHF'],
        ['Russian Ruble','р.','RUB'],
        ['Turkish Lira','₤','TRY'],
        ['US Dollar', '$','USD']
    ],
    'af': [
        ['South African Rand','R','ZAR'],
        ['Algerian Dinar','د.ج','DZD'],
        ['Cape Verde Escudo','$','CVE'],
        ['CFA Franc BCEAO','₣','XAF'],
        ['Egyptian Pound','£','EGP'],
        ['Jordanian Dinar','د.ا', 'JOD'],
        ['Kuwaiti Dinar','د.ك', 'KWD'],
        ['Leone','Le','SLL'],
        ['New Israeli Shekel','₪','ILS'],
        ['Tanzanian Shilling','Sh','TZS'],
        ['UAE Dirham','د.إ','AED'],
        ['US Dollar', '$','USD']        
    ],
    'na': [
        ['US Dollar', '$','USD'],
        ['Canadian Dollar', '$','CAD'],
        ['Cayman Islands Dollar', '$','KYD'],
    ],
    'sa': [
        ['Brazilian Real','R$','BRL'],
        ['Colombian Peso','$','COP'],
        ['Costa Rican Colon','₡','CRC'],
        ['East Caribbean Dollar','$','XCD'],
        ['Guyana Dollar','$','GYD'],
        ['Mexican Peso','$','MXN'],
        ['Peso Uruguayo','$','UYU'],
        ['Trinidad and Tobago Dollar','$','TTD'],
        ['US Dollar', '$','USD']
    ]
};
$('.book-slider').on('init', function(event, slick){
    $('.book-slider').addClass('loaded');
});


window.onload = function(e) {
    $("input.dial__input").val('0%');
    $("input.dial__input").trigger('change');
    $("input.dial__industry").val('0%');
    $("input.dial__industry").trigger('change');


    b.CL02.a= '';
    b.CL02.b= '';
    b.CL02.c= '';
    b.CL02.d= '';
    b.CL02.e= '';
    b.CL02.f= '';

    d.mig6.a= '';
    d.mig6.b= '';
    d.mig6.c= '';
    d.mig6.d= '';
    d.mig6.e= '';

    dial_seven.a= '';
    dial_seven.b= '';
    dial_seven.c= '';
    dial_seven.d= '';
    dial_seven.e= '';



};


var context='large';
var $window = $(window);
var isTouchDevice = 'ontouchstart' in document.documentElement;


if ( $window.width() <= 1024) {
    context = 'medium';

    if ($window.width() <= 767) {
        context = 'small';
    }
}

var  moveComparison=function(){
    var sectorControl='';
    //region for d-results    
    sessionStorage.regionSummary=a.regionSummary; 
    for(var i=0;i<a.sector.length;i++){
        if((i+1)===a.sector.length){
            sectorControl=sectorControl+a.sectorSummary[i];
        }else{
            sectorControl=sectorControl+a.sectorSummary[i]+", ";
        }
    }
    //Sector for d-results
    sessionStorage.sectorSummary=sectorControl; 
    sessionStorage.revenue=a.revenue; 
    //Revenue text for d-results
    sessionStorage.revTextSummary=a.revenueText; 


    //Section 2
    sessionStorage.secTwoUser=Math.round((Number(b.summary_user)/(1/7))*100);
    sessionStorage.secTwoPeers=Math.round((Number(c.summary_peers)/(1/7))*100);
    //Section 3
    sessionStorage.secThreeUser=Math.round((Number(d.summary_user)/(1/7))*100);
    sessionStorage.secThreePeers=Math.round((Number(d.summary_peers)/(1/7))*100);
    //Section 4
    sessionStorage.secFourUser=Math.round((Number(e.summary_user)/(1/7))*100);
    sessionStorage.secFourPeers=Math.round((Number(e.summary_peers)/(1/7))*100); 
    //Section 5
    sessionStorage.secFiveUser=Math.round((Number(l.summary_user)/(1/7))*100);
    sessionStorage.secFivePeers=Math.round((Number(l.summary_peers)/(1/7))*100);
    //Section 6
    // 
    sessionStorage.secSixUser=int4.summary_user[0];
    sessionStorage.secSixUser1=int4.summary_user[1];
    sessionStorage.secSixUser2=int4.summary_user[2];

    sessionStorage.secSixPeers=int4.summary_peers[0];
    sessionStorage.secSixPeers1=int4.summary_peers[1];
    sessionStorage.secSixPeers2=int4.summary_peers[2];
    //Section 7
    sessionStorage.secSevenUser=Math.round((Number(dial_seven.summary_user)/(1/7))*100);
    sessionStorage.secSevenPeers=Math.round((Number(dial_seven.summary_peers)/(1/7))*100);
    //Section 8
    sessionStorage.secEightUser=Math.round((Number(g.summary_user)/(1/7))*100);
    sessionStorage.secEightPeers=Math.round((Number(g.summary_peers)/(1/7))*100);
    //Section 9
    sessionStorage.secNineUser=Math.round((Number(h.summary_user)/(1/7))*100);
    sessionStorage.secNinePeers=Math.round((Number(h.summary_peers)/(1/7))*100);    

    //Overall
    sessionStorage.summary_user=summary.user;
    sessionStorage.summary_peers=summary.peers;

}


var moveToNext=function(){
    if($('body').width() > 768){        
        $('.slick-track').animate({ scrollTop: 0 },0);
    }else{
        $('section').animate({ scrollTop: 0 },0);
    }    
    $('.slick-slider').slick('slickNext');
};

var bg_changer=function(x){
    $('.city__bg--active').removeClass('city__bg--active');
    $('.city__bg--'+x).addClass('city__bg--active');
};

// ease in dials

var ease_dial=function(x, y){
    var myValue = y;
    var $this = $(x);

    $this.knob({
        'release' : function (v) { console.log('release') }
    });

    $({
        value: 0
    }).animate({

        value: myValue
    }, {
        duration: 1000,
        easing: 'swing',
        step: function(){
            $this.val(Math.ceil(this.value)).trigger('change');
        }
    })
};

var cloud_filler=function(myValue,cloud,timing){
   
    if (/Edge/.test(navigator.userAgent)) {
        $(cloud).attr('offset',(100-myValue)+'%');
    }else{
        $({
            value:100
        }).animate({
            value: 100-myValue
        },{
            duration: timing,
            easing: 'swing',
            step: function(){
                $(cloud).attr('offset',this.value+'%');
            }
        });
    };

};

// On-click event on text around dials
var dial_move=function(dial, dial_group,rotate){   
    $(".dial__"+dial).val(rotate).trigger('change');
    $('.'+dial_group+' .dial__hand').css('transform',"rotate("+(rotate-90)+"deg)")
};

var tracker_navigator=function(tracker){
    if(tracker <= tracker_sum){        
        $('.book-slider').slick('slickGoTo', tracker);
    }
};

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

var show_next= function(arr){
  var mover = true;
  if($('.map-composition__holder').hasClass('map_active')){
    mover = true;
  }else{
    mover=false;
  }

  if($('body').width() < 768){
    mover=true;
  }

  for (var i = 0; i < arr.length; i++) {      
    if(arr[i].length < 1 || arr[i]===0){
       mover=false; 
    }
  }

  if((arr[0]==='int' && int4.a.length<3)){
    mover=false;
  }


  if(mover === true){
    $('.btn__nxt--1').css('display','flex');  
  }
};

var page_trigger1= function(class_trigger,check,arr,arr1){
    var mover = true;

    console.log(arr1);

    for(var i=0; i < check.length; i++){
        if(check[i].length < 1 || arr[i]===0){
            mover = false;
        }
    }

    if(mover===true){

        if(class_trigger==='second'){
            b.CL02.__ob__.dep.subs[0].cb = function(){};
        }
        if(class_trigger==='third'){
            d.mig6.__ob__.dep.subs[0].cb = function(){};
        }
        if(class_trigger==='seventh'){
            dial_seven.dev.__ob__.dep.subs[0].cb = function(){};
        }


        $('.loading--'+class_trigger).css('display','flex');
        $('.loading__container').fadeIn();
        $('.loading__container').addClass('loading__container--active');          
        
        setTimeout(function(){        
            $('.loading__period--1').css('visibility', 'visible');
        },500);

        setTimeout(function(){        
            $('.loading__period--2').css('visibility', 'visible');
        },1000);

        setTimeout(function(){        
            $('.loading__period--3').css('visibility', 'visible');
        },1500);

        setTimeout(function(){
            $('.loading__container--active').removeClass('loading__container--active');    
            setTimeout(function(){
                $('.loading--'+class_trigger).toggle();
                $('.loading__period').css('visibility','hidden');    
            },400)    
                                 
            for(var i=0; i < arr.length; i++){
                ease_dial(arr[i], arr1[i]);
            }        
            $('.'+class_trigger).toggleClass('c-d_none');        
            $('.container-dial__'+class_trigger+' .dial__group').removeAttr('onclick');
            if($('body').width() < 768){
                $('.container-dial__'+class_trigger+' .mob-radio__label').removeAttr('onclick');            
                $("section").animate({ scrollTop: $('.container').height()+1000 }, 1500);
            };                                      

            if($('body').width() > 768){
                $(".slick-track").animate({ scrollTop: $('.container').height()+1000 }, 1500);
            }
        }, 2000);     

    }
};

var page_trigger2= function(class_trigger,check,arr,arr1){   
    var mover = true;

    for(var i=0; i < check.length; i++){
        if(check[i].length < 1 || check[i]===0){
            mover = false;
        }
    }

    if(mover===true){
        if(class_trigger==='forth'){
            e.dev2.__ob__.dep.subs[0].cb = function(){};
        }
        if(class_trigger==='eighth'){
            g.sec3.__ob__.dep.subs[0].cb = function(){};
        }
        if(class_trigger==='ninth'){
            h.ana.__ob__.dep.subs[0].cb = function(){};
        }        

        $('.loading--'+class_trigger).css('display','flex');
        $('.loading__container').fadeIn();
        $('.loading__container').addClass('loading__container--active');  

        
        setTimeout(function(){        
            $('.loading__period--1').css('visibility', 'visible');
        },500);

        setTimeout(function(){        
            $('.loading__period--2').css('visibility', 'visible');
        },1000);

        setTimeout(function(){        
            $('.loading__period--3').css('visibility', 'visible');
        },1500);

        setTimeout(function(){
            $('.loading__container--active').removeClass('loading__container--active');    
            setTimeout(function(){
                $('.loading--'+class_trigger).toggle();
                $('.loading__period').css('visibility','hidden');    
            },400);      
            $('.'+class_trigger).toggleClass('c-d_none', function(){
                for(var i=0; i < arr.length; i++){

                    $(arr[i]).animate({
                        top: arr1[i],
                    }),{
                        duration: 'fast',
                    };
                }
            });
            $('.container-dial__'+class_trigger+' .meter').removeAttr('onclick');

            if($('body').width() < 768){     
                $("section").animate({ scrollTop: $('.container').height()+1000 }, 1500);
            };

            if($('body').width() > 768){
                $(".slick-track").animate({ scrollTop: $('.container').height()+1000 }, 1500);
            }
                          
        }, 2000);
    }
};

var page_trigger3= function(class_trigger,check,arr,arr1){   
   // console.log($(this));
    var mover = true;
    for(var i=0; i < check.length; i++){
        if(check[i].length < 1 || check[i]===0){
            mover = false;
        }
    };

    if(mover===true){
                  //  console.log('made1');
        l.dev1.__ob__.dep.subs[0].cb = function(){};                    
        $('.loading--'+class_trigger).css('display','flex');
        $('.loading__container').fadeIn();
        $('.loading__container').addClass('loading__container--active');
        setTimeout(function(){        
            $('.loading__period--1').css('visibility', 'visible');
        },500);

        setTimeout(function(){        
            $('.loading__period--2').css('visibility', 'visible');
        },1000);

        setTimeout(function(){        
            $('.loading__period--3').css('visibility', 'visible');
        },1500);        

        setTimeout(function(){
            $('.loading__container--active').removeClass('loading__container--active');    
            setTimeout(function(){
                $('.loading--'+class_trigger).hide();
                $('.loading__period').css('visibility','hidden');    
            },400);
            $('.'+class_trigger).toggleClass('c-d_none');
            for(var i=0; i < arr.length; i++){
                $(arr[i]).css('left',arr1[i]+'rem');
                $(arr[i]).show("slide", { direction: "down" });                    
            }
            
            $('.slider__group').removeAttr('onclick');

            if($('body').width() < 768){     
                $("section").animate({ scrollTop: $('.container').height()+1000 }, 1500);
            };
            
            if($('body').width() > 768){
                $(".slick-track").animate({ scrollTop: $('.container').height()+1000 }, 1500);
            }

        }, 2000);          
    }
};

var page_trigger4= function(class_trigger,arr){
    var mover=true;

    if(arr.length<3){
         mover=false;
    }

    if(mover===true){
        $('.loading--'+class_trigger).css('display','flex');
        $('.loading__container').fadeIn();
        $('.loading__container').addClass('loading__container--active');  

        
        setTimeout(function(){        
            $('.loading__period--1').css('visibility', 'visible');
        },500);

        setTimeout(function(){        
            $('.loading__period--2').css('visibility', 'visible');
        },1000);

        setTimeout(function(){        
            $('.loading__period--3').css('visibility', 'visible');
        },1500);

        setTimeout(function(){
            $('.loading__container--active').removeClass('loading__container--active');    
            setTimeout(function(){
                $('.loading--'+class_trigger).toggle();
                $('.loading__period').css('visibility','hidden');    
            },400) ;
            $('.'+class_trigger).toggleClass('c-d_none', function(){
                $('.check-boxer__holder').removeAttr('onclick');
                $('.check-boxer__holder--'+int4.a1[0]+ ' .check-boxer__checkmark--2').show(
                    function(){
                        $('.check-boxer__holder--'+int4.a1[0]+ ' .check-boxer__checkmark--2').css({transform: "scale(1.3)" })
                        setTimeout(
                            function(){
                                $('.check-boxer__holder--'+int4.a1[0]+ ' .check-boxer__checkmark--2').css({transform: "scale(1)" })
                            },
                            250
                        );
                    }
                );   

                $('.check-boxer__holder--'+int4.a1[1]+ ' .check-boxer__checkmark--2').show(
                    function(){
                        $('.check-boxer__holder--'+int4.a1[1]+ ' .check-boxer__checkmark--2').css({transform: "scale(1.3)" })
                        setTimeout(
                            function(){
                                $('.check-boxer__holder--'+int4.a1[1]+ ' .check-boxer__checkmark--2').css({transform: "scale(1)" })
                            },
                            250
                        );
                    }
                );   

                $('.check-boxer__holder--'+int4.a1[2]+ ' .check-boxer__checkmark--2').show(
                    function(){
                        $('.check-boxer__holder--'+int4.a1[2]+ ' .check-boxer__checkmark--2').css({transform: "scale(1.3)" })
                        setTimeout(
                            function(){
                                $('.check-boxer__holder--'+int4.a1[2]+ ' .check-boxer__checkmark--2').css({transform: "scale(1)" })
                            },
                            250
                        );
                    }
                );                
            });

            if($('body').width() < 768){     
                $("section").animate({ scrollTop: $('.container').height()+1000 }, 1500);
            };
            
            if($('body').width() > 768){
                $(".slick-track").animate({ scrollTop: $('.container').height()+1000 }, 1500);
            }
            
        }, 2000);
                       
    }
};



var meter_filler_1= function(section, group, grade, data_section){
    num = Number(grade);
    e.dev2[data_section]=num;
  //  console.log('.'+group+' .meter__radio-active');
    $('.'+group+' .meter__radio-active').removeClass('meter__radio-active');
    $('.'+group+' .meter__radio-active--1').removeClass('meter__radio-active--1');
    $('.'+section+'--'+num).addClass('meter__radio-active--1');
    for(var i = num; i > 0; i--){
       $('.'+section+'--'+i).addClass('meter__radio-active');
    }    
};

var meter_button_1= function(section, group, direction, data_section){
    if(direction === 'up' && e.dev2[data_section] < 7){
        e.dev2[data_section]++;
        meter_filler_1(section, group, e.dev2[data_section]);
    };

    if(direction === 'down' && e.dev2[data_section] > 0){
        e.dev2[data_section]--;
        meter_filler_1(section, group,e.dev2[data_section]);
    };
};

var meter_filler_2= function(section, group, grade, data_section){
    num = Number(grade);
    g.sec3[data_section]=num;
    $('.'+group+' .meter__radio-active').removeClass('meter__radio-active');
    $('.'+group+' .meter__radio-active--1').removeClass('meter__radio-active--1');
    $('.'+section+'--'+num).addClass('meter__radio-active--1');
    for(var i = num; i > 0; i--){
       $('.'+section+'--'+i).addClass('meter__radio-active');
    }    
};

var meter_button_2= function(section, group, direction, data_section){
    if(direction === 'up' && g.sec3[data_section] < 7){
        g.sec3[data_section]++;
        meter_filler_2(section, group, g.sec3[data_section]);
    }

    if(direction === 'down' && g.sec3[data_section] > 0){
        g.sec3[data_section]--;
        meter_filler_2(section, group,g.sec3[data_section]);
    }
};

var meter_filler_3= function(section, group, grade, data_section){
    num = Number(grade);
    h.ana[data_section]=num;
    $('.'+group+' .meter__radio-active').removeClass('meter__radio-active');
    $('.'+group+' .meter__radio-active--1').removeClass('meter__radio-active--1');
    $('.'+section+'--'+num).addClass('meter__radio-active--1');
    for(var i = num; i > 0; i--){
       $('.'+section+'--'+i).addClass('meter__radio-active');
    }    
};

var meter_button_3= function(section, group, direction, data_section){
    if(direction === 'up' && h.ana[data_section] < 7){
        h.ana[data_section]++;
        meter_filler_2(section, group, h.ana[data_section]);
    }

    if(direction === 'down' && h.ana[data_section] > 0){
        h.ana[data_section]--;
        meter_filler_3(section, group,h.ana[data_section]);
    }
};

var isMac = navigator.platform.toUpperCase().indexOf('MACINTEL')>=0;

if(isMac==true || context==='medium'){
    $("html").addClass("mac"); 
}else{
    $('html').addClass('win');
}

if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)){
  $("html").addClass("ie"); 
}


//fix the textarea layout
[].forEach.call(document.querySelectorAll('textarea'), function($pre) {
    var lines = $pre.textContent.split('\n');
    var matches;
    var indentation = (matches = /^\s+/.exec(lines[0])) != null ? matches[0] : null;
    if (!!indentation) {
        lines = lines.map(function(line) {
            return line.replace(indentation, '');
        });
        return $pre.textContent = lines.join('\n').trim();
    }
});

window.addEventListener('touchstart', function() {
    $('body').addClass('touch');
});

var isMac = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;

$(document).ready(function() {    

    $('.mob-radio__revenue').change(
        function(){
            a.revenue=$(this).val();
            a.revenueText=$(this).next().children(':last').text();
            show_next([a.sector,a.revenue]);
        }
    );

    $('.section--options').change(
        function(){
            if($(this).attr('group') === 'groupb'){
                b.CL02[$(this).attr('groupkey')] = $(this).val();
                // if(b.CL02.a)
            }
        }
    );


// 1st DIAL
    $('.dial__input--1').knob({
        'change' : function (v) {
            $('.dial--1 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {
            b.CL02.a = v;

         },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--1').knob({          
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,  
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });

// 2nd DIAL
    $('.dial__input--2').knob({
        'change' : function (v) {             
            $('.dial--2 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {            
            b.CL02.b = v;            
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--2').knob({       
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90, 
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });
// 3rd DIAL
    $('.dial__input--3').knob({
        'change' : function (v) {             
            $('.dial--3 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {          
            b.CL02.c = v;            
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--3').knob({       
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90, 
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });

// 4rd DIAL
    $('.dial__input--4').knob({
        'change' : function (v) {             
            $('.dial--4 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {          
            b.CL02.d = v;            
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--4').knob({       
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90, 
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });    

// 5th DIAL
    $('.dial__input--5').knob({
        'change' : function (v) {             
            $('.dial--5 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {          
            b.CL02.e = v;            
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--5').knob({       
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90, 
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });    

// 6th DIAL
    $('.dial__input--6').knob({
        'change' : function (v) {             
            $('.dial--6 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {      
            b.CL02.f = v;            
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--6').knob({       
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90, 
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    }); 

// 7th DIAL
    $('.dial__input--7').knob({
        'change' : function (v) {             
            $('.dial--7 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {
            d.mig6.a = v;                      
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--7').knob({       
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90, 
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });

// 8th DIAL
    $('.dial__input--8').knob({
        'change' : function (v) {             
            $('.dial--8 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {          
            d.mig6.b = v;                        
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--8').knob({       
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90, 
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });

// 9th DIAL
    $('.dial__input--9').knob({
        'change' : function (v) {             
            $('.dial--9 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {         
            d.mig6.c = v;                        
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--9').knob({       
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90, 
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });

// 10th DIAL
    $('.dial__input--10').knob({
        'change' : function (v) {             
            $('.dial--10 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {            
            d.mig6.d = v;                        
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--10').knob({       
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90, 
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });    

// 11th DIAL
    $('.dial__input--11').knob({
        'change' : function (v) {             
            $('.dial--11 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
         'release' : function (v) {        
            d.mig6.e = v;                        
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--11').knob({       
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90, 
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    }); 

// 12th DIAL
    $('.dial__input--12').knob({
        'change' : function (v) {
            $('.dial--12 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");         
         },
        'release' : function (v) {
            dial_seven.dev.a = v; 
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--12').knob({           
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,  
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });
// 13th DIAL
    $('.dial__input--13').knob({
        'change' : function (v) {
            $('.dial--13 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
        'release' : function (v) {
            dial_seven.dev.b = v;
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--13').knob({          
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,  
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });    
// 14th DIAL
    $('.dial__input--14').knob({
        'change' : function (v) {
            $('.dial--14 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
        'release' : function (v) {
            dial_seven.dev.c = v;
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--14').knob({        
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,  
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });    
// 15th DIAL
    $('.dial__input--15').knob({
        'change' : function (v) {
            $('.dial--15 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
        'release' : function (v) {
            dial_seven.dev.d = v;
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--15').knob({         
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,  
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });  
// 16th DIAL
    $('.dial__input--16').knob({
        'change' : function (v) {
            $('.dial--16 .dial__hand').css('transform',"rotate("+(v-90)+"deg)");
         },
        'release' : function (v) {
            dial_seven.dev.e = v;
        },
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,   
        'thickness':  0.1538461538461538, 
        'displayInput': false,
        'width': '100%',
        'bgColor': 'rgba(255,255,255,.3)',
        'fgColor': '#BDE6EE',
    });

    $('.dial__industry--16').knob({          
        'min':0,
        'max':180,
        'angleArc':180,
        'angleOffset': -90,  
        'width': '100%',
        'thickness': 0.1818181818181818,
        'bgColor': 'rgba(255,255,255,.4)',
        'fgColor' : '#F29111',
        'displayInput': false,
        'readOnly': true
    });          


    $( ".modal__radio--container" ).click(function() {
      comparison.FirstName = $('#field4').val();
    });

    cloud_filler(comparison.TwoUser,'.userTwo',1900);
    cloud_filler(comparison.TwoPeers,'.peersTwo',2200);

    cloud_filler(comparison.ThreeUser,'.userThree',1900);
    cloud_filler(comparison.ThreePeers,'.peersThree',2200);

    cloud_filler(comparison.FourUser,'.userFour',1900);
    cloud_filler(comparison.FourPeers,'.peersFour',2200);

    cloud_filler(comparison.FiveUser,'.userFive',1900);
    cloud_filler(comparison.FivePeers,'.peersFive',2200);

    cloud_filler(comparison.SevenUser,'.userSeven',1900);
    cloud_filler(comparison.SevenPeers,'.peersSeven',2200);

    cloud_filler(comparison.EightUser,'.userEight',1900);
    cloud_filler(comparison.EightPeers,'.peersEight',2200);

    cloud_filler(comparison.NineUser,'.userNine',1900);
    cloud_filler(comparison.NinePeers,'.peersNine',2200);    

    $(window).on('load',function(){
        $('canvas').css('width','100%');
        $('canvas').css('height','100%');
        $('section').css('width','63.1rem');
    });

    $('canvas').on('touchend', function(){
        var clickEvent_Context = $(this).parentsUntil(".dial__holder")[3];
        clickEvent_Context.click();
    });
  


    


    $('.results_page').click(function(){
        moveToNext();
    });



    // Desktop currency option
    $(document).on("click",'.dropdown__option',function(){
        CurrencyConversion($(this).attr('value'),$(this).attr('value1') );
        $('#dropdown__text').text($(this).text());

    
        $('.dropdown__content').removeClass('dropdown__content--active');
    });
    $('.dropdown__container, .dropdown__content').click(function(){
        $('.dropdown__content').toggleClass('dropdown__content--active');
    });    

    //Phone Currency option


    $('.currency-select').on('change', function() { 
        CurrencyConversionMob($(this).val());
    });

    function CurrencyConversion(curr, currsign){
        currency= curr;
        var curr_sign=currsign;
        var option_this= $(this);
        var calc1;
        var calc2;


        $.getJSON('https://free.currencyconverterapi.com/api/v6/convert?q=USD_'+currency+'&compact=ultra&apiKey=c06fc50bbb144bdce680',

            function(data){
                console.log(data);
                for(i in data){
                    calc1=1/data[i];
                    calc2=50/data[i];
                }

                if(calc1<1&&calc1>.001){
                    calc1= Math.round(calc1*1000) + ' Million';
                  //  console.log('first');
                }else if (calc1<.001){
                    calc1=Math.round(calc1 * 10000) / 100 + ' Million';
                }else if (calc1>1000){
                    calc1=Math.round(calc1/1000) + ' Trillion';
                }else{
                    calc1=Math.round(calc1)+' Billion';
                }


                if(calc2<1){
                    calc2= Math.round(calc2*1000) + ' Thousand';                 
                }else if (calc2> 1000){
                    calc2= Math.round(calc2/1000) + ' Billion';
                }else{
                    calc2= Math.round(calc2) + ' Million';
                }


                $('.question__revenue--1').text(curr_sign+calc1+"+ ("+currency+")");
                $('.question__revenue--2').text(curr_sign+calc2+" - "+curr_sign+calc1+" ("+currency+")");
                $('.question__revenue--3').text(curr_sign+"0 - "+curr_sign+calc2+" ("+currency+")"); 
            }
        )
            .fail(function(d){
                console.log('test');
            });

    };

    function CurrencyConversionMob(curr){
        var currency= curr;
        var curr_sign;
        var option_this= $(this);
        var calc1;
        var calc2;
        for(var i=0;i<region_currency[a.region].length;i++){            
            if(region_currency[a.region][i][2]===currency){
                curr_sign=region_currency[a.region][i][1];
            };  
        };


        $.getJSON('https://free.currencyconverterapi.com/api/v5/convert?q='+currency+'_USD&compact=y',


            function(data){
                for(i in data){
                    for(j in data[i]){                    
                        calc1=1/data[i][j];
                        calc2=50/data[i][j];
                    }
                }

                if(calc1<1&&calc1>.001){
                    calc1= Math.round(calc1*1000) + ' Million';                   
                }else if (calc1<.001){
                    calc1=Math.round(calc1 * 10000) / 100 + ' Million';                    
                }else if (calc1>1000){
                    calc1=Math.round(calc1/1000) + ' Trillion';                    
                }else{
                    calc1=Math.round(calc1)+' Billion';                    
                }


                if(calc2<1){
                    calc2= Math.round(calc2*1000) + ' Thousand';                 
                }else if (calc2> 1000){
                    calc2= Math.round(calc2/1000) + ' Billion';
                }else{
                    calc2= Math.round(calc2) + ' Million';
                }

                $('.mob-radio__label--revenue-1 .mob-radio__text').text(curr_sign+calc1+"+ ("+currency+")");
                $('.mob-radio__label--revenue-2 .mob-radio__text').text(curr_sign+calc2+" - "+curr_sign+calc1+" ("+currency+")");
                $('.mob-radio__label--revenue-3 .mob-radio__text').text(curr_sign+"0 - "+curr_sign+calc2+" ("+currency+")");                 
            }
        );        
    };



    $('.dropdown__option').click(function(){
        $('#dropdown__text').text()

        $('.dropdown__content').removeClass('dropdown__content--active');

    });

    $(window).resize(function(){    
        $("section").css("width", '63.10rem');                
        
        setTimeout(
            function(){
                $('.book-slider').slick('slickGoTo', page_tracker);
            },
            1
        );        
    });

    var slider = $('.book-slider').slick({       
        adaptiveHeight: false,
        accessibility:false,
        draggable: false,
        swipe: false,
        infinite: false,
        arrows: false,
        slidesToShow: 1,

    });

    $('.session_reset').click(function(){
        sessionStorage.clear();
    });

    $('.check-boxer__holder').click(function(){
        var value=$(this).attr('value');
        var splicer;
        if(int4.a.length===3){
            if(!int4.a.includes(value)){
                $('.check-boxer__holder--'+int4.a[2]+' .check-boxer__checkmark--1').css('visibility','hidden');           
                int4.a.splice(2,1,value);                        
                $('.check-boxer__holder--'+value+' .check-boxer__checkmark--1').css('visibility','visible');
            }
        }else if(int4.a.indexOf(value) != -1){
            splicer = int4.a.indexOf(value);
            int4.a.splice(splicer,1);
            $('.check-boxer__holder--'+value+' .check-boxer__checkmark--1').css('visibility','hidden');
            page_trigger4("sixth",int4.a);    
        }else{            
            if(int4.a.length < 3){
                int4.a.push(value);
                $('.check-boxer__holder--'+value+' .check-boxer__checkmark--1').css('visibility','visible');
            }else{
                $('.check-boxer__holder--'+int4.a[2]+' .check-boxer__checkmark--1').css('visibility','hidden');
                int4.a[2]=value;
                $('.check-boxer__holder--'+value+' .check-boxer__checkmark--1').css('visibility','visible');
            }      
            page_trigger4("sixth",int4.a);          
        }            
    });

    $('.slider__label').click(function(){
        var value=$(this).attr('value');

        var slide_filler=-55.90;
        var slide_ticker=0;
        var input=0;
        if($(this).hasClass("slider__label--1-1")){
            slide_filler=-50.60;
            slide_ticker=2.30;
            input=0.14;       
        }
        if($(this).hasClass("slider__label--1-2")){
            slide_filler=-46.25;   
            slide_ticker=6.60;
            input=0.29;
        }
        if($(this).hasClass("slider__label--1-3")){
            slide_filler=-41.35;
            slide_ticker=11.60;
            input=1;
        }
        if($(this).hasClass("slider__label--1-4")){
            slide_filler=-35.35;
            slide_ticker=17.55;
            input=2;
        }
        if($(this).hasClass("slider__label--1-5")){
            slide_filler=-28.20;
            slide_ticker=24.75;
            input=4;
        }
        if($(this).hasClass("slider__label--1-6")){
            slide_filler=-19.55;
            slide_ticker=33.40;
            input=8;
        }
        if($(this).hasClass("slider__label--1-7")){
            slide_filler=-10.40;
            slide_ticker=42.50;
            input=20;
        }
        if($(this).hasClass("slider__label--1-8")){
            slide_filler=0.0;
            slide_ticker=52.90;
            input=24;
        }


        if(Number(value)===1){
            l.dev1.a=input;
        }else if(Number(value)===2){
            l.dev1.b=input;
        };;
        $('.slider__progress--'+value).css('background-position-x',
            slide_filler+'rem'
        );
        $('.slider__ticker--'+value).css('transform','translateX('+slide_ticker+'rem)');           
        $('.slider__ticker--'+value).show("slide", { direction: "down" }, 500);     


    		
    });



    //TEST

    $('.map-composition__holder').hover(
        function(){
            if(!$(this).hasClass('map_active')){
                var src_holdx = $(this).children("img").attr('src');
                $(this).children("img").attr('src',$(this).children("img").attr('alt-1'));
                $(this).children("img").attr('alt-1',src_holdx);
            }
        },
        function(){
            if(!$(this).hasClass('map_active')){
                var src_holdy = $(this).children("img").attr('src');
                $(this).children("img").attr('src',$(this).children("img").attr('alt-1'));
                $(this).children("img").attr('alt-1',src_holdy);
            }
        }
    );

    $('.map-composition__holder').click(function(){    
        // For currency dropdown        
        $('.dropdown__container').css('display','flex');
        CurrencyConversion(region_currency[$(this).attr('value')][0][2],region_currency[$(this).attr('value')][0][1] );
        setTimeout(function(){ eventFire(document.getElementById('dropdown__option--0'),'click');
            $('.dropdown__content').removeClass('dropdown__content--active');
        }, 100);

        a.region=$(this).attr('value');
        if($('.map_active')[0] !== undefined){
            var src_hold = $('.map_active').children("img").attr('src');
            $('.map_active').children("img").attr('src',$('.map_active').children("img").attr('alt'));
            $('.map_active').children("img").attr('alt', src_hold);            
            $('.map_active').removeClass('map_active'); 
        }
        var src_hold1 = $(this).children("img").attr('src');
        $(this).children("img").attr('src',$(this).children("img").attr('alt'));
        $(this).children("img").attr('alt', $(this).children("img").attr('alt-1'));  
        $(this).children("img").attr('alt-1', src_hold1);             
        $(this).toggleClass('map_active');

        // For currency options
        $('.dropdown__option').remove();    
        for(var i=0;i<region_currency[a.region].length;i++){        
            $( ".dropdown__content" ).append( 
                "<div id='dropdown__option--"+i+"' class='dropdown__option dropdown__option--"+i+"' value='"+region_currency[a.region][i][2]+"' value1="+region_currency[a.region][i][1]+">"+
                    region_currency[a.region][i][0]+
                "</div>"
            );
        };   

        $('#dropdown__text').text(region_currency[a.region][0][0]);
    });

    $('.mob-map-options').on('change', function() {    
        // For currency dropdown

        a.region=$(this).val();

        // For currency options

        $('.currency-select').children().remove();
        for(var i=0;i<region_currency[a.region].length;i++){
            $('.currency-select').append(
                "<option value='"+region_currency[a.region][i][2]+"' value1="+region_currency[a.region][i][1]+">"+
                    region_currency[a.region][i][0]+
                "</option>"
            );
        };    
    });


//fakes an event
    function eventFire(el, etype) {
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }   


    // ADD or REMOVE sector 
    $('.question__sector').click(function(){
        var question_index = a.sector.indexOf($(this).attr('value')); 

        if(question_index > -1){            
            $(this).removeClass('question__sector--active'); 
            a.sector.splice(question_index,1);
        }else{
            
            $(this).addClass('question__sector--active');
            a.sector.push($(this).attr('value'));            
        }        
    });  

    $('.mob-section-options').on('change', function() {
        a.sector.push($(this).val());        
    });      
    // Revenue selection 
    $('.question__revenue').click(function(){
        a.revenue=$(this).attr('value');
        a.revenueText=$(this).text();
        $('.question__revenue--active').removeClass('question__revenue--active');
        $(this).addClass('question__revenue--active');
    });

    if(window.innerHeight < 880){
        $(".dial-user").redrawKnob();
        $(".dial-industry").redrawKnob();
    }

    if ($('body').width() < 1025 ) {
        var st = $(this).scrollTop();
        var lastScrollTop = 0;
        var delta = 5;
        var didScroll;
        $( window ).on( "swipe", function( event ) {
            $('.page').animate({ scrollTop: 0 }, 'fast');
        } );

        setInterval(function() {
            if (didScroll) {
                didScroll = false;
            }
        }, 250);

        $('.page').scroll(function() {
            didScroll = true;
            var st = $(this).scrollTop();

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            lastScrollTop = st;

        });

        $('body').css('height', window.innerHeight);


    }

    if ($('body').width() < 768 ) {
        $(".loading").detach().prependTo($('body'));

    }
    
    //stop video when closing     
    $('.modal__close').on('click',function(){		
    	var iframe = $(this).next().find('iframe');
    	iframe.attr('src', iframe.attr('src'));
    });


   $('.slick-arrow').on('click',function(){
      var curSlide = $('.slick-current').prev();
      if($(this).hasClass('slick-prev')) {
          $carousel.slick('slickPrev');
          $('.page').animate({ scrollTop: 0 }, 'fast');
      }
       else{
          $carousel.slick('slickNext');
          $('.page').animate({ scrollTop: 0 }, 'fast');
      }
      curSlide.find('.modal-state:checked').each(function(){
	      $('.modal__close[for="' + $(this).attr('id') + '"]').trigger('click');
       });
    });



});





var flag=false;


$('.book-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    page_tracker = currentSlide;
    $('html, body').animate({ scrollTop: 0}, 200);
    var lastSlide = $('section.slick-slide:not(.slick-cloned)').length - 1;
    $('#mobile-tracker').innerHTML=(currentSlide+"/9");

    bg_changer(currentSlide);

    if(currentSlide===9){
        cloud_filler(summary.user,'.user-cloud',1900);
        cloud_filler(summary.peers,'.peers-cloud',2200);
    }
    
    if(currentSlide < 9){
        $('.mobile-tracker').text((tracker[currentSlide]+1)+'/9');
    };

    // moves nav tracker
    if(Number(tracker[currentSlide]) !== tracker_node_holder){     
        $('.tracker__group--active').removeClass('tracker__group--active');
        $('.tracker__group--'+tracker[currentSlide]).addClass('tracker__group--active');
        for(var i=tracker[currentSlide]; i >= 0; i--){
            $('.tracker__group--'+i).addClass('tracker__group--active-1');
        }        
        tracker_node_holder=Number(tracker[currentSlide]); 

        if(tracker_sum < tracker_node_holder){
            tracker_sum++;
        }       
    };


});

//mobile page height fix for ios/chrome/ff madness
$(window).on('resize orientationchange', function() {
    var curr_context;
    if ( $window.width() <= 1024) {
        curr_context = 'medium';
    }
    else{
        curr_context = 'large';
    }

    if(curr_context != context){
        location.reload();
    }
    if (isTouchDevice == true) {
        setTimeout(function(){
            var fix = window.innerHeight;
            $('body').css('height', fix);
            $(".footer-phone").removeClass('up');
        },500)
    }
});

//add the ScrollTo animation
jQuery.fn.extend(
    {
        scrollTo : function(speed, easing)
        {
            return this.each(function()
            {
                var targetOffset = $(this).offset().top - 68;
                $('.page').animate({scrollTop: targetOffset}, speed, easing);
            });
        }
    });

$( function()
{
    var targets = $( '[rel~=tooltip]' ),
        target  = false,
        tooltip = false,
        title   = false;

    targets.bind( 'mouseenter', function()
    {
        target  = $( this );
        tip     = target.attr( 'title' );
        tooltip = $( '<div id="tooltip"></div>' );

        if( !tip || tip == '' )
            return false;

        target.removeAttr( 'title' );
        tooltip.css( 'opacity', 0 )
            .html( tip )
            .appendTo( 'body' );

        var init_tooltip = function()
        {
            if( $( window ).width() < tooltip.outerWidth() * 1.5 )
                tooltip.css( 'max-width', $( window ).width() / 2 );
            else
                tooltip.css( 'max-width', 340 );

            var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                pos_top  = target.offset().top - tooltip.outerHeight() - 20;

            if( pos_left < 0 )
            {
                pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass( 'left' );
            }
            else
                tooltip.removeClass( 'left' );

            if( pos_left + tooltip.outerWidth() > $( window ).width() )
            {
                pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass( 'right' );
            }
            else
                tooltip.removeClass( 'right' );

            if( pos_top < 0 )
            {
                var pos_top  = target.offset().top + target.outerHeight();
                tooltip.addClass( 'top' );
            }
            else
                tooltip.removeClass( 'top' );

            tooltip.css( { left: pos_left, top: pos_top } )
                .animate( { top: '+=10', opacity: 1 }, 50 );
        };

        init_tooltip();
        $( window ).resize( init_tooltip );

        var remove_tooltip = function()
        {
            tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
            {
                $( this ).remove();
            });

            target.attr( 'title', tip );
        };

        target.bind( 'mouseleave', remove_tooltip );
        tooltip.bind( 'click', remove_tooltip );
    });
});

/**event listeners**/

$( window ).resize(function() {
    $('.book-slider').slick('resize');

});

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.book-slider').slick('slickGoTo', slideno - 1);
 });


$( '#basic-modal .basic' ).on( 'click', function( event ) {
  $( '#basic-modal-content' ).closest( "li" ).modal();
  return false;
});
function isHidden(el) {
    return (el.offsetParent === null)
}
