'use babel';
var disposable;

export function activate() {
  disposable = atom.commands.add('atom-pane', {
    'pane:split-up': splitPane,
    'pane:split-down': splitPane,
    'pane:split-left': splitPane,
    'pane:split-right': splitPane
  });
}

export function deactivate() {
  disposable.dispose();
}

function splitPane({currentTarget: paneView}) {
  process.nextTick(function destroyPane() {
    paneView.getModel().destroyActiveItem();
  });
}
