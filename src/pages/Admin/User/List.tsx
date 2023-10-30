import { login } from "../../../api/auth";
import TableData from "../../../components/admin/Table";


export function ListUsers() {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '3',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '4',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '5',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '6',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '2ada',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '2adas',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '2gdg',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '2et',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '2fs',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '23cs',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      login({email: 'sfs', password: 'sfs'}).then(err => console.log(err));
    return (
        <TableData title='Tabela de Usuários' dataSource={dataSource} columns={columns}/>
    )
}