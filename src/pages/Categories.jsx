import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import AddButton from 'components/AddButton/AddButton';
import CategoryList from 'components/Categories/CategoryList/CategoryList';
import { fetchCategories } from 'redux/categories/operations';
import { selectIsLoading } from 'redux/categories/selectors';

const styles = {
  container: {
    padding: '30px 0',
    backgroundColor: 'rgb(34, 90, 17)',
  },
};

export default function Categories() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <Helmet>
        <title>Categories of tasks</title>
      </Helmet>
      <AddButton />
      <div>{isLoading && 'Request in progress...'}</div>
      <CategoryList />
    </div>
  );
}
