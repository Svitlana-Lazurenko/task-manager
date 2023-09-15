import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/categories/selectors';
import CategoryItem from 'components/Categories/CategoryItem/CategoryItem';
import { List } from './CategoryList.styled';

const CategoryList = () => {
  const categories = useSelector(selectCategories);

  return (
    <List>
      {categories.map(({ _id, name, createdAt, numberOfTasks }) => (
        <CategoryItem
          key={_id}
          id={_id}
          name={name}
          date={createdAt}
          numberOfTasks={numberOfTasks}
        />
      ))}
    </List>
  );
};

export default CategoryList;
