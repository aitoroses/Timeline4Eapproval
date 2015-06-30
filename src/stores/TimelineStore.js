import atom from '../lib/state';

class TimelineStore {
  constructor() {
    this.bindState('timeline')
  }

  state = {
    timelineFilter: 0,
    sliderPosition: 50
  }

  getActiveFilter() {
    return this.state.timelineFilter || 0;
  }

  getSliderPosition() {
    return this.state.sliderPosition;
  }

}

export var store = atom.createStore(TimelineStore);
