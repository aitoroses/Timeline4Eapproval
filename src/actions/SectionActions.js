import {store} from '../stores/SectionStore';

class SectionActions {
  setActive(id, resolve) {
    this.set('active', id);
    resolve(id);
  }
}

export var actions = store.createActions(SectionActions);
