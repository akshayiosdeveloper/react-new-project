import './categories.styles.css';
import CategoryItem from './category-item.component';

const Directory = ({categeories}) => {
    return (
        <div className="categeories-container">
        {categeories.map ((category) => (
      <CategoryItem key={category.id} category={category}/>
        ) )}

    </div>);  
}
export default Directory 