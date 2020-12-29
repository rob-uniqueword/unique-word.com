import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts');
export const allPostsStartPathArray = [];
export const blogPostsStartPathArray = ['blog'];
export const kDiaryPostsStartPathArray = ['k-diary'];

async function* getFilePathArrays(pathArray) {
  const res = path.resolve(postsDirectory, ...pathArray);
  const dirents = await fs.promises.readdir(res, { withFileTypes: true });
  for (const dirent of dirents) {
    const newPathArray = pathArray.concat([dirent.name.replace(/\.md$/, '')]);
    if (dirent.isDirectory()) {
      yield* getFilePathArrays(newPathArray);
    } else {
      yield newPathArray;
    }
  }
}

export async function getPostPaths(startPathArray) {
  const results = [];
  const pathArrays = getFilePathArrays(startPathArray);

  for await (const pathArray of pathArrays) {
    results.push({
      params: {
        id: pathArray.map(string => encodeURI(string))
      }
    })
  }

  return results;
}

export async function getPostData(pathArray) {
  const res = path.resolve(postsDirectory, ...pathArray) + '.md';
  const fileContents = fs.readFileSync(res, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    pathArray,
    contentHtml,
    ...matterResult.data
  };
}

export async function getSortedPostsMetaData(startPathArray) {
  const postData = [];
  const pathArrays = getFilePathArrays(startPathArray);

  for await (const pathArray of pathArrays) {
    const res = path.resolve(postsDirectory, ...pathArray) + '.md';
    const fileContents = fs.readFileSync(res, 'utf8');
    const headers = matter(fileContents).data;

    postData.push({
      id: pathArray,
      ...headers
    });
  }

  return postData.sort((a,b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  });
}
