import atom from '../lib/state';
import {store as SectionStore} from './SectionStore';

class StreamStore {
  constructor() {
    this.bindState('streams')
  }

  state = {
    active: 0,
    filter: '',
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
    var streams = this.state.data[activeSection.id];
    return streams.filter(s => s.label.match(new RegExp(this.state.filter, 'gi')))
  }

  getActive() {
    return this.state.active
  }

  getActiveStream() {
    return this.getStreams()[this.getActive()]
  }

  isActive(streamIndex) {
    var active = this.getActive();
    return streamIndex == active;
  }

  findStream(id) {
    var streams = this.getStreams();
    for (var i = 0; i < streams.length; i++) {
      if (streams[i].label == id) {
        return i;
      }
    }
  }
}

export var store = atom.createStore(StreamStore);
