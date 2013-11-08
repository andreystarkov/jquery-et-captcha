      /*
         Touch Captcha jQuery Plugin.
         im@andreystarkov.ru | andreystarkov.ru
      */

        // options

        var colorYes = '#B6CD48';
        var colorYesBorder = '#8b9947';

        var colorNo = '#3498DB';
        var colorNoBorder = '#2d678d';

        function captchaSuccess(){

            $('.robo-button').html("Так прекрасно, что ты не робот!");

            $('.robo-button').animate({backgroundColor: colorYes, borderBottomColor: colorYesBorder}, function(){
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
