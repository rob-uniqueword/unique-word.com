import path from 'path'
import fs from 'fs'

const rootImageDirectory = path.join(process.cwd(), 'public', 'images');
export const foodImageDir = 'food';

async function* getImagePathsRecursive(dir) {
  const res = path.resolve(rootImageDirectory, dir);
  const dirents = await fs.promises.readdir(res, { withFileTypes: true });
  for (const dirent of dirents) {
    const newDir = dir + '/' + dirent.name;
    if (dirent.isDirectory()) {
      yield* getImagePaths(newDir);
    } else {
      yield newDir;
    }
  }
}

export async function getImageHrefs(dir) {
    const imageHrefs = [];
    
    for await (const imagePath of getImagePathsRecursive(dir)) {
        imageHrefs.push('/images/' + imagePath);
    }

    return imageHrefs;
}