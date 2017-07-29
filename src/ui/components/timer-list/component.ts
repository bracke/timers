import Component from '@glimmer/component';

class Timer {

	public name 	: string;
	public runtime 	: number;
	public running 	: boolean;

	constructor() {
		this.name 		= 'untitled';
		this.runtime 	= 0;
		this.running 	= false;
	}
}
export default class TimerList extends Component {
	
	timers : Array<Timer> = [new Timer()];
};