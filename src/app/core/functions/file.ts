import * as FileSaver from 'file-saver';

/**
 * Method is use to download file.
 * @param data - Array Buffer data
 * @param type - type of the document.
 */
export const saveFile = (blob: Blob, name: string) => {
  FileSaver.saveAs(blob, name || `export-${new Date().toDateString()}.csv`);
};
