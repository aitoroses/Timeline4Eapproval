import {store} from '../stores/StreamStore';

class StreamActions {
  setActive(id, resolve) {
    // When number, it must be the index
    if (typeof id == "number") {
      this.set('active', id);
      resolve(id);
      return;

    // When string, will be found by label name with "findStream"
    } else if (typeof id == "string"){
      var streamId = store.findStream(id);

      if (streamId) {
        this.set('active', streamId);
        resolve(streamId);
      } else {
        // In case not found by name, we will reset
        this.set('active', 0);
        resolve(0);
      }
    }
  }

  setFilter(filter, resolve) {
    this.set('filter', filter);
    resolve(filter);
  }

  toggleEditMode() {
    this.set('editMode', !this.editMode);
  }

  addNewStream(stream, resolve) {
    var streams = store.getRawStreams();
    streams.push({label: stream});
    resolve(stream);
  }
}

export var actions = store.createActions(StreamActions);
