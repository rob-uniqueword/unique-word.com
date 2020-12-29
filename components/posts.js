import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

export default function Posts({ postData }) {
    return (
        <ul className={utilStyles.list}>
            {postData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id.join('/')}>
                    <Link href={`/posts/${id.join('/')}`}>
                        <a>{title}</a>
                    </Link>
                    <br/>
                    <small className={utilStyles.lightText}>
                        {id.join('/')} - <Date dateString={date}/>
                    </small>
                </li>          
            ))}
        </ul>
    )
}