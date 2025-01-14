/*
 * This is just a temporary declaration file.
 */

/// <reference types="node" />



namespace ElectronReloader {
  interface Options {
    debug?: boolean;
    ignore?: (string|RegExp)[];
    watchRenderer?: boolean;
  }
}

function ElectronReloader(module: NodeModule, options?: ElectronReloader.Options): void;


declare module '@whitetrefoil/electron-reloader-dotfiles' {
  export = ElectronReloader;
}


interface NodeRequireFunction {
  (moduleName: '@whitetrefoil/electron-reloader-dotfiles'): typeof ElectronReloader;
}
