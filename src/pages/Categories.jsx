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
  },
  button: {
    height: 40,
    margin: '30px auto 0',
    padding: '10px 20px',

    display: 'block',
    overflow: 'hidden',

    backgroundColor: 'rgb(193, 255, 252)',
    border: '2px solid rgb(2, 211, 200)',
    borderRadius: 10,

    color: 'rgb(125, 202, 0)',
    fontSize: 15,
    fontWeight: 600,

    textTransform: 'uppercase',
    letterSpacing: 6,
  },
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
      <div>{isLoading && 'Request in progress...'}</div>
      <CategoryList />
      <button type="button" style={styles.button} onClick={handleOnAddCategory}>
        Add
      </button>
      {isShowDeleteCategoryPopup && <Popup></Popup>}
      {isShowEditCategoryPopup && <Popup></Popup>}
      {isShowAddCategoryPopup && <Popup></Popup>}
    </div>
  );
}
