import atom from '../lib/state';

const DAYS = 0;
const MONTHS = 1;
const YEARS = 2;

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

  getMaxFilterValue() {
    var f = this.getActiveFilter();
    switch(f) {
      case DAYS:
        return 31;
      case MONTHS:
        return 12;
      case YEARS:
        return 5;
    }
  }

  getActualFilterValue() {
    return Math.floor(this.getMaxFilterValue() * this.getSliderPosition() / 100);
  }
}

export var store = atom.createStore(TimelineStore);
