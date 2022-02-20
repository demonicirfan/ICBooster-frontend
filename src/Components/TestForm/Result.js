import { useState, useEffect } from 'react';
import Pie from './Pie';

export default function Result({ percentage }) {
  const [colors, setColors] = useState({ bgColor: 'white', color: 'black' });
  useEffect(() => {
    console.log(percentage);
    if (percentage <= 25) {
      setColors({ bgColor: '#A8D0FF', color: '#3991FF' });
    } else if (percentage <= 50) {
      setColors({ bgColor: '#E0FFDB', color: '#5EFF44' });
    } else if (percentage <= 75) {
      setColors({ bgColor: '#FFF3DB', color: '#FFC822' });
    } else if (percentage <= 100) {
      setColors({ bgColor: '#FFDBDB', color: '#FF6363' });
    }
  }, []);

  return (
    <div>
      <Pie
        percentage={percentage}
        colour={colors.color}
        bgColour={colors.bgColor}
      />
    </div>
  );
}
