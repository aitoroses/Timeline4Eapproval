import Handler from './components/Timeline';
// In development server,
// we need to export the symbol to the window.
global.Handler = React.createFactory(Handler);
