import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <div className={`flex justify-start flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => {
        return <div key={stat.id} className={`flex flex-1 justify-center items-center flex-row m-3 ${index === stats.length - 1 ? '' : 'border-r-2'}`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
      })}
    </div>
  )
}

export default Stats