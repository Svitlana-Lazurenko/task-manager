import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/categories/selectors';
import CategoryItem from 'components/Categories/CategoryItem/CategoryItem';
import { List } from './CategoryList.styled';

const CategoryList = () => {
  const categories = useSelector(selectCategories);

  return (
    <List>
      {categories.map(({ id, name, date }) => (
        <CategoryItem key={id} name={name} date={date} id={id} />
      ))}
    </List>
  );
};

export default CategoryList;
