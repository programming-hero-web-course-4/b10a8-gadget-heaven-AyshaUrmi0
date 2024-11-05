import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Allcategory = ({ CategoryName }) => {
  console.log("CategoryName:", CategoryName);
  
  return (
    <div className='grid grid-cols-1 gap-4 p-3 bg-white rounded-md shadow-md '>
      {
        CategoryName.map((category) => {
          return (
            <NavLink 
            key={category.category_id} 
            to={`/defaultCategories/${category.category_name}`}
            className={({ isActive }) => 
              `rounded-full btn btn-dark ${isActive ? 'bg-purple-500' : ''}`
            }
          >
            {category.category_name}
          </NavLink>
          
          );
        })
      }
    </div>
  );
};

Allcategory.propTypes = {
  CategoryName: PropTypes.array.isRequired
};

export default Allcategory;
