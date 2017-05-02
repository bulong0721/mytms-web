import Ajax from '../utils/ajax';

export async function query(table, params) {
  const ajax = new Ajax().CRUD(table);
  return await ajax.select(params);
}

export async function save(table, params) {
  const ajax = new Ajax().CRUD(table);
  return await ajax.insert(params);
}

export async function remove(table, params) {
  const ajax = new Ajax().CRUD(table);
  return await ajax.delete(params);
}