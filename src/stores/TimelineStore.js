import atom from '../lib/state';

class TimelineStore {
  constructor() {
    this.bindState('timeline')
  }

  state = {
    timelineFilter: 0
  }

  getActiveFilter() {
    return this.state.timelineFilter || 0;
  }

}

export var store = atom.createStore(TimelineStore);
