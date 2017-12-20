$(document).ready(function(){
	   $(".title-center, #iphone").animate({
	      opacity: 1,
	      marginLeft: 0,
	     
	    },  600

	      ); 
         var placeholder = -1; 
         
         $('#typed').typeIt({
           strings: "",
           speed: 100,
           autoStart: true,
           cursor: true,
         }).tiPause(2000).tiSettings({speed: 200}).tiDelete();
       setInterval(function(){

         $('#typed').typeIt({
           strings: getString(),
           speed: 100,
           autoStart: true,
           cursor: true,
         }).tiPause(2000).tiSettings({speed: 200}).tiDelete();
       },4000);
         

      function getString(){
         var x = ["bold", "reliable","clean", "fast", "elegant", "my own"];
         if(placeholder>=x.length-1){
            placeholder=-1;
         }
         placeholder+=1;
         return " " + x[placeholder];
      }


	   $("#macbook").animate({
	      opacity: 1,
	      marginTop: 0,
	      marginBottom: -400
	     
	    },  600

	      ); 
	   }); 

