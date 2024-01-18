import React, { useContext, useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { HeadingH3, HeadingH4 } from '../Heading';
import { Para14, Para16 } from '../ParaGraph';
import { AiOutlineHome } from 'react-icons/ai';
import axios from 'axios';
import { UseidContext } from '../ServiceContext';
const ServiceTab = ({ setServiceTabId }) => {
  const { TabPane } = Tabs;
  const [allServicetabs, setAllServicetabs] = useState([]);
  const [filteredServicetabs, setFilteredServicetabs] = useState([]);
  const { id } = UseidContext();

  useEffect(() => {
    if (id) {
      const fetchAllServicetabs = async () => {
        try {
          const response = await axios.get(`/api/servicetab?infoId=${id}`);
          setAllServicetabs(response.data.servicetabs);
        } catch (error) {
          console.error('Error getting service tab:', error);
        }
      };
      fetchAllServicetabs();
    }
  }, [id]);

  useEffect(() => {
    const filteredData = allServicetabs.filter(tab => tab.serviceInfoId === id);
    setFilteredServicetabs(filteredData);

    if (filteredData.length > 0) {
      setServiceTabId(filteredData[0].serviceInfoId);
    }
  }, [allServicetabs, id]);

  // Check if there is any item with a non-empty title
  const hasValidTitle = filteredServicetabs.some(tab => tab.title && tab.title.trim() !== '');


  return (
    <>
      {hasValidTitle ? (
        <>
          <HeadingH3 initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }} title={'Service Information'}/>
          <Tabs defaultActiveKey="1" tabBarStyle={{ border: 'none' }}>
            {filteredServicetabs.map((item, index) => (
              <TabPane 
                tab={<span className={`flex gap-1 text-white dark:text-black`}>
                  <AiOutlineHome size={20} className='mt-1'/>
                  {item.title}
                </span>} 
                key={index + 1}
              >
                <div className={`space-y-3 `}>
                  <HeadingH4 className={"text-white dark:text-black"} title={item.heading} />
                  <Para16 className={"text-white dark:text-black"} title={item.description}/>
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-5'>
                    {item.subdata.map((subItem, subIndex) => (
                      <div className='border-t-2 p-2 shadow-md backdrop-blur-3xl' key={subIndex + 1}>
                        <Para14 className={"text-white dark:text-black"} title={subItem.description}/>
                      </div>
                    ))}
                  </div>
                </div>
              </TabPane>
            ))}
          </Tabs>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ServiceTab;
