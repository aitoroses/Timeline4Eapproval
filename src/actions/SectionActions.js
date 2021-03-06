import {store} from '../stores/SectionStore';

// Streams
import {store as StreamStore} from '../stores/StreamStore';
import {actions as StreamActions} from './StreamActions';

class SectionActions {
  setActive(id, resolve) {
    // When the section changes we should match an stream of the new section.
    // Find one matching
    var stream = StreamStore.getActiveStream();
    setTimeout(() => {
      if (stream) {
        StreamActions.setActive(stream.label);
      } else {
        StreamActions.setActive(0);
      }
    });

    this.set('active', id);
    resolve(id);
  }
}

export var actions = store.createActions(SectionActions);
