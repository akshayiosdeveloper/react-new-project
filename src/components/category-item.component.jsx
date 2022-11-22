import './categories.styles.css'
const CategoryItem = ({ category}) => {
    const {imageUrl,title,id} = category;
    return (
<div key={id} className="category-container">

<div style={{ 
  backgroundImage: `url(${imageUrl})`,
  backgroundRepeat: 'no-repeat',
  width:'500px' ,
  height:'240px'
}}>
  Hello World
</div>
       <div className="category-body-container">
        <h2>{title}</h2>
        <p>{'ShopNow'}</p>
       </div>
       </div>
)}
export default CategoryItem