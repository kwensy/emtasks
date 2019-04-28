import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import firebase from 'emberfire/services/firebase';


export default Controller.extend({
	
    firebaseApp: service(),
	actions : {
		/*login: function(){
			this.firebaseApp.auth().signInWithEmailAndPassword("theprophetbek@gmail.com", "emtasks")
			.then(function(success){
				console.debug("Authentication success...");
				console.debug(success);
			}).catch(function(error) {
  				console.debug(error);
  				// ...
			});

		},*/
		addTask : function(){
			var title = this.get('title');
			var description = this.get('description');
			var date = this.get('date');

			// Create new task
			var newTask = this.store.createRecord('task',{
				
				title: title,
				description: description,
				date: new Date(date),
			});

			console.debug(newTask);
			//var user = this.firebaseApp.auth().currentUser;
			
			// save to firebase
			/*if(user){
				console.debug("Saving new task ...");
				user.reload().then(function (){
					console.debug("Relaod complete ...");
					newTask.save();
				});	
			}*/
			console.debug("Saving new task ...");
			newTask.save();
			
			
			// Clear the form
			this.setProperties({
				title: '',
				description: '',
				date: null
			});

		}
	}
});
