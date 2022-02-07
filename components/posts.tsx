import React from "react";
import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";

export default function Posts({ postData }: { postData: IPostData[] }) {
  return (
    <ul className={utilStyles.list}>
      {postData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id.join("/")}>
          <Link href={`/posts/${id.join("/")}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            {id.join("/")} - <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
  );
}

export interface IPostData {
  id: string[];
  title: string;
  date: string;
}
