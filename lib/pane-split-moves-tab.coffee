'use strict'
{CompositeDisposable} = require 'atom'

class SplitMovesTab
  activate: ->
    @disposables = new CompositeDisposable()
    @disposables.add atom.commands.add 'atom-pane',
      'pane:split-up': @splitPane
      'pane:split-down': @splitPane
      'pane:split-left': @splitPane
      'pane:split-right': @splitPane

  deactivate: ->
    @disposables.dispose()

  splitPane: (e) ->
    paneView = e.currentTarget
    pane = paneView.getModel()
    process.nextTick ->
      pane.destroyActiveItem()

module.exports = new SplitMovesTab()
