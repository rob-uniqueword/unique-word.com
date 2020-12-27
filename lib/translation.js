// todo - kind of hate this. Maybe make it less terrible?
// the answers on https://stackoverflow.com/questions/43932788/wrap-multiple-strings-in-html-the-react-way look vaguely promising.
// or maybe react-markdown with a custom renderer?
export function getTranslation(html, dictionary) {
    let resultHtml = html;
    dictionary.forEach((value, key) => {
        //resultHtml = resultHtml.replace(key, "<Translation display='" + key + "' translation='" + value + "'/>");
        //resultHtml = resultHtml.replace(key, "<span title=" + value + ">" + key + "</span>");
        resultHtml = resultHtml.replace(key, "<span class=translated>" + key + "<span class=translation>" + value + "</span></span>");
    });
    return resultHtml;
};

export const k_dictionary = new Map([
    ['안녕', 'Hello'],
    ['일기', 'Diary'],
]);