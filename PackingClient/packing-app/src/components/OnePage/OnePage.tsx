import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface OnePageProps {}

const OnePage: FC<OnePageProps> = () => (
  <div className="OnePage">
    OnePage Component
    <Link to={'/AddList'}><button>new trip</button></Link>

  </div>
);

export default OnePage;
