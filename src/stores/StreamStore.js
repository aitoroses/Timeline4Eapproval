import atom from '../lib/state';
import {store as SectionStore} from './SectionStore';

class StreamStore {
  constructor() {
    this.bindState('streams')
  }

  state = {
    active: 0,
    data: {
      1: [
        {label: "News"},
        {label: "People"},
        {label: "Others"},
        {label: "Required"},
        {label: "Declined"},
        {label: "Waiting"}
      ],
      2: [
        {label: "People"},
        {label: "News"}
      ]
    }
  }

  getStreams() {
    var activeSection = SectionStore.getActive();
    return this.state.data[activeSection.id];
  }

  getActive() {
    return this.state.active
  }

  getActiveStream() {
    return getStreams()[this.getActive()]
  }

  isActive(streamIndex) {
    var active = this.getActive();
    return streamIndex == active;
  }
}

export var store = atom.createStore(StreamStore);
