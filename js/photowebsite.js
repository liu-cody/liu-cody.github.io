$(document).ready(function(){
	$(".imgball,.imgfood,.imgbot,.imgcoding,.imgorderin,#abouttext,#hobbies-text").hide();

    $("#aboutme").click(function(){
        $("#hometext").fadeOut();
        $("#abouttext").fadeIn(600);
    });

    $("#home").click(function(){
    	$("#abouttext").fadeOut(); 
    	$("#hometext").fadeIn(600);
    });

    $("#link-hobbies").click(function(){
    	$("#aboutme,#home,#contact,#linkgit,#linklink").each(function(){
			$(this).css({'cursor': 'pointer', 'pointer-events' : 'none'});
    	});
    	$(".background-image").fadeTo(600, 0.5);
    	$("#hobbies-text,.imgball,.imgfood").fadeIn(600);
    }); 

    $("#link-cs-stuff").click(function(){
    	$("#aboutme,#home,#contact,#linkgit,#linklink").each(function(){
			$(this).css({'cursor': 'pointer', 'pointer-events' : 'none'});
    	});
    	$(".background-image").fadeTo(600, 0.5);
    	$("#hobbies-text,.imgbot,.imgcoding,.imgorderin").fadeIn(600);
    });

    $(".background-image").click(function(){
    	$("#aboutme,#home,#contact,#linkgit,#linklink").each(function(){
    		$(this).css({'cursor': 'pointer', 'pointer-events' : 'auto'});
    	});

    	$(".imgball,.imgfood,.imgbot,.imgcoding,.imgorderin").fadeOut();
        $(".background-image").fadeTo(600, 1.0);
    });

    $("#img-ball,#img-coding,#img-food,#img-bot,#img-orderin").click(function(){
    	$(".modal").fadeIn(); 
    })

    /*Display the modals*/ 
    var images, length, i; 
    images = ["img-ball", "img-food", "img-coding", "img-bot", "img-orderin"];
    length = images.length;
    for (i = 0; i < length; i++) {
    	document.getElementById(images[i]).addEventListener("click", displayModal(images[i]));

    }

    function displayModal(imagename) {
    	    // Get the modal

		var modal = document.getElementById('myModal');

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementById(imagename);
		var modalImg = document.getElementById("img01");
		var captionText = document.getElementById("caption");
		img.onclick = function(){
		    modal.style.display = "block";
		    if (imagename == "img-coding") {
		    	captionText.innerHTML = "<h1 style=\x22text-align: center;\x22>This website: July 2017 - Present</h1> <p>Created from scratch as a side project in summer 2017, this website was a way for me to introduce myself to front-end web development. I designed the UI in Sketch and built this site in HTML/CSS/Javascript. I intend to use this website as a place to share a bit about myself with the world and also as a personal playground for exploring other facets of web development.</p>";
			}
			else if (imagename == "img-bot") {
				captionText.innerHTML = "<h1 style=\x22text-align: center;\x22>Rap Machine: June 2017</h1> <p>Inspired by the fiery lyrics of Kanye and the emotional verses of Drake, the <a href = \x22https://github.com/liu-cody/rap-machine\x22 style = \x22color: white;\x22>Rap Machine</a> is a recurrent neural network that attempts to learn from the lyrics of today's famous rappers and generate its own lyrics in their style. I implemented it as a final project for iXperience's <a href = \x22http://ixperience.co.za/courses/applied-ai\x22 style = \x22color: white;\x22>Applied AI</a> class using Jupyter Notebook and the Python libraries keras, pandas and numpy. I'm currently working on tweaking the network and training it for longer periods of time in the hope that it will generate more coherent lyrics. In addition to the lyrics generator, I contributed to the implementation of a classifier (also using a Recurrent Neural Network) which attempts to learn the style of several artists and, given the lyrics of a new song, attempts to predict which artist wrote them.</p>";
			}
			else if (imagename == "img-orderin") {
				captionText.innerHTML = "<h1 style=\x22text-align: center;\x22>Restaurant Recommendations: June 2017 - Present</h1> <p>Currently implementing a restaurant recommendation feature for the <a href = \x22https://www.orderin.co.za/\x22>OrderIn</a> webapp.</p>";
			}
			else if (imagename == "img-food") {
				captionText.innerHTML = "<h1 style=\x22text-align: center;\x22>Eating</h1> <p>One of my favorite pastimes stemming from a very young age is, simply put, eating. I've always been a fairly picky eater, which has led me on a personal quest to find (and create) culinary experiences that I will enjoy. Meals that I particularly relish include grilled prawns and calamari in South Africa, Vietnamese pho, and Chick-fil-A sandwiches. Some of the most exotic foods I've ever eaten include stir-fried mopane worms, a zebra/ostrich/crocodile kebab, conch kidneys in the Bahamas, and jellyfish. Whether I'm sampling an insect, stuffing myself with 100 McDonald's chicken nuggets, or savoring a nice homecooked noodle broth, I'm always happy to grab a bite to eat!</p> <img src = \x22images/mopane.png\x22 style=\x22width: 200px; cursor: auto; transition: none; opacity: 1.0;\x22></img><p>Mopane worms</p>";
			}
			else if (imagename == "img-ball") {
				captionText.innerHTML = "<h1 style=\x22text-align: center;\x22>Basketball</h1> <p>When I played in my first pickup game during freshman year of university, I instantly fell in love with the sport's deceptive intricacy. The rules are simple: 5 vs 5, put the ball through the opposing hoop, and don't let the ball go through your own hoop. However, from those simple rules has arisen so much complexity; there are many, many methods and strategies to utilize individual skill and team play to win. Since that first pickup game, basketball has become my favorite out of school activity by far. Whether I'm practicing my shooting form at home or doing squats at the gym, I'm always striving to improve. For me, ball is not just a game. Ball is life.</p>";
			}
		}

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		    $(".modal").fadeOut();
		}
    }

});
