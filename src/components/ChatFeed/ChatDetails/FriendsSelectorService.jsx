/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */

export function getSelectedNames(friendList) {
  return Object.keys(friendList).reduce((result, name) => {
    friendList[name].selected && result.push(name);
    return result;
  }, []);
}
