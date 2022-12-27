
var Links = {
    setColor: function (color){
//  var alist = document.querySelectorAll('a');
// var i = 0
// while(i<alist.length){
//   alist[i].style.color = color;
//   i = i + 1 ;
//     }
$('a').css('color',color);
}
}




var body = {
       setColor: function(color) {
    //    document.querySelector('body').style.color=color;
     $('body').css('color', color);
       },
       setBackgroundColor:function(color){
    //   document.querySelector('body').style.backgroundColor=color;
      $('body').css('backgroundColor',color);
    }
    }
    
    
    function darkmodehandler(self){
var target = document.querySelector('body')
        if(self.value === 'DarkMode'){
          body.setBackgroundColor('black');
          body.setColor('white');
          self.value = 'day'

          Links.setColor('red');
        }else{
          body.setBackgroundColor('white');
         body.setColor('black');
          self.value = 'DarkMode'

          Links.setColor('Blue');
        }
    }