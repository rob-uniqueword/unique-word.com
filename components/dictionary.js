import dictionaryStyles from '../styles/dictionary.module.css';

export default function Dictionary({ dictionary }) {
    console.log('making dictionary');
    console.log(dictionary);
    return (
        <table >
            {Array.from(dictionary).map(([key,value]) => 
            (
                <tr className={dictionaryStyles.dictionaryRow}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
            ))}
        </table>
    )
}