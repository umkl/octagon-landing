import { parseISO, format } from "date-fns";

//just returns input in form of time element
export default function Date({dateString}: {dateString: string}){
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date,'LLLL d, yyyy')}</time>
}