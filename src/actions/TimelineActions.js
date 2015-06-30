import {store} from '../stores/TimelineStore';

class TimelineActions {

  setTimelineFilter(filter, resolve) {
    this.set('timelineFilter', filter)
  }

  setSliderPosition(percentage) {
    var value = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
    this.set('sliderPosition', value);
  }
}

export var actions = store.createActions(TimelineActions);
