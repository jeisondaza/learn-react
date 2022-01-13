import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';


function CrudApi() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://localhost:5000/santos';

  useEffect(() => {
    setLoading(true)
    api.get(url).then(res => {
      if (!res.err) {
        setDb(res);
        setError(null)
      }
      else {
        setDb(null);
        setError(res);
      }

      setLoading(false)
    })
  }, [url]);

  const createData = (data) => {
    // data.id = Date.now();

    let options = {
      headers: { "Content-Type": "application/json" },
      body: data
    }

    api.post(url, options).then(res => {
      // console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  }
  const updateData = (data) => {
    let endPoint = `${url}/${data.id}`;

    let options = {
      headers: { "Content-Type": "application/json" },
      body: data
    }

    api.put(endPoint, options).then(res => {
      if (!res.err) {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
      } else {
        setError(res);
      }
    });
  }
  const deleteData = (id) => {
    let isDelete = window.confirm('¿Desea eliminar el registro?');

    if (isDelete) {
      let endPoint = `${url}/${id}`;
      let options = {
        headers: { "Content-Type": "application/json" },
      }
      api.del(endPoint, options).then(res => {
        if (!res.err) {
          let newData = db.filter(el => el.id !== id);
          setDb(newData);
        } else {
          setError(res)
        }
      });
    } else {
      return
    }
  }

  return (
    <div>
      <h2>CRUD API</h2>
      <article className='grid-1-2'>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error  ${error.status} : ${error.statusText}`}
            bgColor={'#dc3545'}
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
}

export default CrudApi;