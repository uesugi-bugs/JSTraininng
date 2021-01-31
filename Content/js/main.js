$(function(){
	const $op=$('#op');
	const $p1=$('#p1');
	const $p2=$('#p2');
	const $ed=$('#ed');
	let evCount=0;
	let nameCount=0;
	let names=['僕の名前','ポチ','ツノゼミ','僕','月','スピカ'];

	$('#op').find('button').on('click',function(){
		if(evCount===0){
			$op.fadeOut();
			$p1.fadeIn();
			evCount++;
		}
	});

	let suns=['申し訳ない、君の名前はわからないんだ...けど、',
						'他の誰もが君を知らなくても、君を知るものは必ず現れる。例えば、',
						'夜になったら月に聞いてみるといいよ']
	let count=0;
	$('#other').on('mouseover',other)
	.on('mouseout',normal)
	.on('click',function(){
		$('.textbox').text('お前の名前なんて知るか！適当に「ポチ」でいいだろ！！');
		nameCount=1;
		$('.name').text(names[nameCount]);	
	});

	$('#cicada').on('mouseover',cicada)
	.on('mouseout',normal)
	.on('click',function(){
		$('.textbox').text('君は小さいから「ツノゼミ」だと思うよ！');
		nameCount=2;
		$('.name').text(names[nameCount]);	
	});

	$('#sun').on('mouseover',sun)
	.on('mouseout',normal)
	.on('click',function(){
		$('.textbox').text(suns[count]);
		if(count!=suns.length-1){
			count++;
		}else{
			nameCount=4;
			$('.name').text(names[nameCount]);
		}
	});
	
	$('#me1').on('mouseover',me)
	.on('mouseout',normal)
	.on('click',function(){
		$('.textbox').text('僕って誰だっけなぁ');
		nameCount=3;
		$('.name').text(names[nameCount]);	
	});

	$('#me2').on('mouseover',me)
	.on('mouseout',normal)
	.on('click',function(){
		$('.textbox').text('夜、何かを思い出せそうな気がする');
		nameCount=3;
		$('.name').text(names[nameCount]);	
	});

	$('#moon').on('mouseover',moon)
	.on('mouseout',normal)
	.on('click',function(){
		$('.textbox').text('おかえり、スピカ');
		nameCount=5;
		$('.name').text(names[nameCount]);	
	});

	function normal(){
		$('.textbox').text('誰かに話を聞いてみよう');
	}
	function other(){
		$('.textbox').text('何のようだ!');
	};
	function cicada(){
		$('.textbox').text('ミーンミーン!');
	};
	function sun(){
		$('.textbox').text('やあ、こんにちは');
	};
	function me(){
		$('.textbox').text('僕の名前、何だっけ？');
	};
	function moon(){
		$('.textbox').text('あら、君は');
	};

	$('.name').on('click',function(){
		if(nameCount===0){
			$('.textbox').text('早く自分の名前を見つけないとね');
		}else if(nameCount===1){
			$('.textbox').text('それじゃ犬の名前じゃないか...');
		}else if(nameCount===2){
			$('.textbox').text('僕はセミじゃないんだけどなぁ');
		}else if(nameCount===3){
			$('.textbox').text('「僕」は名前じゃない');
		}else if(nameCount===4){
			evCount++;
			$p1.fadeOut();
			$('.textbox').text('そうか、夜...');
			$p2.fadeIn();
		}else{
			$p2.fadeOut();
			$ed.fadeIn();
		}
	});
});

