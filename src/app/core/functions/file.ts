import * as FileSaver from 'file-saver';

/**
 * Method is use to download file.
 * @param data - Array Buffer data
 * @param type - type of the document.
 */
export const saveFile = (blob: Blob, filename?: string) => {
  FileSaver.saveAs(blob, filename || `export-${new Date().toDateString()}`);
};
