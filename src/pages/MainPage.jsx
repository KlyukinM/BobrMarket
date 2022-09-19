import '../App.css';
import AsideMenu from '../components/AsideMenu';
import {useEffect, useState} from 'react'
import { useFetching } from '../components/hooks/useFetching';
import GoodsService from '../components/API/GoodsService';
import ProductList from '../components/ProductList';
import { Header } from '../components/Header';
import Loader from '../components/UI/Loader/Loader';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/Pagination/Pagination';
import { useParams } from 'react-router-dom';
import HeaderSelect from '../components/UI/HeaderSelect/HeaderSelect';


function MainPage() {
  // Состояние для изменения выбранной категории
  const [categorySelected, setCategorySelected] = useState()
  // Состояние для изменения списка товаров
  const [products, setProducts] = useState([])
  // Состояние для изменения количества страниц (для постраничной пагинации)
  const [totalPages, setTotalPages] = useState(0)
  // Состояние для изменения номера отображаемой страницы (для постраничной пагинации)
  const [page, setPage] = useState(1)
  // Количество отображаемых товаров на странице
  const limit = 8
  // Состояние для изменения количества пропускаемых товаров (для постраничной пагинации)
  const [skip, setSkip] = useState(0)  
  // Хук useParams для определения категории на основе адреса страницы
  let params = useParams()      
  // Состояние для сортировки
  const [selectedSort, setSelectedsort] = useState('')

  // Функция для получения с сервера товаров всех категорий
  const [fetchAllProducts, isAllProductsLoading, allProductsError] = useFetching( async() => {
    // Проверяем действительно ли свойство category объекта params undefined, чтобы предотвратить ошибочные срабатывания
    if (!params.category) {
      // Запрос на сервер через метод getAll компонента GoodsService  
      const response = await GoodsService.getAll(limit, skip)
      // Помещаем полученный массив товаров в соответствующее состояние
      setProducts(response.products)
      // Получаем общее количество товаров 
      const totalProducts = response.total
      // Вычисляем из общего количества товаров и значения лимита количество страниц через компонент getPageCount
      setTotalPages(getPageCount(totalProducts, limit))       
    }    
  })

  // Функция для получения с сервера товаров выбранной категории
  const [fetchProductsOfCategory, isProductsOfCategoryLoading, productsOfCategoryError] = useFetching( async() => {
    const response = await GoodsService.getProductsOfCategory(categorySelected)
    setProducts(response.products)
    const totalProducts = response.total
    setTotalPages(getPageCount(totalProducts, limit))     
  })

  // Функция для изменения выбранной категории в случае изменения значения переменной params
  const paramsChange = () => {     
    setCategorySelected(params.category)     
  }
  
  // Хук useEffect, который вызывает функцию paramsChange при каждой смене значения переменной params
  useEffect(() => {paramsChange()} , [params])

  // Функция для отправки запроса на сервер при смене выбранной категории
  const categoryChange = () => {    
    // Если не выбрана категория, то запрашиваем все товары, в противном случае товары выбранной категории
    !categorySelected ? fetchAllProducts() : fetchProductsOfCategory()
    // Сбрасываем номер страницы, чтобы при возврате на страницу начать с 1 страницы
    page !== 1 && changePage(1)    
    // Плавно прокручиваем скролл вверх
    window.scrollTo({ behavior: 'smooth', top: '0px' })  
  }

  // Хук useEffect, который вызывает функцию categoryChange при каждой смене выбранной категории categorySelected
  useEffect(() => {categoryChange(params.category)}, [categorySelected])   

  // Функция для обновления списка товаров при смене значения переменной skip (для постраничной пагинацмм)
  const skipChange = () => {    
    // Срабатывает только если значение переменной skip больше limit
    if (skip >= limit & skip !== 0) {      
      // Запрашивает список всех товаров (с учетом обновленного значения skip)
      fetchAllProducts()      
    }
  }

  // Хук useEffect, который вызывает функцию skipChange при каждой смене значения переменной skip
  useEffect(() => {skipChange()}, [skip])

  // Функция для смены страницы при постраничной пагинации
  const changePage = (page) => {    
    // Устанавливаем полученное значение номера выбранной страницы в соответствующее состояние
    setPage(page)
    // Высчитываем значение переменной skipValue
    const skipValue = (page - 1) * limit
    // Вносим полученную переменную skipValue в состояние для смены значения переменной skip
    setSkip(skipValue)   
    // Плавно прокручиваем скролл вверх
    window.scrollTo({ behavior: 'smooth', top: '0px' })  
  }

  const sortProducts = () => {
    
  }


  return (
    <div className="App">
      <Header />
      {(allProductsError || productsOfCategoryError) && <h1>Error: {allProductsError || productsOfCategoryError}</h1>}      
      <div className='content_wrapper'>
        <AsideMenu categorySelected={categorySelected} />
        <div>
          <HeaderSelect 
            value={selectedSort}            
            onChange={sortProducts}            
            defaultValue='Sort by'        
                  options={[
                    {value: 'price-to-high', name: 'Price: Low to High'},
                    {value: 'price-to-low', name: 'Price: High to Low'},
                    {value: 'rating-to-high', name: 'Rating: Low to High'},
                    {value: 'rating-to-low', name: 'Rating: High to Low'},
                  ]}
        
          
          />
          {isAllProductsLoading || isProductsOfCategoryLoading 
            ? <Loader />
            : <ProductList products={products} />}    
          {totalPages > 1 && <Pagination 
            page={page} 
            changePage={changePage} 
            totalPages={totalPages} 
          />  }
        </div>           
      </div>                    
    </div>
  );
}

export default MainPage;
