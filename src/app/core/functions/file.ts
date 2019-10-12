import * as FileSaver from 'file-saver';

/**
 * Method is use to download file.
 * @param data - Array Buffer data
 * @param type - type of the document.
 */
export const saveFile = (blob: Blob) => {
  FileSaver.saveAs(blob, `export-${new Date().toDateString()}`);
};
