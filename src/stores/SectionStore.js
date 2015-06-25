import atom from '../lib/state';

class SectionStore {
  constructor() {
    this.bindState('sections')
  }

  state = {
    active: 1,
    data: [
      {label: "Me", id: 1},
      {label: "OU", id: 2}
    ]
  }

  getButtons() {
    return this.state.data;
  }

  getActive() {
    return this.state.data.filter(i => i.id == this.state.active)[0];
  }

  isSectionActive(section) {
    return this.state.active == section.id;
  }
}

export var store = atom.createStore(SectionStore);
