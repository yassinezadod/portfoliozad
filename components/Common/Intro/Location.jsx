import { DETAILS } from '../../../constants/constants';
import { getObjectKeys } from '../../../utils/utils';

const Location = () => {
  const keys = getObjectKeys(DETAILS);
  
  const getTranslatedKey = (key) => {
    const translations = {
      'Residence': 'Morocco',
      'City': 'Agadir',
      'Education': 'Msc in Software Eng'
    };
    return translations[key] || key;
  };

  return (
    <div className='flex flex-col space-y-1 pt-6'>
      {keys.map((key, index) => {
        return (
          <div key={index} className='flex items-center justify-between border-b border-white/10 pb-1'>
            <span className='text-sm text-white font-semibold capitalize tracking-wide'>{getTranslatedKey(key)}</span>
            <span className='text-xs text-gray-300 text-right '>{DETAILS[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Location;