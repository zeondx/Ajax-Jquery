$('document').ready(pageLoaded);


function doWhatever(data)
{
   console.log(data);
}

function dontDoWhatever()
{

}

function pageLoaded()
{
  $.ajax
  ({
    url : "http:localhost:1337/images.json",
    type: "GET", 
    dataType: "json",
    success: function(data){
                              var div = document.createElement('div');
                              var nextButton = document.createElement('button');
                              var previousButton = document.createElement('button');
                              var container = document.createElement('div');
                              var autoButton = document.createElement('button');
                              container.id = "container";
                              div.id = "contained";
                              previousButton.id = 'previous';
                              nextButton.id = 'next';
                              autoButton.id = 'auto';
            
        
                              var nextButtonText = document.createTextNode("next");
                              var previousButtonText = document.createTextNode("previous");
                              var autoButtonText = document.createTextNode('auto');
        
                              previousButton.appendChild(previousButtonText);
                              nextButton.appendChild(nextButtonText);
                              autoButton.appendChild(autoButtonText);
        
                              //previousButton.addEventListener('click', previousImage);
                              //nextButton.addEventListener('click', NextImage);
        
                              console.log(data.img.length);
                              $.each(data.img, function(key){
                                                                //data.img[key]
                                                                //create a new document element called div
                                                                var img = document.createElement('img');
                                                                img.id = data.img[key].id;
                                                                img.src = data.img[key].src;
                                                                div.appendChild(img);
                             })
                              
                             
                             container.appendChild(div);
                             container.appendChild(nextButton);
                             container.appendChild(previousButton);
                             container.appendChild(autoButton);
                             $('body').append(container);
                             addListeners();
                           },
    error: function(xhr){}
  });
   
}

function addListeners()
{
     $('#auto').on('click', transitionImages);
     $('#previous').on('click', previousImage);
     $('#next').on('click', nextImage);
}

function transitionImages()
{
    var img  = $('img');
    var img2 = $('img:nth-child(2)');
    var img3 = $('img:nth-child(2)');
    img.css('animation-iteration-count', '10');
    img.css('animation-timing-function', 'ease-in-out');
    img.css('animation-name', 'switchImages');
    img.css('animation-duration', '21s');
    
    img2.css('animation-delay', '7s');
    img3.css('animation-delay', '14s');
    
    
}

function animateText()
{
    
}

function nextImage()
{   //if my first is visible, then toggle the other images
    //if not the first, then its the second, and if not the second, then its the third image
    
    var image1Display = $('#borderlandsCover').css('display');
    var image2Display = $('#borderGameplay').css('display');
    var image3Display = $('#borderlands2Cover').css('display');
    
    var image1 = $('#borderlandsCover');
    var image2 = $('#borderGameplay');
    var image3 = $('#borderlands2Cover');
    
    if($('#borderlandsCover').css('display') != 'none')
       {
            $('#borderlandsCover').hide()
            $('#borderlandsGameplay').show();
            $('#borderlands2Cover').hide();
       }
    //first is not visible, so go to the second image
    else
       {
            //second is visible
            if($('#borderlandsGameplay').css('display') != 'none')
            {
                $('#borderlandsCover').hide();
                $('#borderlandsGameplay').hide();
                $('#borderlands2Cover').show();
            }
           //second is not visible
           else
           {
               //third is visible but it overlaps other images
               if($('#borderlands2Cover').css('display') != 'none')
                {
                    $('#borderlandsCover').show();
                    $('#borderlandsGameplay').hide();
                    $('#borderlands2Cover').hide();
                }

           }
       }
    
    
}

function previousImage()
{
    
    if($('#borderlandsCover').css('display') = 'none')
       {
            console.log($('#borderlandsCover').css('display'));
            $('#borderlandsCover').show()
            $('#borderlandsGameplay').hide();
            $('#borderlands2Cover').hide();
       }
    //first is not visible, so go to the second image
    else
       {
            //second is visible
            if($('#borderlandsGameplay').css('display') = 'none')
            {
                console.log($('#borderlandsGameplay').css('display'));
                $('#borderlandsCover').hide();
                $('#borderlandsGameplay').show();
                $('#borderlands2Cover').hide();
            }
           //second is not visible
           else
           {
               //third is visible but it overlaps other images
               if($('#borderlands2Cover').css('display') = 'none')
                {
                    console.log($('#borderlandsGameplay').css('display'));
                    $('#borderlandsCover').hide();
                    $('#borderlandsGameplay').hide();
                    $('#borderlands2Cover').show();
                }

           }
       }
}
