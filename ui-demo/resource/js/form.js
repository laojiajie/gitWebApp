
//ÏÂÀ­²Ëµ¥
$(function(){
$(".LCdrop").click(function(){
	$(this).parent().parent().find(".LC2_ul").toggle()
});
$(".LC2_ul>li").click(function(){
	$(this).parent().toggle()
})
});