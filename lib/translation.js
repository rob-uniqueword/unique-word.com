// todo - kind of hate this. Maybe make it less terrible?
// the answers on https://stackoverflow.com/questions/43932788/wrap-multiple-strings-in-html-the-react-way look vaguely promising.
// or maybe react-markdown with a custom renderer?
export function getTranslation(html, dictionary) {
    let resultHtml = html;
    dictionary.forEach((value, key) => {
        resultHtml = resultHtml.replace(new RegExp(key,'g'), "<span class=translated>" + key + "<span class=translation>" + value + "</span></span>");
    });
    return resultHtml;
};

export const k_dictionary = new Map([
    ['안녕', 'Hello'],
    ['일기', 'Diary'],
    ['나', 'I'],
    ['한국', 'Korean'],
    ['잘', 'Well'],
    ['그래서', 'So'],
    ['것', 'Thing'],
    ['어려울', 'Difficult'],
    ['도움', 'Help'],
    ['될', 'Be'],
    ['아마도', 'Maybe']
]);