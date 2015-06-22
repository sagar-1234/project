window.addEventListener("load",game);
function game()
{
	var select,input,div_id,flag,compute,flag1;
	var clic_ar=[[0,0,0],[0,0,0],[0,0,0]];
	var a,b;
	var count=0;
	

	var a=document.getElementById('main').getAttribute('data-val');
		  document.getElementById('cross').addEventListener('click',input);
		  document.getElementById('circle').addEventListener('click',input);
	if(a=="0")
	{
		document.getElementById('main').style.display = "none";
	}


	function input(e)
	{
		select =e.target.getAttribute('data-inp');
		//alert(select);
		if(select=="cross")
		{
			//alert(select);
			compute="circle";
		}
		if (select=="circle")
		{
			compute="cross";
			//alert(compute);
		}
		//alert(compute);
		document.getElementById('message').style.display = "none";
		document.getElementById('main').style.display = "block";
	    gameclick();
	}

	function gameclick()
	{
		document.getElementById('l1').addEventListener('click',gameplay);
		document.getElementById('l2').addEventListener('click',gameplay);
		document.getElementById('l3').addEventListener('click',gameplay);
		document.getElementById('l4').addEventListener('click',gameplay);
		document.getElementById('l5').addEventListener('click',gameplay);
		document.getElementById('l6').addEventListener('click',gameplay);
		document.getElementById('l7').addEventListener('click',gameplay);
		document.getElementById('l8').addEventListener('click',gameplay);
		document.getElementById('l9').addEventListener('click',gameplay);
	}
var count =0;
	function gameplay(e)
	{
		

		

			input=e.target.getAttribute('data-value');
			 
			 div_id=e.target.getAttribute('id');
			
			 var img = new Image();
			 var div = document.getElementById(div_id);
			 flag = document.getElementById(div_id).getAttribute('data-click');
			
			
			
			if(flag=="0")
			{	
					
				document.getElementById(div_id).setAttribute('data-click','1');
				var val=document.getElementById(div_id).getAttribute('data-val');
				//alert(val);
				count++;
				 a=parseInt(val.charAt(0));
				 b=parseInt(val.charAt(1));//used for initialize in array ... 
				img.onload = function() 
				{
  				div.appendChild(img);
				};
				
				if(select=="cross")
				{
				img.src = 'cross1.png';
				}
				
				else
				{
				img.src = 'circle1.png';
				}

				pattern_matching();
				clic_ar[a][b]=select;
				//alert(clic_ar[a][b]);

				setTimeout(computeplay,800);
				
			
			
		}

			function computeplay()
			{
				var i=0;j=0;
				
				
				
							var ran1=	Math.floor(Math.random()*9+1);
							var div1=document.getElementById('l'+ran1);
							var position=document.getElementById('l'+ran1).getAttribute('data-val');
							//alert(position+"ff");
							a=parseInt(position.charAt(0));
				 			b=parseInt(position.charAt(1));
				 			//alert(""+a+b);
							if ((clic_ar[a][b]==0)) 
							{
								clic_ar[a][b]=compute;
								//alert(position);
								//alert(clic_ar[a][b]);
								count++;	
								document.getElementById('l'+ran1).setAttribute('data-click','1');
								pattern_matching();
								var img=new Image();
								img.onload = function() 
								{
  								div1.appendChild(img);
								};
				
								if(compute=="cross")
								{
								img.src = 'cross1.png';
								}
				
								else
								{
								img.src = 'circle1.png';
								}
							}
							else
							{
								while((clic_ar[a][b])!=0)
								{
									 ran1=	Math.floor(Math.random()*9+1);
									 div1=document.getElementById('l'+ran1);
									 position=document.getElementById('l'+ran1).getAttribute('data-val');
							//alert(position+"ff");
									a=parseInt(position.charAt(0));
				 					b=parseInt(position.charAt(1));

								}

								clic_ar[a][b]=compute;
								pattern_matching();
								count++;
								//alert(position);
								//alert(clic_ar[a][b]);
								document.getElementById('l'+ran1).setAttribute('data-click','1');
								var img=new Image();
								img.onload = function() 
								{
  								div1.appendChild(img);
								};
				
								if(compute=="cross")
								{
								img.src = 'cross1.png';
								}
				
								else
								{
								img.src = 'circle1.png';
								}


							}
			}
			function pattern_matching()
			{
				if( ((clic_ar[0][0]==select)&&(clic_ar[0][1]==select)&&(clic_ar[0][2]==select)))
				{
					alert(select+" wins");
					game();
				}
				if( ((clic_ar[0][0]==compute)&&(clic_ar[0][1]==compute)&&(clic_ar[0][2]==compute)))
				{
					alert(compute+" wins");
				}
				if( ((clic_ar[1][0]==select)&&(clic_ar[1][1]==select)&&(clic_ar[1][2]==select)))
				{
					alert(select+" wins");
				}
				if( ((clic_ar[1][0]==compute)&&(clic_ar[1][1]==compute)&&(clic_ar[1][2]==compute)))
				{
					alert(compute+" wins");
				}
				if( ((clic_ar[2][0]==select)&&(clic_ar[2][1]==select)&&(clic_ar[2][2]==select)))
				{
					alert(select+" wins");
				}
				if( ((clic_ar[2][0]==compute)&&(clic_ar[2][1]==compute)&&(clic_ar[2][2]==compute)))
				{
					alert(compute+" wins");
				}
				if( ((clic_ar[0][0]==select)&&(clic_ar[1][0]==select)&&(clic_ar[2][0]==select)))
				{
					alert(select+" wins");
				}
				if( ((clic_ar[0][0]==compute)&&(clic_ar[1][0]==compute)&&(clic_ar[2][0]==compute)))
				{
					alert(compute+" wins");
				}
				if( ((clic_ar[0][1]==select)&&(clic_ar[1][1]==select)&&(clic_ar[2][1]==select)))
				{
					alert(select+" wins");
				}
				if( ((clic_ar[0][1]==compute)&&(clic_ar[1][1]==compute)&&(clic_ar[2][1]==compute)))
				{
					alert(compute+" wins");
				}
				if( ((clic_ar[0][2]==select)&&(clic_ar[1][2]==select)&&(clic_ar[2][2]==select)))
				{
					alert(select+" wins");
				}
				if( ((clic_ar[0][2]==compute)&&(clic_ar[1][2]==compute)&&(clic_ar[2][2]==compute)))
				{
					alert(compute+" wins");
				}
				if( ((clic_ar[0][0]==select)&&(clic_ar[1][1]==select)&&(clic_ar[2][2]==select)))
				{
					alert(select+" wins");
				}
				if( ((clic_ar[0][0]==compute)&&(clic_ar[1][1]==compute)&&(clic_ar[2][2]==compute)))
				{
					alert(compute+" wins");
				}
				if( ((clic_ar[0][2]==select)&&(clic_ar[1][1]==select)&&(clic_ar[2][0]==select)))
				{
					alert(select+" wins");
				}
				if( ((clic_ar[0][2]==compute)&&(clic_ar[1][1]==compute)&&(clic_ar[2][0]==compute)))
				{
					alert(compute+" wins");
				}
				else
				{
					if(count>=9)
					{
						alert("match draw");
					}
				}
			}

}}