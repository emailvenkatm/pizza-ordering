'use client'

import React from 'react';

interface OptionProps {
  title: string;
  options: { name: string, price: number }[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const OptionSelector: React.FC<OptionProps> = ({ title, options, selectedOption, setSelectedOption }) => {
  return (
    <fieldset className='mt-6'>
      <span className='text-2xl font-bold'>{title}</span>
      {options.map((option) => (
        <div key={option.name} className='grid grid-cols-3 w-96 items-center mt-2'>
          <div className='col-span-2'>
            <label className="cursor-pointer grid grid-cols-4">
              <input
                id={option.name}
                required
                type='radio'
                className='radio col-span-1'
                value={option.name}
                checked={selectedOption === option.name}
                onChange={() => setSelectedOption(option.name)}
              />
              <span className="label-text col-span-3">{option.name}</span>
            </label>
          </div>
          <span className='col-span-1 label-text'>${option.price}</span>
        </div>
      ))}
    </fieldset>
  );
}

export default OptionSelector;
