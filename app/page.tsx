import Link from "next/link";

export default function Home() {
  return (<ul>
    <Link href={'/page1'}><li>page1</li></Link>
    <Link href={'/page2'}><li>page2</li></Link>
    <Link href={'/page3'}><li>page3</li></Link>
    <Link href={'/page4'}><li>page4</li></Link>
    <Link href={'/page5'}><li>page5</li></Link>
    <Link href={'/page6'}><li>page6</li></Link>
    <Link href={'/page7'}><li>page7</li></Link>
  </ul>);
}
