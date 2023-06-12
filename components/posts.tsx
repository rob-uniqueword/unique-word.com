import React from "react";
import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";
import { IPost } from "../lib/posts";

export default function Posts({ postData }: { postData: IPost[] }) {
  return (
    <ul className={utilStyles.list}>
      {postData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id.join("/")}>
          <Link href={`/posts/${id.join("/")}`}>
            {title}
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            {id.join("/")} - <Date dateString={date!} />
          </small>
        </li>
      ))}
    </ul>
  );
}
