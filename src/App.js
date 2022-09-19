import React from 'react';
import User from './components/User'
import './App.css';

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(0);
  const [usersPerPage, setUsersPerPage] = React.useState(2);
  const [totalPages, setTotalPages] = React.useState([]);
  const pagesCount = totalPages / usersPerPage;
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPages / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  const lastPage = pageNumbers.length
  console.log(pageNumbers)
  const nextPage = () => {
    setPage(page + 1)
  }
  const previousPage = () => {
    setPage(page - 1)
  }
  React.useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}&per_page=${usersPerPage}`).then((res) => res.json()).then((json) => {
      setUsers(json.data);
      setTotalPages(json.total)
    }).catch(() => {
      console.log.warn();
      alert('ошибка при получении данных')
    }).finally(() => {
      setLoading(false);
    })
  }, [page])
  return (
    <div className="App">
      {
        users.map((el) => <User {...el} />)
      }
      <div className="pagination">
        {
          pageNumbers.map((el, index) => <button className={page === index ? 'active' : ''} onClick={() => setPage(index)}>{el}</button>)
        }
      </div>
    </div>
  );
}

export default App;
