	var i =0;
	var opacity = 0.2;
	var arrayImg = ["fable1.jpg", "fable2.jpg", "fable3.jpg", "fable4.jpg", "fable5.jpg", "fable6.jpg", "fable7.jpg"];
//fucntion changing image
	var img = () => {
		console.log(i);
		i++;
		console.log(i);
		}
//function which make blur efect
	var img_opacity = () => {
		document.getElementById("frame").innerHTML = "<img class='img' style='opacity:"+opacity+"' src='../ZDJ_fable/"+arrayImg[i]+"'>";
		opacity+=0.2;
	}
//function for loop efect of blur
	var loopOpacity = () => {opacity=0.2; opacity_logo=0;};
//function for loop efect of images
	var loop = () => {i=-1;}
//intervals of background with fading images
	setInterval(loop, 35000);
	setInterval(img_opacity, 100);
	setInterval(loopOpacity, 5000);
	setInterval(img, 5000);
	
	function image1 () {
		document.getElementById("zdj0").innerHTML="<section class='galery_img_first'></section>";
		//document.getElementById("zdj1").innerHTML="i";
	}
	function image2 () {
		document.getElementById("zdj0").innerHTML="<section class='galery_img_2'></section>";
		
	}
	function image3 () {
		document.getElementById("zdj0").innerHTML="<section class='galery_img_3'></section>";
		
	}
	function image4 () {
		document.getElementById("zdj0").innerHTML="<section class='galery_img_4'></section>";
		
	}
	function image5 () {
		document.getElementById("zdj0").innerHTML="<section class='galery_img_5'></section>";
		
	}
	function image6 () {
		document.getElementById("zdj0").innerHTML="<section class='galery_img_6'></section>";
		
	}