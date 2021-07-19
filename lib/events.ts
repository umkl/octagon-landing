import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(),'events');

export function getSortedEventsData(){
  const fileNames = fs.readdirSync(postsDirectory);
  const allEventsData = fileNames.map(fileName =>{
    const id = fileName.replace(/\.md$/,'');
    const fullPath = path.join(postsDirectory,fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...(<{date: string; title:string}>matterResult.data)
    }
  })
  return allEventsData.sort((a,b)=>{
    if(a.date < b.date){
      return 1;
    }else {
      return -1;
    }
  })
}

export function getAllEventIds(){
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName=>{
    return {
      params:{
        id: fileName.replace(/\.md$/,'')
      }
    }
  })
}

export async function getEventData(id:string){
  const fullPath = path.join(postsDirectory,`${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()
  return {
    id,
    contentHtml,
    ...(matterResult.data as {date:string; title:string})
  }
}

export async function getStaticProps() {
  const allPostsData = getSortedEventsData()
  return {
    props: {
      allPostsData
    }
  }
}