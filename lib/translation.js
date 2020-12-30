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
    ['아마도', 'Maybe'],
    ['사람', 'Person'],
    ['무엇', 'What'],
    ['오늘', 'Today'],
    ['친구', 'Friend'],
    ['그리', 'Not that'],
    ['너무', 'Too/So'],
    ['많', 'Many/Much'],
    ['위해', 'For'],
    ['제일', 'Most'],
    ['착해', 'Nice'],
    ['남자', 'Man'],
    ['저녁', 'Afternoon'],
    ['매우', 'Extremely/Very'],
    ['향수', 'Perfume/Nostalgia'],
    ['느끼게', 'Feels/Makes you feel'],
    ['마들다', 'Make']
]);