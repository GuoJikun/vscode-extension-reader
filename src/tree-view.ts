import * as vscode from "vscode";

export class EonReaderProvider implements vscode.TreeDataProvider<EonReader> {
  constructor(private workspaceRoot: string) {}

  getTreeItem(element: EonReader): vscode.TreeItem {
    return element;
  }

  getChildren(element?: EonReader): Thenable<EonReader[]> {
    if (!this.workspaceRoot) {
      vscode.window.showInformationMessage("No eon reader in empty workspace");
      return Promise.resolve([]);
    }
    return Promise.resolve([]);
  }
}

class EonReader extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command
  ) {
    super(label, collapsibleState);
  }

  contextValue = "eon";
}
