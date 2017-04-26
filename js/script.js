$(document).ready(function(){
$.fn.Slider= function(className,settings){
    this.list = $('.' + className);
    this.modal = $('.modal');
    this.close = $('.close');
    this.left = $('.left');
    this.right = $('.right');
    this.active_img = {};
    this.href = '';
	 for (var i = 0; i < this.list.length; i++) {
        this.list[i].click(function(ev){
            ev.preventDefault();
            $(this).active_img = this;
            $(this).changeImg(this.getAttribute('href'));
		})
    }
	this.right.click(function(){
		$(this).changeLeft();
	})
	this.left.click(function(){
		$(this).changeLeft();
	})
	this.close.click(function(){
		$(this).css('display','none');
        $(this).removeImg();
	})
	$(document.body).keydown(function(ev){
		if (ev.which == 27 && $(this).css('display','block')) {
            $(this).css('display','none');
            $(this).removeImg();
        }

        if (ev.which == 39 && $(this).css('display','block')) {
            $(this).changeRight();
        }

        if (ev.which == 37 && $(this).css('display','block')) {
            $(this).changeLeft();
        }
	})
	$(document.body).click(function(ev){
		  if (ev.target.classList[0] == "modal") {
            $(this).modal.css('display','none')
            $(this).removeImg();
        }
	})
	 this.changeImg = function(href) {
        var node = document.createElement("IMG");
        node.src = href;
        this.modal.children[0].appendChild(node);
        this.modal.css('display','block')
    }
	 this.removeImg = function() {
        this.modal.children[0].removeChild(this.modal.children[0].children[3]);
    }
	  this.changeRight = function() {
        if ($(this).active_img.nextElementSibling !== null) {
            this.href = $(this).active_img.nextElementSibling.getAttribute('href');
            $(this).active_img = $(this).active_img.nextElementSibling;
        } else {
            this.href = this.list[0].getAttribute('href');
            $(this).active_img = this.list[0];
        }

        this.removeImg();
        this.changeImg(this.href);
        if (setting.img_height !== 'undefined') {
            this.modal.children[0].children[3].style.width = setting.img_width + '%';
            this.modal.children[0].children[3].style.height = setting.img_height + '%';
        }
    }
	    this.changeLeft = function() {

        if ($(this).active_img.previousElementSibling !== null) {
            this.href = self.active_img.previousElementSibling.getAttribute('href');
            $(this).active_img = self.active_img.previousElementSibling;
        } else {
            this.href = this.list[this.list.length - 1].getAttribute('href');
            $(this).active_img = this.list[this.list.length - 1]
        }
        this.removeImg();
        this.changeImg(this.href);
    }
}

$('.gallery').Slider();
//Slider('.gallery');
})

	

