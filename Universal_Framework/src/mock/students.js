let lists = []
for (let i = 0; i < 100; i++) {
  lists.push({"id": + i, "name": "name" + i, "sex": 'sex' + i, "age": 'age' + i, "address": 'address' + i})
}
console.info(lists)
const studentLists = {
  "code": 20000,
  "message": "success",
  "data": {
    "list": lists
  }
}
export default studentLists
