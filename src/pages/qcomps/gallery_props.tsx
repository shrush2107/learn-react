/* eslint-disable @next/next/no-img-element */
import { GalleryProps } from "@/types/gallery";
import {Scientist} from "@/types/gallery";

function ScientistProfile({ scientist, size = 70 }: GalleryProps) {
  const { name, imageId, profession, awards, discovery } = scientist;

  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={`https://i.imgur.com/${imageId}s.jpg`}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>Profession: {profession}</li>
        <li>Awards: {awards} </li>
        <li>Discovered:{discovery}</li>   
      </ul>
    </section>
  );
}
// Listitem components(add)
// Gallery Component that displays all profiles
export default function Gallery() {
  const scientists: Scientist[] = [
    {
      name: 'Maria Skłodowska-Curie',
      imageId: 'szV5sdG',
      profession: 'physicist and chemist',
      awards:
        '4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
      discovery: 'polonium (element)',
    },
    {
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2',
      profession: 'geochemist',
      awards: '2 (Miyake Prize for geochemistry, Tanaka Prize)',
      discovery: 'a method for measuring carbon dioxide in seawater',
    },
  ];

  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist) => (
        <ScientistProfile key={scientist.name} scientist={scientist} />
      ))}
    </div>
  );
}