function Task(task) {
	this.task = task;
}

Task.prototype.fillTask = function() {
	return "<h4>" + this.task + "</h4>";
}

function resetFields() {
	$("input#newTask").val("");
}

$(document).ready(function() {

	$("form#entry").submit(function(event) {
		event.preventDefault();
		var inputTask = $("input#newTask").val();
		var takenTask = new Task (inputTask);

		$("#taskList").append(takenTask.fillTask());
		$("#taskItem").append(takenTask.fillTask());
		resetFields();
	});

	$("form#display").submit(function(event) {
		event.preventDefault();



		$("input:checkbox[name=symptom]:checked").each(function(){
			var symptom = $(this).val();
			$("#taskList").append(symptom + "<br>");

			// $("#stresstest").hide();
			var userResponses = [];
			$("input:checkbox[name=symptom]:checked").each(function(){
				var boxcount = $(this).val();
				userResponses.push(boxcount);
			});
		});
	});
});
