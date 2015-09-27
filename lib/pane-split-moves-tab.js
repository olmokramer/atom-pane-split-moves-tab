'use babel';
import {
  CompositeDisposable,
} from 'atom';

var disposables;

export function activate() {
  disposables = new CompositeDisposable(
    atom.commands.add('atom-pane', {
      'pane:split-up': splitPane,
      'pane:split-down': splitPane,
      'pane:split-left': splitPane,
      'pane:split-right': splitPane,
    }),

    atom.commands.add('.tab-bar', {
      'tabs:split-up': splitTab,
      'tabs:split-down': splitTab,
      'tabs:split-left': splitTab,
      'tabs:split-right': splitTab,
    }),
  );
}

export function deactivate() {
  disposables.dispose();
}

function splitPane({currentTarget: paneView}) {
  process.nextTick(function destroyPaneItem() {
    paneView.getModel().destroyActiveItem();
  });
}

function splitTab({currentTarget: {spacePenView: tabBarView}}) {
  process.nextTick(function destroyTab() {
    tabBarView.closeTab(tabBarView.children('.right-clicked')[0]);
  });
}
