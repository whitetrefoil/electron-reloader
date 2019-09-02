/*
 * This is just a temporary declaration file.
 */

/// <reference types="node" />

export = ElectronReloader


namespace ElectronReloader {
  interface Options {
    debug?: boolean;
    ignore?: (string|RegExp)[];
    watchRenderer?: boolean;
  }
}

function ElectronReloader(module: NodeModule, options?: ElectronReloader.Options): void;


interface NodeRequireFunction {
  (moduleName: 'electron'): typeof ElectronReloader;
}
