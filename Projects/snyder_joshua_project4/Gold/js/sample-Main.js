$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(f){

		var myForm = $('#newRcpForm'),
			formErrorLink = $('#errorsLink');

		    myForm.validate({			
			invalidHandler: function(form, validator) {
				/*formErrorLink.click();*/
				/*var html = '';
				for (var key in validator.submitted) {
					var label = $('label[for^="'+ key +'"]').not('[generated]');
					var legend = label.closest('fieldset').find('select-ui')
					var fieldName = legend.length ? legend.text() : label.text();
					console.log(fieldName);
					html += '<li>'+ fieldName +'</li>';
				};
				$('#errors ul').html(html);*/
			},
			submitHandler: function() {
				var data = myForm.serializeArray();
					storeData(data);
					
			}

			});
	
	//any other code needed for addItem page goes here

});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function(){
		/*$.each(json, function(i, field) {
			$('#rcpDispPage').append(field.value + " ");
		})*/
};

var getData = function(data){
		/*$.each(data, function(i, field) {
			$('#rcpDispPage').append(field.value + " ");
		})*/

};

var storeData = function(data, key){
		if(!key) {
			var id = Math.floor(Math.random()*100000001);
		} else {
			id = key;
		}

	localStorage.setItem(id, JSON.stringify(data));
}; 

var	deleteItem = function(){
			
};
					
var clearLocal = function(){

};

/*$('#viewRcps').click(getData);*/
