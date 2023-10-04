import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from 'components/Categories/CategoryList/CategoryList';
import Popup from 'components/Popup/Popup';
import {
  selectIsShowEditCategoryPopup,
  selectIsShowDeleteCategoryPopup,
  selectIsShowAddCategoryPopup,
} from 'redux/popup/selectors';
import { setStatusAddCategoryPopup } from 'redux/popup/slice';
import { fetchCategories } from 'redux/categories/operations';
import { selectIsLoading } from 'redux/categories/selectors';

const styles = {
  container: {
    padding: '30px 0',
    backgroundColor: 'rgb(34, 90, 17)',
  },
  button: {},
};

export default function Categories() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isShowEditCategoryPopup = useSelector(selectIsShowEditCategoryPopup);
  const isShowAddCategoryPopup = useSelector(selectIsShowAddCategoryPopup);
  const isShowDeleteCategoryPopup = useSelector(
    selectIsShowDeleteCategoryPopup
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleOnAddCategory = e => {
    dispatch(setStatusAddCategoryPopup(true));
  };

  return (
    <div style={styles.container}>
      <title>Categories of tasks</title>
      <button type="button" style={styles.button} onClick={handleOnAddCategory}>
        Add
      </button>
      <div>{isLoading && 'Request in progress...'}</div>
      <CategoryList />
      {isShowDeleteCategoryPopup && <Popup></Popup>}
      {isShowEditCategoryPopup && <Popup></Popup>}
      {isShowAddCategoryPopup && <Popup></Popup>}
    </div>
  );
}
