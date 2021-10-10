export const getSelectedNames = (friendList) => {
    return Object.keys(friendList).reduce((result, name) => { 
        friendList[name].selected && result.push(name);
        return result;
    }, []);
}