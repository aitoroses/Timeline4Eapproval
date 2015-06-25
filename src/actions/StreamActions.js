import {store} from '../stores/StreamStore';

class StreamActions {
  setActive(id, resolve) {
    this.set('active', id);
    resolve(id);
  }
}

export var actions = store.createActions(StreamActions);
