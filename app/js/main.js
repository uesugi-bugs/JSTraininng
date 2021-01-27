$(function(){
	$('#other').on('mouseover',other)
	.on('mouseout',normal)
	.on('click',function(){
		$('.textbox').text('お前の名前なんて知るか！適当に「ポチ」でいいだろ！！');
	});

	function normal(){
		$('.textbox').text('誰かに話を聞いてみよう');
	}
	function other(){
		$('.textbox').text('何のようだ!');
	};
});

