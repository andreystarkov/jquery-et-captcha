      /*
         Touch Captcha jQuery Plugin.
         im@andreystarkov.ru | andreystarkov.ru
      */

        // options
        /*
        var colorYes = '#50483D';
        var colorYesBorder = '#161513';

        var colorNo = '#62AAA6';
        var colorNoBorder = '#658280';

        var btnColor = '#ED593B';
        var btnColorBorder = '#b44d38';
        */

        var colorYes = '#50483D';
        var colorYesBorder = '#161513';

        var colorNo = '#62AAA6';
        var colorNoBorder = '#658280';

        var colorNo = '#62AAA6';
        var colorNoBorder = '#658280';

        var btnColor = '#62AAA6';
        var btnColorBorder = '#658280';
        var textLight = '#FCF9F2';
        var textDark = '#50483D';

        function captchaSuccess(){

            $('.robo-button').html("Humans are awesome!");

            $('.robo-button').animate({backgroundColor: btnColor, borderBottomColor: btnColorBorder, color: textLight}, function(){
                $('.captcha-box').slideToggle();
                $('.demo form').slideToggle();
            });

            $('.sortable').sortable('disable');
        }

        function captchaOnDrop(ui){
             var i = ui.item.index()+1;
                var n = ui.item.html();
                var c = 0;
                if( i == n ) {
                    ui.item.animate({backgroundColor: colorYes, borderBottomColor: colorYesBorder}, function(){
                       $('.sortable li').each( function(index){
                        if( ($(this).index()+1) == $(this).html() ){

                                $(this).animate({backgroundColor: colorYes, borderBottomColor: colorYesBorder}, function(){
                                    c = c+1;
                                    $('.good-count').html(c);
                                    if(c == 6) captchaSuccess();
                                });
                            } else {
                                $(this).animate({backgroundColor: colorNo, borderBottomColor: colorNoBorder});

                            }
                        });
                    });
                } else {
                    i.item.animate({backgroundColor: colorNo, borderBottomColor: colorNoBorder});
                }


                if($('.good-count').html() == '6') {

                }
        }


         $(function() {

             $('.robo-button').css({'background': '#FFC853', 'border-bottom': '5px solid #c9a354', color: colorYes});
             $('.captcha-box .sortable li').css({'background': colorNo, 'border-bottom': '5px solid '+colorNoBorder});

         });

        (function($){

            $.fn.shuffle = function() {
                return this.each(function(){
                    var items = $(this).children();

                    return (items.length)
                        ? $(this).html($.shuffle(items,$(this)))
                    : this;
                });
            }

            $.fn.validate = function() {
                var res = false;
                this.each(function(){
                    var arr = $(this).children();
                    res =    ((arr[0].innerHTML=="1")&&
                        (arr[1].innerHTML=="2")&&
                        (arr[2].innerHTML=="3")&&
                        (arr[3].innerHTML=="4")&&
                        (arr[4].innerHTML=="5")&&
                        (arr[5].innerHTML=="6"));
                });
                return res;
            }

            $.shuffle = function(arr,obj) {
                for(
                var j, x, i = arr.length; i;
                j = parseInt(Math.random() * i),
                x = arr[--i], arr[i] = arr[j], arr[j] = x
            );
                if(arr[0].innerHTML=="1") obj.html($.shuffle(arr,obj))
                else return arr;
            }

  })(jQuery);
