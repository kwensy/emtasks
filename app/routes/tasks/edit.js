import Route from '@ember/routing/route';
import { formatDate } from 'emtasks/helpers/format-date';

export default Route.extend({
	 setupController : function (controller, model) {
		this._super(controller, model);
		// prepare model date for controller to be displayed in template
  		controller.set('displayedDate', formatDate([model.get('date')]));
	},

	actions: {
		editTask(){
			this.transitionTo('tasks');
		}
	}

});
