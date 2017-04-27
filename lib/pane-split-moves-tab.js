'use babel';
import {
  CompositeDisposable,
} from 'atom';

var disposables;

function splitTab({currentTarget: tabBarView}) {
  process.nextTick(function destroyTab() {
    var tab = tabBarView.querySelector('.right-clicked');
    tab.pane.destroyItem(tab.item);
  });
}

export function activate() {
  disposables = new CompositeDisposable(
    atom.commands.add('.tab-bar', {
      'tabs:split-up': splitTab,
      'tabs:split-down': splitTab,
      'tabs:split-left': splitTab,
      'tabs:split-right': splitTab,
    })
  );
}

export function deactivate() {
  disposables.dispose();
}
