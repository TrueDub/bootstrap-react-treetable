import parse from 'html-react-parser';

export const Utils = () => {
    const parseStringToJsx = (inputString) => {
        return parse(inputString);
    }

    return {parseStringToJsx};
}
