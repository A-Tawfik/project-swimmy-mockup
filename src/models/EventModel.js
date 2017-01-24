import {observable} from 'mobx';
import RSVPModel from './RSVPModel';

export default class EventModel {
	store;
	id;
	@observable name;
	@observable datestring;
	@observable description;
	@observable location;
	@observable rsvps = [];
	@observable group_id;
	//TODO: should we include a tagline to be shown in the group search view?

	constructor(store, {id, name, datestring, description, location, rsvps, group_id}) {
		this.store = store;
		this.id = id;
		this.name = name;
		this.datestring = datestring;
		this.description = description;
		this.location = location;
		this.group_id = group_id;

		rsvps.map((rsvp) => {
			// Dictionary by user_id (unique value) 
			this.rsvps.push(new RSVPModel(this.store, rsvp.id, rsvp.user_id, rsvp.event_id, rsvp.attending));
		});
	}
}