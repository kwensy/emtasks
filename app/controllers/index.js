import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import firebase from 'emberfire/services/firebase';


export default Controller.extend({
	
    firebaseApp: service(),
	actions : {
		login : function(){
			this.firebaseApp.auth().signInWithEmailAndPassword("theprophetbek@gmail.com", "emtasks")
			.then(function(success){
				console.log(success);
			}).catch(function(error) {
  				console.log(error);
  				// ...
			});

		}
	}
});
