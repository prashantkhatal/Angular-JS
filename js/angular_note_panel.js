app.controller('myController', function(){
	this.variable = 'yesss';
	this.id = 3;
	this.heading = 'Note Panel';

	this.bucket = [{id:1,name:'Jeans'}, {id:2,name:'book'}];

	this.deleteItem = function(id) {
		this.bucket = this.bucket.filter(function(item){
				return item.id != id;
		});
	};

	this.addItem = function() {
		this.bucket.push({id:this.id, name: this.item_name});
		this.item_name = '';
		this.id++;
	};

});