

const parseJSON = string => {
    try {
        const json = JSON.parse(string);
        return (typeof json === 'object') ? json : null;

    } catch (e) {
        return null;
    }
}


export default { parseJSON };