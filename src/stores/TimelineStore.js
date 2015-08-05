import atom from '../lib/state';

const DAYS = 0;
const MONTHS = 1;
const YEARS = 2;

var eventGroups = [
  [{
    title: "Max Mustermann approved as medical your event...",
    subject: "Michel",
    date: "2 hours ago",
    kind: "Event",
    description: `Congress in London from 26th JUNE 2015 <br>
      We do this event in London because it's very important and invited many <br>
      HCP of others VIP from the medical sector ...`,
    actions: ["Preview", "More", "Share"]
  },
  {
    title: "Max Mustermann approved as medical your event...",
    subject: "Michel",
    date: "2 hours ago",
    kind: "Event",
    description: `Congress in London from 26th JUNE 2015 <br>
      We do this event in London because it's very important and invited many <br>
      HCP of others VIP from the medical sector ...`,
    actions: ["Preview", "More", "Share"]
  }],
  [{
    title: "Max Mustermann approved as medical your event...",
    subject: "Michel",
    date: "2 hours ago",
    kind: "Event",
    description: `Congress in London from 26th JUNE 2015 <br>
      We do this event in London because it's very important and invited many <br>
      HCP of others VIP from the medical sector ...`,
    actions: ["Preview", "More", "Share"]
  },
  {
    title: "Max Mustermann approved as medical your event...",
    subject: "Michel",
    date: "2 hours ago",
    kind: "Event",
    description: `Congress in London from 26th JUNE 2015 <br>
      We do this event in London because it's very important and invited many <br>
      HCP of others VIP from the medical sector ...`,
    actions: ["Preview", "More", "Share"]
  }],
  [{
    title: "Max Mustermann approved as medical your event...",
    subject: "Michel",
    date: "2 hours ago",
    kind: "Event",
    description: `Congress in London from 26th JUNE 2015 <br>
      We do this event in London because it's very important and invited many <br>
      HCP of others VIP from the medical sector ...`,
    actions: ["Preview", "More", "Share"]
  },
  {
    title: "Max Mustermann approved as medical your event...",
    subject: "Michel",
    date: "2 hours ago",
    kind: "Event",
    description: `Congress in London from 26th JUNE 2015 <br>
      We do this event in London because it's very important and invited many <br>
      HCP of others VIP from the medical sector ...`,
    actions: ["Preview", "More", "Share"]
  }],
]

class TimelineStore {
  constructor() {
    this.bindState('timeline')
  }

  state = {
    timelineFilter: 0,
    sliderPosition: 50,
    events: eventGroups
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

  getEvents() {
    return this.state.events;
  }
}

export var store = atom.createStore(TimelineStore);
