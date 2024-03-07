/**
 * Helper function used in ActionsLayout
 * get the last word of the current Page
 * the word should be 'send','add' or 'extract'
 *
 * @param {String} path
 * @returns
 */
export function getLastParam(path: string) {
  const pathToArray = path.split("/");
  const activePage = pathToArray[pathToArray.length - 1];
  return activePage;
}
1;
