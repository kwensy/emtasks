import Controller from '@ember/controller';

export default Controller.extend({
	actions : {
		editTask : function(id){
			// Declared to use inside udpating promise resolution
			var cntrler = this;
			var title = this.get('model.title');
			var description = this.get('model.description');
			var date = this.get('displayedDate');

			// Update new task
			this.store.findRecord('task', id).then(function(task){
				task.set('title', title);
				task.set('description', description);
				task.set('date', new Date(date));

				//console.debug(task);
				console.debug("Updating task ...");
				//save to firebase
				task.save();
				/* DON'T WORK, action -> propagate the action to route
				cntrler.transitionTo('tasks');*/
			});
			return true;
		}
	}
});
