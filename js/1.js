$(function(){
    var width=$(window).width();
    var marginL;
    var num=0;
    touch.on("body","dragstart",".box",function(){
        $(".box").css({
            transition:"none"
        })
        marginL=parseInt($(".box").css("marginLeft"))?parseInt($(".box").css("marginLeft")):0;
    })
    touch.on("body","drag",".box",function(e){
        $(".box").css({
            marginLeft: marginL+e.x
        })
    })
    touch.on("body",'dragend',".box",function(e){
        if(Math.abs(e.x)>100){
            if(e.direction=="left"){
                num++;
                if(num==$(".box a").length){
                    num=$(".box a").length-1;
                }
            }else if(e.direction=="right"){
                num--;
                if(num==-1){
                    num=0;
                }
            }
            $(".box").css({
                marginLeft:-num*width,
                transition:"margin .8s ease"
            })
        }else{
            $(".box").css({
                marginLeft:0,
                transition:"margin .8s ease"
            })
        }
    })
})

