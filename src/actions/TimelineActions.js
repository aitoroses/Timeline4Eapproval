import {store} from '../stores/TimelineStore';

class TimelineActions {
  setTimelineFilter(filter, resolve) {
    this.set('timelineFilter', filter)
  }
}

export var actions = store.createActions(TimelineActions);
