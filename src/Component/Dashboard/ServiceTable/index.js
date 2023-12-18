import React, { useRef, useState } from 'react';
import { Table, Input, Space } from 'antd';
import Button from '@/Component/Button';
import { FaFilter } from 'react-icons/fa6';

const ServiceTable = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const inputRef = useRef(null);

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${title}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            text="Search"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            className=''
            style={{ width: 90 }}
          />
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }} text={"Reset"}/>
           
        </Space>
      </div>
    ),
   
    filterIcon: (filtered) => (
      <FaFilter style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current && inputRef.current.select(), 100);
        }
      },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <span style={{ color: '#1890ff' }}>{text}</span>
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name', 'Name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      ...getColumnSearchProps('age', 'Age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address', 'Address'),
    },
  ];

  return (
    <Table style={{ marginTop: "10px" }} columns={columns} dataSource={data} />
  );
};

export default ServiceTable;
