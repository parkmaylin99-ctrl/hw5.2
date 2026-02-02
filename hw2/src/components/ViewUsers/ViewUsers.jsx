import { memo } from 'react';
import './ViewUsers.css'
import jane from '../../assets/jane.jpg'
import nettspend from '../../assets/nettspend.jfif'
import hollis from '../../assets/holis.jpg'
import xaviersobased from '../../assets/xaviersobased.jpg'
import wifiskeleton from '../../assets/wifiskeleton.jfif'
import nateSibe from '../../assets/Nate sib.jfif'
import yungLean from '../../assets/lean.jfif'
import bladee from '../../assets/bladee.jfif'
import ecco2k from '../../assets/ecco.jfif'
import hellp from '../../assets/hellp.jfif'
import damonR from '../../assets/damon r.jfif'
import bhertuy from '../../assets/bhertuy.jpg'
import ear from '../../assets/ear.jpg'
import frankOcean from '../../assets/frankOcean.jpg'
import beabadoobee from '../../assets/beabadoobee.jpg'
import jaydes from '../../assets/jaydes.jfif'
import buckshot from '../../assets/buckshot.jpg'
import feng from '../../assets/feng.jpg'
import kempachii from '../../assets/kempachii.jpg'
import rommulas from '../../assets/rommulas.jpg'
import def from '../../assets/def.jfif'

const ViewUsers = () => {
      const artists_list = [
        {
        img: jane,
        name: 'jane remover',
        age: 22,
        genre: 'shoegaze / digicore',
        listeners: '1.1M',
        premium: true,
    },
    {
        img: nettspend,
        name: 'nettspend',
        age: 18,
        genre: 'underground / plugg',
        listeners: '1.4M',
        premium: true,
    },
    {
        img: hollis,
        name: '2hollis',
        age: 24,
        genre: 'alternative trap',
        listeners: '2.2M',
        premium: true,
    },
    {
        img: xaviersobased,
        name: 'xaviersobased',
        age: 22,
        genre: 'underground trap',
        listeners: '550K',
        premium: true,
    },
    {
        img: wifiskeleton,
        name: 'wifiskeleton',
        age: 'unknown',
        genre: 'experimental / trap',
        listeners: '80K',
        premium: true,
    },
    {
        img: nateSibe,
        name: 'nate sibe',
        age: 'unknown',
        genre: 'experimental hip-hop',
        listeners: '45K',
        premium: true,
    },
    {
        img: yungLean,
        name: 'yung lean',
        age: '29',
        genre: 'cloud rap / art pop',
        listeners: '5.8M',
        premium: true,
    },
    {
        img: bladee,
        name: 'bladee',
        age: 31,
        genre: 'cloud rap / hyperpop',
        listeners: '2.1M',
        premium: true,
    },
    {
        img: ecco2k,
        name: 'ecco2k',
        age: 31,
        genre: 'art pop / electronic',
        listeners: '1.2M',
        premium: true,
    },
    {
        img: hellp,
        name: 'The hellp',
        age: 30,
        genre: 'noise pop',
        listeners: '150K',
        premium: true,
    },
    {
        img: damonR,
        name: 'damon r.',
        age: 23,
        genre: 'indie / electronic',
        listeners: '120K',
        premium: false,
    },
    {
        img: bhertuy,
        name: 'bhertuy',
        age: 'unknown',
        genre: 'underground / glitch',
        listeners: '30K',
        premium: false,
    },
    {
        img: ear,
        name: 'ear',
        age: 'unknown',
        genre: 'experimental',
        listeners: '15K',
        premium: false,
    },
    {
        img: frankOcean,
        name: 'frank ocean',
        age: 38,
        genre: 'r&b / neo soul',
        listeners: '34M',
        premium: false,
    },
    {
        img: beabadoobee,
        name: 'beabadoobee',
        age: 25,
        genre: 'indie pop / rock',
        listeners: '14.5M',
        premium: false,
    },
    {
        img: jaydes,
        name: 'jaydes',
        age: 19,
        genre: 'pluggnb / r&b',
        listeners: '2.5M',
        premium: false,
    },
    {
        img: buckshot,
        name: 'buckshot',
        age: 24,
        genre: 'horrorcore / trap',
        listeners: '180K',
        premium: false,
    },
    {
        img: feng,
        name: 'feng',
        age: 19,
        genre: 'indie / bedroom pop',
        listeners: '90K',
        premium: false,
    },
    {
        img: kempachii,
        name: 'kempachii',
        age: 26,
        genre: 'underground trap',
        listeners: '70K',
        premium: false,
    },
    {
        img: rommulas,
        name: 'rommulas',
        age: 24,
        genre: 'experimental trap',
        listeners: '40K',
        premium: false,
    },
      ]
  return (
    <div className='main'>
      <h1 className="main-title">Musicians</h1>
      <div className="artists-container">
        {artists_list.map((item) => (
          <div onClick={() => {console.log(item);}} className='artist-card' key={item.name}>
            {item.premium && <p className='prem'>Premium</p>}
            <img 
              className='artist-img' 
              src={item.img || def} 
              alt={item.name} 
            />
            
            <div className="artist-info">
              <h3>{item.name}</h3>
              <p className="age">
                {item.age !== 'unknown' ? `${item.age} years old` : 'Age: unknown'}
              </p>
              <p className="genre"><b>genre:</b> {item.genre}</p>
              <p className="listeners"><b>listeners:</b> {item.listeners}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
    }


export default ViewUsers;